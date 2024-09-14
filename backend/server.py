from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess
import shlex

def escape_input(user_input):
    # Use shlex.quote to escape the input safely
    return shlex.quote(user_input)


app = Flask(__name__)
CORS(app, resources={r"/chatbox": {"origins": "http://localhost:3000/"}})  # This allows all origins for the /chatbox route

@app.route('/chatbox', methods=['OPTIONS', 'POST'])
def chat():
    if request.method == 'OPTIONS':
        return jsonify({'message': 'CORS preflight response'})
    
    user_input = request.json.get('prompt', 'default prompt')
    escaped_input = escape_input(user_input)

    try:
        result = subprocess.run(
            ['ollama', 'run', 'mistral', escaped_input],
            capture_output=True, text=True, shell=True
        )
        
        model_output = result.stdout.strip()

        filtered_output = "\n".join(    
            line for line in model_output.splitlines()
            if not line.startswith("failed to get console mode")
        )

        if result.returncode != 0:
            return jsonify({"error": "Subprocess failed", "output": result.stderr.strip()}), 500

        return jsonify({"response": filtered_output})

    except subprocess.CalledProcessError as e:
        return jsonify({"error": str(e), "output": e.output}), 500

if __name__ == '__main__':
    app.run(debug=True)

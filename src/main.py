# Main entry point for the application
import os
import sys
from flask import Flask, render_template
from dotenv import load_dotenv

load_dotenv()  # Load environment variables

app = Flask(__name__, template_folder='../frontend/templates', static_folder='../frontend/static')

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
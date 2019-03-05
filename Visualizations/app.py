# "H:\BIT Year 3\Web-3\Visualizations\app.py"

from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/Waluigi')
def index():
    myName = "Waluigi"
    return render_template('jquery.html', name=myName)
    
if __name__ == "__main__":
    app.run(debug=True, port=8080)
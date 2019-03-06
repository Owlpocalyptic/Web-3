# "H:\BIT Year 3\Web-3\Visualizations\app.py"

from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
@app.route('/home')
@app.route('/Home')
@app.route('/Index')
@app.route('/index')
def index():
    title = 'Home'
    return render_template('index.html', title=title)

@app.route('/Inspirations')
@app.route('/insp')
@app.route('/Insp')
@app.route('/inspirations')
def inspirations():
    title = 'Inspirations'
    return render_template('inspirations.html', title=title)

@app.route('/Waluigi')
@app.route('/waluigi')
@app.route('/ourlordandsaviour')
def waluigiPage():
    title = 'WAAAAAAAAA'
    return render_template('jquery.html', title=title)
    
if __name__ == "__main__":
    app.run(debug=True, port=8080)
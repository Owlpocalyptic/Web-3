# "H:\BIT Year 3\Web-3\Visualizations\app.py"

from flask import Flask
from flask import render_template

app = Flask(__name__)

pages = [['Home', 'Home'], ['Inspirations', 'Inspirations'], ['Waluigi', 'Testing Grounds'], ['Void', 'The Other Void']]

@app.route('/')
@app.route('/home')
@app.route('/Home')
@app.route('/Index')
@app.route('/index')
def Home():
    title = 'Home'
    header = 'Project Hootlife'
    linkName = 'Home'
    return render_template('index.html', title=title, header=header, linkName=linkName, pages=pages)

@app.route('/Inspirations')
@app.route('/insp')
@app.route('/Insp')
@app.route('/inspirations')
def Inspirations():
    title = 'Inspirations'
    header = 'Inspirations'
    linkName = 'Inspirations'
    return render_template('inspirations.html', title=title, header=header, linkName=linkName, pages=pages)

@app.route('/Waluigi')
@app.route('/waluigi')
@app.route('/ourlordandsaviour')
def Waluigi():
    title = 'WAAAAAAAAA'
    header = 'Z O I N K S'
    linkName = 'Waluigi'
    return render_template('jquery.html', title=title, header=header, linkName=linkName, pages=pages)

@app.route('/Void')
def Void():
    title = 'THE VOID ETERNAL'
    header = ''
    linkName = 'Void'
    return render_template('jquery.html', title=title, header=header, linkName=linkName, pages=pages)

if __name__ == "__main__":
    app.run(debug=True, port=8080)
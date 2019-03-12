# "H:\BIT Year 3\Web-3\Visualizations\app.py"

from flask import Flask
from flask import render_template
from mongoengine import *

app = Flask(__name__)


db = connect('DB_WALUIGI')

class User(Document):
    email = StringField()
    first_name = StringField()
    last_name = StringField()

class Country(Document):
    name = StringField()

db.drop_database('DB_WALUIGI')

nick = User(first_name='Nick', last_name='Mulrooney')
nick.save()

for u in User.objects:
    if not u['email'] or u['email'] == '':
        u['email'] = u['first_name'] + u['last_name'] + '@owlsite.com'
        u.save()

pages = [['Home', 'Home'], ['Inspirations', 'Inspirations'], ['Waluigi', 'Testing Grounds'], ['Void', 'The Other Void']]

@app.route('/home')
@app.route('/Home')
@app.route('/Index')
@app.route('/index')
@app.route('/')
def Home():
    title = 'Home'
    header = 'Project Hootlife'
    linkName = 'Home'
    return render_template('index.html', title=User.objects(first_name='Nick').first()['email'], header=header, linkName=linkName, pages=pages)

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
@app.route('/ourlordandsaviour')
@app.route('/waluigi')
def Waluigi():
    title = 'WAAAAAAAAA'
    header = 'Z O I N K S'
    linkName = 'Waluigi'
    return render_template('jquery.html', title=title, header=header, linkName=linkName, pages=pages)

@app.route('/Void')
@app.route('/void')
def Void():
    title = 'THE VOID ETERNAL'
    header = ''
    linkName = 'Void'
    france = Country(name='land of the baguettes')
    france.save()
    return render_template('jquery.html', title=title, header=Country.objects().first()['name'], linkName=linkName, pages=pages)

if __name__ == "__main__":
    app.run(debug=True, port=8080)
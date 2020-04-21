from flask import Flask
from flask import render_template


app = Flask(__name__)

@app.route('/')
def hello():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/test_func')
def get_ses():
 	return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)

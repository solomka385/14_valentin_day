from flask import Flask, render_template

app = Flask(__name__, template_folder='templates')

# Главная страница
@app.route("/")
def home():
    return render_template('index.html')

# Страница с коллажем
@app.route("/collage")
def collage():
    return render_template('collage.html')

# Страница с валентинкой
@app.route("/valentine")
def valentine():
    return render_template('valentine.html')

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=80)
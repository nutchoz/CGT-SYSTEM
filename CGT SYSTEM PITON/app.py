from flask import Flask, render_template
import pymysql

app = Flask(__name__)

# MySQL connection
conn = pymysql.connect(
    host="localhost",
    user="root",
    password="root",
    database="cgtdatabase"
)

@app.route("/")
def dashboard():
    return render_template("main.html")

@app.route("/gate-entry")
def gate_entry():
    return render_template("gEntry.html")

if __name__ == "__main__":
    app.run(debug=True)

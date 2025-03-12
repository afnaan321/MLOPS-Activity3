from flask import Flask, request, jsonify
from flask_cors import CORS
import database  # Import database functions

app = Flask(__name__)
CORS(app)
database.init_db()

@app.route('/users', methods=['GET'])
def get_users():
    users = database.get_users()
    return jsonify(users)

@app.route('/add_user', methods=['POST'])
def add_user():
    data = request.json
    database.add_user(data['name'])
    return jsonify({"message": "User added successfully"}), 201

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)

# from flask import Flask, jsonify, request
# from flask_cors import CORS
# import sqlite3
# import os

#      app = Flask(__name__)
#      CORS(app)  # Allow cross-origin requests from React

#      # Initialize SQLite database
#      def init_db():
#          with sqlite3.connect('favorites.db') as conn:
#              cursor = conn.cursor()
#              cursor.execute('''
#                  CREATE TABLE IF NOT EXISTS favorites (
#                      id INTEGER PRIMARY KEY AUTOINCREMENT,
#                      city TEXT UNIQUE NOT NULL
#                  )
#              ''')
#              conn.commit()

#      # Run init_db when starting the app
#      if not os.path.exists('favorites.db'):
#          init_db()

#      @app.route('/api/favorites', methods=['GET'])
#      def get_favorites():
#          with sqlite3.connect('favorites.db') as conn:
#              cursor = conn.cursor()
#              cursor.execute('SELECT city FROM favorites')
#              cities = [row[0] for row in cursor.fetchall()]
#          return jsonify(cities)

#      @app.route('/api/favorites', methods=['POST'])
#      def add_favorite():
#          city = request.json.get('city')
#          if not city:
#              return jsonify({'error': 'City is required'}), 400
#          try:
#              with sqlite3.connect('favorites.db') as conn:
#                  cursor = conn.cursor()
#                  cursor.execute('INSERT INTO favorites (city) VALUES (?)', (city,))
#                  conn.commit()
#              return jsonify({'message': f'{city} added to favorites'}), 201
#          except sqlite3.IntegrityError:
#              return jsonify({'error': f'{city} already in favorites'}), 400

#      if __name__ == '__main__':
#          app.run(port=5000, debug=True)
from flask import Flask

# Create the Flask application instance
app = Flask(__name__)

# Import routes to register them with the application
from src import routes

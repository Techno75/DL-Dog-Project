import time
from flask import Flask, render_template, url_for, request, session, redirect, escape

app = Flask(__name__)
app.secret_key = "STANFORD"

# @app.route('/upload-images')
# def get_image():
#     return {'time': time.time()}
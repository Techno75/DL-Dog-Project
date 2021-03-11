#!/bin/bash
FILE=".init"
if [ -f "$FILE" ]; then
    cd ./server
    gnome-terminal -x sh -c "FLASK_APP=app.py FLASK_ENV=development flask run; bash" &
    cd ../client
    gnome-terminal -x sh -c "npm start; bash"
else 
    touch .init
    cd ./server
    python3 -m venv venv
    . venv/bin/activate
    pip install -r requirements.txt
    gnome-terminal -x sh -c "FLASK_APP=app.py FLASK_ENV=development flask run; bash" &
    cd ../client && npm i
    gnome-terminal -x sh -c "npm start; bash"
fi
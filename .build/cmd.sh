# Required list
sudo apt install python3.10-venv

cd src && django-admin startproject server
cd server && python3 manage.py startapp coreapp
cd ..
npx create-next-app@latest client --typescript --eslint # Manual setup required
cd client && npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
python3 -m venv env
source env/bin/activate

env/bin/python -m pip install pip pip-tools rav --upgrade
env/bin/rav run install
rav run freeze

# Get start
rav run server
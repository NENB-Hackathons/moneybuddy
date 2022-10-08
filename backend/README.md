# backend
Backend API for our project
The system also uses FastAPI, Railway, Passlib, SQLalchemy, PostgreSQL and JWT
Sqlalchemy was used to connect to a postgresql user info database running on railway.app.
FastAPI is used to run the backend web server, which communicates with the frontend.
PassLib is used for encrypting/decrypting user passwords in the SQL database and pyjwt is used for decrypting JS user tokens for secure login. 

## Usage
Install depends

```
pip3 install -r requirements.txt
```

Run server
```
python3 main.py
```

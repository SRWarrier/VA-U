@echo off

REM Step 1: cd into virtual environment scripts folder and activate Python virtual environment
echo Activating Python virtual environment...
cd ".venv\Scripts"
call activate.bat

REM Step 2: cd into the backend folder and run Django server in a new command prompt window
echo Starting Django server...
start /min cmd /k "cd ..\..\backend && python manage.py runserver"

REM Step 3: cd into the frontend folder and run npm server in a new command prompt window
echo Starting npm server...
start /min cmd /k "cd ..\..\frontend && npm run dev"


REM Optional: Pause the script to keep the terminal window open after completion
echo Servers running....
wait 100

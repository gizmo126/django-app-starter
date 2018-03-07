# HiHungry
development environment setup using: http://realdjango.herokuapp.com/

## Versions
- django 1.8.18
- python 2.7.13
- ~~mySQL 5.7.21~~ postgresql 10.3
- boostrap 3.0.0
- jQuery 1.10.1

## Prereq
SETTING UP POSTGRES:
- install: http://postgresapp.com/
- adding user: https://www.digitalocean.com/community/tutorials/how-to-use-postgresql-with-your-django-application-on-ubuntu-14-04

INSTALL PIP:

## Setup
- Clone repository
- Run `cd hihungry` and `cd mysite`
- Run `pip install -r requirements.txt`
- Run `python manage.py runserver`
- Navigate to `http://127.0.0.1:8000/'` to view initial landing page
- Navigate to `http://127.0.0.1:8000/admin` for admin view using `username: admin` and `password: password`

## Notes
- If you install any additional packages, run `pip freeze > requirements.txt` and commit
- Log encountered errors in `references.txt`

## Committing
- `git pull` and merge conflicts
- `git add .`
- `git commit -m "message"`
- `git push`

## Deploying to Heroku
- https://simpleisbetterthancomplex.com/tutorial/2016/08/09/how-to-deploy-django-applications-on-heroku.html
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Deployment
- update schemas

## Errors
- postgresql getting hung up (no admin): `brew services stop postgresql` then restart from gui

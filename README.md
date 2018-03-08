# django-app-starter
development environment setup using: http://realdjango.herokuapp.com/

## Versions
- django 1.8.18
- python 2.7.13
- ~~mySQL 5.7.21~~ postgresql 10.3
- boostrap 3.0.0
- jQuery 1.10.1

## SETTING UP POSTGRESQL:
1. install: http://postgresapp.com/
2. run `sudo mkdir -p /etc/paths.d && echo /Applications/Postgres.app/Contents/Versions/latest/bin | sudo tee /etc/paths.d/postgresapp`
3. open 'psql' and `CREATE DATABASE hihungry_db;`
4. `CREATE USER myprojectuser WITH PASSWORD password';`
5. `ALTER USER admin WITH SUPERUSER`
    - exit your psql instance by running `\q`
6. https://www.digitalocean.com/community/tutorials/how-to-use-postgresql-with-your-django-application-on-ubuntu-14-04
7. download db and run this to import into local db `psql hihungry_db < dbexport.pgsql`
8. `python manage.py migrate`
9. EXPORTING YOUR DB: `pg_dump hihungry_db > dbexport.pgsql`

## INITIAL SETUP INSTRUCTIONS
1. 'git clone'
2. 'cd HiHungry'
3. 'pip install virtualenv'
4. 'virtualenv --no-site-packages env'
5. 'source env/bin/activate' to activate virtual environment, you should see (env) at beginning of cmd
      -'deactivate' to deactivate your virtual environment
6. 'pip install -r requirements.txt'
7. 'python manage.py check' to see issues
8. 'python manage.py runserver' to run application
9. 'git status' and 'git remote -v'

## Committing
0. If you installed any additional python packages, run `pip freeze > requirements.txt`
1. `git pull` and merge conflicts
2. `git add .`
3. `git commit -m "message"`
4. `git push`
5. issues:
  - https://stackoverflow.com/questions/9529078/how-do-i-use-git-reset-hard-head-to-revert-to-a-previous-commit
  - https://stackoverflow.com/questions/19085807/please-enter-a-commit-message-to-explain-why-this-merge-is-necessary-especially

## COMMITTING CODE:
1. 'git status'
2. 'git pull' and merge
3. 'git add .'
4. 'git commit -m <message>'
5. 'git push'

## PUSHING TO HEROKU:
0. 'heroku git:remote -a hihungry'
1. commit code to github repository first
2. 'git push heroku master'

## END:
- - postgresql getting hung up (no admin): `brew services stop postgresql` then restart from gui
- don't forget 'deactivate' to deactivate your virtual environment

# django-app-starter
- development environment setup using: http://realdjango.herokuapp.com/
- originally created Django stack for group project but scratched for LAMP stack: see hihungry

## Versions
- django 1.8.18
- python 2.7.13
- ~~mySQL 5.7.21~~ postgresql 10.3
- boostrap 3.0.0
- jQuery 1.10.1

## SETTING UP POSTGRESQL:
1. install: http://postgresapp.com/
2. run `sudo mkdir -p /etc/paths.d && echo /Applications/Postgres.app/Contents/Versions/latest/bin | sudo tee /etc/paths.d/postgresapp`
3. open 'psql' and `CREATE DATABASE <db_name>;`
4. `CREATE USER myprojectuser WITH PASSWORD password';`
5. `ALTER USER admin WITH SUPERUSER`
    - exit your psql instance by running `\q`
6. https://www.digitalocean.com/community/tutorials/how-to-use-postgresql-with-your-django-application-on-ubuntu-14-04
7. download db and run this to import into local db `psql <db_name> < dbexport.pgsql`
8. `python manage.py migrate`
9. EXPORTING YOUR DB: `pg_dump <db_name> > dbexport.pgsql`

## INITIAL SETUP INSTRUCTIONS
1. `git clone`
2. `cd HiHungry`
3. `pip install virtualenv`
4. `virtualenv --no-site-packages env`
5. `source env/bin/activate` to activate virtual environment, you should see (env) at beginning of cmd
      -`deactivate` to deactivate your virtual environment
6. `pip install -r requirements.txt`
7. make sure that `settings_local.py` is renamed to just `settings.py` and rename the original `settings.py` to `settings_heroku.py`
7. `python manage.py check` to see issues
8. `python manage.py runserver` to run application

## COMMITTING TO GITHUB
0. If you installed any additional python packages, run `pip freeze > requirements.txt`,
      then `git remote set-url origin https://github.com/USERNAME/REPOSITORY.git` and check with `git remote -v`
1. `git status`
2. `git pull` and merge conflicts
3. `git add .`
4. `git commit -m "message"`
5. `git push`

## PUSHING TO HEROKU:
0. `heroku git:remote -a <your project>`
1. commit code to github repository first
2. `git push heroku master`
* make sure that `settings.py` is the heroku version

## END:
- postgresql getting hung up (no admin): `brew services stop postgresql` then restart from gui
- don't forget `deactivate` to deactivate your virtual environment

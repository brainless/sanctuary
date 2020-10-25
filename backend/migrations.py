#!/usr/bin/env python
from migrate.versioning.shell import main

if __name__ == '__main__':
    main(repository='db_migrations', url='sqlite:///sanctuary.db', debug='False')

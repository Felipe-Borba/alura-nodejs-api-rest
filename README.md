# Notes

## Sensitive Data

In folder config put a json file named: `default.json`

Ex:

```json
{
    "mysql": {
        "database": "connection name",
        "user": "user name",
        "password": "*****",
        "host": "localhost ip"
    },
    "api": {
        "port": "3000"
    }
}
```

## Basics

To initialize project

```gcc
    npm init
```

*inside api-petShop folder*.

and to run `npm start`

## How to create table in mysql from terminal

```gcc
    $ mysql -u root -h 127.0.0.1 -p
    Enter Password: *****
    ...
    $ create database alura-nodejs;
```

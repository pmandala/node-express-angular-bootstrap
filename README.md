# Garuda Web Application

## Pre Build - Install all npm and bower dependencies

```
npm install
```

## Build the application

```
./grunt
```

## Run the application in production mode on NodeJS server

** Start the server **

```
node serve.js
```

** Browser URL **
```
http://localhost:8080/
```


## Run in development mode

```
./grunt serve
```

This will launch a WebApplication on port **9000** that will update on code changes.

## Testing

**Test the application. This will run the unit tests with karma.**

```
./grunt test
``` 

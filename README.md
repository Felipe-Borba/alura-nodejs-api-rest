# alura-nodejs-api-rest
 code of alura, nodejs training

# annotations:

$ npm init 
create node project

https://www.npmjs.com/ 
you cam search packages here

in this training is is needed: https://www.npmjs.com/package/express

to run:
$ node index.js

Basic script:
in package.js add "start": "command", in script
and to run this script type
$ npm start 

to increment this script you can install nodemon: https://www.npmjs.com/package/nodemon
and install it only in dev mode:
$ npm install --save-dev nodemon

to add it in script modify package.js
"scripts": {
    "start": "nodemon index.js",
    ...
  },

this tool allow to automatically restarting the application when file changes in the directory

to make easy load my routes in other files we gonna need consign: https://www.npmjs.com/package/consign
$ npm i consign
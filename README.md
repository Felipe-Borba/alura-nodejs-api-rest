# alura-nodejs-api-rest
 code of alura, nodejs training

# notes:

````
$ npm init 
````
create node project

https://www.npmjs.com/ 
you cam search packages here

in this training is needed: https://www.npmjs.com/package/express

to run:

$ node index.js

---
Basic script:
in package.js add "start": "command", in script
and to run this script type

$ npm start 

---
to increment this script (make auto reload) you can install nodemon: https://www.npmjs.com/package/nodemon
and install it only in dev mode:

$ npm install --save-dev nodemon

to add it in script modify package.js
````json
"scripts": {
    "start": "nodemon index.js",
    [...]
  },
````

---
this tool allow to automatically restarting the application when file changes in the directory

---
to make easy load my routes in other files we gonna need consign: https://www.npmjs.com/package/consign

$ npm i consign

---
library body-parser

$ npm i body-parser

used to parse html body requests

---
add database to the project mysql

$ npm install mysql

---
lib to convert time

$ npm i moment

---
## ~~file system~~ deprecated (now with end point)
*read a image and copy synchronously*

To simply test this part run:
```
$ node .\file_system\fileUpload.js
```
from root folder

## 03.Service
*Simulate my api calling another api*

To run this service api:
```
$ node .\index.js
```
inside service folder

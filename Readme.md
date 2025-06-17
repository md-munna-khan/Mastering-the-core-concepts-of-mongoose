GitHub Link: https://github.com/Apollo-Level2-Web-Dev/advanced-note-app-with-mongoose/tree/module-6



In this module, we’ll dive deep into Mongoose, one of the most powerful and widely-used Object Data Modeling (ODM) libraries for MongoDB in the Node.js ecosystem.



If you're working with MongoDB, Mongoose makes your life easier by offering a schema-based solution to model your application data with built-in type checking, validation, and a rich set of features for querying and transforming data.

Throughout this module, you'll:



Understand what Mongoose is and why it’s essential for MongoDB projects.
Set up Mongoose in a real-world Note-taking App project.
Create schemas and models, define required fields and types.
Perform core CRUD operations: Create, Read, Update, and Delete notes.
Explore schema options like timestamps and versionKey.
Learn how to structure your project professionally using models, routes, services, and controllers.
Integrate TypeScript with Mongoose for type safety and scalability.
Build a complete User model with interfaces and CRUD functionalities.


By the end of this module, you’ll not only master Mongoose’s core features but also build a solid foundation for building scalable, maintainable, and type-safe MongoDB applications.

Let’s get started on the path to becoming a MongoDB + Mongoose pro! 💪

## 17-1 What is Mongoose and Why Use It with MongoDB
![alt text](image.png)
#### Why Learn Mongoose?
Simplifies MongoDB operations with built-in schema validation.
Reduces boilerplate code for database interactions.
Supports middleware for pre/post operations.
Well-suited for Node.js applications.

## 17-2 Setting Up Mongoose in Note App Project
## 17-2 Setting Up Mongoose in Note App Project

[Mongoose Official Docs](https://mongoosejs.com/docs/index.html)

#### Installation

- **Step-1 :** initiate

```
npm init -y
```

- **Step-2 :** Install Typescript In Dev Dependency. Dev Dependency means This package will not be used in production. It will be used in development time. Ts has no works in live site, its just for developers.

```
npm install -D typescript
```

- **Step-3 :** Install Express and Mongoose as Main Dependency since we will need it in production as well. Install The Types declaration Of Express as well

```
npm install express mongoose
```

```
npm i --save-dev @types/express
```

- **Step-4 :** Install Ts globally

```
npm install -g typescript
```

- **Step-5 :** Bring the Typescript Config File

```
 tsc --init
```

- **Step-6 :** Set the Ts and js file directory in tsconfig.json file

```json
"rootDir": "./src/"
"outDir": "./dist/"
```

- **Step-7 :** Create Folders and files. all application related file will be in application folder. Server file will handle the server related tasks and app related tasks will be in app.ts. server.ts and app.ts are the entry point like index.js we have separated the files. app.ts is the entry point of application and server.ts is the entry point of server.

- **Step-8 :** Install MongoDB

```
npm install mongodb
```

- **Step-9 :** Install TS-NODE-DEV instead of using nodemon(restarting server for any changes in dist folder js files) and tsc-w(typescript Compiler).

```
npm i ts-node-dev --save-dev
```

This will directly run the server on typescript. no need to transpile to js anymore.

- **Step-9 :** Lets write a script for the running command of Ts node dev

```json
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

- Run the server

```
npm run dev
```

#### App.ts

```js
import express, { Application, NextFunction, Request, Response } from "express";
const app: Application = express();
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome To Todo App");
});
export default app;
```

#### Server.ts

```js
import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";

let server: Server;

const PORT = 5000;

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://sazid-mongo:sazid-mongo@cluster0.cjbmdks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected To Mongodb Using Mongoose!");
    server = app.listen(PORT, () => {
      console.log(`APP IS LISTENING ON PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
```

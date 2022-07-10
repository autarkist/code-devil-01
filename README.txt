json-server

1. install
npm install -g json-server

2. Create a db.json file with some data
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}

3. json-server --watch db.json --port 3002

https://www.npmjs.com/package/json-server#getting-started

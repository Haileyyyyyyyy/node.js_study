var http = require('http');
var fs = require('fs');
var url=require('url'); //url이라는 모듈을 사용할것이다 라고 노드js에게 알려준

var app = http.createServer(function(request,response){
    var _url = request.url
    var queryData=url.parse(_url,true).query;

    var pathname =url.parse(_url,true).pathname;

    //console.log(url.parse(_url,true).pathname);
    if(pathname==='/'){
      if(queryData.id===undefined){

        fs.readFile(`data/${queryData.id}`,'utf8',function(err,description){
          var title = 'Welcome';
          var description='Hello node.js'
          var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <ol>
              <li><a href="/?id=HTML">HTML</a></li>
              <li><a href="/?id=CSS">CSS</a></li>
              <li><a href="/?id=Java">JavaScript</a></li>
            </ol>
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>

          `;
          response.writeHead(200);
          response.end(template);
        });
      }else{
        fs.readFile(`data/${queryData.id}`,'utf8',function(err,description){
          var title = queryData.id;
          var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <ol>
              <li><a href="/?id=HTML">HTML</a></li>
              <li><a href="/?id=CSS">CSS</a></li>
              <li><a href="/?id=Java">JavaScript</a></li>
            </ol>
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>

          `;
          response.writeHead(200);
          response.end(template);


      });
    }
    }else{
      response.writeHead(404);
      response.end('not found');
    }



  });




app.listen(3000);

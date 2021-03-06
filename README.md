Hur används HTTP-protokollet när du surfar in på en websida?
```
HTTP is an application layer protocol. A web browser is a HTTP client that sends a request to a HTTP server 
(web server) through Universal Resource Identifier (URI), which is used to identify resources. The request 
also consists of methods, headers and body. The server processes processes the request after receiving it and 
then sends response that consists of response code and appropriate data with headers and body. This is called 
'Request Response Model'.
Example of URI: https://www.w3schools.com/nodejs/default.asp
Example of path: "/nodejs/default.asp"
Example of HTTP method: GET
Example of HTTP Headers: "Content-Type: application/json" (specifies the format of the request that is sent),
"Accept: application/json" (specifies the format of the response)
Example of HTTP Response Code:500 (Internal Server Error)
```
Beskriv HTTP-protokollets vanligaste metoder och vad de gör.
```
The most common HTTP methods are:
1. GET: The GET method requests a representation of the specified resource. Requests using GET should only retrieve 
data and will not cause any changes, which is termed as 'idempotence'.
Example: curl -i -H "Content-Type:application/json" http://api.softhouse.rocks/users
2. POST: The POST method is used to submit an entity to the specified resource, often causing a change in state or 
side effects on the server.
Example: curl -i -X POST -H "Content-Type:application/json"
localhost:3000/users -d '{"name":"Rajib"}'
3. DELETE: The DELETE method deletes the specified resource and send only response code but no response body.
Example: curl -X DELETE localhost:3000/users/1
4. PUT: The PUT method replaces all current representations of the target resource with the request body. If there is 
an already existing resource, it will be modified; if there is no existing resource, then the server can create the 
resource.
Example: curl -X PUT localhost:3000/posts/3 -H "ContentType:application/json" -d '{"title": "LNU", "body": "Informatics"}'
5. PATCH: The PATCH method is used to apply partial modifications to a resource.
Example: curl -X PATCH localhost:3000/posts/3 -H "ContentType:application/json" -d '{"title": "Linnaeus University"}'
```
"http://localhost:3000/users" är en URI, beskriv vilka delar den består av och vad de kallas.
```
1. http - is the Scheme
2. //localhost:3000 - is the Authority
3. /users - is the Path
```
På vilka tre sätt kan man skicka in parametrar i en HTTP-request? Ge exempel med curl.
```
It is possible to send parameters in a HTTP request in two different ways.
Example: 
1. curl -X PUT localhost:3000/posts/3 -H "ContentType:application/json" -d '{"title": "LNU", "body": "Informatics"}'
Here the parameter can be accessed by using req.params.id.
2. curl -X PATCH localhost:3000/posts/?postId=3 -H "ContentType:application/json" -d '{"title": "Linnaeus University"}'
Here the parameter can be accessed by using req.query.postId.
```
Feedback
```
The course is very useful and well structured.
The practice excercise was also very effective in understanding the fundamental concepts.
```

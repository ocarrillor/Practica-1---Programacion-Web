var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello world\n');
}).listen(1337, '127.0.0.1');

/* Al ejecutar el comando de "node app.js" parece como que la terminal se queda trabada, 
pero lo que pasa en realidad es que se esta ejecutando el servidor y podemos terminar este proceso presionando "Ctrl + C".
Al entrar a la pagina vemos el mensaje "Hello world" y con las "Herramientas para el desarrollador" en la seccion de "Red" 
en el apartado de "Headers" podemos apreciar la siguiente informacion:
	
GET http://localhost:1337/
Estado         200 OK
Versión        HTTP/1.1
Transferido    169 B (tamaño 12 B)


Encabezados de la respuesta (157 B):
Connection:	keep-alive
Content-Type:	text/plain
Date:	Mon, 21 Mar 2022 06:21:57 GMT
Keep-Alive:	timeout=5
Transfer-Encoding:	chunked
*/
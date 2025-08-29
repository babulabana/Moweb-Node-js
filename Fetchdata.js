
const http = require('http');


http.createServer((req, res) => {
  fetch('https://jsonplaceholder.typicode.com/comments')

    .then(response => response.json())

    .then(data => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data)); 
    })

    .catch(error => {
      console.error('Error:', error);
      res.end('Internal Server Error');
    });

}).listen(3080, () => {

  console.log(`Server running at http://localhost:3080`);
  
});

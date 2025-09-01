const http = require('http');


const PORT = 3000;


const parseRequestBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
      try {
        const parsed = JSON.parse(body);
        resolve(parsed);
      } catch (e) {
        reject(e);
      }
    });
  });
};

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

 
  res.setHeader('Content-Type', 'application/json');

  
  if (url === '/api/data') {
    if (method === 'GET') {
    
      res.writeHead(200);
      res.end(JSON.stringify({ message: 'GET request successful' }));

    } else if (method === 'POST') {
      try {
        const body = await parseRequestBody(req);
        res.writeHead(201);
        res.end(JSON.stringify({ message: 'POST request received', data: body }));
      } catch (error) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }

    } else if (method === 'PUT') {
      try {
        const body = await parseRequestBody(req);
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'PUT request received', updatedData: body }));
      } catch (error) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }

    } else if (method === 'DELETE') {
      res.writeHead(200);
      res.end(JSON.stringify({ message: 'DELETE request received' }));
      
    } else {
      res.writeHead(405);
      res.end(JSON.stringify({ error: 'Method not allowed' }));
    }

  } else {
    
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Route not found' }));
  }
});


server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

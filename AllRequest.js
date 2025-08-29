const http = require('http');

// Define port
const PORT = 3000;

// Utility to parse JSON body (for POST/PUT requests)
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

// Create server
const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  // Set JSON response header
  res.setHeader('Content-Type', 'application/json');

  // Routing and Method Handling
  if (url === '/api/data') {
    if (method === 'GET') {
      // GET request
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
    // 404 Not Found
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Route not found' }));
  }
});

// Start server
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

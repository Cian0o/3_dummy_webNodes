const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 80;

const mime = { '.html': 'text/html', '.jpg': 'image/jpeg' };

http.createServer((req, res) => {
  const file = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(__dirname, file);
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'text/plain' });
    res.end(data);
  });
}).listen(PORT, () => console.log(`App Node 2 running on http://localhost:${PORT}`));

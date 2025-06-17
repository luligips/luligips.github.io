
const express = require('express');
const fs      = require('fs');
const path    = require('path');
const cors = require('cors');
const app       = express();

app.use(cors());

const PORT      = process.env.PORT || 3000;
const ROOT      = __dirname;
const FILES_DIR = path.join(ROOT, 'files');
const HTML_DIR  = path.join(ROOT, 'html');

// 1) Serve your HTML, CSS, JS, images, etc.
app.use(express.static(HTML_DIR));       // `/document-center.html`, etc.
app.use('/js',    express.static(path.join(ROOT,'js')));
app.use('/style', express.static(path.join(ROOT,'style')));
app.use('/images',express.static(path.join(ROOT,'images')));

// 2) API endpoint to list PDFs
app.get('/api/files', (req, res) => {
  fs.readdir(FILES_DIR, (err, files) => {
    if (err) return res.status(500).json({ error: 'Cannot read files folder' });
    const list = files.map(fn => {
      const stats = fs.statSync(path.join(FILES_DIR, fn));
      return {
        name: fn,
        size: (stats.size / 1024 / 1024).toFixed(2) + ' MB'
      };
    });
    res.json(list);
  });
});

app.listen(PORT, () => {
  console.log(`⮀ Server listening on http://localhost:${PORT}`);
});

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const url = require('url');

// MIME types for different file extensions
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject'
};

// CORS headers
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
    'Access-Control-Max-Age': '86400' // 24 hours
};

// Function to make HTTPS requests
function makeHttpsRequest(targetUrl, res) {
    const parsedUrl = url.parse(targetUrl);
    
    const options = {
        hostname: parsedUrl.hostname,
        port: parsedUrl.port || 443,
        path: parsedUrl.path,
        method: 'GET',
        headers: {
            'User-Agent': 'NLCyber-AdSlot-Demo/1.0.0',
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'en-US,en;q=0.9',
            'Cache-Control': 'no-cache'
        }
    };

    const proxyReq = https.request(options, (proxyRes) => {
        // Add CORS headers to the response
        Object.keys(corsHeaders).forEach(header => {
            res.setHeader(header, corsHeaders[header]);
        });
        
        // Copy other headers from the target server
        res.setHeader('Content-Type', proxyRes.headers['content-type'] || 'application/json');
        res.statusCode = proxyRes.statusCode;
        
        // Pipe the response
        proxyRes.pipe(res);
    });

    proxyReq.on('error', (err) => {
        console.error('Proxy request error:', err);
        res.writeHead(500, corsHeaders);
        res.end(JSON.stringify({ error: 'Proxy request failed', details: err.message }));
    });

    proxyReq.end();
}

const server = http.createServer((req, res) => {
    // Handle CORS preflight requests
    if (req.method === 'OPTIONS') {
        res.writeHead(200, corsHeaders);
        res.end();
        return;
    }

    // Add CORS headers to all responses
    Object.keys(corsHeaders).forEach(header => {
        res.setHeader(header, corsHeaders[header]);
    });

    // Parse the URL
    const parsedUrl = url.parse(req.url, true);
    let pathname = parsedUrl.pathname;

    // Proxy API requests to NLCyber
    if (pathname.startsWith('/api/')) {
        const targetUrl = `https://nlca.nlcyber.com${pathname}${parsedUrl.search || ''}`;
        console.log(`🔄 Proxying API request: ${req.method} ${pathname} -> ${targetUrl}`);
        makeHttpsRequest(targetUrl, res);
        return;
    }

    // Default to index.html for root path
    if (pathname === '/') {
        pathname = '/index.html';
    }

    // Security: prevent directory traversal
    const safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
    const filePath = path.join(__dirname, safePath);

    // Check if file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            // File not found
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return;
        }

        // Get file extension
        const ext = path.extname(filePath).toLowerCase();
        const contentType = mimeTypes[ext] || 'application/octet-stream';

        // Read and serve the file
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 Internal Server Error');
                return;
            }

            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        });
    });
});

const PORT = process.env.PORT || 3000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
    console.log(`🚀 NLCyber AdSlot Demo Server (with API Proxy) running at http://${HOST}:${PORT}`);
    console.log(`📁 Serving files from: ${__dirname}`);
    console.log(`🌐 CORS enabled for all origins`);
    console.log(`🔄 API Proxy: /api/* -> https://nlca.nlcyber.com/api/*`);
    console.log(`\n🎯 Open your browser to: http://${HOST}:${PORT}`);
    console.log(`\n📋 Available endpoints:`);
    console.log(`   - http://${HOST}:${PORT}/ (main demo)`);
    console.log(`   - http://${HOST}:${PORT}/index.html (main demo)`);
    console.log(`   - http://${HOST}:${PORT}/styles.css (styles)`);
    console.log(`   - http://${HOST}:${PORT}/app.js (React app)`);
    console.log(`   - http://${HOST}:${PORT}/node_modules/nlcyber-adslot/dist/nlcyber-adslot.js (AdSlot component)`);
    console.log(`   - http://${HOST}:${PORT}/api/ads?placement=homepage_top&n=5 (proxied API)`);
    console.log(`\n🛑 Press Ctrl+C to stop the server`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down server...');
    server.close(() => {
        console.log('✅ Server stopped');
        process.exit(0);
    });
});

process.on('SIGTERM', () => {
    console.log('\n🛑 Shutting down server...');
    server.close(() => {
        console.log('✅ Server stopped');
        process.exit(0);
    });
});

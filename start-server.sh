#!/bin/bash

echo "🎯 Prose Website Server Launcher"
echo "================================"
echo ""
echo "🚀 Starting servers on multiple ports..."
echo ""

# Kill any existing servers
pkill -f "python3 -m http.server" 2>/dev/null
pkill -f "node server.js" 2>/dev/null
pkill -f "http-server" 2>/dev/null

echo "📁 Current directory: $(pwd)"
echo "📄 Files available:"
ls -la *.html *.css *.js 2>/dev/null

echo ""
echo "🌐 Starting servers..."

# Start Python server
echo "🐍 Starting Python server on port 3000..."
python3 -m http.server 3000 --bind 0.0.0.0 &
PYTHON_PID=$!

# Start Node.js server
echo "🟢 Starting Node.js server on port 4000..."
node server.js &
NODE_PID=$!

# Start http-server (if available)
echo "⚡ Starting http-server on port 5000..."
npx http-server . -p 5000 -c-1 --cors &
HTTP_SERVER_PID=$!

sleep 2

echo ""
echo "✅ Servers are now running!"
echo ""
echo "🔗 Access your Prose website at:"
echo "   📍 Python Server:    http://localhost:3000"
echo "   📍 Node.js Server:   http://localhost:4000"
echo "   📍 HTTP Server:      http://localhost:5000"
echo ""
echo "🌐 Or use your local IP address:"
LOCAL_IP=$(hostname -I | awk '{print $1}')
echo "   📍 Python Server:    http://$LOCAL_IP:3000"
echo "   📍 Node.js Server:   http://$LOCAL_IP:4000"
echo "   📍 HTTP Server:      http://$LOCAL_IP:5000"
echo ""
echo "📂 Direct file access:"
echo "   📍 File Path:        file://$(pwd)/index.html"
echo ""
echo "⏹️  To stop servers: Press Ctrl+C or run: pkill -f 'http.server|server.js|http-server'"
echo ""
echo "🎉 Enjoy testing your Prose website!"

# Keep script running
wait
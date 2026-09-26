const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>LuxeCart | Automated CI/CD Store</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-50 font-sans">
        <header class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
            <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 class="text-2xl font-black tracking-wider">⚡ LUXECART</h1>
                <div class="bg-white/10 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase border border-white/20">
                    CI/CD Deployed on Ubuntu 🚀
                </div>
            </div>
        </header>
        <section class="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-20 px-4 text-center">
            <div class="max-w-3xl mx-auto">
                <span class="bg-pink-500 text-xs uppercase px-3 py-1 rounded-full font-bold tracking-widest">New Season</span>
                <h2 class="text-4xl md:text-6xl font-extrabold mt-4 mb-6 leading-tight">Elevate Your Everyday Style</h2>
                <p class="text-purple-200 text-lg mb-8">Discover our handpicked collection of premium lifestyle goods, automatically delivered via GitHub Actions & PM2.</p>
                <button class="bg-white text-purple-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-purple-100 transition">Shop Collection</button>
            </div>
        </section>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});                   

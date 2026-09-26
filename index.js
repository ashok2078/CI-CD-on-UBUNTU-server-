<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LuxeVibe - Modern E-Commerce Experience</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Font: Inter -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            50: '#fdf4f8',
                            100: '#fbe8f2',
                            500: '#ec4899',
                            600: '#db2777',
                            700: '#be185d',
                            accent: '#8b5cf6'
                        }
                    }
                }
            }
        }
    </script>
    <style>
        /* Custom smooth scroll and glassmorphism styling */
        html {
            scroll-behavior: smooth;
        }
        .glass-nav {
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(12px);
        }
    </style>
</head>
<body class="bg-slate-50 text-slate-800 font-sans antialiased selection:bg-pink-500 selection:text-white">

    <header class="sticky top-0 z-50 glass-nav border-b border-slate-100 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                
                <!-- Logo -->
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-pink-500/30">
                        L
                    </div>
                    <span class="text-2xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                        LuxeVibe
                    </span>
                </div>

                <!-- Navigation Links (Desktop) -->
                <nav class="hidden md:flex items-center space-x-8 font-medium text-slate-600">
                    <a href="#home" class="hover:text-pink-600 transition-colors">Home</a>
                    <a href="#categories" class="hover:text-pink-600 transition-colors">Categories</a>
                    <a href="#products" class="hover:text-pink-600 transition-colors">Shop</a>
                    <a href="#deals" class="hover:text-pink-600 transition-colors">Deals</a>
                    <a href="#footer" class="hover:text-pink-600 transition-colors">About</a>
                </nav>

                <!-- Search Bar & Cart Icon -->
                <div class="flex items-center space-x-4">
                    <div class="relative hidden sm:block w-64">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </span>
                        <input type="text" placeholder="Search products..." class="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all">
                    </div>

                    <!-- Cart Button with Badge -->
                    <button onclick="toggleCart()" class="relative p-3 rounded-full bg-slate-100 hover:bg-pink-50 text-slate-700 hover:text-pink-600 transition-all">
                        <i class="fa-solid fa-bag-shopping text-lg"></i>
                        <span id="cart-badge" class="absolute -top-1 -right-1 w-5 h-5 bg-pink-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md">0</span>
                    </button>

                    <!-- Mobile Menu Toggle -->
                    <button class="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100" onclick="toggleMobileMenu()">
                        <i class="fa-solid fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu Drawer -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-slate-100 px-6 py-4 space-y-3">
            <a href="#home" class="block font-medium text-slate-700 hover:text-pink-600">Home</a>
            <a href="#categories" class="block font-medium text-slate-700 hover:text-pink-600">Categories</a>
            <a href="#products" class="block font-medium text-slate-700 hover:text-pink-600">Shop</a>
            <a href="#deals" class="block font-medium text-slate-700 hover:text-pink-600">Deals</a>
        </div>
    </header>

    <section id="home" class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white py-24 lg:py-32">
        <!-- Abstract gradient glows -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="space-y-6 text-center lg:text-left">
                    <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-sm font-semibold tracking-wide uppercase">
                        <i class="fa-solid fa-bolt text-xs"></i> New Season Arrival 2026
                    </span>
                    <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                        Elevate Your Lifestyle with <span class="bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent">Vibrant Elegance</span>
                    </h1>
                    <p class="text-slate-300 text-lg sm:text-xl font-light max-w-xl mx-auto lg:mx-0">
                        Discover top-tier curated collections designed for the modern lifestyle. Unmatched quality meets breathtaking aesthetics.
                    </p>
                    <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
                        <a href="#products" class="px-8 py-4 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-semibold shadow-lg shadow-pink-600/30 transition-all transform hover:-translate-y-0.5 text-center">
                            Explore Collection <i class="fa-solid fa-arrow-right ml-2"></i>
                        </a>
                        <a href="#deals" class="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold backdrop-blur-md transition-all text-center">
                            View Flash Deals
                        </a>
                    </div>
                </div>

                <!-- Hero Image Showcase with Glassmorphism -->
                <div class="relative flex justify-center">
                    <div class="relative w-full max-w-md bg-gradient-to-tr from-pink-500/20 to-purple-500/20 p-2 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl">
                        <img src="https://placehold.co/600x600/1e1b4b/ec4899?text=LuxeVibe+Collection" alt="Hero Showcase" class="rounded-2xl w-full object-cover shadow-inner">
                        <div class="absolute -bottom-6 -left-6 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl backdrop-blur-md shadow-xl flex items-center space-x-3">
                            <div class="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center text-pink-400 text-xl font-bold">
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <p class="text-xs text-slate-400 font-medium">Customer Rating</p>
                                <p class="text-sm font-bold text-white">4.9 / 5.0 (12.4k Reviews)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="categories" class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 class="text-3xl font-bold tracking-tight text-slate-900">Shop by Category</h2>
            <p class="text-slate-500">Explore our diverse range of premium categories tailored just for your taste.</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <!-- Category 1 -->
            <div class="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 transform hover:-translate-y-1 text-center cursor-pointer">
                <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center text-2xl group-hover:bg-pink-600 group-hover:text-white transition-colors shadow-sm">
                    <i class="fa-solid fa-shirt"></i>
                </div>
                <h3 class="font-bold text-slate-800 text-lg mb-1">Apparel</h3>
                <p class="text-xs text-slate-400">120+ Products</p>
            </div>

            <!-- Category 2 -->
            <div class="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 transform hover:-translate-y-1 text-center cursor-pointer">
                <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-2xl group-hover:bg-purple-600 group-hover:text-white transition-colors shadow-sm">
                    <i class="fa-solid fa-headphones"></i>
                </div>
                <h3 class="font-bold text-slate-800 text-lg mb-1">Electronics</h3>
                <p class="text-xs text-slate-400">85+ Products</p>
            </div>

            <!-- Category 3 -->
            <div class="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 transform hover:-translate-y-1 text-center cursor-pointer">
                <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors shadow-sm">
                    <i class="fa-solid fa-gem"></i>
                </div>
                <h3 class="font-bold text-slate-800 text-lg mb-1">Accessories</h3>
                <p class="text-xs text-slate-400">64+ Products</p>
            </div>

            <!-- Category 4 -->
            <div class="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 transform hover:-translate-y-1 text-center cursor-pointer">
                <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center text-2xl group-hover:bg-rose-600 group-hover:text-white transition-colors shadow-sm">
                    <i class="fa-solid fa-couch"></i>
                </div>
                <h3 class="font-bold text-slate-800 text-lg mb-1">Home Decor</h3>
                <p class="text-xs text-slate-400">92+ Products</p>
            </div>
        </div>
    </section>

    <section id="products" class="py-20 bg-slate-100/70 border-y border-slate-200/60">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <div>
                    <span class="text-pink-600 font-bold uppercase tracking-wider text-sm">Handpicked For You</span>
                    <h2 class="text-3xl font-extrabold text-slate-900 mt-1">Featured Products</h2>
                </div>
                <div class="mt-4 md:mt-0 flex space-x-2">
                    <button class="px-4 py-2 rounded-lg bg-pink-600 text-white font-medium text-sm shadow-sm">All</button>
                    <button class="px-4 py-2 rounded-lg bg-white text-slate-600 hover:bg-slate-50 font-medium text-sm border border-slate-200">New</button>
                    <button class="px-4 py-2 rounded-lg bg-white text-slate-600 hover:bg-slate-50 font-medium text-sm border border-slate-200">Popular</button>
                </div>
            </div>

            <!-- Products Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                
                <!-- Product Card 1 -->
                <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-200/80 transition-all duration-300 flex flex-col group">
                    <div class="relative overflow-hidden bg-slate-200 h-64">
                        <span class="absolute top-3 left-3 z-10 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">Sale</span>
                        <img src="https://placehold.co/400x400/f3f4f6/db2777?text=Smart+Watch" alt="Smart Watch" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        <button class="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white text-slate-700 shadow-md flex items-center justify-center hover:text-pink-600 hover:scale-110 transition-all">
                            <i class="fa-regular fa-heart"></i>
                        </button>
                    </div>
                    <div class="p-5 flex-1 flex flex-col justify-between">
                        <div>
                            <div class="flex items-center space-x-1 text-amber-400 text-xs mb-1">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                <span class="text-slate-400 ml-1">(48)</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-lg group-hover:text-pink-600 transition-colors">Nova Apex Smartwatch</h3>
                            <p class="text-xs text-slate-500 mt-1">Advanced health tracking & AMOLED display.</p>
                        </div>
                        <div class="mt-4 flex items-center justify-between">
                            <div>
                                <span class="text-xl font-black text-slate-900">$129.00</span>
                                <span class="text-xs text-slate-400 line-through ml-1">$179.00</span>
                            </div>
                            <button onclick="addToCart('Nova Apex Smartwatch', 129)" class="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-semibold text-sm shadow-md shadow-pink-600/20 transition-all">
                                <i class="fa-solid fa-cart-plus mr-1"></i> Add
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Product Card 2 -->
                <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-200/80 transition-all duration-300 flex flex-col group">
                    <div class="relative overflow-hidden bg-slate-200 h-64">
                        <span class="absolute top-3 left-3 z-10 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">Hot</span>
                        <img src="https://placehold.co/400x400/f3f4f6/8b5cf6?text=Wireless+Headphones" alt="Wireless Headphones" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        <button class="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white text-slate-700 shadow-md flex items-center justify-center hover:text-pink-600 hover:scale-110 transition-all">
                            <i class="fa-regular fa-heart"></i>
                        </button>
                    </div>
                    <div class="p-5 flex-1 flex flex-col justify-between">
                        <div>
                            <div class="flex items-center space-x-1 text-amber-400 text-xs mb-1">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
                                <span class="text-slate-400 ml-1">(92)</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-lg group-hover:text-pink-600 transition-colors">Aura Pro Wireless ANC</h3>
                            <p class="text-xs text-slate-500 mt-1">Immersive spatial audio with 40h battery.</p>
                        </div>
                        <div class="mt-4 flex items-center justify-between">
                            <div>
                                <span class="text-xl font-black text-slate-900">$249.00</span>
                            </div>
                            <button onclick="addToCart('Aura Pro Wireless ANC', 249)" class="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-semibold text-sm shadow-md shadow-pink-600/20 transition-all">
                                <i class="fa-solid fa-cart-plus mr-1"></i> Add
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Product Card 3 -->
                <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-200/80 transition-all duration-300 flex flex-col group">
                    <div class="relative overflow-hidden bg-slate-200 h-64">
                        <span class="absolute top-3 left-3 z-10 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">New</span>
                        <img src="https://placehold.co/400x400/f3f4f6/059669?text=Minimalist+Backpack" alt="Minimalist Backpack" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        <button class="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white text-slate-700 shadow-md flex items-center justify-center hover:text-pink-600 hover:scale-110 transition-all">
                            <i class="fa-regular fa-heart"></i>
                        </button>
                    </div>
                    <div class="p-5 flex-1 flex flex-col justify-between">
                        <div>
                            <div class="flex items-center space-x-1 text-amber-400 text-xs mb-1">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                <span class="text-slate-400 ml-1">(34)</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-lg group-hover:text-pink-600 transition-colors">Urban Nomad Pack</h3>
                            <p class="text-xs text-slate-500 mt-1">Water-resistant canvas with laptop sleeve.</p>
                        </div>
                        <div class="mt-4 flex items-center justify-between">
                            <div>
                                <span class="text-xl font-black text-slate-900">$89.00</span>
                                <span class="text-xs text-slate-400 line-through ml-1">$115.00</span>
                            </div>
                            <button onclick="addToCart('Urban Nomad Pack', 89)" class="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-semibold text-sm shadow-md shadow-pink-600/20 transition-all">
                                <i class="fa-solid fa-cart-plus mr-1"></i> Add
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Product Card 4 -->
                <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-200/80 transition-all duration-300 flex flex-col group">
                    <div class="relative overflow-hidden bg-slate-200 h-64">
                        <span class="absolute top-3 left-3 z-10 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">Best Seller</span>
                        <img src="https://placehold.co/400x400/f3f4f6/4f46e5?text=Designer+Sneakers" alt="Designer Sneakers" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        <button class="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white text-slate-700 shadow-md flex items-center justify-center hover:text-pink-600 hover:scale-110 transition-all">
                            <i class="fa-regular fa-heart"></i>
                        </button>
                    </div>
                    <div class="p-5 flex-1 flex flex-col justify-between">
                        <div>
                            <div class="flex items-center space-x-1 text-amber-400 text-xs mb-1">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                <span class="text-slate-400 ml-1">(120)</span>
                            </div>
                            <h3 class="font-bold text-slate-900 text-lg group-hover:text-pink-600 transition-colors">Stride Runner V2</h3>
                            <p class="text-xs text-slate-500 mt-1">Ultra-responsive cushioning for daily wear.</p>
                        </div>
                        <div class="mt-4 flex items-center justify-between">
                            <div>
                                <span class="text-xl font-black text-slate-900">$159.00</span>
                            </div>
                            <button onclick="addToCart('Stride Runner V2', 159)" class="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-semibold text-sm shadow-md shadow-pink-600/20 transition-all">
                                <i class="fa-solid fa-cart-plus mr-1"></i> Add
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section id="deals" class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="rounded-3xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white p-8 md:p-16 relative overflow-hidden shadow-2xl">
            <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
            <div class="max-w-xl space-y-6 relative z-10">
                <span class="px-4 py-1.5 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">Limited Time Offer</span>
                <h2 class="text-3xl md:text-5xl font-black tracking-tight">Flash Sale: Up to 40% Off Selected Items</h2>
                <p class="text-pink-100 text-base md:text-lg">Don't miss out on our exclusive seasonal markdown. Premium quality at unbeatable values.</p>
                <div class="pt-2">
                    <button onclick="alertBox('Flash Sale activated! Enjoy your savings.')" class="px-8 py-4 rounded-xl bg-white text-slate-900 font-bold hover:bg-slate-100 shadow-xl transition-all">
                        Shop Flash Deals Now
                    </button>
                </div>
            </div>
        </div>
    </section>

    <footer id="footer" class="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                <div class="space-y-4">
                    <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 rounded-lg bg-pink-600 flex items-center justify-center text-white font-bold">L</div>
                        <span class="text-xl font-bold text-white">LuxeVibe</span>
                    </div>
                    <p class="text-sm">Redefining modern e-commerce with style, speed, and supreme quality products.</p>
                </div>
                <div>
                    <h4 class="text-white font-semibold mb-4">Quick Links</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="#home" class="hover:text-white transition-colors">Home</a></li>
                        <li><a href="#categories" class="hover:text-white transition-colors">Categories</a></li>
                        <li><a href="#products" class="hover:text-white transition-colors">Featured Products</a></li>
                        <li><a href="#deals" class="hover:text-white transition-colors">Special Deals</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-semibold mb-4">Customer Care</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="#" class="hover:text-white transition-colors">Order Tracking</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Returns & Exchanges</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Shipping Information</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Contact Support</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-semibold mb-4">Newsletter</h4>
                    <p class="text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
                    <form onsubmit="event.preventDefault(); alertBox('Thank you for subscribing!');" class="flex gap-2">
                        <input type="email" placeholder="Your email" required class="bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-pink-500 w-full">
                        <button type="submit" class="bg-pink-600 hover:bg-pink-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all">Join</button>
                    </form>
                </div>
            </div>
            <div class="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs">
                <p>&copy; 2026 LuxeVibe Inc. All rights reserved.</p>
                <div class="flex space-x-6 mt-4 sm:mt-0">
                    <a href="#" class="hover:text-white transition-colors"><i class="fa-brands fa-facebook-f text-base"></i></a>
                    <a href="#" class="hover:text-white transition-colors"><i class="fa-brands fa-instagram text-base"></i></a>
                    <a href="#" class="hover:text-white transition-colors"><i class="fa-brands fa-twitter text-base"></i></a>
                    <a href="#" class="hover:text-white transition-colors"><i class="fa-brands fa-linkedin-in text-base"></i></a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Cart Notification / Drawer Modal Simulation -->
    <div id="cart-modal" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4">
        <div class="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative">
            <button onclick="toggleCart()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-700">
                <i class="fa-solid fa-xmark text-xl"></i>
            </button>
            <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <i class="fa-solid fa-bag-shopping text-pink-600"></i> Your Shopping Bag
            </h3>
            <div id="cart-items" class="space-y-3 max-h-60 overflow-y-auto mb-4 divide-y divide-slate-100">
                <p class="text-sm text-slate-500 text-center py-6">Your bag is currently empty.</p>
            </div>
            <div class="border-t border-slate-100 pt-4 mb-6">
                <div class="flex justify-between font-bold text-slate-900 text-lg">
                    <span>Total:</span>
                    <span id="cart-total">$0.00</span>
                </div>
            </div>
            <button onclick="checkout()" class="w-full py-3 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold shadow-lg shadow-pink-600/30 transition-all">
                Proceed to Checkout
            </button>
        </div>
    </div>

    <script>
        let cart = [];

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        function toggleCart() {
            const modal = document.getElementById('cart-modal');
            modal.classList.toggle('hidden');
        }

        function addToCart(name, price) {
            cart.push({ name, price });
            updateCartUI();
            
            // Subtle notification banner feedback instead of alert()
            const notification = document.createElement('div');
            notification.className = 'fixed bottom-5 right-5 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl z-50 flex items-center space-x-2 text-sm animate-bounce';
            notification.innerHTML = `<i class="fa-solid fa-check text-emerald-400"></i> Added ${name} to cart!`;
            document.body.appendChild(notification);
            setTimeout(() => notification.remove(), 2500);
        }

        function updateCartUI() {
            const badge = document.getElementById('cart-badge');
            badge.innerText = cart.length;

            const container = document.getElementById('cart-items');
            const totalEl = document.getElementById('cart-total');

            if (cart.length === 0) {
                container.innerHTML = `<p class="text-sm text-slate-500 text-center py-6">Your bag is currently empty.</p>`;
                totalEl.innerText = '$0.00';
                return;
            }

            let total = 0;
            container.innerHTML = '';
            cart.forEach((item, index) => {
                total += item.price;
                const div = document.createElement('div');
                div.className = 'flex justify-between items-center pt-3 text-sm';
                div.innerHTML = `
                    <div>
                        <p class="font-bold text-slate-800">${item.name}</p>
                        <p class="text-xs text-slate-500">$${item.price.toFixed(2)}</p>
                    </div>
                    <button onclick="removeFromCart(${index})" class="text-rose-500 hover:text-rose-700 text-xs"><i class="fa-solid fa-trash"></i></button>
                `;
                container.appendChild(div);
            });
            totalEl.innerText = `$${total.toFixed(2)}`;
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCartUI();
        }

        function checkout() {
            if (cart.length === 0) {
                alertBox('Your cart is empty!');
                return;
            }
            alertBox('Order placed successfully! Thank you for shopping with LuxeVibe.');
            cart = [];
            updateCartUI();
            toggleCart();
        }

        function alertBox(message) {
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4';
            modal.innerHTML = `
                <div class="bg-white rounded-2xl max-w-xs w-full p-6 text-center shadow-2xl space-y-4">
                    <div class="w-12 h-12 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center mx-auto text-xl font-bold">
                        <i class="fa-solid fa-bell"></i>
                    </div>
                    <p class="text-sm text-slate-700 font-medium">${message}</p>
                    <button onclick="this.closest('.fixed').remove()" class="w-full py-2.5 rounded-xl bg-pink-600 text-white font-semibold text-sm">OK</button>
                </div>
            `;
            document.body.appendChild(modal);
        }
    </script>
</body>
</html>

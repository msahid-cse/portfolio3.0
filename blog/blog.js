// Blog data
const blogPosts = [
    {
        id: 1,
        title: "The Future of Web Development in 2023",
        excerpt: "Exploring the latest trends and technologies shaping the future of web development, from WebAssembly to AI integration.",
        content: `
            <p>The web development landscape is constantly evolving, and 2023 has brought exciting new technologies and trends that are reshaping how we build for the web. Let's explore the most significant developments and what they mean for developers.</p>

            <h2>1. WebAssembly (Wasm)</h2>
            <p>WebAssembly has gained significant traction, allowing developers to run high-performance code written in languages like C++ and Rust directly in the browser. This enables complex applications like video editors and games to run efficiently on the web.</p>

            <h2>2. AI-Powered Development</h2>
            <p>Artificial Intelligence is revolutionizing how we write and debug code. Tools like GitHub Copilot and AI-powered code analysis are becoming essential parts of the modern developer's toolkit.</p>

            <h2>3. Edge Computing</h2>
            <p>The rise of edge computing is changing how we think about server architecture. Platforms like Cloudflare Workers and Vercel Edge Functions allow code to run closer to users, improving performance and reducing latency.</p>

            <h3>Key Benefits of Edge Computing:</h3>
            <ul>
                <li>Reduced latency</li>
                <li>Improved performance</li>
                <li>Lower bandwidth costs</li>
                <li>Better reliability</li>
            </ul>

            <h2>4. Web Components</h2>
            <p>Web Components are becoming more widely adopted, offering a standard way to create reusable custom elements. This technology allows for better code organization and reusability across different frameworks.</p>

            <h2>Looking Ahead</h2>
            <p>As we move forward, we can expect these technologies to mature and new ones to emerge. The key is to stay adaptable and continue learning as the web development landscape evolves.</p>
        `,
        date: "June 15, 2023",
        author: "MD. SAHID",
        category: "web-dev",
        image: "https://www.blogtyrant.com/wp-content/uploads/2017/02/how-to-write-a-good-blog-post.png",
        tags: ["Web Development", "Technology", "Future Trends"]
    },
    {
        id: 2,
        title: "Designing for the Metaverse",
        excerpt: "How spatial design principles are changing the way we think about user interfaces in virtual environments.",
        content: `
            <p>As the metaverse continues to evolve, designers are faced with new challenges in creating intuitive and immersive user experiences. This article explores the key principles of spatial design in virtual environments.</p>

            <h2>Understanding Spatial Design</h2>
            <p>Spatial design in the metaverse goes beyond traditional 2D interfaces. We need to consider how users interact with objects and information in three-dimensional space.</p>

            <h2>Key Design Principles</h2>
            <ul>
                <li>Natural interaction patterns</li>
                <li>Spatial awareness</li>
                <li>Visual hierarchy in 3D space</li>
                <li>Interactive feedback</li>
            </ul>

            <h2>Challenges and Solutions</h2>
            <p>Designing for virtual environments presents unique challenges, from motion sickness considerations to ensuring accessibility. We'll explore practical solutions to these common issues.</p>
        `,
        date: "May 02, 2023",
        author: "MD. SAHID",
        category: "ui-ux",
        image: "https://www.blogtyrant.com/wp-content/uploads/2017/02/how-to-write-a-good-blog-post.png",
        tags: ["UI/UX", "Metaverse", "Virtual Reality"]
    },
    {
        id: 3,
        title: "Advanced JavaScript Patterns",
        excerpt: "Deep dive into modern JavaScript patterns that can help you write more maintainable and efficient code.",
        content: `
            <p>JavaScript patterns are essential for writing clean, maintainable, and efficient code. In this article, we'll explore some advanced patterns that can elevate your JavaScript development.</p>

            <h2>1. Module Pattern</h2>
            <pre><code>const Module = (function() {
    // Private variables and methods
    let privateVar = 'I am private';
    
    function privateMethod() {
        return privateVar;
    }

    // Public API
    return {
        publicMethod: function() {
            return privateMethod();
        }
    };
})();</code></pre>

            <h2>2. Observer Pattern</h2>
            <p>The Observer pattern is crucial for event-driven programming and reactive systems. Here's how to implement it:</p>

            <pre><code>class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }

    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }
}</code></pre>

            <h2>3. Factory Pattern</h2>
            <p>The Factory pattern is useful for creating objects without explicitly requiring us to use the 'new' operator or specify the exact class of object being created.</p>

            <h2>Best Practices</h2>
            <ul>
                <li>Keep your code DRY (Don't Repeat Yourself)</li>
                <li>Follow SOLID principles</li>
                <li>Use meaningful names for variables and functions</li>
                <li>Write comprehensive documentation</li>
            </ul>
        `,
        date: "April 18, 2023",
        author: "MD. SAHID",
        category: "js",
        image: "https://www.blogtyrant.com/wp-content/uploads/2017/02/how-to-write-a-good-blog-post.png",
        tags: ["JavaScript", "Programming", "Design Patterns"]
    }
];

// DOM Elements
const blogGrid = document.querySelector('.blog-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

// Functions
function createBlogCard(post) {
    const date = new Date(post.date);
    return `
        <article class="blog-card" data-category="${post.category}">
            <div class="blog-image">
                <img src="${post.image}" alt="${post.title}">
                <div class="blog-date">
                    <span class="day">${date.getDate()}</span>
                    <span class="month">${date.toLocaleString('default', { month: 'short' })}</span>
                </div>
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span><i class="fas fa-tag"></i> ${post.category}</span>
                    <span><i class="fas fa-user"></i> ${post.author}</span>
                </div>
                <h3><a href="posts/${post.id}.html">${post.title}</a></h3>
                <p>${post.excerpt}</p>
                <a href="posts/${post.id}.html" class="blog-read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        </article>
    `;
}

function generateBlogPost(post) {
    return `
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${post.title} | MD. SAHID</title>
    <link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Orbitron:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&family=Share+Tech+Mono&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="../../styles/styles.css">
    <link rel="stylesheet" href="../blog.css">
</head>
<body>
    <div class="theme-toggle">
        <input type="checkbox" id="theme-switch" class="theme-switch">
        <label for="theme-switch" class="theme-label">
            <i class="fas fa-sun"></i>
            <i class="fas fa-moon"></i>
            <span class="theme-ball"></span>
        </label>
    </div>

    <nav id="navbar">
        <div class="container">
            <div class="logo">MD. <span>SAHID</span></div>
            <ul class="nav-links">
                <li><a href="../../index.html">Home</a></li>
                <li><a href="../../index.html#about">About</a></li>
                <li><a href="../../index.html#skills">Skills</a></li>
                <li><a href="../../index.html#projects">Projects</a></li>
                <li><a href="../" class="active">Blog</a></li>
                <li><a href="../../index.html#resume">Resume</a></li>
                <li><a href="../../index.html#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <article class="blog-post">
        <div class="container">
            <header class="blog-post-header">
                <h1>${post.title}</h1>
                <div class="blog-post-meta">
                    <span><i class="fas fa-calendar"></i> ${post.date}</span>
                    <span><i class="fas fa-user"></i> ${post.author}</span>
                    <span><i class="fas fa-folder"></i> ${post.category}</span>
                </div>
                <img src="${post.image}" alt="${post.title}">
            </header>
            
            <div class="blog-post-content">
                ${post.content}
            </div>

            <footer class="blog-post-footer">
                <div class="blog-post-tags">
                    ${post.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                <div class="blog-navigation">
                    <a href="../" class="blog-nav-link">
                        <i class="fas fa-arrow-left"></i>
                        Back to Blog
                    </a>
                </div>
            </footer>
        </div>
    </article>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">MD. <span>SAHID</span></div>
                <p>© 2023 All Rights Reserved</p>
            </div>
        </div>
    </footer>

    <a href="#" class="back-to-top" id="backToTop">
        <i class="fas fa-arrow-up"></i>
    </a>

    <script src="../../scripts/scripts.js"></script>
</body>
</html>
    `;
}

// Initialize blog posts
function initializeBlog() {
    // Create blog directory if it doesn't exist
    blogPosts.forEach(post => {
        const postContent = generateBlogPost(post);
        // You would typically save this to a file, but for this static version,
        // we'll need to manually create these files
        console.log(`Generated blog post: ${post.id}.html`);
    });

    // Display blog cards
    blogGrid.innerHTML = blogPosts.map(post => createBlogCard(post)).join('');
}

// Filter functionality
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const filterValue = this.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Filter blog posts
        const blogCards = document.querySelectorAll('.blog-card');
        blogCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeBlog);

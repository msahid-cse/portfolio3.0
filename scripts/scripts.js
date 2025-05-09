// document.addEventListener('DOMContentLoaded', function() {
//     // Mobile Navigation
//     const hamburger = document.querySelector('.hamburger');
//     const navLinks = document.querySelector('.nav-links');
//     const sidebar = document.querySelector('.sidebar');
//     const sidebarToggle = document.querySelector('.sidebar-toggle');
//     const sidebarClose = document.querySelector('.sidebar-close');
    
//     // Sidebar toggle
//     sidebarToggle.addEventListener('click', function() {
//         sidebar.classList.add('active');
//     });
    
//     sidebarClose.addEventListener('click', function() {
//         sidebar.classList.remove('active');
//     });
    
//     // Close sidebar when clicking outside
//     document.addEventListener('click', function(e) {
//         if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
//             sidebar.classList.remove('active');
//         }
//     });

//     // Sticky Navigation
//     const navbar = document.getElementById('navbar');
//     window.addEventListener('scroll', function() {
//         if (window.scrollY > 100) {
//             navbar.classList.add('scrolled');
//         } else {
//             navbar.classList.remove('scrolled');
//         }
//     });
    
//     // Back to Top Button
//     const backToTopBtn = document.getElementById('backToTop');
//     window.addEventListener('scroll', function() {
//         if (window.scrollY > 300) {
//             backToTopBtn.classList.add('active');
//         } else {
//             backToTopBtn.classList.remove('active');
//         }
//     });
    
//     // Smooth Scrolling for all links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function(e) {
//             e.preventDefault();
            
//             const targetId = this.getAttribute('href');
//             if (targetId === '#') return;
            
//             const targetElement = document.querySelector(targetId);
//             if (targetElement) {
//                 window.scrollTo({
//                     top: targetElement.offsetTop - 80,
//                     behavior: 'smooth'
//                 });
                
//                 // Close sidebar if open
//                 sidebar.classList.remove('active');
//             }
//         });
//     });
    
//     // Typewriter Effect
//     const typedTextSpan = document.querySelector('.typed-text');
//     const cursorSpan = document.querySelector('.cursor');
    
//     const textArray = ["Web Developer", "UI/UX Designer", "Tech Enthusiast", "Problem Solver"];
//     const typingDelay = 200;
//     const erasingDelay = 100;
//     const newTextDelay = 2000;
//     let textArrayIndex = 0;
//     let charIndex = 0;
    
//     function type() {
//         if (charIndex < textArray[textArrayIndex].length) {
//             if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
//             typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
//             charIndex++;
//             setTimeout(type, typingDelay);
//         } else {
//             cursorSpan.classList.remove('typing');
//             setTimeout(erase, newTextDelay);
//         }
//     }
    
//     function erase() {
//         if (charIndex > 0) {
//             if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
//             typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
//             charIndex--;
//             setTimeout(erase, erasingDelay);
//         } else {
//             cursorSpan.classList.remove('typing');
//             textArrayIndex++;
//             if (textArrayIndex >= textArray.length) textArrayIndex = 0;
//             setTimeout(type, typingDelay + 1100);
//         }
//     }
    
//     // Start the typewriter effect
//     if (textArray.length) setTimeout(type, newTextDelay + 250);
    
//     // Animate Skill Bars on Scroll
//     const skillBars = document.querySelectorAll('.progress-line span');
    
//     function animateSkillBars() {
//         skillBars.forEach(bar => {
//             const width = bar.style.width;
//             bar.style.width = '0';
//             setTimeout(() => {
//                 bar.style.width = width;
//             }, 100);
//         });
//     }
    
//     // Initialize Particles.js
//     if (document.getElementById('particles-js')) {
//         particlesJS('particles-js', {
//             "particles": {
//                 "number": {
//                     "value": 80,
//                     "density": {
//                         "enable": true,
//                         "value_area": 800
//                     }
//                 },
//                 "color": {
//                     "value": "#00f0ff"
//                 },
//                 "shape": {
//                     "type": "circle",
//                     "stroke": {
//                         "width": 0,
//                         "color": "#000000"
//                     },
//                     "polygon": {
//                         "nb_sides": 5
//                     }
//                 },
//                 "opacity": {
//                     "value": 0.5,
//                     "random": false,
//                     "anim": {
//                         "enable": false,
//                         "speed": 1,
//                         "opacity_min": 0.1,
//                         "sync": false
//                     }
//                 },
//                 "size": {
//                     "value": 3,
//                     "random": true,
//                     "anim": {
//                         "enable": false,
//                         "speed": 40,
//                         "size_min": 0.1,
//                         "sync": false
//                     }
//                 },
//                 "line_linked": {
//                     "enable": true,
//                     "distance": 150,
//                     "color": "#00f0ff",
//                     "opacity": 0.4,
//                     "width": 1
//                 },
//                 "move": {
//                     "enable": true,
//                     "speed": 2,
//                     "direction": "none",
//                     "random": false,
//                     "straight": false,
//                     "out_mode": "out",
//                     "bounce": false,
//                     "attract": {
//                         "enable": false,
//                         "rotateX": 600,
//                         "rotateY": 1200
//                     }
//                 }
//             },
//             "interactivity": {
//                 "detect_on": "canvas",
//                 "events": {
//                     "onhover": {
//                         "enable": true,
//                         "mode": "grab"
//                     },
//                     "onclick": {
//                         "enable": true,
//                         "mode": "push"
//                     },
//                     "resize": true
//                 },
//                 "modes": {
//                     "grab": {
//                         "distance": 140,
//                         "line_linked": {
//                             "opacity": 1
//                         }
//                     },
//                     "bubble": {
//                         "distance": 400,
//                         "size": 40,
//                         "duration": 2,
//                         "opacity": 8,
//                         "speed": 3
//                     },
//                     "repulse": {
//                         "distance": 200,
//                         "duration": 0.4
//                     },
//                     "push": {
//                         "particles_nb": 4
//                     },
//                     "remove": {
//                         "particles_nb": 2
//                     }
//                 }
//             },
//             "retina_detect": true
//         });
//     }
    
//     // Project Filtering
//     const filterButtons = document.querySelectorAll('.filter-btn');
//     const projectCards = document.querySelectorAll('.project-card');
    
//     filterButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             // Remove active class from all buttons
//             filterButtons.forEach(btn => btn.classList.remove('active'));
//             // Add active class to clicked button
//             this.classList.add('active');
            
//             const filterValue = this.getAttribute('data-filter');
            
//             projectCards.forEach(card => {
//                 if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
//                     card.style.display = 'block';
//                     setTimeout(() => {
//                         card.classList.add('show');
//                     }, 50);
//                 } else {
//                     card.classList.remove('show');
//                     setTimeout(() => {
//                         card.style.display = 'none';
//                     }, 300);
//                 }
//             });
//         });
//     });
    
//     // Blog Post Interaction
//     const blogCards = document.querySelectorAll('.blog-card');
//     blogCards.forEach(card => {
//         card.addEventListener('click', function(e) {
//             // If click wasn't on a link inside the card
//             if (!e.target.closest('a')) {
//                 const link = this.querySelector('h3 a');
//                 if (link) {
//                     window.location.href = link.href;
//                 }
//             }
//         });
//     });
    
//     // Theme Toggle Functionality
//     const themeSwitch = document.getElementById('theme-switch');
//     const html = document.documentElement;
    
//     // Check for saved theme preference or use preferred color scheme
//     const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
//     const savedTheme = localStorage.getItem('theme');
    
//     // Set initial theme
//     if (savedTheme) {
//         html.setAttribute('data-theme', savedTheme);
//         themeSwitch.checked = savedTheme === 'light';
//     } else {
//         const defaultTheme = prefersDarkScheme.matches ? 'dark' : 'light';
//         html.setAttribute('data-theme', defaultTheme);
//         themeSwitch.checked = defaultTheme === 'light';
//     }
    
//     // Handle theme switch
//     themeSwitch.addEventListener('change', function() {
//         const newTheme = this.checked ? 'light' : 'dark';
//         html.setAttribute('data-theme', newTheme);
//         localStorage.setItem('theme', newTheme);
        
//         // Trigger a custom event for theme change
//         document.dispatchEvent(new CustomEvent('themechange', { detail: newTheme }));
//     });
    
//     // Listen for system theme changes
//     prefersDarkScheme.addEventListener('change', (e) => {
//         if (!localStorage.getItem('theme')) {
//             const newTheme = e.matches ? 'dark' : 'light';
//             html.setAttribute('data-theme', newTheme);
//             themeSwitch.checked = newTheme === 'light';
//         }
//     });

//     // Intersection Observer for animations
//     const observerOptions = {
//         threshold: 0.1
//     };
    
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 // Animate skill bars when skills section is visible
//                 if (entry.target.id === 'skills') {
//                     animateSkillBars();
//                 }
                
//                 // Add animation class to project cards
//                 if (entry.target.id === 'projects') {
//                     const projectCards = document.querySelectorAll('.project-card');
//                     projectCards.forEach((card, index) => {
//                         setTimeout(() => {
//                             card.classList.add('show');
//                         }, index * 150);
//                     });
//                 }
//             }
//         });
//     }, observerOptions);
    
//     // Observe sections
//     document.querySelectorAll('section').forEach(section => {
//         observer.observe(section);
//     });
    
//     // Touch device detection
//     const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
//     if (isTouchDevice) {
//         document.body.classList.add('touch-device');
        
//         // Add hover effects for touch devices
//         document.querySelectorAll('.project-card, .blog-card').forEach(card => {
//             card.addEventListener('touchstart', function() {
//                 this.classList.add('hover-effect');
//             });
            
//             card.addEventListener('touchend', function() {
//                 setTimeout(() => {
//                     this.classList.remove('hover-effect');
//                 }, 500);
//             });
//         });
//     }
    
//     // Form handling (without email submission)
//     const contactForm = document.getElementById('contactForm');
//     if (contactForm) {
//         contactForm.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             const submitBtn = this.querySelector('button[type="submit"]');
//             const originalBtnText = submitBtn.textContent;
            
//             // Show loading state
//             submitBtn.disabled = true;
//             submitBtn.textContent = 'Sending...';
//             submitBtn.classList.add('loading');
            
//             // Simulate form submission
//             setTimeout(() => {
//                 // Show success message
//                 alert('Thank you for your message! This is a demo form. In a real implementation, this would send an email.');
                
//                 // Reset form
//                 this.reset();
                
//                 // Reset button state
//                 submitBtn.disabled = false;
//                 submitBtn.textContent = originalBtnText;
//                 submitBtn.classList.remove('loading');
//             }, 1500);
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebarClose = document.querySelector('.sidebar-close');
    
    // Sidebar toggle
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.add('active');
    });
    
    sidebarClose.addEventListener('click', function() {
        sidebar.classList.remove('active');
    });
    
    // Close sidebar when clicking outside
    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && e.target !== sidebarToggle && !sidebarToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });
    
    // Sticky Navigation
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    // Smooth Scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Typewriter Effect
    const typedTextSpan = document.querySelector('.typed-text');
    const cursorSpan = document.querySelector('.cursor');
    
    const textArray = ["Web Developer", "UI/UX Designer", "Tech Enthusiast", "Problem Solver"];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;
    
    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            cursorSpan.classList.remove('typing');
            setTimeout(erase, newTextDelay);
        }
    }
    
    function erase() {
        if (charIndex > 0) {
            if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            cursorSpan.classList.remove('typing');
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }
    
    // Start the typewriter effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
    
    // Animate Skill Bars on Scroll
    const skillBars = document.querySelectorAll('.progress-line span');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }
    
    // Initialize Particles.js
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#00f0ff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00f0ff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
    
    // Project Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.classList.add('show');
                    }, 50);
                } else {
                    card.classList.remove('show');
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Blog Post Interaction
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // If click wasn't on a link inside the card
            if (!e.target.closest('a')) {
                const link = this.querySelector('h3 a');
                if (link) {
                    window.location.href = link.href;
                }
            }
        });
    });
    
    // Theme Toggle Functionality
    const themeSwitch = document.getElementById('theme-switch');
    const html = document.documentElement;
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme') || 
                       (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    html.setAttribute('data-theme', savedTheme);
    if (themeSwitch) {
        themeSwitch.checked = savedTheme === 'light';
    }
    
    if (themeSwitch) {
        themeSwitch.addEventListener('change', function() {
            const newTheme = this.checked ? 'light' : 'dark';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate skill bars when skills section is visible
                if (entry.target.id === 'skills') {
                    animateSkillBars();
                }
                
                // Add animation class to project cards
                if (entry.target.id === 'projects') {
                    const projectCards = document.querySelectorAll('.project-card');
                    projectCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('show');
                        }, index * 150);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Touch device detection
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
        document.body.classList.add('touch-device');
        
        // Add hover effects for touch devices
        document.querySelectorAll('.project-card, .blog-card').forEach(card => {
            card.addEventListener('touchstart', function() {
                this.classList.add('hover-effect');
            });
            
            card.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.classList.remove('hover-effect');
                }, 500);
            });
        });
    }
    
    // Form handling (without email submission)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            submitBtn.classList.add('loading');
            
            // Simulate form submission
            setTimeout(() => {
                // Show success message
                alert('Thank you for your message! This is a demo form. In a real implementation, this would send an email.');
                
                // Reset form
                this.reset();
                
                // Reset button state
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
                submitBtn.classList.remove('loading');
            }, 1500);
        });
    }
});
const fs = require('fs');

const origCss = fs.readFileSync('/tmp/portfolio.css', 'utf8');
const js = fs.readFileSync('/tmp/portfolio.js', 'utf8');
const body = fs.readFileSync('/tmp/sanitized_body.html', 'utf8');

// Find boundaries
const navStart = body.indexOf('<nav>');
const navEnd = body.indexOf('</nav>') + 6;

const homeStart = body.indexOf('<header', navEnd);
const contactStart = body.indexOf('<section id="contact"');
const footerStart = body.indexOf('<footer');
const footerEnd = body.indexOf('</footer>') + 9;

const navHtml = body.slice(navStart, navEnd);
const heroToTerminalHtml = body.slice(homeStart, contactStart);
const contactHtml = body.slice(contactStart, footerStart);
const footerHtml = body.slice(footerStart, footerEnd);

// Custom Blog CSS to append to skin
const blogCss = `
/* ========================================================
   BLOGGER INTEGRATION STYLES (SOHAGSRZ THEME)
   ======================================================== */
.blog-section {
    padding: 70px 0 40px;
}

.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 26px;
    margin-top: 36px;
}

.blog-card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    border-radius: 18px;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.blog-card:hover {
    border-color: var(--primary);
    transform: translateY(-5px);
    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.6), 0 0 30px -5px rgba(99, 102, 241, 0.3);
}

.blog-card-thumb-wrap {
    width: 100%;
    height: 190px;
    overflow: hidden;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(6, 182, 212, 0.15));
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--border-color);
}

.blog-card-thumb-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.blog-card:hover .blog-card-thumb-img {
    transform: scale(1.05);
}

.blog-card-content {
    padding: 22px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.blog-card-meta {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.8rem;
    color: var(--text-dim);
    margin-bottom: 12px;
    font-family: 'JetBrains Mono', monospace;
}

.blog-badge {
    display: inline-block;
    padding: 3px 10px;
    border-radius: 9999px;
    font-size: 0.72rem;
    font-weight: 600;
    background: rgba(99, 102, 241, 0.15);
    color: var(--primary-light);
    border: 1px solid rgba(99, 102, 241, 0.3);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.blog-card-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-main);
    line-height: 1.4;
    margin-bottom: 10px;
    transition: color 0.2s ease;
}

.blog-card:hover .blog-card-title {
    color: var(--primary-light);
}

.blog-card-snippet {
    font-size: 0.92rem;
    color: var(--text-muted);
    line-height: 1.6;
    margin-bottom: 18px;
    flex-grow: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.blog-card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--primary-light);
    margin-top: auto;
}

/* Single Post View */
.post-view {
    padding: 50px 0 80px;
    max-width: 880px;
    margin: 0 auto;
}

.post-back-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--text-muted);
    text-decoration: none;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9rem;
    margin-bottom: 24px;
    transition: color 0.2s ease;
}

.post-back-link:hover {
    color: var(--primary-light);
}

.post-header-card {
    padding: 36px;
    margin-bottom: 28px;
}

.post-title {
    font-size: 2.3rem;
    font-weight: 800;
    line-height: 1.25;
    color: var(--text-main);
    margin: 14px 0 18px;
}

.post-meta-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px;
    font-size: 0.88rem;
    color: var(--text-muted);
    font-family: 'JetBrains Mono', monospace;
}

.post-body-card {
    padding: 42px;
    margin-bottom: 32px;
    font-size: 1.08rem;
    line-height: 1.8;
    color: #e2e8f0;
}

.post-body-card h1, .post-body-card h2, .post-body-card h3, .post-body-card h4 {
    color: var(--text-main);
    margin: 36px 0 16px;
    line-height: 1.3;
}

.post-body-card h2 {
    font-size: 1.65rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 10px;
}

.post-body-card h3 {
    font-size: 1.35rem;
}

.post-body-card p {
    margin-bottom: 22px;
}

.post-body-card a {
    color: var(--primary-light);
    text-decoration: underline;
    text-underline-offset: 3px;
}

.post-body-card a:hover {
    color: var(--secondary);
}

.post-body-card img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    margin: 24px 0;
    border: 1px solid var(--border-color);
}

.post-body-card pre {
    background: #030712 !important;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 22px;
    overflow-x: auto;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.92rem;
    margin: 24px 0;
}

.post-body-card code {
    font-family: 'JetBrains Mono', monospace;
    background: rgba(99, 102, 241, 0.12);
    color: var(--primary-light);
    padding: 2px 7px;
    border-radius: 6px;
    font-size: 0.9em;
}

.post-body-card pre code {
    background: transparent;
    padding: 0;
    color: #f1f5f9;
}

.post-body-card blockquote {
    border-left: 4px solid var(--primary);
    padding: 14px 24px;
    margin: 24px 0;
    background: rgba(99, 102, 241, 0.05);
    border-radius: 0 12px 12px 0;
    font-style: italic;
    color: var(--text-muted);
}

.post-body-card ul, .post-body-card ol {
    margin: 0 0 22px 28px;
}

.post-body-card li {
    margin-bottom: 8px;
}

/* Author Box */
.author-box {
    padding: 28px;
    margin-bottom: 32px;
    display: flex;
    gap: 22px;
    align-items: center;
}

.author-avatar-img {
    width: 74px;
    height: 74px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--primary);
    box-shadow: 0 0 15px rgba(99, 102, 241, 0.4);
    flex-shrink: 0;
}

/* Share buttons */
.share-bar {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 24px 0;
    flex-wrap: wrap;
}

.share-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 10px;
    font-size: 0.85rem;
    font-weight: 600;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.04);
    color: var(--text-main);
    border: 1px solid var(--border-color);
    cursor: pointer;
    transition: all 0.2s ease;
}

.share-btn:hover {
    background: rgba(99, 102, 241, 0.15);
    border-color: var(--primary-light);
    color: #fff;
}

/* Comments */
.comments-container {
    padding: 34px;
    margin-top: 32px;
}

/* Pagination */
.pagination-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 36px 0;
    gap: 16px;
}

.pager-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 22px;
    border-radius: 12px;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    color: var(--text-main);
    text-decoration: none;
    font-weight: 600;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9rem;
    transition: all 0.2s ease;
}

.pager-link:hover {
    border-color: var(--primary);
    background: rgba(99, 102, 241, 0.15);
    color: #fff;
}

@media (max-width: 768px) {
    .post-view {
        padding: 30px 0 60px;
    }
    .post-header-card, .post-body-card, .author-box, .comments-container {
        padding: 22px;
    }
    .post-title {
        font-size: 1.8rem;
    }
    .author-box {
        flex-direction: column;
        text-align: center;
    }
    .blog-grid {
        grid-template-columns: 1fr;
    }
}
`;

// Safe JS: wrap element checks
const safeJs = `
        // Set dynamic current year
        const currentYearEl = document.getElementById('current-year');
        if (currentYearEl) {
            currentYearEl.textContent = new Date().getFullYear();
        }

        // Typewriter Animation
        const typewriterPhrases = [
            "Full Stack Software Engineer ⚡",
            "Laravel & Next.js Architecture 🌐",
            "Packagist Open-Source Package Author 📦",
            "OpenAI & AI Autonomous Agents 🤖",
            "FPV Drone Builder & IoT Developer 🛩️",
            "Cloudflare Workers & Edge Computing ☁️"
        ];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeletingPhrase = false;
        const typedTextEl = document.getElementById('typed-text');

        function loopTypewriter() {
            if (!typedTextEl) return;
            const currentPhrase = typewriterPhrases[phraseIndex];
            if (isDeletingPhrase) {
                typedTextEl.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typedTextEl.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            let delay = isDeletingPhrase ? 40 : 80;

            if (!isDeletingPhrase && charIndex === currentPhrase.length) {
                delay = 2200;
                isDeletingPhrase = true;
            } else if (isDeletingPhrase && charIndex === 0) {
                isDeletingPhrase = false;
                phraseIndex = (phraseIndex + 1) % typewriterPhrases.length;
                delay = 400;
            }

            setTimeout(loopTypewriter, delay);
        }
        if (typedTextEl) loopTypewriter();

        // Copy to Clipboard Utility with Toast
        function copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => {
                showToast('Copied: "' + text + '" 📋');
            }).catch(() => {
                showToast("Failed to copy");
            });
        }

        function showToast(msg) {
            const toast = document.getElementById('toast');
            if (!toast) return;
            toast.textContent = msg;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 2500);
        }

        // Project Filter Tabs
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('#projects-grid .project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const category = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    if (category === 'all' || card.getAttribute('data-category') === category) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Interactive Terminal Emulator
        const termInput = document.getElementById('term-input');
        const termHistory = document.getElementById('term-history');
        const termBody = document.getElementById('term-body');

        if (termInput && termHistory && termBody) {
            termInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const cmd = termInput.value.trim().toLowerCase();
                    termInput.value = '';
                    if (!cmd) return;

                    let output = '';
                    switch (cmd) {
                        case 'help':
                            output = 'Available commands: whoami, skills, packages, projects, social, blog, contact, clear, date, sudo';
                            break;
                        case 'whoami':
                            output = 'Md Sohag Islam (@sohagsrz) - Full Stack Engineer, AI & FPV enthusiast from Bangladesh.';
                            break;
                        case 'skills':
                            output = 'Tech: PHP 8+, Laravel 11, Filament v3, Next.js, React, TypeScript, Three.js, Python, OpenAI, Docker, Cloudflare, ESP32.';
                            break;
                        case 'packages':
                            output = 'Packagist libraries: sohagsrz/resume-parser, sohagsrz/nowpayments-php-sdk, sohagsrz/fbmediadownloader, sohagsrz/instagram-media-downloader.';
                            break;
                        case 'projects':
                            output = 'Featured: SohagAgent, FarmStore Marketplace, FPV Flight Controller, Bengali Quran LLM, CTF Tooling, Server Automation.';
                            break;
                        case 'social':
                            output = 'GitHub: github.com/sohagsrz | LinkedIn: linkedin.com/in/sohagsrz | X: x.com/sohagsrz | YouTube: youtube.com/@SohagSrz';
                            break;
                        case 'blog':
                            output = 'Explore articles and technical notes below in the blog section!';
                            break;
                        case 'contact':
                            output = 'Direct Email: mdsohagislam25@gmail.com | Portfolio: https://sohag.xyz';
                            break;
                        case 'date':
                            output = new Date().toString();
                            break;
                        case 'sudo':
                            output = 'Permission denied: Nice try! But you already have visitor super-powers. ✨';
                            break;
                        case 'clear':
                            termHistory.innerHTML = '';
                            return;
                        default:
                            output = 'Command not recognized: "' + cmd + '". Type "help" for available commands.';
                    }

                    const cmdRow = document.createElement('div');
                    cmdRow.className = 'terminal-command';
                    cmdRow.textContent = '$ ' + cmd;

                    const outRow = document.createElement('div');
                    outRow.className = 'terminal-output';
                    outRow.innerHTML = output;

                    termHistory.appendChild(cmdRow);
                    termHistory.appendChild(outRow);
                    termBody.scrollTop = termBody.scrollHeight;
                }
            });
        }

        // Mobile Nav Toggle
        const mobileToggle = document.getElementById('mobile-toggle');
        const navLinks = document.querySelector('.nav-links');
        if (mobileToggle && navLinks) {
            mobileToggle.addEventListener('click', () => {
                const isShown = navLinks.classList.contains('mobile-open');
                if (isShown) {
                    navLinks.classList.remove('mobile-open');
                    navLinks.style.display = 'none';
                } else {
                    navLinks.classList.add('mobile-open');
                    navLinks.style.display = 'flex';
                    navLinks.style.flexDirection = 'column';
                    navLinks.style.position = 'absolute';
                    navLinks.style.top = '100%';
                    navLinks.style.left = '0';
                    navLinks.style.width = '100%';
                    navLinks.style.background = 'rgba(6, 9, 17, 0.95)';
                    navLinks.style.padding = '20px';
                    navLinks.style.borderRadius = '16px';
                    navLinks.style.border = '1px solid var(--border-color)';
                    navLinks.style.marginTop = '10px';
                }
            });
        }

        // Three.js 3D Background Engine
        (function initThreeBackground() {
            const canvas = document.getElementById('webgl-bg');
            if (!canvas || typeof THREE === 'undefined') return;

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 30, 75);

            const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            const separation = 3.2;
            const cols = window.innerWidth < 768 ? 40 : 70;
            const rows = window.innerWidth < 768 ? 35 : 55;
            const totalPoints = cols * rows;

            const waveGeo = new THREE.BufferGeometry();
            const positions = new Float32Array(totalPoints * 3);
            const colors = new Float32Array(totalPoints * 3);

            const color1 = new THREE.Color(0x6366f1);
            const color2 = new THREE.Color(0x06b6d4);
            const color3 = new THREE.Color(0xec4899);

            let pIndex = 0;
            for (let ix = 0; ix < cols; ix++) {
                for (let iy = 0; iy < rows; iy++) {
                    positions[pIndex * 3] = (ix - cols / 2) * separation;
                    positions[pIndex * 3 + 1] = 0;
                    positions[pIndex * 3 + 2] = (iy - rows / 2) * separation;

                    const factor = (ix + iy) / (cols + rows);
                    const c = factor < 0.5 
                        ? color1.clone().lerp(color2, factor * 2)
                        : color2.clone().lerp(color3, (factor - 0.5) * 2);

                    colors[pIndex * 3] = c.r;
                    colors[pIndex * 3 + 1] = c.g;
                    colors[pIndex * 3 + 2] = c.b;

                    pIndex++;
                }
            }

            waveGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            waveGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

            const waveMat = new THREE.PointsMaterial({
                size: 1.3,
                vertexColors: true,
                transparent: true,
                opacity: 0.45,
                blending: THREE.AdditiveBlending
            });

            const wavePoints = new THREE.Points(waveGeo, waveMat);
            wavePoints.position.y = -26;
            scene.add(wavePoints);

            const dustCount = window.innerWidth < 768 ? 150 : 350;
            const dustGeo = new THREE.BufferGeometry();
            const dustPos = new Float32Array(dustCount * 3);
            for (let i = 0; i < dustCount * 3; i += 3) {
                dustPos[i] = (Math.random() - 0.5) * 140;
                dustPos[i + 1] = (Math.random() - 0.5) * 80 + 10;
                dustPos[i + 2] = (Math.random() - 0.5) * 140;
            }
            dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
            const dustMat = new THREE.PointsMaterial({
                size: 1.1,
                color: 0x818cf8,
                transparent: true,
                opacity: 0.25,
                blending: THREE.AdditiveBlending
            });
            const dustParticles = new THREE.Points(dustGeo, dustMat);
            scene.add(dustParticles);

            let targetMouseX = 0;
            let targetMouseY = 0;
            let mouseX = 0;
            let mouseY = 0;

            window.addEventListener('mousemove', (e) => {
                targetMouseX = (e.clientX - window.innerWidth / 2) * 0.035;
                targetMouseY = (e.clientY - window.innerHeight / 2) * 0.025;
            });

            let scrollY = 0;
            window.addEventListener('scroll', () => {
                scrollY = window.scrollY * 0.015;
            }, { passive: true });

            let step = 0;
            function animate() {
                requestAnimationFrame(animate);

                step += 0.03;
                const pos = waveGeo.attributes.position.array;

                let i = 0;
                for (let ix = 0; ix < cols; ix++) {
                    for (let iy = 0; iy < rows; iy++) {
                        pos[i + 1] = (Math.sin(ix * 0.28 + step) * 2.5) + (Math.sin(iy * 0.28 + step * 0.8) * 2.5);
                        i += 3;
                    }
                }
                waveGeo.attributes.position.needsUpdate = true;
                dustParticles.rotation.y += 0.0006;

                mouseX += (targetMouseX - mouseX) * 0.05;
                mouseY += (targetMouseY - mouseY) * 0.05;

                camera.position.x = mouseX;
                camera.position.y = 30 - mouseY - scrollY;
                camera.lookAt(0, -10 - scrollY * 0.5, 0);

                renderer.render(scene, camera);
            }
            animate();

            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        })();
`;

// Build final XML
const themeXml = `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:defaultwidgetversion='2' b:layoutsVersion='3' b:responsive='true' expr:dir='data:blog.languageDirection' expr:lang='data:blog.locale' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
  <head>
    <meta content='width=device-width, initial-scale=1' name='viewport'/>
    <meta content='Md Sohag Islam (sohagsrz) - Full Stack Software Engineer, AI Architect, Packagist Package Creator &amp; FPV Drone Builder.' name='description'/>
    <meta content='Md Sohag Islam, sohagsrz, Full Stack Developer, Laravel, Next.js, Packagist, AI Developer, OpenAI, FPV Drone, Bangladesh' name='keywords'/>
    <meta content='Md Sohag Islam' name='author'/>
    
    <title><data:view.title.escaped/></title>
    
    <b:include data='blog' name='all-head-content'/>

    <!-- Fonts -->
    <link rel='preconnect' href='https://fonts.googleapis.com'/>
    <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin='anonymous'/>
    <link href='https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&amp;family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;display=swap' rel='stylesheet'/>

    <!-- Font Awesome Icons -->
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'/>

    <!-- Three.js Engine -->
    <script src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'></script>

    <b:skin version='1.3.3'><![CDATA[
${origCss}
${blogCss}
    ]]></b:skin>
  </head>

  <body>
    <!-- 3D Three.js Visual Background Canvas -->
    <canvas id='webgl-bg'></canvas>

    <!-- Ambient Mesh Glow Background -->
    <div class='ambient-glow'></div>

    <!-- Notification Toast -->
    <div class='toast' id='toast'></div>

    <div class='main-wrapper'>
      <!-- Sticky Navigation -->
      <nav>
        <div class='navbar-inner'>
          <a class='nav-logo' expr:href='data:blog.canonicalHomepageUrl'>
            <span class='status-dot' title='Available for work'></span>
            <span>Md Sohag Islam</span>
            <span class='font-mono' style='font-size: 0.8rem; color: var(--primary-light); margin-left: 4px;'>@sohagsrz</span>
          </a>

          <b:if cond='data:view.isHomepage'>
            <ul class='nav-links'>
              <li><a class='nav-link' href='#about'>About</a></li>
              <li><a class='nav-link' href='#gallery'>Gallery</a></li>
              <li><a class='nav-link' href='#packages'>Packages</a></li>
              <li><a class='nav-link' href='#projects'>Projects</a></li>
              <li><a class='nav-link' href='#skills'>Tech Stack</a></li>
              <li><a class='nav-link' href='#blog'>Articles</a></li>
              <li><a class='nav-link' href='#terminal'>Terminal</a></li>
              <li><a class='nav-link' href='#contact'>Contact</a></li>
            </ul>
          <b:else/>
            <ul class='nav-links'>
              <li><a class='nav-link' expr:href='data:blog.canonicalHomepageUrl + &quot;#about&quot;'>About</a></li>
              <li><a class='nav-link' expr:href='data:blog.canonicalHomepageUrl + &quot;#gallery&quot;'>Gallery</a></li>
              <li><a class='nav-link' expr:href='data:blog.canonicalHomepageUrl + &quot;#packages&quot;'>Packages</a></li>
              <li><a class='nav-link' expr:href='data:blog.canonicalHomepageUrl + &quot;#projects&quot;'>Projects</a></li>
              <li><a class='nav-link' expr:href='data:blog.canonicalHomepageUrl + &quot;#skills&quot;'>Tech Stack</a></li>
              <li><a class='nav-link' expr:href='data:blog.canonicalHomepageUrl + &quot;#blog&quot;'>Articles</a></li>
              <li><a class='nav-link' expr:href='data:blog.canonicalHomepageUrl + &quot;#terminal&quot;'>Terminal</a></li>
              <li><a class='nav-link' expr:href='data:blog.canonicalHomepageUrl + &quot;#contact&quot;'>Contact</a></li>
            </ul>
          </b:if>

          <div style='display: flex; align-items: center; gap: 12px;'>
            <a class='nav-cta' href='mailto:mdsohagislam25@gmail.com'>
              <i class='fas fa-paper-plane'></i> Hire Me
            </a>
            <button aria-label='Toggle Navigation' class='mobile-menu-btn' id='mobile-toggle'>
              <i class='fas fa-bars'></i>
            </button>
          </div>
        </div>
      </nav>

      <!-- Optional Blogger Header Section for Layout Editor -->
      <b:section class='header-section' id='header-section' showaddelement='no'/>

      <!-- Portfolio Hero to Terminal (Rendered on Homepage) -->
      <b:if cond='data:view.isHomepage'>
${heroToTerminalHtml}
      </b:if>

      <!-- Blogger Main Section (Blog1 widget) -->
      <b:section class='main-blog-section' id='main-blog-section' showaddelement='yes'>
        <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog' version='2' visible='true'>
          <b:widget-settings>
            <b:widget-setting name='showDateHeader'>true</b:widget-setting>
            <b:widget-setting name='style.firstPostCaps'>false</b:widget-setting>
            <b:widget-setting name='showShareButtons'>true</b:widget-setting>
            <b:widget-setting name='showCommentLink'>true</b:widget-setting>
            <b:widget-setting name='showAuthor'>true</b:widget-setting>
            <b:widget-setting name='showAuthorProfile'>false</b:widget-setting>
            <b:widget-setting name='style.layout'>1x1</b:widget-setting>
            <b:widget-setting name='showLabels'>true</b:widget-setting>
            <b:widget-setting name='showLocation'>false</b:widget-setting>
            <b:widget-setting name='showTimestamp'>true</b:widget-setting>
            <b:widget-setting name='postsPerAd'>1</b:widget-setting>
            <b:widget-setting name='showBacklinks'>false</b:widget-setting>
            <b:widget-setting name='showInlineAds'>false</b:widget-setting>
            <b:widget-setting name='showReactions'>false</b:widget-setting>
          </b:widget-settings>

          <b:includable id='main'>
            <b:if cond='data:view.isMultipleItems'>
              <!-- Homepage / Articles listing -->
              <b:if cond='data:view.isHomepage'>
                <section class='blog-section' id='blog'>
                  <div class='section-header' style='text-align: center; margin-bottom: 40px;'>
                    <div class='section-tag' style='display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; border-radius: 9999px; background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.3); color: var(--primary-light); font-size: 0.82rem; font-family: &quot;JetBrains Mono&quot;, monospace; margin-bottom: 12px;'>
                      <i class='fas fa-newspaper'></i> Articles &amp; Insights
                    </div>
                    <h2 style='font-size: 2.2rem; font-weight: 800; color: var(--text-main); margin-bottom: 12px;'>Latest Technical Writing</h2>
                    <p style='color: var(--text-muted); max-width: 650px; margin: 0 auto; font-size: 1.05rem;'>Deep dives into backend systems, Laravel architectures, AI agent platforms, package development, and embedded IoT.</p>
                  </div>

                  <div class='blog-grid'>
                    <b:loop values='data:posts' var='post'>
                      <article class='blog-card glass-card'>
                        <div class='blog-card-thumb-wrap'>
                          <b:if cond='data:post.featuredImage'>
                            <img class='blog-card-thumb-img' expr:alt='data:post.title' expr:src='data:post.featuredImage'/>
                          <b:else/>
                            <i class='fas fa-code' style='font-size: 2.5rem; color: var(--primary-light);'></i>
                          </b:if>
                        </div>
                        <div class='blog-card-content'>
                          <div class='blog-card-meta'>
                            <span><i class='far fa-calendar-alt'></i> <data:post.date/></span>
                            <b:if cond='data:post.labels'>
                              <span>&#8226;</span>
                              <span class='blog-badge'><data:post.labels.first.name/></span>
                            </b:if>
                          </div>
                          <h3 class='blog-card-title'>
                            <a expr:href='data:post.url' style='color: inherit; text-decoration: none;'><data:post.title/></a>
                          </h3>
                          <div class='blog-card-snippet'>
                            <data:post.snippet/>
                          </div>
                          <div class='blog-card-footer'>
                            <a class='read-more-link' expr:href='data:post.url' style='color: var(--primary-light); text-decoration: none; display: inline-flex; align-items: center; gap: 6px; font-weight: 600;'>
                              Read Article <i class='fas fa-arrow-right'></i>
                            </a>
                          </div>
                        </div>
                      </article>
                    </b:loop>
                  </div>

                  <b:if cond='data:posts.empty'>
                    <div class='glass-card' style='text-align: center; padding: 50px 24px; max-width: 650px; margin: 0 auto;'>
                      <i class='fas fa-pen-nib' style='font-size: 2.5rem; color: var(--primary-light); margin-bottom: 16px;'></i>
                      <h3 style='font-size: 1.3rem; margin-bottom: 8px;'>New Articles Coming Soon</h3>
                      <p style='color: var(--text-muted); font-size: 0.95rem;'>I regularly write technical articles on PHP, Laravel package development, AI systems, and hardware reverse engineering. Stay tuned!</p>
                    </div>
                  </b:if>
                </section>
              <b:else/>
                <!-- Search / Archive / Label Page -->
                <section class='blog-archive-section' style='padding: 60px 0 80px; min-height: 70vh;'>
                  <div style='margin-bottom: 36px;'>
                    <a expr:href='data:blog.canonicalHomepageUrl' style='display: inline-flex; align-items: center; gap: 8px; color: var(--text-muted); text-decoration: none; font-family: &quot;JetBrains Mono&quot;, monospace; font-size: 0.9rem; margin-bottom: 20px;'>
                      <i class='fas fa-arrow-left'></i> Back to Portfolio
                    </a>
                    <div class='archive-header glass-card' style='padding: 32px;'>
                      <b:if cond='data:view.isLabelSearch'>
                        <div style='color: var(--primary-light); font-family: &quot;JetBrains Mono&quot;, monospace; font-size: 0.85rem; margin-bottom: 6px;'>LABEL FILTER</div>
                        <h1 style='font-size: 2rem; color: var(--text-main); margin: 0;'>Articles tagged: #<data:view.search.label/></h1>
                      <b:elseif cond='data:view.isSearch'/>
                        <div style='color: var(--primary-light); font-family: &quot;JetBrains Mono&quot;, monospace; font-size: 0.85rem; margin-bottom: 6px;'>SEARCH QUERY</div>
                        <h1 style='font-size: 2rem; color: var(--text-main); margin: 0;'>Search results for: &quot;<data:view.search.query/>&quot;</h1>
                      <b:elseif cond='data:view.isArchive'/>
                        <div style='color: var(--primary-light); font-family: &quot;JetBrains Mono&quot;, monospace; font-size: 0.85rem; margin-bottom: 6px;'>ARCHIVE</div>
                        <h1 style='font-size: 2rem; color: var(--text-main); margin: 0;'>Archive for <data:view.archive.rangeMessage/></h1>
                      <b:else/>
                        <h1 style='font-size: 2rem; color: var(--text-main); margin: 0;'>Articles</h1>
                      </b:if>
                    </div>
                  </div>

                  <div class='blog-grid'>
                    <b:loop values='data:posts' var='post'>
                      <article class='blog-card glass-card'>
                        <div class='blog-card-thumb-wrap'>
                          <b:if cond='data:post.featuredImage'>
                            <img class='blog-card-thumb-img' expr:alt='data:post.title' expr:src='data:post.featuredImage'/>
                          <b:else/>
                            <i class='fas fa-code' style='font-size: 2.5rem; color: var(--primary-light);'></i>
                          </b:if>
                        </div>
                        <div class='blog-card-content'>
                          <div class='blog-card-meta'>
                            <span><i class='far fa-calendar-alt'></i> <data:post.date/></span>
                            <b:if cond='data:post.labels'>
                              <span>&#8226;</span>
                              <span class='blog-badge'><data:post.labels.first.name/></span>
                            </b:if>
                          </div>
                          <h3 class='blog-card-title'>
                            <a expr:href='data:post.url' style='color: inherit; text-decoration: none;'><data:post.title/></a>
                          </h3>
                          <div class='blog-card-snippet'>
                            <data:post.snippet/>
                          </div>
                          <div class='blog-card-footer'>
                            <a class='read-more-link' expr:href='data:post.url' style='color: var(--primary-light); text-decoration: none; display: inline-flex; align-items: center; gap: 6px; font-weight: 600;'>
                              Read Article <i class='fas fa-arrow-right'></i>
                            </a>
                          </div>
                        </div>
                      </article>
                    </b:loop>
                  </div>

                  <!-- Pagination -->
                  <div class='pagination-row'>
                    <b:if cond='data:newerPageUrl'>
                      <a class='pager-link' expr:href='data:newerPageUrl'><i class='fas fa-chevron-left'></i> Newer Articles</a>
                    <b:else/>
                      <div></div>
                    </b:if>
                    <b:if cond='data:olderPageUrl'>
                      <a class='pager-link' expr:href='data:olderPageUrl'>Older Articles <i class='fas fa-chevron-right'></i></a>
                    </b:if>
                  </div>
                </section>
              </b:if>
            <b:else/>
              <!-- Single Post / Page View -->
              <b:loop values='data:posts' var='post'>
                <div class='post-view'>
                  <a class='post-back-link' expr:href='data:blog.canonicalHomepageUrl'>
                    <i class='fas fa-arrow-left'></i> Back to Portfolio &amp; Home
                  </a>

                  <article class='glass-card post-header-card'>
                    <b:if cond='data:post.labels'>
                      <div style='display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 14px;'>
                        <b:loop values='data:post.labels' var='label'>
                          <a class='blog-badge' expr:href='data:label.url' style='text-decoration: none;'><data:label.name/></a>
                        </b:loop>
                      </div>
                    </b:if>

                    <h1 class='post-title'><data:post.title/></h1>

                    <div class='post-meta-bar'>
                      <span><i class='far fa-calendar-alt'></i> <data:post.date/></span>
                      <span>&#8226;</span>
                      <span><i class='fas fa-user'></i> Md Sohag Islam (@sohagsrz)</span>
                      <b:if cond='data:post.allowComments'>
                        <span>&#8226;</span>
                        <span><i class='far fa-comment'></i> <data:post.numComments/> Comments</span>
                      </b:if>
                    </div>
                  </article>

                  <div class='glass-card post-body-card'>
                    <div class='entry-content' id='post-body'>
                      <data:post.body/>
                    </div>

                    <!-- Social Share Bar -->
                    <div style='margin-top: 40px; padding-top: 24px; border-top: 1px solid var(--border-color);'>
                      <div style='font-size: 0.88rem; font-family: &quot;JetBrains Mono&quot;, monospace; color: var(--text-muted); margin-bottom: 14px;'>SHARE THIS ARTICLE</div>
                      <div class='share-bar'>
                        <a class='share-btn' expr:href='&quot;https://twitter.com/intent/tweet?text=&quot; + data:post.title + &quot;&amp;url=&quot; + data:post.url' target='_blank'>
                          <i class='fab fa-x-twitter'></i> Share on X
                        </a>
                        <a class='share-btn' expr:href='&quot;https://www.linkedin.com/sharing/share-offsite/?url=&quot; + data:post.url' target='_blank'>
                          <i class='fab fa-linkedin'></i> LinkedIn
                        </a>
                        <a class='share-btn' expr:href='&quot;https://www.facebook.com/sharer/sharer.php?u=&quot; + data:post.url' target='_blank'>
                          <i class='fab fa-facebook'></i> Facebook
                        </a>
                        <button class='share-btn' expr:onclick='&quot;copyToClipboard(\&quot;&quot; + data:post.url + &quot;\&quot;)&quot;' type='button'>
                          <i class='far fa-copy'></i> Copy Link
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- Author Profile Box -->
                  <div class='glass-card author-box'>
                    <img alt='Md Sohag Islam' class='author-avatar-img' src='https://avatars.githubusercontent.com/u/39012004?v=4'/>
                    <div style='flex-grow: 1;'>
                      <div style='font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--primary-light); font-family: &quot;JetBrains Mono&quot;, monospace; margin-bottom: 4px;'>WRITTEN BY</div>
                      <h3 style='font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-bottom: 6px;'>Md Sohag Islam (@sohagsrz)</h3>
                      <p style='color: var(--text-muted); font-size: 0.92rem; line-height: 1.5; margin-bottom: 12px;'>Full-Stack Software Engineer &amp; Open-Source Package Author from Bangladesh. Specializing in high-throughput backend architecture, AI agents, Cloudflare edge systems, and FPV drone hardware.</p>
                      <div style='display: flex; gap: 14px; font-size: 1.15rem;'>
                        <a href='https://github.com/sohagsrz' style='color: var(--text-muted);' target='_blank' title='GitHub'><i class='fab fa-github'></i></a>
                        <a href='https://packagist.org/packages/sohagsrz/' style='color: var(--text-muted);' target='_blank' title='Packagist'><i class='fas fa-box-open'></i></a>
                        <a href='https://linkedin.com/in/sohagsrz' style='color: var(--text-muted);' target='_blank' title='LinkedIn'><i class='fab fa-linkedin'></i></a>
                        <a href='https://x.com/sohagsrz' style='color: var(--text-muted);' target='_blank' title='X / Twitter'><i class='fab fa-x-twitter'></i></a>
                        <a href='https://youtube.com/@SohagSrz' style='color: var(--text-muted);' target='_blank' title='YouTube'><i class='fab fa-youtube'></i></a>
                        <a href='mailto:mdsohagislam25@gmail.com' style='color: var(--text-muted);' title='Email'><i class='fas fa-envelope'></i></a>
                      </div>
                    </div>
                  </div>

                  <!-- Post Navigation -->
                  <div class='pagination-row'>
                    <b:if cond='data:newerPageUrl'>
                      <a class='pager-link' expr:href='data:newerPageUrl'><i class='fas fa-chevron-left'></i> Newer Post</a>
                    <b:else/>
                      <div></div>
                    </b:if>
                    <b:if cond='data:olderPageUrl'>
                      <a class='pager-link' expr:href='data:olderPageUrl'>Older Post <i class='fas fa-chevron-right'></i></a>
                    </b:if>
                  </div>

                  <!-- Comments Container -->
                  <b:if cond='data:post.allowComments'>
                    <div class='glass-card comments-container' id='comments'>
                      <h3 style='font-size: 1.35rem; font-weight: 700; margin-bottom: 24px; display: flex; align-items: center; gap: 10px;'>
                        <i class='far fa-comments' style='color: var(--primary-light);'></i> Discussion (<data:post.numComments/>)
                      </h3>
                      <div class='comments-content'>
                        <data:post.commentHtml/>
                      </div>
                    </div>
                  </b:if>
                </div>
              </b:loop>
            </b:if>
          </b:includable>
        </b:widget>
      </b:section>

      <!-- Contact Section (Rendered on Homepage) -->
      <b:if cond='data:view.isHomepage'>
${contactHtml}
      </b:if>

      <!-- Footer Section for Layout Editor -->
      <b:section class='footer-section' id='footer-section' showaddelement='no'/>

      <!-- Footer -->
${footerHtml}
    </div>

    <!-- Scripts -->
    <script>
//<![CDATA[
${safeJs}
//]]>
    </script>
  </body>
</html>`;

fs.writeFileSync('theme-6138198487133513801.xml', themeXml);
fs.writeFileSync('blogger-theme-sohagsrz.xml', themeXml);
console.log('Successfully wrote theme-6138198487133513801.xml and blogger-theme-sohagsrz.xml');

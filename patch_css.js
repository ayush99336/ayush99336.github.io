const fs = require('fs');
let css = fs.readFileSync('assets/css/style.css', 'utf8');

const newCSS = `

.site-container {
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: 0 auto;
  min-height: 100vh;
}

@media (min-width: 800px) {
  .site-container {
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 4rem 2rem;
    gap: 4rem;
  }
}

.site-sidebar {
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  border-bottom: 2px solid var(--line);
  background: var(--bg);
}

@media (min-width: 800px) {
  .site-sidebar {
    width: 280px;
    flex-shrink: 0;
    position: sticky;
    top: 4rem;
    padding: 0;
    border-bottom: none;
    background: transparent;
  }
}

.site-header {
  border-bottom: none;
  padding: 0;
}

.header-stack {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.brand-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.brand-content {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.profile-avatar {
  width: 5rem;
  height: 5rem;
  border-radius: 12%; 
  object-fit: cover;
  object-position: center 30%;
  border: 1px solid var(--line);
}

.site-title {
  display: inline-block;
  text-decoration: none;
  font-size: 1.6rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-weight: 800;
  line-height: 1.1;
}

.site-tagline {
  margin: 0;
  font-family: "IBM Plex Mono", "Courier New", monospace;
  font-size: 0.88rem;
  color: var(--muted);
  line-height: 1.4;
}

.header-actions {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 1.5rem;
}

.site-nav {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

@media (min-width: 800px) {
  .site-nav {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }
}

.site-nav a {
  text-decoration: none;
  text-transform: lowercase;
  font-family: "IBM Plex Mono", "Courier New", monospace;
  font-size: 0.95rem;
  border-bottom: 1px solid transparent;
  width: fit-content;
}

.site-nav a:hover {
  border-color: var(--line);
  color: var(--accent);
}

.social-icon-row {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 0.5rem;
}

.social-icon-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  color: var(--muted);
  text-decoration: none;
  opacity: 0.82;
  transition: color 0.18s ease, opacity 0.18s ease, transform 0.18s ease;
}

.social-icon-link svg {
  width: 1rem;
  height: 1rem;
  fill: currentColor;
}

.social-icon-link:hover {
  opacity: 1;
  color: var(--accent);
  transform: translateY(-1px);
}

.site-footer {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px dotted #c3b8a8;
  color: var(--muted);
  font-family: "IBM Plex Mono", "Courier New", monospace;
  font-size: 0.74rem;
  line-height: 1.4;
}

.page-content {
  flex: 1;
  min-width: 0;
  padding: 2rem 1.5rem;
}

@media (min-width: 800px) {
  .page-content {
    padding: 0;
    max-width: 650px;
  }
}

`;

// Strip out old header and footer layout CSS up until .panel classes
let startIdx = css.indexOf('.wrapper {');
let endIdx = css.indexOf('.panel {');

if(startIdx !== -1 && endIdx !== -1) {
  fs.writeFileSync('assets/css/style.css', css.substring(0, startIdx) + newCSS + css.substring(endIdx));
  console.log('CSS Replaced');
} else {
  console.log('Failed', startIdx, endIdx);
}

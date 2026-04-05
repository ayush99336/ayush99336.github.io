const fs = require('fs');
let css = fs.readFileSync('assets/css/style.css', 'utf8');

const oldCss = `.site-header {
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

.header-grid {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.brand-content {
  min-width: 0;
}

.title-row {
  display: flex;
  align-items: center;
  gap: 0.55rem;
}

.profile-avatar {
  width: 3rem;
  height: 3rem;
  border-radius: 999px;
  object-fit: cover;
  object-position: center 30%;
  border: 1px solid #bdb3a0;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.08);
}

.site-title {
  display: inline-block;
  text-decoration: none;
  font-size: clamp(1.45rem, 4vw, 1.85rem);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  font-weight: 700;
}

.site-tagline {
  margin: 0.1rem 0 0;
  font-family: "IBM Plex Mono", "Courier New", monospace;
  font-size: 0.82rem;
  color: var(--muted);
}

.site-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  justify-content: flex-end;
}
`;

const newCss = \`.site-header {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}

.header-stack {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

@media (min-width: 600px) {
  .header-stack {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.brand-content {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.profile-avatar {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 6px;
  object-fit: cover;
  object-position: center 30%;
}

.site-title {
  display: inline-block;
  text-decoration: none;
  font-size: clamp(1.45rem, 4vw, 1.85rem);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1;
}

.site-tagline {
  margin: 0;
  font-family: "IBM Plex Mono", "Courier New", monospace;
  font-size: 0.85rem;
  color: var(--muted);
}

.header-actions {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

@media (min-width: 600px) {
  .header-actions {
    align-items: flex-end;
  }
}

.site-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
}
\`;

if (css.includes(oldCss)) {
  fs.writeFileSync('assets/css/style.css', css.replace(oldCss, newCss));
  console.log('Patched');
} else {
  console.log('Did not match strictly, doing fuzzy match...');
  let startIdx = css.indexOf('.site-header {');
  let endIdx = css.indexOf('.site-nav a {');
  if(startIdx !== -1 && endIdx !== -1) {
    fs.writeFileSync('assets/css/style.css', css.substring(0, startIdx) + newCss + css.substring(endIdx));
    console.log('Patched via index replacement');
  } else {
    console.log('Failed');
  }
}

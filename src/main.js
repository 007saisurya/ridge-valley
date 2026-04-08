import './style.css'

const navbarHTML = `
  <nav class="navbar">
    <div class="container">
      <a href="/" class="logo">RIDGE<span>VALLEY</span><span style="font-size: 0.8rem; font-weight: 500; margin-left: 2px;">CO</span></a>
      <div class="nav-links">
        <a href="/" class="${window.location.pathname === '/' || window.location.pathname === '/index.html' ? 'active' : ''}">Home</a>
        <a href="/products.html" class="${window.location.pathname.includes('products') ? 'active' : ''}">Products</a>
        <a href="/locations.html" class="${window.location.pathname.includes('locations') ? 'active' : ''}">Locations</a>
        <a href="/contact.html" class="${window.location.pathname.includes('contact') ? 'active' : ''}">Contact</a>
        <a href="/contact.html" class="btn btn-primary" style="padding: 8px 16px; margin-left: 15px;">Get a Quote</a>
      </div>
      <button class="mobile-menu-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
    </div>
  </nav>
`;

const footerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <a href="/" class="logo" style="color: white; margin-bottom: 20px; display: inline-flex;">RIDGE<span style="color: var(--color-yellow);">VALLEY</span><span style="font-size: 0.8rem; font-weight: 500; margin-left: 2px; color: white;">CO</span></a>
          <p style="max-width: 300px;">Professional packaging solutions provider specializing in high-quality packaging, cutting-edge technology, and exceptional customer service.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/products.html">Products</a></li>
            <li><a href="/locations.html">Locations</a></li>
            <li><a href="/contact.html">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4>Locations</h4>
          <ul class="footer-links" style="opacity: 0.7; max-width: 200px;">
            <li style="display: flex; gap: 8px;"><div style="color: var(--color-yellow);">⚲</div> <div><strong>Phoenix</strong><br/>2536 S Wilson St, Suite 104, Tempe, AZ 85282</div></li>
            <li style="display: flex; gap: 8px; margin-top: 15px;"><div style="color: var(--color-yellow);">⚲</div> <div><strong>Brooklyn</strong><br/>14 53rd St, 6th & 7th Floors, Brooklyn, NY 11232</div></li>
            <li style="display: flex; gap: 8px; margin-top: 15px;"><div style="color: var(--color-yellow);">⚲</div> <div><strong>Salt Lake City</strong><br/>1580 S 500 W, Suite 100, Salt Lake City, UT 8411</div></li>
          </ul>
        </div>
        <div>
          <h4>Contact Us</h4>
          <ul class="footer-links">
            <li style="display: flex; align-items: center; gap: 8px; color: var(--color-yellow); margin-bottom: 15px;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <a href="tel:7028174778" style="color: var(--color-light-gray); opacity: 1;">(702) 817-4778</a>
            </li>
            <li style="display: flex; align-items: center; gap: 8px; color: var(--color-yellow);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <a href="mailto:info@ridgevalley.co" style="color: var(--color-light-gray); opacity: 1;">info@ridgevalley.co</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Ridge Valley Packaging. All rights reserved.</p>
      </div>
    </div>
  </footer>
`;

// Inject into DOM
document.addEventListener('DOMContentLoaded', () => {
  const navContainer = document.getElementById('navbar-container');
  if (navContainer) navContainer.innerHTML = navbarHTML;

  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) footerContainer.innerHTML = footerHTML;
});

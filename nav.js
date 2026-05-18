(function () {

  // ─────────────────────────────────────────────────────────────
  //  PAGES LIST — edit only this array to add / remove nav items
  //
  //  Each entry: { href: 'filename.html', label: 'Display Name' }
  //
  //  Example — adding a Wildlife page:
  //    { href: 'wildlife.html', label: 'Wildlife' },
  // ─────────────────────────────────────────────────────────────
  var pages = [
    { href: 'index.html',           label: 'Home' },
    { href: 'gallery.html',         label: 'Gallery' },
    { href: 'flower-blog.html',     label: 'Flower Blog' },
    { href: 'nature-literacy.html', label: 'Nature Literacy' },
    { href: 'about.html',           label: 'About' },
    // ↓ Add new pages below this line
  ];

  // Detect the current page filename
  var current = window.location.pathname.split('/').pop() || 'index.html';
  // GitHub Pages sometimes strips .html — normalise
  if (!current.endsWith('.html')) current = current ? current + '.html' : 'index.html';

  // Inject navbar links
  var navUl = document.getElementById('navLinks');
  if (navUl) {
    navUl.innerHTML = pages.map(function (p) {
      var isActive = (current === p.href);
      return '<li><a href="' + p.href + '"' + (isActive ? ' class="active"' : '') + '>' + p.label + '</a></li>';
    }).join('');
  }

  // Inject footer links
  var footerUl = document.getElementById('footerLinks');
  if (footerUl) {
    footerUl.innerHTML = pages.map(function (p) {
      return '<li><a href="' + p.href + '">' + p.label + '</a></li>';
    }).join('');
  }

  // Mobile toggle
  var toggle = document.getElementById('navToggle');
  var links  = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

})();

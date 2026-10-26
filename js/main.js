// FIN ARS – main interactions

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.classList.toggle('open');
    });
  }

  // Background slideshow – slower & more elegant
  const slides = document.querySelectorAll('.bg-slide');
  if (slides.length) {
    let current = 0;
    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 8500);
  }

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  let galleryImages = [];
  let currentIndex = 0;

  function openLightbox(src, alt = '') {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function showNext(dir = 1) {
    if (!galleryImages.length) return;
    currentIndex = (currentIndex + dir + galleryImages.length) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex].src;
    lightboxImg.alt = galleryImages[currentIndex].alt || '';
  }

  // Collect all zoomable images
  document.querySelectorAll('.gallery-item img, .project-image img, .zoomable').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const parent = img.closest('.gallery');
      if (parent) {
        galleryImages = Array.from(parent.querySelectorAll('img')).map(i => ({ src: i.src, alt: i.alt }));
        currentIndex = galleryImages.findIndex(i => i.src === img.src);
      } else {
        galleryImages = [{ src: img.src, alt: img.alt }];
        currentIndex = 0;
      }
      openLightbox(img.src, img.alt);
    });
  });

  if (lightbox) {
    lightbox.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-prev')?.addEventListener('click', () => showNext(-1));
    lightbox.querySelector('.lightbox-next')?.addEventListener('click', () => showNext(1));
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showNext(-1);
      if (e.key === 'ArrowRight') showNext(1);
    });
  }

  // Project detail page – load content from URL param
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get('id');
  if (projectId && typeof PROJECTS !== 'undefined') {
    const project = PROJECTS[projectId];
    if (project) {
      renderProject(project);
    }
  }

  // Filters on projects page
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card[data-year]');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const year = btn.dataset.filter;
      cards.forEach(card => {
        if (year === 'all' || card.dataset.year === year) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

function renderProject(p) {
  const titleEl = document.getElementById('projectTitle');
  const metaEl = document.getElementById('projectMeta');
  const descEl = document.getElementById('projectDesc');
  const galleryEl = document.getElementById('projectGallery');
  if (titleEl) titleEl.textContent = p.title;
  if (metaEl) {
    metaEl.innerHTML = `
      <span><strong>Leto:</strong> ${p.year}</span>
      <span><strong>Avtorji:</strong> ${p.authors}</span>
      ${p.location ? `<span><strong>Lokacija:</strong> ${p.location}</span>` : ''}
    `;
  }
  if (descEl) descEl.textContent = p.description;
  if (galleryEl && p.images) {
    galleryEl.innerHTML = p.images.map(src => `
      <div class="gallery-item">
        <img src="${src}" alt="${p.title}" loading="lazy">
      </div>
    `).join('');
    galleryEl.querySelectorAll('img').forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => {
        const imgs = Array.from(galleryEl.querySelectorAll('img')).map(i => ({ src: i.src, alt: i.alt }));
        window.galleryImages = imgs;
        window.currentIndex = imgs.findIndex(i => i.src === img.src);
        const lb = document.getElementById('lightbox');
        const lbImg = document.getElementById('lightboxImg');
        if (lb && lbImg) {
          lbImg.src = img.src;
          lb.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      });
    });
  }
  document.title = `${p.title} – FIN ARS`;
}

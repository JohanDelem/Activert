// ====================================
// DONNÉES - Tableau de produits
// ====================================

const productCategories = [
  {
    id: 1,
    name: "Surfaces & Bureaux",
    color: "#1986d1",
    icon: "Assets/product_cat_1.png",
    products: [
      {
        id: 101,
        name: "CLARIS",
        subtitle: "Nettoyant surfaces modernes et vitrées",
        description: "Nettoie instantanément les surfaces vitrées, glaces et miroirs. Enlève les marques de doigts, tâches grasses et poussières. Sèche sans laisser de traces.",
        features: [
          "Certification : écolabel européen",
          "Dosage : prêt à l'emploi",
          "Cond. : carton de 12 pulvérisateurs de 750ml",
          "Recharge : carton de 4x5L"
        ],
        image: "Assets/product_claris.png",
        label: "Assets/product_label.png",
        hasEcolabel: true
      },
      {
        id: 102,
        name: "FLASH",
        subtitle: "Nettoyant dégraissant détachant",
        description: "Nettoyant dégraissant écologique très efficace pour le nettoyage de surfaces recouvertes de salissures incrustées, de résidus graisseux, de traces noires, de feutres et de taches tenaces.",
        features: [
          "Dosage : prêt à l'emploi",
          "Cond. : carton de 12 pulvérisateurs de 750ml",
          "Recharge : carton de 4x5L"
        ],
        image: "Assets/product_flash.png",
        label: null,
        hasEcolabel: false
      },
      {
        id: 103,
        name: "SAFIR",
        subtitle: "Odorisant, destructeur d'odeurs",
        description: "Désodorisant à base d'ingrédients d'origine végétale et de parfum sans allergènes. Neutralise et absorbe durablement les odeurs tenaces.",
        features: [
          "Dosage : prêt à l'emploi",
          "Cond. : carton de 6 pulvérisateurs de 750ml",
          "Recharge : carton de 4x5L"
        ],
        image: "Assets/product_safir.png",
        label: null,
        hasEcolabel: false
      }
    ]
  },
  {
    id: 2,
    name: "Sols",
    color: "#58a52a",
    icon: "Assets/product_cat_2.png",
    products: [
      {
        id: 201,
        name: "SOLAROM",
        subtitle: "Nettoyant sols",
        description: "Détergent odorisant conçu pour l'entretien quotidien de tous types de sols et surfaces lavables.",
        features: [
          "Certification : écolabel européen",
          "Dosage : 0,8% (1 dose de 40ml pour 5L d'eau)",
          "Cond. : carton de 4x5L"
        ],
        image: "Assets/product_solarom.png",
        label: "Assets/product_label.png",
        hasEcolabel: true
      },
      {
        id: 202,
        name: "SOLAROM Concentré",
        subtitle: "Nettoyant sols",
        description: "Détergent concentré odorisant conçu pour l'entretien quotidien de tous types de sols.",
        features: [
          "Certification : écolabel européen",
          "Dosage : 0,4% (1 dose de 20ml pour 5L d'eau)",
          "Cond. : carton de 250 doses de 20ml"
        ],
        image: "Assets/product_solarom_concentre.png",
        label: "Assets/product_label.png",
        hasEcolabel: true
      },
      {
        id: 203,
        name: "GRAISI",
        subtitle: "Nettoyant dégraissant puissant - sols et multi-usages",
        description: "Nettoie et dégraisse tous types de sols et surfaces. Respecte les surfaces, les plastiques et les murs peints.",
        features: [
          "Certification : écolabel européen",
          "Dosage : 0,25% (1 dose de 20ml pour 8L d'eau)",
          "Cond. : carton de 4x5L"
        ],
        image: "Assets/product_graisi.png",
        label: "Assets/product_label.png",
        hasEcolabel: true
      },
      {
        id: 204,
        name: "LAOVA",
        subtitle: "Détergent autolaveuses",
        description: "Conçu pour l'entretien périodique de sols en carrelage de supermarchés et d'hypermarchés, de sols industriels.",
        features: [
          "Dosage : 0,12% (1 verre pour 80L d'eau)",
          "Cond. : carton de 4x5L"
        ],
        image: "Assets/product_laova.png",
        label: null,
        hasEcolabel: false
      }
    ]
  },
  {
    id: 3,
    name: "Sanitaires",
    color: "#e74c3c",
    icon: "Assets/product_cat_3.png",
    products: [
      {
        id: 301,
        name: "LAGON",
        subtitle: "Détartrant gel wc",
        description: "Élimine le tartre et les salissures dans les cuvettes des wc et les urinoirs. Sans danger pour le chrome, l'inox et les fosses septiques.",
        features: [
          "Certification : écolabel européen",
          "Dosage : prêt à l'emploi",
          "Cond. : carton de 12x1L"
        ],
        image: "Assets/product_lagon.png",
        label: "Assets/product_label.png",
        hasEcolabel: true
      },
      {
        id: 302,
        name: "ROSEO",
        subtitle: "Nettoyant sanitaires",
        description: "Nettoie rapidement les surfaces recouvertes de traces de calcaire, de savon et de salissures sur les carrelages, robinetteries, lavabos, douches, éviers.",
        features: [
          "Certification : écolabel européen",
          "Dosage : prêt à l'emploi",
          "Cond. : cartons de 12 pulvérisateurs de 750ml"
        ],
        image: "Assets/product_roseo.png",
        label: "Assets/product_label.png",
        hasEcolabel: true
      },
      {
        id: 303,
        name: "DIABOLO",
        subtitle: "Nettoyant détartrant",
        description: "Destiné à la remise en état de carrelages et surfaces recouverts de couches épaisses de calcaire et de laitances de ciment.",
        features: [
          "Dosage : prêt à l'emploi",
          "Cond. liquide : carton de 4x5L",
          "Cond. gel : carton de 12x1L - carton de 4x5L"
        ],
        image: "Assets/product_diabolo.png",
        label: null,
        hasEcolabel: false
      },
      {
        id: 304,
        name: "YELO / YELO GEL",
        subtitle: "Détartrant désincrustant liquide ou gel",
        description: "Destiné à la remise en état de carrelages et surfaces recouverts de couches épaisses de calcaire et de laitances de ciment.",
        features: [
          "Dosage : prêt à l'emploi",
          "Cond. liquide : carton de 4x5L",
          "Cond. gel : carton de 12x1L - carton de 4x5L"
        ],
        image: "Assets/product_yelo.png",
        label: null,
        hasEcolabel: false
      },
      {
        id: 305,
        name: "CREME LAVANTE",
        subtitle: "Savon écologique mains",
        description: "Nettoie parfaitement les mains tout en respectant l'épiderme. Laisse la peau lisse, douce et agréablement parfumée.",
        features: [
          "Dosage : prêt à l'emploi",
          "Cond. : cartons de 4x5L"
        ],
        image: "Assets/product_creme_lavante.png",
        label: null,
        hasEcolabel: false
      }
    ]
  },
  {
    id: 4,
    name: "Industrie & Transport",
    color: "#9b59b6",
    icon: "Assets/product_cat_4.png",
    products: [
      {
        id: 401,
        name: "AXIO",
        subtitle: "Nettoyant industriel",
        description: "Conçu pour l'entretien et la remise en état de toutes surfaces. Dissout instantanément les taches ou salissures d'origine minérale, végétale ou animale.",
        features: [
          "Dosage : de 0,25% à 5% selon l'utilisation",
          "Cond. : carton de 4x5L - fût de 220 kg"
        ],
        image: "Assets/product_axio.png",
        label: null,
        hasEcolabel: false
      },
      {
        id: 402,
        name: "VEGECO",
        subtitle: "Nettoyant sols et surfaces",
        description: "Conçu pour le lavage des carrosseries de voitures, poids lourds, machines agricoles et camions frigorifiques.",
        features: [
          "Dosage : de 0,5% à 10% selon l'utilisation",
          "Cond. : carton de 4x5L - fût de 220 kg"
        ],
        image: "Assets/product_vegeco.png",
        label: null,
        hasEcolabel: false
      }
    ]
  },
  {
    id: 5,
    name: "Traitement des sols",
    color: "#a4c639",
    icon: "Assets/product_cat_5.png",
    products: [
      {
        id: 501,
        name: "GENUX",
        subtitle: "Décapant sans rinçage Décrassant",
        description: "Décapant de cire écologique conçu pour la remise en état de sols couverts de cires ou de salissures tenaces.",
        features: [
          "Dosage : de 10% à 25% selon l'utilisation",
          "Cond. : carton de 4x5L"
        ],
        image: "Assets/product_genux.png",
        label: null,
        hasEcolabel: false
      },
      {
        id: 502,
        name: "ECLAT",
        subtitle: "Emulsion brillante",
        description: "La cire écologique autolustrante Activert est une émulsion brillante et antidérapante.",
        features: [
          "Dosage : prêt à l'emploi",
          "Cond. : carton de 4x5L"
        ],
        image: "Assets/product_eclat.png",
        label: null,
        hasEcolabel: false
      },
      {
        id: 503,
        name: "METEOR",
        subtitle: "Rénovateur d'émulsion",
        description: "Utilisé pur ou en spray, il nettoie les sols traités par une émulsion, efface les traces noires et les rayures.",
        features: [
          "Dosage : prêt à l'emploi",
          "Cond. : carton de 4x5L"
        ],
        image: "Assets/product_meteor.png",
        label: null,
        hasEcolabel: false
      },
      {
        id: 504,
        name: "BANQUISE",
        subtitle: "Moquette injection extraction",
        description: "Détergent écologique concentré conçu pour le nettoyage en profondeur des moquettes à l'aide d'une machine injection extraction.",
        features: [
          "Dosage : 2%",
          "Cond. : carton de 4x5L"
        ],
        image: "Assets/product_banquise.png",
        label: null,
        hasEcolabel: false
      },
      {
        id: 505,
        name: "CASCADE",
        subtitle: "Moquette mousse sèche",
        description: "Efficace sur tous types de salissures et diminue le risque de réencrassement.",
        features: [
          "Dosage : 5%",
          "Cond. : carton de 4x5L"
        ],
        image: "Assets/product_cascade.png",
        label: null,
        hasEcolabel: false
      }
    ]
  },
  {
    id: 6,
    name: "Restauration",
    color: "#f39c12",
    icon: "Assets/product_cat_6.png",
    products: [
      {
        id: 601,
        name: "LIQUIDE VAISSELLE CONCENTRE",
        subtitle: "Savon écologique concentration",
        description: "Dégraisse à fond toute la vaisselle. Agents nettoyants doux d'origine végétale.",
        features: [
          "Certification : écolabel européen",
          "Dosage : 20 à 40ml (1 à 2 doses) pour 40L d'eau",
          "Cond. : carton de 4x5L"
        ],
        image: "Assets/product_liquide_vaisselle.png",
        label: "Assets/product_label.png",
        hasEcolabel: true
      }
    ]
  }
];

// ====================================
// GESTION DU RENDU DYNAMIQUE
// ====================================

// Générer les onglets de filtrage
function renderTabs() {
  const tabsContainer = document.getElementById('productTabs');
  if (!tabsContainer) return;

  const tabsHTML = `
    <a href="#all" class="tab-link" data-category="all">
      <button class="selected">La gamme complète</button>
    </a>

    ${productCategories.map(category => `
    <a href="#${category.id}" class="tab-link" data-category="${category.id}">
      <button>${category.name}</button>
    </a>
    `).join('')}

    <a href="#ecolabel" class="tab-link" data-category="ecolabel">
      <button>Ecolabel</button>
    </a>

  `;
  
  tabsContainer.innerHTML = tabsHTML;
  
  // Ajouter les event listeners aux onglets
  document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const categoryId = e.currentTarget.dataset.category;
      filterAndRenderProducts(categoryId);
      
      // Mettre à jour le style des boutons
      document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('selected'));
      e.currentTarget.querySelector('button').classList.add('selected');
    });
  });
}

// Générer les catégories et produits
function renderCategories(categoriesToShow = null) {
  const container = document.getElementById('categoriesContainer');
  if (!container) return;

  // Si pas de filtre, afficher toutes les catégories
  const categoriesToRender = categoriesToShow || productCategories;
  
  const html = categoriesToRender.map(category => `
    <section class="catalog-category" data-category-id="${category.id}">
      <!-- En-tête de catégorie -->
      <div class="category-header">
        <div class="category-icon">
          <img src="${category.icon}" alt="${category.name}">
        </div>
        <div class="category-title" style="background: linear-gradient(to right, #ececec, ${category.color}40);">
          <h2 style="color: ${category.color};">${category.name}</h2>
        </div>
      </div>

      <!-- Produits de la catégorie -->
      <div class="category-content">
        <div class="products-list">
          ${category.products.map(product => `
            <article class="product-item">
              <div class="product-text">
                <h3 style="color: ${category.color};">${product.name}</h3>
                <p class="product-subtitle" style="color: ${category.color}; font-weight: 500; margin-bottom: 10px;">
                  ${product.subtitle}
                </p>
                <p class="product-description">
                  ${product.description}
                </p>
                <ul class="product-features">
                  ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
              </div>

              <div class="product-images">
                ${product.label ? `<img class="label-badge" src="${product.label}" alt="Ecolabel">` : ''}
                <img class="product-visual" src="${product.image}" alt="${product.name}">
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `).join('');
  
  container.innerHTML = html;
}

// Filtrer et afficher les produits selon la catégorie
function filterAndRenderProducts(categoryId) {
  if (categoryId === 'all') {
    renderCategories();
    return;
  }  
  else if (categoryId === 'ecolabel') {
    const ecolabelCategories = productCategories
      .map(category => ({
        ...category,
        products: category.products.filter(product => product.hasEcolabel)
      }))
      .filter(category => category.products.length > 0);

    renderCategories(ecolabelCategories);
    return;
  } 
  
  const filteredCategories = productCategories.filter(
    cat => cat.id === parseInt(categoryId)
  );

  renderCategories(filteredCategories);
}

// ====================================
// CARROUSEL (existant)
// ====================================

const carouselImages = ['Assets/publicite_3.png', 'Assets/publicite_4.png'];
let currentImageIndex = 0;
let carouselTimerId = null;

function updateHeroBackground() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const imageUrl = carouselImages[currentImageIndex];
  hero.style.backgroundImage = `url("${imageUrl}")`;
  const dots = document.querySelectorAll('.carousel-dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentImageIndex);
  });
}

function startCarouselTimer() {
  if (carouselTimerId) clearInterval(carouselTimerId);
  carouselTimerId = setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    updateHeroBackground();
  }, 25000);
}

function initCarousel() {
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  if (leftArrow) {
    leftArrow.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
      updateHeroBackground();
      startCarouselTimer();
    });
  }

  if (rightArrow) {
    rightArrow.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
      updateHeroBackground();
      startCarouselTimer();
    });
  }

  updateHeroBackground();
  startCarouselTimer();
}

// ====================================
// BOUTONS HOVER (existant)
// ====================================

function applyContentButtonEffects(button) {
  if (!button) return;
  button.style.transition = 'filter 0.05s ease, transform 0.05s ease';

  button.addEventListener('mouseenter', () => {
    button.style.filter = 'brightness(0.95)';
    button.style.transform = 'scale(1.02)';
  });

  button.addEventListener('mouseleave', () => {
    button.style.filter = '';
    button.style.transform = '';
  });
}

function createDetailModal() {
  const overlay = document.createElement('div');
  overlay.className = 'detail-modal-overlay';
  overlay.innerHTML = `
    <div class="detail-modal" role="dialog" aria-modal="true">
      <button class="detail-modal-close" aria-label="Fermer">✕</button>
      <h3></h3>
      <ul></ul>
    </div>
  `;
  document.body.appendChild(overlay);

  const titleEl = overlay.querySelector('h3');
  const listEl = overlay.querySelector('ul');
  let activeButton = null;

  function close() {
    overlay.classList.remove('open');
    if (activeButton) activeButton.setAttribute('aria-expanded', 'false');
    activeButton = null;
  }

  function open(title, items, button) {
    titleEl.textContent = title;
    listEl.innerHTML = items.map((item) => `<li>${item}</li>`).join('');
    activeButton = button;
    button.setAttribute('aria-expanded', 'true');
    overlay.classList.add('open');
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });
  overlay.querySelector('.detail-modal-close').addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  return { open, close };
}

function initCardDetailToggles() {
  const cards = document.querySelectorAll('.card');
  if (!cards.length) return;

  const modal = createDetailModal();

  cards.forEach((card) => {
    const button = card.querySelector('button');
    const detailPoints = card.querySelector('.detail-points');
    if (!button || !detailPoints) return;

    applyContentButtonEffects(button);

    const label = button.textContent.trim();
    const title = card.querySelector('h3') ? card.querySelector('h3').textContent.trim().replace(/\s+/g, ' ') : label;
    const items = Array.from(detailPoints.querySelectorAll('li')).map((li) => li.textContent.trim());

    button.classList.add('card-toggle');
    button.setAttribute('aria-expanded', 'false');
    button.innerHTML = `<span class="label">${label}</span><span class="chevron">▾</span>`;

    button.addEventListener('click', () => modal.open(title, items, button));
  });
}

// ====================================
// NAVIGATION (existant)
// ====================================

function initNavHoverEffects() {
  document.querySelectorAll('nav a').forEach((link) => {
    link.style.transition = 'background-color 0.2s ease';

    link.addEventListener('mouseenter', () => {
      if (link.classList.contains('active')) {
        link.style.backgroundColor = '#5c9b22';
      } else {
        link.style.backgroundColor = '#0d7a2a';
      }
    });

    link.addEventListener('mouseleave', () => {
      if (link.classList.contains('active')) {
        link.style.backgroundColor = '#65a92e';
      } else {
        link.style.backgroundColor = '';
      }
    });
  });
}

function initMobileNavToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('contactFormSuccess');
  if (!form || !successMessage) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    successMessage.classList.remove('hidden');
    form.reset();
  });
}

document.addEventListener('includes:ready', () => {
  initCarousel();
  initNavHoverEffects();
  initMobileNavToggle();
  initContactForm();
});

// Contrôle de la taille des icônes
(function(){
  const range = document.getElementById('iconSizeRange');
  const valueLabel = document.getElementById('iconSizeValue');

  if(!range || !valueLabel) return;

  function updateSize(v){
    const px = v + 'px';
    document.documentElement.style.setProperty('--icon-size', px);
    valueLabel.textContent = px;
  }

  updateSize(range.value);

  range.addEventListener('input', (e) => {
    updateSize(e.target.value);
  });
})();

// ====================================
// INITIALISATION
// ====================================

document.addEventListener('DOMContentLoaded', () => {
  renderTabs();
  renderCategories();
  initCardDetailToggles();

  // Appliquer l'effet hover à tous les boutons des cartes
  document.querySelectorAll('.card button').forEach(button => {
    applyContentButtonEffects(button);
  });
});
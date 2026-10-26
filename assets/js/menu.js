/**
 * CHEESY MOMENTS KAITHAL - SMART QR DIGITAL MENU ENGINE
 * Mobile-First Interactive Ordering System with WhatsApp Integration
 */

(function () {
  'use strict';

  // Application State
  const state = {
    items: [],
    categories: [],
    addOns: {},
    activeCategory: 'all',
    activeFilter: 'all',
    searchQuery: '',
    selectedItem: null,
    modalSelectedSize: null,
    modalSelectedAddOns: [],
    modalQuantity: 1,
    cart: []
  };

  const CART_STORAGE_KEY = 'cheesy_moments_cart_v1';

  // DOM Elements cache
  let dom = {};

  // Initialize
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    cacheDom();
    loadData();
    loadCart();
    renderCategories();
    renderMenuItems();
    setupEventListeners();
    setupScrollSpy();
    updateCartUI();
    initSecretAdminTrigger();
  }

  function cacheDom() {
    dom = {
      categoryTabs: document.getElementById('categoryTabs'),
      menuSectionsContainer: document.getElementById('menuSectionsContainer'),
      searchInput: document.getElementById('menuSearchInput'),
      searchClearBtn: document.getElementById('searchClearBtn'),
      filterChips: document.querySelectorAll('.filter-chip'),
      cartToggleBtns: document.querySelectorAll('.js-cart-toggle'),
      cartDrawerOverlay: document.getElementById('cartDrawerOverlay'),
      cartDrawerCloseBtn: document.getElementById('cartDrawerCloseBtn'),
      cartItemsList: document.getElementById('cartItemsList'),
      cartEmptyState: document.getElementById('cartEmptyState'),
      cartOrderForm: document.getElementById('cartOrderForm'),
      cartDrawerFooter: document.getElementById('cartDrawerFooter'),
      cartSubtotalEl: document.getElementById('cartSubtotal'),
      cartTotalEl: document.getElementById('cartTotal'),
      cartBadgeCounts: document.querySelectorAll('.cart-badge-count'),
      mobileBottomBar: document.getElementById('mobileBottomCartBar'),
      barCartCount: document.getElementById('barCartCount'),
      barCartTotal: document.getElementById('barCartTotal'),
      whatsappOrderBtn: document.getElementById('whatsappOrderBtn'),
      clearCartBtn: document.getElementById('clearCartBtn'),
      tableNumberInput: document.getElementById('tableNumberInput'),
      customerNameInput: document.getElementById('customerNameInput'),
      orderNotesInput: document.getElementById('orderNotesInput'),
      // Modal
      customModalBackdrop: document.getElementById('customModalBackdrop'),
      modalCloseBtn: document.getElementById('modalCloseBtn'),
      modalItemImg: document.getElementById('modalItemImg'),
      modalItemTitle: document.getElementById('modalItemTitle'),
      modalItemDesc: document.getElementById('modalItemDesc'),
      modalSizesSection: document.getElementById('modalSizesSection'),
      modalSizesContainer: document.getElementById('modalSizesContainer'),
      modalAddOnsSection: document.getElementById('modalAddOnsSection'),
      modalAddOnsContainer: document.getElementById('modalAddOnsContainer'),
      modalQtyVal: document.getElementById('modalQtyVal'),
      modalQtyMinus: document.getElementById('modalQtyMinus'),
      modalQtyPlus: document.getElementById('modalQtyPlus'),
      modalAddBtn: document.getElementById('modalAddBtn'),
      modalTotalPriceEl: document.getElementById('modalTotalPrice')
    };
  }

  function loadData() {
    if (window.CheesyStorage) {
      state.items = window.CheesyStorage.getItems();
      state.categories = window.MENU_CATEGORIES || [];
      state.addOns = window.MENU_ADD_ONS || {};
    } else {
      state.items = window.MASTER_MENU_ITEMS || [];
      state.categories = window.MENU_CATEGORIES || [];
      state.addOns = window.MENU_ADD_ONS || {};
    }
  }

  function loadCart() {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        state.cart = JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Could not read cart from localStorage', e);
      state.cart = [];
    }
  }

  function saveCart() {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
    updateCartUI();
  }

  // Render Horizontal Category Tabs
  function renderCategories() {
    if (!dom.categoryTabs) return;

    let html = `
      <button type="button" class="cat-tab-btn active" data-cat="all">
        <span class="cat-tab-icon">✨</span>
        <span class="cat-tab-name">All Items</span>
      </button>
    `;

    state.categories.forEach(cat => {
      // Check if this category has items
      const count = state.items.filter(item => item.category === cat.id && item.available !== false).length;
      if (count > 0) {
        html += `
          <button type="button" class="cat-tab-btn" data-cat="${cat.id}">
            <span class="cat-tab-icon">${cat.icon}</span>
            <span class="cat-tab-name">${cat.name}</span>
          </button>
        `;
      }
    });

    dom.categoryTabs.innerHTML = html;
  }

  // Render Menu Sections & Food Item Cards
  function renderMenuItems() {
    if (!dom.menuSectionsContainer) return;

    const query = state.searchQuery.toLowerCase().trim();
    let visibleItemCount = 0;

    let html = '';

    state.categories.forEach(cat => {
      // Filter items for this category
      let items = state.items.filter(item => item.category === cat.id && item.available !== false);

      // Apply Search Filter
      if (query) {
        items = items.filter(item => {
          return item.name.toLowerCase().includes(query) ||
                 (item.description && item.description.toLowerCase().includes(query));
        });
      }

      // Apply Filter Chip (Bestseller, Under 99, Pure Veg, Spicy)
      if (state.activeFilter === 'bestseller') {
        items = items.filter(item => item.bestseller);
      } else if (state.activeFilter === 'budget') {
        items = items.filter(item => item.defaultPrice <= 99 || item.category === 'pizza-budget');
      } else if (state.activeFilter === 'spicy') {
        items = items.filter(item => item.spicy);
      } else if (state.activeFilter === 'pizza') {
        items = items.filter(item => item.category.startsWith('pizza'));
      } else if (state.activeFilter === 'momos') {
        items = items.filter(item => item.category.includes('momo'));
      }

      // If category tab is selected (not 'all')
      if (state.activeCategory !== 'all' && state.activeCategory !== cat.id) {
        return;
      }

      if (items.length > 0) {
        visibleItemCount += items.length;

        html += `
          <section class="menu-category-section" id="cat-sec-${cat.id}">
            <div class="category-section-header">
              <h2 class="category-section-title">
                <span>${cat.icon}</span>
                <span>${cat.name}</span>
              </h2>
              <span class="category-section-subtitle">${cat.description || ''}</span>
            </div>
            <div class="menu-items-grid">
              ${items.map(item => renderFoodCard(item)).join('')}
            </div>
          </section>
        `;
      }
    });

    if (visibleItemCount === 0) {
      html = `
        <div style="text-align: center; padding: 4rem 1rem; color: var(--color-text-muted);">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
          <h3 style="color: var(--color-cream); font-size: 1.4rem; margin-bottom: 0.5rem;">No Dishes Found</h3>
          <p>We couldn't find anything matching "${query || state.activeFilter}". Try searching for pizza, momos, burger, or shake!</p>
          <button type="button" class="btn btn-outline btn-sm" id="resetSearchBtn" style="margin-top: 1.25rem;">
            Clear Search & Filters
          </button>
        </div>
      `;
    }

    dom.menuSectionsContainer.innerHTML = html;

    // Attach click events on "Add / Customize" buttons
    const addBtns = dom.menuSectionsContainer.querySelectorAll('.js-open-customize');
    addBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const itemId = e.currentTarget.getAttribute('data-id');
        openCustomizationModal(itemId);
      });
    });

    const resetBtn = document.getElementById('resetSearchBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state.searchQuery = '';
        state.activeFilter = 'all';
        state.activeCategory = 'all';
        if (dom.searchInput) dom.searchInput.value = '';
        if (dom.searchClearBtn) dom.searchClearBtn.style.display = 'none';
        dom.filterChips.forEach(c => c.classList.toggle('active', c.getAttribute('data-filter') === 'all'));
        dom.categoryTabs.querySelectorAll('.cat-tab-btn').forEach(t => t.classList.toggle('active', t.getAttribute('data-cat') === 'all'));
        renderMenuItems();
      });
    }
  }

  // Generate Single Food Card Markup
  function renderFoodCard(item) {
    let priceDisplay = '';
    let hasCustomization = false;

    if (item.pricingType === 'sizes' && item.sizes && item.sizes.length > 0) {
      hasCustomization = true;
      priceDisplay = `
        <span class="price-type-label">${item.sizes[0].name}</span>
        <span class="food-price-text">₹${item.sizes[0].price}</span>
      `;
    } else if (item.pricingType === 'portion' && item.portions && item.portions.length > 0) {
      hasCustomization = true;
      priceDisplay = `
        <span class="price-type-label">${item.portions[0].name}</span>
        <span class="food-price-text">₹${item.portions[0].price}</span>
      `;
    } else {
      priceDisplay = `
        <span class="price-type-label">${item.priceLabel || 'Price'}</span>
        <span class="food-price-text">₹${item.price || item.defaultPrice}</span>
      `;
    }

    const imageSrc = item.image || 'assets/images/hero-pizza.jpg';

    return `
      <article class="food-card" data-id="${item.id}">
        <div class="food-card-info">
          <div class="food-card-top">
            <span class="veg-icon" title="Pure Veg"></span>
            ${item.bestseller ? '<span class="bestseller-badge">Bestseller</span>' : ''}
            ${item.spicy ? '<span class="spicy-badge">Spicy 🔥</span>' : ''}
          </div>
          <h3 class="food-name">${item.name}</h3>
          <p class="food-desc">${item.description || 'Prepared fresh with quality ingredients.'}</p>
          <div class="food-card-bottom">
            <div class="food-price-box">
              ${priceDisplay}
            </div>
          </div>
        </div>
        <div class="food-card-media">
          <img src="${imageSrc}" alt="${item.name}" loading="lazy" onerror="this.src='assets/images/hero-pizza.jpg'">
          <button type="button" class="btn-add-food js-open-customize" data-id="${item.id}">
            ADD ${hasCustomization ? '+' : ''}
          </button>
        </div>
      </article>
    `;
  }

  // Customization Modal Logic
  function openCustomizationModal(itemId) {
    const item = state.items.find(i => i.id === itemId);
    if (!item) return;

    state.selectedItem = item;
    state.modalQuantity = 1;
    state.modalSelectedAddOns = [];

    // Header image & texts
    dom.modalItemImg.src = item.image || 'assets/images/hero-pizza.jpg';
    dom.modalItemTitle.textContent = item.name;
    dom.modalItemDesc.textContent = item.description || '';

    // Render Sizes / Portions
    let sizesHtml = '';
    if (item.pricingType === 'sizes' && item.sizes) {
      state.modalSelectedSize = item.sizes[0];
      sizesHtml = item.sizes.map((s, idx) => `
        <label class="custom-option-label ${idx === 0 ? 'selected' : ''}">
          <div class="option-left">
            <input type="radio" name="modalSize" value="${idx}" ${idx === 0 ? 'checked' : ''} style="accent-color: var(--color-primary)">
            <span class="option-title">${s.name}</span>
          </div>
          <span class="option-price">₹${s.price}</span>
        </label>
      `).join('');
      dom.modalSizesSection.style.display = 'block';
      dom.modalSizesContainer.innerHTML = sizesHtml;
    } else if (item.pricingType === 'portion' && item.portions) {
      state.modalSelectedSize = item.portions[0];
      sizesHtml = item.portions.map((p, idx) => `
        <label class="custom-option-label ${idx === 0 ? 'selected' : ''}">
          <div class="option-left">
            <input type="radio" name="modalSize" value="${idx}" ${idx === 0 ? 'checked' : ''} style="accent-color: var(--color-primary)">
            <span class="option-title">${p.name}</span>
          </div>
          <span class="option-price">₹${p.price}</span>
        </label>
      `).join('');
      dom.modalSizesSection.style.display = 'block';
      dom.modalSizesContainer.innerHTML = sizesHtml;
    } else {
      state.modalSelectedSize = { name: 'Standard', price: item.price || item.defaultPrice };
      dom.modalSizesSection.style.display = 'none';
      dom.modalSizesContainer.innerHTML = '';
    }

    // Render Add-ons (e.g. for Pizza, Momos)
    let addOnsHtml = '';
    const addOnGroup = item.addOnGroup;
    const addOnList = addOnGroup ? (state.addOns[addOnGroup] || []) : [];

    if (addOnList.length > 0) {
      addOnsHtml = addOnList.map((ao, idx) => {
        // Price depending on size if applicable
        let price = ao.price || 20;
        if (state.modalSelectedSize && state.modalSelectedSize.name.includes('Medium') && ao.mediumPrice) {
          price = ao.mediumPrice;
        } else if (state.modalSelectedSize && state.modalSelectedSize.name.includes('9 Pc') && ao.p9Price) {
          price = ao.p9Price;
        }

        return `
          <label class="custom-option-label">
            <div class="option-left">
              <input type="checkbox" name="modalAddOn" value="${ao.id}" data-idx="${idx}" style="accent-color: var(--color-primary)">
              <span class="option-title">${ao.name}</span>
            </div>
            <span class="option-price">+₹${price}</span>
          </label>
        `;
      }).join('');
      dom.modalAddOnsSection.style.display = 'block';
      dom.modalAddOnsContainer.innerHTML = addOnsHtml;
    } else {
      dom.modalAddOnsSection.style.display = 'none';
      dom.modalAddOnsContainer.innerHTML = '';
    }

    // Attach listeners inside modal
    const sizeRadios = dom.modalSizesContainer.querySelectorAll('input[name="modalSize"]');
    sizeRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        const idx = parseInt(e.target.value, 10);
        if (item.pricingType === 'sizes') {
          state.modalSelectedSize = item.sizes[idx];
        } else if (item.pricingType === 'portion') {
          state.modalSelectedSize = item.portions[idx];
        }
        dom.modalSizesContainer.querySelectorAll('.custom-option-label').forEach((lbl, i) => {
          lbl.classList.toggle('selected', i === idx);
        });
        updateModalCalculations();
      });
    });

    const addOnChecks = dom.modalAddOnsContainer.querySelectorAll('input[name="modalAddOn"]');
    addOnChecks.forEach(check => {
      check.addEventListener('change', () => {
        state.modalSelectedAddOns = [];
        addOnChecks.forEach(c => {
          const parent = c.closest('.custom-option-label');
          if (c.checked) {
            parent.classList.add('selected');
            const idx = parseInt(c.getAttribute('data-idx'), 10);
            const ao = addOnList[idx];
            let price = ao.price || 20;
            if (state.modalSelectedSize && state.modalSelectedSize.name.includes('Medium') && ao.mediumPrice) {
              price = ao.mediumPrice;
            } else if (state.modalSelectedSize && state.modalSelectedSize.name.includes('9 Pc') && ao.p9Price) {
              price = ao.p9Price;
            }
            state.modalSelectedAddOns.push({ id: ao.id, name: ao.name, price: price });
          } else {
            parent.classList.remove('selected');
          }
        });
        updateModalCalculations();
      });
    });

    updateModalCalculations();
    dom.customModalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function updateModalCalculations() {
    dom.modalQtyVal.textContent = state.modalQuantity;

    let basePrice = state.modalSelectedSize ? state.modalSelectedSize.price : (state.selectedItem.price || state.selectedItem.defaultPrice);
    let addOnsTotal = state.modalSelectedAddOns.reduce((sum, ao) => sum + ao.price, 0);
    let unitTotal = basePrice + addOnsTotal;
    let grandTotal = unitTotal * state.modalQuantity;

    dom.modalTotalPriceEl.textContent = `₹${grandTotal}`;
  }

  function closeModal() {
    dom.customModalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  function addCurrentModalItemToCart() {
    if (!state.selectedItem) return;

    const sizeName = state.modalSelectedSize ? state.modalSelectedSize.name : '';
    const sizePrice = state.modalSelectedSize ? state.modalSelectedSize.price : (state.selectedItem.price || state.selectedItem.defaultPrice);
    const addOns = [...state.modalSelectedAddOns];
    const addOnsTotal = addOns.reduce((sum, ao) => sum + ao.price, 0);
    const unitPrice = sizePrice + addOnsTotal;

    // Cart item composite key
    const addOnIds = addOns.map(ao => ao.id).sort().join('-');
    const cartItemId = `${state.selectedItem.id}_${sizeName}_${addOnIds}`;

    const existingIndex = state.cart.findIndex(i => i.cartItemId === cartItemId);

    if (existingIndex > -1) {
      state.cart[existingIndex].quantity += state.modalQuantity;
      state.cart[existingIndex].lineTotal = state.cart[existingIndex].quantity * unitPrice;
    } else {
      state.cart.push({
        cartItemId,
        itemId: state.selectedItem.id,
        name: state.selectedItem.name,
        sizeName: sizeName,
        sizePrice: sizePrice,
        addOns: addOns,
        unitPrice: unitPrice,
        quantity: state.modalQuantity,
        lineTotal: state.modalQuantity * unitPrice,
        image: state.selectedItem.image
      });
    }

    saveCart();
    closeModal();

    // Trigger visual cart drawer peek or badge pulse
    openCartDrawer();
  }

  // Cart Drawer UI & Operations
  function updateCartUI() {
    const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = state.cart.reduce((sum, item) => sum + item.lineTotal, 0);

    // Update badges
    dom.cartBadgeCounts.forEach(el => {
      el.textContent = totalCount;
      el.style.display = totalCount > 0 ? 'flex' : 'none';
    });

    // Update mobile bottom bar
    if (dom.mobileBottomBar) {
      if (totalCount > 0) {
        dom.mobileBottomBar.classList.add('visible');
        dom.barCartCount.textContent = `${totalCount} item${totalCount > 1 ? 's' : ''}`;
        dom.barCartTotal.textContent = `₹${subtotal}`;
      } else {
        dom.mobileBottomBar.classList.remove('visible');
      }
    }

    // Render Cart Drawer list
    if (dom.cartItemsList) {
      if (state.cart.length === 0) {
        dom.cartEmptyState.style.display = 'block';
        dom.cartItemsList.style.display = 'none';
        dom.cartOrderForm.style.display = 'none';
        dom.cartDrawerFooter.style.display = 'none';
      } else {
        dom.cartEmptyState.style.display = 'none';
        dom.cartItemsList.style.display = 'flex';
        dom.cartOrderForm.style.display = 'flex';
        dom.cartDrawerFooter.style.display = 'block';

        dom.cartItemsList.innerHTML = state.cart.map((item, idx) => `
          <div class="cart-item-row" data-cart-id="${item.cartItemId}">
            <div class="cart-item-info">
              <div class="cart-item-name">${item.name}</div>
              <div class="cart-item-details">
                ${item.sizeName ? `<span>Size: ${item.sizeName}</span>` : ''}
                ${item.addOns && item.addOns.length > 0 ? `<span> • ${item.addOns.map(ao => ao.name).join(', ')}</span>` : ''}
              </div>
              <div class="cart-item-price">₹${item.lineTotal} <span style="font-size: 0.75rem; color: var(--color-cream-muted); font-weight: 500;">(₹${item.unitPrice} each)</span></div>
            </div>
            <div class="quantity-stepper">
              <button type="button" class="step-btn js-cart-minus" data-idx="${idx}">−</button>
              <span class="stepper-val">${item.quantity}</span>
              <button type="button" class="step-btn js-cart-plus" data-idx="${idx}">+</button>
            </div>
          </div>
        `).join('');

        // Step buttons
        dom.cartItemsList.querySelectorAll('.js-cart-minus').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const idx = parseInt(e.currentTarget.getAttribute('data-idx'), 10);
            if (state.cart[idx].quantity > 1) {
              state.cart[idx].quantity -= 1;
              state.cart[idx].lineTotal = state.cart[idx].quantity * state.cart[idx].unitPrice;
            } else {
              state.cart.splice(idx, 1);
            }
            saveCart();
          });
        });

        dom.cartItemsList.querySelectorAll('.js-cart-plus').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const idx = parseInt(e.currentTarget.getAttribute('data-idx'), 10);
            state.cart[idx].quantity += 1;
            state.cart[idx].lineTotal = state.cart[idx].quantity * state.cart[idx].unitPrice;
            saveCart();
          });
        });

        // Totals
        if (dom.cartSubtotalEl) dom.cartSubtotalEl.textContent = `₹${subtotal}`;
        if (dom.cartTotalEl) dom.cartTotalEl.textContent = `₹${subtotal}`;
      }
    }
  }

  function openCartDrawer() {
    dom.cartDrawerOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    dom.cartDrawerOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // WhatsApp Order Generator
  function generateWhatsAppOrder() {
    if (state.cart.length === 0) {
      alert('Your cart is empty! Please add some delicious food items first.');
      return;
    }

    const tableNum = (dom.tableNumberInput && dom.tableNumberInput.value.trim()) || 'Dine-In / Table';
    const customer = (dom.customerNameInput && dom.customerNameInput.value.trim()) || 'Valued Customer';
    const notes = (dom.orderNotesInput && dom.orderNotesInput.value.trim()) || '';
    const total = state.cart.reduce((sum, item) => sum + item.lineTotal, 0);

    let msg = `🍕 *NEW ORDER - CHEESY MOMENTS KAITHAL* 🍕\n`;
    msg += `📍 *Booth No. 182, Sector 20 HUDA, Kaithal*\n`;
    msg += `----------------------------------------\n`;
    msg += `🍽️ *Location/Table:* ${tableNum}\n`;
    msg += `👤 *Customer:* ${customer}\n`;
    msg += `----------------------------------------\n`;
    msg += `📋 *ORDERED ITEMS:*\n\n`;

    state.cart.forEach((item, idx) => {
      msg += `${idx + 1}. *${item.name}*`;
      if (item.sizeName && item.sizeName !== 'Standard') {
        msg += ` (${item.sizeName})`;
      }
      msg += ` x ${item.quantity}\n`;

      if (item.addOns && item.addOns.length > 0) {
        msg += `   └ Add-ons: ${item.addOns.map(ao => ao.name).join(', ')}\n`;
      }
      msg += `   └ Price: ₹${item.lineTotal}\n\n`;
    });

    msg += `----------------------------------------\n`;
    msg += `💰 *TOTAL AMOUNT: ₹${total}*\n`;
    if (notes) {
      msg += `📝 *Special Instructions:* ${notes}\n`;
    }
    msg += `----------------------------------------\n`;
    msg += `Please confirm my order and estimated preparation time. Thank you!`;

    const encodedMsg = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/918685000092?text=${encodedMsg}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  }

  // Scrollspy & Active category tabs
  function setupScrollSpy() {
    window.addEventListener('scroll', () => {
      if (state.activeCategory !== 'all') return; // only spy when all are visible

      const sections = document.querySelectorAll('.menu-category-section');
      const scrollPos = window.scrollY + 220;

      sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.id.replace('cat-sec-', '');

        if (scrollPos >= top && scrollPos < top + height) {
          dom.categoryTabs.querySelectorAll('.cat-tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-cat') === id);
          });
        }
      });
    }, { passive: true });
  }

  // Event Listeners
  function setupEventListeners() {
    // Search input
    if (dom.searchInput) {
      dom.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (dom.searchClearBtn) {
          dom.searchClearBtn.style.display = state.searchQuery ? 'block' : 'none';
        }
        renderMenuItems();
      });
    }

    if (dom.searchClearBtn) {
      dom.searchClearBtn.addEventListener('click', () => {
        state.searchQuery = '';
        dom.searchInput.value = '';
        dom.searchClearBtn.style.display = 'none';
        renderMenuItems();
      });
    }

    // Category Tabs click
    if (dom.categoryTabs) {
      dom.categoryTabs.addEventListener('click', (e) => {
        const btn = e.target.closest('.cat-tab-btn');
        if (!btn) return;

        const cat = btn.getAttribute('data-cat');
        state.activeCategory = cat;

        dom.categoryTabs.querySelectorAll('.cat-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Scroll category button into center of view
        btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

        if (cat === 'all') {
          renderMenuItems();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          // If all sections are rendered, scroll to that section
          renderMenuItems();
          const targetSection = document.getElementById(`cat-sec-${cat}`);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    }

    // Filter Chips click
    dom.filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const filter = chip.getAttribute('data-filter');
        state.activeFilter = filter;
        dom.filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        renderMenuItems();
      });
    });

    // Cart drawer toggles
    dom.cartToggleBtns.forEach(btn => {
      btn.addEventListener('click', openCartDrawer);
    });

    if (dom.cartDrawerCloseBtn) {
      dom.cartDrawerCloseBtn.addEventListener('click', closeCartDrawer);
    }

    if (dom.cartDrawerOverlay) {
      dom.cartDrawerOverlay.addEventListener('click', (e) => {
        if (e.target === dom.cartDrawerOverlay) {
          closeCartDrawer();
        }
      });
    }

    // WhatsApp Order button
    if (dom.whatsappOrderBtn) {
      dom.whatsappOrderBtn.addEventListener('click', generateWhatsAppOrder);
    }

    // Clear cart button
    if (dom.clearCartBtn) {
      dom.clearCartBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear your cart?')) {
          state.cart = [];
          saveCart();
        }
      });
    }

    // Modal close
    if (dom.modalCloseBtn) {
      dom.modalCloseBtn.addEventListener('click', closeModal);
    }

    if (dom.customModalBackdrop) {
      dom.customModalBackdrop.addEventListener('click', (e) => {
        if (e.target === dom.customModalBackdrop) {
          closeModal();
        }
      });
    }

    // Modal Stepper
    if (dom.modalQtyMinus) {
      dom.modalQtyMinus.addEventListener('click', () => {
        if (state.modalQuantity > 1) {
          state.modalQuantity -= 1;
          updateModalCalculations();
        }
      });
    }

    if (dom.modalQtyPlus) {
      dom.modalQtyPlus.addEventListener('click', () => {
        state.modalQuantity += 1;
        updateModalCalculations();
      });
    }

    // Modal Add Button
    if (dom.modalAddBtn) {
      dom.modalAddBtn.addEventListener('click', addCurrentModalItemToCart);
    }

    // Listen to storage events from Admin updates
    window.addEventListener('storage', (e) => {
      if (e.key === window.CheesyStorage.STORAGE_KEY_ITEMS) {
        loadData();
        renderMenuItems();
      }
    });
  }

  // Secret Staff / Admin Access (Hidden from public customers)
  function initSecretAdminTrigger() {
    // 1. Keyboard shortcut: Ctrl + Shift + A or Alt + A
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) ||
          (e.altKey && (e.key === 'A' || e.key === 'a'))) {
        e.preventDefault();
        window.location.href = 'admin.html';
      }
    });

    // 2. Secret Logo Interaction
    const logoElements = document.querySelectorAll('.menu-brand-logo, .menu-brand-small');
    let clickCount = 0;
    let clickTimer = null;

    logoElements.forEach(el => {
      // Double click directly opens admin
      el.addEventListener('dblclick', (e) => {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = 'admin.html';
      });

      // Rapid clicks (3 clicks)
      el.addEventListener('click', (e) => {
        clickCount++;
        clearTimeout(clickTimer);

        if (clickCount >= 3) {
          e.preventDefault();
          e.stopPropagation();
          clickCount = 0;
          window.location.href = 'admin.html';
          return false;
        }

        // Delay single click navigation to homepage
        e.preventDefault();
        clickTimer = setTimeout(() => {
          if (clickCount === 1) {
            window.location.href = 'index.html';
          }
          clickCount = 0;
        }, 400);
      });
    });
  }

})();

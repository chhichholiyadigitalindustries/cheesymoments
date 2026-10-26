/**
 * CHEESY MOMENTS KAITHAL - ADMIN DASHBOARD ENGINE
 * Complete Menu CRUD, Stock Toggles, Price Updates, Offers & QR Code Studio
 */

(function () {
  'use strict';

  const AUTH_PIN = "cheesy2024";
  const AUTH_STORAGE_KEY = "cheesy_admin_auth_session";

  // Admin state
  let adminState = {
    items: [],
    categories: [],
    offers: [],
    info: {},
    activeTab: 'items',
    searchQuery: '',
    selectedCategory: 'all',
    editingItemId: null
  };

  document.addEventListener('DOMContentLoaded', initAdmin);

  function initAdmin() {
    checkAuth();
    loadAdminData();
    setupAuthListeners();
    setupTabListeners();
    setupItemListeners();
    setupOfferListeners();
    setupSettingsListeners();
    setupQrStudio();
    setupBackupListeners();
    renderAll();
  }

  // 1. Authentication
  function checkAuth() {
    const isAuthed = sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true';
    const authScreen = document.getElementById('adminAuthScreen');
    if (authScreen) {
      authScreen.style.display = isAuthed ? 'none' : 'flex';
    }
  }

  function setupAuthListeners() {
    const pinForm = document.getElementById('adminLoginForm');
    const pinInput = document.getElementById('adminPinInput');
    const pinError = document.getElementById('adminPinError');
    const logoutBtn = document.getElementById('adminLogoutBtn');

    if (pinForm) {
      pinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const pin = pinInput.value.trim();
        if (pin === AUTH_PIN) {
          sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
          document.getElementById('adminAuthScreen').style.display = 'none';
          pinError.style.display = 'none';
          pinInput.value = '';
          renderAll();
        } else {
          pinError.textContent = 'Invalid PIN. Please try again.';
          pinError.style.display = 'block';
          pinInput.value = '';
          pinInput.focus();
        }
      });
    }

    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem(AUTH_STORAGE_KEY);
        location.reload();
      });
    }
  }

  // 2. Data Loading
  function loadAdminData() {
    if (window.CheesyStorage) {
      adminState.items = window.CheesyStorage.getItems();
      adminState.categories = window.MENU_CATEGORIES || [];
      adminState.offers = window.CheesyStorage.getOffers();
      adminState.info = window.CheesyStorage.getInfo();
    } else {
      adminState.items = window.MASTER_MENU_ITEMS || [];
      adminState.categories = window.MENU_CATEGORIES || [];
      adminState.offers = window.SPECIAL_OFFERS || [];
      adminState.info = window.RESTAURANT_INFO || {};
    }
  }

  function saveItems() {
    if (window.CheesyStorage) {
      window.CheesyStorage.saveItems(adminState.items);
    }
    renderStats();
    renderItemsTable();
  }

  function saveOffers() {
    if (window.CheesyStorage) {
      window.CheesyStorage.saveOffers(adminState.offers);
    }
    renderStats();
    renderOffersList();
  }

  function saveInfo() {
    if (window.CheesyStorage) {
      window.CheesyStorage.saveInfo(adminState.info);
    }
    renderSettingsForm();
  }

  // 3. Navigation Tabs
  function setupTabListeners() {
    const tabs = document.querySelectorAll('.admin-tab-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetTab = tab.getAttribute('data-tab');
        adminState.activeTab = targetTab;

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        document.querySelectorAll('.admin-tab-pane').forEach(pane => {
          pane.style.display = pane.id === `tabPane-${targetTab}` ? 'block' : 'none';
        });

        if (targetTab === 'qr') {
          updateQrPreview();
        }
      });
    });
  }

  // 4. Render All
  function renderAll() {
    renderStats();
    populateCategoryDropdowns();
    renderItemsTable();
    renderOffersList();
    renderSettingsForm();
    updateQrPreview();
  }

  function renderStats() {
    const totalItemsEl = document.getElementById('statTotalItems');
    const totalCatsEl = document.getElementById('statTotalCats');
    const totalOffersEl = document.getElementById('statTotalOffers');
    const outOfStockEl = document.getElementById('statOutOfStock');

    if (totalItemsEl) totalItemsEl.textContent = adminState.items.length;
    if (totalCatsEl) totalCatsEl.textContent = adminState.categories.length;
    if (totalOffersEl) totalOffersEl.textContent = adminState.offers.filter(o => o.active !== false).length;
    if (outOfStockEl) outOfStockEl.textContent = adminState.items.filter(i => i.available === false).length;
  }

  function populateCategoryDropdowns() {
    const filterSelect = document.getElementById('adminCategoryFilter');
    const modalSelect = document.getElementById('modalItemCategory');

    const optionsHtml = adminState.categories.map(c => `
      <option value="${c.id}">${c.name}</option>
    `).join('');

    if (filterSelect) {
      filterSelect.innerHTML = `<option value="all">All Categories (${adminState.categories.length})</option>` + optionsHtml;
    }

    if (modalSelect) {
      modalSelect.innerHTML = optionsHtml;
    }
  }

  // 5. Food Items Management
  function renderItemsTable() {
    const tbody = document.getElementById('adminItemsTableBody');
    if (!tbody) return;

    const query = adminState.searchQuery.toLowerCase().trim();
    const cat = adminState.selectedCategory;

    let filtered = adminState.items.filter(item => {
      const matchCat = cat === 'all' || item.category === cat;
      const matchQuery = !query || item.name.toLowerCase().includes(query) || (item.description && item.description.toLowerCase().includes(query));
      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align: center; padding: 3rem; color: var(--color-text-muted);">
            No menu items found matching filters.
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = filtered.map((item, idx) => {
      const categoryObj = adminState.categories.find(c => c.id === item.category);
      const catName = categoryObj ? categoryObj.name : item.category;

      let priceSnippet = '';
      if (item.pricingType === 'sizes' && item.sizes) {
        priceSnippet = item.sizes.map(s => `${s.name}: ₹${s.price}`).join('<br>');
      } else if (item.pricingType === 'portion' && item.portions) {
        priceSnippet = item.portions.map(p => `${p.name}: ₹${p.price}`).join('<br>');
      } else {
        priceSnippet = `₹${item.price || item.defaultPrice}`;
      }

      const isAvailable = item.available !== false;

      return `
        <tr>
          <td style="font-weight: 700; width: 40px; color: var(--color-cream-muted);">${idx + 1}</td>
          <td>
            <div style="display: flex; align-items: center; gap: 0.85rem;">
              <img src="${item.image || 'assets/images/hero-pizza.jpg'}" alt="${item.name}" style="width: 44px; height: 44px; border-radius: 8px; object-fit: cover; border: 1px solid rgba(255,255,255,0.1);" onerror="this.src='assets/images/hero-pizza.jpg'">
              <div>
                <div style="font-weight: 800; color: var(--color-cream); font-size: 0.95rem;">${item.name}</div>
                <div style="font-size: 0.75rem; color: var(--color-cream-muted); max-width: 280px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  ${item.description || ''}
                </div>
              </div>
            </div>
          </td>
          <td>
            <span class="badge-pill" style="font-size: 0.72rem; padding: 0.2rem 0.55rem;">
              ${categoryObj ? categoryObj.icon : ''} ${catName}
            </span>
          </td>
          <td style="font-size: 0.82rem; line-height: 1.4; color: var(--color-primary); font-weight: 700;">
            ${priceSnippet}
          </td>
          <td>
            <button type="button" class="stock-toggle-btn ${isAvailable ? 'in-stock' : 'out-stock'} js-toggle-stock" data-id="${item.id}">
              ${isAvailable ? '● In Stock' : '✕ Sold Out'}
            </button>
          </td>
          <td>
            <div class="action-btn-group">
              <button type="button" class="icon-btn js-edit-item" data-id="${item.id}" title="Edit Dish">
                ✏️
              </button>
              <button type="button" class="icon-btn danger js-delete-item" data-id="${item.id}" title="Delete Dish">
                🗑️
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    // Attach row events
    tbody.querySelectorAll('.js-toggle-stock').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const item = adminState.items.find(i => i.id === id);
        if (item) {
          item.available = item.available === false ? true : false;
          saveItems();
        }
      });
    });

    tbody.querySelectorAll('.js-edit-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openEditModal(id);
      });
    });

    tbody.querySelectorAll('.js-delete-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const item = adminState.items.find(i => i.id === id);
        if (item && confirm(`Are you sure you want to delete "${item.name}" from the menu?`)) {
          adminState.items = adminState.items.filter(i => i.id !== id);
          saveItems();
        }
      });
    });
  }

  function setupItemListeners() {
    const searchInput = document.getElementById('adminItemSearch');
    const catSelect = document.getElementById('adminCategoryFilter');
    const addNewBtn = document.getElementById('adminAddNewItemBtn');
    const modal = document.getElementById('adminItemEditModal');
    const modalCloseBtn = document.getElementById('adminModalCloseBtn');
    const form = document.getElementById('adminItemForm');
    const pricingTypeSelect = document.getElementById('modalPricingType');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        adminState.searchQuery = e.target.value;
        renderItemsTable();
      });
    }

    if (catSelect) {
      catSelect.addEventListener('change', (e) => {
        adminState.selectedCategory = e.target.value;
        renderItemsTable();
      });
    }

    if (addNewBtn) {
      addNewBtn.addEventListener('click', () => {
        openEditModal(null);
      });
    }

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', () => {
        modal.classList.remove('open');
      });
    }

    if (pricingTypeSelect) {
      pricingTypeSelect.addEventListener('change', (e) => {
        togglePricingFields(e.target.value);
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        saveItemFromModal();
      });
    }
  }

  function togglePricingFields(type) {
    const fixedBox = document.getElementById('pricingBoxFixed');
    const sizesBox = document.getElementById('pricingBoxSizes');
    const portionBox = document.getElementById('pricingBoxPortion');

    if (fixedBox) fixedBox.style.display = type === 'fixed' ? 'block' : 'none';
    if (sizesBox) sizesBox.style.display = type === 'sizes' ? 'block' : 'none';
    if (portionBox) portionBox.style.display = type === 'portion' ? 'block' : 'none';
  }

  function openEditModal(itemId) {
    adminState.editingItemId = itemId;
    const modal = document.getElementById('adminItemEditModal');
    const titleEl = document.getElementById('adminModalTitle');
    const form = document.getElementById('adminItemForm');

    form.reset();

    if (itemId) {
      const item = adminState.items.find(i => i.id === itemId);
      if (!item) return;

      titleEl.textContent = `Edit Dish: ${item.name}`;
      document.getElementById('modalItemName').value = item.name;
      document.getElementById('modalItemCategory').value = item.category;
      document.getElementById('modalItemDesc').value = item.description || '';
      document.getElementById('modalItemImage').value = item.image || '';
      document.getElementById('modalItemBestseller').checked = !!item.bestseller;
      document.getElementById('modalItemSpicy').checked = !!item.spicy;

      const pricingType = item.pricingType || 'fixed';
      document.getElementById('modalPricingType').value = pricingType;
      togglePricingFields(pricingType);

      if (pricingType === 'fixed') {
        document.getElementById('modalPriceFixed').value = item.price || item.defaultPrice || 0;
      } else if (pricingType === 'sizes' && item.sizes) {
        document.getElementById('modalPriceSlice').value = (item.sizes[0] && item.sizes[0].price) || 99;
        document.getElementById('modalPriceSmall').value = (item.sizes[1] && item.sizes[1].price) || 109;
        document.getElementById('modalPriceMedium').value = (item.sizes[2] && item.sizes[2].price) || 199;
      } else if (pricingType === 'portion' && item.portions) {
        document.getElementById('modalPriceSingle').value = (item.portions[0] && item.portions[0].price) || 49;
        document.getElementById('modalPriceMeal').value = (item.portions[1] && item.portions[1].price) || 119;
      }
    } else {
      titleEl.textContent = 'Add New Food Item';
      document.getElementById('modalPricingType').value = 'fixed';
      togglePricingFields('fixed');
    }

    modal.classList.add('open');
  }

  function saveItemFromModal() {
    const name = document.getElementById('modalItemName').value.trim();
    const category = document.getElementById('modalItemCategory').value;
    const description = document.getElementById('modalItemDesc').value.trim();
    const image = document.getElementById('modalItemImage').value.trim() || 'assets/images/hero-pizza.jpg';
    const bestseller = document.getElementById('modalItemBestseller').checked;
    const spicy = document.getElementById('modalItemSpicy').checked;
    const pricingType = document.getElementById('modalPricingType').value;

    if (!name) {
      alert('Please enter a dish name.');
      return;
    }

    let itemData = {
      name,
      category,
      description,
      image,
      bestseller,
      spicy,
      veg: true,
      pricingType,
      available: true
    };

    if (pricingType === 'fixed') {
      const p = parseFloat(document.getElementById('modalPriceFixed').value) || 0;
      itemData.price = p;
      itemData.defaultPrice = p;
    } else if (pricingType === 'sizes') {
      const sliceP = parseFloat(document.getElementById('modalPriceSlice').value) || 99;
      const smallP = parseFloat(document.getElementById('modalPriceSmall').value) || 109;
      const medP = parseFloat(document.getElementById('modalPriceMedium').value) || 199;
      itemData.sizes = [
        { name: "Personal Giant Slice", price: sliceP },
        { name: "Small 7\"", price: smallP },
        { name: "Medium 10\"", price: medP }
      ];
      itemData.defaultPrice = sliceP;
      itemData.addOnGroup = "pizza";
    } else if (pricingType === 'portion') {
      const singleP = parseFloat(document.getElementById('modalPriceSingle').value) || 49;
      const mealP = parseFloat(document.getElementById('modalPriceMeal').value) || 119;
      itemData.portions = [
        { name: "Single", price: singleP },
        { name: "Meal (Fries + Coke)", price: mealP }
      ];
      itemData.defaultPrice = singleP;
    }

    if (adminState.editingItemId) {
      const index = adminState.items.findIndex(i => i.id === adminState.editingItemId);
      if (index > -1) {
        adminState.items[index] = { ...adminState.items[index], ...itemData };
      }
    } else {
      itemData.id = 'cm-custom-' + Date.now();
      adminState.items.unshift(itemData);
    }

    saveItems();
    document.getElementById('adminItemEditModal').classList.remove('open');
  }

  // 6. Special Offers Management
  function renderOffersList() {
    const list = document.getElementById('adminOffersList');
    if (!list) return;

    list.innerHTML = adminState.offers.map((offer, idx) => `
      <div class="stat-box" style="margin-bottom: 1rem; align-items: flex-start;">
        <div>
          <span class="badge-pill" style="font-size: 0.7rem; margin-bottom: 0.35rem;">${offer.badge}</span>
          <div style="font-size: 1.15rem; font-weight: 800; color: var(--color-cream);">${offer.title}</div>
          <div style="font-size: 0.85rem; color: var(--color-secondary); margin-bottom: 0.25rem;">${offer.subtitle}</div>
          <div style="font-size: 0.82rem; color: var(--color-text-muted);">${offer.desc}</div>
          <div style="margin-top: 0.5rem; font-family: monospace; color: var(--color-primary); font-weight: 700;">PROMO CODE: ${offer.code}</div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.5rem;">
          <button type="button" class="stock-toggle-btn ${offer.active !== false ? 'in-stock' : 'out-stock'} js-toggle-offer" data-idx="${idx}">
            ${offer.active !== false ? 'Active' : 'Inactive'}
          </button>
        </div>
      </div>
    `).join('');

    list.querySelectorAll('.js-toggle-offer').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.getAttribute('data-idx'), 10);
        adminState.offers[idx].active = adminState.offers[idx].active === false ? true : false;
        saveOffers();
      });
    });
  }

  function setupOfferListeners() {
    const form = document.getElementById('adminAddOfferForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('newOfferTitle').value.trim();
        const subtitle = document.getElementById('newOfferSubtitle').value.trim();
        const desc = document.getElementById('newOfferDesc').value.trim();
        const badge = document.getElementById('newOfferBadge').value.trim() || 'SPECIAL';
        const code = document.getElementById('newOfferCode').value.trim().toUpperCase() || 'OFFER';

        if (!title) return;

        adminState.offers.unshift({
          id: 'off-' + Date.now(),
          tag: 'EXCLUSIVE OFFER',
          title,
          subtitle,
          desc,
          badge,
          code,
          active: true
        });

        saveOffers();
        form.reset();
        alert('Special promotional offer added successfully!');
      });
    }
  }

  // 7. Restaurant Settings
  function renderSettingsForm() {
    const info = adminState.info || {};
    if (document.getElementById('settBrandName')) document.getElementById('settBrandName').value = info.brandName || '';
    if (document.getElementById('settPhone')) document.getElementById('settPhone').value = info.phone || '';
    if (document.getElementById('settWhatsApp')) document.getElementById('settWhatsApp').value = info.whatsapp || '';
    if (document.getElementById('settHours')) document.getElementById('settHours').value = info.openingHours || '';
    if (document.getElementById('settAddress')) document.getElementById('settAddress').value = info.address || '';
  }

  function setupSettingsListeners() {
    const form = document.getElementById('adminSettingsForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        adminState.info = {
          ...adminState.info,
          brandName: document.getElementById('settBrandName').value.trim(),
          phone: document.getElementById('settPhone').value.trim(),
          whatsapp: document.getElementById('settWhatsApp').value.trim(),
          openingHours: document.getElementById('settHours').value.trim(),
          address: document.getElementById('settAddress').value.trim()
        };
        saveInfo();
        alert('Restaurant details updated successfully!');
      });
    }
  }

  // 8. QR Code Studio
  function setupQrStudio() {
    const urlInput = document.getElementById('adminQrUrlInput');
    const updateBtn = document.getElementById('adminQrUpdateBtn');
    const downloadPngBtn = document.getElementById('adminQrDownloadPng');
    const downloadSvgBtn = document.getElementById('adminQrDownloadSvg');

    if (urlInput) {
      urlInput.value = window.CheesyQR ? window.CheesyQR.getDefaultMenuUrl() : (window.location.origin + '/menu.html');
    }

    if (updateBtn) {
      updateBtn.addEventListener('click', updateQrPreview);
    }

    if (downloadPngBtn) {
      downloadPngBtn.addEventListener('click', () => {
        const canvas = document.getElementById('adminQrCanvas');
        if (canvas && window.CheesyQR) {
          window.CheesyQR.downloadPng(canvas, 'cheesy-moments-digital-menu-qr.png');
        }
      });
    }

    if (downloadSvgBtn) {
      downloadSvgBtn.addEventListener('click', async () => {
        const url = (urlInput && urlInput.value.trim()) || (window.location.origin + '/menu.html');
        if (window.CheesyQR) {
          await window.CheesyQR.downloadSvg(url, 'cheesy-moments-digital-menu-qr.svg');
        }
      });
    }
  }

  function updateQrPreview() {
    const canvas = document.getElementById('adminQrCanvas');
    const urlInput = document.getElementById('adminQrUrlInput');
    if (!canvas || !window.CheesyQR) return;

    const url = (urlInput && urlInput.value.trim()) || window.CheesyQR.getDefaultMenuUrl();
    window.CheesyQR.renderToCanvas(canvas, url, 280, true);
  }

  // 9. Backup & Sync
  function setupBackupListeners() {
    const exportBtn = document.getElementById('adminExportJsonBtn');
    const importInput = document.getElementById('adminImportJsonInput');
    const resetBtn = document.getElementById('adminResetFactoryBtn');

    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        const backupData = {
          exportDate: new Date().toISOString(),
          restaurantInfo: adminState.info,
          categories: adminState.categories,
          menuItems: adminState.items,
          offers: adminState.offers
        };

        const jsonString = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", jsonString);
        downloadAnchor.setAttribute("download", `cheesy-moments-backup-${Date.now()}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
      });
    }

    if (importInput) {
      importInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const parsed = JSON.parse(event.target.result);
            if (parsed.menuItems && Array.isArray(parsed.menuItems)) {
              adminState.items = parsed.menuItems;
              if (parsed.offers) adminState.offers = parsed.offers;
              if (parsed.restaurantInfo) adminState.info = parsed.restaurantInfo;
              saveItems();
              saveOffers();
              saveInfo();
              renderAll();
              alert(`Successfully imported ${parsed.menuItems.length} menu items from backup!`);
            } else {
              alert('Invalid backup format. File must contain a "menuItems" array.');
            }
          } catch (err) {
            alert('Failed to parse JSON file: ' + err.message);
          }
        };
        reader.readAsText(file);
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to restore the official factory menu? All 101 original items from the 3 printed menus will be restored.')) {
          if (window.CheesyStorage) {
            window.CheesyStorage.resetToDefault();
          }
          loadAdminData();
          renderAll();
          alert('Menu successfully restored to factory defaults!');
        }
      });
    }
  }

})();

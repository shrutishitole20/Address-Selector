/**
 * GeoSelect Pro | Dynamic Address Selection Engine
 * 
 * Features:
 * 1. Dependent dropdown population (Country -> State -> City).
 * 2. Country quick-filter capability inside dropdown.
 * 3. LocalStorage persistence & automatic state restoration.
 * 4. Light/Dark theme manager with system preference detection.
 * 5. Visual address preview & live developer JSON inspector.
 * 6. Copy-to-clipboard and JSON export utilities.
 * 7. Saved address bookmarks history.
 * 8. Real-time validation and floating toast notification engine.
 */

// ============================================================================
// 1. Constants & Storage Keys
// ============================================================================

const STORAGE_KEYS = {
  COUNTRY: "address_selected_country",
  STATE: "address_selected_state",
  CITY: "address_selected_city",
  THEME: "geoselect_theme",
  BOOKMARKS: "geoselect_bookmarks"
};

// ============================================================================
// 2. DOM Elements Selection
// ============================================================================

// Form & Controls
const addressForm = document.getElementById("addressForm");
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");

// Dropdowns
const countrySelect = document.getElementById("countrySelect");
const stateSelect = document.getElementById("stateSelect");
const citySelect = document.getElementById("citySelect");
const countryFilterInput = document.getElementById("countryFilterInput");

// Form groups & Error elements
const countryGroup = document.getElementById("countryGroup");
const stateGroup = document.getElementById("stateGroup");
const cityGroup = document.getElementById("cityGroup");
const countryError = document.getElementById("countryError");
const stateError = document.getElementById("stateError");
const cityError = document.getElementById("cityError");

// Hints & Metadata pills
const stateHint = document.getElementById("stateHint");
const cityHint = document.getElementById("cityHint");
const countryMetaRow = document.getElementById("countryMetaRow");
const countryRegionBadge = document.getElementById("countryRegionBadge");
const countryCodeBadge = document.getElementById("countryCodeBadge");
const countryStatesCountBadge = document.getElementById("countryStatesCountBadge");

// Stepper nodes & lines
const stepCountry = document.getElementById("stepCountry");
const stepState = document.getElementById("stepState");
const stepCity = document.getElementById("stepCity");
const stepLine1 = document.getElementById("stepLine1");
const stepLine2 = document.getElementById("stepLine2");

// Breadcrumb & Preview displays
const crumbCountry = document.getElementById("crumbCountry");
const crumbState = document.getElementById("crumbState");
const crumbCity = document.getElementById("crumbCity");
const valCountry = document.getElementById("valCountry");
const valState = document.getElementById("valState");
const valCity = document.getElementById("valCity");
const jsonDisplay = document.getElementById("jsonDisplay");

// Tabs & Views
const tabFormatted = document.getElementById("tabFormatted");
const tabJson = document.getElementById("tabJson");
const tabStorage = document.getElementById("tabStorage");
const contentFormatted = document.getElementById("contentFormatted");
const contentJson = document.getElementById("contentJson");
const contentStorage = document.getElementById("contentStorage");

// LocalStorage Live Inspector Elements
const storageValCountry = document.getElementById("storageValCountry");
const storageValState = document.getElementById("storageValState");
const storageValCity = document.getElementById("storageValCity");
const storageClearBtn = document.getElementById("storageClearBtn");
const copyStorageCodeBtn = document.getElementById("copyStorageCodeBtn");
const storageCodeDisplay = document.getElementById("storageCodeDisplay");

// Action toolbar buttons
const copyBtn = document.getElementById("copyBtn");
const exportBtn = document.getElementById("exportBtn");
const bookmarkBtn = document.getElementById("bookmarkBtn");

// Submission banner
const submissionBanner = document.getElementById("submissionBanner");
const bannerAddressText = document.getElementById("bannerAddressText");

// Bookmarks & History
const bookmarksToggle = document.getElementById("bookmarksToggle");
const bookmarksSection = bookmarksToggle.closest(".bookmarks-section");
const bookmarksList = document.getElementById("bookmarksList");
const bookmarkCount = document.getElementById("bookmarkCount");

// Theme & Navigation
const themeToggleBtn = document.getElementById("themeToggleBtn");
const coverageStats = document.getElementById("coverageStats");
const toastContainer = document.getElementById("toastContainer");

// ============================================================================
// 3. Toast Notification Engine
// ============================================================================

/**
 * Dispatches a modern floating toast notification.
 * @param {string} message - Text to display
 * @param {'success' | 'info' | 'warning'} type - Visual styling type
 * @param {string} icon - Emoji or symbol icon
 */
function showToast(message, type = "info", icon = "ℹ️") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-message">${message}</span>
  `;

  toastContainer.appendChild(toast);

  // Auto-dismiss after 3.2 seconds
  setTimeout(() => {
    toast.classList.add("toast-hiding");
    toast.addEventListener("transitionend", () => {
      toast.remove();
    });
  }, 3200);
}

// ============================================================================
// 4. Theme Management (Light / Dark)
// ============================================================================

/**
 * Initializes and toggles between light and dark modes.
 */
function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
  const systemPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

  document.documentElement.setAttribute("data-theme", initialTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem(STORAGE_KEYS.THEME, newTheme);

  showToast(`Switched to ${newTheme.toUpperCase()} theme`, "info", newTheme === "dark" ? "🌙" : "☀️");
}

themeToggleBtn.addEventListener("click", toggleTheme);

// ============================================================================
// 5. Dropdown Population Functions
// ============================================================================

/**
 * Populates the Country dropdown with alphabetical optgroup headers (A, B, C... H, I...).
 * Matches native alphabetical group headers like in standard design.
 * Supports real-time text filtering.
 * @param {string} filterText - Optional query string to filter countries
 */
function populateCountries(filterText = "") {
  const previousValue = countrySelect.value;
  countrySelect.innerHTML = '<option value="">-- Choose a Country --</option>';

  const query = filterText.trim().toLowerCase();
  const countryList = Object.keys(locationData).sort();

  // Group countries alphabetically by their first character (A, B, ... H, I...)
  const alphabetGroups = {};

  countryList.forEach(countryName => {
    if (query && !countryName.toLowerCase().includes(query)) {
      return; // Skip non-matching countries
    }

    const firstLetter = countryName.charAt(0).toUpperCase();
    if (!alphabetGroups[firstLetter]) {
      alphabetGroups[firstLetter] = [];
    }
    alphabetGroups[firstLetter].push(countryName);
  });

  // Render each letter as an <optgroup label="A">, <optgroup label="H">, <optgroup label="I">
  Object.keys(alphabetGroups).sort().forEach(letter => {
    const optgroup = document.createElement("optgroup");
    optgroup.label = letter; // Bold section letter header (e.g. H, I)

    alphabetGroups[letter].forEach(countryName => {
      const option = document.createElement("option");
      option.value = countryName;
      option.textContent = countryName; // Clean, readable text matching screenshot
      optgroup.appendChild(option);
    });

    countrySelect.appendChild(optgroup);
  });

  // Restore previous selection if it's still available in the filtered list
  if (previousValue && locationData[previousValue]) {
    countrySelect.value = previousValue;
  }
}

/**
 * Populates the State dropdown based on the chosen country.
 * @param {string} country - Selected country name
 */
function populateStates(country) {
  stateSelect.innerHTML = '<option value="">-- Select State / Province --</option>';

  if (!country || !locationData[country]) {
    stateSelect.disabled = true;
    stateHint.textContent = "Awaiting Country";
    return;
  }

  const states = Object.keys(locationData[country]).sort();

  states.forEach(stateName => {
    const option = document.createElement("option");
    option.value = stateName;
    option.textContent = stateName;
    stateSelect.appendChild(option);
  });

  stateSelect.disabled = false;
  stateHint.textContent = `${states.length} Available`;
}

/**
 * Populates the City dropdown based on the chosen country and state.
 * @param {string} country - Selected country name
 * @param {string} state - Selected state name
 */
function populateCities(country, state) {
  citySelect.innerHTML = '<option value="">-- Select City / Location --</option>';

  if (!country || !state || !locationData[country] || !locationData[country][state]) {
    citySelect.disabled = true;
    cityHint.textContent = "Awaiting State";
    return;
  }

  const cities = [...locationData[country][state]].sort();

  cities.forEach(cityName => {
    const option = document.createElement("option");
    option.value = cityName;
    option.textContent = cityName;
    citySelect.appendChild(option);
  });

  citySelect.disabled = false;
  cityHint.textContent = `${cities.length} Available`;
}

// ============================================================================
// 6. UI Synchronization & Live Intelligence
// ============================================================================

/**
 * Synchronizes all visual components: breadcrumbs, preview lines,
 * step progress nodes, dynamic metadata badges, and JSON inspector.
 */
function syncUI() {
  const country = countrySelect.value;
  const state = stateSelect.value;
  const city = citySelect.value;

  // 1. Breadcrumbs
  const flag = country && countryMeta[country] ? `${countryMeta[country].flag} ` : "";
  crumbCountry.textContent = country ? `${flag}${country}` : "Select Country";
  crumbState.textContent = state || "Select State";
  crumbCity.textContent = city || "Select City";

  // 2. Visual Address Preview
  if (country) {
    valCountry.textContent = `${flag}${country}`;
    valCountry.classList.remove("empty");
  } else {
    valCountry.textContent = "No Country Selected";
    valCountry.classList.add("empty");
  }

  if (state) {
    valState.textContent = state;
    valState.classList.remove("empty");
  } else {
    valState.textContent = "No State Selected";
    valState.classList.add("empty");
  }

  if (city) {
    valCity.textContent = city;
    valCity.classList.remove("empty");
  } else {
    valCity.textContent = "No City Selected";
    valCity.classList.add("empty");
  }

  // 3. Country Metadata Pill Row
  if (country && countryMeta[country]) {
    const meta = countryMeta[country];
    countryRegionBadge.textContent = meta.continent || "Global";
    countryCodeBadge.textContent = `ISO: ${meta.code || "N/A"}`;
    const totalStates = Object.keys(locationData[country] || {}).length;
    countryStatesCountBadge.textContent = `${totalStates} States / Regions`;
    countryMetaRow.classList.remove("hidden");
  } else {
    countryMetaRow.classList.add("hidden");
  }

  // 4. Stepper Progress Nodes
  // Step 1: Country
  if (country) {
    stepCountry.classList.add("completed");
    stepCountry.classList.remove("active");
    stepLine1.classList.add("active");
  } else {
    stepCountry.classList.remove("completed");
    stepCountry.classList.add("active");
    stepLine1.classList.remove("active");
  }

  // Step 2: State
  if (state) {
    stepState.classList.add("completed");
    stepState.classList.remove("active");
    stepLine2.classList.add("active");
  } else if (country) {
    stepState.classList.add("active");
    stepState.classList.remove("completed");
    stepLine2.classList.remove("active");
  } else {
    stepState.classList.remove("active", "completed");
    stepLine2.classList.remove("active");
  }

  // Step 3: City
  if (city) {
    stepCity.classList.add("completed");
    stepCity.classList.remove("active");
  } else if (state) {
    stepCity.classList.add("active");
    stepCity.classList.remove("completed");
  } else {
    stepCity.classList.remove("active", "completed");
  }

  // 5. Live Developer JSON Inspector
  const jsonPayload = {
    country: country || null,
    countryCode: (country && countryMeta[country]) ? countryMeta[country].code : null,
    state: state || null,
    city: city || null,
    timestamp: new Date().toISOString()
  };
  jsonDisplay.textContent = JSON.stringify(jsonPayload, null, 2);

  // 6. Live LocalStorage State Inspector
  const currentSavedCountry = localStorage.getItem(STORAGE_KEYS.COUNTRY);
  const currentSavedState = localStorage.getItem(STORAGE_KEYS.STATE);
  const currentSavedCity = localStorage.getItem(STORAGE_KEYS.CITY);

  if (storageValCountry) {
    storageValCountry.innerHTML = currentSavedCountry ? `<code>"${currentSavedCountry}"</code>` : '<span class="empty-tag">null (empty)</span>';
  }
  if (storageValState) {
    storageValState.innerHTML = currentSavedState ? `<code>"${currentSavedState}"</code>` : '<span class="empty-tag">null (empty)</span>';
  }
  if (storageValCity) {
    storageValCity.innerHTML = currentSavedCity ? `<code>"${currentSavedCity}"</code>` : '<span class="empty-tag">null (empty)</span>';
  }
}

// ============================================================================
// 7. Validation Logic
// ============================================================================

function clearError(group, errorElement) {
  group.classList.remove("has-error");
  errorElement.textContent = "";
}

function setError(group, errorElement, message) {
  group.classList.add("has-error");
  errorElement.textContent = message;
}

/**
 * Validates that all three dropdown fields have valid selections.
 * @returns {boolean} True if all valid
 */
function validateForm() {
  let isValid = true;

  if (!countrySelect.value) {
    setError(countryGroup, countryError, "Please select a country from the dropdown.");
    isValid = false;
  } else {
    clearError(countryGroup, countryError);
  }

  if (!stateSelect.value) {
    setError(stateGroup, stateError, "Please select a state or province.");
    isValid = false;
  } else {
    clearError(stateGroup, stateError);
  }

  if (!citySelect.value) {
    setError(cityGroup, cityError, "Please select a city or location.");
    isValid = false;
  } else {
    clearError(cityGroup, cityError);
  }

  return isValid;
}

// ============================================================================
// 8. LocalStorage Persistence & Restoration Engine
// ============================================================================

/**
 * Dedicated LocalStorage Manager Object
 * Provides centralized helper functions for saving, reading, and clearing.
 */
const StorageManager = {
  // Save an address key to LocalStorage
  save(key, value) {
    if (value) {
      localStorage.setItem(key, value);
    } else {
      localStorage.removeItem(key);
    }
  },

  // Read a key from LocalStorage
  get(key) {
    return localStorage.getItem(key) || null;
  },

  // Remove a key from LocalStorage
  remove(key) {
    localStorage.removeItem(key);
  },

  // Clear all three address keys
  clearAddress() {
    localStorage.removeItem(STORAGE_KEYS.COUNTRY);
    localStorage.removeItem(STORAGE_KEYS.STATE);
    localStorage.removeItem(STORAGE_KEYS.CITY);
  },

  // Get full snapshot of saved values
  getSnapshot() {
    return {
      country: localStorage.getItem(STORAGE_KEYS.COUNTRY) || null,
      state: localStorage.getItem(STORAGE_KEYS.STATE) || null,
      city: localStorage.getItem(STORAGE_KEYS.CITY) || null
    };
  }
};

/**
 * Restores previously saved address from LocalStorage upon page load.
 */
function restoreFromLocalStorage() {
  const savedCountry = StorageManager.get(STORAGE_KEYS.COUNTRY);
  const savedState = StorageManager.get(STORAGE_KEYS.STATE);
  const savedCity = StorageManager.get(STORAGE_KEYS.CITY);

  if (savedCountry && locationData[savedCountry]) {
    countrySelect.value = savedCountry;
    populateStates(savedCountry);

    if (savedState && locationData[savedCountry][savedState]) {
      stateSelect.value = savedState;
      populateCities(savedCountry, savedState);

      if (savedCity && locationData[savedCountry][savedState].includes(savedCity)) {
        citySelect.value = savedCity;
      }
    }
  }

  syncUI();
}

// ============================================================================
// 9. Bookmarks & Address History Management
// ============================================================================

function getBookmarks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveBookmarks(list) {
  localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(list));
  renderBookmarks();
}

function renderBookmarks() {
  const list = getBookmarks();
  bookmarkCount.textContent = list.length;
  bookmarksList.innerHTML = "";

  if (list.length === 0) {
    bookmarksList.innerHTML = '<li class="empty-bookmark-msg">No saved bookmarks yet. Submit or bookmark an address to save it here.</li>';
    return;
  }

  list.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "bookmark-item";
    
    const flag = countryMeta[item.country]?.flag || "📍";
    
    li.innerHTML = `
      <span class="bookmark-item-text" title="Click to load: ${item.city}, ${item.state}, ${item.country}">
        ${flag} ${item.city}, ${item.state}, ${item.country}
      </span>
      <button type="button" class="bookmark-del-btn" title="Remove from bookmarks" data-index="${index}">
        ✕
      </button>
    `;

    // Click item to load into form
    li.querySelector(".bookmark-item-text").addEventListener("click", () => {
      loadSavedAddress(item.country, item.state, item.city);
      showToast(`Loaded ${item.city}, ${item.country}`, "success", "📌");
    });

    // Delete item
    li.querySelector(".bookmark-del-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      const updated = getBookmarks();
      updated.splice(index, 1);
      saveBookmarks(updated);
      showToast("Removed from bookmarks", "info", "🗑️");
    });

    bookmarksList.appendChild(li);
  });
}

/**
 * Loads a specified address tuple directly into the dropdowns.
 */
function loadSavedAddress(country, state, city) {
  if (!locationData[country]) return;

  countrySelect.value = country;
  localStorage.setItem(STORAGE_KEYS.COUNTRY, country);

  populateStates(country);
  stateSelect.value = state;
  localStorage.setItem(STORAGE_KEYS.STATE, state);

  populateCities(country, state);
  citySelect.value = city;
  localStorage.setItem(STORAGE_KEYS.CITY, city);

  clearError(countryGroup, countryError);
  clearError(stateGroup, stateError);
  clearError(cityGroup, cityError);
  submissionBanner.classList.add("hidden");

  syncUI();
}

function addCurrentToBookmarks() {
  const country = countrySelect.value;
  const state = stateSelect.value;
  const city = citySelect.value;

  if (!country || !state || !city) {
    showToast("Please select Country, State, and City before bookmarking.", "warning", "⚠️");
    return;
  }

  const list = getBookmarks();
  const exists = list.some(b => b.country === country && b.state === state && b.city === city);

  if (exists) {
    showToast("This address is already bookmarked.", "info", "ℹ️");
    return;
  }

  list.unshift({ country, state, city, date: new Date().toLocaleDateString() });
  if (list.length > 10) list.pop(); // Keep last 10
  saveBookmarks(list);

  bookmarksSection.classList.add("open");
  showToast("Address saved to Bookmarks history!", "success", "⭐");
}

// ============================================================================
// 10. Utility Functions (Copy, Export)
// ============================================================================

function copyAddressText() {
  const country = countrySelect.value;
  const state = stateSelect.value;
  const city = citySelect.value;

  if (!country && !state && !city) {
    showToast("Nothing to copy yet. Make a selection first.", "warning", "⚠️");
    return;
  }

  const parts = [city, state, country].filter(Boolean);
  const formatted = parts.join(", ");

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(formatted).then(() => {
      showToast(`Copied: "${formatted}"`, "success", "📋");
    }).catch(() => {
      fallbackCopy(formatted);
    });
  } else {
    fallbackCopy(formatted);
  }
}

function fallbackCopy(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand("copy");
    showToast(`Copied: "${text}"`, "success", "📋");
  } catch {
    showToast("Copy command failed", "warning", "⚠️");
  }
  document.body.removeChild(textArea);
}

function exportAddressJson() {
  const country = countrySelect.value;
  const state = stateSelect.value;
  const city = citySelect.value;

  if (!country && !state && !city) {
    showToast("No address selected to export.", "warning", "⚠️");
    return;
  }

  const payload = {
    application: "GeoSelect Pro",
    version: "2.5",
    address: {
      city: city || null,
      state: state || null,
      country: country || null,
      isoCode: country && countryMeta[country] ? countryMeta[country].code : null,
      continent: country && countryMeta[country] ? countryMeta[country].continent : null
    },
    exportedAt: new Date().toISOString()
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(payload, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `address-${(city || "location").toLowerCase().replace(/\s+/g, "_")}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();

  showToast("Address JSON exported successfully", "success", "💾");
}

// ============================================================================
// 11. Event Listeners
// ============================================================================

// Country Quick Filter Search
countryFilterInput.addEventListener("input", (e) => {
  populateCountries(e.target.value);
});

// Country Change Event
countrySelect.addEventListener("change", (e) => {
  const selectedCountry = e.target.value;

  clearError(countryGroup, countryError);
  clearError(stateGroup, stateError);
  clearError(cityGroup, cityError);
  submissionBanner.classList.add("hidden");

  if (selectedCountry) {
    StorageManager.save(STORAGE_KEYS.COUNTRY, selectedCountry);
    StorageManager.remove(STORAGE_KEYS.STATE);
    StorageManager.remove(STORAGE_KEYS.CITY);

    populateStates(selectedCountry);

    // Reset and disable City
    citySelect.innerHTML = '<option value="">-- Select City --</option>';
    citySelect.disabled = true;
    cityHint.textContent = "Awaiting State";
  } else {
    StorageManager.clearAddress();

    stateSelect.innerHTML = '<option value="">-- Select State --</option>';
    stateSelect.disabled = true;
    stateHint.textContent = "Awaiting Country";

    citySelect.innerHTML = '<option value="">-- Select City --</option>';
    citySelect.disabled = true;
    cityHint.textContent = "Awaiting State";
  }

  syncUI();
});

// State Change Event
stateSelect.addEventListener("change", (e) => {
  const selectedCountry = countrySelect.value;
  const selectedState = e.target.value;

  clearError(stateGroup, stateError);
  clearError(cityGroup, cityError);
  submissionBanner.classList.add("hidden");

  if (selectedState) {
    StorageManager.save(STORAGE_KEYS.STATE, selectedState);
    StorageManager.remove(STORAGE_KEYS.CITY);

    populateCities(selectedCountry, selectedState);
  } else {
    StorageManager.remove(STORAGE_KEYS.STATE);
    StorageManager.remove(STORAGE_KEYS.CITY);

    citySelect.innerHTML = '<option value="">-- Select City --</option>';
    citySelect.disabled = true;
    cityHint.textContent = "Awaiting State";
  }

  syncUI();
});

// City Change Event
citySelect.addEventListener("change", (e) => {
  const selectedCity = e.target.value;

  clearError(cityGroup, cityError);
  submissionBanner.classList.add("hidden");

  if (selectedCity) {
    StorageManager.save(STORAGE_KEYS.CITY, selectedCity);
  } else {
    StorageManager.remove(STORAGE_KEYS.CITY);
  }

  syncUI();
});

// Form Submission
addressForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateForm()) {
    const confirmed = {
      country: countrySelect.value,
      state: stateSelect.value,
      city: citySelect.value
    };

    console.log("Confirmed Address Payload:", confirmed);

    // Show Confirmation Banner
    const flag = countryMeta[confirmed.country]?.flag || "📍";
    bannerAddressText.innerHTML = `Confirmed: <strong>${confirmed.city}</strong>, <strong>${confirmed.state}</strong>, <strong>${flag} ${confirmed.country}</strong>.`;
    submissionBanner.classList.remove("hidden");

    // Automatically bookmark this confirmed address
    addCurrentToBookmarks();

    showToast("Address validated, confirmed, and cached!", "success", "🎉");
  } else {
    submissionBanner.classList.add("hidden");
    showToast("Please complete all required fields.", "warning", "⚠️");
  }
});

// Form Reset
resetBtn.addEventListener("click", () => {
  StorageManager.clearAddress();

  countrySelect.value = "";
  countryFilterInput.value = "";
  populateCountries();

  stateSelect.innerHTML = '<option value="">-- Select State --</option>';
  stateSelect.disabled = true;
  stateHint.textContent = "Awaiting Country";

  citySelect.innerHTML = '<option value="">-- Select City --</option>';
  citySelect.disabled = true;
  cityHint.textContent = "Awaiting State";

  clearError(countryGroup, countryError);
  clearError(stateGroup, stateError);
  clearError(cityGroup, cityError);
  submissionBanner.classList.add("hidden");

  syncUI();
  showToast("Address form reset to default state", "info", "🔄");
});

// Visual / JSON / LocalStorage View Tabs
function switchInspectorTab(activeBtn, activeContent) {
  [tabFormatted, tabJson, tabStorage].forEach(btn => btn && btn.classList.remove("active"));
  [contentFormatted, contentJson, contentStorage].forEach(content => content && content.classList.add("hidden"));
  activeBtn.classList.add("active");
  activeContent.classList.remove("hidden");
}

tabFormatted.addEventListener("click", () => {
  switchInspectorTab(tabFormatted, contentFormatted);
});

tabJson.addEventListener("click", () => {
  switchInspectorTab(tabJson, contentJson);
});

if (tabStorage && contentStorage) {
  tabStorage.addEventListener("click", () => {
    switchInspectorTab(tabStorage, contentStorage);
    syncUI();
  });
}

// LocalStorage Tab Actions
if (storageClearBtn) {
  storageClearBtn.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEYS.COUNTRY);
    localStorage.removeItem(STORAGE_KEYS.STATE);
    localStorage.removeItem(STORAGE_KEYS.CITY);

    countrySelect.value = "";
    countryFilterInput.value = "";
    populateCountries();

    stateSelect.innerHTML = '<option value="">-- Select State --</option>';
    stateSelect.disabled = true;
    stateHint.textContent = "Awaiting Country";

    citySelect.innerHTML = '<option value="">-- Select City --</option>';
    citySelect.disabled = true;
    cityHint.textContent = "Awaiting State";

    syncUI();
    showToast("Cleared address keys from LocalStorage", "info", "🗑️");
  });
}

if (copyStorageCodeBtn) {
  copyStorageCodeBtn.addEventListener("click", () => {
    const codeSnippet = storageCodeDisplay ? storageCodeDisplay.textContent : "";
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(codeSnippet).then(() => {
        showToast("LocalStorage code copied to clipboard!", "success", "📋");
      }).catch(() => {
        fallbackCopy(codeSnippet);
      });
    } else {
      fallbackCopy(codeSnippet);
    }
  });
}

// Action buttons
copyBtn.addEventListener("click", copyAddressText);
exportBtn.addEventListener("click", exportAddressJson);
bookmarkBtn.addEventListener("click", addCurrentToBookmarks);

// Bookmarks Accordion Toggle
bookmarksToggle.addEventListener("click", () => {
  bookmarksSection.classList.toggle("open");
});

// ============================================================================
// 12. Application Initialization
// ============================================================================

window.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Theme (Light / Dark)
  initTheme();

  // 2. Compute dynamic coverage statistics
  const totalCountries = Object.keys(locationData).length;
  let totalLocations = 0;
  Object.values(locationData).forEach(states => {
    Object.values(states).forEach(cities => {
      totalLocations += cities.length;
    });
  });
  if (coverageStats) {
    coverageStats.textContent = `${totalCountries} Countries • ${totalLocations.toLocaleString()}+ Locations`;
  }

  // 3. Populate Countries with emoji flags
  populateCountries();

  // 4. Restore selections from LocalStorage
  restoreFromLocalStorage();

  // 5. Render Bookmarks
  renderBookmarks();
});

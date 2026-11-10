# GeoSelect Pro | Enterprise Dynamic Address Selection Engine

**GeoSelect Pro** is a modern, enterprise-grade, dynamic address selection engine built purely with **Vanilla HTML, CSS, and JavaScript**. It delivers an interactive Country → State → City dependent dropdown workflow, dark/light theme switching, instant text filtering, LocalStorage state persistence, bookmark history, and JSON export capabilities.

---

## 🌟 Professional Upgrades & Key Features

### 1. 🌍 58 Global Countries & Alphabetical Optgroups
- **Alphabetical Category Grouping (`<optgroup label="H">`, etc.)**: Countries are organized by their starting letters (**A**, **B**, ... **H**, **I**...), matching the standard dropdown pattern shown in enterprise systems.
- Seamlessly contains countries including **Guyana**, **Haiti**, **Heard Island and Mcdonald Islands**, **Honduras**, **Hong Kong**, **Hungary**, **Iceland**, **India**, and 50+ other global nations.
- All country selections reflect their **official emoji flags**, continents, and ISO alpha-2 codes in the live metadata cards.

### 2. ⚡ Dependent Cascading Logic & Instant Filter
- **Country Dropdown**: Features a built-in **Quick Filter search input** allowing users to rapidly narrow down the 51 countries.
- **State Dropdown**: Strictly disabled until a country is selected. Populates only with states belonging to that country. Displays an active count badge (e.g. `21 Available`).
- **City Dropdown**: Strictly disabled until a state is selected. Populates only with cities belonging to that state.
- **Cascading Reset**: Modifying the parent immediately resets and disables child dropdowns, maintaining data integrity.

### 3. 🌗 Light & Dark Theme Manager
- Supports both **Light Mode** and **Dark Mode** with smooth transitions.
- Automatically senses user system preference (`prefers-color-scheme: dark`) and remembers manual toggles via `localStorage`.

### 4. 🧠 Selection Intelligence & Live Inspector
- **Dynamic Breadcrumbs**: Real-time trail displaying `World > 🇮🇳 India > Maharashtra > Pune`.
- **Country Metadata Pill Row**: Displays continent region, ISO alpha-2 code, and state count upon selection.
- **Two Inspector Views**:
  - **Visual View**: Clean postal-style address card with quick utility actions.
  - **JSON View**: Syntax-formatted, live developer JSON preview with timestamps and metadata.

### 5. 🛠️ Productivity Utilities
- 📋 **Copy Text**: One-click copy of the formatted address to the clipboard with fallback support and toast feedback.
- 💾 **Export JSON**: Instantly generate and download a clean `.json` file of the selected address.
- 📌 **Saved Address Book / Bookmarks**: Save favorite locations to `localStorage`. Clicking any saved bookmark reloads it into the form immediately.
- 🔔 **Toast Notification Engine**: Non-intrusive floating toasts confirming copy, export, bookmarking, and theme toggle actions.

### 6. 📱 Responsive & Accessible UI
- Built with a modern design system using CSS variables, soft shadows, and subtle glassmorphism (`backdrop-filter`).
- Accessible keyboard navigation and ARIA attributes (`aria-describedby`, `aria-live`, `role="alert"`).
- Step progress tracker with animated status rings and checkmarks.

---

## 📁 File Structure

```
Address-Selector-main/
│
├── index.html       # Top navigation, progress stepper, form layout, and inspector tabs
├── style.css        # Enterprise design system, light/dark themes, animations, responsive grid
├── data.js          # Hierarchical dataset with 51 countries, metadata, states & cities
├── script.js        # Engine logic: cascading dropdowns, filter, LocalStorage, theme, toasts & export
└── README.md        # Comprehensive documentation
```

---

## 🚀 How to Run

No build step, Node.js, or external library installation is needed!

1. Open File Explorer to:
   ```
   c:\Users\shruti shitole\Downloads\Address-Selector-main
   ```
2. Double-click `index.html` or open it in any modern browser (Chrome, Edge, Firefox, Safari).

---

## 🧪 Verification Matrix

| Action | Expected Behavior |
|---|---|
| **Page Load** | Country dropdown populated with flags. State & City disabled. Restores previous values from `localStorage` if present. |
| **Theme Toggle** | Switches between dark and light modes; persists in `localStorage`; notifies via toast. |
| **Quick Filter** | Typing in the search input dynamically filters country options in real time. |
| **Select Country (e.g. India)** | State dropdown enables with 21 Indian states. Metadata badges display `Asia`, `ISO: IN`, `21 States`. |
| **Select State (e.g. Maharashtra)** | City dropdown enables with 24 cities (*Pune, Mumbai, Nagpur, Nashik, Kolhapur...*). |
| **Select City (e.g. Pune)** | Step 3 marked complete. Breadcrumbs update. Live JSON reflects selection. |
| **Copy Address** | Copies `Pune, Maharashtra, India` to clipboard and triggers a toast notification. |
| **Export JSON** | Downloads `address-pune.json` containing the structured metadata. |
| **Save Bookmark** | Adds address to the history accordion; clicking the bookmark reloads the selection. |
| **Submit Form** | Validates all fields; displays animated verification banner; saves to `localStorage`. |
| **Reset Form** | Clears dropdowns, resets states to disabled, clears `localStorage`, and updates UI. |

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initHome();
  initCategories();
  initRecipePage();
  initRandomButtons();
  injectJsonLdIfRecipePage();
});

/* =========================================================
   Mobile Menu
   ========================================================= */
function initMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");
  if (!menuBtn || !mobileNav) return;

  menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
  });
}

/* =========================================================
   Home Page
   ========================================================= */
function initHome() {
  const popularGrid = document.getElementById("popularGrid");
  const latestGrid = document.getElementById("latestGrid");
  if (!popularGrid || !latestGrid) return;

  const popularRecipes = RECIPES.filter(r => r.featured).slice(0, 3);
  const latestRecipes = RECIPES.filter(r => r.latest).slice(0, 3);

  popularGrid.innerHTML = popularRecipes.map(renderCard).join("");
  latestGrid.innerHTML = latestRecipes.map(renderCard).join("");
}

/* =========================================================
   Categories Page
   ========================================================= */
function initCategories() {
  const chipWrap = document.getElementById("categoryChips");
  const grid = document.getElementById("categoryGrid");
  if (!chipWrap || !grid) return;

  const titleEl = document.getElementById("categoryTitle");
  const descEl = document.getElementById("categoryDesc");

  let activeCategory = "all";

  chipWrap.innerHTML = CATEGORIES.map(cat => `
    <button class="chip ${cat.id === "all" ? "active" : ""}" data-cat="${cat.id}">${cat.name}</button>
  `).join("");

  function renderCategory(category) {
    const list = category === "all"
      ? RECIPES
      : RECIPES.filter(r => r.category === category);

    grid.innerHTML = list.map(renderCard).join("");

    if (titleEl && descEl) {
      if (category === "all") {
        titleEl.textContent = "All Recipes";
        descEl.textContent = "Choose a category and find an easy Chinese recipe for beginners.";
      } else {
        const categoryMap = {
          "home-style": "Home-style Dishes",
          "noodles": "Noodles",
          "soups": "Soups",
          "air-fryer": "Air Fryer",
          "quick-meals": "Quick Meals",
          "desserts": "Desserts",
          "cold-dishes": "Cold Dishes"
        };
        titleEl.textContent = categoryMap[category] || "Recipes";
        descEl.textContent = `Browse ${categoryMap[category] || "recipes"} for beginner Chinese cooking.`;
      }
    }
  }

  chipWrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;

    chipWrap.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.dataset.cat;
    renderCategory(activeCategory);
  });

  const params = new URLSearchParams(window.location.search);
  const cat = params.get("cat");

  if (cat && CATEGORIES.some(c => c.id === cat)) {
    const targetBtn = chipWrap.querySelector(`[data-cat="${cat}"]`);
    if (targetBtn) targetBtn.click();
    else renderCategory(cat);
  } else {
    renderCategory(activeCategory);
  }
}

/* =========================================================
   Recipe Page
   ========================================================= */
function initRecipePage() {
  const recipeContent = document.getElementById("recipeContent");
  if (!recipeContent) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || RECIPES[0].id;
  const recipe = RECIPES.find(r => r.id === id) || RECIPES[0];

  // SEO meta updates
  document.title = `${recipe.title} | Easy Chinese Recipes`;

  const pageTitle = document.getElementById("pageTitle");
  const pageDesc = document.getElementById("pageDesc");
  const pageKeywords = document.getElementById("pageKeywords");
  const ogTitle = document.getElementById("ogTitle");
  const ogDesc = document.getElementById("ogDesc");
  const ogUrl = document.getElementById("ogUrl");
  const canonicalUrl = document.getElementById("canonicalUrl");

  if (pageTitle) pageTitle.textContent = `${recipe.title} | Easy Chinese Recipes`;
  if (pageDesc) pageDesc.setAttribute("content", recipe.metaDescription || recipe.intro || "");
  if (pageKeywords) {
    pageKeywords.setAttribute(
      "content",
      `${recipe.focusKeyword}, ${recipe.secondaryKeywords.join(", ")}`
    );
  }
  if (ogTitle) ogTitle.setAttribute("content", recipe.title);
  if (ogDesc) ogDesc.setAttribute("content", recipe.metaDescription || recipe.intro || "");
  if (ogUrl) ogUrl.setAttribute("content", `${window.location.origin}${window.location.pathname}?id=${recipe.id}`);
  if (canonicalUrl) canonicalUrl.setAttribute("href", `${window.location.origin}${window.location.pathname}?id=${recipe.id}`);

  recipeContent.innerHTML = `
    <h1>${recipe.title}</h1>
    <p class="recipe-lead">${recipe.intro}</p>

    <div class="badges">
      <span class="badge">${recipe.difficulty}</span>
      <span class="badge">${recipe.time}</span>
      <span class="badge">No Wok Needed</span>
      <span class="badge">Beginner Friendly</span>
    </div>

    <div class="section-block">
      <h2>Core Highlights</h2>
      <ul>
        ${recipe.coreHighlights.map(item => `<li>${item}</li>`).join("")}
      </ul>
    </div>

    <div class="section-block">
      <h2>Ingredients</h2>

      <h3>Main Ingredients</h3>
      <ul>${recipe.mainIngredients.map(item => `<li>${item}</li>`).join("")}</ul>

      <h3>Seasonings</h3>
      <ul>${recipe.seasonings.map(item => `<li>${item}</li>`).join("")}</ul>

      <h3>Optional Add-Ins</h3>
      <ul>${recipe.optionalAddIns.map(item => `<li>${item}</li>`).join("")}</ul>
    </div>

    <div class="section-block">
      <h2>Instructions</h2>
      ${recipe.steps.map((step, index) => `
        <div class="step">
          <strong>Step ${index + 1}</strong>
          <p>${step}</p>
        </div>
      `).join("")}

      <div class="note">
        ${recipe.proTips.map(tip => `<p>${tip}</p>`).join("")}
      </div>
    </div>

    <div class="section-block">
      <h2>Variations</h2>
      <ul>${recipe.variations.map(item => `<li>${item}</li>`).join("")}</ul>
    </div>

    <div class="section-block">
      <h2>Storage</h2>
      <p>${recipe.storage}</p>
    </div>

    <div class="section-block">
      <h2>SEO Keywords</h2>
      <p class="small-muted">${recipe.secondaryKeywords.join(", ")}</p>
    </div>

    <div class="section-block">
      <p><strong>Summary:</strong> This easy Chinese recipe is perfect for busy weeknights and beginner Chinese cooking, with no fancy tools or hard-to-find ingredients needed.</p>
    </div>
  `;

  // JSON-LD schema
  const schema = buildRecipeSchema(recipe);
  let script = document.getElementById("recipe-schema");
  if (script) script.remove();

  script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = "recipe-schema";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

/* =========================================================
   Random Recipe Modal
   ========================================================= */
function initRandomButtons() {
  const buttons = [
    document.getElementById("randomBtn"),
    document.getElementById("randomBtnTop"),
    document.getElementById("randomBtnMobile"),
    document.getElementById("randomBtnHero")
  ].filter(Boolean);

  const modal = document.getElementById("randomModal");
  const modalClose = document.getElementById("modalClose");
  const modalOverlay = document.getElementById("modalOverlay");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalMeta = document.getElementById("modalMeta");
  const modalLink = document.getElementById("modalLink");

  if (!modal || !modalClose || !modalOverlay || !modalTitle || !modalDesc || !modalMeta || !modalLink) return;

  function openRandomModal() {
    const recipe = RECIPES[Math.floor(Math.random() * RECIPES.length)];
    modalTitle.textContent = recipe.title;
    modalDesc.textContent = recipe.metaDescription || recipe.intro;
    modalMeta.textContent = `${recipe.difficulty} • ${recipe.time} • ${recipe.category}`;
    modalLink.href = `recipe.html?id=${recipe.id}`;
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openRandomModal();
    });
  });

  function closeModal() {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
  }

  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
      closeModal();
    }
  });
}

/* =========================================================
   Card Renderer
   ========================================================= */
function renderCard(recipe) {
  return `
    <article class="card recipe-card">
      <p class="eyebrow">${recipe.difficulty} • ${recipe.time}</p>
      <h3>${recipe.title}</h3>
      <p>${recipe.coreHighlights ? recipe.coreHighlights[0] : recipe.intro}</p>
      <div class="meta">
        <span>easy chinese recipe</span>
        <span>beginner chinese cooking</span>
      </div>
      <a class="link" href="recipe.html?id=${recipe.id}">View Recipe</a>
    </article>
  `;
}

/* =========================================================
   JSON-LD Recipe Schema
   ========================================================= */
function buildRecipeSchema(recipe) {
  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": recipe.title,
    "description": recipe.metaDescription || recipe.intro,
    "recipeCategory": recipe.category,
    "recipeCuisine": "Chinese",
    "keywords": [recipe.focusKeyword, ...recipe.secondaryKeywords].join(", "),
    "prepTime": `PT${extractMinutes(recipe.time)}M`,
    "totalTime": `PT${extractMinutes(recipe.time)}M`,
    "recipeYield": recipe.servings,
    "recipeIngredient": [
      ...recipe.mainIngredients,
      ...recipe.seasonings,
      ...recipe.optionalAddIns
    ],
    "recipeInstructions": recipe.steps.map((step, index) => ({
      "@type": "HowToStep",
      "name": `Step ${index + 1}`,
      "text": step
    })),
    "author": {
      "@type": "Organization",
      "name": "Easy Chinese Recipes"
    }
  };
}

function extractMinutes(timeText) {
  const match = timeText.match(/\d+/);
  return match ? parseInt(match[0], 10) : 10;
}

/* =========================================================
   Extra SEO helper
   ========================================================= */
function injectJsonLdIfRecipePage() {
  // The recipe page already injects schema in initRecipePage().
  // This function exists to keep the structure clear and expandable.
}

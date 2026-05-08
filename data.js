/* =========================================================
   Easy Chinese Recipes
   SEO-friendly recipe data
   No images, beginner-friendly, static-site ready
   ========================================================= */

const SITE = {
  name: "Easy Chinese Recipes",
  description: "Easy Chinese recipes for beginners with supermarket ingredients and no special tools needed.",
  baseUrl: "https://your-username.github.io/your-repo-name/"
};

const CATEGORIES = [
  { id: "all", name: "All Recipes" },
  { id: "home-style", name: "Home-style Dishes" },
  { id: "noodles", name: "Noodles" },
  { id: "soups", name: "Soups" },
  { id: "air-fryer", name: "Air Fryer" },
  { id: "quick-meals", name: "Quick Meals" },
  { id: "desserts", name: "Desserts" },
  { id: "cold-dishes", name: "Cold Dishes" }
];

const RECIPES = [
  {
    id: "tomato-egg-stir-fry",
    title: "Easy 10-Minute Tomato Egg Stir Fry Recipe - No Wok Required",
    difficulty: "Easy",
    time: "10 minutes",
    servings: "2",
    category: "home-style",
    featured: true,
    latest: true,
    focusKeyword: "easy chinese recipe",
    secondaryKeywords: [
      "beginner chinese cooking",
      "quick chinese dinner",
      "no wok chinese food",
      "supermarket ingredients chinese recipe"
    ],
    metaDescription: "A beginner-friendly tomato egg stir fry with simple supermarket ingredients, fast steps, and no special tools needed.",
    intro: "This is a classic easy Chinese recipe that is perfect for beginners. It uses simple supermarket ingredients, needs no wok, and comes together fast for a quick Chinese dinner.",
    coreHighlights: [
      "Beginner-friendly and very easy to follow.",
      "Uses supermarket ingredients you can find almost anywhere.",
      "No wok or special tools needed, so it is great for beginner Chinese cooking."
    ],
    mainIngredients: [
      "3 large eggs",
      "2 medium tomatoes, cut into wedges",
      "2 tbsp chopped scallions",
      "1 tbsp neutral oil [Affiliate Link: Cooking Oil]"
    ],
    seasonings: [
      "1 tbsp soy sauce [Affiliate Link: Low-Sodium Soy Sauce] — substitute: tamari sauce or coconut aminos",
      "1/2 tsp salt",
      "1 tsp sugar"
    ],
    optionalAddIns: [
      "2 tbsp water, if the tomatoes are not juicy enough",
      "1 tsp sesame oil, optional"
    ],
    steps: [
      "Crack the eggs into a bowl and beat them until the yolk and white are fully mixed. Heat the oil in a non-stick skillet [Affiliate Link: Non-Stick Skillet] over medium heat.",
      "Pour in the eggs and let them set for a few seconds. Stir gently until just cooked, then remove them to a plate.",
      "Add the tomatoes to the same pan and cook for 2 to 3 minutes. Press them lightly so they release juice.",
      "Add the soy sauce, salt, and sugar. Stir so the tomatoes and juice mix into a light sauce.",
      "Return the eggs to the pan and fold everything together for 30 to 60 seconds. Turn off the heat and add scallions on top."
    ],
    proTips: [
      "Pro Tip: Do not overcook the eggs. Soft eggs taste better and stay tender after you add them back.",
      "Pro Tip: If your tomatoes are firm, add 2 tbsp water to help make more sauce."
    ],
    variations: [
      "Vegetarian Version: This recipe is already vegetarian.",
      "Low-Carb Version: Serve with cauliflower rice instead of white rice.",
      "Extra Protein Version: Add small cubes of firm tofu."
    ],
    storage: "Leftovers can be stored in an airtight container for up to 3 days in the fridge.",
    affiliateLinks: [
      "Non-Stick Skillet",
      "Low-Sodium Soy Sauce",
      "Cooking Oil"
    ]
  },

  {
    id: "garlic-bok-choy",
    title: "Easy 12-Minute Garlic Bok Choy Recipe - No Wok Required",
    difficulty: "Easy",
    time: "12 minutes",
    servings: "2",
    category: "quick-meals",
    featured: true,
    latest: true,
    focusKeyword: "easy chinese recipe",
    secondaryKeywords: [
      "beginner chinese cooking",
      "quick chinese dinner",
      "no wok chinese food",
      "supermarket ingredients chinese recipe"
    ],
    metaDescription: "A quick and easy garlic bok choy recipe made with supermarket ingredients and no special cookware.",
    intro: "This easy Chinese recipe is a fast side dish or light dinner for beginner Chinese cooking. It uses simple supermarket ingredients and no wok Chinese food style cooking you can do in a regular skillet.",
    coreHighlights: [
      "Very quick and beginner-friendly.",
      "Uses easy supermarket ingredients.",
      "Great for a quick Chinese dinner with no special tools."
    ],
    mainIngredients: [
      "1 lb bok choy, washed and halved",
      "2 tbsp neutral oil [Affiliate Link: Cooking Oil]",
      "4 cloves garlic, minced"
    ],
    seasonings: [
      "1 tbsp soy sauce [Affiliate Link: Soy Sauce] — substitute: tamari sauce or coconut aminos",
      "1 tbsp oyster sauce [Affiliate Link: Oyster Sauce] — substitute: mushroom sauce",
      "1/4 tsp salt",
      "2 tbsp water"
    ],
    optionalAddIns: [
      "1 tsp sesame oil, optional"
    ],
    steps: [
      "Heat oil in a large skillet over medium-high heat. Add the garlic and cook for 10 seconds.",
      "Add the bok choy and stir for 2 minutes. Add water and cover for 1 minute.",
      "Uncover the pan and add soy sauce, oyster sauce, and salt. Toss for 30 seconds and turn off the heat."
    ],
    proTips: [
      "Pro Tip: Do not cook bok choy too long or it will become soft and watery.",
      "Pro Tip: If you cannot find oyster sauce, use mushroom sauce for a similar savory taste."
    ],
    variations: [
      "Vegetarian Version: Use mushroom sauce instead of oyster sauce.",
      "Add Protein: Serve with pan-fried tofu or chicken.",
      "Low-Carb Version: Eat it as a side dish without rice."
    ],
    storage: "Store leftovers in the fridge for up to 2 days and reheat quickly in a pan.",
    affiliateLinks: [
      "Cooking Oil",
      "Soy Sauce",
      "Oyster Sauce"
    ]
  },

  {
    id: "sesame-noodles",
    title: "Easy 15-Minute Sesame Noodles Recipe - No Wok Required",
    difficulty: "Easy",
    time: "15 minutes",
    servings: "2",
    category: "noodles",
    featured: true,
    latest: true,
    focusKeyword: "easy chinese recipe",
    secondaryKeywords: [
      "beginner chinese cooking",
      "quick chinese dinner",
      "no wok chinese food",
      "supermarket ingredients chinese recipe"
    ],
    metaDescription: "A simple sesame noodles recipe with peanut butter, soy sauce, and easy store-bought ingredients.",
    intro: "This is a quick Chinese dinner idea that is perfect for beginner Chinese cooking. It is an easy Chinese recipe that uses supermarket ingredients and does not need a wok.",
    coreHighlights: [
      "Fast, filling, and easy to make.",
      "Uses supermarket ingredients Chinese recipe shoppers can find anywhere.",
      "Great for a quick Chinese dinner on busy nights."
    ],
    mainIngredients: [
      "8 oz noodles",
      "1 tbsp neutral oil [Affiliate Link: Cooking Oil]",
      "2 tbsp chopped cucumber"
    ],
    seasonings: [
      "2 tbsp peanut butter [Affiliate Link: Peanut Butter] — substitute: tahini",
      "1 tbsp soy sauce [Affiliate Link: Soy Sauce] — substitute: tamari sauce or coconut aminos",
      "1 tbsp rice vinegar",
      "1 tsp sugar",
      "1 tsp sesame oil"
    ],
    optionalAddIns: [
      "1 to 2 tbsp water, to loosen the sauce",
      "1 tbsp chopped scallions"
    ],
    steps: [
      "Cook the noodles according to the package directions. Drain and rinse with cool water.",
      "Mix peanut butter, soy sauce, vinegar, sugar, sesame oil, and water in a bowl. Stir until smooth.",
      "Toss the noodles with the sauce and cucumber. Top with scallions and serve."
    ],
    proTips: [
      "Pro Tip: Add water little by little so the sauce does not get too thin.",
      "Pro Tip: Rinse the noodles after boiling so they do not stick together."
    ],
    variations: [
      "Vegetarian Version: This recipe is already vegetarian.",
      "Low-Carb Version: Use zucchini noodles instead of wheat noodles.",
      "Add Protein: Top with shredded chicken or tofu."
    ],
    storage: "Store in an airtight container for up to 3 days in the fridge.",
    affiliateLinks: [
      "Peanut Butter",
      "Soy Sauce",
      "Cooking Oil"
    ]
  },

  {
    id: "air-fryer-tofu",
    title: "Easy 20-Minute Air Fryer Tofu Recipe - No Wok Required",
    difficulty: "Easy",
    time: "20 minutes",
    servings: "2",
    category: "air-fryer",
    featured: false,
    latest: true,
    focusKeyword: "easy chinese recipe",
    secondaryKeywords: [
      "beginner chinese cooking",
      "quick chinese dinner",
      "no wok chinese food",
      "supermarket ingredients chinese recipe"
    ],
    metaDescription: "Crispy air fryer tofu made with simple supermarket ingredients and no special tools needed.",
    intro: "This easy Chinese recipe is perfect if you want a beginner Chinese cooking idea with little cleanup. It is a quick Chinese dinner that uses supermarket ingredients and works well without a wok.",
    coreHighlights: [
      "Simple and beginner-friendly.",
      "Uses supermarket ingredients you can buy at any large store.",
      "Great no wok Chinese food for busy nights."
    ],
    mainIngredients: [
      "14 oz firm tofu, cut into cubes",
      "1 tbsp neutral oil [Affiliate Link: Cooking Oil]",
      "1 tbsp cornstarch"
    ],
    seasonings: [
      "1 tbsp soy sauce [Affiliate Link: Soy Sauce] — substitute: tamari sauce or coconut aminos",
      "1 tsp garlic powder",
      "1 tsp paprika",
      "1/2 tsp salt"
    ],
    optionalAddIns: [
      "1 tsp sesame seeds, optional"
    ],
    steps: [
      "Pat the tofu dry with paper towels. Cut it into cubes and place it in a bowl.",
      "Add oil, cornstarch, soy sauce, garlic powder, paprika, and salt. Toss until the tofu is coated.",
      "Place the tofu in the air fryer basket in one layer. Cook at 400°F for 12 to 15 minutes, shaking halfway through."
    ],
    proTips: [
      "Pro Tip: Dry tofu first or it will not get crispy.",
      "Pro Tip: Do not overcrowd the basket. Cook in batches if needed."
    ],
    variations: [
      "Vegetarian Version: This recipe is already vegetarian.",
      "Add Sauce: Toss the tofu with sweet chili sauce after cooking.",
      "Low-Carb Version: Serve with steamed vegetables."
    ],
    storage: "Store leftovers in the fridge for up to 3 days and reheat in the air fryer for 3 to 4 minutes.",
    affiliateLinks: [
      "Cooking Oil",
      "Soy Sauce",
      "Air Fryer"
    ]
  },

  {
    id: "quick-fried-rice",
    title: "Easy 15-Minute Fried Rice Recipe - No Wok Required",
    difficulty: "Easy",
    time: "15 minutes",
    servings: "2",
    category: "quick-meals",
    featured: false,
    latest: true,
    focusKeyword: "easy chinese recipe",
    secondaryKeywords: [
      "beginner chinese cooking",
      "quick chinese dinner",
      "no wok chinese food",
      "supermarket ingredients chinese recipe"
    ],
    metaDescription: "A fast fried rice recipe with cold rice, eggs, vegetables, and simple seasoning.",
    intro: "This is one of the easiest easy Chinese recipe options for beginners. It is a quick Chinese dinner made from supermarket ingredients and does not need a wok.",
    coreHighlights: [
      "Great for using leftover rice.",
      "Uses simple supermarket ingredients.",
      "A classic quick Chinese dinner that is easy to customize."
    ],
    mainIngredients: [
      "2 cups cooked rice, cold",
      "2 eggs",
      "1/2 cup frozen peas and carrots",
      "1 tbsp neutral oil [Affiliate Link: Cooking Oil]"
    ],
    seasonings: [
      "1 tbsp soy sauce [Affiliate Link: Soy Sauce] — substitute: tamari sauce or coconut aminos",
      "1/2 tsp salt",
      "1 tsp sesame oil"
    ],
    optionalAddIns: [
      "2 tbsp chopped scallions"
    ],
    steps: [
      "Heat oil in a skillet over medium heat. Scramble the eggs and remove them to a plate.",
      "Add peas and carrots and cook for 1 minute. Add the cold rice and break it up with a spatula.",
      "Add soy sauce, salt, sesame oil, eggs, and scallions. Stir until everything is mixed well."
    ],
    proTips: [
      "Pro Tip: Use cold rice so the grains stay separate.",
      "Pro Tip: Do not add too much soy sauce or the rice will turn too dark and salty."
    ],
    variations: [
      "Vegetarian Version: Use only eggs and vegetables.",
      "Add Protein: Mix in shrimp, chicken, or tofu.",
      "Low-Carb Version: Use cauliflower rice."
    ],
    storage: "Store leftovers in the fridge for up to 3 days.",
    affiliateLinks: [
      "Cooking Oil",
      "Soy Sauce"
    ]
  },

  {
    id: "cucumber-salad",
    title: "Easy 10-Minute Smashed Cucumber Salad Recipe - No Wok Required",
    difficulty: "Easy",
    time: "10 minutes",
    servings: "2",
    category: "cold-dishes",
    featured: false,
    latest: true,
    focusKeyword: "easy chinese recipe",
    secondaryKeywords: [
      "beginner chinese cooking",
      "quick chinese dinner",
      "no wok chinese food",
      "supermarket ingredients chinese recipe"
    ],
    metaDescription: "A fresh smashed cucumber salad with garlic, vinegar, and simple seasonings.",
    intro: "This is a fast easy Chinese recipe that works well as a side dish or light meal. It uses supermarket ingredients and is perfect for beginner Chinese cooking with no wok required.",
    coreHighlights: [
      "Fresh and simple.",
      "Uses supermarket ingredients everyone can find.",
      "A no wok Chinese food side dish that is ready fast."
    ],
    mainIngredients: [
      "2 large cucumbers",
      "2 cloves garlic, minced",
      "1 tbsp chopped scallions",
      "1 tbsp neutral oil [Affiliate Link: Cooking Oil]"
    ],
    seasonings: [
      "1 tbsp soy sauce [Affiliate Link: Soy Sauce] — substitute: tamari sauce or coconut aminos",
      "1 tbsp rice vinegar",
      "1 tsp sugar",
      "1/2 tsp salt",
      "1 tsp sesame oil"
    ],
    optionalAddIns: [
      "1/2 tsp chili flakes, optional"
    ],
    steps: [
      "Wash the cucumbers and smash them with the side of a knife or a rolling pin. Cut them into bite-size pieces.",
      "Mix garlic, soy sauce, rice vinegar, sugar, salt, sesame oil, and chili flakes in a bowl.",
      "Toss the cucumbers with the dressing. Add scallions and serve right away or chill for 10 minutes."
    ],
    proTips: [
      "Pro Tip: Smash the cucumbers first so they soak up more flavor.",
      "Pro Tip: Salt the cucumbers for 5 minutes first if you want them to stay extra crisp."
    ],
    variations: [
      "Vegetarian Version: This recipe is already vegetarian.",
      "Low-Carb Version: This recipe is naturally low carb.",
      "Add Protein: Serve with shredded chicken or tofu."
    ],
    storage: "Best eaten fresh, but leftovers can be stored in the fridge for up to 1 day.",
    affiliateLinks: [
      "Cooking Oil",
      "Soy Sauce"
    ]
  },

  {
    id: "mapo-tofu",
    title: "Easy 20-Minute Mapo Tofu Recipe - No Wok Required",
    difficulty: "Medium",
    time: "20 minutes",
    servings: "2",
    category: "home-style",
    featured: true,
    latest: false,
    focusKeyword: "easy chinese recipe",
    secondaryKeywords: [
      "beginner chinese cooking",
      "quick chinese dinner",
      "no wok chinese food",
      "supermarket ingredients chinese recipe"
    ],
    metaDescription: "A simplified mapo tofu recipe for beginners with easy supermarket ingredients and no special tools.",
    intro: "This beginner-friendly easy Chinese recipe keeps the bold taste of mapo tofu but makes it simple for home cooks. It is a quick Chinese dinner idea that uses supermarket ingredients and does not require a wok.",
    coreHighlights: [
      "Simple version for beginner Chinese cooking.",
      "Uses easy supermarket ingredients with one substitute for doubanjiang.",
      "No wok Chinese food that still gives a strong savory flavor."
    ],
    mainIngredients: [
      "1 block soft tofu, about 14 oz",
      "1/2 lb ground pork",
      "1 tbsp neutral oil [Affiliate Link: Cooking Oil]",
      "2 tbsp chopped scallions"
    ],
    seasonings: [
      "1 tbsp doubanjiang [Affiliate Link: Chili Bean Paste] — substitute: gochujang + a pinch of salt",
      "1 tbsp soy sauce [Affiliate Link: Soy Sauce] — substitute: tamari sauce or coconut aminos",
      "1 tsp sugar",
      "1 cup water",
      "1 tsp cornstarch mixed with 2 tbsp water"
    ],
    optionalAddIns: [
      "1 tsp sesame oil, optional",
      "1 tsp chili flakes, optional"
    ],
    steps: [
      "Cut the tofu into cubes and place it in hot water for 2 minutes. Drain carefully.",
      "Heat oil in a skillet over medium heat. Cook the ground pork until browned.",
      "Add doubanjiang and stir for 20 seconds. Add water, soy sauce, and sugar, then bring it to a gentle simmer.",
      "Add the tofu and let it cook for 3 minutes. Stir very gently so the cubes do not break.",
      "Add the cornstarch slurry and stir until the sauce thickens. Turn off the heat and add scallions."
    ],
    proTips: [
      "Pro Tip: Handle tofu gently or it will break apart.",
      "Pro Tip: If you cannot find doubanjiang, gochujang plus a pinch of salt gives a good substitute flavor."
    ],
    variations: [
      "Vegetarian Version: Replace ground pork with finely chopped mushrooms.",
      "Low-Carb Version: Serve with cauliflower rice.",
      "Extra Spicy Version: Add more chili flakes or chili oil."
    ],
    storage: "Store leftovers in the fridge for up to 3 days. Reheat gently on the stove.",
    affiliateLinks: [
      "Chili Bean Paste",
      "Soy Sauce",
      "Cooking Oil"
    ]
  },

  {
    id: "chinese-egg-drop-soup",
    title: "Easy 10-Minute Egg Drop Soup Recipe - No Wok Required",
    difficulty: "Easy",
    time: "10 minutes",
    servings: "2",
    category: "soups",
    featured: false,
    latest: true,
    focusKeyword: "easy chinese recipe",
    secondaryKeywords: [
      "beginner chinese cooking",
      "quick chinese dinner",
      "no wok chinese food",
      "supermarket ingredients chinese recipe"
    ],
    metaDescription: "A simple egg drop soup recipe with broth, eggs, and scallions for beginners.",
    intro: "This easy Chinese recipe is one of the best starter dishes for beginner Chinese cooking. It is fast, uses supermarket ingredients, and is a great quick Chinese dinner or side soup.",
    coreHighlights: [
      "Very quick and easy for beginners.",
      "Uses supermarket ingredients only.",
      "A classic no wok Chinese food recipe that is ready in minutes."
    ],
    mainIngredients: [
      "4 cups chicken broth",
      "2 large eggs, beaten",
      "1 tbsp chopped scallions",
      "1 tsp cornstarch mixed with 1 tbsp water"
    ],
    seasonings: [
      "1/2 tsp salt",
      "1/4 tsp white pepper",
      "1 tsp sesame oil"
    ],
    optionalAddIns: [
      "1 tbsp frozen peas, optional",
      "1 tsp soy sauce [Affiliate Link: Soy Sauce] — substitute: tamari sauce or coconut aminos"
    ],
    steps: [
      "Bring the broth to a gentle boil in a pot over medium heat. Add salt and white pepper.",
      "Stir in the cornstarch slurry and cook for 30 seconds. Keep the soup moving gently.",
      "Slowly pour in the beaten eggs while stirring the soup in one direction. Turn off the heat and add sesame oil and scallions."
    ],
    proTips: [
      "Pro Tip: Pour the eggs slowly for soft egg ribbons.",
      "Pro Tip: Do not let the soup boil hard after adding eggs or the texture can get rough."
    ],
    variations: [
      "Vegetarian Version: Use vegetable broth.",
      "Low-Carb Version: This recipe is naturally low carb.",
      "Add Protein: Add tofu cubes or shredded chicken."
    ],
    storage: "Store in the fridge for up to 2 days and reheat gently.",
    affiliateLinks: [
      "Chicken Broth",
      "Soy Sauce",
      "Cooking Oil"
    ]
  },

  {
    id: "scallion-pancakes",
    title: "Easy 25-Minute Scallion Pancakes Recipe - No Wok Required",
    difficulty: "Medium",
    time: "25 minutes",
    servings: "2 to 3",
    category: "quick-meals",
    featured: false,
    latest: false,
    focusKeyword: "easy chinese recipe",
    secondaryKeywords: [
      "beginner chinese cooking",
      "quick chinese dinner",
      "no wok chinese food",
      "supermarket ingredients chinese recipe"
    ],
    metaDescription: "A simple scallion pancake recipe with pantry ingredients and easy steps for beginners.",
    intro: "This easy Chinese recipe is a great snack or side dish for beginner Chinese cooking. It uses supermarket ingredients and can be made in a normal skillet without a wok.",
    coreHighlights: [
      "Simple dough and easy pan-frying.",
      "Uses supermarket ingredients found in most kitchens.",
      "A fun no wok Chinese food recipe for home cooks."
    ],
    mainIngredients: [
      "2 cups all-purpose flour",
      "3/4 cup warm water",
      "1/2 cup chopped scallions",
      "2 tbsp neutral oil [Affiliate Link: Cooking Oil]"
    ],
    seasonings: [
      "1 tsp salt",
      "1 tbsp soy sauce [Affiliate Link: Soy Sauce] — substitute: tamari sauce or coconut aminos"
    ],
    optionalAddIns: [
      "1 tsp sesame oil, optional",
      "1 tbsp flour for dusting"
    ],
    steps: [
      "Mix the flour and warm water in a bowl until a dough forms. Knead for 2 to 3 minutes.",
      "Roll the dough out into a thin circle. Brush with oil, sprinkle salt and scallions, then roll it into a log.",
      "Coil the log into a round shape and flatten it again. Pan-fry in oil over medium heat until both sides are golden."
    ],
    proTips: [
      "Pro Tip: Let the dough rest for 10 minutes if it feels too tight.",
      "Pro Tip: Keep the heat medium so the pancakes cook through without burning."
    ],
    variations: [
      "Vegetarian Version: This recipe is already vegetarian.",
      "Add Dip: Serve with soy sauce and vinegar.",
      "Extra Flavor: Add a little sesame oil to the filling."
    ],
    storage: "Store leftovers in the fridge for up to 2 days and reheat in a skillet.",
    affiliateLinks: [
      "Cooking Oil",
      "Soy Sauce"
    ]
  },

  {
    id: "mango-sago",
    title: "Easy 15-Minute Mango Sago Dessert Recipe - No Wok Required",
    difficulty: "Easy",
    time: "15 minutes",
    servings: "2",
    category: "desserts",
    featured: false,
    latest: true,
    focusKeyword: "easy chinese recipe",
    secondaryKeywords: [
      "beginner chinese cooking",
      "quick chinese dinner",
      "no wok chinese food",
      "supermarket ingredients chinese recipe"
    ],
    metaDescription: "A sweet and simple mango sago dessert made with easy ingredients and no special tools.",
    intro: "This easy Chinese recipe is a sweet finish for beginner Chinese cooking. It uses supermarket ingredients and is a simple no wok Chinese food dessert that is ready fast.",
    coreHighlights: [
      "Sweet, light, and beginner-friendly.",
      "Uses supermarket ingredients and simple steps.",
      "A fast dessert that fits a quick Chinese dinner menu."
    ],
    mainIngredients: [
      "1 ripe mango, diced",
      "1/3 cup small tapioca pearls",
      "1 cup coconut milk [Affiliate Link: Coconut Milk]"
    ],
    seasonings: [
      "1 to 2 tbsp sugar",
      "1/2 cup water"
    ],
    optionalAddIns: [
      "1 tbsp condensed milk [Affiliate Link: Condensed Milk], optional",
      "1 tbsp chia seeds, optional"
    ],
    steps: [
      "Cook the tapioca pearls according to the package directions. Drain and rinse with cool water.",
      "Blend half the mango with coconut milk, water, and sugar until smooth.",
      "Add the cooked tapioca to the mango mixture. Top with diced mango and serve chilled."
    ],
    proTips: [
      "Pro Tip: Do not overcook the tapioca pearls or they will turn too soft.",
      "Pro Tip: Use a ripe mango for the best sweet flavor."
    ],
    variations: [
      "Vegetarian Version: This recipe is already vegetarian.",
      "Low-Carb Version: Replace tapioca with chia seeds.",
      "Extra Creamy Version: Add a little condensed milk."
    ],
    storage: "Store in the fridge for up to 2 days and stir before serving.",
    affiliateLinks: [
      "Coconut Milk",
      "Condensed Milk"
    ]
  }
];

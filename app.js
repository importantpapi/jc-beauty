/* ==========================================================================
   JC BEAUTY - PREMIUM SCRIPTS & INTERACTION ENGINE
   Features: Multilingual Engine, Section Router, Lash Quiz, Dynamic Grid, Accordion
   ========================================================================== */

// 1. Translation Dictionary
const translations = {
  nl: {
    // Navigation
    nav_home: "Home",
    nav_services: "Behandelingen",
    nav_gallery: "Resultaten",
    nav_aftercare: "Nazorg",
    nav_faq: "FAQ",
    book_now_btn: "Boek Nu",
    
    // SEO Meta
    meta_title: "JC Beauty | Premium lashes & brows in Mechelen",
    
    // Hero Section
    hero_title: "Premium lashes & brows in Mechelen",
    hero_subtitle: "Word wakker met een verzorgde, elegante look — zonder elke dag mascara of wenkbrauwmake-up.",
    hero_cta_book: "Boek je afspraak",
    hero_cta_services: "Bekijk behandelingen",
    badge_lash: "Gecertificeerd Lash Tech",
    badge_brow: "Wenkbrauw Specialist",
    badge_location: "Gevestigd in Mechelen",

    // Hero & Intro Section (Design Clone Updates)
    hero_title_welcome: "WELCOME TO",
    intro_tagline_cursive: "Embrace Your Natural Beauty",
    intro_desc: "Bij JC Beauty geloven we dat wimpers en wenkbrauwen geen standaardpakket zijn. Elke behandeling wordt volledig op maat ontworpen om jouw natuurlijke schoonheid te versterken en je zelfvertrouwen een boost te geven.",
    intro_discover: "ONTDEK MEER",
    intro_badge: "Anti Mascara Club",
    intro_tagline: "Mechelen girls wear JC Beauty",
    intro_title: "Jouw ogen, perfect geaccentueerd.",
    intro_p1: "Bij JC Beauty geloven we dat wimpers en wenkbrauwen geen standaardpakket zijn. Elke behandeling wordt volledig op maat ontworpen om jouw natuurlijke schoonheid te versterken.",
    intro_p2: "Op basis van jouw gezichtsvorm, oogopslag en de gezondheid van je natuurlijke wimpers creëren we een look die naadloos bij jouw levensstijl past. Of je nu kiest voor een subtiele lift of adembenemend volume: wij garanderen perfectie tot in het kleinste detail.",
    intro_sig: "JC Beauty Filosofie",

    // Anti Mascara Club Benefits
    am_title: "Waarom de Anti Mascara Club?",
    am_benefit1_title: "Bespaar Tijd",
    am_benefit1_desc: "Bespaar elke ochtend 15 minuten en word moeiteloos wakker met een perfecte wimperlijn.",
    am_benefit2_title: "Geen Vlekken",
    am_benefit2_desc: "Zweet-, regen- en traanbestendig. Perfect voor een actieve levensstijl zonder mascara-uitloop.",
    am_benefit3_title: "Gezonde Wimpers",
    am_benefit3_desc: "Geen schadelijke wimpertangen of agressieve reinigers die je natuurlijke wimpers breken.",
    am_benefit4_title: "Op Maat Ontworpen",
    am_benefit4_desc: "Individuele mapping die jouw oogvorm lift en opent, in tegenstelling tot standaard mascara.",

    // Studio Essentials
    essentials_title: "Onze Studio Nazorg Essentials",
    essentials_subtitle: "Behoud je perfecte resultaat langer met deze door ons geselecteerde premium nazorgproducten, verkrijgbaar in de salon.",
    product1_name: "Luxe Wimpershampoo",
    product1_desc: "Zachte, olievrije formule die wimperextensions diep reinigt, beschermt en bacteriegroei voorkomt.",
    product2_name: "Premium Wimperborstel Set",
    product2_desc: "Set van drie zachte spoolie-borsteltjes in een beschermende koker voor dagelijkse styling.",
    product3_name: "Hydraterend Lash Serum",
    product3_desc: "Voedt en versterkt natuurlijke wimpers en wenkbrauwen na een lift- of laminatiebehandeling.",

    // Quiz Section
    quiz_title: "Vind Jouw Wimpersignatuur",
    quiz_style_natural: "Natural & Clean",
    quiz_style_glam: "Soft Glam",
    quiz_style_volume: "Full Volume",
    quiz_style_mega: "Mega Glam",
    quiz_style_lift: "Lash Lift Only",
    quiz_rec_title: "Aanbevolen voor jou:",
    quiz_duration: "Duur",
    quiz_price: "Prijs",
    quiz_best_for: "Ideaal voor",
    quiz_book_rec: "Boek deze stijl",

    // Services categories
    cat_lashes: "Wimpers",
    cat_brows: "Wenkbrauwen",
    cat_packs: "Voordeelpacks",

    // Trust Section
    trust_title: "Zorgeloze Schoonheid",
    trust_p1_title: "Gezonde Wimpers Eerst",
    trust_p1_desc: "Wij hechten het grootste belang aan de gezondheid van je eigen wimpers. De wimperextensions worden zorgvuldig geplaatst zonder de natuurlijke groeicyclus te beschadigen.",
    trust_p2_title: "Gezichts- & Oogmapping",
    trust_p2_desc: "Geen enkele set is hetzelfde. We analyseren je gezichtsstructuur en oogvorm om een wimperontwerp te creëren dat jouw blik optimaal lift en opent.",
    trust_p3_title: "Gecertificeerde Kwaliteit",
    trust_p3_desc: "Onze specialiste is volledig opgeleid en gecertificeerd. We werken uitsluitend met hypoallergene, hoogwaardige lijmen en materialen.",

    // Reviews Section
    reviews_title: "Wat Klanten Zeggen",
    reviews_placeholder: "Recensies van klanten komen binnenkort online.",
    review_cta_text: "Ben je al bij ons behandeld?",
    review_cta_btn: "Laat een review achter",

    // Final CTA
    final_cta_title: "Klaar Voor Je Volgende Wimper-Era?",
    final_cta_subtitle: "Boek je JC Beauty afspraak en ga naar huis met een look die moeiteloos, verzorgd en helemaal van jou is.",
    final_cta_btn: "Boek Afspraak",

    // Aftercare Items
    care_1_title: "Drooghouden",
    care_1_desc: "Houd de wimpers de eerste 24-48 uur na de behandeling volledig droog. Vermijd stoom, sauna's en zware trainingen om de lijm optimaal te laten hechten.",
    care_2_title: "Dagelijks Borstelen",
    care_2_desc: "Borstel je wimperextensions dagelijks zachtjes door met een schoon wimperborsteltje om ze mooi gespreid en in model te houden.",
    care_3_title: "Vermijd Olieproducten",
    care_3_desc: "Gebruik geen reinigingsproducten, crèmes of make-up op oliebasis rondom de ogen. Olie lost de wimperlijm op, waardoor extensions sneller uitvallen.",
    care_4_title: "Niet Wrijven of Trekken",
    care_4_desc: "Trek of wrijf nooit aan de extensions. Dit kan de natuurlijke wimpers beschadigen. Laat de extensions altijd professioneel verwijderen.",
    care_5_title: "Boek Tijdig Refills",
    care_5_desc: "Wimpers vallen natuurlijk uit. Boek elke 2 tot 3 weken een refill-afspraak om je wimperlijn vol, elegant en verzorgd te houden.",
    care_6_title: "Reinig Regelmatig",
    care_6_desc: "Reinig je wimpers 2-3 keer per week met een speciale wimpershampoo om opbouw van bacteriën, make-upresten en talg te voorkomen.",

    // How it works
    booking_title: "Hoe Het Werkt",
    step1_title: "Kies je behandeling",
    step1_desc: "Selecteer je favoriete lash of brow service via onze behandelingenpagina of direct op Setmore.",
    step2_title: "Betaal voorschot",
    step2_desc: "Voldoe een niet-restitueerbaar voorschot van €15 om je tijdslot definitief in de agenda te reserveren.",
    step3_title: "Ontvang bevestiging",
    step3_desc: "Je ontvangt direct een e-mail en sms met de afspraakdetails en de precieze salonlocatie.",
    step4_title: "Geniet van het resultaat",
    step4_desc: "Kom op tijd, ontspan in onze luxe stoel en word wakker met een adembenemende, elegante blik.",
    cta_box_title: "Boek Je Exclusieve Ervaring",
    cta_box_desc: "Plan vandaag nog je afspraak. Heb je vragen over de behandelingen of wil je graag stijladvies? Neem gerust contact op.",
    cta_box_btn: "Naar de Boekingspagina",

    // Footer
    footer_brand_desc: "JC Beauty is een premium lash & brow studio gevestigd in Mechelen, België. Wij streven naar perfectie en leveren op maat gemaakte ontwerpen die je natuurlijke schoonheid versterken en beschermen.",
    footer_links_title: "Navigatie",
    footer_contact_title: "Contact & Locatie",
    footer_map_hint: "(Precieze locatie in bevestigingsmail)",
    footer_creator: "Ontworpen voor pure luxe",

    // Gallery Filters
    filter_all: "Alles",
    filter_lashes: "Wimpers",
    filter_brows: "Wenkbrauwen",
    filter_lift: "Lash Lift",
    filter_ba: "Voor & Na",

    // Services CTA
    book_service_btn: "Boek behandeling"
  },
  fr: {
    // Navigation
    nav_home: "Accueil",
    nav_services: "Prestations",
    nav_gallery: "Résultats",
    nav_aftercare: "Entretien",
    nav_faq: "FAQ",
    book_now_btn: "Réserver",

    // SEO Meta
    meta_title: "JC Beauty | Cils & Sourcils Premium à Malines",

    // Hero Section
    hero_title: "Cils & sourcils premium à Malines",
    hero_subtitle: "Réveillez-vous avec un regard élégant et soigné — sans mascara ni maquillage quotidien.",
    hero_cta_book: "Réserver un rendez-vous",
    hero_cta_services: "Voir les prestations",
    badge_lash: "Lash Tech Certifiée",
    badge_brow: "Spécialiste Sourcils",
    badge_location: "Situé à Malines",

    // Hero & Intro Section (Design Clone Updates)
    hero_title_welcome: "WELCOME TO",
    intro_tagline_cursive: "Sublimez Votre Beauté Naturelle",
    intro_desc: "Chez JC Beauty, nous pensons que les cils et les sourcils ne sont pas universels. Chaque prestation est conçue sur mesure pour rehausser votre beauté naturelle et booster votre confiance.",
    intro_discover: "DÉCOUVRIR PLUS",
    intro_badge: "Anti Mascara Club",
    intro_tagline: "Les filles de Malines portent JC Beauty",
    intro_title: "Vos yeux, sublimés à la perfection.",
    intro_p1: "Chez JC Beauty, nous croyons que les cils et sourcils ne sont pas universels. Chaque prestation est conçue sur mesure pour rehausser votre beauté naturelle.",
    intro_p2: "En fonction de la forme de votre visage, de vos yeux et de la santé de vos cils naturels, nous créons un look adapté à votre style de vie. Que vous choisissiez un rehaussement subtil ou un volume spectaculaire: nous garantissons la perfection dans chaque détail.",
    intro_sig: "Philosophie JC Beauty",

    // Anti Mascara Club Benefits
    am_title: "Pourquoi le Anti Mascara Club ?",
    am_benefit1_title: "Gagnez du Temps",
    am_benefit1_desc: "Gagnez 15 minutes chaque matin et réveillez-vous sans effort avec un regard impeccable.",
    am_benefit2_title: "Zéro Coulure",
    am_benefit2_desc: "Résistant à la transpiration, à la pluie et aux larmes. Idéal pour un style de vie actif sans retouches.",
    am_benefit3_title: "Cils plus Sains",
    am_benefit3_desc: "Pas de recourbe-cils agressif ni de démaquillants décapants qui cassent vos cils naturels.",
    am_benefit4_title: "Design sur Mesure",
    am_benefit4_desc: "Un mapping individuel qui lifte et ouvre le regard contrairement au mascara classique standard.",

    // Studio Essentials
    essentials_title: "Nos Essentiels d'Entretien en Studio",
    essentials_subtitle: "Prolongez la durée de votre pose avec nos produits d'entretien haut de gamme, disponibles au salon.",
    product1_name: "Shampoing Cils de Luxe",
    product1_desc: "Formule douce et sans huile qui nettoie en profondeur, protège les extensions et prévient les bactéries.",
    product2_name: "Kit Goupillons Premium",
    product2_desc: "Lot de trois goupillons doux dans un étui protecteur chic pour brosser vos cils au quotidien.",
    product3_name: "Sérum Hydratant Cils",
    product3_desc: "Nourrit et fortifie les cils et sourcils naturels après un rehaussement ou un brow lift.",

    // Quiz Section
    quiz_title: "Trouvez Votre Style de Cils",
    quiz_style_natural: "Naturel & Pur",
    quiz_style_glam: "Soft Glam",
    quiz_style_volume: "Volume Intense",
    quiz_style_mega: "Méga Glam",
    quiz_style_lift: "Rehaussement Seul",
    quiz_rec_title: "Recommandé pour vous:",
    quiz_duration: "Durée",
    quiz_price: "Tarif",
    quiz_best_for: "Idéal pour",
    quiz_book_rec: "Réserver ce style",

    // Services categories
    cat_lashes: "Cils",
    cat_brows: "Sourcils",
    cat_packs: "Packs Beauté",

    // Trust Section
    trust_title: "Beauté en Toute Confiance",
    trust_p1_title: "La Santé des Cils d'Abord",
    trust_p1_desc: "Nous privilégions la santé de vos cils naturels. Les extensions sont appliquées minutieusement sans endommager le cycle de pousse naturel.",
    trust_p2_title: "Mapping sur Mesure",
    trust_p2_desc: "Chaque pose est unique. Nous analysons l'architecture de votre visage pour concevoir un design qui ouvre et lifte votre regard.",
    trust_p3_title: "Qualité Certifiée",
    trust_p3_desc: "Notre praticienne est qualifiée et certifiée. Nous travaillons exclusivement avec des colles et matériaux hypoallergéniques haut de gamme.",

    // Reviews Section
    reviews_title: "Avis Clients",
    reviews_placeholder: "Les avis clients seront bientôt disponibles en ligne.",
    review_cta_text: "Déjà cliente chez nous ?",
    review_cta_btn: "Laissez-nous un avis",

    // Final CTA
    final_cta_title: "Prête Pour Votre Nouveau Regard ?",
    final_cta_subtitle: "Réservez votre séance chez JC Beauty et repartez avec un look élégant, naturel et parfaitement soigné.",
    final_cta_btn: "Réserver",

    // Aftercare Items
    care_1_title: "Garder au Sec",
    care_1_desc: "Gardez vos cils au sec pendant les 24-48 heures suivant la pose. Évitez hammam, sauna et séances de sport intensives pour optimiser la tenue de la colle.",
    care_2_title: "Brossage Quotidien",
    care_2_desc: "Brossez délicatement vos extensions chaque jour à l'aide d'un goupillon propre pour conserver un alignement parfait.",
    care_3_title: "Éviter les Huiles",
    care_3_desc: "N'utilisez pas de démaquillants, crèmes ou cosmétiques gras autour des yeux. Le gras dissout la colle et fait tomber les extensions prématurément.",
    care_4_title: "Ne pas Frotter ni Tirer",
    care_4_desc: "Ne tirez ou ne frottez jamais sur vos cils. Cela risquerait d'arracher vos cils naturels. Faites toujours retirer vos extensions en salon.",
    care_5_title: "Remplissages Réguliers",
    care_5_desc: "Les cils tombent naturellement. Réservez un remplissage toutes les 2 à 3 semaines pour conserver une ligne de cils dense et soignée.",
    care_6_title: "Nettoyage Adapté",
    care_6_desc: "Nettoyez vos cils 2 à 3 fois par semaine avec un shampoing pour cils spécifique afin de retirer résidus de maquillage, sébum et poussières.",

    // How it works
    booking_title: "Comment ça Marche",
    step1_title: "Choisissez votre prestation",
    step1_desc: "Sélectionnez votre soin préféré pour les cils ou sourcils depuis notre catalogue ou directement sur Setmore.",
    step2_title: "Payez l'acompte",
    step2_desc: "Réglez un acompte non remboursable de 15 € pour valider définitivement votre créneau dans l'agenda.",
    step3_title: "Confirmation reçue",
    step3_desc: "Vous recevrez immédiatement un e-mail et un SMS avec les détails et l'adresse exacte du studio.",
    step4_title: "Profitez du résultat",
    step4_desc: "Arrivez à l'heure, détendez-vous dans notre fauteuil confortable et réveillez-vous avec un regard transformé.",
    cta_box_title: "Réservez Votre Expérience Exclusive",
    cta_box_desc: "Planifiez votre séance dès aujourd'hui. Des questions sur nos soins ou besoin d'un conseil ? N'hésitez pas à nous contacter.",
    cta_box_btn: "Vers la page de réservation",

    // Footer
    footer_brand_desc: "JC Beauty est un studio de cils et sourcils haut de gamme basé à Malines, Belgique. Nous visons la perfection et offrons des designs sur-mesure respectant la santé de vos cils.",
    footer_links_title: "Navigation",
    footer_contact_title: "Contact & Adresse",
    footer_map_hint: "(Adresse exacte dans l'e-mail de confirmation)",
    footer_creator: "Créé pour incarner le luxe",

    // Gallery Filters
    filter_all: "Tout",
    filter_lashes: "Cils",
    filter_brows: "Sourcils",
    filter_lift: "Lash Lift",
    filter_ba: "Avant / Après",

    // Services CTA
    book_service_btn: "Réserver ce soin"
  },
  en: {
    // Navigation
    nav_home: "Home",
    nav_services: "Services",
    nav_gallery: "Gallery",
    nav_aftercare: "Aftercare",
    nav_faq: "FAQ",
    book_now_btn: "Book Now",

    // SEO Meta
    meta_title: "JC Beauty | Premium lashes & brows in Mechelen",

    // Hero Section
    hero_title: "Premium lashes & brows in Mechelen",
    hero_subtitle: "Wake up with an elegant, polished look — without applying mascara or brow makeup daily.",
    hero_cta_book: "Book appointment",
    hero_cta_services: "View services",
    badge_dash: "Certified Lash Tech",
    badge_brow: "Brow Specialist",
    badge_location: "Located in Mechelen",

    // Hero & Intro Section (Design Clone Updates)
    hero_title_welcome: "WELCOME TO",
    intro_tagline_cursive: "Embrace Your Natural Beauty",
    intro_desc: "At JC Beauty, we believe lashes and brows are not one-size-fits-all. Every treatment is custom-designed to enhance your natural beauty and boost your confidence.",
    intro_discover: "DISCOVER MORE",
    intro_badge: "Anti Mascara Club",
    intro_tagline: "Mechelen girls wear JC Beauty",
    intro_title: "Your eyes, perfectly accentuated.",
    intro_p1: "At JC Beauty, we believe lashes and brows are not one-size-fits-all. Every treatment is custom-designed to enhance your unique natural beauty.",
    intro_p2: "Based on your face shape, eye configuration, and natural lash health, we create a bespoke look that integrates seamlessly with your lifestyle. Whether a subtle lift or stunning volume: we guarantee perfection down to the smallest detail.",
    intro_sig: "JC Beauty Philosophy",

    // Anti Mascara Club Benefits
    am_title: "Why the Anti Mascara Club?",
    am_benefit1_title: "Save Time",
    am_benefit1_desc: "Save 15 minutes every morning and wake up effortlessly with a flawless lash line.",
    am_benefit2_title: "Zero Smudges",
    am_benefit2_desc: "Sweat, rain, and tear-resistant. Perfect for an active lifestyle without running mascara.",
    am_benefit3_title: "Healthy Lashes",
    am_benefit3_desc: "No damaging eyelash curlers or harsh makeup removers that break natural lashes.",
    am_benefit4_title: "Custom Designed",
    am_benefit4_desc: "Individual mapping that lifts and defines your eye shape, unlike standard mascara.",

    // Studio Essentials
    essentials_title: "Our Studio Aftercare Essentials",
    essentials_subtitle: "Keep your lashes looking perfect longer with our curated premium aftercare products, available at the studio.",
    product1_name: "Luxury Lash Shampoo",
    product1_desc: "Gentle, oil-free formula that cleanses extensions, protects adhesive, and prevents bacterial buildup.",
    product2_name: "Premium Lash Spoolie Kit",
    product2_desc: "Set of three soft spoolie brushes in a chic protective case for daily lash styling.",
    product3_name: "Hydrating Lash Serum",
    product3_desc: "Nutrient-rich serum to fortify and hydrate natural lashes and brows after a lift or lamination.",

    // Quiz Section
    quiz_title: "Find Your Lash Signature",
    quiz_style_natural: "Natural & Clean",
    quiz_style_glam: "Soft Glam",
    quiz_style_volume: "Full Volume",
    quiz_style_mega: "Mega Glam",
    quiz_style_lift: "Lash Lift Only",
    quiz_rec_title: "Recommended for you:",
    quiz_duration: "Duration",
    quiz_price: "Price",
    quiz_best_for: "Best for",
    quiz_book_rec: "Book this style",

    // Services categories
    cat_lashes: "Lashes",
    cat_brows: "Brows",
    cat_packs: "Packs",

    // Trust Section
    trust_title: "Beauty in Good Hands",
    trust_p1_title: "Natural Lash Health First",
    trust_p1_desc: "We prioritize natural lash health above all. Eyelash extensions are meticulously isolated and applied without damaging your natural growth cycle.",
    trust_p2_title: "Face & Eye Shape Mapping",
    trust_p2_desc: "No two sets are the same. We analyze your facial features and eye shape to create a custom lash map that opens and lifts your gaze.",
    trust_p3_title: "Certified Expertise",
    trust_p3_desc: "Our specialist is fully trained and certified. We use only premium, hypoallergenic adhesives and lightweight luxury lashes.",

    // Reviews Section
    reviews_title: "Client Reviews",
    reviews_placeholder: "Client reviews are coming soon.",
    review_cta_text: "Had your treatment recently?",
    review_cta_btn: "Leave a review",

    // Final CTA
    final_cta_title: "Ready for Your Next Lash Era?",
    final_cta_subtitle: "Book your JC Beauty appointment and leave with a look that feels effortless, polished, and uniquely yours.",
    final_cta_btn: "Book Now",

    // Aftercare Items
    care_1_title: "Keep Them Dry",
    care_1_desc: "Keep lashes completely dry for the first 24-48 hours. Avoid steam, saunas, and intense workouts to ensure the adhesive cures perfectly.",
    care_2_title: "Daily Brushing",
    care_2_desc: "Gently brush your eyelash extensions once a day with a clean spoolie to keep them properly aligned and fluffy.",
    care_3_title: "Avoid Oil Products",
    care_3_desc: "Do not use oil-based cleansers, creams, or cosmetics around your eyes. Oils break down the lash adhesive, causing premature loss.",
    care_4_title: "Do Not Rub or Pull",
    care_4_desc: "Never rub your eyes or pull at the extensions, as this can damage your natural lashes. Always have extensions professionally removed.",
    care_5_title: "Book On-time Refills",
    care_5_desc: "Lashes shed naturally. Book refill appointments every 2 to 3 weeks to keep your lash line looking dense, elegant, and full.",
    care_6_title: "Wash Your Lashes",
    care_6_desc: "Clean your lashes 2-3 times a week with a specialized lash shampoo to prevent buildup of sebum, makeup, and dead skin.",

    // How it works
    booking_title: "How It Works",
    step1_title: "Choose your service",
    step1_desc: "Select your preferred lash or brow service from our menu or directly on our Setmore page.",
    step2_title: "Pay deposit",
    step2_desc: "Pay a non-refundable deposit of €15 to secure your time slot in our booking schedule.",
    step3_title: "Receive confirmation",
    step3_desc: "You will immediately receive an email and SMS confirmation containing salon address details.",
    step4_title: "Enjoy the result",
    step4_desc: "Arrive on time, relax in our luxury chair, and wake up with a stunning, effortless gaze.",
    cta_box_title: "Book Your Exclusive Experience",
    cta_box_desc: "Schedule your session today. If you have any questions or need style recommendations, feel free to reach out.",
    cta_box_btn: "Go to Booking Page",

    // Footer
    footer_brand_desc: "JC Beauty is a premium lash & brow studio based in Mechelen, Belgium. We strive for absolute perfection, crafting bespoke sets that enhance and protect your natural lashes.",
    footer_links_title: "Navigation",
    footer_contact_title: "Contact & Location",
    footer_map_hint: "(Exact address in booking confirmation)",
    footer_creator: "Designed for pure luxury",

    // Gallery Filters
    filter_all: "All",
    filter_lashes: "Lashes",
    filter_brows: "Brows",
    filter_lift: "Lash Lift",
    filter_ba: "Before & After",

    // Services CTA
    book_service_btn: "Book treatment"
  }
};

// 2. Services Data
const servicesData = [
  // LASHES
  {
    id: "light_volume",
    category: "lashes",
    price: "€50",
    duration: { nl: "90 min.", fr: "90 min.", en: "90 min." },
    title: { nl: "Light Volume", fr: "Volume Léger", en: "Light Volume" },
    desc: {
      nl: "Wimperextensions voor een zachte, natuurlijk ogende mascara-look. Perfect voor dagelijkse elegantie.",
      fr: "Extensions de cils créant un effet mascara doux et naturel. Idéal au quotidien.",
      en: "Eyelash extensions creating a soft, natural mascara-like effect. Perfect for daily elegance."
    },
    bestFor: {
      nl: "Een subtiele versterking van je eigen wimpers.",
      fr: "Un embellissement subtil de vos propres cils.",
      en: "A subtle enhancement of your natural lash line."
    }
  },
  {
    id: "medium_volume",
    category: "lashes",
    price: "€55",
    duration: { nl: "105 min.", fr: "105 min.", en: "105 min." },
    title: { nl: "Medium Volume", fr: "Volume Moyen", en: "Medium Volume" },
    desc: {
      nl: "Geeft extra diepte, dichtheid en een prachtig gedefinieerde oogopslag zonder zwaar aan te voelen.",
      fr: "Offre plus de profondeur, de densité et une définition impeccable du regard sans alourdir.",
      en: "Provides extra depth, density, and a beautifully defined gaze without feeling heavy."
    },
    bestFor: {
      nl: "Cliënten die houden van zichtbare volheid en definitie.",
      fr: "Les clientes qui aiment une densité et une définition visibles.",
      en: "Clients who love noticeable fullness and definition."
    }
  },
  {
    id: "mega_volume",
    category: "lashes",
    price: "€65",
    duration: { nl: "120 min.", fr: "120 min.", en: "120 min." },
    title: { nl: "Mega Volume", fr: "Méga Volume", en: "Mega Volume" },
    desc: {
      nl: "Onze meest glamoureuze, volle set met dichte waaiers voor een adembenemend drama-effect.",
      fr: "Notre pose la plus dense et glamour pour un regard sophistiqué et spectaculaire.",
      en: "Our most glamorous, full set with dense fans for a breathtaking, dramatic effect."
    },
    bestFor: {
      nl: "Een opvallende, luxueuze en intense oogopslag.",
      fr: "Un regard intense, luxueux et très affirmé.",
      en: "A striking, luxurious, and intense look."
    }
  },
  {
    id: "refill_light",
    category: "lashes",
    price: "€45",
    duration: { nl: "60 min.", fr: "60 min.", en: "60 min." },
    title: { nl: "Refill Light Volume", fr: "Remplissage Volume Léger", en: "Refill Light Volume" },
    desc: {
      nl: "Bijvullen van je Light Volume set binnen 2-3 weken om de set mooi vol te houden.",
      fr: "Entretien et remplissage de votre pose Volume Léger (sous 2-3 semaines).",
      en: "Refilling your Light Volume set within 2-3 weeks to maintain its freshness."
    },
    bestFor: {
      nl: "Het behouden van je natuurlijke mascara look.",
      fr: "Garder votre effet mascara impeccable.",
      en: "Maintaining your natural mascara look."
    }
  },
  {
    id: "refill_medium",
    category: "lashes",
    price: "€50",
    duration: { nl: "75 min.", fr: "75 min.", en: "75 min." },
    title: { nl: "Refill Medium Volume", fr: "Remplissage Volume Moyen", en: "Refill Medium Volume" },
    desc: {
      nl: "Bijvullen van je Medium Volume set binnen 2-3 weken voor een continu volle look.",
      fr: "Remplissage et restructuration de votre pose Volume Moyen (sous 2-3 semaines).",
      en: "Refilling your Medium Volume set within 2-3 weeks for continuous definition."
    },
    bestFor: {
      nl: "Het onderhouden van je perfect gedefinieerde set.",
      fr: "Entretenir votre définition et volume parfaits.",
      en: "Maintaining your perfectly defined volume set."
    }
  },
  {
    id: "refill_mega",
    category: "lashes",
    price: "€60",
    duration: { nl: "90 min.", fr: "90 min.", en: "90 min." },
    title: { nl: "Refill Mega Volume", fr: "Remplissage Méga Volume", en: "Refill Mega Volume" },
    desc: {
      nl: "Bijvullen van je Mega Volume set binnen 2-3 weken om de maximale dichtheid te bewaren.",
      fr: "Remplissage ultra-précis pour votre pose Méga Volume (sous 2-3 semaines).",
      en: "Refilling your Mega Volume set within 2-3 weeks to preserve maximum density."
    },
    bestFor: {
      nl: "Het behouden van je volle, glamoureuze wimperlijn.",
      fr: "Garder votre ligne de cils intense et fournie.",
      en: "Preserving your full, glamorous lash line."
    }
  },
  {
    id: "lash_lift",
    category: "lashes",
    price: "€45",
    duration: { nl: "60 min.", fr: "60 min.", en: "60 min." },
    title: { nl: "Lash Lift", fr: "Rehaussement de Cils", en: "Lash Lift" },
    desc: {
      nl: "Een chemische lift van je natuurlijke wimpers vanaf de wortel. Creëert een open, wakkere blik.",
      fr: "Recourbement de vos propres cils naturels depuis la racine. Ouvre intensément le regard.",
      en: "A chemical lift of your natural eyelashes from the root. Creates an open, awake look."
    },
    bestFor: {
      nl: "Een onderhoudsvriendelijke routine zonder extensions.",
      fr: "Une routine simple et sans entretien d'extensions.",
      en: "A low-maintenance routine without wearing extensions."
    }
  },
  {
    id: "lash_lift_colour",
    category: "lashes",
    price: "€55",
    duration: { nl: "75 min.", fr: "75 min.", en: "75 min." },
    title: { nl: "Lash Lift & Colour", fr: "Rehaussement & Teinture", en: "Lash Lift & Colour" },
    desc: {
      nl: "Lash lift gecombineerd met wimperverf voor extra definitie en een diepzwarte, sprekende kleur.",
      fr: "Rehaussement associé à une teinture des cils pour une couleur intense et une définition maximale.",
      en: "Lash lift combined with lash tinting for extra definition and a deep black, noticeable color."
    },
    bestFor: {
      nl: "Cliënten met lichte wimpers die geen mascara willen dragen.",
      fr: "Celles qui ont les cils clairs et veulent se passer de mascara.",
      en: "Clients with light lashes who want to skip mascara entirely."
    }
  },
  
  // BROWS
  {
    id: "brow_lift",
    category: "brows",
    price: "€45",
    duration: { nl: "45 min.", fr: "45 min.", en: "45 min." },
    title: { nl: "Brow Lift (Lamination)", fr: "Brow Lift (Lamination)", en: "Brow Lift (Lamination)" },
    desc: {
      nl: "Wenkbrauwharen worden in een opwaartse, volle richting gestileerd. Temt stugge haartjes.",
      fr: "Restructuration et lamination des sourcils vers le haut. Discipline les poils rebelles.",
      en: "Styling eyebrow hairs in an upward, fluffy direction. Tames unruly brow hairs."
    },
    bestFor: {
      nl: "Vollere, natuurlijk uitziende wenkbrauwen met vorm.",
      fr: "Des sourcils plus denses, structurés et naturels.",
      en: "Fuller, natural-looking brows with defined structure."
    }
  },
  {
    id: "brow_lift_henna",
    category: "brows",
    price: "€50",
    duration: { nl: "60 min.", fr: "60 min.", en: "60 min." },
    title: { nl: "Brow Lift & Henna Brow", fr: "Brow Lift & Henné Sourcils", en: "Brow Lift & Henna Brow" },
    desc: {
      nl: "Brow lift gecombineerd met henna-kleuring op zowel de wenkbrauwharen als de onderliggende huid.",
      fr: "Brow lift associé à une teinture au henné qui colore les poils et la peau sous-jacente.",
      en: "Brow lift combined with henna tinting on both eyebrow hairs and the underlying skin."
    },
    bestFor: {
      nl: "Een strakke, getekende vorm die gaatjes opvult.",
      fr: "Un design net et dessiné qui comble les manques.",
      en: "A crisp, filled-in shape that covers sparse areas."
    }
  },

  // PACKS
  {
    id: "pack_1",
    category: "packs",
    price: "€80",
    duration: { nl: "120 min.", fr: "120 min.", en: "120 min." },
    title: {
      nl: "Brow Lift + Henna Brow + Lash Lift",
      fr: "Brow Lift + Henné Sourcils + Rehaussement",
      en: "Brow Lift + Henna Brow + Lash Lift"
    },
    desc: {
      nl: "Complete make-over van zowel je wimpers als wenkbrauwen voor een oogverblindende look.",
      fr: "Mise en beauté totale des cils et des sourcils pour un regard sublimé à 360°.",
      en: "Complete makeover of both your eyelashes and eyebrows for a stunning overall look."
    },
    bestFor: {
      nl: "Een complete, perfect afgestemde oogcontourstyling.",
      fr: "Une restructuration complète et harmonieuse du regard.",
      en: "A complete, perfectly matched eye-area styling."
    }
  },
  {
    id: "pack_2",
    category: "packs",
    price: "€90",
    duration: { nl: "135 min.", fr: "135 min.", en: "135 min." },
    title: {
      nl: "Brow Lift + Henna + Lash Lift + Colour",
      fr: "Brow Lift + Henné + Rehaussement + Teinture",
      en: "Brow Lift + Henna + Lash Lift + Colour"
    },
    desc: {
      nl: "Het ultieme combipakket inclusief het verven van de wimpers voor maximale intensiteit.",
      fr: "Le forfait ultime comprenant la teinture des cils pour une intensité maximale.",
      en: "The ultimate combo package including lash tinting for maximum depth and intensity."
    },
    bestFor: {
      nl: "Een totale transformatie zonder dagelijkse make-up.",
      fr: "Une transformation totale libérant du maquillage quotidien.",
      en: "A total transformation freeing you from daily makeup."
    }
  },
  {
    id: "pack_3",
    category: "packs",
    price: "€75",
    duration: { nl: "105 min.", fr: "105 min.", en: "105 min." },
    title: {
      nl: "Brow Lift + Lash Lift",
      fr: "Brow Lift + Rehaussement de Cils",
      en: "Brow Lift + Lash Lift"
    },
    desc: {
      nl: "De ideale natuurlijke combinatie: lift je wimpers én wenkbrauwen zonder kleuringen.",
      fr: "L'association naturelle idéale: rehausse les cils et discipline les sourcils sans coloration.",
      en: "The ideal natural combination: lifts your lashes and styles your brows without tinting."
    },
    bestFor: {
      nl: "Een frisse, natuurlijke look.",
      fr: "Un effet frais, naturel et structuré.",
      en: "A fresh, natural, and styled look."
    }
  },
  {
    id: "pack_4",
    category: "packs",
    price: "€95",
    duration: { nl: "135 min.", fr: "135 min.", en: "135 min." },
    title: {
      nl: "Henna Brow + Light Volume",
      fr: "Henné Sourcils + Volume Léger",
      en: "Henna Brow + Light Volume"
    },
    desc: {
      nl: "Mooie, strakke henna wenkbrauwen gecombineerd met een frisse, lichte set wimperextensions.",
      fr: "Des sourcils structurés au henné associés à une pose de cils Volume Léger.",
      en: "Crisp henna-styled eyebrows combined with a fresh, light set of eyelash extensions."
    },
    bestFor: {
      nl: "Een harmonieuze mascara-look met perfecte wenkbrauwen.",
      fr: "Un effet maquillé naturel pour les cils et sourcils.",
      en: "A harmonious mascara-effect with perfect eyebrows."
    }
  },
  {
    id: "pack_5",
    category: "packs",
    price: "€105",
    duration: { nl: "150 min.", fr: "150 min.", en: "150 min." },
    title: {
      nl: "Henna Brow + Medium Volume",
      fr: "Henné Sourcils + Volume Moyen",
      en: "Henna Brow + Medium Volume"
    },
    desc: {
      nl: "Prachtig gedefinieerd wimpervolume gecombineerd met perfect gevormde henna wenkbrauwen.",
      fr: "Un volume de cils moyen et élégant combiné à des sourcils nets au henné.",
      en: "Elegantly defined medium lash volume paired with perfectly shaped henna brows."
    },
    bestFor: {
      nl: "Een prachtig uitgebalanceerde glam-look.",
      fr: "Un look glamour parfaitement dessiné.",
      en: "A beautifully balanced glam appearance."
    }
  },
  {
    id: "pack_6",
    category: "packs",
    price: "€115",
    duration: { nl: "165 min.", fr: "165 min.", en: "165 min." },
    title: {
      nl: "Henna Brow + Mega Volume",
      fr: "Henné Sourcils + Méga Volume",
      en: "Henna Brow + Mega Volume"
    },
    desc: {
      nl: "Onze meest intense combinatie voor de ultieme Hollywood oogopslag.",
      fr: "Notre forfait le plus intense pour un regard digne d'Hollywood.",
      en: "Our most intense combination for the ultimate Hollywood gaze."
    },
    bestFor: {
      nl: "Cliënten die gaan voor maximale glamour en dichtheid.",
      fr: "Les adeptes du glamour absolu et du volume maximal.",
      en: "Clients going for maximum drama, density, and glamour."
    }
  }
];

// 3. Gallery Data
const galleryData = [
  {
    id: 1,
    image: "assets/lash_lift.png",
    category: "lift",
    title: { nl: "Lash Lift & Tint", fr: "Rehaussement & Teinture", en: "Lash Lift & Tint" },
    desc: {
      nl: "Een prachtige natuurlijke krul die de eigen wimpers optisch verlengt, gecombineerd met diepzwarte verf.",
      fr: "Une courbure naturelle qui allonge les cils, combinée à une teinture noire intense.",
      en: "A beautiful natural curl that optically lengthens own lashes, combined with deep black tint."
    }
  },
  {
    id: 2,
    image: "assets/brow_lift.png",
    category: "brows",
    title: { nl: "Premium Brow Lamination", fr: "Lamination Sourcils Premium", en: "Premium Brow Lamination" },
    desc: {
      nl: "Nauwkeurige laminatie voor een vollere, gestroomlijnde vorm die stugge wenkbrauwharen temt.",
      fr: "Lamination précise pour un effet structuré et dense disciplinant les poils rebelles.",
      en: "Meticulous lamination for a fuller, streamlined shape that tames stubborn brow hairs."
    }
  },
  {
    id: 3,
    image: "assets/volume_lashes.png",
    category: "lashes",
    title: { nl: "Mega Volume Set", fr: "Pose Méga Volume", en: "Mega Volume Set" },
    desc: {
      nl: "Ultieme dichtheid en glamour met handgemaakte wimperwaaiers voor een intense oogopslag.",
      fr: "Densité ultime avec bouquets faits main pour un effet spectaculaire et sophistiqué.",
      en: "Ultimate density and glamour featuring handmade lash fans for a dramatic gaze."
    }
  },
  {
    id: 4,
    image: "assets/afro_lashes.png",
    category: "lashes",
    title: { nl: "Medium Volume Extensions", fr: "Extensions Volume Moyen", en: "Medium Volume Extensions" },
    desc: {
      nl: "Elegante en opvallende wimperextensions op maat, geplaatst op een prachtige donkere huidskleur.",
      fr: "Extensions de cils élégantes posées sur mesure sur une magnifique peau foncée.",
      en: "Elegant and noticeable custom lash extensions applied on beautiful dark skin."
    }
  },
  {
    id: 5,
    image: "assets/lash_lift.png",
    category: "before-after",
    title: { nl: "Voor & Na Lash Lift", fr: "Avant & Après Rehaussement", en: "Before & After Lash Lift" },
    desc: {
      nl: "Direct resultaat van een lash lift: wimpers lijken twee keer zo lang zonder extensions.",
      fr: "Résultat instantané d'un lash lift: les cils semblent deux fois plus longs sans extensions.",
      en: "Instant results of a lash lift: eyelashes appear twice as long without extensions."
    }
  },
  {
    id: 6,
    image: "assets/brow_lift.png",
    category: "before-after",
    title: { nl: "Voor & Na Henna Brows", fr: "Avant & Après Henné Sourcils", en: "Before & After Henna Brows" },
    desc: {
      nl: "Perfect gestileerde wenkbrauwlijnen met henna die tot 2 weken op de huid blijft zitten.",
      fr: "Tracé de sourcils net avec coloration au henné tenant jusqu'à 2 semaines sur la peau.",
      en: "Perfectly styled eyebrow shapes with henna stain lasting up to 2 weeks on the skin."
    }
  }
];

// 4. Lash Quiz Data & Recommendations
const quizData = {
  natural: {
    title: { nl: "Natural & Clean", fr: "Naturel & Pur", en: "Natural & Clean" },
    desc: {
      nl: "Jij houdt van een frisse, onderhoudsarme routine. Je wilt eruitzien alsof je wakker bent geworden met perfecte mascara, zonder gedoe.",
      fr: "Vous aimez une routine simple et fraîche. Vous voulez avoir l'air maquillée dès le réveil, sans effort.",
      en: "You love a fresh, low-maintenance routine. You want to look like you woke up with perfect mascara, without the effort."
    },
    recService: "lash_lift_colour", // refers to service ID
    img: "assets/lash_lift.png"
  },
  glam: {
    title: { nl: "Soft Glam", fr: "Soft Glam", en: "Soft Glam" },
    desc: {
      nl: "Je houdt van een elegante, verzorgde look voor elke dag. Iets meer volume dan je natuurlijke wimpers, met een zachte en pluizige afwerking.",
      fr: "Vous préférez une allure élégante et soignée pour tous les jours. Un peu plus de volume que vos cils naturels, avec un fini doux.",
      en: "You prefer an elegant, polished look for every day. Slightly more volume than your natural lashes, with a soft and fluffy finish."
    },
    recService: "light_volume",
    img: "assets/afro_lashes.png"
  },
  volume: {
    title: { nl: "Full Volume", fr: "Volume Intense", en: "Full Volume" },
    desc: {
      nl: "Jij gaat voor definitie en diepte. Je ogen mogen spreken en opvallen. Perfect voor een sprekende blik en liefhebbers van volle make-up.",
      fr: "Vous recherchez de la définition et de la profondeur. Vos yeux doivent captiver. Idéal pour un regard prononcé.",
      en: "You go for definition and depth. Your eyes should pop. Perfect for a striking gaze and makeup lovers."
    },
    recService: "medium_volume",
    img: "assets/volume_lashes.png"
  },
  mega: {
    title: { nl: "Mega Glam", fr: "Méga Glam", en: "Mega Glam" },
    desc: {
      nl: "Maximale intensiteit en drama. Jij houdt van een Hollywood-opslag met maximale dichtheid en een donkere, volle wimperlijn.",
      fr: "Intensité maximale. Vous adorez les regards hollywoodiens avec une densité maximale et une ligne de cils très fournie.",
      en: "Maximum intensity and drama. You love a Hollywood look with maximum density and a dark, full lash line."
    },
    recService: "mega_volume",
    img: "assets/hero_bg.png"
  },
  lift: {
    title: { nl: "Lash Lift Only", fr: "Rehaussement Seul", en: "Lash Lift Only" },
    desc: {
      nl: "Je wilt absoluut geen extensions, maar wel je eigen natuurlijke wimpers maximaal omhoog krullen voor een wakkere, sprekende blik.",
      fr: "Vous ne souhaitez pas d'extensions, mais vous voulez recourber vos cils naturels au maximum pour ouvrir votre regard.",
      en: "You don't want extensions, but you want to lift and curl your own natural lashes to the maximum for a refreshed gaze."
    },
    recService: "lash_lift",
    img: "assets/lash_lift.png"
  }
};

// 5. FAQ Data
const faqData = [
  {
    q: {
      nl: "Hoe lang blijven wimperextensions zitten?",
      fr: "Combien de temps durent les extensions de cils ?",
      en: "How long do eyelash extensions last?"
    },
    a: {
      nl: "Wimperextensions kunnen tot 6 weken blijven zitten, afhankelijk van je natuurlijke wimpergroeicyclus en je nazorg. Om de wimperlijn vol en elegant te houden, raden we aan om elke 2 tot 3 weken een refill-afspraak te boeken.",
      fr: "Les extensions de cils peuvent durer jusqu'à 6 semaines, selon le cycle naturel de vos cils et l'entretien. Pour garder une frange de cils fournie, nous recommandons un remplissage toutes les 2 à 3 semaines.",
      en: "Eyelash extensions can last up to 6 weeks, depending on your natural lash growth cycle and aftercare. To keep the lash line full and elegant, we recommend booking a refill appointment every 2 to 3 weeks."
    }
  },
  {
    q: {
      nl: "Wanneer moet ik een refill (bijvulling) boeken?",
      fr: "Quand dois-je réserver un remplissage ?",
      en: "When should I book a refill?"
    },
    a: {
      nl: "We raden aan om een refill te boeken tussen de 2 en 3 weken na je behandeling. Er moet nog minstens 40% van de wimperextensions aanwezig zijn voor een bijvulling. Na 4 weken wordt een nieuwe set berekend.",
      fr: "Nous conseillons de réserver un remplissage sous 2 à 3 semaines. Il doit rester au moins 40% des extensions de cils pour effectuer le soin. Au-delà de 4 semaines, une pose complète sera facturée.",
      en: "We recommend booking a refill between 2 and 3 weeks after your treatment. You must have at least 40% of the extensions remaining to qualify for a refill. Beyond 4 weeks, a full set is charged."
    }
  },
  {
    q: {
      nl: "Wat is het verschil tussen Light, Medium en Mega Volume?",
      fr: "Quelle est la différence entre le Volume Léger, Moyen et Méga ?",
      en: "What is the difference between Light, Medium, and Mega Volume?"
    },
    a: {
      nl: "Het verschil zit in de dikte en het aantal wimperhaartjes per natuurlijke wimper. Light Volume creëert een subtiele mascara look (2-3 wimpers per waaier). Medium Volume biedt meer diepte en dichtheid (4-6 wimpers per waaier). Mega Volume geeft een extreem volle en glamoureuze look (7+ wimpers per waaier).",
      fr: "La différence réside dans l'épaisseur et le nombre d'extensions appliquées par cil naturel. Le Volume Léger crée un effet mascara subtil (2-3 cils par bouquet). Le Volume Moyen offre plus de densité (4-6 cils par bouquet). Le Méga Volume offre un look ultra-fourni et glamour (7+ cils par bouquet).",
      en: "The difference lies in the thickness and number of lash extensions applied per natural lash. Light Volume creates a subtle mascara effect (2-3 lashes per fan). Medium Volume offers more depth and density (4-6 lashes per fan). Mega Volume gives an extremely full and glamorous look (7+ lashes per fan)."
    }
  },
  {
    q: {
      nl: "Is een lash lift beter voor mij dan wimperextensions?",
      fr: "Le rehaussement de cils est-il préférable aux extensions ?",
      en: "Is a lash lift better for me than eyelash extensions?"
    },
    a: {
      nl: "Als je de voorkeur geeft aan een onderhoudsarme routine en je eigen wimpers wilt accentueren, is een Lash Lift perfect. Het lift je natuurlijke wimpers tot 6 weken zonder dat je extensions hoeft te dragen. Wimperextensions zijn ideaal als je extra lengte, volume en een opvallendere look wenst.",
      fr: "Si vous préférez une routine simple et souhaitez sublimer vos propres cils, le Rehaussement (Lash Lift) est parfait. Il recourbe vos cils naturels jusqu'à 6 semaines. Les extensions de cils sont idéales si vous recherchez de la longueur, du volume et un résultat plus prononcé.",
      en: "If you prefer a low-maintenance routine and want to enhance your own lashes, a Lash Lift is perfect. It lifts your natural lashes for up to 6 weeks. Extensions are ideal if you desire extra length, volume, and a more pronounced look."
    }
  },
  {
    q: {
      nl: "Moet ik een voorschot betalen?",
      fr: "Dois-je payer un acompte ?",
      en: "Do I need to pay a deposit?"
    },
    a: {
      nl: "Ja. Om je afspraak te bevestigen, vragen we een niet-restitueerbaar voorschot van €15. Dit bedrag wordt in mindering gebracht op het totaalbedrag tijdens je afspraak. Je kunt je afspraak tot 48 uur van tevoren verplaatsen met behoud van je voorschot.",
      fr: "Oui. Pour confirmer votre rendez-vous, nous demandons un acompte non remboursable de 15 €. Ce montant est déduit du total le jour du rendez-vous. Vous pouvez déplacer votre séance jusqu'à 48 heures à l'avance sans perdre votre acompte.",
      en: "Yes. To secure your appointment, we require a non-refundable deposit of €15. This amount is deducted from the total price of your treatment. You can reschedule your appointment up to 48 hours in advance without losing your deposit."
    }
  },
  {
    q: {
      nl: "Kan ik make-up dragen na de behandeling?",
      fr: "Puis-je me maquiller après le soin ?",
      en: "Can I wear makeup after treatment?"
    },
    a: {
      nl: "We raden het gebruik van mascara of eyeliner op wimperextensions sterk af, vooral producten op oliebasis. Voor een Lash Lift of Brow Lift raden we aan om de eerste 24 uur na de behandeling helemaal geen oogmake-up te dragen.",
      fr: "Nous déconseillons fortement le mascara ou l'eyeliner sur vos extensions, en particulier les produits huileux. Pour un Rehaussement ou Brow Lift, il est conseillé de ne porter aucun maquillage des yeux durant les premières 24 heures.",
      en: "We highly discourage wearing mascara or eyeliner on extensions, especially oil-based products. For a Lash Lift or Brow Lift, it is recommended to wear no eye makeup at all for the first 24 hours."
    }
  },
  {
    q: {
      nl: "Hoe bereid ik me voor op mijn afspraak?",
      fr: "Comment préparer mon rendez-vous ?",
      en: "How do I prepare for my appointment?"
    },
    a: {
      nl: "Kom alsjeblieft naar je afspraak met een volledig schoon gezicht, vrij van oogmake-up, mascara en crèmes. Draag geen lenzen tijdens de behandeling (neem eventueel je brillendoosje mee). Vermijd cafeïne vlak voor de afspraak, zodat je ogen ontspannen blijven.",
      fr: "Veuillez vous présenter au rendez-vous avec le visage propre, sans maquillage, mascara ou crème. Retirez vos lentilles de contact. Évitez le café juste avant la séance pour garder les yeux détendus.",
      en: "Please arrive at your appointment with a clean face, completely free of eye makeup, mascara, and creams. Do not wear contact lenses during the treatment. Avoid caffeine just before your session to keep your eyes completely relaxed."
    }
  },
  {
    q: {
      nl: "Waar is de salon gevestigd?",
      fr: "Où se situe le salon ?",
      en: "Where are you located?"
    },
    a: {
      nl: "JC Beauty is gevestigd in het centrum van Mechelen, België. Het exacte adres van de salon en parkeerinstructies worden automatisch met je gedeeld in je afspraakbevestiging via e-mail en sms.",
      fr: "Le salon JC Beauty est situé dans le centre de Malines (Mechelen), en Belgique. L'adresse exacte et les instructions de stationnement vous seront automatiquement envoyées dans votre e-mail de confirmation.",
      en: "JC Beauty is located in the center of Mechelen, Belgium. The exact salon address and parking details are automatically sent to you in your email and SMS booking confirmation."
    }
  }
];

// 6. Application State
let currentLanguage = localStorage.getItem("jc_beauty_lang") || "nl";
let activePage = "home";
let currentReviewIndex = 0;
let currentQuizStyle = "natural";
let activeServicesCategory = "lashes";
let activeGalleryFilter = "all";

// DOM Elements
const elements = {
  langToggleBtn: document.getElementById("lang-toggle-btn"),
  currentLangText: document.getElementById("current-lang"),
  langDropdownMenu: document.getElementById("lang-dropdown-menu"),
  langSelectBtns: document.querySelectorAll(".lang-select-btn"),
  
  navLinks: document.querySelectorAll(".nav-link"),
  navTriggerLinks: document.querySelectorAll(".nav-link-trigger"),
  logoLink: document.getElementById("logo-link"),
  mobileMenuToggle: document.getElementById("mobile-menu-toggle"),
  mainNav: document.getElementById("main-nav"),
  
  quizSelectCards: document.querySelectorAll(".style-select-card"),
  quizResultBox: document.getElementById("quiz-result-box"),
  
  servicesTabBtns: document.querySelectorAll(".tab-btn"),
  servicesCardsContainer: document.getElementById("services-cards-container"),
  
  galleryFilterBtns: document.querySelectorAll(".filter-btn"),
  galleryContainer: document.getElementById("gallery-container"),
  lightbox: document.getElementById("gallery-lightbox"),
  lightboxImg: document.getElementById("lightbox-img"),
  lightboxTitle: document.getElementById("lightbox-title"),
  lightboxDesc: document.getElementById("lightbox-desc"),
  lightboxCloseBtn: document.getElementById("lightbox-close-btn"),
  
  faqContainer: document.getElementById("faq-accordion-container"),
  
  reviewsCarousel: document.getElementById("reviews-carousel"),
  prevReviewBtn: document.getElementById("prev-review-btn"),
  nextReviewBtn: document.getElementById("next-review-btn")
};

// 7. Initialization
document.addEventListener("DOMContentLoaded", () => {
  initRouter();
  initQuiz();
  initServices();
  initGallery();
  initMobileMenu();
  setupScrollEffects();
  setLanguage(currentLanguage);
});

// 8. Translation Logic
function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("jc_beauty_lang", lang);
  elements.currentLangText.textContent = lang.toUpperCase();
  document.documentElement.setAttribute("lang", lang);
  
  // Highlight active lang btn
  elements.langSelectBtns.forEach(btn => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Update elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update meta tags for SEO
  document.querySelectorAll("[data-i18n-meta]").forEach(el => {
    const key = el.getAttribute("data-i18n-meta");
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute("content", translations[lang][key]);
    }
  });

  // Re-render components that rely on state language
  updateQuizResult();
  displayServices();
  displayGallery();
  renderFAQ();
}

// Language Dropdown toggles
elements.langToggleBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  elements.langDropdownMenu.classList.toggle("show");
});

elements.langSelectBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const lang = btn.getAttribute("data-lang");
    setLanguage(lang);
    elements.langDropdownMenu.classList.remove("show");
  });
});

document.addEventListener("click", () => {
  elements.langDropdownMenu.classList.remove("show");
});

// 9. Client-Side Router
function initRouter() {
  const handleHashChange = () => {
    const hash = window.location.hash.replace("#", "") || "home";
    switchPage(hash);
  };

  window.addEventListener("hashchange", handleHashChange);
  
  // Navigate on clicking main menu links
  elements.navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.getAttribute("href").replace("#", "");
      window.location.hash = page;
      elements.mainNav.classList.remove("active");
      elements.mobileMenuToggle.classList.remove("active");
    });
  });

  // Navigate on clicking other buttons/triggers
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".nav-link-trigger");
    if (trigger) {
      e.preventDefault();
      const page = trigger.getAttribute("href").replace("#", "");
      
      // Handle category banners selection pre-trigger
      const cat = trigger.getAttribute("data-category");
      if (cat) {
        activeServicesCategory = cat;
        elements.servicesTabBtns.forEach(btn => {
          if (btn.getAttribute("data-category") === cat) {
            btn.classList.add("active");
          } else {
            btn.classList.remove("active");
          }
        });
      }
      
      window.location.hash = page;
    }
  });

  // Handle logo click
  elements.logoLink.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.hash = "home";
  });

  // Run initial hash routing
  handleHashChange();
}

function switchPage(pageId) {
  // Check if target page exists, else default to home
  const targetPageElement = document.getElementById(`page-${pageId}`);
  if (!targetPageElement) {
    pageId = "home";
  }

  activePage = pageId;

  // Toggle active class on all pages
  document.querySelectorAll(".page-section").forEach(section => {
    if (section.id === `page-${pageId}`) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });

  // Update active links in nav
  elements.navLinks.forEach(link => {
    const page = link.getAttribute("data-page");
    if (page === pageId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Scroll to top smoothly
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// 10. Mobile Menu drawer
function initMobileMenu() {
  elements.mobileMenuToggle.addEventListener("click", (e) => {
    elements.mobileMenuToggle.classList.toggle("active");
    elements.mainNav.classList.toggle("active");
  });
}

// 11. Lash Style Finder Quiz
function initQuiz() {
  elements.quizSelectCards.forEach(card => {
    card.addEventListener("click", () => {
      elements.quizSelectCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      currentQuizStyle = card.getAttribute("data-style");
      updateQuizResult();
    });
  });
  updateQuizResult();
}

function updateQuizResult() {
  const result = quizData[currentQuizStyle];
  if (!result) return;
  
  // Find recommended service details
  const service = servicesData.find(s => s.id === result.recService);
  if (!service) return;

  const titleText = result.title[currentLanguage];
  const descText = result.desc[currentLanguage];
  const serviceName = service.title[currentLanguage];
  const priceText = service.price;
  const durationText = service.duration[currentLanguage];
  const bestForText = service.bestFor[currentLanguage];
  const durationLabel = translations[currentLanguage].quiz_duration;
  const priceLabel = translations[currentLanguage].quiz_price;
  const bestForLabel = translations[currentLanguage].quiz_best_for;
  const bookText = translations[currentLanguage].quiz_book_rec;
  const recLabel = translations[currentLanguage].quiz_rec_title;

  elements.quizResultBox.innerHTML = `
    <div class="result-text">
      <h3 style="font-family: var(--font-serif); font-size: 2.2rem; margin-bottom: 1rem; font-style: italic;">${titleText}</h3>
      <p style="font-size: 1rem; margin-bottom: 2rem; color: var(--accent-silver-dim);">${descText}</p>
      
      <div class="result-rec">
        <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent-silver-dim); display: block; margin-bottom: 0.3rem;">${recLabel}</span>
        <strong style="font-family: var(--font-serif); font-size: 1.4rem; font-weight: 500; color: #fff;">${serviceName}</strong>
      </div>

      <div style="display: flex; gap: 2rem; font-size: 0.8rem; color: var(--accent-silver-dim); margin-bottom: 2rem;">
        <span><strong>${durationLabel}:</strong> ${durationText}</span>
        <span><strong>${priceLabel}:</strong> ${priceText}</span>
      </div>
      
      <p style="font-style: italic; font-family: var(--font-serif); font-size: 1.05rem; margin-bottom: 2.2rem; color: var(--accent-silver-dim);">
        <strong>${bestForLabel}:</strong> ${bestForText}
      </p>

      <a href="https://beautybyjc.setmore.com/" target="_blank" class="btn btn-primary">${bookText}</a>
    </div>
    <div class="result-image" style="height: 320px; overflow: hidden; border: 1px solid rgba(255,255,255,0.06);">
      <img src="${result.img}" alt="${titleText}" style="width:100%; height:100%; object-fit:cover;">
    </div>
  `;
}

// 12. Services Grid Rendering
function initServices() {
  // Update categories tabs state
  elements.servicesTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      elements.servicesTabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeServicesCategory = btn.getAttribute("data-category");
      displayServices();
    });
  });
}

function displayServices() {
  const filtered = servicesData.filter(s => s.category === activeServicesCategory);
  const bookText = translations[currentLanguage].book_service_btn;
  
  elements.servicesCardsContainer.innerHTML = "";
  
  filtered.forEach(service => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.innerHTML = `
      <div>
        <div class="service-header">
          <h3 class="service-title">${service.title[currentLanguage]}</h3>
          <span class="service-price">${service.price}</span>
        </div>
        <div class="service-info">
          <p class="service-desc">${service.desc[currentLanguage]}</p>
          <div class="service-best">
            <strong>Best for:</strong> ${service.bestFor[currentLanguage]}
          </div>
        </div>
      </div>
      <div>
        <div class="service-meta" style="margin-bottom: 1.5rem;">
          <span><i class="fa-regular fa-clock"></i> ${service.duration[currentLanguage]}</span>
          <span><i class="fa-solid fa-sparkles"></i> Mechelen</span>
        </div>
        <a href="https://beautybyjc.setmore.com/" target="_blank" class="btn btn-secondary">${bookText}</a>
      </div>
    `;
    elements.servicesCardsContainer.appendChild(card);
  });
}

// 13. Gallery Masonry & Lightbox
function initGallery() {
  elements.galleryFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      elements.galleryFilterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeGalleryFilter = btn.getAttribute("data-filter");
      displayGallery();
    });
  });
  
  // Close Lightbox
  elements.lightboxCloseBtn.addEventListener("click", () => {
    elements.lightbox.classList.remove("show");
  });
  
  elements.lightbox.addEventListener("click", (e) => {
    if (e.target === elements.lightbox) {
      elements.lightbox.classList.remove("show");
    }
  });
}

function displayGallery() {
  const filtered = galleryData.filter(item => {
    if (activeGalleryFilter === "all") return true;
    return item.category === activeGalleryFilter || (activeGalleryFilter === "before-after" && item.category.includes("before-after"));
  });

  elements.galleryContainer.innerHTML = "";

  filtered.forEach(item => {
    const el = document.createElement("div");
    el.className = "gallery-item";
    el.innerHTML = `
      <img src="${item.image}" alt="${item.title[currentLanguage]}" loading="lazy">
      <div class="gallery-hover">
        <i class="fa-regular fa-eye"></i>
        <span>${item.title[currentLanguage]}</span>
      </div>
    `;
    el.addEventListener("click", () => openLightbox(item));
    elements.galleryContainer.appendChild(el);
  });
}

function openLightbox(item) {
  elements.lightboxImg.src = item.image;
  elements.lightboxTitle.textContent = item.title[currentLanguage];
  elements.lightboxDesc.textContent = item.desc[currentLanguage];
  elements.lightbox.classList.add("show");
}

// 14. Reviews Carousel
function initReviewsSlider() {
  // Reviews slider deactivated: utilizing honest coming-soon placeholder
}

// 15. FAQ Accordions
function renderFAQ() {
  elements.faqContainer.innerHTML = "";

  faqData.forEach((item, index) => {
    const el = document.createElement("div");
    el.className = "faq-item";
    
    const questionText = item.q[currentLanguage];
    const answerText = item.a[currentLanguage];

    el.innerHTML = `
      <button class="faq-question">
        <span>${questionText}</span>
        <i class="fa-solid fa-plus faq-icon"></i>
      </button>
      <div class="faq-answer">
        <p>${answerText}</p>
      </div>
    `;

    const button = el.querySelector(".faq-question");
    const answerPanel = el.querySelector(".faq-answer");

    button.addEventListener("click", () => {
      const isActive = el.classList.contains("active");
      
      // Close other FAQs
      document.querySelectorAll(".faq-item").forEach(item => {
        item.classList.remove("active");
        item.querySelector(".faq-answer").style.maxHeight = null;
      });

      if (!isActive) {
        el.classList.add("active");
        answerPanel.style.maxHeight = answerPanel.scrollHeight + "px";
      }
    });

    elements.faqContainer.appendChild(el);
  });
}

// 16. Scrolling Effects (Header background color change)
function setupScrollEffects() {
  const header = document.querySelector("header");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

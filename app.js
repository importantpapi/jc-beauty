/* ==========================================================================
   CURLYILA - HAIRSTYLIST SPECIALIZING IN CURLY HAIR
   Interaction Engine & Multilingual System
   ========================================================================== */

// 1. Translation Dictionary
const translations = {
  nl: {
    // Navigation
    nav_home: "Home",
    nav_services: "Behandelingen",
    nav_gallery: "Resultaten",
    nav_aftercare: "Krulverzorging",
    nav_faq: "FAQ",
    book_now_btn: "Boek Nu",
    
    // SEO Meta
    meta_title: "Curlyila | Hairstylist Specializing in Curly Hair | Genk",
    
    // Hero Section
    hero_title: "Krullenspecialist & Hairstylist in Genk",
    hero_subtitle: "Ervaar op maat gemaakte droge krulsnitten, diepe hydratatie en ultieme veerkracht voor alle krultypes (2A tot 4C).",
    hero_cta_book: "Boek je krulsessie",
    hero_cta_services: "Bekijk behandelingen",
    badge_curl: "Krullenspecialist & Hairstylist",
    badge_technique: "Droog Knippen per Krul",
    badge_location: "Gevestigd in Genk",

    // Hero & Intro Section
    hero_title_welcome: "WELCOME TO",
    intro_tagline_cursive: "Embrace Your Natural Curls",
    intro_desc: "Bij Curlyila geloven we dat geen twee krullen hetzelfde zijn. Met onze gespecialiseerde droogkniptechnieken, diepe stoombehandelingen en gepersonaliseerd routine-advies laten we jouw natuurlijke textuur stralen zoals nooit tevoren.",
    intro_discover: "ONTDEK BEHANDELINGEN",
    am_title: "Waarom Kiezen Voor Krullenspecialist Curlyila?",
    am_benefit1_title: "Droog Knippen per Krul",
    am_benefit1_desc: "Geen natte knipbeurten die je krulpatroon vervormen. We knippen droog, zodat elke krul op de perfecte natuurlijke plek valt.",
    am_benefit2_title: "Diepe Hydratatie & Stoom",
    am_benefit2_desc: "Voedende, sulfaat- en siliconenvrije formules die droge krullen intens hydrateren en pluis definitief elimineren.",
    am_benefit3_title: "Krul Coaching & Advies",
    am_benefit3_desc: "Je leert precies welke technieken, producten en routine jouw krullen thuis moeiteloos gedefinieerd en veerkrachtig houden.",
    am_benefit4_title: "Alle Krultypes (2A tot 4C)",
    am_benefit4_desc: "Van zachte waves tot dichte afro coils: elke textuur krijgt een gespecialiseerde, op maat gemaakte aanpak.",

    // Studio Essentials
    essentials_title: "Onze Studio Krul Essentials",
    essentials_subtitle: "Houd je krullen salon-vers en pluisvrij met deze door Curlyila geselecteerde premium krulverzorgingsproducten.",
    product1_name: "Luxe Curl Defining Custard",
    product1_desc: "Lichte gel-custard die krullen definieert, langdurige veerkracht geeft en beschermt tegen hoge luchtvochtigheid.",
    product2_name: "Hydraterende Leave-In Milk",
    product2_desc: "Diep voedende melk die dorstige krullen ontwart, voedt en voorbereidt op styling zonder te verzwaren.",
    product3_name: "100% Zijden Bonnet & Scalp Brush",
    product3_desc: "Beschermt krullen tegen nachtelijke wrijving en stimuleert de hoofdhuid voor gezondere krulgroei.",

    // Quiz Section
    quiz_title: "Vind Jouw Krultype & Behandeling",
    quiz_style_wavy: "Wavy (2A-2C)",
    quiz_style_curly: "Classic Curly (3A-3B)",
    quiz_style_coily: "Tight Curls (3C-4A)",
    quiz_style_kinky: "Afro Coils (4B-4C)",
    quiz_style_repair: "Herstel & Transitie",
    quiz_rec_title: "Aanbevolen behandeling voor jou:",
    quiz_duration: "Duur",
    quiz_price: "Prijs",
    quiz_best_for: "Ideaal voor",
    quiz_book_rec: "Boek deze behandeling",

    // Services categories
    cat_cuts: "Krulsnitten",
    cat_treatments: "Verzorging & Detox",
    cat_styling: "Pakketten & Makeovers",

    // Trust Section
    trust_title: "Jouw Krullen in Deskundige Handen",
    trust_p1_title: "Gespecialiseerde Krultechnieken",
    trust_p1_desc: "Curlyila is getraind in geavanceerde droogknipmethodes voor krullend haar. We knippen met respect voor de natuurlijke veerkracht en het krimpingspercentage.",
    trust_p2_title: "100% Krulvriendelijke Formules",
    trust_p2_desc: "Geen agressieve sulfaten, minerale oliën of zware siliconen. Wij werken uitsluitend met hoogwaardige, hydraterende en voedende ingrediënten.",
    trust_p3_title: "Gecertificeerde Kwaliteit",
    trust_p3_desc: "Persoonlijke aandacht, rust en pure luxe in het hart van Genk. Elke behandeling is een ontspannende ervaring met direct zichtbaar resultaat.",

    // Reviews Section
    reviews_title: "Wat Klanten Zeggen",
    reviews_placeholder: "Recensies van klanten komen binnenkort online.",
    review_cta_text: "Ben je al bij Curlyila geknipt of behandeld?",
    review_cta_btn: "Laat een review achter",

    // Final CTA
    final_cta_title: "Klaar Voor Jouw Ultieme Krultransformatie?",
    final_cta_subtitle: "Boek je afspraak bij Curlyila en ontdek hoe mooi, gedefinieerd en veerkrachtig jouw natuurlijke krullen echt kunnen zijn.",
    final_cta_btn: "Boek Afspraak",

    // Aftercare Items
    care_1_title: "Hydratatie is Koning",
    care_1_desc: "Breng je leave-in conditioner en stylingproducten altijd aan op kletsnat haar. Vocht is de sleutel tot pluisvrije, elastische kruldefinitie.",
    care_2_title: "Satijnen Bescherming 's Nachts",
    care_2_desc: "Slaap op een 100% moerbeizijden kussensloop of draag een satijnen bonnet. Dit voorkomt schuring, knopen en vochtverlies tijdens het slapen.",
    care_3_title: "Microvezel Droogdeppen",
    care_3_desc: "Gebruik nooit een ruwe badstof handdoek. Dep zachtjes droog met een microvezel handdoek of katoenen t-shirt om je krulpatroon te bewaren.",
    care_4_title: "Vermijd Schadelijke Sulfaten",
    care_4_desc: "Kies altijd voor milde, sulfaatvrije cleansers en vermijd zware niet-wateroplosbare siliconen die build-up veroorzaken op je krullen.",
    care_5_title: "Diffuseren op Lage Hitte",
    care_5_desc: "Gebruik een bowl-diffuser op lage snelheid en gematigde warmte. Raak de krullen pas aan wanneer ze 100% droog zijn voor maximale definitie.",
    care_6_title: "Regelmatige Onderhoudsknip",
    care_6_desc: "Boek elke 3 tot 4 maanden een droge krul-refresh om gespleten punten te verwijderen en je model veerkrachtig en luchtig te houden.",

    // How it works
    booking_title: "Hoe Het Werkt",
    step1_title: "Kies je krulbehandeling",
    step1_desc: "Selecteer je favoriete krulsnit, treatment of makeover via ons overzicht of direct op de boekingspagina.",
    step2_title: "Betaal voorschot",
    step2_desc: "Voldoe een niet-restitueerbaar voorschot van €15 om je tijdslot definitief in de salonagenda te reserveren.",
    step3_title: "Ontvang bevestiging",
    step3_desc: "Je ontvangt direct een e-mail en sms met de afspraakdetails, route en voorbereidingsinstructies voor je haar.",
    step4_title: "Geniet van je krullen",
    step4_desc: "Kom met droog, ontward haar in zijn natuurlijke krulpatroon en verlaat de salon met volumineuze, glanzende krullen.",
    cta_box_title: "Boek Jouw Krulervaring bij Curlyila",
    cta_box_desc: "Plan vandaag nog je afspraak. Heb je vragen over je krultype of wil je advies over de juiste behandeling? Neem gerust contact op.",
    cta_box_btn: "Naar de Boekingspagina",

    // Footer
    footer_brand_desc: "Curlyila is een exclusieve krullenspecialist en hairstudio gevestigd in Genk, België. Wij zijn gespecialiseerd in droog knippen per krul, intensieve hydratatietherapieën en krultransformaties voor alle texturen (2A tot 4C).",
    footer_links_title: "Navigatie",
    footer_contact_title: "Contact & Locatie",
    footer_map_hint: "(Precieze locatie in bevestigingsmail)",
    footer_creator: "Ontworpen voor pure luxe krullen",

    // Press Bar & Transformations
    press_bar_title: "As Featured In & Loved By Media",
    trans_badge: "Real Salon Results",
    trans_tag: "Transformatie Uitgelicht",
    trans_title: "Van Pluis & Onrust naar Italiaanse Perfectie",
    trans_desc: "Met onze Signature Curly Cut en diepe stoomhydratatie transformeren we droge, ongedefinieerde krullen in veerkrachtige, glanzende ringlets zonder hittebeschadiging.",
    spec_client: "Klant Textuur",
    spec_service: "Behandeling",
    spec_duration: "Behandelduur",
    spec_result: "Resultaat",
    // 2026 Expansion Features
    stories_tag: "In de Stoel bij Ilaria",
    stories_title: "Echte Krulbelevingen",
    stories_subtitle: "Bekijk hoe doffe, droge krullen transformeren in levendige, pluisvrije meesterwerken.",
    vip_badge: "Meest Gekozen VIP Ervaring",
    vip_tag: "Voor Eerste Bezoekers",
    vip_title: "The Ultimate 1st-Time Curl Experience",
    vip_desc: "Het complete 120-minuten verwen- en transformatiepakket voor wie voor het eerst bij Curlyila komt. We herstellen je natuurlijke krulpatroon, elimineren opgebouwde pluis en leren je de geheimen van een moeiteloze thuisroutine.",
    vip_f1: "Volledige Krul- & Porositeitsdiagnose",
    vip_f2: "Signature Droge Krulsnit per Krul",
    vip_f3: "Scalp Detox & Botanisch Stoommasker",
    vip_f4: "Krul Klontering & Diffuser Sculpting",
    vip_f5: "1-op-1 Thuisroutine Coaching",
    vip_f6: "Persoonlijk Krulverzorgingsplan",
    vip_duration: "120 Minuten Pure Krulluxe",
    vip_book_btn: "Reserveer VIP Sessie",
    euregio_tag: "Euregio & Benelux Curl Destination",
    euregio_title: "Reis Je Vanuit Hasselt, Maastricht of Eindhoven?",
    euregio_desc: "Klanten reizen vanuit heel Vlaanderen, Nederlands-Limburg en Wallonië naar Genk voor de exclusieve Curlyila droogknipbehandeling.",

    // Comparison Section
    comp_title: "Waarom We Nooit Nat Knippen",
    comp_subtitle: "Het revolutionaire verschil tussen een reguliere kapper en een gecertificeerde Italiaanse krullenspecialist.",
    comp_bad_title: "Traditionele Natte Knip",
    comp_bad_1: "Trekt krullen nat en recht waardoor krimpingsverschillen worden genegeerd.",
    comp_bad_2: "Veroorzaakt 'trapjes' en ongelijke happen zodra het haar opdroogt.",
    comp_bad_3: "Verbreekt natuurlijke krulbundels waardoor extra pluis ontstaat.",
    comp_bad_4: "Standaard producten met zware siliconen en uitdrogende alcoholen.",
    comp_good_badge: "De Curlyila Methode",
    comp_good_title: "Curlyila Droge Krulsnit",
    comp_good_1: "Geknipt in droge, natuurlijke staat: wat je ziet is direct het echte resultaat.",
    comp_good_2: "Respecteert het unieke veerkracht- en krimppatroon van elke afzonderlijke krul.",
    comp_good_3: "Stimuleert perfecte krulklontering en een ronde, harmonieuze coupe.",
    comp_good_4: "100% Curly Girl goedgekeurd, verrijkt met botanische stoomhydratatie.",

    // Founder Story
    founder_subtitle: "Meet Your Stylist • Ilaria",
    founder_title: "Ciao, Ik ben Ilaria",
    founder_p1: "Geboren in Italië en gepassioneerd door de natuurlijke schoonheid van krullend en getextureerd haar. Jarenlang zag ik hoe traditionele salons krullen behandelden als steil haar — met natte knipbeurten, stijltangen en zware chemicaliën.",
    founder_p2: "In mijn salon in Genk combineer ik Italiaans vakmanschap met geavanceerde droogkniptechnieken en intensieve stoomverzorging. Mijn missie is simpel: jou laten zien hoe adembenemend, veerkrachtig en moeiteloos jouw eigen natuurlijke krullen kunnen zijn.",

    // Consultation Banner
    consult_title: "Twijfel je over je krultype of behandeling?",
    consult_desc: "Stuur een foto van je natuurlijke haar via WhatsApp of Instagram voor gratis persoonlijk advies van Curlyila.",
    consult_wa: "WhatsApp Advies",

    // Gallery Filters
    filter_all: "Alles",
    filter_cuts: "Krulsnitten",
    filter_treatments: "Hydratatie & Spa",
    filter_styling: "Definitie & Styling",
    filter_coils: "Afro & Coils",

    // Services CTA
    book_service_btn: "Boek behandeling"
  },
  fr: {
    // Navigation
    nav_home: "Accueil",
    nav_services: "Prestations",
    nav_gallery: "Résultats",
    nav_aftercare: "Soin des Boucles",
    nav_faq: "FAQ",
    book_now_btn: "Réserver",

    // SEO Meta
    meta_title: "Curlyila | Coiffeuse Spécialiste Cheveux Bouclés | Genk",

    // Hero Section
    hero_title: "Spécialiste Cheveux Bouclés & Texturés à Genk",
    hero_subtitle: "Découvrez des coupes sur cheveux secs boucle par boucle, des soins ultra-hydratants et un rebond incomparable pour tous types de boucles (2A à 4C).",
    hero_cta_book: "Réserver votre séance",
    hero_cta_services: "Voir les prestations",
    badge_curl: "Spécialiste Cheveux Bouclés",
    badge_technique: "Coupe sur Cheveux Secs",
    badge_location: "Situé à Genk",

    // Hero & Intro Section
    hero_title_welcome: "WELCOME TO",
    intro_tagline_cursive: "Sublimez Vos Boucles Naturelles",
    intro_desc: "Chez Curlyila, nous savons que chaque chevelure texturée est unique. Grâce à nos coupes précises sur cheveux secs, nos soins profonds à la vapeur et nos conseils personnalisés, vos boucles retrouvent brillance, définition et liberté.",
    intro_discover: "DÉCOUVRIR LES SOINS",
    am_title: "Pourquoi Choisir Curlyila pour Vos Boucles ?",
    am_benefit1_title: "Coupe Boucle par Boucle",
    am_benefit1_desc: "Fini les coupes mouillées qui déforment votre tombant naturel. Nous coupons à sec pour respecter l'élasticité exacte de chaque boucle.",
    am_benefit2_title: "Hydratation Profonde & Vapeur",
    am_benefit2_desc: "Formules pures sans sulfates ni silicones pour réhydrater en profondeur, sceller l'hydratation et éliminer les frisottis.",
    am_benefit3_title: "Coaching & Conseils Personnalisés",
    am_benefit3_desc: "Apprenez les bons gestes et la routine idéale pour entretenir vos boucles facilement à la maison au quotidien.",
    am_benefit4_title: "Toutes Textures (2A à 4C)",
    am_benefit4_desc: "Des ondulations souples aux boucles crépues très serrées, chaque motif de boucle bénéficie d'une expertise dédiée.",

    // Press Bar & Transformations
    press_bar_title: "Vu Dans La Presse & Recommandé",
    trans_badge: "Résultats Réels en Salon",
    trans_tag: "Transformation en Vedette",
    trans_title: "Des Frisottis à la Perfection Italienne",
    trans_desc: "Grâce à notre Coupe Signature sur cheveux secs et notre soin vapeur, nous transformons les boucles sèches en spirales rebondies et ultra-brillantes.",
    spec_client: "Type de Boucle",
    spec_service: "Prestation",
    spec_duration: "Durée",
    spec_result: "Résultat",
    // 2026 Expansion Features
    stories_tag: "Dans le Fauteuil d'Ilaria",
    stories_title: "Vraies Expériences Bouclées",
    stories_subtitle: "Découvrez la transformation de boucles ternes en spirales rebondies et sans frisottis.",
    vip_badge: "Expérience VIP N°1",
    vip_tag: "Première Visite",
    vip_title: "The Ultimate 1st-Time Curl Experience",
    vip_desc: "Le forfait transformation complet de 120 minutes pour votre première visite. Retrouvez votre motif naturel et apprenez tous les secrets pour entretenir vos boucles chez vous.",
    vip_f1: "Diagnostic complet texture & porosité",
    vip_f2: "Coupe Signature sur cheveux secs",
    vip_f3: "Détox cuir chevelu & bain de vapeur",
    vip_f4: "Définition grappes & séchage diffuseur",
    vip_f5: "Coaching routine personnalisé 1-à-1",
    vip_f6: "Fiche d'entretien sur-mesure",
    vip_duration: "120 Minutes de Soin Privilège",
    vip_book_btn: "Réserver la Séance VIP",
    euregio_tag: "Destination Boucles Euregio & Benelux",
    euregio_title: "Vous venez de Hasselt, Maastricht ou Liège ?",
    euregio_desc: "Nos clientes se déplacent de toute la Belgique, des Pays-Bas et de la région frontalière jusqu'à Genk pour l'expertise Curlyila.",

    // Comparison Section
    comp_title: "Pourquoi Nous Ne Coupons Jamais Mouillé",
    comp_subtitle: "La différence majeure entre un salon classique et une experte certifiée des cheveux bouclés.",
    comp_bad_title: "Coupe Classique sur Cheveux Mouillés",
    comp_bad_1: "Tire et étire les boucles en ignorant le taux de rétrécissement naturel.",
    comp_bad_2: "Provoque des dégradés inégaux et l'effet 'pyramide' une fois sec.",
    comp_bad_3: "Casse les paquets de boucles naturels créant frisottis et perte de forme.",
    comp_bad_4: "Produits génériques avec silicones occlusifs et alcools asséchants.",
    comp_good_badge: "La Méthode Curlyila",
    comp_good_title: "Coupe Signature à Sec Curlyila",
    comp_good_1: "Réalisée sur cheveux secs: ce que vous voyez en salon est le résultat final.",
    comp_good_2: "Respecte le ressort et la géométrie unique de chaque boucle.",
    comp_good_3: "Favorise une belle définition en grappes et une coupe harmonieuse.",
    comp_good_4: "100% compatible Curly Girl avec soin bienfaisant à la vapeur.",

    // Founder Story
    founder_subtitle: "Votre Styliste • Ilaria",
    founder_title: "Ciao, Je suis Ilaria",
    founder_p1: "Originaire d'Italie, j'ai grandi passionnée par la beauté naturelle des chevelures texturées. Trop longtemps, les salons ont traité les boucles comme des cheveux lisses.",
    founder_p2: "Dans mon studio à Genk, j'associe le savoir-faire italien à des techniques avancées de coupe à sec. Ma mission: vous faire aimer vos boucles au naturel.",

    // Consultation Banner
    consult_title: "Un doute sur votre type de boucles ?",
    consult_desc: "Envoyez une photo de vos cheveux au naturel via WhatsApp ou Instagram pour un conseil personnalisé gratuit de Curlyila.",
    consult_wa: "Conseil WhatsApp",

    // Studio Essentials
    essentials_title: "Nos Essentiels Boucles en Studio",
    essentials_subtitle: "Prolongez l'effet salon et gardez des boucles rebondies grâce à nos produits professionnels sélectionnés par Curlyila.",
    product1_name: "Crème Gelée Définissante Luxe",
    product1_desc: "Gelée crème légère qui sculpte les boucles, offre une tenue souple et protège durablement de l'humidité.",
    product2_name: "Lait Hydratant Leave-In",
    product2_desc: "Soin sans rinçage riche en actifs botaniques qui nourrit, démêle sans casser et prépare au coiffage.",
    product3_name: "Bonnet 100% Soie & Brosse Stimulante",
    product3_desc: "Protège vos boucles des frottements nocturnes et stimule le cuir chevelu pour une pousse saine.",

    // Quiz Section
    quiz_title: "Trouvez Votre Diagnostic & Soin Idéal",
    quiz_style_wavy: "Ondulés (2A-2C)",
    quiz_style_curly: "Bouclés Classiques (3A-3B)",
    quiz_style_coily: "Boucles Serrées (3C-4A)",
    quiz_style_kinky: "Afro & Crépus (4B-4C)",
    quiz_style_repair: "Transition & Réparation",
    quiz_rec_title: "Soin recommandé pour vous:",
    quiz_duration: "Durée",
    quiz_price: "Tarif",
    quiz_best_for: "Idéal pour",
    quiz_book_rec: "Réserver ce soin",

    // Services categories
    cat_cuts: "Coupes Bouclées",
    cat_treatments: "Soins & Détox",
    cat_styling: "Forfaits & Transformations",

    // Trust Section
    trust_title: "Vos Boucles entre des Mains Expertes",
    trust_p1_title: "Techniques de Coupe Spécialisées",
    trust_p1_desc: "Curlyila maîtrise les méthodes de coupe à sec respectant le taux de rétrécissement (shrinkage) et la forme globale de vos boucles.",
    trust_p2_title: "Formules 100% Respectueuses",
    trust_p2_desc: "Sans sulfates agressifs, huiles minérales ni silicones lourds. Nous utilisons exclusivement des soins haut de gamme nourrissants.",
    trust_p3_title: "Qualité Certifiée & Expérience Privée",
    trust_p3_desc: "Un accueil sur-mesure et une atmosphère luxueuse au cœur de Genk pour un moment de détente et un résultat éclatant.",

    // Reviews Section
    reviews_title: "Avis Clients",
    reviews_placeholder: "Les avis clients seront bientôt disponibles en ligne.",
    review_cta_text: "Déjà cliente chez Curlyila ?",
    review_cta_btn: "Laissez-nous un avis",

    // Final CTA
    final_cta_title: "Prête Pour Votre Transformation Bouclée ?",
    final_cta_subtitle: "Réservez votre séance chez Curlyila et découvrez le plein potentiel de vos boucles naturelles.",
    final_cta_btn: "Réserver",

    // Aftercare Items
    care_1_title: "L'Hydratation est la Clé",
    care_1_desc: "Appliquez vos soins leave-in et produits coiffants sur cheveux encore trempés pour sceller l'eau au cœur de la fibre.",
    care_2_title: "Protection Satin / Soie la Nuit",
    care_2_desc: "Dormez sur une taie en soie ou portez un bonnet en satin pour éliminer les frottements et préserver la définition des boucles.",
    care_3_title: "Serviette en Microfibre",
    care_3_desc: "Bannissez les serviettes en éponge classiques. Privilégiez la microfibre ou la technique du plopping pour préserver le ressort.",
    care_4_title: "Évitez les Sulfates Asséchants",
    care_4_desc: "Utilisez un nettoyant doux sans sulfates et évitez les silicones non solubles qui étouffent et alourdissent les boucles.",
    care_5_title: "Séchage Diffuseur Basse Chaleur",
    care_5_desc: "Séchez au diffuseur avec une chaleur modérée et un flux d'air doux. Ne touchez pas aux boucles avant qu'elles soient sèches à 100%.",
    care_6_title: "Entretien Régulier",
    care_6_desc: "Programmez une coupe de rafraîchissement tous les 3 à 4 mois pour retirer les pointes fourchues et redonner du volume.",

    // How it works
    booking_title: "Comment ça Marche",
    step1_title: "Choisissez votre soin",
    step1_desc: "Sélectionnez votre coupe, soin profond ou forfait transformation depuis notre menu ou sur la page de réservation.",
    step2_title: "Payez l'acompte",
    step2_desc: "Réglez un acompte de 15 € non remboursable pour bloquer définitivement votre créneau horaire.",
    step3_title: "Confirmation & Préparation",
    step3_desc: "Vous recevrez immédiatement un email et SMS contenant l'adresse du studio et les conseils de préparation pour votre venue.",
    step4_title: "Admirez vos boucles",
    step4_desc: "Venez les cheveux secs et démêlés, détendez-vous dans notre fauteuil et repartez avec des boucles sublimes et rebondies.",
    cta_box_title: "Réservez Votre Expérience Bouclée chez Curlyila",
    cta_box_desc: "Planifiez votre séance dès aujourd'hui. Une question sur votre type de boucles ou un conseil ? Contactez-nous avec plaisir.",
    cta_box_btn: "Vers la page de réservation",

    // Footer
    footer_brand_desc: "Curlyila est un studio privé spécialisé dans la coupe et le soin des cheveux bouclés, frisés et crépus (2A à 4C) situé à Genk, Belgique.",
    footer_links_title: "Navigation",
    footer_contact_title: "Contact & Adresse",
    footer_map_hint: "(Adresse exacte dans l'e-mail de confirmation)",
    footer_creator: "Créé pour sublimer les boucles",

    // Gallery Filters
    filter_all: "Tout",
    filter_cuts: "Coupes Bouclées",
    filter_treatments: "Hydratation & Spa",
    filter_styling: "Définition & Styling",
    filter_coils: "Afro & Coils",

    // Services CTA
    book_service_btn: "Réserver ce soin"
  },
  en: {
    // Navigation
    nav_home: "Home",
    nav_services: "Services",
    nav_gallery: "Gallery",
    nav_aftercare: "Curl Care",
    nav_faq: "FAQ",
    book_now_btn: "Book Now",

    // SEO Meta
    meta_title: "Curlyila | Hairstylist Specializing in Curly Hair | Genk",

    // Hero Section
    hero_title: "Curly Hair Specialist & Hairstylist in Genk",
    hero_subtitle: "Experience precision dry curl cuts, deep steam hydration treatments, and ultimate bounce for all texture types (2A to 4C).",
    hero_cta_book: "Book your curl session",
    hero_cta_services: "View services",
    badge_curl: "Curly Hair Specialist & Stylist",
    badge_technique: "Dry Curl-by-Curl Cut",
    badge_location: "Located in Genk",

    // Hero & Intro Section
    hero_title_welcome: "WELCOME TO",
    intro_tagline_cursive: "Embrace Your Natural Curls",
    intro_desc: "At Curlyila, we believe no two curls are alike. Through specialized dry cutting, botanical steam treatments, and bespoke coaching, we help your natural texture thrive with unrivaled bounce and shine.",
    intro_discover: "DISCOVER SERVICES",
    am_title: "Why Choose Curly Hair Specialist Curlyila?",
    am_benefit1_title: "Dry Curl-by-Curl Cutting",
    am_benefit1_desc: "No wet cuts that distort your natural shape. We cut hair dry so each ringlet falls into its natural pattern and bounce.",
    am_benefit2_title: "Deep Steam Hydration",
    am_benefit2_desc: "Pure, sulphate-free and silicone-free formulations that deeply moisturize dry strands and eliminate frizz permanently.",
    am_benefit3_title: "Personalized Curl Coaching",
    am_benefit3_desc: "Learn the exact styling routine, product cocktail, and application techniques to keep your curls defined at home.",
    am_benefit4_title: "All Texture Types (2A to 4C)",
    am_benefit4_desc: "From soft beach waves to dense afro coils, every curl pattern receives dedicated, knowledgeable care.",

    // Press Bar & Transformations
    press_bar_title: "As Featured In & Loved By Media",
    trans_badge: "Real Salon Results",
    trans_tag: "Featured Transformation",
    trans_title: "From Frizz to Italian Curl Perfection",
    trans_desc: "With our Signature Dry Curl Cut and deep steam hydration, we transform dry, undefined curls into springy, radiant ringlets without heat damage.",
    spec_client: "Client Texture",
    spec_service: "Service",
    spec_duration: "Duration",
    spec_result: "Result",
    // 2026 Expansion Features
    stories_tag: "In Ilaria's Chair",
    stories_title: "Real Curl Stories",
    stories_subtitle: "Watch dull, dry hair transform into vibrant, frizz-free curl masterpieces.",
    vip_badge: "Most Popular VIP Experience",
    vip_tag: "For First-Time Guests",
    vip_title: "The Ultimate 1st-Time Curl Experience",
    vip_desc: "The complete 120-minute luxury transformation package for your first visit. We revive your natural curl pattern, eliminate buildup, and teach you the secrets of an effortless home routine.",
    vip_f1: "Full Curl & Porosity Diagnostic",
    vip_f2: "Signature Dry Curl-by-Curl Cut",
    vip_f3: "Scalp Detox & Botanical Steam Spa",
    vip_f4: "Curl Clumping & Diffuser Sculpting",
    vip_f5: "1-on-1 Routine Coaching",
    vip_f6: "Custom Curl Care Blueprint",
    vip_duration: "120 Minutes Pure Curl Luxury",
    vip_book_btn: "Book VIP Session",
    euregio_tag: "Euregio & Benelux Curl Destination",
    euregio_title: "Traveling from Hasselt, Maastricht, or Eindhoven?",
    euregio_desc: "Clients travel from across Flanders, Dutch Limburg, and Wallonia to Genk for Curlyila's signature dry curl artistry.",

    // Comparison Section
    comp_title: "Why We Never Cut Wet",
    comp_subtitle: "The revolutionary difference between a standard salon and a certified Italian curl specialist.",
    comp_bad_title: "Traditional Wet Cut",
    comp_bad_1: "Pulls curls wet and straight, ignoring natural shrinkage differences.",
    comp_bad_2: "Creates awkward layers and the dreaded 'triangle' shape once dry.",
    comp_bad_3: "Disrupts natural curl clumps, causing increased frizz.",
    comp_bad_4: "Standard salon products with heavy silicones and drying alcohols.",
    comp_good_badge: "The Curlyila Method",
    comp_good_title: "Curlyila Dry Signature Cut",
    comp_good_1: "Cut in its natural dry state: what you see is the true final shape.",
    comp_good_2: "Respects individual curl elasticity and shrinkage across your head.",
    comp_good_3: "Encourages juicy curl clumping and a balanced, round silhouette.",
    comp_good_4: "100% Curly Girl compliant enriched with botanical steam therapy.",

    // Founder Story
    founder_subtitle: "Meet Your Stylist • Ilaria",
    founder_title: "Ciao, I'm Ilaria",
    founder_p1: "Born in Italy and passionate about the natural beauty of textured hair. For too long, traditional salons treated curls like straight hair.",
    founder_p2: "In my Genk studio, I blend Italian artistry with advanced dry curl techniques and botanical moisture therapy. My mission: to empower you to love your natural crown.",

    // Consultation Banner
    consult_title: "Unsure about your curl pattern or treatment?",
    consult_desc: "Send a photo of your natural hair on WhatsApp or Instagram for free personal advice from Curlyila.",
    consult_wa: "WhatsApp Advice",

    // Studio Essentials
    essentials_title: "Our Studio Curl Essentials",
    essentials_subtitle: "Keep your curls fresh and frizz-free with these salon-grade products handpicked by Curlyila.",
    product1_name: "Luxury Curl Defining Custard",
    product1_desc: "Lightweight gel-custard that sculpts curls, provides touchable hold, and shields against humidity.",
    product2_name: "Hydrating Leave-In Milk",
    product2_desc: "Deeply nourishing botanical milk that detangles, hydrates, and primes curls for styling without weighing them down.",
    product3_name: "100% Silk Bonnet & Scalp Brush",
    product3_desc: "Protects curls against nightly friction and invigorates scalp circulation for healthy hair growth.",

    // Quiz Section
    quiz_title: "Find Your Curl Pattern & Ideal Treatment",
    quiz_style_wavy: "Wavy (2A-2C)",
    quiz_style_curly: "Classic Curly (3A-3B)",
    quiz_style_coily: "Tight Curls (3C-4A)",
    quiz_style_kinky: "Afro Coils (4B-4C)",
    quiz_style_repair: "Repair & Transition",
    quiz_rec_title: "Recommended treatment for you:",
    quiz_duration: "Duration",
    quiz_price: "Price",
    quiz_best_for: "Best for",
    quiz_book_rec: "Book this treatment",

    // Services categories
    cat_cuts: "Curl Cuts",
    cat_treatments: "Treatments & Detox",
    cat_styling: "Packages & Makeovers",

    // Trust Section
    trust_title: "Your Curls in Expert Hands",
    trust_p1_title: "Specialized Curl Techniques",
    trust_p1_desc: "Curlyila is specifically trained in dry curl sculpting techniques that respect your natural shrinkage and curl geometry.",
    trust_p2_title: "100% Clean Curl Formulations",
    trust_p2_desc: "Zero harsh sulphates, drying alcohols, or heavy silicones. We utilize only nutrient-dense botanical moisture.",
    trust_p3_title: "Certified Quality & Private Luxury",
    trust_p3_desc: "One-on-one attention in a calming, luxury salon setting in Genk for a restorative and transformative experience.",

    // Reviews Section
    reviews_title: "Client Reviews",
    reviews_placeholder: "Client reviews are coming soon.",
    review_cta_text: "Had your curls styled by Curlyila?",
    review_cta_btn: "Leave a review",

    // Final CTA
    final_cta_title: "Ready for Your Ultimate Curl Transformation?",
    final_cta_subtitle: "Book your appointment at Curlyila and unleash the full beauty, volume, and definition of your natural texture.",
    final_cta_btn: "Book Now",

    // Aftercare Items
    care_1_title: "Hydration is Key",
    care_1_desc: "Always apply your leave-in conditioner and stylers to soaking wet hair. Water is the secret to frizz-free curl clumping.",
    care_2_title: "Silk or Satin Night Protection",
    care_2_desc: "Sleep on a 100% Mulberry silk pillowcase or wear a satin bonnet to prevent friction, knots, and moisture loss.",
    care_3_title: "Microfiber Towel Only",
    care_3_desc: "Never use a standard terrycloth towel. Gently scrunch and plop with a microfiber towel or cotton t-shirt.",
    care_4_title: "Avoid Harsh Sulphates & Silicones",
    care_4_desc: "Use mild, sulphate-free cleansers and avoid non-water-soluble silicones that build up and suffocate curl patterns.",
    care_5_title: "Diffuse on Low Heat",
    care_5_desc: "Diffuse using a deep bowl diffuser on low speed and medium heat. Avoid touching curls until 100% dry to lock in definition.",
    care_6_title: "Regular Maintenance Trims",
    care_6_desc: "Book a dry curl trim every 3 to 4 months to prevent split ends, tangles, and maintain the perfect rounded shape.",

    // How it works
    booking_title: "How It Works",
    step1_title: "Choose your curl service",
    step1_desc: "Select your desired curl cut, treatment, or full makeover package from our menu or directly on Setmore.",
    step2_title: "Pay deposit",
    step2_desc: "Pay a non-refundable deposit of €15 to secure your exclusive slot in our salon schedule.",
    step3_title: "Receive confirmation",
    step3_desc: "You'll immediately receive an email and SMS with address details and instructions on how to arrive with your hair prepped.",
    step4_title: "Enjoy your curls",
    step4_desc: "Arrive with 100% dry, detangled curls in their natural state and leave with bouncy, defined, healthy curls.",
    cta_box_title: "Book Your Exclusive Curl Experience",
    cta_box_desc: "Schedule your session today. If you have questions about your curl pattern or need advice, please reach out.",
    cta_box_btn: "Go to Booking Page",

    // Footer
    footer_brand_desc: "Curlyila is a luxury curly hair studio located in Genk, Belgium. Specializing in dry curl-by-curl cutting, deep moisture therapy, and textured hair styling (2A to 4C).",
    footer_links_title: "Navigation",
    footer_contact_title: "Contact & Location",
    footer_map_hint: "(Exact address in booking confirmation)",
    footer_creator: "Designed for pure curl luxury",

    // Gallery Filters
    filter_all: "All",
    filter_cuts: "Curl Cuts",
    filter_treatments: "Hydration & Spa",
    filter_styling: "Definition & Styling",
    filter_coils: "Afro & Coils",

    // Services CTA
    book_service_btn: "Book service"
  }
};

// 2. Services Data for Curly Hair Specialist
const servicesData = [
  // CURL CUTS
  {
    id: "signature_curl_cut",
    category: "cuts",
    price: "€75",
    duration: { nl: "90 min.", fr: "90 min.", en: "90 min." },
    title: {
      nl: "Signature Curly Cut & Styling",
      fr: "Coupe Signature Boucles & Coiffage",
      en: "Signature Curly Cut & Styling"
    },
    desc: {
      nl: "Gespecialiseerde droogknipbeurt krul voor krul, gevolgd door een luxe wasbeurt, hydraterende treatment, kruldefinitie en diffuser-styling.",
      fr: "Coupe sur-mesure sur cheveux secs boucle par boucle, suivie d'un shampoing doux, soin hydratant, définition et séchage au diffuseur.",
      en: "Custom dry curl-by-curl precision cut, followed by a gentle cleanse, hydrating treatment, curl definition, and diffuser styling."
    },
    bestFor: {
      nl: "Iedereen die een prachtige vorm, meer volume en levendige kruldefinitie wil.",
      fr: "Celles qui recherchent une forme harmonieuse, du volume et des boucles rebondies.",
      en: "Anyone wanting a flattering shape, enhanced volume, and defined curls."
    }
  },
  {
    id: "curly_cut_refresh",
    category: "cuts",
    price: "€55",
    duration: { nl: "60 min.", fr: "60 min.", en: "60 min." },
    title: {
      nl: "Curly Cut Refresh (Onderhoud)",
      fr: "Entretien & Rafraîchissement Coupe",
      en: "Curly Cut Refresh (Maintenance)"
    },
    desc: {
      nl: "Onderhoudsknip voor terugkerende klanten (binnen 3-4 maanden). Verwijdert dode puntjes en herstelt de ideale salonvorm.",
      fr: "Coupe d'entretien pour clientes régulières (sous 3-4 mois). Élimine les pointes abîmées et redéfinit la coupe.",
      en: "Maintenance trim for returning clients (within 3-4 months). Removes split ends and restores the shape."
    },
    bestFor: {
      nl: "Bestaande klanten die hun krulsnit fris en veerkrachtig willen houden.",
      fr: "Conserver une coupe impeccable et des pointes saines entre deux transformations.",
      en: "Maintaining your signature curl shape and preventing split ends."
    }
  },
  {
    id: "wash_curl_style",
    category: "cuts",
    price: "€45",
    duration: { nl: "60 min.", fr: "60 min.", en: "60 min." },
    title: {
      nl: "Wash, Hydrate & Curl Definition",
      fr: "Lavage, Hydratation & Définition",
      en: "Wash, Hydrate & Curl Definition"
    },
    desc: {
      nl: "Zonder knippen: luxe reiniging, intens masker onder stoom, professionele stylingtechniek (raking/praying hands) en diffuseren.",
      fr: "Sans coupe: lavage doux, masque sous vapeur, technique de définition professionnelle et séchage au diffuseur.",
      en: "No cutting: gentle cleanse, deep steam mask, expert curl definition techniques, and diffuser drying."
    },
    bestFor: {
      nl: "Een speciale gelegenheid of wanneer je krullen een professionele boost nodig hebben.",
      fr: "Un événement spécial ou pour redonner vie et brillance à vos boucles.",
      en: "Special occasions or when your curls need a professional moisture recharge."
    }
  },
  {
    id: "kids_teen_curl",
    category: "cuts",
    price: "€45",
    duration: { nl: "45 min.", fr: "45 min.", en: "45 min." },
    title: {
      nl: "Kids & Teens Curly Cut (t/m 16j)",
      fr: "Coupe Boucles Enfants & Ados",
      en: "Kids & Teens Curly Cut (up to 16y)"
    },
    desc: {
      nl: "Zachte, geduldige droogknipbeurt afgestemd op jonge krullenbollen, inclusief eenvoudige tips voor ouders en tieners.",
      fr: "Coupe douce sur cheveux secs adaptée aux plus jeunes, accompagnée de conseils simples d'entretien.",
      en: "Gentle dry curl cut tailored for young curls, including easy daily care tips for parents and teens."
    },
    bestFor: {
      nl: "Kinderen en tieners die hun natuurlijke krullen met trots willen dragen.",
      fr: "Les enfants et adolescents souhaitant valoriser leurs boucles naturelles.",
      en: "Kids and teens learning to embrace and care for their natural texture."
    }
  },

  // TREATMENTS & DETOX
  {
    id: "deep_steam_moisture",
    category: "treatments",
    price: "€45",
    duration: { nl: "45 min.", fr: "45 min.", en: "45 min." },
    title: {
      nl: "Deep Moisture & Steam Therapy",
      fr: "Thérapie d'Hydratation Profonde à la Vapeur",
      en: "Deep Moisture & Steam Therapy"
    },
    desc: {
      nl: "Intens hydraterend botanisch masker geactiveerd met micro-stoom. Opent de haarschubben en hydrateert droge krullen tot in de kern.",
      fr: "Masque végétal ultra-nourrissant activé par micro-vapeur. Pénètre au cœur de la fibre pour une douceur absolue.",
      en: "Intensive botanical mask activated by micro-steam. Opens the hair cuticle and infuses moisture deep into thirsty curls."
    },
    bestFor: {
      nl: "Droge, dorstige krullen die gevoelig zijn voor pluis.",
      fr: "Cheveux secs, ternes et sujets aux frisottis.",
      en: "Dry, brittle curls craving intense hydration and softness."
    }
  },
  {
    id: "scalp_detox_exfoliation",
    category: "treatments",
    price: "€40",
    duration: { nl: "45 min.", fr: "45 min.", en: "45 min." },
    title: {
      nl: "Scalp Detox & Clarifying Spa",
      fr: "Détox Cuir Chevelu & Spa Clarifiant",
      en: "Scalp Detox & Clarifying Spa"
    },
    desc: {
      nl: "Zuiverende hoofdhuidscrub met klei en pepermunt. Verwijdert zware productopbouw, talg en schilfers voor gezonde krulgroei.",
      fr: "Gommage purifiant du cuir chevelu à l'argile et menthe poivrée. Élimine l'accumulation de produits et stimule la pousse.",
      en: "Purifying scalp scrub with clay and peppermint. Removes stubborn product buildup and excess oils to boost hair growth."
    },
    bestFor: {
      nl: "Jeukende hoofdhuid, build-up van gels/oliën of futloze aanzet.",
      fr: "Cuir chevelu sensible, accumulation de produits ou manque de volume en racine.",
      en: "Itchy scalps, heavy product buildup, or flat roots needing a reset."
    }
  },
  {
    id: "protein_elasticity_boost",
    category: "treatments",
    price: "€50",
    duration: { nl: "60 min.", fr: "60 min.", en: "60 min." },
    title: {
      nl: "Protein Repair & Elasticity Boost",
      fr: "Soin Réparateur Protéiné & Élasticité",
      en: "Protein Repair & Elasticity Boost"
    },
    desc: {
      nl: "Versterkende proteïnekuur die over-gehydrateerde of slappe krullen herstructureert. Brengt de vocht-proteïnebalans perfect in evenwicht.",
      fr: "Cure protéinée restructurante pour redonner ressort et tenue aux boucles ramollies ou sur-hydratées.",
      en: "Fortifying protein treatment that restores structure and snap to limp, over-moisturized, or stretched curls."
    },
    bestFor: {
      nl: "Krullen die hun sprongkracht verloren hebben en snel uitzakken.",
      fr: "Boucles qui se détendent trop vite et manquent de ressort.",
      en: "Curls lacking elasticity, bounce, or feeling mushy and limp."
    }
  },
  {
    id: "bond_builder_therapy",
    category: "treatments",
    price: "€55",
    duration: { nl: "60 min.", fr: "60 min.", en: "60 min." },
    title: {
      nl: "Molecular Bond Builder Therapy",
      fr: "Soin Réparateur Moléculaire",
      en: "Molecular Bond Builder Therapy"
    },
    desc: {
      nl: "Diepgaande moleculaire herstelbehandeling (Olaplex/K18) die verbroken zwavelbruggen herstelt na kleuring of hittebeschadiging.",
      fr: "Soin réparateur de ponts disulfures (Olaplex/K18) réparant les dommages causés par la chaleur ou les colorations.",
      en: "Advanced molecular bond-repair treatment (Olaplex/K18) that reconnects broken hair bonds from heat or chemical damage."
    },
    bestFor: {
      nl: "Geverfde, gebleekte of door stijltangen beschadigde krullen.",
      fr: "Cheveux colorés, décolorés ou abîmés par les fers à lisser.",
      en: "Color-treated, bleached, or heat-damaged curls needing structural recovery."
    }
  },

  // PACKAGES & MAKEOVERS
  {
    id: "ultimate_transformation",
    category: "styling",
    price: "€110",
    duration: { nl: "120 min.", fr: "120 min.", en: "120 min." },
    title: {
      nl: "The Ultimate Curl Transformation",
      fr: "Transformation Totale des Boucles",
      en: "The Ultimate Curl Transformation"
    },
    desc: {
      nl: "Ons meest complete VIP-pakket: Uitgebreide krulanalyse + Droog knippen krul voor krul + Stoombehandeling + Stap-voor-stap Styling Workshop.",
      fr: "Notre expérience VIP ultime: Diagnostic complet + Coupe sur cheveux secs + Soin profond à la vapeur + Atelier coiffage pas-à-pas.",
      en: "Our signature VIP experience: In-depth curl consultation + Dry curl-by-curl cut + Steam hydration therapy + Step-by-step styling lesson."
    },
    bestFor: {
      nl: "Iedereen die zijn krullen volledig wil transformeren en precies wil leren stylen.",
      fr: "Une métamorphose totale et l'apprentissage des gestes d'experts à reproduire chez soi.",
      en: "A complete curl makeover and mastering your home styling routine."
    }
  },
  {
    id: "first_time_experience",
    category: "styling",
    price: "€95",
    duration: { nl: "105 min.", fr: "105 min.", en: "105 min." },
    title: {
      nl: "First Time Curly Experience",
      fr: "Première Expérience Boucles",
      en: "First Time Curly Experience"
    },
    desc: {
      nl: "Speciaal samengesteld voor wie voor het eerst een krullenspecialist bezoekt: intake, droog knippen, deep conditioning & routine advies.",
      fr: "Conçu pour votre première visite: diagnostic porositeit/densité, coupe à sec, soin nourrissant et ordonnance de produits sur-mesure.",
      en: "Tailored for your first visit to a curl specialist: porosity check, custom dry cut, deep conditioning, and personalized product routine."
    },
    bestFor: {
      nl: "Nieuwe klanten die hun natuurlijke krulreis starten.",
      fr: "Nouvelles clientes débutant leur transition vers le naturel.",
      en: "First-time clients starting their natural curl journey."
    }
  },
  {
    id: "scalp_cut_combo",
    category: "styling",
    price: "€120",
    duration: { nl: "135 min.", fr: "135 min.", en: "135 min." },
    title: {
      nl: "Scalp Detox + Moisture Therapy + Cut",
      fr: "Détox Cuir Chevelu + Soin Vapeur + Coupe",
      en: "Scalp Detox + Moisture Therapy + Cut"
    },
    desc: {
      nl: "De complete wellnessbehandeling: diepe hoofdhuid scrub, hydraterend stoommasker, droge krulsnit en volumineuze diffuser-styling.",
      fr: "L'expérience bien-être absolue: gommage détoxifiant, soin hydratant à la vapeur, coupe sur cheveux secs et séchage haute définition.",
      en: "The ultimate wellness package: clarifying scalp treatment, steam hydration mask, precision dry cut, and defined volume styling."
    },
    bestFor: {
      nl: "Een complete reset van hoofdhuid tot puntjes.",
      fr: "Une réinitialisation totale du cuir chevelu aux pointes.",
      en: "A total reset for both scalp health and curl definition."
    }
  }
];

// 3. Gallery Data
const galleryData = [
  {
    id: 1,
    image: "assets/curly_cut.png",
    category: "cuts",
    title: { nl: "Droog Knippen per Krul", fr: "Coupe sur Cheveux Secs", en: "Precision Dry Curl Sculpting" },
    desc: {
      nl: "Droge kniptechniek waarbij elke krul individueel in model wordt gebracht voor optimale veerkracht en volume.",
      fr: "Technique de coupe à sec sculptant chaque boucle individuellement pour un volume harmonieux.",
      en: "Dry sculpting technique shaping each curl individually for optimal bounce and balanced volume."
    }
  },
  {
    id: 2,
    image: "assets/curly_treatment.png",
    category: "treatments",
    title: { nl: "Diepe Stoom Hydratatie Spa", fr: "Spa Hydratant Vapeur", en: "Deep Steam Hydration Therapy" },
    desc: {
      nl: "Luxe hoofdhuid- en haarwassing met een botanisch voedend masker onder zachte micro-stoom.",
      fr: "Rituel de lavage bien-être avec masque botanique sous micro-vapeur bienfaisante.",
      en: "Luxury scalp and hair ritual infused with botanical masks under gentle micro-steam."
    }
  },
  {
    id: 3,
    image: "assets/curly_styling.png",
    category: "styling",
    title: { nl: "Diffuser & Kruldefinitie", fr: "Définition & Séchage Diffuseur", en: "Diffuser Definition & Volume" },
    desc: {
      nl: "Prachtig gedefinieerde, pluisvrije spiraalkrullen met natuurlijke glans en langdurige hold.",
      fr: "Boucles rebondies et sans frisottis avec une brillance remarquable et une tenue souple.",
      en: "Glossy, frizz-free defined ringlets with natural shine and touchable, flexible hold."
    }
  },
  {
    id: 4,
    image: "assets/curly_afro.png",
    category: "coils",
    title: { nl: "Afro & Coily Hair Specialisme", fr: "Expertise Boucles Crépues & Coils", en: "Afro & Coily Texture Care" },
    desc: {
      nl: "Intense hydratatie en zachte definitie voor 3C-4C texturen met behoud van haarlengte en elasticiteit.",
      fr: "Hydratation intense et définition délicate pour textures 3C à 4C respectant la longueur.",
      en: "Deep moisture and defined coil clumping for 3C-4C textures, maximizing elasticity and health."
    }
  },
  {
    id: 5,
    image: "assets/hero_bg.png",
    category: "styling",
    title: { nl: "Volumineuze Krultransformatie", fr: "Transformation Volume & Éclat", en: "Voluminous Curl Makeover" },
    desc: {
      nl: "Van futloos en droog naar een volle, glamoureuze krulcoupe vol beweging en zelfvertrouwen.",
      fr: "Des boucles ternes transformées en une chevelure volumineuse et pleine de dynamisme.",
      en: "From dry and flat to a voluminous, healthy curl crown full of bounce and movement."
    }
  }
];

// 4. Curl Quiz Data & Recommendations
const quizData = {
  wavy: {
    title: { nl: "Wavy Hair (Type 2A - 2C)", fr: "Cheveux Ondulés (2A - 2C)", en: "Wavy Hair (Type 2A - 2C)" },
    desc: {
      nl: "Jouw haar heeft een zachte S-vorm die snel uitzakt of verzwaart door te zware crèmes. Je hebt behoefte aan lichte hydratatie en technieken die volume en textuur stimuleren.",
      fr: "Vos cheveux forment de belles ondulations en S qui peuvent facilement s'alourdir avec des soins trop riches. Vous avez besoin de légèreté et de volume.",
      en: "Your hair has soft S-waves that can easily get weighed down by heavy butters. You need lightweight hydration and styling to boost bounce and volume."
    },
    recService: "wash_curl_style",
    img: "assets/curly_styling.png"
  },
  curly: {
    title: { nl: "Classic Curly (Type 3A - 3B)", fr: "Boucles Classiques (3A - 3B)", en: "Classic Curly (Type 3A - 3B)" },
    desc: {
      nl: "Mooie gedefinieerde spiralen en ringlets die gevoelig zijn voor pluis en droogte. Een gespecialiseerde droge krulsnit brengt de ideale ronde vorm en veerkracht terug.",
      fr: "De superbes spirales et anglaises qui ont tendance aux frisottis. Une coupe sur cheveux secs apporte une forme harmonieuse et un rebond maximal.",
      en: "Defined spirals and ringlets prone to frizz and dryness. A dedicated dry curl cut restores shape, movement, and springiness."
    },
    recService: "signature_curl_cut",
    img: "assets/curly_cut.png"
  },
  coily: {
    title: { nl: "Tight Curls & Corkscrews (3C - 4A)", fr: "Boucles Serrées (3C - 4A)", en: "Tight Curls & Corkscrews (3C - 4A)" },
    desc: {
      nl: "Zeer dichte, compacte kurkentrekkers met veel krimp (shrinkage). Vraagt om diepe hydratatie onder stoom en gespecialiseerde kniptechnieken per krulstreng.",
      fr: "Des boucles compactes en tire-bouchon avec un fort rétrécissement. Elles réclament une hydratation profonde et une coupe méticuleuse.",
      en: "Dense, compact corkscrews with noticeable shrinkage. Requires intense steam hydration and meticulous curl-by-curl sculpting."
    },
    recService: "first_time_experience",
    img: "assets/curly_afro.png"
  },
  kinky: {
    title: { nl: "Afro & Kinky Coils (Type 4B - 4C)", fr: "Cheveux Crépus & Coils (4B - 4C)", en: "Afro & Kinky Coils (Type 4B - 4C)" },
    desc: {
      nl: "Fijne z-patronen en rijke afro-textuur die de hoogste dosis voeding, zachtheid en bescherming nodig hebben. We hydrateren diep en creëren een prachtige vorm.",
      fr: "Texture afro dense et motifs en Z nécessitant un maximum de douceur, d'hydratation et de respect du cuir chevelu.",
      en: "Dense Z-patterns and rich afro texture requiring maximum moisture retention, scalp care, and gentle length retention."
    },
    recService: "ultimate_transformation",
    img: "assets/curly_afro.png"
  },
  repair: {
    title: { nl: "Herstel & Transitie", fr: "Transition & Réparation", en: "Repair & Transition" },
    desc: {
      nl: "Herstel van door stijltangen, chemische behandelingen of kleuringen beschadigde krullen. Wij herstellen je natuurlijke krulpatroon stap voor stap.",
      fr: "Réparation des cheveux abîmés par les lisseurs, défrisages ou décolorations. Nous réveillons vos boucles naturelles pas à pas.",
      en: "Restoring heat-damaged, chemically treated, or bleached curls back to their vibrant, healthy natural pattern."
    },
    recService: "protein_elasticity_boost",
    img: "assets/curly_treatment.png"
  }
};

// 5. FAQ Data for Curly Hair Specialist
const faqData = [
  {
    q: {
      nl: "Hoe moet ik mijn haar voorbereiden voor een krulsessie?",
      fr: "Comment préparer mes cheveux avant mon rendez-vous ?",
      en: "How should I prepare my hair for my curl appointment?"
    },
    a: {
      nl: "Kom altijd naar de salon met 100% droog haar in zijn natuurlijke krulpatroon (gewassen 1-2 dagen voordien met minimale stylingproducten). Draag je haar los: géén staarten, knotten, vlechten, speldjes of klemmen, omdat deze het natuurlijke krulpatroon vervormen.",
      fr: "Venez impérativement avec les cheveux 100% secs dans leur état naturel (lavés 1 à 2 jours avant avec un minimum de produits). Laissez vos cheveux totalement lâchés: aucun chignon, élastique, pince ou tresse qui altérerait la forme naturelle des boucles.",
      en: "Please arrive with 100% dry hair styled in its natural curl state (washed 1-2 days prior with minimal stylers). Wear your hair completely down: no ponytails, buns, braids, clips, or hats, as these alter your natural curl pattern."
    }
  },
  {
    q: {
      nl: "Waarom knipt Curlyila op droog haar in plaats van nat haar?",
      fr: "Pourquoi Curlyila coupe-t-elle sur cheveux secs plutôt que mouillés ?",
      en: "Why does Curlyila cut curls dry instead of wet?"
    },
    a: {
      nl: "Wanneer krullen nat zijn, rekt het haar uit en verdwijnt het unieke springpatroon. Omdat elke krul op je hoofd een ander krimpingspercentage (shrinkage) heeft, zorgt nat knippen voor ongelijke happen zodra het opdroogt. Droog knippen garandeert dat de vorm perfect klopt in het dagelijks leven.",
      fr: "Mouillés, les cheveux s'étirent et perdent leur ressort naturel. Comme chaque boucle a un taux de rétrécissement (shrinkage) différent, couper mouillé crée des irrégularités une fois sec. La coupe sur cheveux secs garantit une harmonie visuelle parfaite.",
      en: "When wet, curly hair stretches out and masks its true elasticity. Because each curl cluster has a different shrinkage rate, wet cutting often leads to uneven shapes when dry. Dry cutting ensures your shape looks flawless in real life."
    }
  },
  {
    q: {
      nl: "Welke producten gebruikt Curlyila in de salon?",
      fr: "Quels produits sont utilisés au salon Curlyila ?",
      en: "What products does Curlyila use in the salon?"
    },
    a: {
      nl: "Wij werken uitsluitend met hoogwaardige, Curly Girl-vriendelijke en professionele salonproducten. Onze formules zijn 100% vrij van uitdrogende sulfaten, zware niet-wateroplosbare siliconen, parabenen en minerale oliën.",
      fr: "Nous utilisons exclusivement des soins professionnels haut de gamme compatibles Curly Girl. Nos formules sont sans sulfates desséchants, sans silicones occlusifs et enrichies en extraits botaniques nourrissants.",
      en: "We exclusively use premium, professional-grade, curl-friendly formulas. All our products are free of drying sulphates, heavy non-water-soluble silicones, parabens, and mineral oils."
    }
  },
  {
    q: {
      nl: "Hoe vaak moet ik mijn krullen laten knippen?",
      fr: "À quelle fréquence dois-je couper mes boucles ?",
      en: "How often should I get my curls cut?"
    },
    a: {
      nl: "Voor het behoud van een mooie vorm en gezonde punten raden we aan om elke 3 tot 4 maanden een 'Curly Cut Refresh' te boeken. Als je je haar wilt laten groeien, is 2 tot 3 keer per jaar voldoende.",
      fr: "Pour conserver une coupe équilibrée et éviter les nœuds et fourches, nous conseillons un rafraîchissement tous les 3 à 4 mois. Si vous laissez pousser, 2 à 3 fois par an suffisent.",
      en: "To maintain optimal shape, prevent split ends, and keep volume balanced, we recommend a refresh cut every 3 to 4 months. If growing your hair out, 2 to 3 times a year is ideal."
    }
  },
  {
    q: {
      nl: "Moet ik een voorschot betalen bij het boeken?",
      fr: "Dois-je verser un acompte lors de la réservation ?",
      en: "Do I need to pay a deposit when booking?"
    },
    a: {
      nl: "Ja. Om je exclusieve tijdslot te garanderen, vragen we een niet-restitueerbaar voorschot van €15. Dit bedrag wordt verrekend met het totaalbedrag tijdens je afspraak. Je kunt je afspraak tot 48 uur van tevoren kosteloos verplaatsen.",
      fr: "Oui. Pour sécuriser votre créneau dans l'agenda, un acompte non remboursable de 15 € est demandé. Il sera déduit du montant total le jour du rendez-vous. Vous pouvez déplacer votre séance jusqu'à 48h à l'avance.",
      en: "Yes. To reserve your dedicated time slot, we require a non-refundable deposit of €15. This is deducted from your final total. You can reschedule your appointment up to 48 hours in advance."
    }
  },
  {
    q: {
      nl: "Is Curlyila geschikt voor alle krultypes en etniciteiten?",
      fr: "Curlyila convient-elle à tous les types de boucles et origines ?",
      en: "Is Curlyila suitable for all curl types and ethnicities?"
    },
    a: {
      nl: "Absoluut! Curlyila is gespecialiseerd in het volledige spectrum van golvend (2A), krullend (3A-3C) tot afro en kinky coily haar (4A-4C). Iedere textuur krijgt een afgestemde behandeling op basis van porositeit, densiteit en elasticiteit.",
      fr: "Absolument ! Curlyila maîtrise l'ensemble du spectre, des ondulations douces (2A) aux boucles serrées et cheveux afros crépus (4A-4C). Chaque chevelure reçoit un soin personnalisé.",
      en: "Absolutely! Curlyila is trained and experienced with the entire texture spectrum from loose waves (2A-2C) to classic curls (3A-3C) and dense afro coils (4A-4C)."
    }
  },
  {
    q: {
      nl: "Waar is de salon gevestigd?",
      fr: "Où se situe le salon de coiffure ?",
      en: "Where is the studio located?"
    },
    a: {
      nl: "Curlyila is gevestigd in het centrum van Genk, België. Het exacte adres van de salon en parkeerinstructies worden automatisch met je gedeeld in je afspraakbevestiging via e-mail en sms.",
      fr: "Le salon Curlyila est situé dans le centre de Genk (Genk), en Belgique. L'adresse exacte et les informations de parking vous sont envoyées dans votre e-mail de confirmation.",
      en: "Curlyila is located in central Genk, Belgium. The exact address and parking details are automatically provided in your booking confirmation email and SMS."
    }
  }
];

// 6. Application State
let currentLanguage = localStorage.getItem("curlyila_lang") || "nl";
let activePage = "home";
let currentQuizStyle = "wavy";
let activeServicesCategory = "cuts";
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
  
  faqContainer: document.getElementById("faq-accordion-container")
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
  localStorage.setItem("curlyila_lang", lang);
  if (elements.currentLangText) {
    elements.currentLangText.textContent = lang.toUpperCase();
  }
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

  // Re-render dynamic components
  updateQuizResult();
  displayServices();
  displayGallery();
  renderFAQ();
}

// Language Dropdown toggles
if (elements.langToggleBtn) {
  elements.langToggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    elements.langDropdownMenu.classList.toggle("show");
  });
}

elements.langSelectBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const lang = btn.getAttribute("data-lang");
    setLanguage(lang);
    elements.langDropdownMenu.classList.remove("show");
  });
});

document.addEventListener("click", () => {
  if (elements.langDropdownMenu) {
    elements.langDropdownMenu.classList.remove("show");
  }
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
      if (elements.mainNav) elements.mainNav.classList.remove("active");
      if (elements.mobileMenuToggle) elements.mobileMenuToggle.classList.remove("active");
    });
  });

  // Navigate on clicking other triggers (category cards, buttons, etc.)
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
  if (elements.logoLink) {
    elements.logoLink.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.hash = "home";
    });
  }

  // Run initial hash routing
  handleHashChange();
}

function switchPage(pageId) {
  const targetPageElement = document.getElementById(`page-${pageId}`);
  if (!targetPageElement) {
    pageId = "home";
  }

  activePage = pageId;

  // Toggle active class on all page containers
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

// 10. Mobile Menu Drawer
function initMobileMenu() {
  if (elements.mobileMenuToggle && elements.mainNav) {
    elements.mobileMenuToggle.addEventListener("click", () => {
      elements.mobileMenuToggle.classList.toggle("active");
      elements.mainNav.classList.toggle("active");
    });
  }
}

// 11. Curl Quiz / Texture Finder
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
  if (!elements.quizResultBox) return;
  const result = quizData[currentQuizStyle];
  if (!result) return;
  
  const service = servicesData.find(s => s.id === result.recService);
  if (!service) return;

  const titleText = result.title[currentLanguage] || result.title.nl;
  const descText = result.desc[currentLanguage] || result.desc.nl;
  const serviceName = service.title[currentLanguage] || service.title.nl;
  const priceText = service.price;
  const durationText = service.duration[currentLanguage] || service.duration.nl;
  const bestForText = service.bestFor[currentLanguage] || service.bestFor.nl;
  
  const durationLabel = translations[currentLanguage]?.quiz_duration || "Duur";
  const priceLabel = translations[currentLanguage]?.quiz_price || "Prijs";
  const bestForLabel = translations[currentLanguage]?.quiz_best_for || "Ideaal voor";
  const bookText = translations[currentLanguage]?.quiz_book_rec || "Boek deze behandeling";
  const recLabel = translations[currentLanguage]?.quiz_rec_title || "Aanbevolen voor jou:";

  elements.quizResultBox.innerHTML = `
    <div class="result-text">
      <h3 style="font-family: var(--font-serif); font-size: 2rem; margin-bottom: 1rem; font-style: italic;">${titleText}</h3>
      <p style="font-size: 0.95rem; margin-bottom: 1.8rem; color: var(--accent-silver-dim); line-height: 1.6;">${descText}</p>
      
      <div class="result-rec" style="margin-bottom: 1.2rem;">
        <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent-gold); display: block; margin-bottom: 0.3rem;">${recLabel}</span>
        <strong style="font-family: var(--font-serif); font-size: 1.35rem; font-weight: 500; color: #fff;">${serviceName}</strong>
      </div>

      <div style="display: flex; gap: 2rem; font-size: 0.85rem; color: var(--accent-silver-dim); margin-bottom: 1.5rem;">
        <span><strong>${durationLabel}:</strong> ${durationText}</span>
        <span><strong>${priceLabel}:</strong> ${priceText}</span>
      </div>
      
      <p style="font-style: italic; font-family: var(--font-serif); font-size: 1rem; margin-bottom: 2rem; color: var(--accent-silver-dim);">
        <strong>${bestForLabel}:</strong> ${bestForText}
      </p>

      <a href="https://curlyila.setmore.com/" target="_blank" class="btn btn-primary">${bookText}</a>
    </div>
    <div class="result-image" style="height: 320px; overflow: hidden; border: 1px solid rgba(255,255,255,0.06); border-radius: 8px;">
      <img src="${result.img}" alt="${titleText}" style="width:100%; height:100%; object-fit:cover;">
    </div>
  `;
}

// 12. Services Grid Rendering
function initServices() {
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
  if (!elements.servicesCardsContainer) return;
  const filtered = servicesData.filter(s => s.category === activeServicesCategory);
  const bookText = translations[currentLanguage]?.book_service_btn || "Boek behandeling";
  
  elements.servicesCardsContainer.innerHTML = "";
  
  filtered.forEach(service => {
    const card = document.createElement("div");
    card.className = "service-card";
    const title = service.title[currentLanguage] || service.title.nl;
    const desc = service.desc[currentLanguage] || service.desc.nl;
    const bestFor = service.bestFor[currentLanguage] || service.bestFor.nl;
    const duration = service.duration[currentLanguage] || service.duration.nl;

    card.innerHTML = `
      <div>
        <div class="service-header">
          <h3 class="service-title">${title}</h3>
          <span class="service-price">${service.price}</span>
        </div>
        <div class="service-info">
          <p class="service-desc">${desc}</p>
          <div class="service-best">
            <strong>Ideaal voor:</strong> ${bestFor}
          </div>
        </div>
      </div>
      <div>
        <div class="service-meta" style="margin-bottom: 1.5rem;">
          <span><i class="fa-regular fa-clock"></i> ${duration}</span>
          <span><i class="fa-solid fa-scissors"></i> Curlyila Studio</span>
        </div>
        <a href="https://curlyila.setmore.com/" target="_blank" class="btn btn-secondary">${bookText}</a>
      </div>
    `;
    elements.servicesCardsContainer.appendChild(card);
  });
}

// 13. Gallery & Lightbox
function initGallery() {
  elements.galleryFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      elements.galleryFilterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeGalleryFilter = btn.getAttribute("data-filter");
      displayGallery();
    });
  });
  
  if (elements.lightboxCloseBtn && elements.lightbox) {
    elements.lightboxCloseBtn.addEventListener("click", () => {
      elements.lightbox.classList.remove("show");
    });
    
    elements.lightbox.addEventListener("click", (e) => {
      if (e.target === elements.lightbox) {
        elements.lightbox.classList.remove("show");
      }
    });
  }
}

function displayGallery() {
  if (!elements.galleryContainer) return;
  const filtered = galleryData.filter(item => {
    if (activeGalleryFilter === "all") return true;
    return item.category === activeGalleryFilter;
  });

  elements.galleryContainer.innerHTML = "";

  filtered.forEach(item => {
    const el = document.createElement("div");
    el.className = "gallery-item";
    const title = item.title[currentLanguage] || item.title.nl;

    el.innerHTML = `
      <img src="${item.image}" alt="${title}" loading="lazy">
      <div class="gallery-hover">
        <i class="fa-solid fa-magnifying-glass-plus"></i>
        <span>${title}</span>
      </div>
    `;
    el.addEventListener("click", () => openLightbox(item));
    elements.galleryContainer.appendChild(el);
  });
}

function openLightbox(item) {
  if (!elements.lightbox) return;
  elements.lightboxImg.src = item.image;
  elements.lightboxTitle.textContent = item.title[currentLanguage] || item.title.nl;
  elements.lightboxDesc.textContent = item.desc[currentLanguage] || item.desc.nl;
  elements.lightbox.classList.add("show");
}

// 14. FAQ Accordions
function renderFAQ() {
  if (!elements.faqContainer) return;
  elements.faqContainer.innerHTML = "";

  faqData.forEach(item => {
    const el = document.createElement("div");
    el.className = "faq-item";
    
    const questionText = item.q[currentLanguage] || item.q.nl;
    const answerText = item.a[currentLanguage] || item.a.nl;

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
      
      // Close all other FAQs
      document.querySelectorAll(".faq-item").forEach(other => {
        other.classList.remove("active");
        const panel = other.querySelector(".faq-answer");
        if (panel) panel.style.maxHeight = null;
      });

      if (!isActive) {
        el.classList.add("active");
        answerPanel.style.maxHeight = answerPanel.scrollHeight + "px";
      }
    });

    elements.faqContainer.appendChild(el);
  });
}

// 15. Header Scroll Effect
function setupScrollEffects() {
  const header = document.querySelector("header");
  if (!header) return;
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

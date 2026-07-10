import { FragranceProduct, ShippingMethod } from '../types/commerce';

// Import generated image assets
import imgGialloCorsa from '../assets/images/parfum_giallo_corsa_1790749434458.jpg';
import imgCarbonVapor from '../assets/images/parfum_carbon_vapor_1790749446979.jpg';
import imgCuoioLeather from '../assets/images/parfum_cuoio_leather_1790749459273.jpg';
import imgAeroBlanc from '../assets/images/parfum_aero_blanc_1790749472060.jpg';
import imgHeroSpotlight from '../assets/images/hero_parfum_spotlight_1790749423080.jpg';

export const HERO_CAMPAIGN = {
  headline: 'SHOWROOM BLACK. ONE YELLOW SPARK.',
  eyebrow: 'AUTOMOBILI PARFUMS — HAUTE PARFUMERIE SANT’AGATA',
  subheading: 'A MONOLITHIC FRAGRANCE STATEMENT CONCEIVED UNDER THE SPOTLIGHTS OF EMILIA-ROMAGNA. PURE OLFACTORY ACCELERATION.',
  image: imgHeroSpotlight,
  featuredProductId: 'giallo-corsa-extrait',
  ctaText: 'DISCOVER GIALLO CORSA',
};

export const FRAGRANCES: FragranceProduct[] = [
  {
    id: 'giallo-corsa-extrait',
    slug: 'giallo-corsa-extrait',
    name: 'GIALLO CORSA',
    subname: 'EXTRAIT DE PARFUM',
    collection: 'EDIZIONE SPECIALE',
    concentration: 'EXTRAIT DE PARFUM',
    olfactoryFamily: 'LEATHER & SMOKE',
    intensity: 5,
    releaseYear: '2026',
    tagline: 'THE MONOLITH OF INTENSE SPICE, TUSCAN LEATHER, AND METALLIC AMBER.',
    description: 'An aggressive, uncompromised opening of hand-harvested Italian saffron and cold Calabrian bergamot, crashing into a dark core of smoked amber resin, aged saddle leather, and charred birchwood. A single flash of golden adrenaline on an asphalt stage.',
    inspiration: 'The moment a V12 ignition button is pressed in a dark Sant’Agata hangar — raw mechanical tension followed by an explosion of sensory heat.',
    masterPerfumer: 'Aurelien Guichard & Paolo Terenzi',
    flaconSpec: {
      glass: 'Heavy monolithic obsidian glass with 0° angular geometry',
      cap: 'Solid machined Grade-5 titanium with engraved hexagonal relief',
      weight: '580 grams net weight',
      atomizer: 'High-velocity 120-micron micro-diffuser for maximum plume radius'
    },
    pyramid: {
      top: [
        { name: 'KASHMIR SAFFRON', origin: 'Direct extraction, 18% oil purity', facet: 'Golden spicy' },
        { name: 'CALABRIAN BERGAMOT', origin: 'Cold-pressed peel, Reggio Calabria', facet: 'Solar citrus' },
        { name: 'PINK PEPPERCORN', origin: 'Madagascar CO2 extraction', facet: 'Electrified mineral' },
      ],
      heart: [
        { name: 'TUSCAN SADDLE LEATHER', origin: 'Santa Croce sull’Arno accord', facet: 'Supple smoky hide' },
        { name: 'BLACK CYPRESS', origin: 'Apennine mountains wild harvest', facet: 'Aromatic wood' },
        { name: 'SMOKED STYRAX', origin: 'Honduran wild resin tears', facet: 'Balsamic smoke' },
      ],
      base: [
        { name: 'ANIMALIC AMBER ACCORD', origin: 'Molecular distillation', facet: 'Warm metallic skin' },
        { name: 'BURNT BIRCH TAR', origin: 'Northern European wood pyrolysis', facet: 'Raw asphalt smoke' },
        { name: 'BOURBON VETIVER', origin: 'Aged Java roots', facet: 'Earthy graphite' },
      ],
    },
    variants: [
      { id: 'gc-50', sku: 'AP-GC-050', volume: '50ML / 1.7 FL. OZ.', priceMinor: 29000, inventoryQuantity: 18 },
      { id: 'gc-100', sku: 'AP-GC-100', volume: '100ML / 3.4 FL. OZ.', priceMinor: 39500, inventoryQuantity: 42 },
      { id: 'gc-250', sku: 'AP-GC-250', volume: '250ML ATELIER FLACON', priceMinor: 68000, inventoryQuantity: 6 },
    ],
    images: [
      imgGialloCorsa,
      imgHeroSpotlight,
      imgCarbonVapor
    ],
    featured: true,
  },
  {
    id: 'carbon-fibre-vapor',
    slug: 'carbon-fibre-vapor',
    name: 'CARBON FIBRE VAPOR',
    subname: 'EAU DE PARFUM INTENSE',
    collection: 'COLLEZIONE METALLI',
    concentration: 'EAU DE PARFUM',
    olfactoryFamily: 'WOODY AMBER',
    intensity: 4,
    releaseYear: '2026',
    tagline: 'COLD COMPOSITE WEAVE, CRUSHED CARDAMOM, AND SHARP CEDAR.',
    description: 'A study in aerodynamic lightweight perfumery. Crisp elemi and green Guatemalan cardamom rise above an austere structural lattice of cedarwood, vetiver oil, and synthetic carbon weave accords.',
    inspiration: 'The autoclave ovens where dry carbon fiber undergoes high-pressure resin polymerization.',
    masterPerfumer: 'Alberto Morillas',
    flaconSpec: {
      glass: 'Ultra-clear dense crystal clad in genuine dry-weave matte carbon fiber',
      cap: 'Anodized matte black forged composite',
      weight: '510 grams net weight',
      atomizer: 'Precision pulsed jet nozzle'
    },
    pyramid: {
      top: [
        { name: 'CRUSHED CARDAMOM', origin: 'Guatemala cloud forest harvest', facet: 'Cold aromatic' },
        { name: 'ELEMI RESIN', origin: 'Canarium luzonicum Philippines', facet: 'Citrus balsamic' },
        { name: 'MINERAL AIR ACCORD', origin: 'Ozone condensation capture', facet: 'Metallic vacuum' },
      ],
      heart: [
        { name: 'CARBON WEAVE ACCORD', origin: 'Synthetic aromachemical architecture', facet: 'Industrial resin' },
        { name: 'ATLAS MOUNTAIN CEDAR', origin: 'Steam-distilled heartwood', facet: 'Dry architectural' },
        { name: 'GERANIUM BOURBON', origin: 'Reunion Island distillation', facet: 'Sharp metallic floral' },
      ],
      base: [
        { name: 'DARK INDONESIAN PATCHOULI', origin: 'Fractional molecular distillation', facet: 'Dark cocoa root' },
        { name: 'SMOKED OAKMOSS', origin: 'French oak extraction', facet: 'Deep tactile velvet' },
        { name: 'GREY MUSK', origin: 'Modern clean fixative chain', facet: 'Persistent sillage' },
      ],
    },
    variants: [
      { id: 'cfv-50', sku: 'AP-CFV-050', volume: '50ML / 1.7 FL. OZ.', priceMinor: 26000, inventoryQuantity: 24 },
      { id: 'cfv-100', sku: 'AP-CFV-100', volume: '100ML / 3.4 FL. OZ.', priceMinor: 35000, inventoryQuantity: 50 },
      { id: 'cfv-250', sku: 'AP-CFV-250', volume: '250ML ATELIER FLACON', priceMinor: 59000, inventoryQuantity: 9 },
    ],
    images: [
      imgCarbonVapor,
      imgHeroSpotlight,
      imgGialloCorsa
    ],
    featured: true,
  },
  {
    id: 'cuoio-di-sant-agata',
    slug: 'cuoio-di-sant-agata',
    name: 'CUOIO DI SANT’AGATA',
    subname: 'EXTRAIT DE PARFUM',
    collection: 'SERIE CORSA',
    concentration: 'EXTRAIT DE PARFUM',
    olfactoryFamily: 'LEATHER & SMOKE',
    intensity: 5,
    releaseYear: '2025',
    tagline: 'AGED FULL-GRAIN LEATHER, TUSCAN IRIS PALLIDA, AND SMOKED WOODS.',
    description: 'An homage to the saddlery workshops of northern Italy. Dense, dark full-grain leather softened by rare Tuscan Iris butter, yielding an intoxicating juxtaposition of brutalist strength and velvety tactile finesse.',
    inspiration: 'The intoxicating scent of a newly upholstered cockpit on the factory delivery floor.',
    masterPerfumer: 'Dominique Ropion',
    flaconSpec: {
      glass: 'Smoked charcoal crystal with hand-stitched Italian black leather neck band',
      cap: 'Brushed gunmetal alloy cap with laser-etched serial numbering',
      weight: '620 grams net weight',
      atomizer: 'Controlled tactile mist nozzle'
    },
    pyramid: {
      top: [
        { name: 'FLORENTINE IRIS PALLIDA', origin: '3-year rhizome aged butter', facet: 'Powdery suede' },
        { name: 'JUNIPER BERRY', origin: 'Tuscan hillside wild pick', facet: 'Gin crisp' },
        { name: 'BITTER ALMOND', origin: 'Cold-pressed Italian kernels', facet: 'Marzipan leather' },
      ],
      heart: [
        { name: 'HEAVY AUTOMOTIVE LEATHER', origin: 'Private atelier extract', facet: 'Tanned hide' },
        { name: 'CASTOREUM BOTANICAL ACCORD', origin: 'Plant-derived animalic base', facet: 'Warm intimacy' },
        { name: 'NAGARMOTHA (CYPRIOL)', origin: 'Indian riverbank distillation', facet: 'Smoky earthy wood' },
      ],
      base: [
        { name: 'OUD ASSAM', origin: 'Aquilaria agallocha wild resin', facet: 'Medicinal wood smoke' },
        { name: 'AMBER RESIN', origin: 'Fossilized pine resin', facet: 'Warm golden tenacity' },
        { name: 'DARK TONKA BEAN', origin: 'Venezuelan wild seed', facet: 'Toasted almond tobacco' },
      ],
    },
    variants: [
      { id: 'csa-50', sku: 'AP-CSA-050', volume: '50ML / 1.7 FL. OZ.', priceMinor: 31000, inventoryQuantity: 12 },
      { id: 'csa-100', sku: 'AP-CSA-100', volume: '100ML / 3.4 FL. OZ.', priceMinor: 42000, inventoryQuantity: 28 },
      { id: 'csa-250', sku: 'AP-CSA-250', volume: '250ML ATELIER FLACON', priceMinor: 72000, inventoryQuantity: 4 },
    ],
    images: [
      imgCuoioLeather,
      imgGialloCorsa,
      imgCarbonVapor
    ],
    featured: true,
  },
  {
    id: 'aero-blanc-pur',
    slug: 'aero-blanc-pur',
    name: 'AERO BLANC PUR',
    subname: 'EAU DE PARFUM',
    collection: 'COLLEZIONE METALLI',
    concentration: 'EAU DE PARFUM',
    olfactoryFamily: 'CITRUS & AERODYNAMIC',
    intensity: 3,
    releaseYear: '2026',
    tagline: 'COLD WHITE PEPPER, SHARP ALDEHYDES, AND CHILLED OLIBANUM.',
    description: 'An architectural expression of zero drag. Sub-zero aldehydes sweep over crushed white peppercorns, icy frankincense tears, and sheer cedarwood. Pure, pristine, and razor-sharp against the skin.',
    inspiration: 'Wind tunnel velocity testing: the razor boundary layer where air splits cleanly around the cockpit.',
    masterPerfumer: 'Francis Kurkdjian',
    flaconSpec: {
      glass: 'Frosted matte white crystal with polished aluminum facade',
      cap: 'Billet aerospace aluminum with brushed satin finish',
      weight: '530 grams net weight',
      atomizer: 'Continuous ultra-fine cryogenic spray'
    },
    pyramid: {
      top: [
        { name: 'CRYOGENIC ALDEHYDES', origin: 'Synthesized molecular fresh series', facet: 'Frozen air' },
        { name: 'WHITE PEPPERCORN', origin: 'Sarawak island harvest', facet: 'Sharp dry spice' },
        { name: 'CHILLED BERGAMOT', origin: 'Winter harvest Italy', facet: 'Brisk citrus' },
      ],
      heart: [
        { name: 'SOMALIAN OLIBANUM', origin: 'First-grade frankincense tears', facet: 'Silver spiritual resin' },
        { name: 'WHITE CEDARWOOD', origin: 'Canadian virgin timber', facet: 'Clean architectural' },
        { name: 'SNOW GENTIAN', origin: 'Alpine glacier flora', facet: 'Cold herbal mineral' },
      ],
      base: [
        { name: 'CLEAR AMBROXAN', origin: 'Natural ambergris bio-identical', facet: 'Radiant clean skin' },
        { name: 'WHITE CASHMERAN', origin: 'High-diffusion woody-musk', facet: 'Velvet metallic' },
        { name: 'HAITIAN VETIVER', origin: 'Purified light fraction', facet: 'Clean linear grass' },
      ],
    },
    variants: [
      { id: 'abp-50', sku: 'AP-ABP-050', volume: '50ML / 1.7 FL. OZ.', priceMinor: 25000, inventoryQuantity: 30 },
      { id: 'abp-100', sku: 'AP-ABP-100', volume: '100ML / 3.4 FL. OZ.', priceMinor: 34000, inventoryQuantity: 45 },
      { id: 'abp-250', sku: 'AP-ABP-250', volume: '250ML ATELIER FLACON', priceMinor: 56000, inventoryQuantity: 8 },
    ],
    images: [
      imgAeroBlanc,
      imgCarbonVapor,
      imgCuoioLeather
    ],
    featured: true,
  },
  {
    id: 'notte-di-monza',
    slug: 'notte-di-monza',
    name: 'NOTTE DI MONZA',
    subname: 'EXTRAIT DE PARFUM',
    collection: 'SERIE CORSA',
    concentration: 'EXTRAIT DE PARFUM',
    olfactoryFamily: 'FLORAL DARK',
    intensity: 5,
    releaseYear: '2025',
    tagline: 'MIDNIGHT DAMASK ROSE, BLACK TRUFFLE ACCORD, AND BOURBON VANILLA.',
    description: 'The sensual paradox of darkness at the Autodromo. Night-blooming Bulgarian damask rose plunged into earthy black truffle, dark rum absolute, and smoky Madagascar vanilla pods.',
    inspiration: 'Night endurance racing at Monza: brake discs glowing cherry red under the midnight autumn fog.',
    masterPerfumer: 'Jean-Claude Ellena',
    flaconSpec: {
      glass: 'Deep purple-black obsidian glass with mirror-polished face',
      cap: 'Blackened bronze hexagonal cap',
      weight: '600 grams net weight',
      atomizer: 'Fine cloud actuator'
    },
    pyramid: {
      top: [
        { name: 'CRIMSON DAMASK ROSE', origin: 'Rose Valley night harvest', facet: 'Velvet floral' },
        { name: 'BLACK TRUFFLE ACCORD', origin: 'Piedmontese soil tincture', facet: 'Earthy luxury' },
        { name: 'BLACKCURRANT LIQUEUR', origin: 'Burgundy cassis absolute', facet: 'Dark vinous' },
      ],
      heart: [
        { name: 'AGED MARTINIQUE RUM', origin: 'Oak cask aged spirit extract', facet: 'Warm intoxicating' },
        { name: 'DARK INCENSE', origin: 'Hojari silver frankincense', facet: 'Smoky sacred' },
        { name: 'LEATHER GLOVE ACCORD', origin: 'Kidskin glove maceration', facet: 'Intimate supple' },
      ],
      base: [
        { name: 'MADAGASCAR VANILLA POD', origin: '24-month sun-cured bourbon', facet: 'Smoked woody gourmand' },
        { name: 'ROASTED TONKA BEAN', origin: 'Amazonian wild bean', facet: 'Toasted almond' },
        { name: 'EBONY WOOD', origin: 'Salvaged dark heartwood', facet: 'Dense monolithic' },
      ],
    },
    variants: [
      { id: 'ndm-50', sku: 'AP-NDM-050', volume: '50ML / 1.7 FL. OZ.', priceMinor: 30000, inventoryQuantity: 15 },
      { id: 'ndm-100', sku: 'AP-NDM-100', volume: '100ML / 3.4 FL. OZ.', priceMinor: 41000, inventoryQuantity: 34 },
      { id: 'ndm-250', sku: 'AP-NDM-250', volume: '250ML ATELIER FLACON', priceMinor: 70000, inventoryQuantity: 5 },
    ],
    images: [
      imgGialloCorsa,
      imgCuoioLeather,
      imgHeroSpotlight
    ],
    featured: false,
  },
  {
    id: 'vento-di-scandiano',
    slug: 'vento-di-scandiano',
    name: 'VENTO DI SCANDIANO',
    subname: 'EAU DE PARFUM',
    collection: 'EDIZIONE SPECIALE',
    concentration: 'EAU DE PARFUM',
    olfactoryFamily: 'CITRUS & AERODYNAMIC',
    intensity: 3,
    releaseYear: '2026',
    tagline: 'SPARKLING NEROLI, ADRIATIC SEA SALT, AND SUN-BAKED DRIFTWOOD.',
    description: 'An open-top velocity rush across the hills of Emilia. Bitter green neroli blossoms and sunlit cedro fruit salted by Adriatic sea breezes, grounded on bleached coastal cypress.',
    inspiration: 'A dawn sprint through the winding passes between Bologna and the Adriatic coast with the roof removed.',
    masterPerfumer: 'Nathalie Lorson',
    flaconSpec: {
      glass: 'Emerald-tinged smoked crystal with exposed metallic straw',
      cap: 'Brushed matte champagne aluminum cap',
      weight: '520 grams net weight',
      atomizer: 'Wide aperture maritime mist atomizer'
    },
    pyramid: {
      top: [
        { name: 'CALABRIAN CEDRO', origin: 'Sun-ripened citrus zest', facet: 'Dry sparkling' },
        { name: 'BITTER NEROLI BLOSSOM', origin: 'Orange tree steam extraction', facet: 'Green citrus floral' },
        { name: 'ROSEMARY OFFICINALIS', origin: 'Apennine limestone cliff pick', facet: 'Herbal camphor' },
      ],
      heart: [
        { name: 'ADRIATIC SALT AIR', origin: 'Saline marine extraction', facet: 'Crisp oceanic' },
        { name: 'PETITGRAIN BIGARADE', origin: 'Citrus aurantium twig distillation', facet: 'Woody green' },
        { name: 'WHITE SAGE', origin: 'Mediterranean scrubland harvest', facet: 'Pristine aromatic' },
      ],
      base: [
        { name: 'BLEACHED CYPRESS', origin: 'Coastal wood extraction', facet: 'Sun-baked timber' },
        { name: 'MINERAL AMBER', origin: 'Dry coastal amber accord', facet: 'Warm solar sand' },
        { name: 'CRYSTAL MUSK', origin: 'Transparent skin radiance', facet: 'Clean breezy tenacity' },
      ],
    },
    variants: [
      { id: 'vds-50', sku: 'AP-VDS-050', volume: '50ML / 1.7 FL. OZ.', priceMinor: 24000, inventoryQuantity: 28 },
      { id: 'vds-100', sku: 'AP-VDS-100', volume: '100ML / 3.4 FL. OZ.', priceMinor: 33000, inventoryQuantity: 40 },
      { id: 'vds-250', sku: 'AP-VDS-250', volume: '250ML ATELIER FLACON', priceMinor: 55000, inventoryQuantity: 7 },
    ],
    images: [
      imgAeroBlanc,
      imgCarbonVapor,
      imgHeroSpotlight
    ],
    featured: false,
  }
];

export const SHIPPING_METHODS: ShippingMethod[] = [
  {
    id: 'white-glove',
    name: 'ATELIER WHITE GLOVE COURIER',
    description: 'Temperature-controlled bespoke dispatch with personal courier appointment and hand-delivery in serialized protective flight casing.',
    priceMinor: 4500,
    deliveryEstimate: '1–2 BUSINESS DAYS',
  },
  {
    id: 'express-secure',
    name: 'COMPLIMENTARY SECURE DISPATCH',
    description: 'Signature-required armored delivery in custom shock-absorbing carbon-styled packaging. Included on all orders over $200.',
    priceMinor: 0,
    deliveryEstimate: '2–4 BUSINESS DAYS',
  },
];

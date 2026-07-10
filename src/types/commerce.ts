export interface FragranceNote {
  name: string;
  origin: string;
  facet?: string;
}

export interface OlfactoryPyramid {
  top: FragranceNote[];
  heart: FragranceNote[];
  base: FragranceNote[];
}

export interface ProductVariant {
  id: string;
  sku: string;
  volume: string; // e.g., "50ML / 1.7 FL. OZ.", "100ML / 3.4 FL. OZ.", "250ML ATELIER DECANTER"
  priceMinor: number; // Integer cents (e.g. 38000 for $380.00)
  inventoryQuantity: number;
}

export type OlfactoryFamily = 
  | 'LEATHER & SMOKE'
  | 'CITRUS & AERODYNAMIC'
  | 'WOODY AMBER'
  | 'FLORAL DARK';

export interface FragranceProduct {
  id: string;
  slug: string;
  name: string;
  subname: string;
  collection: 'EDIZIONE SPECIALE' | 'COLLEZIONE METALLI' | 'SERIE CORSA';
  concentration: 'EXTRAIT DE PARFUM' | 'EAU DE PARFUM';
  olfactoryFamily: OlfactoryFamily;
  intensity: 1 | 2 | 3 | 4 | 5;
  releaseYear: string;
  tagline: string;
  description: string;
  inspiration: string;
  masterPerfumer: string;
  flaconSpec: {
    glass: string;
    cap: string;
    weight: string;
    atomizer: string;
  };
  pyramid: OlfactoryPyramid;
  variants: ProductVariant[];
  images: string[];
  featured: boolean;
}

export interface CartItem {
  lineId: string;
  productId: string;
  variantId: string;
  name: string;
  concentration: string;
  volume: string;
  unitPriceMinor: number;
  quantity: number;
  image: string;
}

export interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  priceMinor: number;
  deliveryEstimate: string;
}

export interface CheckoutFormState {
  email: string;
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
  shippingMethodId: string;
  cardName: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
  giftNote?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  createdAt: string;
  items: CartItem[];
  shippingAddress: {
    name: string;
    line1: string;
    line2?: string;
    city: string;
    postalCode: string;
    country: string;
  };
  shippingMethod: ShippingMethod;
  subtotalMinor: number;
  shippingMinor: number;
  taxMinor: number;
  totalMinor: number;
  status: 'CONFIRMED' | 'PREPARING_SHIPMENT' | 'EN_ROUTE' | 'DELIVERED';
}

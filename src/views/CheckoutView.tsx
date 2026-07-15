import React, { useState } from 'react';
import { useCart } from '../lib/cartStore';
import { SHIPPING_METHODS } from '../data/fragrances';
import { formatMoney } from '../lib/formatters';
import { GialloButton } from '../components/ui/GialloButton';
import { ArrowLeft, ShieldCheck, CheckCircle2, Lock, Sparkles } from 'lucide-react';
import { Order, ShippingMethod } from '../types/commerce';

interface CheckoutViewProps {
  onBackToShop: () => void;
  onNavigateHome: () => void;
}

export const CheckoutView: React.FC<CheckoutViewProps> = ({
  onBackToShop,
  onNavigateHome,
}) => {
  const { items, subtotalMinor, clearCart } = useCart();

  const [selectedShipping, setSelectedShipping] = useState<ShippingMethod>(
    SHIPPING_METHODS[1] // Complimentary
  );

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    postalCode: '',
    country: 'United States',
    phone: '',
    cardName: '',
    cardNumber: '4242 •••• •••• 4242',
    cardExpiry: '12/28',
    cardCvc: '888',
    giftNote: '',
  });

  const [confirmedOrder, setConfirmedOrder] = useState<Order | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Tax calculation (8% estimated for order demonstration)
  const taxMinor = Math.round(subtotalMinor * 0.08);
  const totalMinor = subtotalMinor + selectedShipping.priceMinor + taxMinor;

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      const orderNum = `AP-${Math.floor(100000 + Math.random() * 900000)}`;
      const order: Order = {
        id: `ord_${Date.now()}`,
        orderNumber: orderNum,
        createdAt: new Date().toISOString(),
        items: [...items],
        shippingAddress: {
          name: `${formData.firstName} ${formData.lastName}`.trim() || 'Valued Client',
          line1: formData.addressLine1 || '100 Automotive Blvd',
          line2: formData.addressLine2,
          city: formData.city || 'Sant’Agata',
          postalCode: formData.postalCode || '40019',
          country: formData.country,
        },
        shippingMethod: selectedShipping,
        subtotalMinor,
        shippingMinor: selectedShipping.priceMinor,
        taxMinor,
        totalMinor,
        status: 'CONFIRMED',
      };

      setConfirmedOrder(order);
      clearCart();
      setIsProcessing(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1200);
  };

  // SUCCESS / CONFIRMATION VIEW
  if (confirmedOrder) {
    return (
      <div className="bg-[#202020] text-[#ffffff] min-h-screen pt-28 pb-32">
        <div className="max-w-[800px] mx-auto px-6 space-y-12">
          {/* Header Receipt */}
          <div className="p-8 md:p-12 bg-[#181818] border border-[#ffc000] text-center space-y-6">
            <div className="w-16 h-16 bg-[#ffc000]/10 border border-[#ffc000] mx-auto flex items-center justify-center text-[#ffc000]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="font-lambo text-[12px] text-[#ffc000] tracking-[0.023em]">
                ATELIER ACQUISITION VERIFIED
              </span>
              <h1 className="font-lambo text-[36px] md:text-[48px] uppercase">
                ORDER {confirmedOrder.orderNumber}
              </h1>
              <p className="font-sans text-[14px] text-[#7d7d7d]">
                Your flacon reservation has been registered at Sant’Agata Bolognese. A formal certificate of provenance and tracking code are being prepared.
              </p>
            </div>

            {/* Timeline */}
            <div className="pt-6 border-t border-[#313131] grid grid-cols-3 gap-2 text-center">
              <div className="space-y-1">
                <div className="w-2 h-2 rounded-full bg-[#ffc000] mx-auto" />
                <p className="font-lambo text-[11px] text-[#ffc000]">ORDER CONFIRMED</p>
                <p className="text-[10px] text-[#7d7d7d]">JUST NOW</p>
              </div>
              <div className="space-y-1">
                <div className="w-2 h-2 rounded-full bg-[#494949] mx-auto" />
                <p className="font-lambo text-[11px] text-[#7d7d7d]">SERIAL MACERATION</p>
                <p className="text-[10px] text-[#494949]">PREPARING</p>
              </div>
              <div className="space-y-1">
                <div className="w-2 h-2 rounded-full bg-[#494949] mx-auto" />
                <p className="font-lambo text-[11px] text-[#7d7d7d]">TEMPERATURE DISPATCH</p>
                <p className="text-[10px] text-[#494949]">ESTIMATED 24-48H</p>
              </div>
            </div>
          </div>

          {/* Itemized Order Breakdown */}
          <div className="p-8 bg-[#181818] border border-[#313131] space-y-6">
            <h3 className="font-lambo text-[18px] uppercase border-b border-[#313131] pb-3">
              RESERVED FLACONS & EXTRACTS
            </h3>

            <div className="space-y-4">
              {confirmedOrder.items.map((item) => (
                <div key={item.lineId} className="flex gap-4 items-center justify-between">
                  <div className="flex gap-4 items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-18 object-cover bg-[#000000] border border-[#313131]"
                    />
                    <div>
                      <p className="font-lambo text-[16px] text-[#ffffff] uppercase">{item.name}</p>
                      <p className="text-[12px] text-[#7d7d7d] font-mono">
                        {item.volume} · QTY: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-[15px] text-[#ffffff]">
                    {formatMoney(item.unitPriceMinor * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="pt-6 border-t border-[#313131] space-y-2 text-[13px] font-sans">
              <div className="flex justify-between text-[#7d7d7d]">
                <span>ATELIER SUBTOTAL</span>
                <span className="font-mono text-[#ffffff]">{formatMoney(confirmedOrder.subtotalMinor)}</span>
              </div>
              <div className="flex justify-between text-[#7d7d7d]">
                <span>COURIER: {confirmedOrder.shippingMethod.name}</span>
                <span className="font-mono text-[#ffc000]">
                  {confirmedOrder.shippingMinor === 0 ? 'COMPLIMENTARY' : formatMoney(confirmedOrder.shippingMinor)}
                </span>
              </div>
              <div className="flex justify-between text-[#7d7d7d]">
                <span>ESTIMATED TAX</span>
                <span className="font-mono text-[#ffffff]">{formatMoney(confirmedOrder.taxMinor)}</span>
              </div>
              <div className="pt-3 border-t border-[#313131] flex justify-between font-lambo text-[20px] text-[#ffffff]">
                <span>TOTAL SETTLED</span>
                <span className="font-mono text-[#ffc000] text-[22px]">
                  {formatMoney(confirmedOrder.totalMinor)}
                </span>
              </div>
            </div>

            {/* Destination Address */}
            <div className="pt-4 border-t border-[#313131] text-[12px] font-sans text-[#7d7d7d]">
              <p className="font-lambo text-[#ffffff] text-[13px] mb-1">DISPATCH DESTINATION:</p>
              <p>{confirmedOrder.shippingAddress.name}</p>
              <p>{confirmedOrder.shippingAddress.line1} {confirmedOrder.shippingAddress.line2}</p>
              <p>{confirmedOrder.shippingAddress.city}, {confirmedOrder.shippingAddress.postalCode}</p>
              <p>{confirmedOrder.shippingAddress.country}</p>
            </div>
          </div>

          <div className="text-center pt-4">
            <GialloButton onClick={onNavigateHome}>
              RETURN TO ATELIER SHOWROOM
            </GialloButton>
          </div>
        </div>
      </div>
    );
  }

  // EMPTY BAG CHECKOUT GUARD
  if (items.length === 0) {
    return (
      <div className="bg-[#202020] text-[#ffffff] min-h-screen pt-32 pb-32 flex items-center justify-center">
        <div className="p-12 bg-[#181818] border border-[#313131] text-center space-y-6 max-w-md">
          <h2 className="font-lambo text-[28px] uppercase">YOUR BAG CONTAINS NO RESERVATIONS</h2>
          <p className="text-[13px] text-[#7d7d7d] font-sans">
            Please select your desired flacons before proceeding to checkout.
          </p>
          <GialloButton onClick={onBackToShop} className="w-full justify-center">
            BROWSE COLLEZIONE OLFATTIVA
          </GialloButton>
        </div>
      </div>
    );
  }

  // CHECKOUT FLOW
  return (
    <div className="bg-[#202020] text-[#ffffff] min-h-screen pt-24 pb-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-12">
        {/* Top Breadcrumb & Step Info */}
        <div className="flex items-center justify-between border-b border-[#313131] pb-6">
          <button
            onClick={onBackToShop}
            className="inline-flex items-center gap-2 font-lambo text-[12px] text-[#7d7d7d] hover:text-[#ffffff] bg-transparent border-none cursor-pointer tracking-[0.023em]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO FLACON CATALOG</span>
          </button>
          <div className="flex items-center gap-2 font-lambo text-[11px] text-[#ffc000]">
            <Lock className="w-3.5 h-3.5" />
            <span>256-BIT ENCRYPTED ATELIER TERMINAL</span>
          </div>
        </div>

        {/* 2-Column Checkout Layout */}
        <form onSubmit={handleCompleteOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Form: Client Details & Shipping (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Client Contact */}
            <div className="p-8 bg-[#181818] border border-[#313131] space-y-6">
              <h2 className="font-lambo text-[22px] uppercase text-[#ffffff] border-b border-[#313131] pb-3">
                01 · CLIENT IDENTITY & NOTIFICATIONS
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5 md:col-span-2">
                  <label className="font-lambo text-[11px] text-[#7d7d7d]">EMAIL ADDRESS (FOR PROVENANCE CERTIFICATE)</label>
                  <input
                    type="email"
                    required
                    placeholder="client@automobili.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#202020] border border-[#494949] font-lambo text-[13px] text-[#ffffff] px-4 py-3 focus:outline-none focus:border-[#ffc000]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-lambo text-[11px] text-[#7d7d7d]">FIRST NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="LEO"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-[#202020] border border-[#494949] font-lambo text-[13px] text-[#ffffff] px-4 py-3 focus:outline-none focus:border-[#ffc000]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-lambo text-[11px] text-[#7d7d7d]">LAST NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="FERRARI"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-[#202020] border border-[#494949] font-lambo text-[13px] text-[#ffffff] px-4 py-3 focus:outline-none focus:border-[#ffc000]"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Shipping Destination */}
            <div className="p-8 bg-[#181818] border border-[#313131] space-y-6">
              <h2 className="font-lambo text-[22px] uppercase text-[#ffffff] border-b border-[#313131] pb-3">
                02 · DISPATCH DESTINATION
              </h2>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="font-lambo text-[11px] text-[#7d7d7d]">STREET ADDRESS</label>
                  <input
                    type="text"
                    required
                    placeholder="742 EVERGREEN TERRACE"
                    value={formData.addressLine1}
                    onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
                    className="w-full bg-[#202020] border border-[#494949] font-lambo text-[13px] text-[#ffffff] px-4 py-3 focus:outline-none focus:border-[#ffc000]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-lambo text-[11px] text-[#7d7d7d]">APARTMENT, SUITE, OR VILLA (OPTIONAL)</label>
                  <input
                    type="text"
                    placeholder="PENTHOUSE B"
                    value={formData.addressLine2}
                    onChange={(e) => setFormData({ ...formData, addressLine2: e.target.value })}
                    className="w-full bg-[#202020] border border-[#494949] font-lambo text-[13px] text-[#ffffff] px-4 py-3 focus:outline-none focus:border-[#ffc000]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-lambo text-[11px] text-[#7d7d7d]">CITY</label>
                    <input
                      type="text"
                      required
                      placeholder="NEW YORK"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#202020] border border-[#494949] font-lambo text-[13px] text-[#ffffff] px-4 py-3 focus:outline-none focus:border-[#ffc000]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-lambo text-[11px] text-[#7d7d7d]">POSTAL CODE</label>
                    <input
                      type="text"
                      required
                      placeholder="10021"
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="w-full bg-[#202020] border border-[#494949] font-lambo text-[13px] text-[#ffffff] px-4 py-3 focus:outline-none focus:border-[#ffc000]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-lambo text-[11px] text-[#7d7d7d]">COUNTRY</label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full bg-[#202020] border border-[#494949] font-lambo text-[13px] text-[#ffffff] px-4 py-3 focus:outline-none focus:border-[#ffc000]"
                    >
                      <option value="United States">UNITED STATES</option>
                      <option value="Italy">ITALY</option>
                      <option value="United Kingdom">UNITED KINGDOM</option>
                      <option value="Germany">GERMANY</option>
                      <option value="France">FRANCE</option>
                      <option value="Switzerland">SWITZERLAND</option>
                      <option value="Japan">JAPAN</option>
                      <option value="United Arab Emirates">UNITED ARAB EMIRATES</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Courier Selection */}
            <div className="p-8 bg-[#181818] border border-[#313131] space-y-4">
              <h2 className="font-lambo text-[22px] uppercase text-[#ffffff] border-b border-[#313131] pb-3">
                03 · TEMPERATURE-REGULATED COURIER
              </h2>

              <div className="space-y-3">
                {SHIPPING_METHODS.map((sm) => (
                  <label
                    key={sm.id}
                    className={`flex items-start gap-4 p-4 border cursor-pointer transition-colors ${
                      selectedShipping.id === sm.id
                        ? 'border-[#ffc000] bg-[#202020]'
                        : 'border-[#313131] hover:border-[#494949]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="shipping"
                      checked={selectedShipping.id === sm.id}
                      onChange={() => setSelectedShipping(sm)}
                      className="mt-1 accent-[#ffc000]"
                    />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-lambo text-[15px] text-[#ffffff] uppercase">{sm.name}</span>
                        <span className="font-mono text-[14px] text-[#ffc000]">
                          {sm.priceMinor === 0 ? 'COMPLIMENTARY' : formatMoney(sm.priceMinor)}
                        </span>
                      </div>
                      <p className="text-[12px] text-[#7d7d7d] font-sans">{sm.description}</p>
                      <p className="text-[10px] font-mono text-[#7d7d7d]">TRANSIT TIME: {sm.deliveryEstimate}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Step 4: Encrypted Payment Verification */}
            <div className="p-8 bg-[#181818] border border-[#313131] space-y-6">
              <div className="flex items-center justify-between border-b border-[#313131] pb-3">
                <h2 className="font-lambo text-[22px] uppercase text-[#ffffff]">
                  04 · SETTLEMENT AUTHENTICATION
                </h2>
                <span className="text-[11px] font-mono text-[#ffc000] bg-[#202020] px-2.5 py-0.5 border border-[#ffc000]/30">
                  DEVELOPMENT TEST MODE
                </span>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="font-lambo text-[11px] text-[#7d7d7d]">CARDHOLDER NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="NAME AS WRITTEN ON CARD"
                    value={formData.cardName}
                    onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
                    className="w-full bg-[#202020] border border-[#494949] font-lambo text-[13px] text-[#ffffff] px-4 py-3 focus:outline-none focus:border-[#ffc000]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2 space-y-1.5">
                    <label className="font-lambo text-[11px] text-[#7d7d7d]">CARD NUMBER</label>
                    <input
                      type="text"
                      required
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      className="w-full bg-[#202020] border border-[#494949] font-mono text-[13px] text-[#ffffff] px-4 py-3 focus:outline-none focus:border-[#ffc000]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-lambo text-[11px] text-[#7d7d7d]">EXPIRY / CVC</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        required
                        value={formData.cardExpiry}
                        onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })}
                        className="w-1/2 bg-[#202020] border border-[#494949] font-mono text-[13px] text-[#ffffff] p-3 text-center focus:outline-none focus:border-[#ffc000]"
                      />
                      <input
                        type="password"
                        required
                        maxLength={4}
                        value={formData.cardCvc}
                        onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                        className="w-1/2 bg-[#202020] border border-[#494949] font-mono text-[13px] text-[#ffffff] p-3 text-center focus:outline-none focus:border-[#ffc000]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-[#7d7d7d] font-sans">
                Safe demo transaction. No actual credit card charge is incurred. Live Stripe integration connects seamlessly when backend webhook secrets are supplied.
              </p>
            </div>
          </div>

          {/* Right Summary: Sticky Flacon Breakdown (5 Cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <div className="p-8 bg-[#181818] border border-[#313131] space-y-6">
              <h3 className="font-lambo text-[20px] uppercase border-b border-[#313131] pb-3 text-[#ffffff]">
                ORDER SPECIFICATION
              </h3>

              <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
                {items.map((item) => (
                  <div key={item.lineId} className="flex gap-4 items-center justify-between pb-3 border-b border-[#313131]">
                    <div className="flex gap-3 items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-16 object-cover bg-[#000000] border border-[#313131] shrink-0"
                      />
                      <div>
                        <p className="font-lambo text-[15px] text-[#ffffff] uppercase leading-tight">{item.name}</p>
                        <p className="text-[11px] text-[#7d7d7d] font-mono">{item.volume} · QTY: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-mono text-[14px] text-[#ffffff]">
                      {formatMoney(item.unitPriceMinor * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Complimentary Privileges */}
              <div className="p-3.5 bg-[#202020] border border-[#ffc000]/30 space-y-1 text-[11px] font-sans">
                <div className="flex items-center gap-1.5 text-[#ffc000] font-lambo">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>INCLUDED ATELIER PRIVILEGES</span>
                </div>
                <p className="text-[#7d7d7d]">
                  2x Complimentary 2ml Discovery Vials · Monolithic Obsidian Casing · Armored Courier Dispatch
                </p>
              </div>

              {/* Totals */}
              <div className="space-y-2 text-[13px] font-sans pt-2">
                <div className="flex justify-between text-[#7d7d7d] font-lambo">
                  <span>ATELIER SUBTOTAL</span>
                  <span className="font-mono text-[#ffffff]">{formatMoney(subtotalMinor)}</span>
                </div>
                <div className="flex justify-between text-[#7d7d7d] font-lambo">
                  <span>COURIER METHOD</span>
                  <span className="font-mono text-[#ffc000]">
                    {selectedShipping.priceMinor === 0 ? 'COMPLIMENTARY' : formatMoney(selectedShipping.priceMinor)}
                  </span>
                </div>
                <div className="flex justify-between text-[#7d7d7d] font-lambo">
                  <span>ESTIMATED IMPORT & LOCAL TAX</span>
                  <span className="font-mono text-[#ffffff]">{formatMoney(taxMinor)}</span>
                </div>
                <div className="pt-3 border-t border-[#313131] flex justify-between font-lambo text-[22px] text-[#ffffff]">
                  <span>SETTLEMENT TOTAL</span>
                  <span className="font-mono text-[#ffc000] text-[24px]">
                    {formatMoney(totalMinor)}
                  </span>
                </div>
              </div>

              {/* The Dominant Giallo Button */}
              <GialloButton
                type="submit"
                disabled={isProcessing}
                className="w-full justify-center h-[54px]"
              >
                {isProcessing ? 'AUTHORIZING RESERVATION...' : 'AUTHORIZE ACQUISITION'}
              </GialloButton>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#7d7d7d] font-sans">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ffc000]" />
                <span>30-Day Sealed Returns Guarantee · Direct From Sant’Agata</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

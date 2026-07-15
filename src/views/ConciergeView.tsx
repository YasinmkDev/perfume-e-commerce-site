import React, { useState } from 'react';
import { GialloButton } from '../components/ui/GialloButton';
import { ShieldCheck, Truck, RefreshCw, Mail, Phone } from 'lucide-react';

export const ConciergeView: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serial: '',
    inquiryType: 'ORDER & SHIPPING',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#202020] text-[#ffffff] min-h-screen pt-24 pb-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-16">
        {/* Header */}
        <div className="border-b border-[#313131] pb-10 space-y-4 max-w-2xl">
          <p className="font-lambo text-[12px] text-[#ffc000] tracking-[0.023em]">
            CLIENT SERVICES & OLFACTORY CONCIERGE
          </p>
          <h1 className="font-lambo text-[40px] md:text-[60px] leading-tight uppercase">
            WHITE GLOVE CARE & ATELIER PRIVILEGES
          </h1>
          <p className="font-sans text-[14px] text-[#7d7d7d]">
            Direct communication with our Sant’Agata Bolognese client liaisons.
          </p>
        </div>

        {/* 3 Concierge Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-[#181818] border border-[#313131] space-y-4">
            <Truck className="w-6 h-6 text-[#ffc000]" />
            <h3 className="font-lambo text-[22px] uppercase">
              ARMORED DISPATCH
            </h3>
            <p className="text-[13px] text-[#7d7d7d] font-sans leading-relaxed">
              Every shipment is sealed in specialized thermal insulation to ensure fragrance oils are never exposed to temperature spikes or ultraviolet radiation during transit.
            </p>
          </div>

          <div className="p-8 bg-[#181818] border border-[#313131] space-y-4">
            <ShieldCheck className="w-6 h-6 text-[#ffc000]" />
            <h3 className="font-lambo text-[22px] uppercase">
              TEST-BEFORE-UNSEALING
            </h3>
            <p className="text-[13px] text-[#7d7d7d] font-sans leading-relaxed">
              Your parcel includes two complimentary 2ml spray vials. Wear the scent on skin for 48 hours. If unsatisfied, return the unopened full-size flacon in original security seals for a full refund.
            </p>
          </div>

          <div className="p-8 bg-[#181818] border border-[#313131] space-y-4">
            <RefreshCw className="w-6 h-6 text-[#ffc000]" />
            <h3 className="font-lambo text-[22px] uppercase">
              LIFETIME ATELIER REFILL
            </h3>
            <p className="text-[13px] text-[#7d7d7d] font-sans leading-relaxed">
              Your 580g obsidian flacon is built to endure for decades. Bring or ship your empty flacon to our atelier for serialized re-maceration and nitrogen pressurization at 40% below retail.
            </p>
          </div>
        </div>

        {/* Contact Desk Form & Immediate Support */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-[#313131] pt-16">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="font-lambo text-[12px] text-[#ffc000]">DIRECT COMMUNICATIONS</span>
              <h2 className="font-lambo text-[32px] uppercase">ATELIER LIAISON DESK</h2>
              <p className="text-[13px] text-[#7d7d7d] font-sans leading-relaxed">
                Whether requesting private vintage allocations, tracking temperature-controlled courier delivery, or inquiring about flacon refills, our team answers within 4 business hours.
              </p>
            </div>

            <div className="space-y-4 font-mono text-[13px]">
              <div className="flex items-center gap-3 text-[#f5f5f5]">
                <Mail className="w-4 h-4 text-[#ffc000]" />
                <span>concierge@automobiliparfums.com</span>
              </div>
              <div className="flex items-center gap-3 text-[#f5f5f5]">
                <Phone className="w-4 h-4 text-[#ffc000]" />
                <span>+39 051 681 7611 (Bologna, Italy)</span>
              </div>
              <div className="text-[12px] text-[#7d7d7d] pt-2">
                Hours: Mon – Sat 09:00 – 19:00 Central European Time (CET)
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#181818] p-8 md:p-10 border border-[#313131]">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <span className="font-mono text-[#ffc000] text-[12px] border border-[#ffc000] px-3 py-1">
                  INQUIRY LOGGED #AP-{Math.floor(10000 + Math.random() * 90000)}
                </span>
                <h3 className="font-lambo text-[28px] uppercase">
                  MESSAGE TRANSMITTED TO SANT’AGATA
                </h3>
                <p className="text-[13px] text-[#7d7d7d] font-sans max-w-sm mx-auto">
                  A personal client concierge will review your transmission and reply to {formData.email}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="font-lambo text-[12px] text-[#ffc000] underline bg-transparent border-none cursor-pointer pt-4"
                >
                  TRANSMIT ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-lambo text-[20px] uppercase border-b border-[#313131] pb-3">
                  CLIENT INQUIRY TRANSMISSION
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-lambo text-[11px] text-[#7d7d7d]">CLIENT FULL NAME</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. ALESSANDRO MORETTI"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#202020] border border-[#494949] font-lambo text-[13px] text-[#ffffff] px-4 py-3 focus:outline-none focus:border-[#ffc000]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-lambo text-[11px] text-[#7d7d7d]">CLIENT EMAIL ADDRESS</label>
                    <input
                      type="email"
                      required
                      placeholder="client@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#202020] border border-[#494949] font-lambo text-[13px] text-[#ffffff] px-4 py-3 focus:outline-none focus:border-[#ffc000]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-lambo text-[11px] text-[#7d7d7d]">INQUIRY SUBJECT</label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full bg-[#202020] border border-[#494949] font-lambo text-[13px] text-[#ffffff] px-4 py-3 focus:outline-none focus:border-[#ffc000]"
                    >
                      <option value="ORDER & SHIPPING">TEMPERATURE DISPATCH & ORDER STATUS</option>
                      <option value="FLACON REFILL">ATELIER FLACON REFILL APPOINTMENT</option>
                      <option value="PRIVATE ALLOCATION">PRIVATE VINTAGE COFFRET RESERVATION</option>
                      <option value="AUTHENTICATION">SERIAL CERTIFICATE AUTHENTICATION</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-lambo text-[11px] text-[#7d7d7d]">FLACON SERIAL NUMBER (OPTIONAL)</label>
                    <input
                      type="text"
                      placeholder="e.g. AP-GC-2026-084"
                      value={formData.serial}
                      onChange={(e) => setFormData({ ...formData, serial: e.target.value })}
                      className="w-full bg-[#202020] border border-[#494949] font-lambo text-[13px] text-[#ffffff] px-4 py-3 focus:outline-none focus:border-[#ffc000]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-lambo text-[11px] text-[#7d7d7d]">MESSAGE FOR THE CONCIERGE</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="PROVIDE YOUR DETAILS OR BESPOKE DELIVERY PREFERENCES..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#202020] border border-[#494949] font-lambo text-[13px] text-[#ffffff] p-4 focus:outline-none focus:border-[#ffc000]"
                  />
                </div>

                <GialloButton type="submit" className="w-full justify-center">
                  TRANSMIT TO SANT’AGATA CONCIERGE
                </GialloButton>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

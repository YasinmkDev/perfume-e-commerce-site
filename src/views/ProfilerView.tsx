import React, { useState } from 'react';
import { FRAGRANCES } from '../data/fragrances';
import { GialloButton } from '../components/ui/GialloButton';
import { OutlinedButton } from '../components/ui/OutlinedButton';
import { formatMoney } from '../lib/formatters';
import { Sparkles, RotateCcw } from 'lucide-react';

interface ProfilerViewProps {
  onNavigateProduct: (slug: string) => void;
}

export const ProfilerView: React.FC<ProfilerViewProps> = ({ onNavigateProduct }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    environment: '',
    material: '',
    presence: '',
  });

  const questions = [
    {
      id: 'environment',
      title: '01 · WHAT IS YOUR DEFINING ENVIRONMENT?',
      subtitle: 'CHOOSE THE DRIVING ATMOSPHERE THAT AMPLIFIES YOUR PULSE.',
      options: [
        { label: 'MIDNIGHT AUTOSTRADA ACCELERATION', value: 'giallo-corsa-extrait', desc: 'High-speed darkness, searing asphalt, and cockpit spotlights.' },
        { label: 'AUTOCLAVE RACING WORKSHOP', value: 'carbon-fibre-vapor', desc: 'Precision metallic instruments, raw resin, and weight reduction.' },
        { label: 'HISTORIC TUSCAN SADDLERY', value: 'cuoio-di-sant-agata', desc: 'Full-grain leather workshops, aged hides, and heritage craft.' },
        { label: 'HIGH-ALTITUDE ALPINE PASS', value: 'aero-blanc-pur', desc: 'Sub-zero mountain air, ice-cold granite, and pure clarity.' },
      ],
    },
    {
      id: 'material',
      title: '02 · WHICH TACTILE TEXTURE CALLS TO YOU?',
      subtitle: 'SELECT THE SENSORY ACCORD YOU WISH TO EMIT.',
      options: [
        { label: 'KASHMIR SAFFRON & SMOKED BIRCH TAR', value: 'giallo-corsa-extrait', desc: 'A volcanic burst of spicy heat and dark asphalt smoke.' },
        { label: 'DRY CARBON FIBRE & CRUSHED CARDAMOM', value: 'carbon-fibre-vapor', desc: 'Crisp aromatic spice over an architectural cedar lattice.' },
        { label: 'FULL-GRAIN LEATHER & FLORENTINE IRIS', value: 'cuoio-di-sant-agata', desc: 'Velvety suede butter colliding with raw masculine hide.' },
        { label: 'CRYOGENIC ALDEHYDES & FROSTED OLIBANUM', value: 'aero-blanc-pur', desc: 'Clean, razor-sharp aerodynamic freshness.' },
      ],
    },
    {
      id: 'presence',
      title: '03 · DESIRED SILLAGE INTENSITY?',
      subtitle: 'HOW COMMANDING SHOULD YOUR OLFACTORY PRESENCE BE?',
      options: [
        { label: 'MAXIMUM SILLAGE (32% EXTRAIT PURITY)', value: 'giallo-corsa-extrait', desc: 'Uncompromising 18-hour projection that commands the room.' },
        { label: 'TACTILE INTIMATE PRESENCE (EAU DE PARFUM)', value: 'carbon-fibre-vapor', desc: 'A sophisticated second-skin sillage that invites closeness.' },
        { label: 'HEAVY ARTISANAL WEIGHT (620G FLACON)', value: 'cuoio-di-sant-agata', desc: 'Deep, rich, resinous woods that linger for days.' },
        { label: 'LINEAR PRISTINE TRAIL', value: 'aero-blanc-pur', desc: 'Crisp and energetic from dawn until midnight.' },
      ],
    },
  ];

  const handleSelectOption = (key: string, val: string) => {
    const updated = { ...answers, [key]: val };
    setAnswers(updated);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length); // Results step
    }
  };

  // Determine result
  const matchedSlug = answers.environment || 'giallo-corsa-extrait';
  const matchedProduct = FRAGRANCES.find((f) => f.slug === matchedSlug) || FRAGRANCES[0];

  return (
    <div className="bg-[#202020] text-[#ffffff] min-h-screen pt-28 pb-32">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 border-b border-[#313131] pb-8">
          <p className="font-lambo text-[12px] text-[#ffc000] tracking-[0.023em]">
            SANT’AGATA OLFACTORY PROFILING ENGINE
          </p>
          <h1 className="font-lambo text-[36px] md:text-[54px] leading-tight uppercase">
            FIND YOUR SCENT SIGNATURE
          </h1>
          <p className="font-sans text-[14px] text-[#7d7d7d] max-w-lg mx-auto">
            Our extraits are not created for everyone. Answer three questions to reveal the flacon architected for your chemistry.
          </p>
        </div>

        {/* Steps */}
        {step < questions.length ? (
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="font-lambo text-[11px] text-[#7d7d7d]">
                QUESTION {step + 1} OF {questions.length}
              </span>
              <h2 className="font-lambo text-[26px] md:text-[34px] uppercase text-[#ffffff]">
                {questions[step].title}
              </h2>
              <p className="font-sans text-[13px] text-[#7d7d7d]">
                {questions[step].subtitle}
              </p>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions[step].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectOption(questions[step].id, opt.value)}
                  className="p-6 bg-[#181818] border border-[#313131] hover:border-[#ffc000] text-left cursor-pointer transition-all space-y-2 group"
                >
                  <p className="font-lambo text-[18px] text-[#ffffff] group-hover:text-[#ffc000] uppercase transition-colors">
                    {opt.label}
                  </p>
                  <p className="font-sans text-[12px] text-[#7d7d7d]">
                    {opt.desc}
                  </p>
                </button>
              ))}
            </div>

            {/* Step Pips */}
            <div className="pt-6 flex justify-between items-center text-[12px] font-mono text-[#7d7d7d]">
              <div className="flex gap-2">
                {questions.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-8 h-1 ${idx <= step ? 'bg-[#ffc000]' : 'bg-[#313131]'}`}
                  />
                ))}
              </div>
              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="bg-transparent border-none text-[#7d7d7d] hover:text-[#ffffff] cursor-pointer font-lambo"
                >
                  PREVIOUS
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Match Result View */
          <div className="p-8 md:p-12 bg-[#181818] border border-[#ffc000] space-y-8 animate-fadeIn">
            <div className="flex items-center gap-2 text-[#ffc000] font-lambo text-[12px]">
              <Sparkles className="w-4 h-4" />
              <span>YOUR OLFACTORY MATCH IS CONFIRMED</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 aspect-[3/4] bg-[#000000] border border-[#313131] overflow-hidden">
                <img
                  src={matchedProduct.images[0]}
                  alt={matchedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:col-span-7 space-y-4">
                <span className="font-lambo text-[12px] text-[#ffc000]">
                  {matchedProduct.concentration} · INTENSITY {matchedProduct.intensity}/5
                </span>
                <h2 className="font-lambo text-[38px] md:text-[48px] leading-tight uppercase text-[#ffffff]">
                  {matchedProduct.name}
                </h2>
                <p className="font-lambo text-[14px] text-[#f5f5f5]">
                  {matchedProduct.tagline}
                </p>
                <p className="font-sans text-[13px] text-[#7d7d7d] leading-relaxed">
                  {matchedProduct.description}
                </p>

                <div className="pt-4 border-t border-[#313131] flex flex-wrap items-center gap-4">
                  <GialloButton onClick={() => onNavigateProduct(matchedProduct.slug)}>
                    EXPLORE FLACON ({formatMoney(matchedProduct.variants[1].priceMinor)})
                  </GialloButton>

                  <button
                    onClick={() => {
                      setStep(0);
                      setAnswers({ environment: '', material: '', presence: '' });
                    }}
                    className="inline-flex items-center gap-2 font-lambo text-[12px] text-[#7d7d7d] hover:text-[#ffffff] bg-transparent border-none cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>RETAKE PROFILER</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

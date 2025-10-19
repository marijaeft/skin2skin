import { useState } from 'react';
import StepOne from '../assets/step-1.webp';
import StepTwo from '../assets/step-2.webp';
import StepThree from '../assets/step-3.webp';
import StepFour from '../assets/step-4.webp';
import CleanserTexture from '../assets/cleanser-texture.webp';
import TonerTexture from '../assets/toner-texture.webp';
import SerumTexture from '../assets/serum-texture.webp';
import MoisturizerTexture from '../assets/moisturizer-texture.webp';

export default function Banner() {
  const steps = [
    {
      img: StepOne,
      title: 'Cleanser',
      texture: CleanserTexture,
      description:
        'Start your glow journey by gently cleansing away dirt, oil, and impurities. This step refreshes your skin and creates the perfect canvas for the products that follow.',
    },
    {
      img: StepTwo,
      title: 'Toner',
      texture: TonerTexture,
      description:
        'Balance and rejuvenate your skin with a soothing toner. It tightens pores, restores pH, and preps your face to fully absorb the benefits of your serum and moisturizer.',
    },
    {
      img: StepThree,
      title: 'Serum',
      texture: SerumTexture,
      description:
        'Supercharge your skincare routine with a concentrated serum. Packed with active ingredients, it targets specific concerns like hydration, brightening, and anti-aging for radiant skin.',
    },
    {
      img: StepFour,
      title: 'Moisturizer',
      texture: MoisturizerTexture,
      description:
        'Seal in all the goodness with a nourishing moisturizer. It hydrates, protects the skin barrier, and leaves your face feeling soft, smooth, and glowing all day.',
    },
  ];

  const [modalStep, setModalStep] = useState<number | null>(null);

  return (
    <div className="flex flex-col justify-center py-12">
      <div className="text-center">
        <h1 className="text-2xl lg:text-4xl font-light tracking-widest text-white">
          Embrace the Glow Within.
        </h1>
      </div>

      <div className="flex flex-wrap justify-center lg:flex-nowrap mt-8">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`flex flex-col w-1/2 items-center ${idx === 1 || idx === 2 ? 'lg:mt-26' : ''
              }`}
          >
            <img
              src={step.img}
              alt={step.title}
              className="w-90 lg:w-auto cursor-pointer transform transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] motion-preset-pop"
              onClick={() => setModalStep(idx)}
            />
            <h3 className="text-lg text-gray-300 italic mt-2 tracking-wide">Step {idx + 1}</h3>
            <h2 className="text-lg lg:text-3xl font-semibold text-white uppercase tracking-wider">
              {step.title}
            </h2>
          </div>
        ))}
      </div>

      {modalStep !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          onClick={() => setModalStep(null)}
        >
          <div
            className="relative flex flex-col lg:flex-row w-11/12 max-w-4xl rounded-lg overflow-hidden
    
     motion-scale-in-[0.5]
     motion-translate-x-in-[-25%]
     motion-translate-y-in-[25%]
     motion-opacity-in-[0%]
     motion-rotate-in-[-10deg]
     motion-blur-in-[5px]
     motion-duration-[0.36s]/scale
     motion-duration-[0.53s]/translate
     motion-duration-[0.35s]/opacity
     motion-duration-[0.48s]/rotate
     motion-duration-[0.48s]/blur"
            onClick={(e) => e.stopPropagation()}
          >


            <div className="flex-1 p-6 flex items-center justify-center">
              <p className="text-white text-lg lg:text-2xl font-semibold text-center">
                {steps[modalStep].description}
              </p>
            </div>

            <div className="flex-1 relative">
              <img
                src={steps[modalStep].texture}
                alt={`${steps[modalStep].title} Texture`}
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-mint-green text-gray-900 font-bold py-2 px-4 rounded-3xl shadow-lg hover:scale-105 transition-all motion-preset-focus">
                Choose your {steps[modalStep].title}
              </button>
            </div>

            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold z-10 focus:outline-none"
              onClick={() => setModalStep(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

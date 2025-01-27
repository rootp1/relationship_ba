import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

interface StepsProps {
  currentStep: number;
}

export function Steps({ currentStep }: StepsProps) {
  const steps = [
    'Input Details',
    'View Analysis'
  ];

  return (
    <div className="flex justify-center items-center space-x-4">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div className="flex flex-col items-center">
            {currentStep > index + 1 ? (
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            ) : currentStep === index + 1 ? (
              <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white font-semibold">
                {index + 1}
              </div>
            ) : (
              <Circle className="w-8 h-8 text-gray-300" />
            )}
            <span className="text-sm mt-2 text-gray-600">{step}</span>
          </div>
          {index < steps.length - 1 && (
            <div className="w-20 h-[2px] mx-2 bg-gray-200">
              <div
                className="h-full bg-rose-500 transition-all duration-300"
                style={{
                  width: currentStep > index + 1 ? '100%' : '0%',
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
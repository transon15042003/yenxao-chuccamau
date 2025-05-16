import React, { Fragment } from 'react';

import { cn } from '@/lib/utils';

export interface Step {
  label: string;
  icon?: React.ReactNode;
}

export interface StepperProps {
  direction?: 'horizontal' | 'vertical';
  steps: Step[];
  currentStep: number; // 1-based index
  className?: string;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  className = '',
  direction = 'horizontal'
}) => {
  return (
    <Fragment>
      <div
        className={cn(
          'flex items-center justify-center gap-4 text-typo-2',
          direction === 'horizontal' ? 'flex-row' : 'flex-col',
          className
        )}
      >
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <div className="flex items-center gap-3 flex-col md:flex-row">
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center font-bold transition-colors
                  ${idx + 1 <= currentStep ? 'bg-typo-2 text-white' : 'bg-[#D4D4D4] text-white'}
                `}
              >
                {step.icon || idx + 1}
              </div>

              <span className="mt-1 hidden sm:block">{step.label}</span>
            </div>

            {idx < steps.length - 1 && (
              <div
                className={` transition-colors bg-typo-2 ${
                  direction === 'horizontal' ? 'md:ml-8 h-0.5 w-12' : 'mt-8 w-0.5 h-12'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile labels */}
      <div className="mt-6 flex justify-between text-typo-2 sm:hidden">
        {steps.map((s) => (
          <span key={s.label}>{s.label}</span>
        ))}
      </div>
    </Fragment>
  );
};

export default Stepper;

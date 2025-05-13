import React from 'react';

interface ProgressProps {
  value: number; // current progress value
  max: number; // maximum value
  label?: string; // optional label, e.g., 'Đã bán 150'
}

export const Progress: React.FC<ProgressProps> = ({ value, max, label }) => {
  // Calculate percentage
  const percent = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className="relative w-full h-[18px]">
      <div className="relative w-full h-full bg-[rgba(168,168,168,0.15)] rounded-[20px] overflow-hidden">
        <div
          className="h-full rounded-[20px] bg-secondary-gradient-90 transition-[width] duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
      {label && (
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-xs text-[#333]">
          {label}
        </span>
      )}
    </div>
  );
};

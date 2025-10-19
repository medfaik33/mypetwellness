'use client';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-xl font-bold text-white tracking-tight">
        My Pet Wellness
      </span>
    </div>
  );
}

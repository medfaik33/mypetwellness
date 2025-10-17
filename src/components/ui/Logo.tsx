'use client';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export function Logo({ className = '', iconOnly = false }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
        MyPetWellness
      </span>
    </div>
  );
}

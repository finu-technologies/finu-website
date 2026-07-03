export default function FinULogo({ className = '', variant = 'dark' }) {
  const wordColor = variant === 'dark' ? '#0A0F1C' : '#FFFFFF';
  return (
    <div className={`flex items-baseline gap-1.5 ${className}`}>
      {/* Bare geometric F lettermark in gold — no container */}
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] self-center" fill="none" aria-hidden="true">
        <path
          d="M5 3h14v3.6H8.6v4.5h9v3.6h-9V21H5V3z"
          fill="#D4AF37"
        />
      </svg>
      <div className="flex items-baseline" style={{ letterSpacing: '-0.03em' }}>
        <span className="text-[19px] font-semibold" style={{ color: wordColor }}>Fin</span>
        <span className="text-[19px] font-semibold" style={{ color: '#D4AF37' }}>U</span>
      </div>
    </div>
  );
}

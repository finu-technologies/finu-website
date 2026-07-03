export default function FinULogo({ className = '', variant = 'dark' }) {
  const wordColor = variant === 'dark' ? '#0A0F1C' : '#FFFFFF';
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Clean geometric F mark on dark rounded square, gold on dark */}
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-900">
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" aria-hidden="true">
          <path
            d="M6 4h13v3.2H9.4v4.3h8.2v3.2H9.4V20H6V4z"
            fill="#D4AF37"
          />
        </svg>
      </div>
      <div className="flex items-baseline" style={{ letterSpacing: '-0.03em' }}>
        <span className="text-[19px] font-semibold" style={{ color: wordColor }}>Fin</span>
        <span className="text-[19px] font-semibold" style={{ color: '#D4AF37' }}>U</span>
      </div>
    </div>
  );
}

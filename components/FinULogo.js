export default function FinULogo({ className = '', variant = 'dark' }) {
  const wordColor = variant === 'dark' ? '#0A0F1C' : '#FFFFFF';
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Minimalist mark: two arcs converging into one — evokes split payments merging */}
      <svg viewBox="0 0 28 28" className="w-6 h-6" fill="none" aria-hidden="true">
        <path d="M4 14a10 10 0 0 1 10-10" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M24 14a10 10 0 0 1-10 10" stroke={variant === 'dark' ? '#0A0F1C' : '#FFFFFF'} strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="2" fill="#D4AF37"/>
      </svg>
      <div className="flex items-baseline" style={{ letterSpacing: '-0.03em' }}>
        <span className="text-[19px] font-semibold" style={{ color: wordColor }}>Fin</span>
        <span className="text-[19px] font-semibold" style={{ color: '#D4AF37' }}>U</span>
      </div>
    </div>
  );
}

export default function FinULogo({ className = '', variant = 'dark' }) {
  const wordColor = variant === 'dark' ? '#0A0F1C' : '#FFFFFF';
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex items-center justify-center w-9 h-9 rounded-lg" style={{ background: 'linear-gradient(135deg, #F4D06F 0%, #D4AF37 60%, #B8860B 100%)' }}>
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
          <path d="M15 4h-3.5c-1.933 0-3.5 1.567-3.5 3.5V10H6v3h2v7h3v-7h4v-3h-4V8c0-.552.448-1 1-1H15V4z" fill="#0A0F1C"/>
        </svg>
      </div>
      <div className="flex items-baseline">
        <span className="text-xl font-bold tracking-tight" style={{ color: wordColor, letterSpacing: '-0.02em' }}>Fin</span>
        <span className="text-xl font-bold tracking-tight" style={{ color: '#D4AF37', letterSpacing: '-0.02em' }}>U</span>
      </div>
    </div>
  );
}

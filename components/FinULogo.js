export default function FinULogo({ className = '', variant = 'dark' }) {
  const wordColor = variant === 'dark' ? '#0A0F1C' : '#FFFFFF';
  return (
    <div className={`flex items-baseline ${className}`} style={{ letterSpacing: '-0.03em' }}>
      <span className="text-[20px] font-semibold" style={{ color: wordColor }}>Fin</span>
      <span className="text-[20px] font-semibold" style={{ color: '#D4AF37' }}>U</span>
    </div>
  );
}

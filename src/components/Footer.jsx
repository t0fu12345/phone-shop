export default function Footer({ onNavigate }) {
  return (
    <footer className="w-full mt-section-gap border-t border-outline-variant/60 dark:border-outline-variant/5 py-12 max-w-container-max mx-auto px-gutter">
      <div className="flex flex-col gap-10">
        <p className="font-display text-[32px] sm:text-[44px] leading-none tracking-tight max-w-[28ch] text-primary dark:text-primary-fixed-dim">
          technology, engineered for the luxury experience.
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-baseline pt-6 border-t border-outline-variant/30 dark:border-outline-variant/5 gap-4">
          <div className="flex flex-wrap items-baseline gap-6 text-xs font-medium">
            <span 
              className="font-display text-base font-semibold tracking-tight cursor-pointer hover:text-accent-2 transition-colors" 
              onClick={() => onNavigate('home')}
            >
              luxe mobile
            </span>
            <a 
              className="hover:text-accent-2 cursor-pointer transition-colors text-on-surface-variant/75" 
              onClick={() => onNavigate('category')}
            >
              iphone
            </a>
            <a 
              className="hover:text-accent-2 cursor-pointer transition-colors text-on-surface-variant/75" 
              onClick={() => onNavigate('category')}
            >
              samsung
            </a>
            <a 
              className="hover:text-accent-2 cursor-pointer transition-colors text-on-surface-variant/75" 
              onClick={() => onNavigate('category')}
            >
              xiaomi
            </a>
          </div>
          <span className="text-[11px] font-label tracking-wide text-on-surface-variant/60 uppercase">
            © 2026 luxe mobile · authentic premium devices
          </span>
        </div>
      </div>
    </footer>
  );
}

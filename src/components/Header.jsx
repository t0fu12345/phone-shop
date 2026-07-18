export default function Header({ onNavigate, theme, onToggleTheme }) {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none select-none">
      <nav className="pointer-events-auto flex items-center justify-between w-full max-w-[700px] h-12 px-5 rounded-full border border-outline-variant/60 dark:border-outline-variant/5 bg-surface/75 dark:bg-surface-dim/75 backdrop-blur-md shadow-[0_8px_24px_-12px_rgba(0,0,0,0.18)] transition-all">
        <div className="flex items-center gap-6">
          <span 
            className="font-display text-[17px] font-semibold tracking-tight cursor-pointer hover:text-accent-2 transition-colors" 
            onClick={() => onNavigate('home')}
          >
            luxe mobile
          </span>
          <div className="hidden sm:flex items-center gap-4 text-xs font-medium tracking-wide">
            <a 
              className="hover:text-accent-2 cursor-pointer transition-colors text-on-surface-variant/80" 
              onClick={() => onNavigate('category')}
            >
              iphone
            </a>
            <a 
              className="hover:text-accent-2 cursor-pointer transition-colors text-on-surface-variant/80" 
              onClick={() => onNavigate('category')}
            >
              samsung
            </a>
            <a 
              className="hover:text-accent-2 cursor-pointer transition-colors text-on-surface-variant/80" 
              onClick={() => onNavigate('category')}
            >
              xiaomi
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={onToggleTheme}
            className="p-1.5 hover:bg-surface-container rounded-full transition-colors cursor-pointer flex items-center justify-center text-on-surface-variant"
            aria-label="toggle theme"
          >
            <span className="material-symbols-outlined text-[18px]">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <button 
            className="p-1.5 hover:bg-surface-container rounded-full transition-colors cursor-pointer flex items-center justify-center text-on-surface-variant relative"
            onClick={() => onNavigate('cart')}
            aria-label="cart"
          >
            <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
          </button>
          <button 
            className="p-1.5 hover:bg-surface-container rounded-full transition-colors cursor-pointer flex items-center justify-center text-on-surface-variant"
            aria-label="account"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

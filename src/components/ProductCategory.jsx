import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

/* Hallmark · macrostructure: Catalogue · theme: lumen · drop: night (dark) / day (light) */
export default function ProductCategory({ onNavigate, theme, onToggleTheme }) {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (e, id) => {
    e.preventDefault();
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <Header onNavigate={onNavigate} theme={theme} onToggleTheme={onToggleTheme} />

      <main className="max-w-container-max mx-auto px-gutter py-24 min-h-screen">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-on-surface-variant/80 text-xs font-medium mb-12 select-none">
          <a className="hover:text-accent-2 cursor-pointer transition-colors" onClick={() => onNavigate('home')}>trang chủ</a>
          <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
          <span className="text-primary dark:text-primary-fixed-dim font-semibold">điện thoại samsung</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-gutter">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0 space-y-6">
            <div className="hairline-card p-6 rounded-2xl">
              <span className="eyebrow block mb-4">00 · filters</span>
              <h2 className="font-display text-2xl text-primary dark:text-primary-fixed-dim mb-6">
                bộ lọc sản phẩm
              </h2>
              
              {/* Hãng */}
              <div className="mb-6 pb-6 border-b border-outline-variant/60 dark:border-outline-variant/5">
                <span className="eyebrow block mb-3">brand</span>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input defaultChecked className="w-4 h-4 rounded border-outline/30 text-accent focus:ring-accent accent-accent" type="checkbox"/>
                    <span className="group-hover:text-accent-2 transition-colors text-sm text-on-surface-variant/80">samsung</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="w-4 h-4 rounded border-outline/30 text-accent focus:ring-accent accent-accent" type="checkbox"/>
                    <span className="group-hover:text-accent-2 transition-colors text-sm text-on-surface-variant/80">apple</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="w-4 h-4 rounded border-outline/30 text-accent focus:ring-accent accent-accent" type="checkbox"/>
                    <span className="group-hover:text-accent-2 transition-colors text-sm text-on-surface-variant/80">xiaomi</span>
                  </label>
                </div>
              </div>

              {/* Khoảng giá */}
              <div className="mb-6 pb-6 border-b border-outline-variant/60 dark:border-outline-variant/5">
                <span className="eyebrow block mb-3">price range</span>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="w-4 h-4 border-outline/30 text-accent focus:ring-accent accent-accent" name="price" type="radio"/>
                    <span className="group-hover:text-accent-2 transition-colors text-sm text-on-surface-variant/80">dưới 5 triệu</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="w-4 h-4 border-outline/30 text-accent focus:ring-accent accent-accent" name="price" type="radio"/>
                    <span className="group-hover:text-accent-2 transition-colors text-sm text-on-surface-variant/80">5 - 15 triệu</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="w-4 h-4 border-outline/30 text-accent focus:ring-accent accent-accent" name="price" type="radio"/>
                    <span className="group-hover:text-accent-2 transition-colors text-sm text-on-surface-variant/80">trên 15 triệu</span>
                  </label>
                </div>
              </div>

              {/* Dung lượng */}
              <div className="mb-6 pb-6 border-b border-outline-variant/60 dark:border-outline-variant/5">
                <span className="eyebrow block mb-3">storage</span>
                <div className="grid grid-cols-2 gap-2">
                  <button className="px-2 py-1.5 text-xs border border-outline-variant/60 dark:border-outline-variant/10 rounded-lg hover:border-accent hover:text-accent transition-all text-on-surface-variant/80 cursor-pointer">128gb</button>
                  <button className="px-2 py-1.5 text-xs border border-accent text-accent bg-accent/5 rounded-lg transition-all cursor-pointer font-medium">256gb</button>
                  <button className="px-2 py-1.5 text-xs border border-outline-variant/60 dark:border-outline-variant/10 rounded-lg hover:border-accent hover:text-accent transition-all text-on-surface-variant/80 cursor-pointer">512gb</button>
                  <button className="px-2 py-1.5 text-xs border border-outline-variant/60 dark:border-outline-variant/10 rounded-lg hover:border-accent hover:text-accent transition-all text-on-surface-variant/80 cursor-pointer">1tb</button>
                </div>
              </div>

              {/* Màu sắc */}
              <div>
                <span className="eyebrow block mb-3">colors</span>
                <div className="flex flex-wrap gap-2">
                  <button className="w-6 h-6 rounded-full bg-black ring-1 ring-offset-2 ring-accent cursor-pointer" title="phantom black"></button>
                  <button className="w-6 h-6 rounded-full bg-slate-200 border border-outline-variant/60 hover:ring-1 hover:ring-offset-2 hover:ring-accent cursor-pointer" title="cream"></button>
                  <button className="w-6 h-6 rounded-full bg-purple-200 border border-outline-variant/60 hover:ring-1 hover:ring-offset-2 hover:ring-accent cursor-pointer" title="lavender"></button>
                  <button className="w-6 h-6 rounded-full bg-green-200 border border-outline-variant/60 hover:ring-1 hover:ring-offset-2 hover:ring-accent cursor-pointer" title="lime"></button>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Display Area */}
          <div className="flex-grow">
            {/* Sorting Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-surface-container-low dark:bg-surface-container border border-outline-variant/60 dark:border-outline-variant/5 p-4 rounded-2xl mb-8 gap-4 select-none">
              <span className="eyebrow">
                showing 12 of 48 items
              </span>
              <div className="flex items-center gap-2">
                <span className="eyebrow">sort:</span>
                <select className="bg-surface dark:bg-surface-dim border border-outline-variant/60 dark:border-outline-variant/10 rounded-full px-4 py-1 text-xs outline-none focus:ring-1 focus:ring-accent focus:border-accent text-on-surface cursor-pointer">
                  <option>phổ biến nhất</option>
                  <option>giá: thấp đến cao</option>
                  <option>giá: cao đến thấp</option>
                  <option>mới nhất</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
              {/* Product Item 1 */}
              <div className="hairline-card rounded-2xl p-5 flex flex-col justify-between cursor-pointer" onClick={() => onNavigate('detail')}>
                <div>
                  <div className="relative aspect-square mb-4 overflow-hidden rounded-xl bg-surface-container-low dark:bg-surface-container p-2">
                    <img className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" alt="Galaxy S24 Ultra" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEPAwpE2rtitEq7ANQabKMs83cEy6NdSQdzO9aizJf8FUZln8sh9SC_x_MokCtDnUxtjvsQYsIuZTiW4ujg1a5gU067hECq97tL849GEw5wLfISkTrfXuZaK04c7BZ9VohVIKFoIosIQIRhSAEWNUNU6Ru-A3McTd-CpSlkhlggUrCw_mcFf88CKB2MI43L1DaM90sfmxWPqHBnl3q86jg542McmC-EMm5Kz3D4AyMy8Oq2NUoe4cFUdQzPUFP0g32mf--TjWJ5VQ"/>
                    <div className="absolute top-2 left-2 bg-accent/20 backdrop-blur-md text-accent px-2.5 py-0.5 rounded-full text-[9px] font-label font-bold border border-accent/25">HOT</div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); toggleFavorite(e, 1); }}
                      className={`absolute top-2 right-2 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md p-1.5 rounded-full transition-colors cursor-pointer ${favorites[1] ? 'text-accent-2' : 'text-on-surface-variant hover:text-accent-2'}`}
                    >
                      <span className="material-symbols-outlined text-[18px] select-none" style={{ fontVariationSettings: favorites[1] ? "'FILL' 1" : "'FILL' 0" }}>favorite</span>
                    </button>
                  </div>
                  <div className="flex-grow">
                    <span className="eyebrow block mb-1">samsung</span>
                    <h3 className="font-display text-xl text-primary dark:text-primary-fixed-dim hover:text-accent-2 transition-colors line-clamp-1">galaxy s24 ultra</h3>
                    <div className="flex items-center gap-1 mt-2 text-accent select-none">
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                      <span className="text-[10px] font-label text-on-surface-variant/80 ml-1">(124 reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-outline-variant/60 dark:border-outline-variant/10">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-label text-sm uppercase tracking-wide font-bold text-accent">31.990.000₫</span>
                    <span className="font-label text-[10px] text-on-surface-variant/60 line-through">35.990.000₫</span>
                  </div>
                  <button className="w-full py-2 bg-primary text-on-primary dark:bg-accent dark:text-on-primary rounded-full font-label text-[10px] uppercase tracking-wider hover:bg-accent-2 transition-all cursor-pointer flex items-center justify-center gap-1 active:scale-[0.98]">
                    <span className="material-symbols-outlined text-[14px]">add_shopping_cart</span>
                    thêm vào giỏ
                  </button>
                </div>
              </div>

              {/* Product Item 2 */}
              <div className="hairline-card rounded-2xl p-5 flex flex-col justify-between cursor-pointer" onClick={() => onNavigate('detail')}>
                <div>
                  <div className="relative aspect-square mb-4 overflow-hidden rounded-xl bg-surface-container-low dark:bg-surface-container p-2">
                    <img className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" alt="Galaxy Z Fold5 5G" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-rRopEC28iH55ziR5UTDF7DX7MOu595kQZslXmGAMPXRAG6afmaePjQrqoB6iQGMqsKCv_sW-ojSPr4aJBeKj5Vfbj4umq9RgS9IyN8MLudS85x7nCRtC8HwObcSGBe-S0vOvffZReXknpu3QEA9On9fboE-PQswwXH5PIbXo0Okve0NO88YtI7ymtawngURYLcOuSDufnN_NUa20GI9zWKffxMnXmd9ECT5tWinwzrvKFEaFXXPoy80IeEVGSGb1H4k7QVujWuo"/>
                    <button 
                      onClick={(e) => { e.stopPropagation(); toggleFavorite(e, 2); }}
                      className={`absolute top-2 right-2 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md p-1.5 rounded-full transition-colors cursor-pointer ${favorites[2] ? 'text-accent-2' : 'text-on-surface-variant hover:text-accent-2'}`}
                    >
                      <span className="material-symbols-outlined text-[18px] select-none" style={{ fontVariationSettings: favorites[2] ? "'FILL' 1" : "'FILL' 0" }}>favorite</span>
                    </button>
                  </div>
                  <div className="flex-grow">
                    <span className="eyebrow block mb-1">samsung</span>
                    <h3 className="font-display text-xl text-primary dark:text-primary-fixed-dim hover:text-accent-2 transition-colors line-clamp-1">galaxy z fold5 5g</h3>
                    <div className="flex items-center gap-1 mt-2 text-accent select-none">
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>star</span>
                      <span className="text-[10px] font-label text-on-surface-variant/80 ml-1">(85 reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-outline-variant/60 dark:border-outline-variant/10">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-label text-sm uppercase tracking-wide font-bold text-accent">28.490.000₫</span>
                    <span className="font-label text-[10px] text-on-surface-variant/60 line-through">30.990.000₫</span>
                  </div>
                  <button className="w-full py-2 bg-primary text-on-primary dark:bg-accent dark:text-on-primary rounded-full font-label text-[10px] uppercase tracking-wider hover:bg-accent-2 transition-all cursor-pointer flex items-center justify-center gap-1 active:scale-[0.98]">
                    <span className="material-symbols-outlined text-[14px]">add_shopping_cart</span>
                    thêm vào giỏ
                  </button>
                </div>
              </div>

              {/* Product Item 3 */}
              <div className="hairline-card rounded-2xl p-5 flex flex-col justify-between cursor-pointer" onClick={() => onNavigate('detail')}>
                <div>
                  <div className="relative aspect-square mb-4 overflow-hidden rounded-xl bg-surface-container-low dark:bg-surface-container p-2">
                    <img className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" alt="Galaxy A54 5G" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj9N5GZGMTyIxxts63WCrF6EYBhL0TPJ-R2bE0NTmIr78IfB7hQdxqf0FfxYDij6PvVceUsMgG3jg285u5V50aKQn05QfIJ1tqxeUreivbvQEK2Aton5ASjn71XV9sUyC9wA8WhkjVfqlnRAEaFrdtDdqBSarNIPGYXL_gDWsxCkdfgvHn0CQ19Xg8iWIzFysWia7oABVjgOFyKTwVp2sS0s07q7HJ6SIQ0zONy10T9r9ZluInmBT4OwdHrdukvlb9PP_tuRIN4gQ"/>
                    <div className="absolute top-2 left-2 bg-surface-container-high dark:bg-surface-container-highest text-on-surface-variant px-2.5 py-0.5 rounded-full text-[9px] font-label font-bold border border-outline-variant/30">NEW</div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); toggleFavorite(e, 3); }}
                      className={`absolute top-2 right-2 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md p-1.5 rounded-full transition-colors cursor-pointer ${favorites[3] ? 'text-accent-2' : 'text-on-surface-variant hover:text-accent-2'}`}
                    >
                      <span className="material-symbols-outlined text-[18px] select-none" style={{ fontVariationSettings: favorites[3] ? "'FILL' 1" : "'FILL' 0" }}>favorite</span>
                    </button>
                  </div>
                  <div className="flex-grow">
                    <span className="eyebrow block mb-1">samsung</span>
                    <h3 className="font-display text-xl text-primary dark:text-primary-fixed-dim hover:text-accent-2 transition-colors line-clamp-1">galaxy a54 5g</h3>
                    <div className="flex items-center gap-1 mt-2 text-accent select-none">
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>star</span>
                      <span className="text-[10px] font-label text-on-surface-variant/80 ml-1">(210 reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-outline-variant/60 dark:border-outline-variant/10">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-label text-sm uppercase tracking-wide font-bold text-accent">8.490.000₫</span>
                    <span className="font-label text-[10px] text-on-surface-variant/60 line-through">10.490.000₫</span>
                  </div>
                  <button className="w-full py-2 bg-primary text-on-primary dark:bg-accent dark:text-on-primary rounded-full font-label text-[10px] uppercase tracking-wider hover:bg-accent-2 transition-all cursor-pointer flex items-center justify-center gap-1 active:scale-[0.98]">
                    <span className="material-symbols-outlined text-[14px]">add_shopping_cart</span>
                    thêm vào giỏ
                  </button>
                </div>
              </div>

              {/* Mock Product 4 */}
              <div className="hairline-card rounded-2xl p-5 flex flex-col justify-between cursor-pointer" onClick={() => onNavigate('detail')}>
                <div>
                  <div className="relative aspect-square mb-4 overflow-hidden rounded-xl bg-surface-container-low dark:bg-surface-container p-2">
                    <img className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" alt="Galaxy S23 FE" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlnU3EMDZ4Xwot2m4nV8JJT5sbHla-PQPVH0E7ErZyRjLCXa5TeCOQAlWbcZkWdQPmmBuB3MtzAAE9eVkccNe8hdLqW9D_gDDjqSP9FDuhOFcOyOlfGUM0fQgPptyD_g6Ifn6CJ0GU2BmLIzUmrs1VUZEEni0h8SQVc5sP1daqVvkzmk3lmLI0eXJOpWbnfPVC5vScrfXQpycPwCazZrB_hfWoM1HiZ9kYhR9M5FcXukBYMEVkrLtyOdoDipzWTdSGPEz7DIHhHGg"/>
                  </div>
                  <span className="eyebrow block mb-1">samsung</span>
                  <h3 className="font-display text-xl text-primary dark:text-primary-fixed-dim line-clamp-1 hover:text-accent-2 transition-colors">galaxy s23 fe</h3>
                </div>
                <div className="mt-4 pt-4 border-t border-outline-variant/60 dark:border-outline-variant/10">
                  <div className="text-accent font-label text-sm uppercase tracking-wide font-bold mb-4">12.990.000₫</div>
                  <button className="w-full py-2 bg-primary text-on-primary dark:bg-accent dark:text-on-primary rounded-full font-label text-[10px] uppercase tracking-wider hover:bg-accent-2 transition-all cursor-pointer flex items-center justify-center gap-1 active:scale-[0.98]">thêm vào giỏ</button>
                </div>
              </div>

              {/* Mock Product 5 */}
              <div className="hairline-card rounded-2xl p-5 flex flex-col justify-between cursor-pointer" onClick={() => onNavigate('detail')}>
                <div>
                  <div className="relative aspect-square mb-4 overflow-hidden rounded-xl bg-surface-container-low dark:bg-surface-container p-2">
                    <img className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" alt="Galaxy Z Flip5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGwfflbAPsalC6rikmfVMZgz9T0gNsXMLPn9aP3ThL2LAuoSmdK3AmlhmC3B1Dyz0sUE_J6cFgIjRsc9fqISYVJ-gXaB1vviiBJ84DlRcHten4eL0Mkmwe3sozbcva9wXSX2cwWYJ1KBCY92_MyIwsNhjeVDP1kp8kws87hwNNG7nyCEJ4AxoWMYCz8ghgMfWyqRodYQnflGbCKLxuWTIu12lTwvIFEOhG3rczL1wtfy1VJOgyjctIeH7Xfi-RBt-nmTaOIpvYn2k"/>
                  </div>
                  <span className="eyebrow block mb-1">samsung</span>
                  <h3 className="font-display text-xl text-primary dark:text-primary-fixed-dim line-clamp-1 hover:text-accent-2 transition-colors">galaxy z flip5</h3>
                </div>
                <div className="mt-4 pt-4 border-t border-outline-variant/60 dark:border-outline-variant/10">
                  <div className="text-accent font-label text-sm uppercase tracking-wide font-bold mb-4">19.990.000₫</div>
                  <button className="w-full py-2 bg-primary text-on-primary dark:bg-accent dark:text-on-primary rounded-full font-label text-[10px] uppercase tracking-wider hover:bg-accent-2 transition-all cursor-pointer flex items-center justify-center gap-1 active:scale-[0.98]">thêm vào giỏ</button>
                </div>
              </div>

              {/* Mock Product 6 */}
              <div className="hairline-card rounded-2xl p-5 flex flex-col justify-between cursor-pointer" onClick={() => onNavigate('detail')}>
                <div>
                  <div className="relative aspect-square mb-4 overflow-hidden rounded-xl bg-surface-container-low dark:bg-surface-container p-2">
                    <img className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" alt="Galaxy A34 5G" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKMOxjBirO7ulXlGsjFh1QbQ73a8DjW-PRvU2_I4hR67Shjr9U1AHrfGjlusOqiGH3XvztNmbCOnOyPqmmxPOfXh47MG49J0eZe3i4oDIl0zO0ue2m1dZh_mlJW-FT-O7mAS8TVL461HOf3ipCkC8rxTsXtKq3oRQ6gQuA6QCFuuG4z-PXspH09Bpma0bQUI7rR0xMfVv5hrSDnlwL_w8RSt8Nfku-igLcPbpGudVjEQFpkrNwSPjmLoGKPUbCI5Vvj2paAo450uA"/>
                  </div>
                  <span className="eyebrow block mb-1">samsung</span>
                  <h3 className="font-display text-xl text-primary dark:text-primary-fixed-dim line-clamp-1 hover:text-accent-2 transition-colors">galaxy a34 5g</h3>
                </div>
                <div className="mt-4 pt-4 border-t border-outline-variant/60 dark:border-outline-variant/10">
                  <div className="text-accent font-label text-sm uppercase tracking-wide font-bold mb-4">6.290.000₫</div>
                  <button className="w-full py-2 bg-primary text-on-primary dark:bg-accent dark:text-on-primary rounded-full font-label text-[10px] uppercase tracking-wider hover:bg-accent-2 transition-all cursor-pointer flex items-center justify-center gap-1 active:scale-[0.98]">thêm vào giỏ</button>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="mt-20 flex justify-center items-center gap-2 select-none font-label text-xs">
              <button className="w-8 h-8 flex items-center justify-center rounded-full border border-outline-variant/60 dark:border-outline-variant/10 text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-[16px]">chevron_left</span>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-accent text-on-primary font-bold cursor-pointer">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full border border-outline-variant/60 dark:border-outline-variant/10 text-on-surface-variant hover:border-accent-2 hover:text-accent-2 transition-all cursor-pointer">2</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full border border-outline-variant/60 dark:border-outline-variant/10 text-on-surface-variant hover:border-accent-2 hover:text-accent-2 transition-all cursor-pointer">3</button>
              <span className="px-2 text-on-surface-variant/60">...</span>
              <button className="w-8 h-8 flex items-center justify-center rounded-full border border-outline-variant/60 dark:border-outline-variant/10 text-on-surface-variant hover:border-accent-2 hover:text-accent-2 transition-all cursor-pointer">8</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full border border-outline-variant/60 dark:border-outline-variant/10 text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
    </>
  );
}

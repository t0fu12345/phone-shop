import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

/* Hallmark · macrostructure: Marquee Hero · theme: lumen · drop: night (dark) / day (light) */
export default function HomePage({ onNavigate, theme, onToggleTheme }) {
  useEffect(() => {
    // Reveal animation delay trigger
    const underline = document.querySelector('.hero__title em');
    if (underline) {
      underline.classList.add('is-ready');
    }
  }, []);

  return (
    <>
      <Header onNavigate={onNavigate} theme={theme} onToggleTheme={onToggleTheme} />

      <main className="overflow-hidden bg-background">
        {/* Hero Section (Marquee Hero) */}
        <section className="relative min-h-screen flex items-center pt-20 blueprint-grid border-b border-outline-variant/60 dark:border-outline-variant/5">
          <div className="max-w-container-max mx-auto px-gutter w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-20">
            {/* Hero Left: Lowercase Headline with Verb-Landmark */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <span className="eyebrow block">
                00 · introduction
              </span>
              <h1 className="hero__title font-display text-[44px] sm:text-[60px] lg:text-[72px] leading-tight tracking-tight text-primary dark:text-primary-fixed-dim">
                designed to <em>redefine</em> premium performance.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant/75 max-w-lg leading-relaxed">
                khung viền titanium chuẩn hàng không vũ trụ. chip a17 pro mạnh mẽ nhất trên điện thoại thông minh. chiếc iphone tinh tế nhất từng được chế tạo.
              </p>
              <div className="pt-6">
                <button 
                  className="px-8 py-3.5 bg-accent text-on-primary dark:bg-accent dark:text-on-primary rounded-full font-label text-xs uppercase tracking-wider hover:bg-accent-2 transition-all cursor-pointer shadow-lg shadow-accent/15 active:scale-95"
                  onClick={() => onNavigate('category')}
                >
                  discover collection →
                </button>
              </div>
            </div>

            {/* Hero Right: Hand-Built Technical Apparatus */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group flex justify-center items-center h-full min-h-[450px]">
                {/* Glow behind the apparatus */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent pointer-events-none rounded-full blur-3xl scale-75"></div>
                
                {/* The Apparatus */}
                <div className="relative">
                  <figure className="relative w-60 aspect-[0.5] border border-outline/20 rounded-[32px] bg-surface-container-lowest/90 dark:bg-surface-dim/95 overflow-hidden flex flex-col justify-between p-5 shadow-2xl transition-all duration-500 hover:border-accent/40" aria-hidden="true">
                    {/* Dynamic island mock */}
                    <div className="w-full flex justify-center pt-1">
                      <div className="w-20 h-4 bg-ink dark:bg-ink rounded-full flex items-center justify-between px-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/80 animate-pulse"></span>
                        <span className="w-1 h-1 rounded-full bg-accent/40"></span>
                      </div>
                    </div>
                    
                    {/* Schematic lines */}
                    <div className="flex-grow flex flex-col items-center justify-center p-4 relative">
                      <div className="absolute inset-0 border border-dashed border-accent/20 rounded-2xl m-2"></div>
                      {/* Core processor element */}
                      <div className="w-14 h-14 border border-accent/30 rounded-xl flex flex-col items-center justify-center bg-surface-container-low dark:bg-surface-container relative z-10">
                        <span className="text-[9px] font-label text-accent uppercase">a17 pro</span>
                        <span className="text-[7px] font-label text-on-surface-variant/60">3nm</span>
                      </div>
                      
                      {/* Camera array mock */}
                      <div className="absolute top-4 left-4 w-11 h-11 border border-outline-variant/60 rounded-lg flex items-center justify-center gap-1 flex-wrap p-1">
                        <span className="w-3 h-3 rounded-full border border-accent/30 bg-surface"></span>
                        <span className="w-3 h-3 rounded-full border border-accent/30 bg-surface"></span>
                        <span className="w-3 h-3 rounded-full border border-accent/30 bg-surface"></span>
                      </div>
                    </div>
                    
                    {/* Metadata footer */}
                    <div className="w-full flex justify-between items-center text-[8px] font-label text-on-surface-variant/60 uppercase">
                      <span>sys · lux.v5</span>
                      <span>2026 · m</span>
                    </div>
                  </figure>
                  
                  {/* Leader-line callouts */}
                  <div className="absolute left-[-80px] top-[18%] font-label text-[9px] text-on-surface-variant/70 uppercase flex items-center gap-2 select-none">
                    <span>optics · 48mp</span>
                    <span className="w-10 h-[1px] bg-accent/40"></span>
                  </div>
                  <div className="absolute right-[-80px] top-[28%] font-label text-[9px] text-on-surface-variant/70 uppercase flex items-center gap-2 select-none">
                    <span className="w-10 h-[1px] bg-accent/40"></span>
                    <span>core · a17 pro</span>
                  </div>
                  <div className="absolute left-[-100px] bottom-[28%] font-label text-[9px] text-on-surface-variant/70 uppercase flex items-center gap-2 select-none">
                    <span>body · titanium</span>
                    <span className="w-12 h-[1px] bg-accent/40"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meter Strip */}
        <aside className="meter-container border-b border-outline-variant/60 dark:border-outline-variant/5 select-none" aria-label="Signal readout">
          <p className="meter__label meter__label--left">BANDWIDTH · 48 GBPS</p>
          <div className="meter-bars">
            {Array.from({ length: 64 }).map((_, i) => {
              // Gaussian envelope for procedural meter tick heights
              const center = 32;
              const sigma = 12;
              const height = Math.exp(-Math.pow(i - center, 2) / (2 * Math.pow(sigma, 2))) * 24 + 4;
              return (
                <span 
                  key={i} 
                  className="meter-bar" 
                  style={{ height: `${height}px`, opacity: i % 2 === 0 ? 0.8 : 0.4 }}
                />
              );
            })}
          </div>
          <p className="meter__label meter__label--right">LATENCY · 0.08 σ</p>
        </aside>

        {/* Brand Logos */}
        <section className="py-20 border-b border-outline-variant/60 dark:border-outline-variant/5">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="flex flex-col items-center space-y-2 mb-12">
              <span className="eyebrow">01 · brand partners</span>
              <h2 className="font-display text-[28px] text-primary dark:text-primary-fixed-dim text-center">
                hệ thống đối tác phân phối chính hãng
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center opacity-65 hover:opacity-100 transition-opacity duration-300">
              <div className="flex justify-center items-center h-20 overflow-hidden bg-surface rounded-2xl border border-outline-variant/30 dark:border-outline-variant/5">
                <img className="w-full h-full object-cover dark:opacity-80" alt="Apple" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt1vyjgKqn4avJMEyvAZl15n66qQlHBbjBSRR1C_YtJgXNHxkebZmZvaxOkyNg9lbseKQPCYtCnWbmGUoBnhueEQLhCEO1iEu9A-Ls3zRq6y3hRT3cJ22IkSMgvt4RAnEmtJN7enhSOgZV-qZgzpL6UNIdOL1MUcAs2b2A-wZJ7TpLZ6oS8q5GsmB7AdNaq7g4sfqKlRtrHy-PXH6pFp8Y3ApR8OxH0Qfvoqrcnte1s-6PhJhX-f6SKtZ5x2kj6gscYci3-0zJLXs"/>
              </div>
              <div className="flex justify-center items-center h-20 overflow-hidden bg-surface rounded-2xl border border-outline-variant/30 dark:border-outline-variant/5">
                <img className="w-full h-full object-cover dark:opacity-80" alt="Samsung" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo0GHfdL4h5PEHRriMjDAqoS-NOSvLvQbPe01nwDymCbN_D-ZL278fRew4mUO9Ks8LSSi1m15SbWRrf4bo2qqTyEJ03pSZ-RPYnEVHhHtBVTVu79flrNBu19sXAfPPh-2yH8FMXmxDP7Zg2r27O4fDXf79MIWMWgGbjJbC9QGsvhxCRdnwUkliOuToHnq7hcTd8IOItVfEohozLRbGOqNSKyxnenIXmfHLHTgLrwD25p4X9ZZhJ337eU1lo3bRfUnlC640rcixMDs"/>
              </div>
              <div className="flex justify-center items-center h-20 overflow-hidden bg-surface rounded-2xl border border-outline-variant/30 dark:border-outline-variant/5">
                <img className="w-full h-full object-cover dark:opacity-80" alt="Xiaomi" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5BGldSSLiHqHQnKkr7seJ4kCKZwv4zNYsSn37-a0tqsdcMeSu1rllvFgfgJGnvdhLCnU185fT6pqAkowAW5R_KJ8TcDFwZqiqc1Mv27VHrCZH6FrAsvNKCqC5Lhluee03Qoced1YX9DouUjqH-UqHx62DrJgeuVcabZ67fD5VTZhvltz3QPR1ufbC_xXE6ZwbqxKozKRvPEomXteG8rzciuvbFYMEJCsl11g0GEU6NnPFQ-TJxHNUgBghW-pdHj-RADTmeI_MYGo"/>
              </div>
              <div className="flex justify-center items-center h-20 overflow-hidden bg-surface rounded-2xl border border-outline-variant/30 dark:border-outline-variant/5">
                <img className="w-full h-full object-cover dark:opacity-80" alt="Brand" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzLSpgY6o7Gf3jwEfdtVVT1UqvPAKxUuET-iSTAPVvIPFRfTaxDPpVFIgaGaOBcoJ_XLo97Gkulktfc7scfSV782RPxHdTFXKcxQxBdp8ZkZm0MHUXB6dcuiARQza3mQCm0S_db78wgIhIlTzNmqUh3m_zX7mc_LC91ESieOP57RYVBqYrlkv6gV1uPuVDBN-B7KswUR_dbJyNIdwo3e272zKawbIP0BFGsxhSy-i5AmzV7vM68pXF_us7RylCDt86AXKNZWCY_sU"/>
              </div>
              <div className="hidden lg:flex justify-center items-center h-20 overflow-hidden bg-surface rounded-2xl border border-outline-variant/30 dark:border-outline-variant/5">
                <img className="w-full h-full object-cover dark:opacity-80" alt="Partner" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG7tYkroIG8W9ItmHfKtIiNNw77roLc4W2luZWZvmW-PpM9qT20xP1sEUsFoby28OxHKK8iItNE0CxpqamSja4koY99ajN2JvdzsSg9oBvGL5JZSrhDhJaDomNFqgkl65F2JRzmt8ojzvpEe0IgRWAT4ItP3Kqzxj9LSc_uKepDzrZwc04w6CZEzt57bljfzTschUHNP01898wPuF-7bjLfwA8cDz0H2YNY2jaut3eHiDBqu4qlvo4_sXbjdYxSfwRE5fT6wCqU9Q"/>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Products (Product List) */}
        <section className="py-20 border-b border-outline-variant/60 dark:border-outline-variant/5">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
              <div>
                <span className="eyebrow">02 · latest collection</span>
                <h2 className="font-display text-[28px] sm:text-[36px] text-primary dark:text-primary-fixed-dim mt-2">
                  bộ sưu tập điện thoại mới nhất
                </h2>
              </div>
              <a 
                className="text-accent font-label text-[11px] uppercase tracking-wider hover:opacity-80 flex items-center gap-1 cursor-pointer transition-opacity"
                onClick={() => onNavigate('category')}
              >
                xem tất cả →
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {/* Product Card 1 */}
              <div 
                className="hairline-card rounded-2xl p-5 flex flex-col justify-between cursor-pointer" 
                onClick={() => onNavigate('detail')}
              >
                <div>
                  <div className="aspect-square rounded-xl bg-surface-container-low dark:bg-surface-container mb-4 overflow-hidden flex items-center justify-center p-2 relative">
                    <img className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" alt="Samsung Galaxy S24 Ultra" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqGAXQY2BO8v4xeDEJ89-09ARmQUx0Ls15ptVxxC0gAgKaTIedlycGRvfv3ztzv8bBBI1Gk3dkv3bsVnoADvh2KpOTQejmcMYMJHBHK07cJkEZQkjOLLXwZak7sfX7dgVLLjBBIP0s9Q8WJfwRm_0sYEse492_-il2RxRXFhzv1bc5ILiZ4ESsQXq8pVQQthnn5fJp7Q-OlOx6abTUfdyIIQM5JymOsO1HsFR9Vxpw8Z5hMecchFpIww5H9nZl75dPTFDHsCxNKRs"/>
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-surface-container-high dark:bg-surface-container-highest text-on-surface-variant font-label text-[10px] mb-2 uppercase">
                    sắp về
                  </span>
                  <h3 className="font-display text-xl text-primary dark:text-primary-fixed-dim line-clamp-1 hover:text-accent-2 transition-colors">
                    samsung galaxy s24 ultra
                  </h3>
                </div>
                <div className="mt-4 pt-4 border-t border-outline-variant/60 dark:border-outline-variant/10">
                  <p className="text-accent font-label text-xs uppercase tracking-wide font-bold">33.990.000₫</p>
                </div>
              </div>

              {/* Product Card 2 */}
              <div 
                className="hairline-card rounded-2xl p-5 flex flex-col justify-between cursor-pointer" 
                onClick={() => onNavigate('detail')}
              >
                <div>
                  <div className="aspect-square rounded-xl bg-surface-container-low dark:bg-surface-container mb-4 overflow-hidden flex items-center justify-center p-2 relative">
                    <img className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" alt="Xiaomi 14 Pro" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFM4mnoBpoUHE4epVd4cHDxPfvwoUE5FsSY-JrbTJYKRwDlKozhvZ9N5fVU4fiUe9-mq0TeRFT0sEyUbtef4wgI6BLFa5Hlw_YdENk3tVTXwv7w-F-7_LAQgL-fW5r2rCOxdsPfTry8O4yTWcsaOoSiESzA6CRnBu0WMEOj0N7xk32p44uXPcmVsPgvyd-AMXnS4wogS7wzc-Ofv3OTLS0Yl2gtoM6l-fXrlvgYk33ge_BOXcNxNwrJiRHcAXoIDwRHPbD1YhMM8g"/>
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-accent/15 text-accent font-label text-[10px] mb-2 uppercase">
                    bán chạy
                  </span>
                  <h3 className="font-display text-xl text-primary dark:text-primary-fixed-dim line-clamp-1 hover:text-accent-2 transition-colors">
                    xiaomi 14 pro
                  </h3>
                </div>
                <div className="mt-4 pt-4 border-t border-outline-variant/60 dark:border-outline-variant/10">
                  <p className="text-accent font-label text-xs uppercase tracking-wide font-bold">22.500.000₫</p>
                </div>
              </div>

              {/* Product Card 3 */}
              <div 
                className="hairline-card rounded-2xl p-5 flex flex-col justify-between cursor-pointer" 
                onClick={() => onNavigate('detail')}
              >
                <div>
                  <div className="aspect-square rounded-xl bg-surface-container-low dark:bg-surface-container mb-4 overflow-hidden flex items-center justify-center p-2 relative">
                    <img className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" alt="iPhone 15 128GB" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTpv4QYvVW7Yon0XSuM5brE-aTppvLW43x8-tdlJ2SBpjHMd_CsFiRnrN_kT747U7OMo8ZMIbSNuOeNpMuu4R9CmF4dVI0coWIBOmSREHJ6yjg4sCZXwO1uMg2nBmkky5GT0Q7pIGcssttdsBpyXuSWqHwepS66-we0ZquaVMqlyJGGdahoywJnHe_300ToLWCo0wJVFWTLHapoEvpN6Dy0H41J-xQysCml_8CBz4udwZu-EWJ1YcwKt84G1_huC6zmJvtzXh_bcA"/>
                  </div>
                  <div className="h-[21px] mb-2"></div>
                  <h3 className="font-display text-xl text-primary dark:text-primary-fixed-dim line-clamp-1 hover:text-accent-2 transition-colors">
                    iphone 15 128gb
                  </h3>
                </div>
                <div className="mt-4 pt-4 border-t border-outline-variant/60 dark:border-outline-variant/10">
                  <p className="text-accent font-label text-xs uppercase tracking-wide font-bold">21.490.000₫</p>
                </div>
              </div>

              {/* Product Card 4 */}
              <div 
                className="hairline-card rounded-2xl p-5 flex flex-col justify-between cursor-pointer" 
                onClick={() => onNavigate('detail')}
              >
                <div>
                  <div className="aspect-square rounded-xl bg-surface-container-low dark:bg-surface-container mb-4 overflow-hidden flex items-center justify-center p-2 relative">
                    <img className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" alt="Google Pixel 8 Pro" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC3na8prtiKAcz2J3uFH43XtceEXGOtGzNuC8ReD3ZHutHnfH8nvhzgVE_zGYlQJrY4QF9f7iDf_25HSrSHcA3v4mrRU79EM3us7E49MB4MFKg9L6PP27LE--AAA3fvBPwN-qu3LbPX3daskPQ6q5T6Gmc8sFRyaCaIjPcNhsgTkYZuC-AbC58QF8jXleB0jwPuRJ8lVLUwtFmGsduGxHWDkaJgAErgBa7mdihNYtI8Qy3aiaocQP3TNa8rTlYt8CrAEC8EAf7dB0"/>
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label text-[10px] mb-2 uppercase">
                    giảm 10%
                  </span>
                  <h3 className="font-display text-xl text-primary dark:text-primary-fixed-dim line-clamp-1 hover:text-accent-2 transition-colors">
                    google pixel 8 pro
                  </h3>
                </div>
                <div className="mt-4 pt-4 border-t border-outline-variant/60 dark:border-outline-variant/10">
                  <p className="text-accent font-label text-xs uppercase tracking-wide font-bold">18.900.000₫</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Promotion Bento */}
        <section className="py-20 border-b border-outline-variant/60 dark:border-outline-variant/5">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="flex flex-col items-center space-y-2 mb-12">
              <span className="eyebrow">03 · special offers</span>
              <h2 className="font-display text-[28px] sm:text-[36px] text-primary dark:text-primary-fixed-dim text-center">
                chương trình ưu đãi độc quyền
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Large Promo Card */}
              <div className="md:col-span-8 hairline-card rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden group">
                <div className="relative z-10 max-w-md space-y-6">
                  <h3 className="font-display text-[32px] sm:text-[40px] leading-tight text-primary dark:text-primary-fixed-dim">
                    đổi cũ lấy mới trợ giá đến 2tr
                  </h3>
                  <p className="text-on-surface-variant/80 font-body-lg text-body-lg leading-relaxed">
                    nâng cấp lên iphone 15 series chưa bao giờ dễ dàng hơn thế. thủ tục nhanh chóng trong 5 phút.
                  </p>
                  <div>
                    <button className="px-6 py-3 bg-accent text-on-primary rounded-full font-label text-xs uppercase tracking-wider hover:bg-accent-2 transition-all cursor-pointer">
                      định giá ngay →
                    </button>
                  </div>
                </div>
                <div className="absolute right-4 bottom-4 w-[38%] h-[80%] hidden lg:block select-none pointer-events-none rounded-xl overflow-hidden border border-outline-variant/60 dark:border-outline-variant/5 p-1 bg-surface-container-low dark:bg-surface-container">
                  <img className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-[2000ms]" alt="Trade in" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB61qL0CEl4X5GLaPjgkvs9dxMSS_lqvcX68RSAouGJUHCSOObMyL0Dbh6D3hZ50-iS8nozzKLtX2of7Bl1WS88bLa2gSUL75_QDp3-wAlB3U45gF0TYlCKOe9MNOlFF6HFNljpPFgDv6mKpz7g3CdRMbjn2lZ1Jn6ZY340qTt1odXLW0t8HkXvNSJNRXs1LnoMYZMt_PKiwzPHXaGNXpG_Bys5jPDzrFw3-fKPSYMg5IzaHSxnbEYeskMojVo5Uv-Jd9Aa-5hBJxM"/>
                </div>
              </div>
              
              {/* Small Promo Card 1 */}
              <div className="md:col-span-4 hairline-card rounded-3xl p-8 flex flex-col justify-center text-on-surface group">
                <span className="material-symbols-outlined text-4xl mb-4 text-accent">credit_card</span>
                <h3 className="font-display text-2xl mb-2 text-primary dark:text-primary-fixed-dim">
                  trả góp 0% lãi suất
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant/80 leading-relaxed">
                  hỗ trợ trả góp qua thẻ tín dụng và công ty tài chính. duyệt hồ sơ online chỉ trong 15 phút.
                </p>
              </div>

              {/* Small Promo Card 2 */}
              <div className="md:col-span-4 hairline-card rounded-3xl p-8 flex flex-col justify-center text-on-surface group">
                <span className="material-symbols-outlined text-4xl mb-4 text-accent">verified_user</span>
                <h3 className="font-display text-2xl mb-2 text-primary dark:text-primary-fixed-dim">
                  bảo hành vip 2 năm
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant/80 leading-relaxed">
                  gói bảo hành vàng rơi vỡ, vào nước cho mọi dòng máy cao cấp. yên tâm sử dụng tuyệt đối.
                </p>
              </div>

              {/* Medium Promo Card */}
              <div className="md:col-span-8 hairline-card rounded-3xl p-8 flex items-center gap-8 group overflow-hidden">
                <div className="flex-1">
                  <h3 className="font-display text-[28px] sm:text-[32px] mb-2 text-primary dark:text-primary-fixed-dim">
                    phụ kiện apple chính hãng
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant/80 mb-4 leading-relaxed">
                    giảm ngay 20% khi mua kèm máy. airpods, ốp lưng, sạc nhanh sẵn hàng.
                  </p>
                  <a 
                    className="text-accent font-label text-[11px] uppercase tracking-wider hover:opacity-80 flex items-center gap-1 cursor-pointer"
                    onClick={() => onNavigate('category')}
                  >
                    mua phụ kiện →
                  </a>
                </div>
                <div className="w-32 h-32 hidden sm:block bg-surface-container-low dark:bg-surface-container rounded-full p-2.5 border border-outline-variant/60 rotate-12 group-hover:rotate-0 transition-transform duration-500 select-none">
                  <img className="w-full h-full object-contain" alt="AirPods" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwylCCxAr2kw86c-XRAb_mcFJtXEzKBUBQaDzaUG60LTfXdTHHjWDcI8NU5-nAoPzeAMhN_6fKNToXCSJvgbnw4t1wsSrczXuFsSSYidwuKG4Eoj2kysqbZcapBbeF4JnSX_dXen5pUWBq-zjkYxnxu7pUc6SCFwCISjwOw49TldTwMhiPRNwSRq9-xb5zlvm1kAviHl147DTINqm-V5bTsERuCbVlfs2KRkIs-HEJ_mxvBSqtvUXPlHmdlUck3e1YwrSlq38Kwr4"/>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Newsletter */}
        <section className="py-20 max-w-container-max mx-auto px-gutter">
          <div className="border border-outline-variant/60 dark:border-outline-variant/5 bg-surface-container-lowest/80 rounded-[32px] p-12 text-center text-on-surface relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="eyebrow">04 · newsletter</span>
              <h2 className="font-display text-[32px] sm:text-[44px] text-primary dark:text-primary-fixed-dim tracking-tight">
                đăng ký nhận bản tin ưu đãi
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant/80 leading-relaxed max-w-md mx-auto">
                cập nhật các sản phẩm công nghệ mới ra mắt và nhận mã giảm giá sớm nhất.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  className="flex-1 px-5 py-3 rounded-full bg-surface-container-low border border-outline-variant/60 dark:border-outline-variant/10 text-on-surface placeholder:text-on-surface-variant/50 focus:ring-1 focus:ring-accent focus:border-accent outline-none text-sm transition-all" 
                  placeholder="địa chỉ email" 
                  type="email"
                />
                <button 
                  className="bg-accent text-on-primary px-8 py-3 rounded-full font-label text-xs uppercase tracking-wider hover:bg-accent-2 transition-all cursor-pointer active:scale-95" 
                  type="submit"
                >
                  đăng ký
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer onNavigate={onNavigate} />
    </>
  );
}

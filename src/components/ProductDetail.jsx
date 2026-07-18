import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

/* Hallmark · macrostructure: Split Studio · theme: lumen · drop: night (dark) / day (light) */
export default function ProductDetail({ onNavigate, theme, onToggleTheme }) {
  const [selectedColor, setSelectedColor] = useState('gray');
  const [selectedStorage, setSelectedStorage] = useState('256GB');

  const colors = [
    { id: 'gray', bg: '#8E8E8E', name: 'Titanium Gray' },
    { id: 'black', bg: '#1A1A1A', name: 'Titanium Black' },
    { id: 'white', bg: '#E5E4E2', name: 'Titanium White' },
    { id: 'purple', bg: '#3B3047', name: 'Titanium Yellow' },
  ];

  const storages = ['256GB', '512GB', '1TB'];

  const currentColorName = colors.find(c => c.id === selectedColor)?.name || 'Titanium Gray';

  return (
    <>
      <Header onNavigate={onNavigate} theme={theme} onToggleTheme={onToggleTheme} />

      <main className="max-w-container-max mx-auto px-gutter py-24">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-on-surface-variant/80 mb-12 select-none">
          <a className="hover:text-accent-2 cursor-pointer transition-colors" onClick={() => onNavigate('home')}>trang chủ</a>
          <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
          <a className="hover:text-accent-2 cursor-pointer transition-colors" onClick={() => onNavigate('category')}>điện thoại</a>
          <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
          <span className="text-primary dark:text-primary-fixed-dim font-semibold">samsung galaxy s24 ultra</span>
        </nav>

        {/* Product Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Image Gallery */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-2 flex md:flex-col gap-3 order-2 md:order-1 select-none">
              <div className="w-16 h-16 bg-surface dark:bg-surface-dim rounded-xl border-2 border-accent overflow-hidden cursor-pointer">
                <img className="w-full h-full object-cover" alt="Gallery 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChgmdoisxRyeU2PAHHHe7q00TYczL75R5cRNPLKu1r_xS7H1w238NU1E9l_V4VUkvtuDG6sI1Ob0bgmlzSPjhNZjfPB9FNLXZIrSB2aKmBwbDP9-hv8AtUEy0KiAqxYQV7MdGQNojo_hQJpLfHeRRlrJBalcPyLvpvPzjg0nb95n_SWNSqDkQjxp8v3XHdNhtGh_4QgNUrLvERNF_I5U1dtwo_ntileHCLvzBD2C1tYKQa4TmVeiYgF2WaPqv7IIGzPEiWuXzUcDk"/>
              </div>
              <div className="w-16 h-16 bg-surface dark:bg-surface-dim rounded-xl border border-outline-variant/60 dark:border-outline-variant/10 overflow-hidden cursor-pointer">
                <img className="w-full h-full object-cover" alt="Gallery 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp-uyL9OwjktsemELr8ZVyPA4pb9BqFmN1QyKeX6LS_DG8WNHrkFOa84UW58HBbHbCXkN3KKW8i16pzRkHyVi9qaY-_IkEV7vsX9LPeSh5dttt0rr4rvO1M5gu4ePAjjBMs2kiKFDWVdo8OyzT4bwZeHaoMJIGPvgHOoqu_EDKP7Q8DGvPVtoTM1qk0A_yj8JtaTuwa-lv9kbGGtQjQ9qUpSIGHeHL_DeOAU63pcvJ_WKmrbaT7Q7zYsrn8V1NWcsnJOoNb-oiT04"/>
              </div>
              <div className="w-16 h-16 bg-surface dark:bg-surface-dim rounded-xl border border-outline-variant/60 dark:border-outline-variant/10 overflow-hidden cursor-pointer">
                <img className="w-full h-full object-cover" alt="Gallery 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdeKxjrW7UAEhM2k-SFvqKFVzAJHoCuTZQ-pJExEPhXjppp_hJAuXYWCBCVDjRu6cEQXoKeQKwvGs_pOY7Gz8-oglfMThRBv8OZgy0bNQcVweR0cR3BNQW4er9VZq_sg74jrfgA8KpjhZP673pH709CrSNvecSl5aRKkZevKJF_WBH_veOaMVY54aYzyI63G5EEYsIsQz8bzLsuQVW2Uz74_IZ0xeGM9QAkeIdxuR0tUfGxhwhY9-b5Fw3WXorZaFZ8teJz9ia3UI"/>
              </div>
              <div className="w-16 h-16 bg-surface dark:bg-surface-dim rounded-xl border border-outline-variant/60 dark:border-outline-variant/10 overflow-hidden cursor-pointer">
                <img className="w-full h-full object-cover" alt="Gallery 4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZOEsrpOSZLk_RYArUKVQQPEWgRcZutVwbiIhcypO8XjyqZzjG8Dn6Modelsforamovingatmosphere.html"/>
              </div>
            </div>
            <div className="md:col-span-10 order-1 md:order-2">
              <div className="aspect-square bg-surface-container-low dark:bg-surface-container rounded-2xl border border-outline-variant/40 dark:border-outline-variant/5 flex items-center justify-center p-2 overflow-hidden select-none">
                <img className="w-full h-full object-cover rounded-xl" alt="Main Product" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtzP-jFaTA_1RC3PfQ2XKFv4v0fhHTPKLzP0BxCXMQ4A0nBHGRj_nPz-Mc437_PRCcRaFLpRE4e_7yjEjSYJyn1giDg0TYmPoQLrN5BiNpgfVdajd9C57lqWCPDt5dtK1JcAZBegkil6_HGfuxf8VGkTPwB6UfJsCvW45SGn8i3ZWNVU3onh5QnfXampeYKwwmsH-c41krDyvoTNDE7bjLxWH8BKl6ZofMuWUUzi3CDhxUXDjjdjf0G8ggia3TuJaGv2FzopdGzcY"/>
              </div>
            </div>
          </div>

          {/* Right: Product Info & Pricing */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="eyebrow block mb-2">01 · device spotlight</span>
              <h2 className="font-display text-[32px] sm:text-[40px] leading-tight text-primary dark:text-primary-fixed-dim">
                samsung galaxy s24 ultra
              </h2>
              <div className="flex flex-wrap items-center gap-3 mt-3 select-none">
                <div className="flex items-center text-accent">
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                  <span className="ml-2 text-xs font-medium text-on-surface-variant/80">(128 reviews)</span>
                </div>
                <span className="px-2.5 py-0.5 bg-surface-container-high dark:bg-surface-container-highest text-on-surface-variant text-[10px] font-label uppercase rounded-full">
                  in stock
                </span>
              </div>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="font-label text-2xl font-bold text-accent">29.990.000₫</span>
              <span className="font-label text-sm text-on-surface-variant/60 line-through">33.990.000₫</span>
              <span className="px-2 py-0.5 bg-error-container text-on-error-container text-[10px] font-label font-bold rounded-lg">-12%</span>
            </div>

            {/* Promotions */}
            <div className="hairline-card p-5 rounded-2xl relative overflow-hidden">
              <span className="eyebrow block mb-3">02 · special campaign</span>
              <ul className="space-y-2 text-sm text-on-surface-variant/80">
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold mt-0.5">•</span> 
                  <span>giảm thêm 1.000.000₫ khi thanh toán qua luxepay.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-accent font-bold mt-0.5">•</span> 
                  <span>tặng ốp lưng chính hãng và bảo hành vàng 12 tháng.</span>
                </li>
              </ul>
            </div>

            {/* Variations */}
            <div className="space-y-6">
              <div>
                <span className="eyebrow block mb-3">color · {currentColorName}</span>
                <div className="flex gap-3">
                  {colors.map(color => (
                    <button 
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      className={`w-8 h-8 rounded-full transition-transform hover:scale-105 cursor-pointer ${
                        selectedColor === color.id 
                        ? 'ring-2 ring-offset-2 ring-accent' 
                        : 'border border-outline-variant/60 dark:border-outline-variant/10'
                      }`}
                      style={{ backgroundColor: color.bg }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
              <div>
                <span className="eyebrow block mb-3">storage · {selectedStorage}</span>
                <div className="flex flex-wrap gap-2">
                  {storages.map(storage => (
                    <button 
                      key={storage}
                      onClick={() => setSelectedStorage(storage)}
                      className={`px-4 py-2 text-xs font-label rounded-lg transition-all cursor-pointer ${
                        selectedStorage === storage 
                        ? 'border border-accent bg-accent/15 text-accent' 
                        : 'border border-outline-variant/60 dark:border-outline-variant/10 text-on-surface-variant hover:border-accent hover:text-accent'
                      }`}
                    >
                      {storage}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex-1 bg-accent text-on-primary font-label text-xs uppercase tracking-wider py-3.5 rounded-full cursor-pointer hover:bg-accent-2 transition-all active:scale-95">
                buy now →
              </button>
              <button className="flex-1 border border-primary dark:border-accent text-primary dark:text-accent font-label text-xs uppercase tracking-wider py-3.5 rounded-full cursor-pointer hover:bg-primary hover:text-on-primary dark:hover:bg-accent dark:hover:text-on-primary transition-all active:scale-95 flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                add to cart
              </button>
            </div>
          </div>
        </div>

        {/* Details & Specs Section */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Description & Specifications */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <span className="eyebrow block mb-3">03 · highlights</span>
              <h3 className="font-display text-2xl text-primary dark:text-primary-fixed-dim mb-6">
                đặc điểm nổi bật
              </h3>
              <div className="prose prose-slate dark:prose-invert max-w-none text-on-surface-variant/80 leading-relaxed space-y-4">
                <p>samsung galaxy s24 ultra định nghĩa lại công nghệ di động cao cấp. bộ xử lý tích hợp trí tuệ nhân tạo galaxy ai hỗ trợ mọi tác vụ công việc từ tìm kiếm nhanh, dịch thuật trực tiếp đến xử lý hình ảnh chuyên nghiệp.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                  <div className="aspect-video rounded-xl overflow-hidden border border-outline-variant/60 dark:border-outline-variant/5">
                    <img className="w-full h-full object-cover" alt="AI Feature" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT4lqxczrVwvpefj67VtCG05pLpEo76ZPpHDnmnnyByd-XnbAK9YSUFvBpdZ6O61oFpYlHwvz3bn9t8H8VRfJ0vIQG2weFh33B8iaefCiNeyMZ6JoHhxEKMDR4cStGSkD2lsVfA5UjxiJMwSPTXnfYiFi25sCzgyURGz582NaKd8x-jlhh-Q1hGr42oC8GHtpshbd4w8ldBIYAFwgR0Vlz6cUiknOFFvAAfhwsQr2etOQ6vE2s1gGOOWZlCiDHWjN6Zd1wBR9qeRk"/>
                  </div>
                  <div className="aspect-video rounded-xl overflow-hidden border border-outline-variant/60 dark:border-outline-variant/5">
                    <img className="w-full h-full object-cover" alt="Camera lens" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqH-CQfd6T-P3kTsocKfzfutRalikhCeWmVWuds6OEDQ-gagJ0xdvJKZ2_YEmvJjCfW2Ylr_1AWYo-rx3iZRK5umAZPjgoKUMciceZWL9kgppIGRR9-MIu5rL5ojL7ZVoBceYIFnoEDFw2iCukCTGh3paa0hiPtmzTgRUP_2y8sBhNwbdaLOp1o8ix-Kj_siTLJaF6_7B0LKGQr0g3qJn5wEIKS12i4wiMK6S6_P5AvwsYPhXFHpfB7msKfl5u84_KU-_0p_mWbq0"/>
                  </div>
                </div>
              </div>
            </section>

            <section id="specs">
              <span className="eyebrow block mb-3">04 · specifications</span>
              <h3 className="font-display text-2xl text-primary dark:text-primary-fixed-dim mb-6">
                thông số kỹ thuật
              </h3>
              <div className="overflow-hidden border border-outline-variant/60 dark:border-outline-variant/5 rounded-2xl">
                <table className="w-full text-left border-collapse text-sm">
                  <tbody>
                    <tr className="bg-surface-container-low/40 dark:bg-surface-container/20">
                      <th className="p-4 font-bold text-primary dark:text-primary-fixed-dim w-1/3">Màn hình</th>
                      <td className="p-4 text-on-surface-variant/80 font-label text-xs">6.8", LTPO AMOLED 2X, 120Hz</td>
                    </tr>
                    <tr className="border-t border-outline-variant/30 dark:border-outline-variant/5">
                      <th className="p-4 font-bold text-primary dark:text-primary-fixed-dim">Vi xử lý</th>
                      <td className="p-4 text-on-surface-variant/80 font-label text-xs">Snapdragon 8 Gen 3 for Galaxy</td>
                    </tr>
                    <tr className="bg-surface-container-low/40 dark:bg-surface-container/20 border-t border-outline-variant/30 dark:border-outline-variant/5">
                      <th className="p-4 font-bold text-primary dark:text-primary-fixed-dim w-1/3">RAM</th>
                      <td className="p-4 text-on-surface-variant/80 font-label text-xs">12GB</td>
                    </tr>
                    <tr className="border-t border-outline-variant/30 dark:border-outline-variant/5">
                      <th className="p-4 font-bold text-primary dark:text-primary-fixed-dim">Camera sau</th>
                      <td className="p-4 text-on-surface-variant/80 font-label text-xs">200 MP + 50 MP + 10 MP + 12 MP</td>
                    </tr>
                    <tr className="bg-surface-container-low/40 dark:bg-surface-container/20 border-t border-outline-variant/30 dark:border-outline-variant/5">
                      <th className="p-4 font-bold text-primary dark:text-primary-fixed-dim w-1/3">Pin &amp; Sạc</th>
                      <td className="p-4 text-on-surface-variant/80 font-label text-xs">5000 mAh, 45W Fast Charging</td>
                    </tr>
                    <tr className="border-t border-outline-variant/30 dark:border-outline-variant/5">
                      <th className="p-4 font-bold text-primary dark:text-primary-fixed-dim">Chống nước</th>
                      <td className="p-4 text-on-surface-variant/80 font-label text-xs">IP68</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Right: Review Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="p-6 hairline-card rounded-2xl">
              <span className="eyebrow block mb-3">05 · review metrics</span>
              <h3 className="font-display text-2xl mb-6 text-primary dark:text-primary-fixed-dim">
                đánh giá khách hàng
              </h3>
              <div className="flex items-center gap-4 mb-8">
                <span className="font-label text-4xl font-bold text-primary dark:text-primary-fixed-dim leading-none">4.9</span>
                <div className="flex flex-col">
                  <div className="flex text-accent">
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <span className="text-[10px] font-label text-on-surface-variant/60 mt-1">128 reviews</span>
                </div>
              </div>
              
              <div className="space-y-6 max-h-[360px] overflow-y-auto pr-2 custom-scrollbar">
                {/* Review 1 */}
                <div className="space-y-2 border-b border-outline-variant/30 dark:border-outline-variant/5 pb-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-primary dark:text-primary-fixed-dim">Minh Hoàng</span>
                    <span className="font-label text-[10px] text-on-surface-variant/60">2 days ago</span>
                  </div>
                  <div className="flex text-accent text-[12px]">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="text-xs text-on-surface-variant/80 leading-relaxed font-body">"sản phẩm cực kỳ đẳng cấp, ai hỗ trợ công việc rất nhiều. nhân viên tư vấn nhiệt tình."</p>
                </div>
                {/* Review 2 */}
                <div className="space-y-2 border-b border-outline-variant/30 dark:border-outline-variant/5 pb-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-primary dark:text-primary-fixed-dim">Phương Anh</span>
                    <span className="font-label text-[10px] text-on-surface-variant/60">1 week ago</span>
                  </div>
                  <div className="flex text-accent text-[12px]">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="text-xs text-on-surface-variant/80 leading-relaxed font-body">"camera 200mp chụp đêm quá xuất sắc. rất hài lòng với s24 ultra."</p>
                </div>
              </div>
              <button className="w-full mt-6 py-2.5 border border-outline-variant/60 dark:border-outline-variant/10 rounded-full font-label text-[10px] uppercase tracking-wider text-on-surface hover:bg-surface-container transition-colors cursor-pointer">
                all reviews →
              </button>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        <section className="mt-24 border-t border-outline-variant/60 dark:border-outline-variant/5 pt-20">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="eyebrow">06 · related items</span>
              <h3 className="font-display text-[28px] text-primary dark:text-primary-fixed-dim mt-2">sản phẩm tương tự</h3>
            </div>
            <a 
              className="text-accent font-label text-[11px] uppercase tracking-wider hover:opacity-80 flex items-center gap-1 cursor-pointer"
              onClick={() => onNavigate('category')}
            >
              xem tất cả →
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div 
              className="hairline-card p-4 rounded-xl cursor-pointer flex flex-col justify-between"
              onClick={() => onNavigate('detail')}
            >
              <div>
                <div className="aspect-square mb-4 p-2 flex items-center justify-center overflow-hidden bg-surface-container-low dark:bg-surface-container rounded-lg">
                  <img className="w-full h-full object-cover rounded-md" alt="iPhone 15 Pro Max" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJf-k_cu-kyO0Z2DxGjzB6SFQjvbwVQz5O5cY_tPdDg-2kubVwkwjlyltqU-DA97AfepajGv6RSPBesRFePChqsfDRWic0DhPTR-DF8wqv4sF8OzimpMMXKXTPz1UoRauh5OZtoBxTkeAhTKjml_lIe2p0VA8w9nGOlZkL-NiqZuXZVbgutpXmibdi-1UaOycd2S9j46T3Bjy-x_jAjFIReV4XeCop3wv2ifbX2i55hBEtbuNsPePemK5ihiXyflyWrGs-fV9_ndU"/>
                </div>
                <h4 className="font-display text-base text-primary dark:text-primary-fixed-dim mb-1 truncate">iPhone 15 Pro Max 256GB</h4>
              </div>
              <div className="mt-2">
                <p className="text-accent font-label text-xs uppercase tracking-wide font-bold">28.490.000₫</p>
                <p className="font-label text-[10px] text-on-surface-variant/50 line-through">30.990.000₫</p>
              </div>
            </div>
            <div 
              className="hairline-card p-4 rounded-xl cursor-pointer flex flex-col justify-between"
              onClick={() => onNavigate('detail')}
            >
              <div>
                <div className="aspect-square mb-4 p-2 flex items-center justify-center overflow-hidden bg-surface-container-low dark:bg-surface-container rounded-lg">
                  <img className="w-full h-full object-cover rounded-md" alt="Galaxy Z Fold5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnJZ0vwlm4DpOZK_kp4PgGe4BxjzjsMp3mCoLrI9IIMIG2rTLXBfBTXyCN9pSYxVNBOulwqQrQcyc2DR9j0VVkytYZz55SXgLk93IsOE65sBmbBrgowvWojmrhCTuo14v_7AGq4e4PAR74fuke8GTyt6zE-Whkgp3EYCb5_d371m_Y1DTp06-X7_z4f5qxz382Q5TaKgm1mWiXEE6o2n85YDmmCZpPD9c0uZiDkqZRybXGZr-qEvQlJ-XFpln7tmQvVBmYyPO4L5k"/>
                </div>
                <h4 className="font-display text-base text-primary dark:text-primary-fixed-dim mb-1 truncate">Galaxy Z Fold5 512GB</h4>
              </div>
              <div className="mt-2">
                <p className="text-accent font-label text-xs uppercase tracking-wide font-bold">31.990.000₫</p>
                <p className="font-label text-[10px] text-on-surface-variant/50 line-through">35.990.000₫</p>
              </div>
            </div>
            <div 
              className="hairline-card p-4 rounded-xl cursor-pointer flex flex-col justify-between"
              onClick={() => onNavigate('detail')}
            >
              <div>
                <div className="aspect-square mb-4 p-2 flex items-center justify-center overflow-hidden bg-surface-container-low dark:bg-surface-container rounded-lg">
                  <img className="w-full h-full object-cover rounded-md" alt="Xiaomi 14 Ultra" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6P6tmTiuHEOJzZ7a1Bi190Sm2ec0K7aLUPlsExjVyLfpsRGaHSkW_0sRpKmnrgM49jHAJ1nKzA0_qVAHlbXPai0IIlFjbFMxR0z8HPkU1vPlf_5XDksg8PBoy4_QlgUVCQPVOKBrhyV-wMdSzVY-h9yLIkCm4nDV0hIaXAEgWQAN3T__LDAkLWdIMcdt3hUXvEeTmjfgET-tg26XzzKDV6djkXHhYfV7mSAU-2pl3tc9AT2Vj8lOWwQ183fRPx8KNl6QTvbFQum0"/>
                </div>
                <h4 className="font-display text-base text-primary dark:text-primary-fixed-dim mb-1 truncate">Xiaomi 14 Ultra 12GB/256GB</h4>
              </div>
              <div className="mt-2">
                <p className="text-accent font-label text-xs uppercase tracking-wide font-bold">26.990.000₫</p>
                <p className="font-label text-[10px] text-on-surface-variant/50 line-through">29.990.000₫</p>
              </div>
            </div>
            <div 
              className="hairline-card p-4 rounded-xl cursor-pointer flex flex-col justify-between"
              onClick={() => onNavigate('detail')}
            >
              <div>
                <div className="aspect-square mb-4 p-2 flex items-center justify-center overflow-hidden bg-surface-container-low dark:bg-surface-container rounded-lg">
                  <img className="w-full h-full object-cover rounded-md" alt="Samsung Galaxy S24+" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp4a1bXBAKEvAGZ-MoW4bAfQvhSZCvxIzK3V9UPsJTStG01MkaiPVVv_gsFISdcNlEOnJB_FbXcl1nncGf4wfm1VSdqyfz19UUbhAPv_P1pml8Oc5X5qBtMyu50gKiwPlYsdINNHvSj6cWYCJPnsYV1H_fs63WsNtJNtyKN-uWl5xL2u0QjoWghxFq6J6FoIrTg5v3iF_gPUUNGGWHqfH8dojYigMlTiXITA5mlFUakr7Ph7Wei6LWtyz1bIxwbX3PPl3lOJpEsjc"/>
                </div>
                <h4 className="font-display text-base text-primary dark:text-primary-fixed-dim mb-1 truncate">Samsung Galaxy S24+ 256GB</h4>
              </div>
              <div className="mt-2">
                <p className="text-accent font-label text-xs uppercase tracking-wide font-bold">21.990.000₫</p>
                <p className="font-label text-[10px] text-on-surface-variant/50 line-through">24.990.000₫</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onNavigate={onNavigate} />
    </>
  );
}

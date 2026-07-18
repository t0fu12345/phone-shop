import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

/* Hallmark · macrostructure: Letter / Document-led · theme: lumen · drop: night (dark) / day (light) */
export default function Cart({ onNavigate, theme, onToggleTheme }) {
  const [items, setItems] = useState([
    { 
      id: 1, 
      name: 'iPhone 15 Pro Max', 
      desc: 'Natural Titanium, 256GB', 
      price: 34990000, 
      qty: 1, 
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBv1wXj1RVTZV7H9XQ2x1a7sDTI0tDtFZfKMinxK_sux4ynBE4csyGXPG2npm57k6qF8WMRXleBdlcToZKxOab75hSXiFK81Wj0bqYjkQtfqTQ3q9B90-fpnPa02fjqhiZs1O1ROrPwdhAEChS_zmglMgewpBqc4cufr6sWSpI7DA9uQGwXZL40-w0XKhjg0wl1RRekQupsBLltfTxhuDz8hmV5uQDbkbpZ-QgoJcZFt-GsQiFCt1FA24UdFgf7BAqoNL-6ZGlixnI' 
    },
    { 
      id: 2, 
      name: 'Samsung Galaxy S24 Ultra', 
      desc: 'Titanium Gray, 512GB', 
      price: 29990000, 
      qty: 1, 
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAefaCNHYnAvD82Tszo9HtqB-f7qgg-5XY9rITDlaXHRxrf1MCEb3K1B9z8o5z4HRbJTbVBITKi5Pe9p5SfH6qkk_-Ok_k_Z1yb9eL6Mn8iR_5vkt3Se-4LbNr1FSSBltvcA22Fvf-Dhf4c5LPX_-_4Gm2uv7JQ4zrTLwDPck6PcpyXsTVUQu_tIUFtFJn4MFDt3DoFJbDuAc0Z52Tg9nXnhFblU5uA5aDkRNqQjoVRDHF8EJu7ioygKhqR5gQ01XfRIq8DXqoS0bE' 
    }
  ]);

  const updateQty = (id, delta) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, qty: Math.max(1, item.qty + delta) };
      }
      return item;
    }));
  };

  const formatPrice = (price) => {
    return price.toLocaleString('vi-VN') + '₫';
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discount = 1000000;
  const total = subtotal - discount;

  return (
    <>
      <Header onNavigate={onNavigate} theme={theme} onToggleTheme={onToggleTheme} />

      <main className="max-w-container-max mx-auto px-gutter py-24 min-h-screen">
        <div className="mb-10">
          <span className="eyebrow block mb-3">01 · checkout register</span>
          <h2 className="font-display text-[32px] sm:text-[44px] text-primary dark:text-primary-fixed-dim leading-none">
            giỏ hàng của bạn
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Product List Section */}
          <div className="lg:col-span-8 space-y-6">
            {items.map(item => (
              <div 
                key={item.id} 
                className="hairline-card rounded-2xl p-5 flex flex-col sm:flex-row gap-6 items-center"
              >
                <div 
                  className="w-24 h-24 flex-shrink-0 bg-surface-container-low dark:bg-surface-container rounded-xl p-1 flex items-center justify-center cursor-pointer overflow-hidden border border-outline-variant/60" 
                  onClick={() => onNavigate('detail')}
                >
                  <img className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300" alt={item.name} src={item.img}/>
                </div>
                <div className="flex-grow w-full">
                  <div className="flex justify-between items-start w-full">
                    <div className="cursor-pointer group" onClick={() => onNavigate('detail')}>
                      <h3 className="font-display text-lg text-primary dark:text-primary-fixed-dim hover:text-accent-2 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-on-surface-variant/70 text-xs mt-1 font-body">{item.desc}</p>
                    </div>
                    <button className="text-error hover:bg-error-container/20 p-1.5 rounded-full transition-colors cursor-pointer flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px] select-none">delete</span>
                    </button>
                  </div>
                  <div className="flex justify-between items-center mt-6 w-full">
                    <div className="flex items-center border border-outline-variant/60 dark:border-outline-variant/10 rounded-full px-2 py-0.5 bg-surface dark:bg-surface-dim">
                      <button 
                        className="p-1 text-on-surface-variant/80 hover:text-accent transition-colors cursor-pointer active:scale-75 flex items-center justify-center" 
                        onClick={() => updateQty(item.id, -1)}
                      >
                        <span className="material-symbols-outlined text-[16px] select-none">remove</span>
                      </button>
                      <span className="w-6 text-center font-label text-xs text-on-surface font-semibold select-none">{item.qty}</span>
                      <button 
                        className="p-1 text-on-surface-variant/80 hover:text-accent transition-colors cursor-pointer active:scale-75 flex items-center justify-center" 
                        onClick={() => updateQty(item.id, 1)}
                      >
                        <span className="material-symbols-outlined text-[16px] select-none">add</span>
                      </button>
                    </div>
                    <span className="font-label text-sm text-accent font-bold">{formatPrice(item.price)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="lg:col-span-4">
            <div className="hairline-card rounded-2xl p-6 sticky top-24">
              <span className="eyebrow block mb-3">02 · receipt statement</span>
              <h3 className="font-display text-2xl mb-6 text-primary dark:text-primary-fixed-dim">
                tóm tắt đơn hàng
              </h3>
              
              <div className="space-y-4 mb-6 text-xs">
                <div className="flex justify-between text-on-surface-variant/95">
                  <span>tạm tính</span>
                  <span className="font-label font-medium text-on-surface">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-green-600 dark:text-green-400">
                  <span>khuyến mãi</span>
                  <span className="font-label">-{formatPrice(discount)}</span>
                </div>
                <div className="flex justify-between text-on-surface-variant/95">
                  <span>vận chuyển</span>
                  <span className="font-label text-accent uppercase font-bold">free</span>
                </div>
                <div className="pt-4 border-t border-outline-variant/60 dark:border-outline-variant/10 flex justify-between items-end">
                  <span className="font-display text-lg text-primary dark:text-primary-fixed-dim">tổng cộng</span>
                  <div className="text-right">
                    <span className="block font-label text-base text-accent font-bold">{formatPrice(total)}</span>
                    <span className="text-[9px] text-on-surface-variant/50 uppercase font-label">(vat included)</span>
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6 pt-4 border-t border-outline-variant/30 dark:border-outline-variant/5">
                <span className="eyebrow block mb-2">promo code</span>
                <div className="flex gap-2">
                  <input 
                    className="flex-grow bg-surface border border-outline-variant/60 dark:border-outline-variant/10 rounded-full px-4 py-2 text-xs focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-all text-on-surface placeholder:text-on-surface-variant/40" 
                    placeholder="nhập mã" 
                    type="text"
                  />
                  <button className="bg-primary text-on-primary dark:bg-accent dark:text-on-primary px-5 py-2 rounded-full font-label text-[10px] uppercase tracking-wider hover:bg-accent-2 transition-all cursor-pointer">
                    apply
                  </button>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-accent text-on-primary py-3 rounded-full font-label text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-accent-2 transition-all active:scale-[0.98] group cursor-pointer duration-300">
                <span>checkout process →</span>
              </button>
              
              <div className="mt-6 flex flex-col gap-3 border-t border-outline-variant/30 dark:border-outline-variant/5 pt-4 select-none">
                <div className="flex items-center gap-2 text-on-surface-variant/70 text-xs">
                  <span className="material-symbols-outlined text-accent text-[16px]">verified_user</span>
                  <span>thanh toán bảo mật 100%</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant/70 text-xs">
                  <span className="material-symbols-outlined text-accent text-[16px]">local_shipping</span>
                  <span>giao hàng nhanh toàn quốc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
    </>
  );
}

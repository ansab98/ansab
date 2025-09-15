/*
Ansab AlKhair - Single-file React component (Tailwind CSS required)
How to use:
1. Create a React app (Vite or Create React App).
2. Install Tailwind CSS and configure (https://tailwindcss.com/docs/installation).
3. Place this file as `src/App.jsx` (or adjust import).
4. Replace placeholder images and text as needed. Contact form uses Formspree placeholder — replace FORM_ENDPOINT.
5. Deploy to Vercel / Netlify / Surge.

This component is built RTL (Arabic) and responsive. Edit copy and portfolio images.
*/

import React from 'react';

const services = [
  { title: 'تصميم داخلي متكامل', desc: 'تصميم مساحات داخلية للفلل والمشاريع التجارية مع مراعاة الذوق والوظيفة.' },
  { title: 'تفصيل اثاث حسب الطلب', desc: 'تفصيل أثاث عالي الجودة يناسب كل مساحة وبمواصفات مقاومة ومتينة.' },
  { title: 'تنفيذ مشاريع متكاملة', desc: 'إدارة المشروع من التصميم حتى التسليم مع متابعة جودة التنفيذ.' },
];

const portfolio = [
  { title: 'فيلا نموذجية - الرياض', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=60' },
  { title: 'مجمع سكني - الخبر', img: 'https://images.unsplash.com/photo-1582582494703-7c2c3b2d2a6f?auto=format&fit=crop&w=1200&q=60' },
  { title: 'ديكور مكتب - جدة', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=60' },
  { title: 'غرفة معيشة - تصميم عصري', img: 'https://images.unsplash.com/photo-1505691723518-36a2b3b6f5a2?auto=format&fit=crop&w=1200&q=60' },
];

export default function App() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-gray-50 text-gray-800">
      {/* NAV */}
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-white font-bold">ع</div>
            <div>
              <h1 className="text-lg font-semibold">شركة أنساب الخير</h1>
              <p className="text-sm text-gray-500">تصميم وتنفيذ الأثاث للمشاريع والفلل</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <a href="#services" className="hover:text-slate-700">خدماتنا</a>
            <a href="#portfolio" className="hover:text-slate-700">أعمالنا</a>
            <a href="#about" className="hover:text-slate-700">من نحن</a>
            <a href="#contact" className="text-white bg-slate-800 px-4 py-2 rounded-md">تواصل معنا</a>
          </nav>
          <div className="md:hidden">{/* mobile menu icon */}
            <button aria-label="فتح القائمة" className="p-2">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-4">نحو مساحات أنيقة ومريحة</h2>
            <p className="text-lg text-gray-600 mb-6">نحن في أنساب الخير نصمم ونفصل أثاث بحسب احتياجاتك للفلل والمشاريع. من التصميم التفصيلي إلى تصنيعه وتركيبه، نقدم حلولًا متكاملة ومواد عالية الجودة.</p>
            <div className="flex gap-4">
              <a href="#portfolio" className="inline-block px-5 py-3 bg-slate-800 text-white rounded-md">شاهد الأعمال</a>
              <a href="#contact" className="inline-block px-5 py-3 border border-slate-300 rounded-md">احصل على عرض سعر</a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold">عملائنا</h3>
                <p className="text-sm text-gray-500">شركات عقارية وملاك فلل</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold">المواد</h3>
                <p className="text-sm text-gray-500">خشب صلب، MDF، قماش عالي التحمل</p>
              </div>
            </div>
          </div>
          <div>
            <div className="aspect-w-16 aspect-h-10 rounded-xl overflow-hidden shadow-md">
              <img src={portfolio[0].img} alt="فيلا" className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <img src={portfolio[1].img} alt="مشروع" className="w-full h-28 object-cover rounded-lg shadow-sm" />
              <img src={portfolio[2].img} alt="مكتب" className="w-full h-28 object-cover rounded-lg shadow-sm" />
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mt-16">
          <h3 className="text-2xl font-bold mb-6">خدماتنا</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow-sm">
                <h4 className="text-lg font-semibold mb-2">{s.title}</h4>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="mt-16">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">أعمالنا</h3>
            <a href="#contact" className="text-sm text-slate-600">طلب معرض أعمال كامل</a>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolio.map((p, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden shadow">
                <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
                <div className="p-3 bg-white">
                  <h4 className="font-semibold">{p.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-16 bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold mb-3">من نحن</h3>
          <p className="text-gray-600">شركة أنساب الخير متخصصة في التصميم الداخلي وتصنيع الأثاث للفلل والمشاريع. نعمل بفِرق تصميم وورشة تنفيذ داخلية تضمن ضبط الجودة والالتزام بالمواعيد. رؤيتنا: خلق مساحات تلبي احتياجات العملاء وتدوم طويلاً.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded">
              <h5 className="font-semibold">مدة التنفيذ</h5>
              <p className="text-sm text-gray-500">تعتمد على نوع المشروع — نقدم جدول زمني واضح لكل عقد.</p>
            </div>
            <div className="p-4 border rounded">
              <h5 className="font-semibold">خدمة ما بعد البيع</h5>
              <p className="text-sm text-gray-500">ضمان على التصنيع وخدمة تركيب وصيانة حسب الاتفاق.</p>
            </div>
            <div className="p-4 border rounded">
              <h5 className="font-semibold">معداتنا</h5>
              <p className="text-sm text-gray-500">ورشة مجهزة وآلات CNC لضمان دقة التصنيع.</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-16">
          <h3 className="text-2xl font-bold mb-4">تواصل معنا</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-2">معلومات التواصل</h4>
              <p className="text-sm text-gray-600">العنوان: الدمام - المنطقة الشرقية</p>
              <p className="text-sm text-gray-600">الهاتف: 012-3456789</p>
              <p className="text-sm text-gray-600">البريد: info@ansabalkhair.com</p>

              <div className="mt-4">
                <h5 className="font-medium">ساعات العمل</h5>
                <p className="text-sm text-gray-500">السبت - الخميس: 8 صباحًا - 6 مساءً</p>
              </div>
            </div>

            <form action="https://formspree.io/f/FORM_ENDPOINT" method="POST" className="bg-white p-6 rounded-xl shadow-sm">
              <label className="block mb-2 text-sm font-medium">الاسم</label>
              <input name="name" required className="w-full p-3 border rounded mb-3" />

              <label className="block mb-2 text-sm font-medium">الهاتف أو الجوال</label>
              <input name="phone" required className="w-full p-3 border rounded mb-3" />

              <label className="block mb-2 text-sm font-medium">البريد الإلكتروني</label>
              <input name="email" type="email" required className="w-full p-3 border rounded mb-3" />

              <label className="block mb-2 text-sm font-medium">تفاصيل الطلب</label>
              <textarea name="message" rows={4} className="w-full p-3 border rounded mb-3" />

              <button type="submit" className="w-full py-3 bg-slate-800 text-white rounded">إرسال الطلب</button>

              <p className="text-xs text-gray-400 mt-3">سيتم التواصل معك خلال 1-2 يوم عمل.</p>
            </form>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 bg-slate-800 text-white p-6 rounded-xl text-center">
          <h4 className="text-xl font-bold">هل مستعد لبدء مشروعك؟</h4>
          <p className="mt-2">أرسل تفاصيل المشروع وسنعود إليك بعرض تفصيلي وجدول زمني.</p>
          <div className="mt-4">
            <a href="#contact" className="inline-block px-6 py-3 bg-white text-slate-800 rounded">اطلب عرض سعر</a>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold">أنساب الخير</p>
            <p className="text-sm text-gray-500">جميع الحقوق محفوظة © {new Date().getFullYear()}</p>
          </div>
          <div className="text-sm text-gray-600">تصميم وتنفيذ — أنساب الخير · هاتف: 012-3456789</div>
        </div>
      </footer>
    </div>
  );
}

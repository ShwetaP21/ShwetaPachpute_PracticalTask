import Link from "next/link";

const socialIcons = [
  { icon: "📷", label: "Instagram" },
  { icon: "✕", label: "X" },
  { icon: "in", label: "LinkedIn" },
  { icon: "f", label: "Facebook" },
  { icon: "▶", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="mt-12 bg-[#FFF1EF] relative overflow-hidden" style={{ minHeight: "480px" }}>
      
      <div 
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none select-none z-0"
        style={{
          bottom: "-28px",
          opacity: 0.06,
        }}
      >
        <span
          className="font-black text-[#FF3E1D] tracking-[-4px] leading-none whitespace-nowrap"
          style={{ 
            fontSize: "230px", 
            lineHeight: "1",
            fontWeight: 900 
          }}
        >
          AAVORide
        </span>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 pt-14 pb-24 grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
     
        <div>
          <p className="font-extrabold text-[28px] leading-none text-[#FF3E1D] tracking-[-0.8px] mb-1">
            AAVORide
          </p>
          <p className="text-xs text-gray-400 mb-4">Powered by AAVORide Premium Mobility.</p>
          
          <p className="text-[15px] text-gray-600 leading-relaxed">
            Book affordable cabs with transparent pricing, verified drivers, and smooth rides across India. 
            From quick city trips to long-distance journeys, AAVORide makes every ride stress-free and budget-friendly.
          </p>

          <div className="flex gap-3 mt-8">
            {socialIcons.map(({ icon, label }) => (
              <button
                key={label}
                aria-label={label}
                className="w-9 h-9 rounded-full border border-[#FFCCC4] flex items-center justify-center text-[#FF3E1D] hover:bg-white hover:border-[#FF3E1D] transition-all text-lg"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>
        <div className="md:pl-8">
          <p className="font-bold text-base mb-5 text-gray-900">Quick Links</p>
          {["Home", "Our Services", "Become a Partner", "Blog", "FAQ"].map((link) => (
            <Link
              key={link}
              href="#"
              className="block text-[15px] text-gray-600 mb-3.5 hover:text-[#FF3E1D] transition-colors"
            >
              {link}
            </Link>
          ))}
        </div>

        <div>
          <p className="font-bold text-base mb-5 text-gray-900">Contact Us</p>

         <div className="bg-white rounded-2xl p-5 mb-4 flex gap-4 items-center shadow-sm">
            <div className="w-11 h-10 bg-[#EFF4FF] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM10 9L18 4V2L10 7L2 2V4L10 9Z" fill="#FF3E1D"/>
              </svg>
            </div>
            <div>
              <p className="text-[10px] font-semibold tracking-widest text-gray-400">EMAIL SUPPORT</p>
              <a href="mailto:support@aavoride.in" className="text-[15px] font-semibold text-gray-900 hover:text-[#FF3E1D]">
                support@aavoride.in
              </a>
            </div>
          </div>

         <div className="bg-white rounded-2xl p-5 flex gap-4 items-center shadow-sm">
            <div className="w-11 h-10 bg-[#EFF4FF] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z" fill="#FF3E1D"/>
              </svg>
            </div>
            <div>
              <p className="text-[10px] font-semibold tracking-widest text-gray-400">HEADQUARTER</p>
              <p className="text-[15px] font-semibold text-gray-900">Ahmedabad, India</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 border-t border-[#FFCCC4] py-5 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-500 text-[13px]">
            © 2026 AAVORide Premium Mobility. All rights reserved. Driven by Excellence.
          </p>

          <div className="flex gap-6 text-gray-500 text-[13px]">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
              <Link key={item} href="#" className="hover:text-[#FF3E1D] transition-colors">
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-[#FF3E1D] text-white text-xs font-bold px-5 py-2 rounded-full flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              AAVORide
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
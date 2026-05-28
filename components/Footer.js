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
      
      {/* WATERMARK */}
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

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 pt-14 pb-24 grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        
        {/* Left Column - Brand */}
        <div>
          <p className="font-extrabold text-[28px] leading-none text-[#FF3E1D] tracking-[-0.8px] mb-1">
            AAVORide
          </p>
          <p className="text-xs text-gray-400 mb-4">Powered by AAVORide Premium Mobility.</p>
          
          <p className="text-[15px] text-gray-600 leading-relaxed">
            Book affordable cabs with transparent pricing, verified drivers, and smooth rides across India. 
            From quick city trips to long-distance journeys, AAVORide makes every ride stress-free and budget-friendly.
          </p>

          {/* Social Icons - Matching Reference */}
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

        {/* Quick Links */}
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

        {/* Contact Us - More Accurate Cards */}
        <div>
          <p className="font-bold text-base mb-5 text-gray-900">Contact Us</p>

          {/* Email Support Card */}
          <div className="bg-white rounded-2xl p-4 mb-4 flex gap-4 items-center shadow-sm">
            <div className="w-10 h-10 bg-[#FF3E1D] rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-white text-2xl">✉️</span>
            </div>
            <div>
              <p className="text-[10px] font-semibold tracking-widest text-gray-400">EMAIL SUPPORT</p>
              <a href="mailto:support@aavoride.in" className="text-[15px] font-semibold text-gray-900">
                support@aavoride.in
              </a>
            </div>
          </div>

          {/* Headquarters Card */}
          <div className="bg-white rounded-2xl p-4 flex gap-4 items-center shadow-sm">
            <div className="w-10 h-10 bg-[#FF3E1D] rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-white text-2xl">📍</span>
            </div>
            <div>
              <p className="text-[10px] font-semibold tracking-widest text-gray-400">HEADQUARTER</p>
              <p className="text-[15px] font-semibold text-gray-900">Ahmedabad, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
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

          {/* Red AAVORide Button */}
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
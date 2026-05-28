import Link from "next/link";

const socialIcons = [
  { icon: "📷", label: "Instagram" },
  { icon: "✕", label: "Twitter" },
  { icon: "in", label: "LinkedIn" },
  { icon: "f", label: "Facebook" },
  { icon: "▶", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="mt-12 relative overflow-hidden" style={{ background: "#FFF1EF" }}>

      {/* Watermark — large, centered, low */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none select-none w-full text-center"
        style={{ bottom: "-20px", zIndex: 0 }}
      >
        <span
          className="font-extrabold whitespace-nowrap"
          style={{
            fontSize: "clamp(120px, 20vw, 260px)",
            color: "#FF3E1D",
            opacity: 0.08,
            letterSpacing: "-4px",
            lineHeight: 1,
          }}
        >
          AAVORide
        </span>
      </div>

      {/* Main grid */}
      <div className="max-w-[1120px] mx-auto px-6 pt-14 pb-10 grid grid-cols-1 md:grid-cols-3 gap-10 relative" style={{ zIndex: 1 }}>

        {/* Col 1 — Brand */}
        <div>
          <p className="font-extrabold text-[24px] text-[#FF3E1D] mb-1 tracking-tight">AAVORide</p>
          <p className="text-xs text-gray-400 mb-4">Powered by AAVORide Premium Mobility.</p>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            Book affordable cabs with transparent pricing, verified drivers, and smooth rides across India.
            From quick city trips to long-distance journeys, AAVORide makes every ride stress-free and budget-friendly.
          </p>
          <div className="flex gap-2.5">
            {socialIcons.map(({ icon, label }) => (
              <button
                key={label}
                aria-label={label}
                className="w-9 h-9 rounded-full border border-[#FFCCC4] bg-transparent flex items-center justify-center text-xs font-bold cursor-pointer hover:bg-white transition-colors text-[#FF3E1D]"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div className="md:pl-6">
          <p className="font-bold text-sm mb-5 text-gray-900">Quick Links</p>
          {["Home", "Our Services", "Become a Partner", "Blog", "FAQ"].map((link) => (
            <Link
              key={link}
              href="#"
              className="block text-gray-500 text-sm mb-3.5 no-underline hover:text-[#FF3E1D] transition-colors"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Col 3 — Contact */}
        <div>
          <p className="font-bold text-sm mb-5 text-gray-900">Contact Us</p>

          <div className="bg-white rounded-2xl px-4 py-3.5 mb-3 flex gap-3.5 items-center border border-gray-100">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0 text-base"
              style={{ background: "#FF3E1D" }}
            >
              ✉
            </div>
            <div>
              <p className="text-[9px] font-bold tracking-[1.5px] text-gray-400 mb-0.5">EMAIL SUPPORT</p>
              <p className="text-[13px] font-bold text-gray-900">support@aavoride.in</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl px-4 py-3.5 flex gap-3.5 items-center border border-gray-100">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0 text-base"
              style={{ background: "#FF3E1D" }}
            >
              📍
            </div>
            <div>
              <p className="text-[9px] font-bold tracking-[1.5px] text-gray-400 mb-0.5">HEADQUARTER</p>
              <p className="text-[13px] font-bold text-gray-900">Ahmedabad, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-[1120px] mx-auto px-6 py-4 border-t border-[#FFCCC4] flex flex-col md:flex-row justify-between items-center gap-3"
        style={{ zIndex: 1, position: "relative" }}
      >
        <p className="text-xs text-gray-400 flex items-center gap-2 flex-wrap">
          © 2026 AAVORide Premium Mobility. All rights reserved. Driven by Excellence.
          <span
            className="text-white text-[10px] px-3 py-1 rounded-full font-bold flex items-center gap-1.5"
            style={{ background: "#FF3E1D" }}
          >
            <span className="w-1.5 h-1.5 bg-white rounded-full inline-block"></span>
            AAVORide
          </span>
        </p>
        <div className="flex gap-5">
          {["Privacy Policy", "Terms of Service", "Sitemap"].map((l) => (
            <Link key={l} href="#" className="text-xs text-gray-400 no-underline hover:text-[#FF3E1D] transition-colors">
              {l}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
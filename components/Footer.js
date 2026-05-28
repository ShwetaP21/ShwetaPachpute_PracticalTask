import Link from "next/link";

const socialIcons = [
  {
    label: "Instagram",
    svg: (
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.75 7.41667C0.75 4.27417 0.75 2.7025 1.72667 1.72667C2.70333 0.750833 4.27417 0.75 7.41667 0.75H9.08333C12.2258 0.75 13.7975 0.75 14.7733 1.72667C15.7492 2.70333 15.75 4.27417 15.75 7.41667V9.08333C15.75 12.2258 15.75 13.7975 14.7733 14.7733C13.7967 15.7492 12.2258 15.75 9.08333 15.75H7.41667C4.27417 15.75 2.7025 15.75 1.72667 14.7733C0.750833 13.7967 0.75 12.2258 0.75 9.08333V7.41667Z" stroke="#FF3E1D" strokeWidth="1.5"/>
        <path d="M12 5.75C12.6904 5.75 13.25 5.19036 13.25 4.5C13.25 3.80964 12.6904 3.25 12 3.25C11.3096 3.25 10.75 3.80964 10.75 4.5C10.75 5.19036 11.3096 5.75 12 5.75Z" fill="#FF3E1D"/>
        <path d="M8.25 10.75C9.63071 10.75 10.75 9.63071 10.75 8.25C10.75 6.86929 9.63071 5.75 8.25 5.75C6.86929 5.75 5.75 6.86929 5.75 8.25C5.75 9.63071 6.86929 10.75 8.25 10.75Z" stroke="#FF3E1D" strokeWidth="1.5"/>
      </svg>
    )
  },
  {
    label: "X",
    svg: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.025 0.655762H13.172L8.482 6.02976L14 13.3438H9.68L6.294 8.90876L2.424 13.3438H0.275L5.291 7.59376L0 0.656762H4.43L7.486 4.70976L11.025 0.655762ZM10.27 12.0558H11.46L3.78 1.87676H2.504L10.27 12.0558Z" fill="#FF3E1D"/>
      </svg>
    )
  },
  {
    label: "LinkedIn",
    svg: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.084 1.767C3.08671 2.11279 2.95321 2.44574 2.71238 2.69388C2.47154 2.94202 2.14271 3.08539 1.797 3.093C1.45201 3.08047 1.12503 2.93586 0.883635 2.68907C0.642243 2.44228 0.504902 2.11218 0.5 1.767C0.514909 1.4306 0.65724 1.11248 0.89811 0.877181C1.13898 0.641882 1.46035 0.507034 1.797 0.5C2.13266 0.507168 2.45289 0.642355 2.69214 0.877889C2.93139 1.11342 3.07158 1.43149 3.084 1.767ZM0.639 5.449C0.639 4.687 1.124 4.806 1.797 4.806C2.47 4.806 2.945 4.687 2.945 5.449V12.873C2.945 13.645 2.46 13.487 1.797 13.487C1.134 13.487 0.639 13.645 0.639 12.873V5.449ZM4.945 5.45C4.945 5.024 5.103 4.865 5.35 4.816C5.597 4.767 6.45 4.816 6.746 4.816C7.043 4.816 7.162 5.301 7.152 5.667C7.40633 5.3265 7.74359 5.05676 8.13166 4.88347C8.51972 4.71018 8.94569 4.6391 9.369 4.677C9.78475 4.65162 10.2012 4.71396 10.5913 4.85999C10.9814 5.00602 11.3364 5.23247 11.6332 5.52463C11.9301 5.81679 12.1622 6.16812 12.3145 6.55582C12.4667 6.94351 12.5357 7.3589 12.517 7.775V12.843C12.517 13.615 12.042 13.457 11.368 13.457C10.694 13.457 10.22 13.615 10.22 12.843V8.884C10.2374 8.68027 10.2108 8.47518 10.142 8.28265C10.0731 8.09012 9.96363 7.91466 9.82095 7.76819C9.67828 7.62172 9.50575 7.50768 9.3151 7.43379C9.12444 7.35991 8.92012 7.32792 8.716 7.34C8.51268 7.33464 8.31054 7.37257 8.12298 7.45127C7.93543 7.52996 7.76674 7.64763 7.62812 7.79647C7.48949 7.94531 7.38409 8.12191 7.3189 8.31458C7.25372 8.50725 7.23023 8.71157 7.25 8.914V12.873C7.25 13.645 6.765 13.487 6.092 13.487C5.419 13.487 4.944 13.645 4.944 12.873L4.945 5.45Z" stroke="#FF3E1D" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    label: "Facebook",
    svg: (
      <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.600098 6.43343V9.76676H3.1001V15.6001H6.43343V9.76676H8.93343L9.76676 6.43343H6.43343V4.76676C6.43343 4.3126 6.8126 3.93343 7.26676 3.93343H9.76676V0.600098H7.26676C4.9976 0.600098 3.1001 2.4976 3.1001 4.76676V6.43343H0.600098Z" stroke="#FF3E1D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    label: "YouTube",
    svg: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.3318 2.93581C20.2183 2.51335 19.9952 2.12784 19.685 1.8177C19.3748 1.50756 18.9881 1.28362 18.5636 1.16819C17.0045 0.75 10.75 0.75 10.75 0.75C10.75 0.75 4.49545 0.75 2.93636 1.16819C2.51187 1.28362 2.12524 1.50756 1.815 1.8177C1.50476 2.12784 1.28174 2.51335 1.16818 2.93581C0.75 4.49658 0.75 7.75 0.75 7.75C0.75 7.75 0.75 11.0034 1.16818 12.5642C1.2816 12.9868 1.50456 13.3725 1.81481 13.6828C2.12506 13.9931 2.51176 14.2172 2.93636 14.3327C4.49636 14.75 10.75 14.75 10.75 14.75C10.75 14.75 17.0045 14.75 18.5636 14.3327C18.9882 14.2172 19.3749 13.9931 19.6852 13.6828C19.9954 13.3725 20.2184 12.9868 20.3318 12.5642C20.75 11.0052 20.75 7.75 20.75 7.75C20.75 7.75 20.75 4.49658 20.3318 2.93581ZM8.70455 10.7045V4.79645L13.9318 7.7509L8.70455 10.7045Z" stroke="#FF3E1D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
      </svg>
    )
  },
];

export default function Footer() {
  return (
    <footer className="mt-12 md:bg-[#FFF1EF] relative overflow-hidden">
      
      <div 
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 hidden md:block"
        style={{ bottom: "-28px", opacity: 0.085 }}
      >
        <span
          className="font-black text-[#FF3E1D] tracking-[-4px] leading-none whitespace-nowrap"
          style={{ fontSize: "230px", lineHeight: "1", fontWeight: 900 }}
        >
          AAVORide
        </span>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 pt-12 md:pt-14 pb-16 md:pb-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative z-10">
        
        <div>
          <p className="font-extrabold text-2xl md:text-[28px] leading-none text-[#FF3E1D] tracking-tight mb-1">
            AAVORide
          </p>
          <p className="text-xs text-gray-400 mb-4">Powered by AAVORide Premium Mobility.</p>
          <p className="text-[15px] text-gray-600 leading-relaxed">
            Book affordable cabs with transparent pricing, verified drivers, and smooth rides across India. 
            From quick city trips to long-distance journeys, AAVORide makes every ride stress-free and budget-friendly.
          </p>

          <div className="flex gap-3 mt-8">
            {socialIcons.map(({ label, svg }) => (
              <a
                key={label}
                href="#"
                className="w-9 h-9 rounded-full border border-[#FFCCC4] flex items-center justify-center hover:bg-white hover:border-[#FF3E1D] transition-all"
                aria-label={label}
              >
                {svg}
              </a>
            ))}
          </div>
        </div>

        <div className="md:pl-4 lg:pl-8">
          <p className="font-bold text-base mb-5 text-gray-900">Quick Links</p>
          {["Home", "Our Services", "Become a Partner", "Blog", "FAQ"].map((link) => (
            <Link 
              key={link} 
              href="#" 
              className="block text-[15px] text-gray-600 mb-3 hover:text-[#FF3E1D] transition-colors"
            >
              {link}
            </Link>
          ))}
        </div>

        <div>
          <p className="font-bold text-base mb-5 text-gray-900">Contact Us</p>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 flex gap-4 items-center shadow-sm">
              <div className="w-11 h-10 bg-[#EFF4FF] rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM10 9L18 4V2L10 7L2 2V4L10 9Z" fill="#FF3E1D"/>
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-widest text-gray-400">EMAIL SUPPORT</p>
                <a href="mailto:support@aavoride.in" className="text-[15px] font-semibold text-gray-900">support@aavoride.in</a>
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
      </div>

      <div className="md:bg-[#FFF1EF] md:border-t md:border-[#FFCCC4] py-6">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-500 text-[13px] text-center md:text-left">
              © 2026 AAVORide Premium Mobility. All rights reserved. Driven by Excellence.
            </p>

            <div className="flex justify-center md:justify-end">
              <div className="bg-white border-bg-[#EFF4FF] shadow-sm text-black text-xs font-bold px-5 py-2 rounded-full flex items-center gap-2 whitespace-nowrap">
                <span className="w-2 h-2 bg-[#FF3E1D] rounded-full"></span>
                AAVORide
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-500 text-[13px]">
              {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
                <Link key={item} href="#" className="hover:text-[#FF3E1D] transition-colors">
                  {item}
                </Link>
              ))}
            </div>

            
          </div>
        </div>
      </div>
    </footer>
  );
}
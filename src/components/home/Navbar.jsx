// import { useState } from "react";
// import logo from "../../assets/brand/manthra2.png";

// const NAV_LINKS = [
//   { label: "Home", href: "#top" },
//   { label: "About", href: "#about" },
//   { label: "Services", href: "#services" },
//   { label: "Benefits", href: "#benefits" },
//   { label: "Gallery", href: "#gallery" },
//   { label: "Contact", href: "#contact" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur">
//       <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">

//         {/* Logo */}
//         {/* <a href="#top" className="flex items-center gap-3">
//           <img src={logo} alt="Logo" className="h-16 w-auto" />
//           <div className="leading-tight">
//             <p className="text-sm font-semibold text-ink">Shanthi Manthra</p>
//             <p className="text-xs text-ink/60">Yoga Center</p>
//           </div>
//         </a> */}
//         <a href="#top" className="flex items-center gap-4">
//   {/* <img src={logo} alt="Logo" className="h-16 w-auto" /> */}
//   <img
//   src={logo}
//   alt="Logo"
//   className="h-14 w-auto grayscale brightness-75 contrast-125"
// />


//   {/* <div className="leading-tight">
//     <p className="text-base font-semibold text-ink">
//       Shanthi Manthra
//     </p>
//     <p className="text-sm text-ink/60">
//       Yoga Center
//     </p>
//   </div> */}
// </a>


//         {/* Desktop Menu */}
//         <div className="hidden items-center gap-6 md:flex">
//           {NAV_LINKS.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               className="text-sm text-ink/70 hover:text-ink"
//             >
//               {link.label}
//             </a>
//           ))}

//           <a
//             href="#contact"
//             className="rounded-full bg-sageDark px-4 py-2 text-sm text-cream"
//           >
//             Book
//           </a>
//         </div>

//         {/* Mobile Hamburger Icon */}
//         <button
//           className="text-2xl text-ink md:hidden"
//           onClick={() => setOpen(!open)}
//         >
//           ☰
//         </button>
//       </nav>

//       {/* Mobile Menu Dropdown */}
//       {open && (
//         <div className="md:hidden bg-cream border-t border-ink/10">
//           <div className="flex flex-col px-4 py-4 gap-3">
//             {NAV_LINKS.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 className="text-sm text-ink/80 hover:text-ink"
//                 onClick={() => setOpen(false)}
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }
import { useState } from "react";


const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Benefits", href: "#benefits" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3">
          <img
            src="/assets/brand/manthra2.png"
            alt="Logo"
            className="h-12 sm:h-14 md:h-16 w-auto grayscale brightness-75 contrast-125"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink/70 hover:text-ink"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-sageDark px-4 py-2 text-sm text-cream"
          >
            Book
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="text-2xl text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          ☰
        </button>

        {/* Mobile Menu Overlay */}
        {open && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/20 md:hidden"
              onClick={() => setOpen(false)}
            />

            <div className="absolute left-0 right-0 top-full z-50 md:hidden bg-cream border-t border-ink/10 shadow-lg max-h-[70vh] overflow-auto">
              <div className="flex flex-col gap-3 px-4 py-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-ink/80 hover:text-ink"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  className="mt-2 inline-flex w-fit rounded-full bg-sageDark px-4 py-2 text-sm text-cream"
                  onClick={() => setOpen(false)}
                >
                  Book
                </a>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}

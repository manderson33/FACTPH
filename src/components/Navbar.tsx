import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Menu, X, Sun, BarChart2, ChevronDown, Map } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import logo from "../assets/factph-logo.png";

const regionsMenu = [{ label: "Electoral Map", to: "/visualization/electoral-map", icon: Map }];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [regionsOpen, setRegionsOpen] = useState(false);
  const [mobileRegionsOpen, setMobileRegionsOpen] = useState(false);
  const { t, lang, toggleLang } = useLanguage();

  const navLinkClass =
    "relative text-xs font-semibold uppercase tracking-[0.15em] text-white/80 hover:text-accent transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1.5px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="fixed top-0 w-full z-50 bg-navy/80 backdrop-blur-md border-b border-grid">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="FactPH logo" className="h-11 w-11" />
          <span className="flex items-center gap-1 font-heading font-bold text-accent">
            <Sun size={18} />
            <BarChart2 size={18} />
            FactPH
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={navLinkClass}>
            {t.navHome}
          </Link>
          <Link to="/explore/all" className={navLinkClass}>
            {t.navExplore}
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setRegionsOpen(true)}
            onMouseLeave={() => setRegionsOpen(false)}
          >
            <button
              className={`${navLinkClass} flex items-center gap-1 after:hidden`}
              onClick={() => setRegionsOpen(true)}
              onFocus={() => setRegionsOpen(true)}
            >
              {t.navRegions}
              <ChevronDown size={12} />
            </button>
            {regionsOpen && (
              <div className="absolute top-full left-0 pt-3 w-48">
                <div className="glass-card py-2">
                  {regionsMenu.map(({ label, to, icon: Icon }) => (
                    <Link
                      key={to}
                      to={to}
                      onClick={() => setRegionsOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/80 hover:text-accent hover:bg-white/5 transition-colors"
                    >
                      <Icon size={14} />
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link to="/about" className={navLinkClass}>
            {t.navAbout}
          </Link>
          <button
            onClick={toggleLang}
            className="text-xs font-semibold uppercase tracking-[0.15em] border border-accent/40 text-accent rounded-full px-4 py-1.5 hover:bg-accent/10 transition-colors"
          >
            {lang === "en" ? "🇵🇭 TL" : "🇺🇸 EN"}
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden flex flex-col gap-5 px-4 pb-6 pt-2"
        >
          <Link to="/" onClick={() => setOpen(false)} className={navLinkClass}>
            {t.navHome}
          </Link>
          <Link to="/explore/all" onClick={() => setOpen(false)} className={navLinkClass}>
            {t.navExplore}
          </Link>
          <div>
            <button
              onClick={() => setMobileRegionsOpen((v) => !v)}
              className={`${navLinkClass} flex items-center gap-1 after:hidden`}
            >
              {t.navRegions}
              <ChevronDown size={12} className={mobileRegionsOpen ? "rotate-180" : ""} />
            </button>
            {mobileRegionsOpen && (
              <div className="flex flex-col gap-3 mt-3 pl-4 border-l border-grid">
                {regionsMenu.map(({ label, to, icon: Icon }) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => {
                      setOpen(false);
                      setMobileRegionsOpen(false);
                    }}
                    className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-accent"
                  >
                    <Icon size={14} />
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/about" onClick={() => setOpen(false)} className={navLinkClass}>
            {t.navAbout}
          </Link>
          <button
            onClick={toggleLang}
            className="text-left text-xs font-semibold uppercase tracking-[0.15em] text-accent"
          >
            {lang === "en" ? "🇵🇭 Tagalog" : "🇺🇸 English"}
          </button>
        </motion.div>
      )}
    </nav>
  );
}
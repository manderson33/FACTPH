import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Menu, X, Sun, BarChart2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import logo from "../assets/factph-logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
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
          <Link to="/region/ncr" className={navLinkClass}>
            {t.navRegions}
          </Link>
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
          <Link to="/region/ncr" onClick={() => setOpen(false)} className={navLinkClass}>
            {t.navRegions}
          </Link>
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
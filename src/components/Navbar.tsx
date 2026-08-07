import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Menu, X, Sun, BarChart2, ChevronDown, Map, Users } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { exploreCategories } from "../data/exploreCategories";
import logo from "../assets/factph-logo.png";

const regionsMenu = [
  { label: "Electoral Map", to: "/visualization/electoral-map", icon: Map },
  { label: "Population by Region", to: "/visualization/population-by-region", icon: Users },
];

const sortedExploreCategories = [...exploreCategories].sort((a, b) => a.title.localeCompare(b.title));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [regionsOpen, setRegionsOpen] = useState(false);
  const [mobileRegionsOpen, setMobileRegionsOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);
  const { t, lang, toggleLang } = useLanguage();

  // The explore panel renders `fixed` (so it can center itself instead of
  // overflowing the viewport off the button's edge), which puts it outside
  // the button's relatively-positioned box — so hover/mouseleave can't track
  // it. Click-to-toggle + click-outside-to-close instead.
  const exploreButtonRef = useRef<HTMLButtonElement>(null);
  const explorePanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!exploreOpen) return;
    const handlePointerDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        exploreButtonRef.current?.contains(target) ||
        explorePanelRef.current?.contains(target)
      ) {
        return;
      }
      setExploreOpen(false);
    };
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [exploreOpen]);

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
          <div className="relative">
            <button
              ref={exploreButtonRef}
              className={`${navLinkClass} flex items-center gap-1 after:hidden`}
              onClick={() => setExploreOpen((v) => !v)}
            >
              {t.navExplore}
              <ChevronDown size={12} className={exploreOpen ? "rotate-180" : ""} />
            </button>
            {exploreOpen && (
              <div
                ref={explorePanelRef}
                className="fixed left-1/2 top-16 -translate-x-1/2 pt-3 w-160 max-w-[90vw]"
              >
                <div className="bg-navy border border-white/10 rounded-2xl shadow-xl p-4">
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-0.5">
                    {sortedExploreCategories.map((c) => (
                      <Link
                        key={c.slug}
                        to={`/explore/${c.slug}`}
                        onClick={() => setExploreOpen(false)}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-widest text-white/80 hover:text-accent hover:bg-white/5 transition-colors"
                      >
                        {c.title}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 pt-3 border-t border-grid px-3">
                    <Link
                      to="/explore/all"
                      onClick={() => setExploreOpen(false)}
                      className="text-xs font-semibold uppercase tracking-widest text-accent hover:underline"
                    >
                      View all visualizations →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
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
              <div className="absolute top-full left-0 pt-3 w-56">
                <div className="bg-navy border border-white/10 rounded-2xl shadow-xl py-2">
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
                  <div className="mt-1 pt-2 border-t border-grid px-4">
                    <Link
                      to="/regions"
                      onClick={() => setRegionsOpen(false)}
                      className="text-xs font-semibold uppercase tracking-widest text-accent hover:underline"
                    >
                      View all regions →
                    </Link>
                  </div>
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
          <div>
            <button
              onClick={() => setMobileExploreOpen((v) => !v)}
              className={`${navLinkClass} flex items-center gap-1 after:hidden`}
            >
              {t.navExplore}
              <ChevronDown size={12} className={mobileExploreOpen ? "rotate-180" : ""} />
            </button>
            {mobileExploreOpen && (
              <div className="flex flex-col gap-3 mt-3 pl-4 border-l border-grid max-h-64 overflow-y-auto">
                {sortedExploreCategories.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/explore/${c.slug}`}
                    onClick={() => {
                      setOpen(false);
                      setMobileExploreOpen(false);
                    }}
                    className="text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-accent"
                  >
                    {c.title}
                  </Link>
                ))}
                <Link
                  to="/explore/all"
                  onClick={() => {
                    setOpen(false);
                    setMobileExploreOpen(false);
                  }}
                  className="text-xs font-semibold uppercase tracking-widest text-accent"
                >
                  View all visualizations →
                </Link>
              </div>
            )}
          </div>
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
                <Link
                  to="/regions"
                  onClick={() => {
                    setOpen(false);
                    setMobileRegionsOpen(false);
                  }}
                  className="text-xs font-semibold uppercase tracking-widest text-accent"
                >
                  View all regions →
                </Link>
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
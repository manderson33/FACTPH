import { lazy, Suspense } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Navbar from "./components/Navbar";

import { statistics } from "./data/statistics";

const DataHighlightsSection = lazy(() => import("./components/DataHighlightsSection"));

export default function App() {
  const { t } = useTranslation();

  return (
    <div className="dot-grid min-h-screen">
      <Navbar />

      {/* Hero */}
      {/* Hero */}
<section className="relative min-h-screen flex items-center px-6 md:px-16 bg-navy dot-grid overflow-hidden">
  {/* Bottom accent bar */}
  <div className="absolute bottom-0 left-0 w-full h-1 bg-accent" />

  <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
    {/* Left: text */}
    <div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-accent font-mono tracking-[0.2em] text-sm mb-4"
      >
        {t("home.kicker")}
      </motion.p>

      <div className="border-l-4 border-accent pl-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl font-heading font-extrabold text-white leading-none"
        >
          FACTPH
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl font-heading font-bold text-accent mt-2 tracking-wide"
        >
          {t("home.tagline")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-muted tracking-[0.15em] text-xs md:text-sm mt-6 uppercase"
        >
          {t("home.subtitle")}
        </motion.p>
      </div>

      <div className="mt-10 flex gap-4 flex-wrap">
        <Link
          to="/explore/population"
          className="bg-accent text-navy px-6 py-3 rounded-full font-semibold"
        >
          {t("home.exploreData")}
        </Link>
        <Link
          to="/regions"
          className="border border-white text-white px-6 py-3 rounded-full font-semibold"
        >
          {t("home.browseRegion")}
        </Link>
      </div>
    </div>

    {/* Right: flag / sun / chart illustration */}
    <div className="hidden md:block">
      <svg viewBox="0 0 500 400" className="w-full h-auto">
  {/* Flag rectangle (blue top, red-pink bottom) */}
  <rect x="180" y="0" width="320" height="180" fill="#0038A8" opacity="0.85" />
  <rect x="180" y="180" width="320" height="180" fill="#E8456B" opacity="0.75" />

  {/* Ghosted white triangle — tilted 20° so the apex points up-and-right;
      sun and stars rotate with it since they share this group's transform */}
  <g transform="rotate(-20 147 180)">
    <polygon points="320,180 60,20 60,340" fill="#FFFFFF" opacity="0.07" />

    {/* Data star template: star outline only */}
    <defs>
      <polygon
        id="data-star"
        points="0,-6 1.4,-1.85 5.7,-1.85 2.3,0.7 3.5,5.7 0,2.4 -3.5,5.7 -2.3,0.7 -5.7,-1.85 -1.4,-1.85"
        fill="#FCD116"
      />
    </defs>

    {/* 3 data stars, inset inside the triangle's corners */}
    <use href="#data-star" transform="translate(285,180) scale(2.7)" opacity="0.55" />
    <use href="#data-star" transform="translate(77,52) scale(2.7)" opacity="0.55" />
    <use href="#data-star" transform="translate(77,308) scale(2.7)" opacity="0.55" />

    {/* Sun with 8 rays */}
    <g transform="translate(160,180)">
      <circle r="30" fill="#FCD116" opacity="0.55" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x1 = Math.cos(angle) * 38;
        const y1 = Math.sin(angle) * 38;
        const x2 = Math.cos(angle) * 62;
        const y2 = Math.sin(angle) * 62;
        return (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#FCD116"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.55"
          />
        );
      })}
    </g>
  </g>

  {/* Line chart */}
  <polyline
    points="20,320 70,300 120,340 170,260 220,280 270,220 320,180"
    fill="none"
    stroke="#2DD4BF"
    strokeWidth="3"
  />
  {[[20,320],[70,300],[120,340],[170,260],[220,280],[270,220],[320,180]].map(([x, y], i) => (
    <circle key={i} cx={x} cy={y} r="5" fill="#2DD4BF" />
  ))}

  {/* Bar chart accent */}
  <rect x="30" y="350" width="16" height="30" fill="#2DD4BF" opacity="0.6" />
  <rect x="55" y="330" width="16" height="50" fill="#2DD4BF" opacity="0.6" />
  <rect x="80" y="345" width="16" height="35" fill="#2DD4BF" opacity="0.6" />
</svg>
    </div>
  </div>
</section>

      {/* Quick Stats Bar */}
      <section className="py-12 px-4 overflow-x-auto">
        <div className="flex gap-4 min-w-max max-w-6xl mx-auto">
          {statistics.map((stat, i) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card px-6 py-4 min-w-[160px]"
            >
              <p className="text-muted text-sm">{t(`home.stats.${stat.labelKey}`)}</p>
              <p className="text-accent text-2xl font-bold">{stat.value}</p>
              <p className="text-footnote text-xs">
                {stat.note ?? `${stat.source} ${stat.year}`}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Data Highlights (heavy chart/map libraries, deferred below the fold) */}
      <Suspense
        fallback={
          <div className="max-w-6xl mx-auto px-4 py-16 text-center text-muted">
            {t("home.loading")}
          </div>
        }
      >
        <DataHighlightsSection />
      </Suspense>
    </div>
  );
}
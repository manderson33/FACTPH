import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import ownerPhoto from "../assets/Owner Photo.jpeg";

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <div className="dot-grid min-h-screen pt-28 px-4 pb-16">
      <Navbar />
      <div className="max-w-3xl mx-auto">
        <p className="text-accent font-mono tracking-[0.2em] text-sm mb-4">{t("about.kicker")}</p>
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-14">
          {t("about.title")}
        </h1>

        <section className="mb-14">
          <div className="border-l-4 border-accent pl-6 mb-6">
            <h2 className="text-2xl font-heading font-bold text-white">{t("about.whyTitle")}</h2>
          </div>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>{t("about.why1")}</p>
            <p>{t("about.why2")}</p>
            <p>{t("about.why3")}</p>
          </div>
        </section>

        <section className="mb-14">
          <div className="border-l-4 border-accent pl-6 mb-6">
            <h2 className="text-2xl font-heading font-bold text-white">
              {t("about.missionTitle")}
            </h2>
          </div>
          <img
            src={ownerPhoto}
            alt={t("about.founderAlt")}
            className="w-28 h-28 rounded-full object-cover border-2 border-accent/40 mb-6"
          />
          <div className="space-y-5 text-muted leading-relaxed">
            <p>{t("about.mission1")}</p>
            <p>{t("about.mission2")}</p>
            <p>{t("about.mission3")}</p>
            <p>{t("about.mission4")}</p>
            <p>{t("about.mission5")}</p>
            <p>{t("about.mission6")}</p>
          </div>
        </section>

        <section>
          <div className="border-l-4 border-marcos pl-6 mb-6">
            <h2 className="text-2xl font-heading font-bold text-white">
              {t("about.caveatTitle")}
            </h2>
          </div>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>{t("about.caveat1")}</p>
            <p>{t("about.caveat2")}</p>
            <p className="text-footnote italic">{t("about.caveat3")}</p>
          </div>
        </section>
      </div>
    </div>
  );
}

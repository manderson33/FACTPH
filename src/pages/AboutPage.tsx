import Navbar from "../components/Navbar";
import ownerPhoto from "../assets/Owner Photo.jpeg";

export default function AboutPage() {
  return (
    <div className="dot-grid min-h-screen pt-28 px-4 pb-16">
      <Navbar />
      <div className="max-w-3xl mx-auto">
        <p className="text-accent font-mono tracking-[0.2em] text-sm mb-4">// ABOUT</p>
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-14">
          About FactPH
        </h1>

        <section className="mb-14">
          <div className="border-l-4 border-accent pl-6 mb-6">
            <h2 className="text-2xl font-heading font-bold text-white">Why FactPH exists</h2>
          </div>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              FactPH brings publicly available data about the Philippines together in one
              place, using information drawn directly from government agencies and official
              records.
            </p>
            <p>
              Important statistics are often scattered across different institutions or
              encountered secondhand through news reports and online posts. Along the way,
              figures may be oversimplified, quoted without context, or separated from their
              original sources.
            </p>
            <p>
              FactPH helps close that gap by presenting data from primary documents in a format
              that is easier to find, explore, and understand. Every presentation links back to
              its source, allowing readers to verify the information for themselves.
            </p>
          </div>
        </section>

        <section className="mb-14">
          <div className="border-l-4 border-accent pl-6 mb-6">
            <h2 className="text-2xl font-heading font-bold text-white">Personal mission</h2>
          </div>
          <img
            src={ownerPhoto}
            alt="Founder of FactPH"
            className="w-28 h-28 rounded-full object-cover border-2 border-accent/40 mb-6"
          />
          <div className="space-y-5 text-muted leading-relaxed">
            <p>I built FactPH because I'm not comfortable with guessing.</p>
            <p>
              I'm not a journalist, politician, or economist. I'm simply a Filipino who grew
              tired of national conversations driven by half-remembered statistics, unsourced
              screenshots, and numbers that sound true only because someone repeated them with
              confidence.
            </p>
            <p>
              I want the Philippines to get better. But we cannot fix what we do not see
              clearly. Before we argue about solutions, we should first agree on the facts.
            </p>
            <p>
              Public data about education, governance, the economy, health, and everyday
              Filipino life already exists. However, it is often buried in lengthy reports,
              scattered across government agencies, or presented without enough context to be
              properly understood.
            </p>
            <p>
              That is why I built FactPH: to make important public data easier to find,
              understand, and verify.
            </p>
            <p>
              The site draws from primary sources and every presentation
              includes its sources so readers can examine the original information and decide
              for themselves what it means.
            </p>
          </div>
        </section>

        <section>
          <div className="border-l-4 border-marcos pl-6 mb-6">
            <h2 className="text-2xl font-heading font-bold text-white">Honest caveat</h2>
          </div>
          <div className="space-y-5 text-muted leading-relaxed">
            
            <p>
              Not every number is easy to find or verify. Some government datasets are
              incomplete, reports may contain conflicting figures, and certain claims may still
              be awaiting independent confirmation.
            </p>
            <p>
              When that happens, FactPH will state it clearly. We will not quietly fill missing
              information with assumptions or present uncertain figures as settled facts.
            </p>
            <p className="text-footnote italic">
              A source you can examine and question is more valuable than a confident headline
              you cannot verify.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

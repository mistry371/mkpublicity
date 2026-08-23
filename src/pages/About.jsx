import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Compass,
  Globe2,
  Handshake,
  Lightbulb,
  MoveUpRight,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { stats } from '../data';
import { useModal } from '../context/ModalContext';

const principles = [
  {
    index: '01',
    icon: Compass,
    title: 'Clarity',
    text: 'We turn complexity into a clear direction, so every decision has a purpose and every move has momentum.',
  },
  {
    index: '02',
    icon: Target,
    title: 'Precision',
    text: 'Strategy is only valuable when it translates into focused execution, measurable progress and commercial outcomes.',
  },
  {
    index: '03',
    icon: Lightbulb,
    title: 'Perspective',
    text: 'We challenge assumptions, find the opportunity others miss and build ideas designed for the world ahead.',
  },
  {
    index: '04',
    icon: BarChart3,
    title: 'Performance',
    text: 'Creative thinking is paired with data, disciplined optimisation and an obsession with meaningful results.',
  },
];

const values = [
  ['Mission-Driven', 'Every strategy starts with the business goal.'],
  ['Innovation First', 'We explore what is next—not only what is popular.'],
  ['Partnership', 'We work as an extension of your leadership team.'],
  ['Data-Informed', 'Decisions are strengthened by evidence and insight.'],
  ['Excellence', 'Details matter because perception is built from them.'],
  ['Sustainable', 'We prefer compounding value over temporary attention.'],
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const imagePath = '/assets/mehul-desai.jpg';

export default function About() {
  const { openModal } = useModal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="about-page">
        {/* =========================================================
            01 — HERO
        ========================================================= */}
        <section className="about-hero">
          <div className="about-noise" />
          <div className="about-hero-glow about-hero-glow-a" />
          <div className="about-hero-glow about-hero-glow-b" />

          <div className="about-shell about-hero-grid">
            <motion.div
              className="about-hero-copy"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              <motion.div className="about-eyebrow about-eyebrow-dark" variants={fadeUp}>
                <span className="about-eyebrow-line" />
                About the company
              </motion.div>

              <motion.h1 variants={fadeUp}>
                Built with
                <br />
                <span>intention.</span>
              </motion.h1>

              <motion.p variants={fadeUp}>
                We combine strategic thinking, creative excellence and disciplined
                execution to help ambitious businesses move from where they are
                to where they should be.
              </motion.p>

              <motion.div className="about-hero-actions" variants={fadeUp}>
                <button className="about-primary-button" onClick={openModal}>
                  Start a conversation
                  <ArrowUpRight size={18} />
                </button>

                <a href="#founder" className="about-ghost-button">
                  Meet the founder
                  <ArrowDownRight size={18} />
                </a>
              </motion.div>

              <motion.div className="about-hero-caption" variants={fadeUp}>
                <span>Founded in Surat</span>
                <span className="about-caption-dot" />
                <span>Built for global ambition</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="about-hero-visual"
              initial={{ opacity: 0, scale: 0.97, x: 28 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="about-hero-image-frame">
                <img
                  src={imagePath}
                  alt="Mehul Desai, Founder & CEO"
                />
                <div className="about-hero-image-shade" />
                <div className="about-hero-image-label">
                  <span>FOUNDER / CEO</span>
                  <strong>Mehul Desai</strong>
                </div>
              </div>

              <div className="about-hero-orbit orbit-a" />
              <div className="about-hero-orbit orbit-b" />

              <div className="about-floating-card about-floating-card-top">
                <Sparkles size={15} />
                <span>Strategic thinking</span>
              </div>

              <div className="about-floating-card about-floating-card-bottom">
                <span className="about-card-number">500+</span>
                <span className="about-card-label">Brands & businesses</span>
              </div>
            </motion.div>
          </div>

          <a href="#metrics" className="about-scroll-cue" aria-label="Scroll to explore">
            <span>Scroll to explore</span>
            <ArrowDownRight size={18} />
          </a>
        </section>

        {/* =========================================================
            03 — METRICS
        ========================================================= */}
        <section id="metrics" className="about-metrics">
          <div className="about-shell">
            <div className="about-section-topline about-section-topline-light">
              <span>02 — The scale</span>
              <span>Measured in trust, reach & momentum</span>
            </div>

            <div className="about-metrics-grid">
              {stats.map((stat, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.08}>
                  <div className="about-metric">
                    <div className="about-metric-index">0{idx + 1}</div>
                    <div className="about-metric-value">
                      {stat.number}
                      {stat.suffix}
                    </div>
                    <div className="about-metric-label">{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}

              <ScrollReveal delay={0.3}>
                <div className="about-metric about-metric-featured">
                  <div className="about-metric-icon">
                    <Globe2 size={24} />
                  </div>
                  <div className="about-metric-feature-text">
                    <strong>Global ambition.</strong>
                    <span>Local roots. Long-term thinking.</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* =========================================================
            04 — FOUNDER
        ========================================================= */}
        <section id="founder" className="about-founder">
          <div className="about-shell">
            <div className="about-section-topline">
              <span>03 — The founder</span>
              <span>Leadership / Vision / Standards</span>
            </div>

            <div className="about-founder-grid">
              <ScrollReveal>
                <div className="about-founder-photo-wrap">
                  <div className="about-founder-photo">
                    <img
                      src={imagePath}
                      alt="Mehul Desai — Founder & CEO"
                    />
                  </div>

                  <div className="about-founder-photo-meta">
                    <span>Founder & CEO</span>
                    <span>MK Publicity</span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.12}>
                <div className="about-founder-copy">
                  <div className="about-eyebrow">
                    <span className="about-eyebrow-line" />
                    Leadership with intent
                  </div>

                  <h2>
                    Mehul
                    <br />
                    <span>Desai.</span>
                  </h2>

                  <div className="about-founder-role">Founder & CEO</div>

                  <blockquote>
                    <Quote size={28} />
                    <p>
                      “The objective is not simply to grow faster. It is to build
                      something valuable enough to keep growing.”
                    </p>
                  </blockquote>

                  <p className="about-founder-body">
                    Under his leadership, MK Publicity has evolved from a bold
                    concept into a digital growth partner for ambitious
                    businesses. His approach combines a strategic mindset with
                    an uncompromising standard for execution.
                  </p>

                  <div className="about-founder-points">
                    <div>
                      <ShieldCheck size={18} />
                      <span>Long-term value over short-term noise</span>
                    </div>
                    <div>
                      <Users size={18} />
                      <span>Partnership over vendor relationships</span>
                    </div>
                    <div>
                      <Trophy size={18} />
                      <span>High standards at every layer</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* =========================================================
            05 — PRINCIPLES
        ========================================================= */}
        <section className="about-principles">
          <div className="about-shell">
            <div className="about-principles-intro">
              <ScrollReveal>
                <div>
                  <div className="about-section-topline">
                    <span>04 — How we think</span>
                    <span>Principles before process</span>
                  </div>

                  <div className="about-eyebrow">
                    <span className="about-eyebrow-line" />
                    Our operating philosophy
                  </div>

                  <h2 className="about-display-heading">
                    Strategy is not a
                    <br />
                    <em>presentation.</em>
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.12}>
                <p className="about-principles-lead">
                  It is the quality of the decisions that happen after the room
                  goes quiet. That is why our approach is built around four
                  principles designed to keep businesses moving with confidence.
                </p>
              </ScrollReveal>
            </div>

            <div className="about-principles-grid">
              {principles.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.index}
                    className="about-principle-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -6 }}
                  >
                    <div className="about-principle-top">
                      <span>{item.index}</span>
                      <Icon size={20} />
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.text}</p>

                    <div className="about-principle-arrow">
                      <MoveUpRight size={17} />
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            06 — VALUES
        ========================================================= */}
        <section className="about-values">
          <div className="about-shell">
            <div className="about-section-topline">
              <span>05 — What we believe</span>
              <span>Six standards we do not compromise</span>
            </div>

            <div className="about-values-heading">
              <ScrollReveal>
                <h2>
                  Standards create
                  <br />
                  <span>reputation.</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.12}>
                <p>
                  Culture becomes visible in the work. These principles shape the
                  way we think, communicate, create and deliver.
                </p>
              </ScrollReveal>
            </div>

            <div className="about-values-grid">
              {values.map(([title, text], index) => (
                <ScrollReveal key={title} delay={index * 0.05}>
                  <div className="about-value-card">
                    <span className="about-value-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            07 — CLOSING CTA
        ========================================================= */}
        <section className="about-closing">
          <div className="about-closing-grid" />

          <div className="about-shell about-closing-inner">
            <ScrollReveal>
              <div className="about-eyebrow about-eyebrow-dark">
                <span className="about-eyebrow-line" />
                The next chapter
              </div>

              <h2>
                Your ambition
                <br />
                deserves <span>a sharper strategy.</span>
              </h2>

              <p>
                Start with a conversation. Build from there.
              </p>

              <button className="about-primary-button about-primary-button-large" onClick={openModal}>
                Start the conversation
                <ArrowRight size={19} />
              </button>
            </ScrollReveal>
          </div>

          <div className="about-closing-mark">MK</div>
        </section>
      </div>

      <style>{`
        :root {
          --about-ink: #101113;
          --about-paper: #f5f3ee;
          --about-white: #ffffff;
          --about-muted: #77736b;
          --about-line: rgba(16, 17, 19, 0.12);
          --about-gold: #b6904a;
          --about-gold-soft: #d7bb83;
          --about-dark: #0d0f11;
        }

        html {
          scroll-behavior: smooth;
        }

        .about-page {
          background: var(--about-paper);
          color: var(--about-ink);
          overflow: hidden;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }

        .about-page * {
          box-sizing: border-box;
        }

        .about-shell {
          width: min(1240px, calc(100% - 64px));
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .about-page button,
        .about-page a {
          font: inherit;
        }

        .about-section-topline {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding-bottom: 18px;
          border-bottom: 1px solid var(--about-line);
          color: #6c685f;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-weight: 700;
        }

        .about-section-topline-light {
          border-color: rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.55);
        }

        .about-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #746f66;
          font-size: 11px;
          line-height: 1;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-weight: 800;
        }

        .about-eyebrow-dark {
          color: rgba(255,255,255,0.64);
        }

        .about-eyebrow-line {
          width: 28px;
          height: 1px;
          background: currentColor;
          opacity: 0.8;
        }

        /* HERO */
        .about-hero {
          min-height: 94vh;
          position: relative;
          display: flex;
          align-items: center;
          background:
            radial-gradient(circle at 18% 72%, rgba(182,144,74,0.11), transparent 30%),
            radial-gradient(circle at 80% 22%, rgba(255,255,255,0.05), transparent 20%),
            #0c0e10;
          color: #fff;
        }

        .about-noise {
          position: absolute;
          inset: 0;
          opacity: 0.07;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.95' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E");
        }

        .about-hero-glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(40px);
          pointer-events: none;
        }

        .about-hero-glow-a {
          width: 240px;
          height: 240px;
          right: 10%;
          top: 14%;
          background: rgba(182,144,74,0.12);
        }

        .about-hero-glow-b {
          width: 300px;
          height: 300px;
          left: -100px;
          bottom: -120px;
          background: rgba(91,104,123,0.18);
        }

        .about-hero-grid {
          display: grid;
          grid-template-columns: 0.96fr 1.04fr;
          gap: clamp(44px, 6vw, 110px);
          align-items: center;
          padding: 92px 0 112px;
        }

        .about-hero-copy {
          max-width: 640px;
        }

        .about-hero-copy h1 {
          margin: 28px 0 26px;
          font-size: clamp(4.6rem, 8.4vw, 8.8rem);
          line-height: 0.86;
          letter-spacing: -0.075em;
          font-weight: 760;
        }

        .about-hero-copy h1 span {
          color: var(--about-gold-soft);
        }

        .about-hero-copy p {
          max-width: 570px;
          margin: 0;
          color: rgba(255,255,255,0.68);
          font-size: clamp(1.05rem, 1.6vw, 1.28rem);
          line-height: 1.75;
        }

        .about-hero-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 38px;
        }

        .about-primary-button {
          border: 1px solid var(--about-gold);
          background: var(--about-gold);
          color: #111;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 20px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 800;
          cursor: pointer;
          transition: transform .25s ease, background .25s ease, box-shadow .25s ease;
          box-shadow: 0 12px 34px rgba(182,144,74,0.18);
        }

        .about-primary-button:hover {
          transform: translateY(-2px);
          background: #c6a55f;
          box-shadow: 0 16px 42px rgba(182,144,74,0.25);
        }

        .about-ghost-button {
          text-decoration: none;
          color: rgba(255,255,255,0.76);
          border: 1px solid rgba(255,255,255,0.15);
          padding: 14px 18px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 800;
          transition: border-color .25s ease, color .25s ease;
        }

        .about-ghost-button:hover {
          color: #fff;
          border-color: rgba(255,255,255,0.36);
        }

        .about-hero-caption {
          margin-top: 34px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255,255,255,0.42);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-weight: 700;
        }

        .about-caption-dot {
          width: 4px;
          height: 4px;
          background: var(--about-gold-soft);
          border-radius: 50%;
        }

        .about-hero-visual {
          position: relative;
          min-height: 640px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-hero-image-frame {
          width: min(100%, 590px);
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 30px 90px rgba(0,0,0,0.45);
          background: #181b1f;
        }

        .about-hero-image-frame::after {
          content: "";
          position: absolute;
          inset: 14px;
          border: 1px solid rgba(255,255,255,0.12);
          pointer-events: none;
        }

        .about-hero-image-frame img {
          width: 100%;
          height: auto;
          display: block;
          filter: none;
        }

        .about-hero-image-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(7,8,9,0.82) 0%,
            rgba(7,8,9,0.18) 36%,
            rgba(7,8,9,0.04) 72%
          );
        }

        .about-hero-image-label {
          position: absolute;
          z-index: 3;
          left: 28px;
          right: 28px;
          bottom: 26px;
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.19);
        }

        .about-hero-image-label span {
          color: rgba(255,255,255,0.55);
          font-size: 9px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.18em;
        }

        .about-hero-image-label strong {
          color: #fff;
          font-size: 18px;
          font-weight: 650;
          letter-spacing: -0.02em;
        }

        .about-hero-orbit {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(182,144,74,0.34);
          pointer-events: none;
        }

        .orbit-a {
          width: 580px;
          height: 580px;
          right: -60px;
          top: 50%;
          transform: translateY(-50%);
        }

        .orbit-b {
          width: 680px;
          height: 680px;
          right: -110px;
          top: 50%;
          transform: translateY(-50%);
          border-color: rgba(255,255,255,0.06);
        }

        .about-floating-card {
          position: absolute;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(15,17,19,0.88);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(14px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.25);
        }

        .about-floating-card-top {
          top: 11%;
          right: -26px;
          padding: 13px 16px;
          color: rgba(255,255,255,0.75);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.13em;
          font-weight: 800;
        }

        .about-floating-card-top svg {
          color: var(--about-gold-soft);
        }

        .about-floating-card-bottom {
          left: -30px;
          bottom: 10%;
          padding: 17px 20px;
          flex-direction: column;
          align-items: flex-start;
          gap: 3px;
          min-width: 160px;
        }

        .about-card-number {
          color: #fff;
          font-size: 30px;
          line-height: 1;
          letter-spacing: -0.05em;
          font-weight: 700;
        }

        .about-card-label {
          color: rgba(255,255,255,0.46);
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-weight: 800;
        }

        .about-scroll-cue {
          position: absolute;
          z-index: 5;
          bottom: 28px;
          left: max(32px, calc((100vw - 1240px) / 2));
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: rgba(255,255,255,0.42);
          text-decoration: none;
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-weight: 800;
        }

        /* METRICS */
        .about-metrics {
          background: var(--about-dark);
          color: #fff;
          padding: 92px 0 105px;
        }

        .about-metrics-grid {
          margin-top: 52px;
          display: grid;
          grid-template-columns: repeat(4, 1fr) 1.25fr;
          gap: 0;
          border-top: 1px solid rgba(255,255,255,0.12);
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }

        .about-metric {
          position: relative;
          min-height: 220px;
          padding: 28px 26px;
          border-right: 1px solid rgba(255,255,255,0.1);
        }

        .about-metric:last-child {
          border-right: 0;
        }

        .about-metric-index {
          color: rgba(255,255,255,0.3);
          font-size: 9px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 800;
        }

        .about-metric-value {
          margin-top: 56px;
          color: #fff;
          font-size: clamp(3rem, 5.1vw, 5.5rem);
          line-height: 0.9;
          letter-spacing: -0.065em;
          font-weight: 700;
        }

        .about-metric-label {
          margin-top: 14px;
          color: rgba(255,255,255,0.52);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-weight: 800;
        }

        .about-metric-featured {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          background: linear-gradient(135deg, rgba(182,144,74,0.15), rgba(255,255,255,0.02));
        }

        .about-metric-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(182,144,74,0.34);
          color: var(--about-gold-soft);
        }

        .about-metric-feature-text {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: flex-end;
          text-align: right;
        }

        .about-metric-feature-text strong {
          font-size: clamp(1.5rem, 2.5vw, 2.3rem);
          line-height: 1;
          letter-spacing: -0.04em;
          font-weight: 650;
        }

        .about-metric-feature-text span {
          color: rgba(255,255,255,0.45);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        /* FOUNDER */
        .about-founder {
          padding: 130px 0 150px;
          background:
            linear-gradient(90deg, #f7f5f0 0%, #f7f5f0 60%, #ebe7de 60%, #ebe7de 100%);
        }

        .about-founder-grid {
          margin-top: 76px;
          display: grid;
          grid-template-columns: 0.98fr 1.02fr;
          gap: clamp(50px, 8vw, 130px);
          align-items: center;
        }

        .about-founder-photo-wrap {
          position: relative;
          padding-right: 28px;
        }

        .about-founder-photo {
          position: relative;
          overflow: hidden;
          background: #181818;
          box-shadow: 25px 28px 70px rgba(0,0,0,0.18);
        }

        .about-founder-photo::before {
          content: "";
          position: absolute;
          z-index: 2;
          inset: 18px;
          border: 1px solid rgba(255,255,255,0.28);
          pointer-events: none;
        }

        .about-founder-photo img {
          width: 100%;
          height: auto;
          display: block;
          filter: none;
        }

        .about-founder-photo-meta {
          position: absolute;
          right: -4px;
          bottom: 28px;
          z-index: 4;
          display: flex;
          flex-direction: column;
          gap: 5px;
          min-width: 160px;
          padding: 14px 16px;
          background: #121416;
          color: #fff;
          box-shadow: 0 18px 34px rgba(0,0,0,0.2);
        }

        .about-founder-photo-meta span:first-child {
          color: var(--about-gold-soft);
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-weight: 800;
        }

        .about-founder-photo-meta span:last-child {
          font-size: 12px;
          color: rgba(255,255,255,0.78);
        }

        .about-founder-copy {
          max-width: 650px;
        }

        .about-founder-copy h2 {
          margin: 22px 0 0;
          font-size: clamp(4rem, 7vw, 7.3rem);
          line-height: 0.84;
          letter-spacing: -0.075em;
          font-weight: 730;
        }

        .about-founder-copy h2 span {
          color: #6c665d;
        }

        .about-founder-role {
          margin-top: 19px;
          color: var(--about-gold);
          text-transform: uppercase;
          letter-spacing: 0.17em;
          font-size: 10px;
          font-weight: 900;
        }

        .about-founder-copy blockquote {
          margin: 45px 0 0;
          padding: 26px 0;
          border-top: 1px solid rgba(16,17,19,0.13);
          border-bottom: 1px solid rgba(16,17,19,0.13);
        }

        .about-founder-copy blockquote svg {
          color: var(--about-gold);
          margin-bottom: 12px;
        }

        .about-founder-copy blockquote p {
          margin: 0;
          font-family: Georgia, serif;
          font-size: clamp(1.45rem, 2.4vw, 2.1rem);
          line-height: 1.35;
          color: #2e2b27;
        }

        .about-founder-body {
          margin: 28px 0 0;
          color: #67635b;
          line-height: 1.8;
          font-size: 1.03rem;
        }

        .about-founder-points {
          margin-top: 32px;
          display: grid;
          gap: 12px;
        }

        .about-founder-points div {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #514d46;
          font-size: 12px;
          font-weight: 700;
        }

        .about-founder-points svg {
          color: var(--about-gold);
          flex: 0 0 auto;
        }

        /* PRINCIPLES */
        .about-principles {
          background: #121416;
          color: #fff;
          padding: 130px 0 145px;
        }

        .about-principles .about-section-topline {
          border-color: rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.55);
        }

        .about-principles-intro {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 90px;
          align-items: end;
        }

        .about-principles .about-eyebrow {
          color: rgba(255,255,255,0.5);
          margin-top: 72px;
        }

        .about-principles .about-display-heading {
          color: #fff;
          margin-top: 24px;
        }

        .about-principles .about-display-heading em {
          color: var(--about-gold-soft);
        }

        .about-principles-lead {
          color: rgba(255,255,255,0.53);
          font-size: 1.08rem;
          line-height: 1.8;
          max-width: 520px;
          margin: 0 0 3px auto;
        }

        .about-principles-grid {
          margin-top: 74px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid rgba(255,255,255,0.12);
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }

        .about-principle-card {
          position: relative;
          min-height: 380px;
          padding: 28px 26px;
          border-right: 1px solid rgba(255,255,255,0.1);
          background: linear-gradient(180deg, rgba(255,255,255,0.018), rgba(255,255,255,0));
          transition: background .3s ease;
        }

        .about-principle-card:last-child {
          border-right: 0;
        }

        .about-principle-card:hover {
          background: linear-gradient(180deg, rgba(182,144,74,0.11), rgba(255,255,255,0));
        }

        .about-principle-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: rgba(255,255,255,0.3);
        }

        .about-principle-top svg {
          color: var(--about-gold-soft);
        }

        .about-principle-card h3 {
          margin: 120px 0 14px;
          font-size: 2rem;
          letter-spacing: -0.04em;
          font-weight: 650;
        }

        .about-principle-card p {
          margin: 0;
          color: rgba(255,255,255,0.46);
          line-height: 1.7;
          font-size: 0.96rem;
        }

        .about-principle-arrow {
          position: absolute;
          bottom: 24px;
          right: 22px;
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.5);
          transition: color .25s ease, border-color .25s ease, transform .25s ease;
        }

        .about-principle-card:hover .about-principle-arrow {
          color: var(--about-gold-soft);
          border-color: rgba(182,144,74,0.5);
          transform: translate(2px, -2px);
        }

        /* VALUES */
        .about-values {
          background: var(--about-paper);
          padding: 125px 0 145px;
        }

        .about-values-heading {
          margin-top: 72px;
          display: grid;
          grid-template-columns: 1fr 0.75fr;
          gap: 90px;
          align-items: end;
        }

        .about-values-heading h2 {
          margin: 0;
          font-size: clamp(4rem, 6.4vw, 7rem);
          line-height: 0.88;
          letter-spacing: -0.07em;
          font-weight: 720;
        }

        .about-values-heading h2 span {
          font-family: Georgia, serif;
          font-weight: 400;
          color: #6b655b;
        }

        .about-values-heading p {
          margin: 0 0 7px;
          color: #69655d;
          line-height: 1.8;
          max-width: 500px;
          font-size: 1.02rem;
        }

        .about-values-grid {
          margin-top: 78px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(16,17,19,0.12);
          border: 1px solid rgba(16,17,19,0.12);
        }

        .about-value-card {
          min-height: 215px;
          background: var(--about-paper);
          padding: 28px;
          transition: background .25s ease, transform .25s ease;
        }

        .about-value-card:hover {
          background: #eeece6;
          transform: translateY(-2px);
        }

        .about-value-number {
          color: var(--about-gold);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.15em;
        }

        .about-value-card h3 {
          margin: 60px 0 10px;
          font-size: 1.25rem;
          letter-spacing: -0.03em;
        }

        .about-value-card p {
          margin: 0;
          color: #777269;
          line-height: 1.65;
          font-size: 0.92rem;
          max-width: 310px;
        }

        /* CLOSING */
        .about-closing {
          position: relative;
          min-height: 76vh;
          display: flex;
          align-items: center;
          background: #0d0f11;
          color: #fff;
          overflow: hidden;
        }

        .about-closing-grid {
          position: absolute;
          inset: 0;
          opacity: 0.25;
          background-image:
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 85px 85px;
        }

        .about-closing::after {
          content: "";
          position: absolute;
          width: 700px;
          height: 700px;
          right: -220px;
          bottom: -390px;
          border-radius: 50%;
          border: 1px solid rgba(182,144,74,0.2);
          box-shadow:
            0 0 0 80px rgba(182,144,74,0.025),
            0 0 0 160px rgba(182,144,74,0.02);
        }

        .about-closing-inner {
          padding: 110px 0;
        }

        .about-closing h2 {
          margin: 28px 0 24px;
          max-width: 850px;
          font-size: clamp(4rem, 7.3vw, 8rem);
          line-height: 0.88;
          letter-spacing: -0.075em;
          font-weight: 720;
        }

        .about-closing h2 span {
          font-family: Georgia, serif;
          color: var(--about-gold-soft);
          font-weight: 400;
        }

        .about-closing p {
          margin: 0;
          color: rgba(255,255,255,0.5);
          font-size: 1.05rem;
        }

        .about-primary-button-large {
          margin-top: 38px;
          padding: 17px 23px;
        }

        .about-closing-mark {
          position: absolute;
          right: 6vw;
          bottom: 4vh;
          font-size: clamp(8rem, 18vw, 19rem);
          line-height: 0.72;
          color: rgba(255,255,255,0.025);
          font-weight: 800;
          letter-spacing: -0.1em;
          pointer-events: none;
        }

        /* RESPONSIVE */
        @media (max-width: 1100px) {
          .about-hero-grid {
            grid-template-columns: 1fr;
          }

          .about-hero-copy {
            max-width: 780px;
          }

          .about-hero-visual {
            min-height: auto;
          }

          .about-hero-image-frame {
            width: min(100%, 680px);
            height: 640px;
          }

          .about-floating-card-top {
            right: 4%;
          }

          .about-floating-card-bottom {
            left: 4%;
          }

          .about-metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .about-metric:nth-child(2n) {
            border-right: 0;
          }

          .about-metric {
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }

          .about-metric-featured {
            border-right: 0;
          }

          .about-founder {
            padding-top: 95px;
            padding-bottom: 110px;
          }

          .about-principles-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .about-principle-card:nth-child(2) {
            border-right: 0;
          }

          .about-principle-card:nth-child(-n+2) {
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }
        }

        @media (max-width: 820px) {
          .about-shell {
            width: min(100% - 34px, 680px);
          }

          .about-hero {
            min-height: auto;
          }

          .about-hero-grid {
            padding: 72px 0 105px;
          }

          .about-hero-copy h1 {
            font-size: clamp(4rem, 16vw, 6.4rem);
          }

          .about-hero-image-frame {
            height: 610px;
            min-height: 0;
          }

          .orbit-a {
            width: 470px;
            height: 470px;
          }

          .orbit-b {
            width: 560px;
            height: 560px;
          }

          .about-founder-grid,
          .about-principles-intro,
          .about-values-heading {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .about-founder {
            background: #f7f5f0;
          }

          .about-founder-photo-wrap {
            max-width: 560px;
          }

          .about-principles .about-eyebrow {
            margin-top: 45px;
          }

          .about-principles-lead {
            margin: 0;
            max-width: 600px;
          }

          .about-values-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .about-closing {
            min-height: 68vh;
          }
        }

        @media (max-width: 600px) {
          .about-section-topline span:last-child {
            display: none;
          }

          .about-hero-grid {
            padding-top: 54px;
          }

          .about-hero-copy h1 {
            font-size: clamp(3.6rem, 18vw, 5.3rem);
          }

          .about-hero-copy p {
            font-size: 1rem;
            line-height: 1.7;
          }

          .about-hero-actions {
            align-items: stretch;
            flex-direction: column;
          }

          .about-primary-button,
          .about-ghost-button {
            width: 100%;
          }

          .about-hero-caption {
            flex-wrap: wrap;
            line-height: 1.5;
          }

          .about-hero-image-frame {
            height: 520px;
          }

          .about-floating-card-top {
            top: 6%;
            right: 0;
          }

          .about-floating-card-bottom {
            left: 0;
            bottom: 5%;
          }

          .about-scroll-cue {
            display: none;
          }

          .about-founder,
          .about-values {
            padding-top: 78px;
            padding-bottom: 86px;
          }

          .about-metrics {
            padding: 74px 0 78px;
          }

          .about-metrics-grid {
            grid-template-columns: 1fr 1fr;
          }

          .about-metric {
            min-height: 175px;
            padding: 21px 18px;
          }

          .about-metric-value {
            margin-top: 38px;
            font-size: 3rem;
          }

          .about-metric-label {
            font-size: 8px;
            line-height: 1.45;
          }

          .about-metric-featured {
            grid-column: 1 / -1;
            min-height: 150px;
          }

          .about-metric-feature-text {
            align-items: flex-start;
            text-align: left;
          }

          .about-founder-photo-wrap {
            padding-right: 18px;
          }

          .about-founder-copy h2 {
            font-size: clamp(4rem, 18vw, 6rem);
          }

          .about-founder-copy blockquote p {
            font-size: 1.35rem;
          }

          .about-principles {
            padding: 78px 0 88px;
          }

          .about-principles-grid {
            grid-template-columns: 1fr;
          }

          .about-principle-card,
          .about-principle-card:nth-child(2) {
            border-right: 0;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }

          .about-principle-card:last-child {
            border-bottom: 0;
          }

          .about-principle-card h3 {
            margin-top: 82px;
          }

          .about-values-heading {
            margin-top: 52px;
          }

          .about-values-heading h2 {
            font-size: clamp(3.8rem, 16vw, 5.6rem);
          }

          .about-values-grid {
            grid-template-columns: 1fr;
            margin-top: 54px;
          }

          .about-value-card {
            min-height: 190px;
          }

          .about-value-card h3 {
            margin-top: 48px;
          }

          .about-closing-inner {
            padding: 85px 0;
          }

          .about-closing h2 {
            font-size: clamp(3.7rem, 17vw, 5.7rem);
          }
        }
      `}</style>
    </>
  );
}

// Hero — value proposition, dual CTAs, and a simulated "AI is answering" phone card.
"use client";

import * as React from "react";
import { Trans, useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, Play, Pause, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Hero() {
  const { t } = useTranslation();
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = React.useState(false);
  const reduce = useReducedMotion();

  // Button state mirrors the element's own events rather than being set by hand,
  // so it can never stick on "playing" if playback stops for a reason we didn't
  // initiate (end of clip, media error, OS/browser interruption).
  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setPlaying(true);
    const onStop = () => setPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("playing", onPlay);
    audio.addEventListener("pause", onStop);
    audio.addEventListener("ended", onStop);
    audio.addEventListener("error", onStop);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("playing", onPlay);
      audio.removeEventListener("pause", onStop);
      audio.removeEventListener("ended", onStop);
      audio.removeEventListener("error", onStop);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      return;
    }

    // Replay from the top once the clip has run to completion.
    if (audio.ended) audio.currentTime = 0;

    // The clip plays through in full — there is deliberately no duration cap or
    // timer here. If the file is missing, fail quietly and reset the button.
    audio.play().catch(() => setPlaying(false));
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-cream via-cream to-white pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-brand-700">
            <Sparkles className="h-4 w-4" />
            {t("hero.badge")}
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-6xl">
            <Trans
              i18nKey="hero.title"
              components={{ brand: <span className="text-brand-600" /> }}
            />
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
            {t("hero.subtitle")}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#trial">{t("hero.ctaPrimary")}</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#demo">{t("hero.ctaSecondary")}</a>
            </Button>
          </div>

          <p className="mt-5 text-sm text-stone-500">{t("hero.ctaNote")}</p>
        </div>

        {/* Simulated incoming call card */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <div className="w-full max-w-[320px] rounded-[2.5rem] border border-stone-200 bg-white p-3 shadow-2xl shadow-orange-200/40">
            <div className="rounded-[2rem] bg-gradient-to-b from-brand-500 to-sunset px-6 pb-8 pt-10 text-center text-white">
              <p className="text-xs font-medium uppercase tracking-widest text-white/80">
                {t("hero.card.incoming")}
              </p>
              <p className="mt-1 text-lg font-semibold">
                {t("hero.card.phone")}
              </p>

              <div className="mx-auto mt-8 flex h-24 w-24 items-center justify-center rounded-full bg-white/15 ring-4 ring-white/20">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90">
                  <Phone className="h-7 w-7 text-brand-600" />
                </div>
              </div>

              <p className="mt-6 text-base font-semibold">
                {t("hero.card.answering")}
              </p>
              <p className="mt-1 text-sm text-white/80">
                {t("hero.card.answeringSub")}
              </p>

              <button
                type="button"
                onClick={togglePlay}
                className="mx-auto mt-7 flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand-600 shadow-lg transition-transform hover:scale-105 active:scale-95"
                aria-label={
                  playing
                    ? t("hero.card.pauseAria")
                    : t("hero.card.playAria")
                }
              >
                {playing ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="ml-0.5 h-6 w-6" />
                )}
              </button>
              <p className="mt-3 text-xs text-white/80">
                {t("hero.card.playCaption")}
              </p>

              {/* preload="metadata" only fetches the header, but lets the browser
                  know the real duration so it streams the clip through to the end. */}
              <audio
                ref={audioRef}
                src="/audio/demo-nail.mp3"
                preload="metadata"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

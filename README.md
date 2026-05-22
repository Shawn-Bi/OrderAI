# OrderAI — Landing Page (MVP Demo)

Marketing site for **OrderAI**, an AI phone-answering assistant for U.S. nail
salons, spas, and restaurants. The page explains the product in ~30 seconds,
lets visitors hear sample calls, and drives them to a free-trial form.

> 这是 OrderAI 产品官网的 MVP demo。英文为主，关键文案下方有中文小字辅助。

---

## Tech Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS v3** — theme colors via CSS variables in `app/globals.css`
- **shadcn/ui** — base components in `components/ui/`
- **Framer Motion** — subtle fade-up on scroll (respects `prefers-reduced-motion`)
- **lucide-react** — icons
- Fonts: **Inter** (English) + **Noto Sans SC** (Chinese), via `next/font/google`

No backend, database, or state library. The trial form is a front-end
placeholder (see *Placeholder Assets* below).

---

## Getting Started

```bash
npm install        # install dependencies
npm run dev        # start dev server → http://localhost:3000
npm run build      # production build (also runs type-check + lint)
npm run start      # serve the production build
npm run lint       # ESLint
```

Node 18+ is recommended (developed on Node 24).

---

## Project Structure

```
app/
  layout.tsx          Fonts, metadata/OG
  page.tsx            Assembles the 10 sections in order
  globals.css         Theme color CSS variables + Tailwind layers
components/
  sections/           One file per page section (see order below)
    navbar.tsx  hero.tsx  use-cases.tsx  features.tsx  demo.tsx
    pricing.tsx  testimonials.tsx  faq.tsx  cta-form.tsx  footer.tsx
  ui/                 shadcn primitives (button, card, accordion, input,
                      label, select, tabs)
  motion/reveal.tsx   Scroll fade-up wrapper (Framer Motion)
lib/utils.ts          cn() class-merge helper
public/audio/         Demo call audio (PLACEHOLDER — not included)
scripts/              ElevenLabs demo call scripts (markdown)
```

Page section order: **Navbar → Hero → Use Cases → Features → Demo → Pricing
→ Testimonials → FAQ → Trial Form → Footer**.

### Theme colors

Defined as HSL CSS variables in `app/globals.css` and mapped in
`tailwind.config.ts`:

| Token            | Value                | Usage                         |
| ---------------- | -------------------- | ----------------------------- |
| `brand` / primary | terracotta `#E07856` | buttons, highlights, accents |
| `sunset`          | `#FF8C5A`            | hero gradient                |
| `cream`           | `#FFF7ED`            | section backgrounds          |
| `ink`             | deep brown `#3D2817` | body text / footer           |
| grays             | Tailwind `stone-*`   | warmer than `gray-*`         |

---

## Placeholder Assets (replace before launch)

| Asset | Where | What to do |
| ----- | ----- | ---------- |
| **Demo audio** | `public/audio/demo-nail.mp3`, `demo-massage.mp3`, `demo-restaurant.mp3` | Generate with ElevenLabs from `scripts/` (see below). Until added, the audio players render but have nothing to play — handled gracefully, no errors. |
| **Testimonials** | `components/sections/testimonials.tsx` | Replace `[Owner Name…]` / `[City, ST]` / `[X]` placeholders with real, approved quotes. Do **not** invent names or metrics. |
| **Trial form submit** | `components/sections/cta-form.tsx` | Currently `console.log` + `alert`. Wire to **Resend** or **Formspree** at the `// TODO: 接入 Resend / Formspree` marker. |
| **Footer links / contact** | `components/sections/footer.tsx` | Replace `#` hrefs and `hello@orderai.example` with real URLs/email. |
| **Phone number** | `components/sections/hero.tsx` | `(713) 555-0142` is a sample caller ID — swap if needed. |

No stock photos are used anywhere — visuals are CSS gradients, SVG, and
Lucide icons by design.

---

## Generating the Demo Audio with ElevenLabs

The three call scripts live in `scripts/` and are formatted for easy import:

- `scripts/demo-nail.md` — nail salon appointment booking
- `scripts/demo-massage.md` — massage & spa reschedule
- `scripts/demo-restaurant.md` — restaurant Friday-rush reservation

Each script is ~50 seconds (~120–140 words) with every line tagged by speaker
and emotion, e.g. `[AI - warm, friendly]:` / `[Customer - casual]:`.

**Steps:**

1. Open a script. For each line, pick an ElevenLabs voice per the
   `Voices:` header (AI = warm professional female; Customer = the described
   persona). Use the emotion tag (warm / cheerful / confirming…) to guide
   delivery / stability & style settings.
2. Generate each speaker's lines and stitch the dialogue in order (add a short
   natural pause between turns; end on the `[soft click]`).
3. Export as MP3 and save with the **exact** filenames into `public/audio/`:
   - `public/audio/demo-nail.mp3`
   - `public/audio/demo-massage.mp3`
   - `public/audio/demo-restaurant.mp3`
4. Reload the site — the Hero play button and the Demo tabs will play them.

Filenames are referenced in `components/sections/hero.tsx` and
`components/sections/demo.tsx`; keep them identical.

---

## Deploying to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Framework preset auto-detects **Next.js**. Defaults are correct:
   - Build command: `next build`
   - Output: `.next`
   - Install: `npm install`
4. No environment variables are required for the demo. (Add them later when
   wiring the form to Resend/Formspree.)
5. Deploy. Remember to commit the generated `public/audio/*.mp3` files (or
   upload them) so the demo audio works in production.

---

## Notes & Conventions

- English-first copy; a small grey Chinese line (`text-sm text-stone-500`)
  sits under key value props for Asian shop owners. No i18n routing.
- Each section file has a one-line top comment describing its purpose.
- Animations are deliberately restrained and disabled under
  `prefers-reduced-motion`.
- Search the codebase for `TODO` to find every spot needing real data before
  launch.

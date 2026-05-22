// Footer — 3-block dark-theme footer: brand + industry chips, Product links,
// Contact + social. Contact email is a real mailto; "Book a call" jumps to #trial.
"use client";

import { useTranslation } from "react-i18next";
import { PhoneCall, Mail, Clock, Phone } from "lucide-react";

// Constants outside i18n: brand-bound and identical in every language.
const CONTACT_EMAIL = "fidesgcs2000@gmail.com";

// Product column — links to existing in-page anchor sections.
const PRODUCT_LINKS = [
  { key: "features", href: "#features" },
  { key: "useCases", href: "#use-cases" },
  { key: "pricing", href: "#pricing" },
  { key: "demo", href: "#demo" },
] as const;

// Industry chips — keys match the four sectors served (matches useCases / dropdown).
const INDUSTRY_CHIPS = ["nail", "spa", "restaurant", "clinic"] as const;

// Social platforms — placeholder hrefs until real accounts exist.
// Brand icons inlined as SVG (this project's lucide-react is pre-rebrand and
// has no Facebook/Instagram/LinkedIn/X glyphs). Paths from simple-icons (CC0).
type SocialIconProps = React.SVGProps<SVGSVGElement>;

function FacebookIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.62 8.62 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
    </svg>
  );
}

function InstagramIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0Zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03Zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162Zm0 10.162c-2.21 0-4-1.79-4-4 0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.21-1.79 4-4 4Zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439Z" />
    </svg>
  );
}

function LinkedinIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

function XIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { key: "facebook", label: "Facebook", href: "#", Icon: FacebookIcon },
  { key: "instagram", label: "Instagram", href: "#", Icon: InstagramIcon },
  { key: "linkedin", label: "LinkedIn", href: "#", Icon: LinkedinIcon },
  { key: "x", label: "X", href: "#", Icon: XIcon },
] as const;

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-stone-200 bg-ink text-stone-300">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand block — spans 2 cols on md+ */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-bold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <PhoneCall className="h-4 w-4" />
              </span>
              <span className="text-lg">OrderAI</span>
            </div>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-400">
              {t("footer.tagline")}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {INDUSTRY_CHIPS.map((key) => (
                <li key={key}>
                  <span className="inline-flex items-center rounded-full border border-stone-700 px-3 py-1 text-xs font-medium text-stone-400">
                    {t(`footer.industries.${key}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Product column */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              {t("footer.product.title")}
            </h3>
            <ul className="mt-4 space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-stone-400 transition-colors hover:text-brand-300"
                  >
                    {t(`footer.product.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              {t("footer.contact.title")}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2.5 text-sm text-stone-400 transition-colors hover:text-brand-300"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span className="break-all">{CONTACT_EMAIL}</span>
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5 text-sm text-stone-400">
                <Clock className="h-4 w-4 shrink-0" />
                <span>{t("footer.contact.hours")}</span>
              </li>
              <li>
                <a
                  href="#trial"
                  className="inline-flex items-center gap-2.5 text-sm text-stone-400 transition-colors hover:text-brand-300"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>{t("footer.contact.bookCall")}</span>
                </a>
              </li>
            </ul>

            <div className="mt-7">
              <p className="text-sm font-semibold text-white">
                {t("footer.social.label")}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {SOCIAL_LINKS.map(({ key, label, href, Icon }) => (
                  <li key={key}>
                    <a
                      href={href}
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-700 text-stone-400 transition-colors hover:border-stone-600 hover:text-brand-300"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-stone-700 pt-6 text-sm text-stone-500">
          © {new Date().getFullYear()} OrderAI. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}

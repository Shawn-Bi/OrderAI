// CtaForm — the primary conversion: free-trial request form (placeholder submit).
"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "@/components/motion/reveal";

export function CtaForm() {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // TODO: 接入 Resend / Formspree —— 目前仅占位
    console.log("Trial request:", data);
    alert(t("trialForm.successAlert"));
    e.currentTarget.reset();
  };

  return (
    <section
      id="trial"
      className="bg-gradient-to-b from-cream to-cream-deep py-20 md:py-28"
    >
      <div className="container max-w-3xl">
        <Reveal className="rounded-2xl border border-stone-200 bg-white p-8 shadow-xl shadow-orange-200/30 md:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
              {t("trialForm.heading")}
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              {t("trialForm.subheading")}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-9 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">{t("trialForm.nameLabel")}</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder={t("trialForm.namePlaceholder")}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="businessName">
                  {t("trialForm.businessNameLabel")}
                </Label>
                <Input
                  id="businessName"
                  name="businessName"
                  placeholder={t("trialForm.businessNamePlaceholder")}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessType">
                {t("trialForm.businessTypeLabel")}
              </Label>
              <Select name="businessType" required>
                <SelectTrigger id="businessType">
                  <SelectValue
                    placeholder={t("trialForm.businessTypePlaceholder")}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nail-salon">
                    {t("trialForm.businessTypeNail")}
                  </SelectItem>
                  <SelectItem value="massage-spa">
                    {t("trialForm.businessTypeSpa")}
                  </SelectItem>
                  <SelectItem value="restaurant">
                    {t("trialForm.businessTypeRestaurant")}
                  </SelectItem>
                  <SelectItem value="clinic">
                    {t("trialForm.businessTypeClinic")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">{t("trialForm.phoneLabel")}</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={t("trialForm.phonePlaceholder")}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t("trialForm.emailLabel")}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("trialForm.emailPlaceholder")}
                  required
                />
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full">
              {t("trialForm.submit")}
            </Button>
            <p className="text-center text-sm text-stone-500">
              {t("trialForm.footnote")}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BUSINESS, SERVICES } from "@/lib/data";

const SERVICE_OPTIONS = SERVICES.map((s) => s.name);

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Submit failed");
      setFormState("success");
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    } catch {
      setFormState("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass =
    "w-full h-11 px-3.5 rounded-md border border-border bg-white text-foreground text-sm placeholder:text-foreground-subtle focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors";

  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-16 border border-border rounded-2xl bg-white">
                <CheckCircle size={48} className="text-accent mb-4" />
                <h2 className="font-serif text-3xl mb-2">We&rsquo;ll be in touch!</h2>
                <p className="text-foreground-muted max-w-sm">
                  Thanks for reaching out. Someone from RamRock Coatings will
                  contact you within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-border rounded-2xl p-8 shadow-sm"
                noValidate
              >
                <h2 className="font-serif text-2xl text-foreground mb-6">
                  Project Details
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Phone Number <span className="text-accent">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(319) 555-0100"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a service…</option>
                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                      <option value="Not sure">Not sure yet</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Square footage, current floor condition, timeline, any questions…"
                      className="w-full px-3.5 py-2.5 rounded-md border border-border bg-white text-foreground text-sm placeholder:text-foreground-subtle focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors resize-y"
                    />
                  </div>
                </div>

                {formState === "error" && (
                  <p className="mt-4 text-sm text-red-600">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="mt-6 w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-md bg-accent text-white font-semibold text-sm hover:bg-accent-dark transition-colors disabled:opacity-60 disabled:pointer-events-none"
                >
                  {formState === "submitting" ? "Sending…" : "Send My Request"}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-background-secondary rounded-2xl p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-4">
                Contact Information
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={BUSINESS.phoneHref}
                    className="flex items-start gap-3 text-sm hover:text-accent transition-colors group"
                  >
                    <Phone
                      size={16}
                      className="mt-0.5 shrink-0 text-accent group-hover:text-accent-dark"
                    />
                    <span>
                      <span className="font-medium text-foreground block">Phone</span>
                      {BUSINESS.phone}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={BUSINESS.emailHref}
                    className="flex items-start gap-3 text-sm hover:text-accent transition-colors group"
                  >
                    <Mail size={16} className="mt-0.5 shrink-0 text-accent" />
                    <span>
                      <span className="font-medium text-foreground block">Email</span>
                      {BUSINESS.email}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={BUSINESS.social.google}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-sm hover:text-accent transition-colors"
                  >
                    <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                    <span>
                      <span className="font-medium text-foreground block">Location</span>
                      {BUSINESS.address}
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground-muted">
                  <Clock size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>
                    <span className="font-medium text-foreground block">Hours</span>
                    Mon–Sat: 6:30AM–9PM
                    <br />
                    Sun: 6:30AM–9PM
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <p className="text-sm font-semibold text-amber-800 mb-1">
                Prefer to call?
              </p>
              <p className="text-sm text-amber-700 mb-3">
                We answer 7 days a week during business hours.
              </p>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-800 hover:text-amber-900"
              >
                <Phone size={14} />
                {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

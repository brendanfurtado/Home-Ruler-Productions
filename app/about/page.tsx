import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `About | ${config.appName}`,
  description: "Learn about Brendan Furtado and Home Ruler Productions - professional videography and film production services.",
  canonicalUrlRelative: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
            {/* Headshot */}
            <div className="shrink-0">
              <Image
                src="/Headshot.png"
                alt="Brendan Furtado"
                width={280}
                height={280}
                className="rounded-lg object-cover"
                priority
              />
            </div>

            {/* Bio */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                Brendan Furtado
              </h1>
              <p className="text-base-content/60 mb-6">
                Founder, {config.appName}
              </p>

              <div className="space-y-4 text-base-content/80">
                <p>
                  Home Ruler Productions is a videography and film production company
                  dedicated to bringing stories to life through cinematic visuals.
                </p>

                <p>
                  I specialize in creating compelling video content that captures
                  the essence of your message, whether it&apos;s for commercial projects,
                  documentaries, podcasts, or creative endeavors.
                </p>

                <p>
                  My approach combines technical expertise with creative vision to
                  deliver polished, professional results that exceed expectations.
                </p>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex justify-center md:justify-start gap-4">
                <a
                  href="https://www.linkedin.com/in/brendan-furtado/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

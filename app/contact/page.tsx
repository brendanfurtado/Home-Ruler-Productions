import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Contact | ${config.appName}`,
  description: "Get in touch with Home Ruler Productions for videography and film production inquiries.",
  canonicalUrlRelative: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] px-8 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Contact
          </h1>

          <p className="text-base-content/70 mb-12">
            Interested in working together? Get in touch.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="text-sm uppercase tracking-wide text-base-content/50 mb-2">
                Email
              </h2>
              <a
                href={`mailto:${config.resend.supportEmail}`}
                className="text-lg hover:text-primary transition-colors"
              >
                {config.resend.supportEmail}
              </a>
            </div>

            <div className="pt-8">
              <h2 className="text-sm uppercase tracking-wide text-base-content/50 mb-4">
                Follow
              </h2>
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.youtube.com/@CanBlueHockeyPodcast"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="YouTube"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
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

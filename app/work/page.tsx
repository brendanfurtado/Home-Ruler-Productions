import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Work | ${config.appName}`,
  description: "Portfolio of videography and film production work by Home Ruler Productions.",
  canonicalUrlRelative: "/work",
});

// Video projects to showcase
const projects = [
  {
    title: "Featured Project",
    description: "Professional video production showcase",
    youtubeId: "ZNt5H8WnjWk",
  },
];

// YouTube channel to feature
const channels = [
  {
    name: "Can Blue Hockey Podcast",
    description: "A hockey podcast produced by Home Ruler Productions",
    url: "https://www.youtube.com/@CanBlueHockeyPodcast",
    thumbnailId: "wkQF5Rn7jgw",
  },
];

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
            Work
          </h1>

          {/* Video Projects */}
          <section className="mb-16">
            <div className="grid gap-12">
              {projects.map((project, index) => (
                <div key={index} className="space-y-4">
                  <div className="aspect-video w-full max-w-4xl mx-auto">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src={`https://www.youtube.com/embed/${project.youtubeId}`}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="text-xl font-semibold">{project.title}</h2>
                    <p className="text-base-content/70">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Produced Channels */}
          <section>
            <h2 className="text-2xl font-bold tracking-tight mb-8 text-center">
              Produced Channels
            </h2>
            <div className="grid gap-8 max-w-4xl mx-auto">
              {channels.map((channel, index) => (
                <a
                  key={index}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-lg border border-base-200 hover:border-primary transition-colors"
                >
                  {channel.thumbnailId && (
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={`https://img.youtube.com/vi/${channel.thumbnailId}/maxresdefault.jpg`}
                        alt={channel.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{channel.name}</h3>
                    <p className="text-base-content/70 text-sm">{channel.description}</p>
                    <span className="text-primary text-sm mt-3 inline-block">
                      View on YouTube →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

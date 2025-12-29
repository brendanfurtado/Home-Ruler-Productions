import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import config from "@/config";

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            {config.appName}
          </h1>
          <p className="text-lg md:text-xl text-base-content/70 mb-12 max-w-2xl mx-auto">
            Videography & Film Production
          </p>
          <Link
            href="/work"
            className="btn btn-outline btn-lg uppercase tracking-wide"
          >
            View Work
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

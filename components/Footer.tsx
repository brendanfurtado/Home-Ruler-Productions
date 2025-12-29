import Link from "next/link";
import config from "@/config";

const Footer = () => {
  return (
    <footer className="border-t border-base-200">
      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="font-bold text-sm tracking-tight uppercase"
          >
            {config.appName}
          </Link>

          <p className="text-sm text-base-content/50">
            © {new Date().getFullYear()} {config.appName}. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/tos" className="hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

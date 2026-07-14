import { footer, nav, siteInfo } from "@/app/content";

export function Footer() {
  return (
    <footer className="bg-brun text-cream/80 py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          <div>
            <span className="font-serif text-xl text-cream">
              {siteInfo.name}
            </span>
            <p className="mt-1 text-sm text-cream/60">{siteInfo.title}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm hover:text-miel-light transition-colors duration-250"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-cream/10 text-xs text-cream/50 leading-relaxed space-y-2">
          <p>{footer.legal}</p>
          <p>{footer.mentions}</p>
          <p>
            © {new Date().getFullYear()} {siteInfo.name}. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

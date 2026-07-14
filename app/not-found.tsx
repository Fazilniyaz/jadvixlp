import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-jx flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="mb-4 text-label-md font-semibold uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mb-6 text-display-md text-primary">Page not found</h1>
      <p className="mb-10 max-w-md text-body-lg text-ink-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="rounded-xl bg-primary px-8 py-4 text-label-md font-semibold text-white transition-transform hover:scale-[1.02]"
      >
        Back to Home
      </Link>
    </section>
  );
}

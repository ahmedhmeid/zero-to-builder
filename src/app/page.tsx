export default function Home() {
  return (
    <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24">
      <div className="flex flex-col items-center text-center max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-accent-soft px-3 py-1 text-xs font-medium tracking-wider text-accent">
          <span
            className="h-1.5 w-1.5 rounded-full bg-accent"
            style={{ boxShadow: "0 0 8px 2px rgba(198, 244, 50, 0.35)" }}
          />
          STARTER · DAY ZERO
        </div>

        <h1
          className="gradient-text mt-8 font-extrabold leading-[1.05]"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", letterSpacing: "-0.04em" }}
        >
          Hello, builder.
        </h1>

        <p className="mt-6 text-2xl font-medium text-text">
          Your project is set up.
        </p>

        <p className="mt-4 text-base leading-relaxed text-text-muted">
          This page is a placeholder. Tell Claude what to build next, and watch it become yours.
        </p>
      </div>

      <div className="absolute bottom-8 text-xs tracking-wide text-text-subtle">
        Built with Zero to Builder
      </div>
    </main>
  );
}

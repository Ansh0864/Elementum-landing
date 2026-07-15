import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | success | error

  function handleSubmit(event) {
    event.preventDefault();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  }

  return (
    <section className="relative overflow-hidden bg-sage-light px-6 py-14 sm:px-10 md:py-20">
      <div
        aria-hidden="true"
        className="absolute right-8 top-10 h-16 w-14 -rotate-6 bg-lavender rounded-blob animate-float sm:right-16 sm:h-24 sm:w-20"
      />

      <div className="relative mx-auto max-w-xl text-center">
        <h2 className="font-display text-balance text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          Subscribe to <span className="text-sage">our</span>{" "}
          <span className="text-gold">newsletter</span>
        </h2>
        <p className="mt-4 text-balance text-muted">
          To make your stay special and even more memorable.
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            placeholder="you@example.com"
            className="w-full max-w-xs rounded-full border border-ink/10 bg-cream px-5 py-3.5 text-sm text-ink outline-none transition-shadow focus:shadow-[0_0_0_3px_rgba(63,107,74,0.25)] sm:w-64"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-cream transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            Subscribe Now
          </button>
        </form>

        <p
          role="status"
          className={`mt-4 text-sm transition-all duration-300 ${
            status === "success"
              ? "translate-y-0 text-sage opacity-100"
              : status === "error"
              ? "translate-y-0 text-coral opacity-100"
              : "-translate-y-1 opacity-0"
          }`}
        >
          {status === "success"
            ? "You're in — welcome aboard!"
            : status === "error"
            ? "That doesn't look like a valid email."
            : ""}
        </p>
      </div>
    </section>
  );
}

export default Newsletter;

import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0e0e10] text-[#e0e0e0] font-sans">
      <header className="border-b border-[#ff71ce] p-4">
        <h1 className="text-3xl font-bold tracking-wide">Graycore Vaporfuture</h1>
      </header>

      <main className="p-8 space-y-6">
        <section className="bg-[#1a1a1d] p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-[#01cdfe]">Why We Exist</h2>
          <p className="text-[#999]">
            Born from the intersection of autonomy and purpose, we build for those
            reshaping the future — AI students, creators, and independent thinkers.
          </p>
        </section>

        <section className="bg-[#1a1a1d] p-6 rounded-2xl shadow-lg border border-[#01cdfe]">
          <h2 className="text-2xl font-semibold text-[#ff71ce]">GPUC Edge eGPU Dock</h2>
          <p className="text-[#999]">
            Our flagship modular GPU dock, made for learners and tinkerers who need
            serious power in small spaces — without compromise.
          </p>
        </section>

        {children}
      </main>

      <footer className="p-4 text-center border-t border-[#01cdfe] text-[#999]">
        Contact us:{" "}
        <a href="tel:+16232175306" className="text-[#ff71ce] hover:underline">
          +1 (623) 217-5306
        </a>
      </footer>
    </div>
  );
}

"use client";

import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    extra: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        console.log("Email inviata!");
        alert("Messaggio inviato con successo!");
        setFormData({ name: "", email: "", message: "", extra: "" });
      } else {
        console.error("Errore:", data.error);
        alert("Si è verificato un errore durante l'invio del messaggio.");
      }
    } catch (error) {
      console.error("Errore di rete:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="glass rounded-2xl p-8" onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-mono font-medium mb-2"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
            placeholder="Il tuo nome"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-mono font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
            placeholder="La tua email"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-mono font-medium mb-2"
          >
            Messaggio
          </label>
          <textarea
            id="message"
            required
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none"
            placeholder="Descrivi il tuo progetto..."
          ></textarea>
        </div>
        <div id="extra-field">
          <label
            htmlFor="extra"
            className="block text-sm font-mono font-medium mb-2"
          >
            Extra
          </label>
          <input
            type="text"
            id="extra"
            value={formData.extra}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
            placeholder="Inserisci un messaggio extra"
          />
        </div>
        <button
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium font-mono ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-r from-primary to-[hsl(220,100%,60%)] text-primary-foreground hover:shadow-[0_0_30px_hsl(187,100%,50%,0.4)] hover:scale-105 h-12 rounded-lg px-8 text-base w-full"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-send"
          >
            <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
            <path d="m21.854 2.147-10.94 10.939"></path>
          </svg>
          {loading ? "Invio in corso..." : "Invia Messaggio"}
        </button>
      </div>
    </form>
  );
}

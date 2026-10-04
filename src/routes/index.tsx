import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Servicos } from "@/components/sections/Servicos";
import { QuemSomos } from "@/components/sections/QuemSomos";
import { Beneficios } from "@/components/sections/Beneficios";
import { Clientes } from "@/components/sections/Clientes";
import { Contato } from "@/components/sections/Contato";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GAN Massagem Corporativa — Bem-estar para sua empresa" },
      { name: "description", content: "Massagem corporativa profissional para empresas. Reduza o absenteísmo, aumente a produtividade e cuide do bem-estar da sua equipe com a GAN." },
      { property: "og:title", content: "GAN Massagem Corporativa — Bem-estar para sua empresa" },
      { property: "og:description", content: "Massagem corporativa profissional para empresas. Reduza o absenteísmo e aumente a produtividade da sua equipe." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicos />
        <QuemSomos />
        <Beneficios />
        <Clientes />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

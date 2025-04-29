import Hero from "../components/hero";
import Features from "../components/features";
import About from "../components/about";
import Solutions from "../components/solutions";
import Worked from "../components/worked";
import ContactUs from "../components/contactus";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section id="hero">
        <Hero />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="solutions">
        <Solutions />
      </section>

      <section id="worked">
        <Worked />
      </section>

      <section id="contact">
        <ContactUs />
      </section>
    </main>
  );
}

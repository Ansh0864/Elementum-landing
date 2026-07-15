import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import FeatureRow from "../components/FeatureRow.jsx";
import OfferList from "../components/OfferList.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Footer from "../components/Footer.jsx";
import Reveal from "../components/Reveal.jsx";
import BackToTop from "../components/BackToTop.jsx";
import WaveDivider from "../components/WaveDivider.jsx";

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <WaveDivider color="coral" />

      <Reveal>
        <FeatureRow
          heading="could be built today"
          headingAccent="Tomorrow"
          paragraph="We are a team of strategists, designers, content creators and researchers. Together we believe progress only happens when brands are brave enough to play it forward, not safe."
          imageSrc="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
          imageAlt="Team shaking hands after a productive meeting"
          accentColor="coral"
          sectionBg="blush"
        />
      </Reveal>

      <Reveal>
        <FeatureRow
          heading="how we can help you progress"
          headingAccent="See"
          paragraph="We add a layer of fearless insight and action that helps changemakers accelerate progress in brand, digital, service and trend research."
          imageSrc="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
          imageAlt="Two colleagues collaborating over a laptop"
          reverse
          accentColor="gold"
          sectionBg="lavenderTint"
        />
      </Reveal>

      <Reveal>
        <OfferList />
      </Reveal>

      <WaveDivider color="gold" flip />

      <Reveal>
        <Testimonial />
      </Reveal>
      <Reveal>
        <Newsletter />
      </Reveal>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default Home;

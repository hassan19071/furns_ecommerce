import AboutUsSection from "./components/AboutUsSection";
import FooterSection from "./components/FooterSection";
import Nav from "./components/Nav";
import SecondHero from "./components/SecondHero";

export default function About() {
  return (
    <>
      <Nav />
      <SecondHero pageName="About us" linkName="about" />
      <AboutUsSection />
      <FooterSection />
    </>
  );
}

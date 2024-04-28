import FooterSection from "./components/FooterSection";
import Nav from "./components/Nav";
import SecondHero from "./components/SecondHero";
import SignupSection from "./components/SignupSection";

export default function Signup() {
  return (
    <>
      <Nav />
      <SecondHero pageName="Create Account" linkName="signup" />
      <SignupSection />
      <FooterSection />
    </>
  );
}

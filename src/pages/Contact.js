import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import Nav from "./components/Nav";
import SecondHero from "./components/SecondHero";



export default function Contact(){
    return(
        <>
          <Nav/>
          <SecondHero pageName="contact us" linkName="contact"/>
          <ContactSection />
          <FooterSection />
        </>
    )
}
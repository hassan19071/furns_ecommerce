import FooterSection from "./components/FooterSection";
import LoginSection from "./components/LoginSection";
import Nav from "./components/Nav";
import SecondHero from "./components/SecondHero";

export default function Login(){
    return(
       <>
         <Nav/>
         <SecondHero pageName="Login" linkName="signin"/>
         <LoginSection />
         <FooterSection/>
       </>
    )
}
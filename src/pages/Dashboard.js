import DashboardContent from "./components/DashboardContent";
import FooterSection from "./components/FooterSection";
import Nav from "./components/Nav";
import SecondHero from "./components/SecondHero";

export default function Dashboard() {
  return (
    <>
      <Nav />
      <SecondHero pageName="Dashboard" linkName="account" />
      <DashboardContent />
      <FooterSection />
    </>
  );
}

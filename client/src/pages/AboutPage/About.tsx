import AboutHero from "../../components/About/AboutHero"
import MissionVision from "../../components/About/MissionVision"
import OurCommitment from "../../components/About/OurCommitment"
import Ourstory from "../../components/About/Ourstory"
import USPSection from "../../components/About/USPSection"
import Whoweare from "../../components/About/Whoweare"
import { FeaturedBanner } from "../../components/HomeSection/FeaturedBanner"
import { Footer } from "../../components/layout/Footer"
import { Header } from "../../components/layout/Header"

const About = () => {
  return (
    <div>
      <Header />
      <AboutHero />
      <div className="w-full px-0 sm:px-10">
        <Whoweare />
      </div>
      <Ourstory />
      <MissionVision />
      <USPSection />
      <OurCommitment />
      <div data-aos="fade-up" data-aos-duration="1000">
        <FeaturedBanner />
      </div>
      <Footer />
    </div>
  )
}

export default About
import { Header } from '../../components/layout/Header'
import { Footer } from '../../components/layout/Footer'
import { FeaturedBanner } from '../../components/HomeSection/FeaturedBanner'
import PartnerHero from '../../components/Partner/PartnerHero'
import PartnerExperience from '../../components/Partner/PartnerExperience'
import HowItWorks from '../../components/Partner/HowItWorks'
import PartnerSupport from '../../components/Partner/PartnerSupport'
import ClientTestimonials from '../../components/Partner/ClientTestimonials'

const Partner = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <PartnerHero />
      <PartnerExperience />
      <HowItWorks />
      <PartnerSupport />
      <ClientTestimonials />
      <div data-aos="fade-up" data-aos-duration="1000">
        <FeaturedBanner />
      </div>
      <Footer />
    </div>
  )
}

export default Partner
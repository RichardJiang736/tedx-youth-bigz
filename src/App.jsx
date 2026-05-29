import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import EventsSection from './components/EventsSection'
import SpeakersTeaser from './components/SpeakersTeaser'
import SocialEmbed from './components/SocialEmbed'
import NewsletterSignup from './components/NewsletterSignup'
import Footer from './components/Footer'
import AmbientFluid from './components/AmbientFluid'

export default function App() {
  return (
    <div className="min-h-screen relative">
      <AmbientFluid />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <SpeakersTeaser />
        <SocialEmbed />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  )
}

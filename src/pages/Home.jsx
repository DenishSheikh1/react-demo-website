import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import About from '../components/About.jsx'
import Features from '../components/Features.jsx'
import Projects from '../components/Projects.jsx'
import Process from '../components/Process.jsx'
import Testimonials from '../components/Testimonials.jsx'
import BlogSection from '../components/BlogSection.jsx'
import ContactSection from '../components/ContactSection.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Features />
        <Projects />
        <Process />
        <Testimonials />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

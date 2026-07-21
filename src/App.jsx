import { useEffect } from 'react'
import Hero from './components/Hero'
import Stockists from './components/Stockists'
import Journey from './components/Journey'
import Analysis from './components/Analysis'
import Delivery from './components/Delivery'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <main>
        <Hero />
        <Stockists />
        <Journey />
        <Analysis />
        <Delivery />
        <Products />
      </main>
      <Footer />
    </>
  )
}

export default App

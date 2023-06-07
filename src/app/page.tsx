import Image from 'next/image'
import './globals.css'
import Hero from './Components/Hero'
import Footer from './Components/footer'

const Home = () => {
  return (
    <>
      <Hero Title={"Lets Explore Movies World Together With Webflix"} Img={"/home.svg"} />
      <Footer />
    </>
  )
}

export default Home


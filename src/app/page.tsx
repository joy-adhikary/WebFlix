import Image from 'next/image'
import './globals.css'
import Hero from './Components/Hero'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const Home = () => {
  return (
    <>
      <Hero Title={"Lets Explore Movies World Together With Webflix"} Img={"/home.svg"} />

    </>
  )
}

export default Home


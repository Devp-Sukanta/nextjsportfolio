import React from 'react'
import Hero from './Hero'
import Nav from '../layouts/Nav'
import About from './About'
import Services from './Services'
import MarqueSection from './MarqueSection'
import ImageMarquee from './MarqueSection'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

function Home() {

  const images = [
    "/assets/imgs/technologies/html.png",
    "/assets/imgs/technologies/css.png",
    "/assets/imgs/technologies/js.png",
    "/assets/imgs/technologies/react.png",
    "/assets/imgs/technologies/nextjs.png",
    "/assets/imgs/technologies/react-native.png",
    "/assets/imgs/technologies/nodejs.png",
    "/assets/imgs/technologies/express.png",
    "/assets/imgs/technologies/mongodb.png",
    "/assets/imgs/technologies/mongoose.png",
    "/assets/imgs/technologies/mysql.png",
    "/assets/imgs/technologies/tailwindcss.png",
    "/assets/imgs/technologies/bootstrap.png",
    "/assets/imgs/technologies/chakraui.png",
    "/assets/imgs/technologies/github.png",
    "/assets/imgs/technologies/amazon.png",
    "/assets/imgs/technologies/heroku.png",
    "/assets/imgs/technologies/postman.png",
    "/assets/imgs/technologies/vscode.png",
    "/assets/imgs/technologies/cpanel.png",
  ]
  

  return (
    <div>
        <Nav/>
        <Hero/>
        <div className='container mx-auto'>
        <ImageMarquee images={images} speed={40} direction="left" className="rounded-lg p-4" />
        </div>
        <About/>
        <Services/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home
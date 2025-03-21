import Navbar from "@/components/Nav";
import Image from "next/image";
import Hero from "./Hero";
import About from "./About";
import ImageMarquee from "./MarqueSection";
import Projects from "./Projects";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {

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
    <>
      <Navbar />
      <Hero />
      <div className='container mx-auto'>
        <ImageMarquee images={images} speed={40} direction="left" className="rounded-lg p-4" />
      </div>
      <About />
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>

    </>
  );
}

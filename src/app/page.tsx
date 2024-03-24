
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import Inicio from "@/components/Inicio/Inicio";
import Nav from "@/components/Nav/Nav";
import Projects from "@/components/Projects/Projects";
import Techs from "@/components/Techs/Techs";




export default function Home() {
  return (
    <>
      <Nav />
      <Inicio />
      <Experience />
      <Projects />
      <Techs />
      <Footer/>
    </>
  );
}

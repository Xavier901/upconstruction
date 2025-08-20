import Index from ".";
import Blogs from "../components/blogs";
import Constructions from "../components/Construction";
import Feature from "../components/Feature";
import Projects from "../components/Projects";
import Services from "../components/Service";
import SServices from "../components/SServices";
import Startedd from "../components/Startedd";
import Testimonial from "../components/Testimonial";

function Main() {
    return(
        <div>
            <Index/>
            <Startedd/>
            <Constructions/>
            <Services/>
            <SServices/>
            <Feature/>
            <Projects/>
            <Testimonial/>
            <Blogs/>
             
  {/* <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <div id="preloader"></div> */}
        </div>
    );
}
export default Main;
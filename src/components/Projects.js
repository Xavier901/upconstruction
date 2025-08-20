import { Link } from 'react-router-dom'

import remodeling_1 from'../img/projects/remodeling-1.jpg'
import remodeling_2 from'../img/projects/remodeling-2.jpg'
import remodeling_3 from'../img/projects/remodeling-3.jpg'
import constructions_1 from'../img/constructions-1.jpg'
import constructions_2 from'../img/constructions-2.jpg'
import constructions_3 from'../img/constructions-3.jpg'
import repairs_1 from'../img/projects/repairs-1.jpg'
import repairs_2 from'../img/projects/repairs-2.jpg'
import repairs_3 from'../img/projects/repairs-3.jpg'
import design_1 from'../img/projects/design-1.jpg'
import design_2 from'../img/projects/design-2.jpg'
import design_3 from'../img/projects/design-3.jpg'



function Projects() {
    return(

         <section id="projects" className="projects section">


      <div className="container section-title" data-aos="fade-up">
        <h2>Projects</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">

        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-remodeling">Remodeling</li>
            <li data-filter=".filter-construction">Construction</li>
            <li data-filter=".filter-repairs">Repairs</li>
            <li data-filter=".filter-design">Design</li>
          </ul>

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-remodeling">
              <div className="portfolio-content h-100">
                <img src={remodeling_1} className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <Link href={remodeling_1} title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                  <Link href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-construction">
              <div className="portfolio-content h-100">
                <img src={constructions_1} className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Product 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <Link href={constructions_1} title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                  <Link href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-repairs">
              <div className="portfolio-content h-100">
                <img src={repairs_1} className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Branding 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <Link href={repairs_1} title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                  <Link href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-design">
              <div className="portfolio-content h-100">
                <img src={design_1} className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Books 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <Link href={design_1} title="Branding 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                  <Link href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-remodeling">
              <div className="portfolio-content h-100">
                <img src={remodeling_2} className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>App 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <Link href={remodeling_2} title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                  <Link href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-construction">
              <div className="portfolio-content h-100">
              <img src={constructions_2} className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Product 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <Link href="assets/img/projects/construction-2.jpg" title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                  <Link href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-repairs">
              <div className="portfolio-content h-100">
                <img src={repairs_2} className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Branding 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <Link href="assets/img/projects/repairs-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                  <Link href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-design">
              <div className="portfolio-content h-100">
                <img src={design_2} className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Books 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <Link href="assets/img/projects/design-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                  <Link href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-remodeling">
              <div className="portfolio-content h-100">
                <img src={remodeling_3} className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>App 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <Link href={remodeling_3} title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                  <Link href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-construction">
              <div className="portfolio-content h-100">
                <img src={constructions_3} className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Product 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <Link href={constructions_3} title="Product 3" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                  <Link href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-repairs">
              <div className="portfolio-content h-100">
                <img src={repairs_3} className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Branding 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <Link href={repairs_3} title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                  <Link href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-design">
              <div className="portfolio-content h-100">
                <img src={design_3 } className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Books 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <Link href={design_3 } title="Branding 3" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                  <Link href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>

    );
}
export default Projects;
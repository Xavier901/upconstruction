import { Link } from 'react-router-dom';
import alt_services from'../img/alt-services.jpg'


function SServices() {
    return(
          <section id="alt-services" className="alt-services section">

      <div className="container">

        <div className="row justify-content-around gy-4">
          <div className="features-image col-lg-6" data-aos="fade-up" data-aos-delay="100"><img src={alt_services} alt=""/></div>

          <div className="col-lg-5 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
            <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>

            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-easel flex-shrink-0"></i>
              <div>
                <h4><Link to="" className="stretched-link">Lorem Ipsum</Link></h4>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
              </div>
            </div>

            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-patch-check flex-shrink-0"></i>
              <div>
                <h4><Link to="" className="stretched-link">Nemo Enim</Link></h4>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
              </div>
            </div>

            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="500">
              <i className="bi bi-brightness-high flex-shrink-0"></i>
              <div>
                <h4><Link to="" className="stretched-link">Dine Pad</Link></h4>
                <p>Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
              </div>
            </div>

            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="600">
              <i className="bi bi-brightness-high flex-shrink-0"></i>
              <div>
                <h4><Link to="" className="stretched-link">Tride clov</Link></h4>
                <p>Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit non aspernatur odit amet. Et eligendi</p>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
    );
}
export default SServices;
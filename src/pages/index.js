import hero_carousel_1 from'../img/hero-carousel/hero-carousel-1.jpg'
import hero_carousel_2 from'../img/hero-carousel/hero-carousel-2.jpg'
import hero_carousel_3 from'../img/hero-carousel/hero-carousel-3.jpg'
import hero_carousel_4 from'../img/hero-carousel/hero-carousel-4.jpg'
import hero_carousel_5 from'../img/hero-carousel/hero-carousel-5.jpg'
import '../styles/css/App.css'; 




function Index() {
    return(
      <div className='index-page'>

      
        <section id="hero" class="hero section dark-background">

      <div class="info d-flex align-items-center">
        <div class="container">
          <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-6 text-center">
              <h2>Welcome to UpConstruction</h2>
              <p>Building strong foundations for your future.Delivering quality with every project.Committed to excellence and trust.Let’s build your vision together.</p>
              <a href="#get-started" class="btn-get-started">Get Started</a>
            </div>
          </div>
        </div>
      </div>

      <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">

        <div class="carousel-item">
          <img src={hero_carousel_1} alt=""/>
        </div>

        <div class="carousel-item active">
          <img src={hero_carousel_2} alt=""/>
        </div>

        <div class="carousel-item">
          <img src={hero_carousel_3} alt=""/>
        </div>

        <div class="carousel-item">
          <img src={hero_carousel_4} alt=""/>
        </div>

        <div class="carousel-item">
          <img src={hero_carousel_5} alt=""/>
        </div>

        <a class="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </a>

        <a class="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </a>

      </div>

    </section>



    </div>
    );
}
export default Index;
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import testimonials_1 from '../img/testimonials/testimonials-1.jpg';
import testimonials_2 from '../img/testimonials/testimonials-2.jpg';
import testimonials_3 from '../img/testimonials/testimonials-3.jpg';
import testimonials_4 from '../img/testimonials/testimonials-4.jpg';

function Testimonial() {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView="auto"
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <TestimonialItem
              img={testimonials_1}
              name="Saul Goodman"
              title="Ceo & Founder"
              text="Proin iaculis purus consequat sem cure digni ssim..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem
              img={testimonials_2}
              name="Sara Wilsson"
              title="Designer"
              text="Export tempor illum tamen malis malis eram quae..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem
              img={testimonials_3}
              name="Jena Karlis"
              title="Store Owner"
              text="Enim nisi quem export duis labore cillum..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem
              img={testimonials_4}
              name="Matt Brandon"
              title="Freelancer"
              text="Fugiat enim eram quae cillum dolore dolor..."
            />
          </SwiperSlide>
          {/* Add more SwiperSlides as needed */}
        </Swiper>
      </div>
    </section>
  );
}

function TestimonialItem({ img, name, title, text }) {
  return (
    <div className="testimonial-wrap">
      <div className="testimonial-item">
        <img src={img} className="testimonial-img" alt={name} />
        <h3>{name}</h3>
        <h4>{title}</h4>
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <i key={i} className="bi bi-star-fill"></i>
          ))}
        </div>
        <p>
          <i className="bi bi-quote quote-icon-left"></i>
          <span>{text}</span>
          <i className="bi bi-quote quote-icon-right"></i>
        </p>
      </div>
    </div>
  );
}

export default Testimonial;

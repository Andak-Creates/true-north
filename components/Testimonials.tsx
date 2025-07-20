import React from "react";
import TestimonialCard from "./ui/TestimonialCard";

const Testimonials = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="200"
      className="h-auto w-full relative overflow-hidden
    flex flex-col items-center py-[60px]"
    >
      {/* Background Image */}

      <img
        src="/background.png"
        alt=""
        className="absolute h-[100%] w-[18000%] z-[-2] top-0"
      />

      {/* content */}
      <div className="w-[80%] lg:w-[40%] text-center px-[40px]">
        <p>Testimonials</p>
        <h1 className="text-[30px] lg:text-[40px] ">
          Feedbacks on our Services and Solutions
        </h1>
      </div>

      <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[50px]">
        <TestimonialCard
          desc="TrueNorth’s user-friendly dashboards have 
                simplified our digital strategy 
                management. "
          username="Fig Nelson"
          socialIcon="/assets/socialLogos/twitter.png"
          avatar="/assets/avatars/fig.png"
          userhandle="@fignel_sooon"
        />

        <TestimonialCard
          desc="TrueNorth has truly transformed our online 
                presence. With its powerful analytics and 
                seamless integration, we've gained 
                invaluable insights."
          username="Sadie Berlin"
          socialIcon="/assets/socialLogos/instagram.png"
          avatar="/assets/avatars/sadie.png"
          userhandle="@sadiieberlin00"
        />

        <TestimonialCard
          desc="We've gained invaluable insights and 
            improved our SEO ranking, resulting in 
            significant business growth"
          username="Amaya Locosta"
          socialIcon="/assets/socialLogos/facebook.png"
          avatar="/assets/avatars/amaya.png"
          userhandle="@amayalocosta"
        />

        <TestimonialCard
          desc="We've gained invaluable insights and 
                improved our SEO ranking, resulting in 
                significant business growth"
          username="Sadie Berlin"
          socialIcon="/assets/socialLogos/instagram.png"
          avatar="/assets/avatars/sadie.png"
          userhandle="@sadiieberlin00"
        />

        <TestimonialCard
          desc="TrueNorth’s user-friendly dashboards have 
                simplified our digital strategy 
                management. "
          username="Fig Nelson"
          socialIcon="/assets/socialLogos/twitter.png"
          avatar="/assets/avatars/fig.png"
          userhandle="@fignel_sooon"
        />

        <TestimonialCard
          desc="TrueNorth’s user-friendly dashboards have 
            simplified our digital strategy 
            management. "
          username="Sadie Berlin"
          socialIcon="/assets/socialLogos/instagram.png"
          avatar="/assets/avatars/sadie.png"
          userhandle="@sadiieberlin"
        />
      </div>

      <div>
        <button className="gradiantButton mt-[30px]">
          Follow Us on Social Media
        </button>
      </div>
    </section>
  );
};

export default Testimonials;

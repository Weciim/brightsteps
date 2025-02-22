import React from "react";

const Testimonial = () => {
  const ProfilePhoto =
    "https://res.cloudinary.com/dkbzscmmq/image/upload/v1726342601/erlmaigli2ro6bhsylxr.webp";

  return (
    <div className="text-white px-6">
      <div className="max-w-5xl mx-auto text-center">
        <blockquote className="text-lg italic mb-6">
          "BrightSteps has been a game-changer for our children with special needs. 
          The platform's personalized approach and accessible tools have empowered them 
          to learn in a way that suits their unique needs. Seeing their progress and confidence grow 
          has been truly inspiring. We highly recommend BrightSteps for inclusive education."
        </blockquote>
        <div className="flex justify-center mb-4">
          <img
            src={ProfilePhoto}
            alt="Sarah Thompson"
            className="rounded-full w-24 h-24 object-cover"
            loading="lazy"
          />
        </div>
        <cite className="block text-xl font-semibold mb-2">Sarah Thompson</cite>
        <p className="text-lg">Special Education Coordinator</p>
      </div>
    </div>
  );
};

export default Testimonial;

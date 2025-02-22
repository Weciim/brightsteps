import React from "react";

const Testimonial = () => {
  const ProfilePhoto =
    "https://media.licdn.com/dms/image/v2/D4E03AQEY5tWa50NMZw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709341037661?e=2147483647&v=beta&t=bdLOzPuEDJdtM2m6AO9aGx1dHA5VZpXln-7fYKe6cc0";

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
            alt="Sanaa Nidhal"
            className="rounded-full w-24 h-24 object-cover"
            loading="lazy"
          />
        </div>
        <cite className="block text-xl font-semibold mb-2">Sanaa Nidhal</cite>
        <p className="text-lg">Special Education Coordinator</p>
      </div>
    </div>
  );
};

export default Testimonial;

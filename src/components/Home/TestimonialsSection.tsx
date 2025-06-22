import * as React from "react";
import  { useEffect, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    rating: 5,
    comment:
      "Found an amazing electrician through Go Local. Professional service and fair pricing! The platform made it so easy to connect with local professionals.",
    service: "Electrical Work",
    image:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150",
    location: "Chennai",
  },
  {
    name: "Rajesh Kumar",
    rating: 5,
    comment:
      "Quick response time and excellent quality work. The search feature helped me find exactly what I needed in my neighborhood.",
    service: "Plumbing",
    image:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
    location: "Mumbai",
  },
  {
    name: "Anita Patel",
    rating: 5,
    comment:
      "Great experience from start to finish. The helper was punctual and did exceptional work. Go Local is my go-to platform now!",
    service: "Home Cleaning",
    image:
      "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=150",
    location: "Bangalore",
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What Our Community Says
          </h2>
          <p className="text-xl text-gray-600">
            Real reviews from satisfied customers in your neighborhood
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-premium p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
              ))}
            </div>

            <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
              "{testimonials[currentTestimonial].comment}"
            </blockquote>

            <div className="flex items-center justify-center">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <h4 className="font-bold text-gray-900 text-lg">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-600">
                  {testimonials[currentTestimonial].service} • {testimonials[currentTestimonial].location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? "bg-blue-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

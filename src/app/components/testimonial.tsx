export default function TestimonialSection() {
  interface ITestimonials {
    name: string;
    text: string;
    image: string;
  }

  const testimonials: ITestimonials = {
    name: "Siaalya",
    text: "It is a long established fact that a reader will be distracted by the readable cIt is a long established fact that a reader will be distracted by the readable c.",
    image: "/client.jpg",
  };

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 md:p-8 bg-gray-100">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
        TESTIMONIAL
      </h2>
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 w-full md:w-2/3 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
        <img
          src={testimonials.image}
          alt={testimonials.name}
          className="w-28 h-28 sm:w-40 sm:h-40 rounded-full border-4 sm:border-8 border-teal-400"
        />
        <div className="text-center md:text-left">
          <h3 className="text-teal-500 text-xl sm:text-2xl font-semibold">
            {testimonials.name}
          </h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            {testimonials.text}
          </p>
        </div>
      </div>
      <div className="flex space-x-4 mt-6">
        <button className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600">
          ←
        </button>
        <button className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600">
          →
        </button>
      </div>
    </div>
  );
}

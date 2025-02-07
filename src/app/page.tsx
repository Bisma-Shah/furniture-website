import About from "./about/page";
import Blog from "./blog/page";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Testimonial from "./components/testimonial";
import ContactForm from "./contact/page";
import Furniture from "./furnitures/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <Furniture />
      <About />
      <Blog />
      <Testimonial />
      <ContactForm />
    </main>
  );
}

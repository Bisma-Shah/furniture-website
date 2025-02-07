import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Info */}
        <div className="text-center md:text-left">
          <div className="flex flex-col items-center md:items-start mb-4">
            <span className="mb-2">📞 Call: +01 12345678990</span>
            <span className="mb-2">✉ Email: bismashah156@gmail.com</span>
            <span>📍 Location Karachi</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-xl mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2 hover:text-orange-300">
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li className="mb-2 hover:text-orange-300">
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li className="mb-2 hover:text-orange-300">
              <Link href="/furnitures" className="hover:underline">
                Furniture
              </Link>
            </li>
            <li className="mb-2 hover:text-orange-300">
              <Link href="blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li className="mb-2 hover:text-orange-300">
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Instagram Feeds */}
        <div className="text-center md:text-left mr-5">
          <h3 className="font-bold text-xl mb-4">Instagram Feeds</h3>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white p-2">
              <Image src="/product1.jpg" alt="" width={200} height={200} />
            </div>
            <div className="bg-white object-contain p-2">
              <Image src="/product2.jpg" alt="" width={200} height={200} />
            </div>
            <div className="bg-white object-contain p-2">
              <Image src="/product3.jpg" alt="" width={200} height={200} />
            </div>
            <div className="bg-white object-cover p-2">
              <Image src="/product4.jpg" alt="" width={200} height={200} />
            </div>
            <div className="bg-white object-contain p-2">
              <Image src="/product5.jpg" alt="" width={200} height={200} />
            </div>
            <div className="bg-white object-contain p-2">
              <Image src="/product6.jpg" alt="" width={200} height={200} />
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-xl mb-4">Sign Up to Our Newsletter</h3>
          <form>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 mb-4 rounded text-gray-800 bg-white"
            />
            <button className="w-full font-semibold px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600">
              Subscribe
            </button>
          </form>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <Link
              href="#"
              className="bg-gray-800 p-3 border border-[#65b9b5] hover:border-orange-300"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              className="bg-gray-800 p-3 border border-[#65b9b5] hover:border-orange-300"
            >
              <FaTwitter />
            </Link>
            <Link
              href="#"
              className="bg-gray-800 p-3 border border-[#65b9b5] hover:border-orange-300"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="#"
              className="bg-gray-800 p-3 border border-[#65b9b5] hover:border-orange-300"
            >
              <GrInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

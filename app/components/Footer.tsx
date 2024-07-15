import Link from "next/link";
import { links } from "../../utils/footerLinks";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

function Footer() {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-gray-100 mt-20">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 ">
          <li>
            {links.map((item, index) => (
              <Link
                className="text-gray-700 transition hover:text-blue-300 px-2 md:px-4 "
                href={item.path}
                key={index}
              >
                {" "}
                {item.name}{" "}
              </Link>
            ))}
          </li>
        </ul>

        <div className="mt-8 flex justify-center space-x-6">
          <Link
            href="https://www.instagram.com/research_made_accessible/"
            className="text-blue-950 hover:text-blue-300"
            target="__blank"
          >
            <FaInstagram className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.tiktok.com/@research_made_acc"
            className="text-blue-950 hover:text-blue-300"
            target="__blank"
          >
            <FaTiktok className="h-6 w-6" />
          </Link>
          <Link
            href="mailto:researchmadeaccessible@gmail.com"
            className="text-blue-950 hover:text-blue-300"
            target="__blank"
          >
            <MdMailOutline className="h-6 w-6" />
          </Link>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          &copy; {year} Research Made Accessible. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer className="footer footer-center p-10 bg-base text-base border-t">
        <aside>
          <h1 className="font-bold text-2xl">Bolly Critics</h1>
          <p>Your guide to honest bollywood reviews</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="#">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#">
              <FaLinkedinIn className="w-6 h-6" />
            </a>
          </div>
        </nav>
        <p>Copyright © 2024 - All right reserved</p>
      </footer>
    </>
  );
};

export default Footer;

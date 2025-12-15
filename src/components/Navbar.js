import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope  } from "react-icons/fa";

const Navbar = () =>{
    return <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="linkedin.com/in/clauselle-ratovoarisoa" className="border-b"><FaLinkedin /></a>
            <a href="github.com/Clauselle" className="border-b"><FaGithub /></a>
            <a href="clauselleratovoarisoa@gmail.com" className="border-b"><FaEnvelope /></a>
        </div>
    </nav>;
};

export default Navbar;
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope  } from "react-icons/fa";

const Navbar = () =>{
    return <nav className="flex items-center justify-between py-4">
        <div className="flex flex-shrink-0 items-center">
            
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <p><a href="linkedin.com/in/clauselle-ratovoarisoa" className="border-b"><FaLinkedin /></a></p>
            <p><a href="github.com/Clauselle" className="border-b"><FaGithub /></a></p>
            <p><a href="clauselleratovoarisoa@gmail.com" className="border-b"><FaEnvelope /></a></p>
        </div>
    </nav>;
};

export default Navbar;
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope  } from "react-icons/fa";

const Navbar = () =>{
    return <nav className="flex items-center justify-between py-4">
        <div className="flex flex-shrink-0 items-center">
            
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <p><a href="https://www.linkedin.com/in/clauselle-ratovoarisoa-834013283/" className="border-b" aria-label="Linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></p>
            <p><a href="https://github.com/Clauselle" className="border-b" target="_blank" aria-label="GitHub" rel="noopener noreferrer"><FaGithub /></a></p>
            <p><a href="mailto:clauselleratovoarisoa@gmail.com" className="border-b" aria-label="Mail"><FaEnvelope /></a></p>
        </div>
    </nav>;
};

export default Navbar;
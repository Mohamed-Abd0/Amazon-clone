import { useEffect } from "react";
import { Link } from "react-router-dom";
import BottomNav from "./nav/bottomNav";
import TopNav from "./nav/TopNav";

const Nav = () => {
   console.log("re-render");
    return ( 
        <nav className="bg-[#232f3e] lg:p-2">
            <div className="container">
                <TopNav />
                    <BottomNav />
                    </div>
                    <div className="lg:hidden bg-[#37475A] p-3">
                        <Link to={"#"} className="block text-white">
                            <span className="fa-solid fa-location-dot ltr:mr-2 rtl:ml-2"></span>
                            <span className="">Deliver to Egypt</span>
                        </Link>
                    </div>
        </nav>
);
}

export default Nav;
import Navbar from "./Navbar";
import logo from '../img/logo.png'

function Layout() {
    return(
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
                <a href="index.html" class="logo d-flex align-items-center">
                    {/* <!-- Uncomment the line below if you also wish to use an image logo -->*/}
                    <img src={logo} alt=""/>
                    <h1 class="sitename">UpConstruction</h1> <span>.</span>
                </a>
            <Navbar/>
            </div>
        </header>
    );
}

export default Layout;
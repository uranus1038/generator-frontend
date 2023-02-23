import { Navigate, useNavigate } from "react-router-dom";
import '../yumi_assets/navbar/navbar.css'
import '../yumi_assets/umi-god-main.css'
import '../yumi_assets/umi-special.css'
export default function NavbarMain() {
    const navigation = useNavigate();
    return (
        <body>
            <nav>
                <div className=" umi-container-full">
                    <div className="umi-navbar umi-special-blue-c0">
                        <ul className="umi-nav ">
                            <div>
                                <a onClick={() => {
                                    navigation("/");
                                }} className="umi-nav-brand f-shiro btn">Brand</a>
                            </div>
                            <li><a href="#" className="umi-nav-item f-shiro umi-active">Game Info</a></li>
                            <li><a href="#" className="umi-nav-item f-shiro umi-active">Report and Fix err</a></li>
                        </ul>
                        <ul className="umi-nav ">
                            <li>
                                <li>
                                    <button class="fw-bolder btn btn-none fw-bloder umi-nav-item umi-dropdown f-shiro umi-active"><i className="fas fa-user-alt"></i>  Accout <i className="fas fa-sort-down"></i></button>
                                    <div style={{margin:"0px -28px"}} class="fw-bolder  umi-dropdown-content umi-special-blue-c1">
                                    <button  class="btn btn-none umi-dropdown-link f-shiro umi-active"><i className="far fa-user-circle"></i> Log In</button>
                                    <button  class="btn btn-none umi-dropdown-link f-shiro umi-active"><i className="far fa-edit"></i> Sign UP</button>
                                    <button  class="btn btn-none umi-dropdown-link f-shiro umi-active"><i className="far fa-question-circle"></i> Support</button>
                                    </div>
                                </li>
                            </li>
                            <li>
                                <button class="fw-bolder btn btn-none umi-nav-item umi-dropdown f-shiro fs-medium umi-active">
                                    <i className="fas fa-globe"></i> English <i className="fas fa-sort-down"></i></button>
                                <div style={{margin:"0px -28px"}} class="fw-bolder  umi-dropdown-content umi-special-blue-c1">
                                    <button  class="btn btn-none umi-dropdown-link f-shiro umi-active">English </button>
                                    <button href="#" class="btn btn-none umi-dropdown-link f-shiro umi-active">ไทย</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </body>
    )
}

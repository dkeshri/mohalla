import React from 'react'
import '../assets/css/navbar1.css'
function Navbar1() {
    return (
        <nav>
            <div className="logo-container">
                <h3 className="logo">Brand<span>Name</span></h3>
            </div>
            <div className="nav-btn">
                <div className="nav-links">
                    <ul>
                        <li className="nav-link"><a href="#">Home <i className="fa fa-caret-down" aria-hidden="true"></i></a>
                        <div className="dropdown">
                                    <ul>
                                        <li className="dropdown-link"><a href="#">Link1</a></li>
                                        <li className="dropdown-link"><a href="#">Link2</a></li>
                                        <li className="dropdown-link"><a href="#">Link3<i className="fa fa-caret-down" aria-hidden="true"></i></a>
                                            <div className="dropdown second">
                                                <ul>
                                                    <li className="dropdown-link"><a href="#">Link1</a></li>
                                                    <li className="dropdown-link"><a href="#">Link2</a></li>
                                                    <li className="dropdown-link"><a href="#">Link3</a></li>
                                                    <li className="dropdown-link"><a href="#">Link4</a></li>
                                                    <li className="dropdown-link"><a href="#">More<i className="fa fa-caret-down" aria-hidden="true"></i></a>
                                                        <div className="dropdown second">
                                                            <ul>
                                                                <li className="dropdown-link"><a href="#">Link1</a></li>
                                                                <li className="dropdown-link"><a href="#">Link2</a></li>
                                                                <li className="dropdown-link"><a href="#">Link3</a></li>
                                                                <li className="dropdown-link"><a href="#">Link4</a></li>
                                                                <div className="arrow"></div>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <div className="arrow"></div>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="dropdown-link"><a href="#">Link4</a></li>
                                        <li className="dropdown-link"><a href="#">Link5</a></li>
                                        <div className="arrow"></div>
                                    </ul>
                                </div>
                        </li>
                        <li className="nav-link"><a href="#">Portfolio <i className="fa fa-caret-down" aria-hidden="true"></i></a></li>
                        <li className="nav-link"><a href="#">Services <i className="fa fa-caret-down" aria-hidden="true"></i></a></li>
                        <li className="nav-link"><a href="#">Features <i className="fa fa-caret-down" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
                <div className="extra-btn">
                    <a href="#" className="btn transparent">Login</a>
                    <a href="#" className="btn solid">Logout</a>
                </div>
            </div>
        </nav >
    )
}

export default Navbar1

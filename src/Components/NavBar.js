import React from 'react'

function NavBar() {
    return (
        <nav>
            <div className="container">
                <div className="logo-container">
                    <h3 className="logo">Brand<span>Name</span></h3>
                </div>
                <div className="nav-btn">
                    <div className="nav-links">
                        <ul>
                            <li className="nav-link">
                                <a href="#">Home<i class="fa fa-caret-down" aria-hidden="true"></i></a>
                                <div className="dropdown">
                                    <ul>
                                        <li className="dropdown-link"><a href="#">Link1</a></li>
                                        <li className="dropdown-link"><a href="#">Link2</a></li>
                                        <li className="dropdown-link"><a href="#">Link3<i class="fa fa-caret-down" aria-hidden="true"></i></a></li>
                                        <li className="dropdown-link"><a href="#">Link4</a></li>
                                        <li className="dropdown-link"><a href="#">Link5</a></li>
                                        <div className="arrow"></div>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-link"><a href="#">Menu<i class="fa fa-caret-down" aria-hidden="true"></i></a></li>
                            <li className="nav-link"><a href="#">Service<i class="fa fa-caret-down" aria-hidden="true"></i></a></li>
                            <li className="nav-link"><a href="#">About<i class="fa fa-caret-down" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                    <div className="logout">
                        <a href="#" className="btn transparent">Login</a>
                        <a href="#" className="btn solid">Logout</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar


import React from 'react'
import {Link} from "react-router-dom";


function HeaderComponent(props) {
    return (
        <div>
            <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div> <a href="http://www.techvology.net" className="navbar-brand">Worktrial Management App</a> </div>
                        <div className="topnav">
                            <Link to ="/">Home</Link>
                            <Link to ="/customers">Customers</Link>
                            <Link to ="/products">Products</Link>
                        </div>
                    </nav>

                </header>
        </div>
    )
}



export default HeaderComponent;

import { useState } from "react";
import "./Header.css";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <header className="header">
            <div className="user" onClick={() => setShowMenu(!showMenu)}>
                <img src="https://avatars.githubusercontent.com/u/10072266?v=4" alt="User" />
                <span>John Doe</span>
                <i className="fa fa-chevron-down"></i>
                <ul className={showMenu ? "open" : ""}>
                    <li>
                        <img src="https://avatars.githubusercontent.com/u/10072266?v=4" alt="User" />
                    </li>
                    <li>
                        <span>John Doe</span>
                    </li>
                    <li>
                        <a href="#">Logout</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

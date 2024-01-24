import "./Sidebar.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useOpen } from "../hooks/sidebar";

Sidebar.propTypes = {
    toggleSidebar: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

export default function Sidebar({ toggleSidebar, title: prop_title }) {
    const { title, handleTogle } = useOpen({ toggleSidebar, title: prop_title });
    return (
        <>
            <aside className="sidebar">
                <div className="info-head">
                    <h3>{title}</h3>
                    <button className="toggle" onClick={handleTogle}>
                        <i className="fa fa-bars"></i>
                    </button>
                </div>
                <div className="head">
                    <img src="https://avatars.githubusercontent.com/u/61552810?v=4" alt="Avatar" />
                    <div className="info">
                        <h3>John Doe</h3>
                        <p>
                            <i className="fa fa-circle"></i>
                            Online
                        </p>
                    </div>
                </div>
                <ul>
                    <li>
                        <NavLink to="/">
                            <i className="fa fa-home"></i>
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/users">
                            <i className="fa fa-users"></i>
                            <span>Users</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/survey">
                            <i className="fa fa-question"></i>
                            <span>Survey</span>
                        </NavLink>
                    </li>
                </ul>
            </aside>
        </>
    );
}

import { Link, useLocation } from "react-router-dom"
import Icon from '@ailibs/feather-react-ts'

export function Sidebar() {
    const path = useLocation().pathname
    return (
        <nav id="sidebar" className="sidebar js-sidebar">
            <div className="sidebar-content js-simplebar">
                <a className="sidebar-brand" href="index.html">
                    <span className="align-middle">AdminKit</span>
                </a>

                <ul className="sidebar-nav">
                    <li className="sidebar-header">
                        Pages
                    </li>

                    <li className={'sidebar-item' + (path === '/dashboard' ? ' active' : '')} >
                        <Link className="sidebar-link" to="/dashboard">
                            <Icon name="sliders" className="align-middle" size="18px" />
                            <span className="align-middle">Dashboard</span>
                        </Link>
                    </li>

                    <li className={'sidebar-item' + (path === '/profile' ? ' active' : '')} >
                        <Link className="sidebar-link" to="/profile">
                            <Icon name="user" className="align-middle" size="18px" />
                            <span className="align-middle">Profile</span>
                        </Link>
                    </li>

                    <li className={'d-none sidebar-item' + (path === '/' ? ' active' : '')} >
                        <Link className="sidebar-link" to="/">
                            <Icon name="log-in" className="align-middle" size="18px" />
                            <span className="align-middle">Sign In</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav >
    )
}

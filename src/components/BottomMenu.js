import { Link, useLocation } from 'react-router-dom';

const BottomMenu = () => {
    const location = useLocation();

    // Helper function to determine if the path is active
    const isActive = (path) => {
        // Check if the current path includes the given path
        return location.pathname.includes(path) || (path === '/drug' && location.pathname === '/') ? 'active' : '';
    };

    return (
        <div className="navbar">
            <Link className={`menu-item ${isActive('/drug')}`} to="/drug">ยา</Link>
            <Link className={`menu-item ${isActive('/disease')}`} to="/disease">โรค</Link>
        </div>
    );
}

export default BottomMenu;

import { Link, useLocation } from 'react-router-dom';

const BottomMenu = () => {
    const location = useLocation();

    // Helper function to determine if the path is active
    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <div className="navbar">
            <Link className={`menu-item ${isActive('/drug')}`} to="/drug">ยา</Link>
            <Link className={`menu-item ${isActive('/disease')}`} to="/disease">โรค</Link>
        </div>
    );
}

export default BottomMenu;

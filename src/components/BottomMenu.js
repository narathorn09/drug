import { Link } from 'react-router-dom';

const BottomMenu = () => {

    return (
        <div className="navbar">
            <Link className="menu-item" to="/drug">ยา</Link>
            <Link className="menu-item" to="/disease">โรค</Link>
        </div>
    )

}
export default BottomMenu;
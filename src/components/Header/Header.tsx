import './Header.css';
import image from '../../assets/img_of_plus.png';

export const Header = () => {
    return (
        <header className="div-header">
            <h1 className="text-produit">Task Management</h1>

            <button className="button-produit">
                <img src={image} alt="" />
                <span>Nouvelle tâche</span>
            </button>
        </header>
    );
};

export default Header;
import './Header.css'
import logo from '../../assets/logo/nav-logo.png'

const Header = () => {
    return(
        <header>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="navig">
                <a href="#">Главная</a>
                <a href="#">Меню</a>
                <a href="#">Сервис</a>
                <a href="#">O нас</a>
            </div>
            <div className="basket">
                <i className="fa-sharp fa-solid fa-basket-shopping"></i>
                <div className="basket_notif">12</div>
            </div>
        </header>
    )
}

export default Header;
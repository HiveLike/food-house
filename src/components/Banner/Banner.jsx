import './Banner.css'

import banner_right from '../../assets/banner/banner-image.png'

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner_left">
                <div className="left_text orange_text">Экспресс-доставка от Яндекс.Еды</div>
                <div className="left_text big_text">Быстро<br></br> и вкусно<span className='orange_text'>.</span></div>
                <div className="left_text">Сеть быстрого питания #1 в Казани</div>   

                <div className="button_line">
                    <button>Сделать заказ</button>    
                    <div className="promotion">бесплатная доставка<br></br>от 500 рублей</div>
                </div>             
            </div>
            <img src={banner_right} alt="banner_right" />
        </div>
    )
}

export default Banner;
import calvin from '../../../imgs/homepage/Calvin.png';
import gucci from '../../../imgs/homepage/gucci-logo-1 1.png';
import prada from '../../../imgs/homepage/prada-logo-1 1.png';
import zara from '../../../imgs/homepage/zara-logo-1 1.png';
import versace from '../../../imgs/homepage/VERSACE.png';
import './brands.css'


export const Brands = () => {
    return (
        <div>
            <div className='blackBanner'>
                <img src={versace} alt="versace" />
                <img src={zara} alt="zara" />
                <img src={gucci} alt="gucci" />
                <img src={prada} alt="prada" />
                <img src={calvin} alt="CALVIN KLEIN" />
            </div>
        </div>
    );
}



import './card.css'
import prod from '../../imgs/homepage/Frame32.jpg'


export const Card = () => {
    return (
        <div className='cardCont'>
            <div className='imgCont'>
                <img src={prod} alt="" />
            </div>
            <h3>T-SHIRT WITH TAPE DETAILS</h3>
            <h3 className='h2'>$120</h3>
        </div>
    );
}


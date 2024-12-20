import './newArrivals.css'
import { Card } from '../../../entities';

export const NewArrivals = () => {
    return (
        <div className='arrivalsCont'>
            <div className="container">
            <h2>NEW ARRIVALS</h2>
            <div className='flexItem'>
                < Card/>
            </div>
            </div>
        </div>
    );
}


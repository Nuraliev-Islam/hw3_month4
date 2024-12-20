import './newArrivals.css'
import { Card } from '../../../entities';


export const NewArrivals = () => {
    return (
        <div className='arrivalsCont'>
            
            <div className="container">
                <h2 id='newarrivals'>NEW ARRIVALS</h2>
            <div className='flexItem'>
                < Card/>
                < Card/>
                < Card/>
                < Card/>
            </div>

                <button id='viewer'>View All</button>

            </div>

        </div>
    );
}


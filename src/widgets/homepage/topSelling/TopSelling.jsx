import React from 'react';
import './topselling.css'
import { Card } from '../../../entities';

export const TopSelling = () => {
    return (
        <div>
            <div className='topCont'>
                        
                        <div className="topcont">
                            <h2 id='TopSelling'>TOP SELLING</h2>
                            <div className='flexitem'>
                                < Card />
                                < Card />
                                < Card />
                                < Card />
                            </div>
                        <div id='viwerCont'>
                            <button id='viewer1'>View All</button>
                        </div>
            
                        </div>
            
                    </div>
        </div>
    );
}


import './TrendingContainer.scss'
import { useEffect, useState } from 'react';

// Components
import FashionData from './FashionData.json'

const Card = (props) => {
    return (
        <li className="trending__card">
            <p>{props.description}</p>
            <img 
                src={props.image}
                alt={props.alt}
                className="trending__trendImg"    
            />
        </li>
    )
}

function Trending () {
    const [moveClass, setMoveClass] = useState('');
    const [carouselItems, setCarouselItems] = useState(FashionData);

    useEffect(() => {
        document.documentElement.style.setProperty('--num', carouselItems.length);
    }, [carouselItems])
    const handleAnimationEnd = () => {
        if(moveClass === 'prev') {
            shiftNext([...carouselItems])
        } else if (moveClass === 'next') {
            shiftPrev([...carouselItems])
        }
        setMoveClass('')
    };
    const shiftPrev = (copy) => {
        let lastCard = copy.pop();
        copy.splice(0, 0, lastCard);
        setCarouselItems(copy)
    }
    const shiftNext = (copy) => {
        let firstCard = copy.shift();
        copy.splice(copy.length, 0, firstCard);
        setCarouselItems(copy);
    }

    return(
        <div className="trending  module-wrapper">
            <h3 className="trending__subTitle">What's Trending</h3>
            <div className='trending__trendContain'>
                <div className='trending__buttonContain'>
                    <button onClick={() => setMoveClass('next')} className='trending__prev prev trending__btn'>
                        Prev
                    </button>
                    <button onClick={() => setMoveClass('prev')} className='trending__next next trending__btn'>
                        Next
                    </button>
                </div>
                <ul onAnimationEnd={handleAnimationEnd} className={`${moveClass} trending__carousel`}>
                    {carouselItems.map((i) => 
                        <Card key={i.id} image={i.image} description={i.description}/>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Trending;

import './TrendingContainer.scss'

// Components
import FashionData from './FashionData.json'

function Trending () {

    return(
        <div className="trending">
            <h3 className="trending__subTitle">What's Trending</h3>
            {
                FashionData && FashionData.map((data, index) => {
                    return(
                        <div 
                            className="trending__trendContainer" 
                            key={data.id}
                        >
                            <div className="trending__description">
                                {data.description}
                            </div>
                            <img 
                                src={data.image}
                                alt={data.alt}
                                className="trending__trendImg"    
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Trending;

import './MainPage.scss'

// Images
import Img1 from '../../Assets/Images/img1.jpg'

// Components
import Carousel from './Carousel/Carousel';


function MainPage() {
    return (
        <section className='mainPage'>
            <div className='mainPage__containerOne'>
                <h3 className='mainPage__subTitle'>Who We Are</h3>
                <div className='mainPage__mainPara'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse sem odio, malesuada eget lectus eu, interdum maximus risus. 
                    Sed facilisis malesuada metus vel venenatis. 
                    Aenean vel enim vel sapien cursus fermentum. 
                    Nullam at metus eget elit commodo interdum.
                </div>
                <img src={Img1} alt='' className='mainPage__mainImage'/>
            </div>
            <Carousel/>
        </section>
    )
}

export default MainPage;
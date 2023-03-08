import './MainPage.scss'

// Images
import Img1 from '../../Assets/Images/img1.jpg'

// Components
import TrendingContainer from './TrendingContainer/TrendingContainer';


function MainPage() {
    return (
        <section>
            <div className='mainPage'>
                    <h3 className='mainPage__subTitle'>Who We Are</h3>
                <div className='mainPage__mainContainer'>
                    <div className='mainPage__mainPara'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse sem odio, malesuada eget lectus eu, interdum maximus risus. 
                        Sed facilisis malesuada metus vel venenatis. 
                        Aenean vel enim vel sapien cursus fermentum. 
                        Nullam at metus eget elit commodo interdum.
                        <br/>
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse sem odio, malesuada eget lectus eu, interdum maximus risus. 
                        Sed facilisis malesuada metus vel venenatis. 
                        Aenean vel enim vel sapien cursus fermentum. 
                        Nullam at metus eget elit commodo interdum.
                        <br/>
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse sem odio, malesuada eget lectus eu, interdum maximus risus. 
                        Sed facilisis malesuada metus vel venenatis. 

                    </div>
                    <img src={Img1} alt='' className='mainPage__mainImage'/>
                </div>
            </div>
            <TrendingContainer/>
        </section>
    )
}

export default MainPage;
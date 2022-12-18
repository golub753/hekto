import Container from '../Container';
import MainSlider from './MainSlider/MainSlider';

const Main = () => {
    return ( 
        <div className="main">
            <img src='./images/lamp.png' alt='Lamp' className='main-lamp'/>
            <div className='main-dot'></div>
            <Container>
                <MainSlider/>
            </Container>
        </div>
     );
}
 
export default Main;
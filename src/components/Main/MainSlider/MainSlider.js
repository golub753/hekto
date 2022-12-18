import { Carousel } from "react-responsive-carousel";
import MainSlide from "../MainSlide/MainSlide";

const MainSlider = () => {
    return ( 
        <Carousel showArrows={false}>
            <MainSlide
                subtitle='Best Furniture For Your Castle....'
                title='New Furniture Collection Trends in 2020'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'
                button='Shop Now'
                img='./images/armchair.png'
                alt='armchair'
                sale='50% off'
            />
        </Carousel>
     );
}
 
export default MainSlider;
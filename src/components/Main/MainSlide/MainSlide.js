const MainSlide = ({subtitle, title, text, button, img, alt, sale}) => {
    return ( 
        <div className="main-slide">
            <div className="main-slide-wrapper">
                <div className="main-slide-info">
                    <span className="main-slide__subtitle">{subtitle}</span>
                    <span className="main-slide__title">{title}</span>
                    <span className="main-slide__text">{text}</span>
                    <button className="main-slide__btn">{button}</button>
                </div>
                <div className="main-slide-img">
                    <img src={img} alt={alt}/>
                    {sale ? <div className="main-slide__sale">{sale}</div> : false}
                </div>
            </div>
        </div>
     );
}
 
export default MainSlide;
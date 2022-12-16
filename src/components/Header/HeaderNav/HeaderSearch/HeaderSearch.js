const HeaderSearch = () => {
    return ( 
        <form className="header-form">
            <input className="header-search"/>
            <button className="header-btn">
                <img className="header-btn__loop" src="./images/icons/loop.svg" alt="loop"/>
            </button>
        </form>
     );
}
 
export default HeaderSearch;
import Container from "../../Container";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderSearch from "./HeaderSearch/HeaderSearch";

const HeaderNav = (props) => {
    return ( 
        <div className="header-navigation">
            <Container>
                <div className="header-navigation-wrapper">
                    <div className="header-nav">
                        <HeaderLogo/>
                        <HeaderMenu/>
                    </div>
                    <HeaderSearch/>
                </div>
            </Container>
        </div>
     );
}
 
export default HeaderNav;
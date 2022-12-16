import Container from "../../Container";
import HeaderSocial from "./HeaderSocial/HeaderSocial";
import HeaderLanguage from "./HeaderLanguage/HeaderLanguage";
import HeaderPrice from "./HeaderPrice/HeaderPrice";
import HeaderUser from "./HeaderUser/HeaderUser";
import HeaderWish from "./HeaderWish/HeaderWish";
import HeaderBasket from "./HeaderBasket/HeaderBasket";

const HeaderSettings = () => {
    return ( 
        <div className="header-settings">
            <Container>
                <div className="header-wrapper">
                    <div className="header-links">
                        <HeaderSocial
                            type="mail"
                            link="golubanton753@gmail.com"
                        />
                        <HeaderSocial
                            type="tel"
                            link="+375298429669"
                        />
                    </div>
                    <div className="header-info">
                        <HeaderLanguage/>
                        <HeaderPrice/>
                        <HeaderUser/>
                        <HeaderWish/>
                        <HeaderBasket/>
                    </div>
                </div>
            </Container>
        </div>
     );
}
 
export default HeaderSettings;
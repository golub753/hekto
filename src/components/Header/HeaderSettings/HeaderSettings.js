import Container from "../../Container";
import HeaderSocial from "../HeaderSocial/HeaderSocial";

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
                </div>
            </Container>
        </div>
     );
}
 
export default HeaderSettings;
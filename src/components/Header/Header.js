import HeaderSettings from "./HeaderSettings/HeaderSettings";
import HeaderNav from "./HeaderNav/HeaderNav";

const Header = (props) => {
    return ( 
        <header>
            <HeaderSettings/>
            <HeaderNav/>
        </header>
     );
}
 
export default Header;
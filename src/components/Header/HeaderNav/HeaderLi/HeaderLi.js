const HeaderLi = ({text, submenu}) => {
    return ( 
        <li className="header-li">
            <a href="#null" className="header-li__link">
            {text}
            {submenu ? <i class="fa fa-angle-down header-li__icon" aria-hidden="true"></i> : false}
            </a>
        </li>
     );
}
 
export default HeaderLi;
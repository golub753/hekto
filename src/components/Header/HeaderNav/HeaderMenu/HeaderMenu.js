import HeaderLi from "../HeaderLi/HeaderLi";

const items = [
    {
        text: 'Home',
        submenu: true,
    },
    {
        text: 'Pages',
        submenu: false
    },
    {
        text: 'Products',
        submenu: false
    },
    {
        text: 'Blog',
        submenu: false
    },
    {
        text: 'Shop',
        submenu: false
    },
    {
        text: 'Contact',
        submenu: false
    }
]

const HeaderMenu = (props) => {
    return ( 
        <nav className="header-menu">
            <ul className="header-ul">
                {items.map((item, index) => {
                    return (
                        <HeaderLi 
                            key={index}
                            text={item.text}
                            submenu={item.submenu}
                        />
                    )
                })}   
            </ul>
        </nav>
     );
}
 
export default HeaderMenu;
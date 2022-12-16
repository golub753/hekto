const HeaderSocial = ({type, link}) => {
    return ( 
        <div className="header-link">
            <img src={type === "mail" ? './images/icons/mail.svg' : './images/icons/phone.svg'} alt={type}/>
            <a href={type === "mail" ? `mailto:${link}` : `tel:${link}`} className="header-link__text">
                {link}
            </a>
        </div>
     );
}
 
export default HeaderSocial;
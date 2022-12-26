import s from './Navbar.module.css'
const SelectedLink = () => {
    return(
        select => select.isActive ? s.activeLink : s.item
    )
}

export default SelectedLink;

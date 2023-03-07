import './header.css';

const Header = ({title}:{title:string}) => {
    return(
        <div className='header-container'>
            <span>{title}</span>
        </div>
    )
}

export default Header;
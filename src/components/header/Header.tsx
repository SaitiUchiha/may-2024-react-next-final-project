
import './Header.css'
import SearchBar from "@/components/header/SearchBar";
import UserInfo from "@/components/header/user/UserInfo";
import NavLinkComponent from "@/components/header/nav-link/NavLinkComponent";


const Header = () => {


    return (
        <header className="Header">
            <div className='logoDiv'><NavLinkComponent path={'/'}><img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0e652b55-ce75-4280-9b75-634f8f8052c2/dil81wh-159065d3-c772-4069-8ccb-04e401b896e6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBlNjUyYjU1LWNlNzUtNDI4MC05Yjc1LTYzNGY4ZjgwNTJjMlwvZGlsODF3aC0xNTkwNjVkMy1jNzcyLTQwNjktOGNjYi0wNGU0MDFiODk2ZTYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MxVZZfM24pp9tBKB9KM6MH1Y3eVkCIVrTlySqO8p-bs"
                alt="logo" /></NavLinkComponent></div>
            <ul className={`links`}>

                <li>
                    <NavLinkComponent path={'/movies'}>Movies</NavLinkComponent>

                </li>
                <li>
                    <NavLinkComponent path={'/genres'}>Genres</NavLinkComponent>
                </li>
                <li>
                    <NavLinkComponent path={'/search'}>Search</NavLinkComponent>
                </li>
            </ul>
            <UserInfo/>
        </header>
    );
};

export default Header;
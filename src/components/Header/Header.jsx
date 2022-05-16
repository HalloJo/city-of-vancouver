import React from 'react';
import SearchBar from "../SearchBar/SearchBar"
import { HeaderContainer, Logo } from './Header.styles';

const Header = () => {
    return(
        <HeaderContainer>  
          <Logo />
          <SearchBar />
          {/* <nav>
            <ul>
              {menu.map((item) => (
                <a href={item.href}>
                  <li>{item.text}</li>
                </a>
              ))}
            </ul>
          </nav> */}
          

        </HeaderContainer>
    )
}

export default Header
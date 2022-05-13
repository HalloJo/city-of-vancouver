import React from 'react';
import menu from "../../data/navigation"
import { HeaderContainer, Logo } from './Header.styles';

const Header = () => {
    return(
        <HeaderContainer>  
          <Logo />
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
import React from 'react';
import { Wrapper, Input } from './SearchBar.styles';

const SearchBar = () => {
    return (
        <Wrapper>
            <Input placeholder='Search for something..'></Input>
        </Wrapper>
    )
}

export default SearchBar
import React, { useEffect } from 'react';
import {ButtonPrimary} from "../Button/Button.styles"

const Button = ({label, background}) => {
    return(
        <ButtonPrimary background={background}>{label}</ButtonPrimary>
    )
}

export default Button
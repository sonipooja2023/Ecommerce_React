import { css } from '@emotion/react';

export const mobile=(props)=>{
    return css`
    @media only screen and (max-width:380px){
      ${props}
    }
    `;
};

export const laptop=(props)=>{
    return css`
    @media only screen and (max-width:1200px){
      ${props}  
    }`;
};

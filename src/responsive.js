import { css } from "styled-components";

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 340px) {
            ${props}
        }
    `
};

export const mobileTwo = (props) => {
    return css`
        @media only screen and (max-width: 480px) {
            ${props}
        }
    `
};

export const tablet = (props) => {
    return css`
        @media only screen and (max-width: 600px) {
            ${props}
        }
    `
};

export const tabletTwo = (props) => {
    return css`
        @media only screen and (max-width: 801px) {
            ${props}
        }
    `
};

export const laptop = (props) => {
    return css`
        @media only screen and (max-width: 1025px) {
            ${props}
        }
    `
};

export const desktop = (props) => {
    return css`
        @media only screen and (max-width: 1300px) {
            ${props}
        }
    `
};

export const desktopTwo = (props) => {
    return css`
        @media only screen and (max-width: 1500px) {
            ${props}
        }
    `
};
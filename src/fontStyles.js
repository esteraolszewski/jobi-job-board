import { createGlobalStyle } from "styled-components";
import Gordita from "./fonts/Gordita Medium.woff";
import GorditaR from "./fonts/Gordita Regular.woff";
import Garamond from "./fonts/static/EBGaramond-Medium.ttf";
import Font from "./fonts/NotoSansJP-Thin.otf";

const FontStyles = createGlobalStyle`

    @font-face {
        font-family: 'Gordita Medium';
        src: url(${Gordita}) format('woff');

        font-family: 'Gordita Regular';
        src: url(${GorditaR}) format('woff');

        font-family: 'Garamond';
        src: url(${Garamond}) format('ttf');

        font-family: 'Japan';
        src: url(${Font}) format('otf');
    }
`;

    

export default FontStyles;
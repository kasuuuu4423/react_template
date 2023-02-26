import * as React from 'react';
import { useState, useEffect, useRef, createContext } from 'react';
import * as ReactDOM from 'react-dom';
import styled from "styled-components";
import Colors from './Cssvars/Colors';
import Mixin from './Cssvars/Mixin';


const Container = styled.div`
    //background: ${Colors.BLACK};
    color: ${Colors.WHITE};
    font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, "HiraKakuProN-W3", "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, "BIZ UDPGothic", sans-serif;
    font-weight: 200;
    line-height: 1.5rem;
    font-size: 14px;
    overflow-x: hidden;
    section.top{
        height: 100vh;
    }
    section:not(.top, .video){
        margin-right: 50px;
        margin-left: 50px;
        ${Mixin.media("sm", "margin-right: 75px;")}
        ${Mixin.media("sm", "margin-left: 75px;")}

        ${Mixin.media("md", "margin-right: 200px;")}
        ${Mixin.media("md", "margin-left: 200px;")}

        ${Mixin.media("lg", "margin-right: 300px;")}
        ${Mixin.media("lg", "margin-left: 300px;")}
        
        ${Mixin.media("xl", "width: 900px;")}
        ${Mixin.media("xl", "margin-right: auto;")}
        ${Mixin.media("xl", "margin-left: auto;")}
    }
    section:not(.top, .header){
        padding-bottom: 7rem;
        &.about{
            padding-top: 5rem;
            padding-bottom: 10rem;
        }
    }
`;

type AppProps = {
};

const App: React.FC<AppProps> = (props) =>{


    return (
        <Container>
        </Container>
    );
}

ReactDOM.render(<App key="Novis"/>, document.querySelector('#app'));
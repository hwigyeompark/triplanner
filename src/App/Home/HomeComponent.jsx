import React, {Component} from 'react';
import Header from "../../common/Header";
import BannerComponent from "./BannerComponent";
import ContentComponent from "./ContentComponent";
import styled, {createGlobalStyle} from 'styled-components'
import Footer from "../../common/Footer";

const GlobalStyle = createGlobalStyle`
  html,body{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;
const HomeWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export default class HomeComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <GlobalStyle/>
                <HomeWrapper>
                    <Header/>
                    <React.Fragment>
                        <BannerComponent/>
                        <ContentComponent/>
                    </React.Fragment>
                </HomeWrapper>
            </React.Fragment>
        );
    }
}
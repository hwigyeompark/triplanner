import React, {Component} from 'react';
import styled from 'styled-components'
import Header from "../../common/Header";
import BannerComponent from "./BannerComponent";
import ContentComponent from "./ContentComponent";
import Footer from "../../common/Footer";

const HomeWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
export default class HomeComponent extends Component{
    render() {
        return (
            <HomeWrapper>
                <Header/>
                <React.Fragment>
                    <BannerComponent/>
                </React.Fragment>
            </HomeWrapper>
        );
    }
}
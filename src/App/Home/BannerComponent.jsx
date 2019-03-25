import React, {Component} from 'react';
import styled from 'styled-components'
import backgroundBanner from '../../assets/images/back.png'

const BannerWrapper = styled.div`
    width: 100%;
    height: 700px;
    background: url(${backgroundBanner});
    background-size: cover;
    background-position: bottom;
    background-attachment: fixed;
`;
const IntroBox = styled.div`
    width: 100%;
    height: auto;
    margin: 0 auto;
`;
const IntroMent = styled.h1`
    text-align: center;
    font-size: 5em;
`;
const SearchBox = styled.div`
    background-color: #fff;
    border-radius: 5px;
    width: 45%;
    height: 85px;
    margin: 0 auto;
    border: 5px solid #cd2717;;
`;
const SearchButton = styled.button`
    float: right;
    width: 10%;
    height: 100%;
`;
export default class BannerComponent extends Component{
    render(){
        return(
                <BannerWrapper>
                    <IntroBox>
                        <IntroMent>Let's go on a Trip</IntroMent>
                    </IntroBox>
                    <br/>
                    <SearchBox>
                        <input type="text" style={{width:"90%", height:"100%"}}/>
                        <SearchButton>Search</SearchButton>
                    </SearchBox>
                </BannerWrapper>
        );
    }
}
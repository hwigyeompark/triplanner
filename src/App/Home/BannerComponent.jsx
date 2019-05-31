import React, {Component} from 'react';
import backgroundBanner from '../../assets/images/back.png'
import styled from 'styled-components'

const BannerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 800px;
    background: url(${backgroundBanner});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
`;
const BannerBox = styled.div`
    max-width: 50%;
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
    display: flex;
    background-color: #fff;
    border-radius: 5px;
    width: 500px;
    height: 85px;
    margin: 0 auto;
    border: 5px solid #cd2717;;
`;
const InputButton = styled.input` 
    width: 85%;
    height: auto;
    font-size: 1.3em;
`;
const SearchButton = styled.button`
    width: 15%;
    height: 100%;
`;
export default class BannerComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <BannerWrapper>
                    <BannerBox>
                        <IntroBox>
                            <IntroMent>Let's go on a Trip</IntroMent>
                        </IntroBox>
                        <SearchBox>
                            <InputButton type="text"/>
                            <SearchButton>Search</SearchButton>
                        </SearchBox>
                    </BannerBox>
                </BannerWrapper>
            </React.Fragment>
        );
    }
}
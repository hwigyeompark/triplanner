import React, {Component} from 'react'
import styled from 'styled-components'
import logo from '../assets/images/logo.png'

const HeaderWrapper = styled.div`
    display : flex;
    width : 100%;
    height : 60px;
    background-color: #ffffff;
    top: 0;
    z-index: 100;
    position: fixed;
    box-shadow: 0 3px 5px #e0e0e0;
`;
const HeaderItem = styled.div`
    display: flex;
    justify-content: center;
    width: 60%;
    margin: 0 auto;
`;
const LogoWrapper = styled.div`
    display : flex;
    align-items: center;
    justify-content: center;
    width : 20%;
    height : 100%;
`;
const LogoImg = styled.img`
    max-width: 150px;
    height: 30px;
    src: url(${props => props.src})
`;
const MenuWrapper = styled.ul`
    display : flex;
    width : 60%;
    height : 100%;
    text-align : center;
`;
const CustomLi = styled.li`
    width : 60%;
    font-size : 1.2em;
    text-align : center;
    color : #777777;
    list-style: none;
    line-height: 30px;
    text-decoration: none;
`;
export default class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <HeaderItem>
                    <LogoWrapper as="a" href="/">
                        <LogoImg src={logo}/>
                    </LogoWrapper>
                    <MenuWrapper>
                        <CustomLi as="a" href="/making">일정만들기</CustomLi>
                        <CustomLi as="a" href="/writing">여행기작성</CustomLi>
                    </MenuWrapper>
                </HeaderItem>
            </HeaderWrapper>
        )
    }
}
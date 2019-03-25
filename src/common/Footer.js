import React, {Component} from 'react';
import styled from 'styled-components'

const FooterWrapper = styled.div`
    background-color: #ffffff;
    width: 100%;
    height: 100px;
    margin-top: 2%;
    margin-bottom: 0;
    box-shadow: 3px 2px 3px 5px #e0e0e0;
`;
const FooterItem = styled.div`
    display: flex;
    width: 100%;
`;
const CustomMent = styled.h1`
    font-size: 0.9em;
`;
const FooterDescription = styled(CustomMent)`
    margin: 2%;
`;
const FooterCopyright = styled(CustomMent)`
    font-weight: bolder;
    justify-content: flex-end;
`;
export default class Footer extends Component{
    render(){
        return(
            <FooterWrapper>
                <FooterItem>
                    <FooterDescription>문의전화 : 02)1234-5678</FooterDescription>
                    <FooterDescription>팩스 : 123-456</FooterDescription>
                    <FooterDescription>주소 : 서울특별시 강남구</FooterDescription>
                    <FooterCopyright>Copyright2018ⓒAll rights reserved.</FooterCopyright>
                </FooterItem>
            </FooterWrapper>
        )
    }
}
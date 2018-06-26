import React, {Component} from 'react';
import '../css/Footer.css';

class Footer extends Component{
    render(){
        return(
            <div id="footer">
                <div id="footerMent">
                    <span>문의전화 : 02)1234-5678&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;팩스 : 123-456&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;주소 : 서울특별시 강남구</span>
                </div>
                <h6>Copyright2018ⓒAll rights reserved.</h6>
            </div>
        )
    }
}
export default Footer;
import React, {Component} from 'react';
import "../../assets/css/Content.css";
import card1 from '../../assets/images/trip1.jpg';
import card2 from '../../assets/images/trip2.jpg';
import card3 from '../../assets/images/trip3.jpg';

/*styled-component로 변경 및 코드 수정*/
export default class Content extends Component{
    render(){
        const tlist = {
          trip1 : {
              title : '"여자 혼자 떠난 파리 여행"'
          },
            trip2:{
              title:'"나홀로 미국 자유여행"'
            },
            trip3:{
              title: '"친구랑 둘이서 일본 먹방"'
            },
            trip4:{
                title: '"친구랑 둘이서 일본 먹방"'
            },
            trip5:{
                title: '"친구랑 둘이서 일본 먹방"'
            },
            trip6:{
                title: '"친구랑 둘이서 일본 먹방"'
            }
        };
        return (
            <div id="content">
                <h1>BEST TRIP</h1>
            </div>
        );
    };
}
import React, {Component} from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns, CardSubtitle, CardBody } from 'reactstrap';
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
                <CardColumns>
                    <a style={{color:"#333"}} href="/detail1">
                    <Card>
                        <CardImg src={card1} />
                        <CardBody>
                            <CardTitle>{tlist.trip1.title}</CardTitle>
                        </CardBody>
                    </Card>
                    </a>

                    <a style={{color:"#333"}} href="/detail2">
                    <Card>
                        <CardImg src={card3} />
                        <CardBody>
                            <CardTitle>{tlist.trip2.title}</CardTitle>
                        </CardBody>
                    </Card>
                    </a>

                    <a style={{color:"#333"}} href="/detail3">
                    <Card>
                        <CardImg top width="100%" src={card2} />
                        <CardBody>
                            <CardTitle>{tlist.trip3.title}</CardTitle>
                        </CardBody>
                    </Card>
                    </a>

                    <a style={{color:"#333"}} href="/detail4">
                        <Card>
                            <CardImg top width="100%" src={card2} />
                            <CardBody>
                                <CardTitle>{tlist.trip4.title}</CardTitle>
                            </CardBody>
                        </Card>
                    </a>

                    <a style={{color:"#333"}} href="/detail5">
                        <Card>
                            <CardImg top width="100%" src={card2} />
                            <CardBody>
                                <CardTitle>{tlist.trip5.title}</CardTitle>
                            </CardBody>
                        </Card>
                    </a>

                    <a style={{color:"#333"}} href="/detail6">
                        <Card>
                            <CardImg top width="100%" src={card2} />
                            <CardBody>
                                <CardTitle>{tlist.trip6.title}</CardTitle>
                            </CardBody>
                        </Card>
                    </a>
                </CardColumns>
            </div>
        );
    };
}
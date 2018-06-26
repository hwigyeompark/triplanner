import React, {Component} from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns, CardSubtitle, CardBody } from 'reactstrap';
import "../css/Content.css";
import card1 from '../img/trip1.jpg';
import card2 from '../img/trip2.jpg';
import card3 from '../img/trip3.jpg';

class Content extends Component{
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

                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Button</Button>
                    </Card>

                    <a style={{color:"#333"}} href="/detail3">
                    <Card>
                        <CardImg top width="100%" src={card2} />
                        <CardBody>
                            <CardTitle>{tlist.trip3.title}</CardTitle>
                        </CardBody>
                    </Card>
                    </a>

                    <Card body inverse color="primary">
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button color="secondary">Button</Button>
                    </Card>
                </CardColumns>
            </div>
        );
    };
}
export default Content;
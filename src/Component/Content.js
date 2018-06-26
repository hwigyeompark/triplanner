import React, {Component} from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns, CardSubtitle, CardBody } from 'reactstrap';
import "../css/Content.css";
import card1 from '../img/trip1.jpg';
import card2 from '../img/trip2.jpg';
import card3 from '../img/trip3.jpg';

class Content extends Component{
    render(){
        return (
            <div id="content">
                <h1>베스트 여행기</h1>
                <CardColumns>
                    <Card>
                        <CardImg src={card1} />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg src={card3} />
                    </Card>
                    <Card>
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Button</Button>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src={card2} />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
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
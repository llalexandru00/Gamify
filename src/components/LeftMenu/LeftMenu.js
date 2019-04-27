import React, { Component } from 'react';
import './LeftMenu.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import avatar from '../../resources/panda.jpg';

class Avatar extends Component {
    render() {
        return (
            <Image src={avatar} className = "Avatar" roundedCircle/>
        );
    }
}

class PlayerCard extends Component {
    render() {
        return (
            <Container className="PlayerCard" fluid="true">
                <Row>
                    <Col> <Avatar/> </Col>
                    <Col> <h5 className="PlayerName">John Mike Smith</h5></Col>
                </Row>
            </Container>
        );
    }
}


class LeftMenu extends Component {
    render() {
        return (
            <Container className="LeftMenu" fluid="true">
                <Row>
                    <Col><PlayerCard/></Col>
                </Row>
                <Row>
                    <Col><PlayerCard/></Col>
                </Row>
                <Row>
                    <Col><PlayerCard/></Col>
                </Row>
            </Container>
        );
    }
}

export default LeftMenu;
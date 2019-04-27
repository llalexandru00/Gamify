import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LeftMenu from "./components/LeftMenu/LeftMenu";
import Map from "./components/Map/Map";

var test_map = require('./resources/data/classic.json'); //(with path)

class App extends Component {

    render() {
        return (
          <Container className="App-header" fluid="true">
            <Row>
              <Col xs={2}><LeftMenu/></Col>
              <Col xs={7} fixed><Map model={test_map}/></Col>
              <Col className="RightMenu">2 of 2</Col>
            </Row>
          </Container>
        );
    }
}

export default App;

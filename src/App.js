import React from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import {Navigation} from './components/navigation';

class App extends React.Component {
    render() {
    return (
        <Container>
          <Navigation/>
        </Container>
    );
    }
}

export default App;

import React, { Component } from 'react';
import Form from './components/Form';
import Input from './components/Input';

class App extends Component {
  render() {
    return (
      <div className="personal section">
        <Form callBack="">
          <Input placeholder="firstname"/>
          <Input placeholder="lastname"/>
          <Input placeholder="number"/>
        </Form>
      </div>
    )
  }
}

export default App;
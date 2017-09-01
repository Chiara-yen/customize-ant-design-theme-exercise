import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Icon, Rate, Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Tabs defaultActiveKey="1" onChange={key => console.log(key)}>
          <TabPane tab="Tab 1" key="1">
            <h2>Content of Tab Pane 1</h2>
            <Rate allowHalf defaultValue={2.5}/>
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            <h2>Content of Tab Pane 2</h2>
            <Rate character={<Icon type="heart" />}/>
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            <h2>Content of Tab Pane 3</h2>
            <Rate disabled defaultValue={2}/>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default App;

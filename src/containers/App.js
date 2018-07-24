import React, { Component } from 'react';
import { Steps, Button, Menu, Icon, Dropdown, message, Row, Col } from 'antd';

import '../assets/css/App.css';
import Item from '../components/Item';

const Step = Steps.Step;

const steps = [{
    title: 'First',
    content: '',
}, {
    title: 'Second',
    content: 'Second-content',
}, {
    title: 'third',
    content: 'Third-content',
}, {
    title: 'Review',
}];

function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
}

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1"><Icon type="user" />1st menu item</Menu.Item>
        <Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
        <Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
    </Menu>
);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            restaurantRow: 1
        };
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    addRestaurantRow = () => {
        const currentRestaurantRows = this.state.restaurantRow;
        this.setState({ restaurantRow: currentRestaurantRows + 1});
    }

    getContent = (current) => {
      const restaurantRow = this.state.restaurantRow;
      const items = ['1st menu', '2nd menu', '3rd menu'];
      switch(current) {
          case 0:
              return (
                  <div className="dropdown-test">
                      <Row>
                          <div>Please select a meal</div><br/>
                          <Dropdown overlay={menu}>
                              <Button>
                                  Button <Icon type="down" />
                              </Button>
                          </Dropdown>
                      </Row><br/>
                      <Row>
                          <div>Please enter number of people</div><br />
                          <Dropdown overlay={menu}>
                              <Button>
                                  Button <Icon type="down" />
                              </Button>
                          </Dropdown>
                      </Row>
                  </div>
              );
          case 1:
              return (
                  <div className="dropdown-test">
                      <Row>
                          <div>Please select a restaurant</div><br/>
                          <Dropdown overlay={menu}>
                              <Button>
                                  Button <Icon type="down" />
                              </Button>
                          </Dropdown>
                      </Row>
                  </div>
              );
          case 2:
              return (
                  <div className="dropdown-same-column">
                      {[...Array(restaurantRow)].map((e, i) =>
                          <Row key={i} style={{ paddingBottom: 20}}>
                              <Col span={12}>
                                  <div>Please select a Dish</div><br/>
                                  <Dropdown overlay={menu}>
                                      <Button>
                                          Button <Icon type="down" />
                                      </Button>
                                  </Dropdown>
                              </Col>
                              <Col span={12}>
                                  <div>Please enter no. of servings</div><br/>
                                  <Dropdown overlay={menu}>
                                      <Button>
                                          Button <Icon type="down" />
                                      </Button>
                                  </Dropdown>
                              </Col>
                          </Row>
                      )}
                      <Row style={{ marginTop: 20}}>
                          <Icon style={{ fontSize: 30}} type="plus-circle-o" onClick={this.addRestaurantRow}/>
                      </Row>
                  </div>
              );
	      case 3:
              return (
                  <Item label="Please select a restaurant" dropDownItems={items}/>
              );
      }
    }

    render() {
        const { current } = this.state;
        return (
            <div className="app-container">
                    <Steps current={current}>
                        {steps.map(item => <Step key={item.title} title={item.title} />)}
                    </Steps>
                    <div>{this.getContent(current)}</div>
                    <div className="steps-action">
                        {
                            current < steps.length - 1
                            && <Button type="primary" onClick={() => this.next()}>Next</Button>
                        }
                        {
                            current === steps.length - 1
                            && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                        }
                        {
                            current > 0
                            && (
                                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                    Previous
                                </Button>
                            )
                        }
                    </div>
            </div>
        );
    }
}


export default App;
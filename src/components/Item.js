import React, { Component } from 'react';
import { Button, Icon, Dropdown, Menu} from 'antd';

class Item extends Component {
	render() {
		const menu = (dropDownItems) => {
			return (
				<Menu>
					{dropDownItems.map((item) => {
						return <Menu.Item key={item}><Icon type="user" />{item}</Menu.Item>
					})}
				</Menu>
			)
		};
		const { label, dropDownItems } = this.props;
		return (
			<div>
				<div>{label}</div><br/>
				<Dropdown overlay={menu(dropDownItems)}>
					<Button>
						Button <Icon type="down" />
					</Button>
				</Dropdown>
			</div>
		);
	}
}


export default Item;
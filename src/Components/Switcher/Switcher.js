import React from "react";
import { Radio } from "semantic-ui-react";

import "./Switcher.css";

class ExampleToggle extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			checked1: true,
			checked2: false,
			checked3: true,
			checked4: true,
			checked5: false,
		};

		this.changeHandler = this.changeHandler.bind(this);
	}

	changeHandler(e, data) {
		Object.keys(this.state).forEach((item) => {
			if (item.slice(-1) === data.name.slice(-1)) {
				this.setState({ [item]: !this.state[item] });
			} else {
				this.setState({ [item]: !!Math.floor(Math.random() * Math.floor(2)) });
			}
		});
	}

	render() {
		return (
			<div className="tuan-switcher">
				<Radio
					name="toggle-1"
					toggle
					checked={this.state.checked1}
					onChange={this.changeHandler}
				/>
				<Radio
					name="toggle-2"
					toggle
					checked={this.state.checked2}
					onChange={this.changeHandler}
				/>
				<Radio
					name="toggle-3"
					toggle
					checked={this.state.checked3}
					onChange={this.changeHandler}
				/>
				<Radio
					name="toggle-4"
					toggle
					checked={this.state.checked4}
					onChange={this.changeHandler}
				/>
				<Radio
					name="toggle-5"
					toggle
					checked={this.state.checked5}
					onChange={this.changeHandler}
				/>
			</div>
		);
	}
}

export default ExampleToggle;

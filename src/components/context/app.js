import React from "react";
import ColorContext from "./Color";
import Counter from "./Counter";
import Display from "./Display";
import Box from "./Box";
import Button from "./Button";

class Contxt extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			click: 1,
			theme: "light",
			box: "blue",
		};
	}

	render() {
		const { click, box } = this.state;

		return (
			<>
				<Counter click={click}>
					{(click, handleClick) => (
						<Display click={click} handleClick={handleClick} label="Count" />
					)}
				</Counter>

            <Button>
               Move Left
            </Button>

				<ColorContext.Provider value={{ theme: box }}>
					<Box />
				</ColorContext.Provider>
			</>
		);
	}
}

export default Contxt;

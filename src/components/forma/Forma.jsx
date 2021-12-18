import React from "react";
import { Form, Button } from "react-bootstrap";

function Forma() {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("You clicked submit.");
        alert('Hi there..');
	};

	return (
        <>
        <br/>
		<Form onSubmit={handleSubmit}>
			<Button type="submit" variant="outline-info">
				Submit
			</Button>
		</Form>
        </>
	);
}

export default Forma;

import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export function Home() {
	const [seconds, setSeconds] = useState(0);
	const countRef = useRef(null);
	useEffect(() => {
		setInterval(() => setSeconds(prevSeconds => prevSeconds + 1), 1000);
	}, []);

	const handleReset = () => {
		clearInterval(countRef.current);
		setSeconds(0);
	};

	return (
		<Container className="bg-dark text-white main" fluid>
			<Row className="d-flex justify-content-center">
				<Col className="clock" xs={1}>
					<i className="far fa-clock"></i>
				</Col>
				<Col className="digit" xs={1}>
					{Math.floor(seconds / 100000) % 10}
				</Col>
				<Col className="digit" xs={1}>
					{Math.floor(seconds / 10000) % 10}
				</Col>
				<Col className="digit" xs={1}>
					{Math.floor(seconds / 1000) % 10}
				</Col>
				<Col className="digit" xs={1}>
					{Math.floor(seconds / 100) % 10}
				</Col>
				<Col className="digit" xs={1}>
					{Math.floor(seconds / 10) % 10}
				</Col>
				<Col className="digit" xs={1}>
					{seconds % 10}
				</Col>
				<Col className="reset" xs={1}>
					<Button
						className="button-reset"
						variant="light"
						onClick={handleReset}>
						Reset
					</Button>
				</Col>
			</Row>
		</Container>
	);
}

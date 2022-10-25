import Offcanvas from "react-bootstrap/Offcanvas";
import Accordion from "react-bootstrap/Accordion";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { CCircleFill, HeartFill } from "react-bootstrap-icons";

export default function SideBar(props) {
	return (
		<Offcanvas show={props.show} onHide={props.handleClose}>
			<Offcanvas.Header>
				<Offcanvas.Title>Hotel App</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<Accordion flush>
					{props.role === "Admin" && (
						<Accordion.Item eventKey="0">
							<Accordion.Header>Management</Accordion.Header>
							<Accordion.Body>
								<Nav className="flex-column">
									<li className="nav-item">
										<Link
											className="nav-link"
											to="/management/rooms"
											onClick={props.handleClose}
										>
											Rooms
										</Link>
									</li>
									<li className="nav-item">
										<Link
											className="nav-link"
											to="/management/users"
											onClick={props.handleClose}
										>
											Users
										</Link>
									</li>
								</Nav>
							</Accordion.Body>
						</Accordion.Item>
					)}
					<Accordion.Item eventKey="1">
						<Accordion.Header>Transaction</Accordion.Header>
						<Accordion.Body>
							<Nav className="flex-column">
								<li className="nav-item">
									<Link
										className="nav-link"
										to="transaction/checkin"
										onClick={props.handleClose}
									>
										Check In
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link"
										to="transaction/checkout"
										onClick={props.handleClose}
									>
										Check Out
									</Link>
								</li>
							</Nav>
						</Accordion.Body>
					</Accordion.Item>
					{/* <Accordion.Item eventKey="2">
						<Accordion.Header>Report</Accordion.Header>
						<Accordion.Body>
							<Nav className="flex-column">
								<li className="nav-item">
									<Link
										className="nav-link"
										to="/"
										onClick={props.handleClose}
									>
										Transaction Report
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link"
										to="/"
										onClick={props.handleClose}
									>
										Customer Report
									</Link>
								</li>
							</Nav>
						</Accordion.Body>
					</Accordion.Item> */}
				</Accordion>
			</Offcanvas.Body>
			<div
				className="text-center"
				style={{ padding: "10px", color: "#3F72AF" }}
			>
				<span>
					Made with <HeartFill /> by Team 1 Juara Coding{" "}
					<CCircleFill /> 2022
				</span>
			</div>
		</Offcanvas>
	);
}

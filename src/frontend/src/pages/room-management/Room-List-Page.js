import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Table from "react-bootstrap/Table";
import { getAllRooms } from "../../api/Room";

export default function RoomListPage(props) {
	const [rooms, setRooms] = useState([]);

	const getRooms = async () => {
		const response = await getAllRooms();
		console.log(response);
		if (response.status === 200) {
			setRooms(response.data);
		}
	};

	useEffect(() => {
		getRooms();
	}, []);

	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Container fluid>
					<Navbar.Brand href="#">Rooms Management</Navbar.Brand>
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: "100px" }}
							navbarScroll
						></Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Container fluid>
				<Button
					style={{ marginTop: "10px", marginBottom: "10px" }}
					variant="outline-primary"
				>
					Create Rooms
				</Button>
				<Form className="d-flex">
					<Form.Control
						type="search"
						placeholder="Search"
						className="me-2"
						aria-label="Search"
					/>
					<Button variant="outline-success">Search</Button>
				</Form>
			</Container>
			<div style={{ marginLeft: "10px", marginRight: "10px" }}>
				<Table striped bordered hover size="sm">
					<thead>
						<tr>
							<th>Room No</th>
							<th>Type</th>
							<th>Price</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{rooms &&
							rooms.map((el, index) => {
								return (
									<tr key={index}>
										<td scope="row">{el.roomNo}</td>
										<td>{el.type}</td>
										<td>{el.price}</td>
										<td>{el.status}</td>
										<td>
											<Button
												variant="primary"
												size="sm"
												className="me-2"
											>
												Detail Rooms
											</Button>
											<Button
												variant="primary"
												size="sm"
												className="me-2"
											>
												Update
											</Button>
											<Button
												variant="primary"
												size="sm"
												className="me-2"
											>
												Delete
											</Button>
										</td>
									</tr>
								);
							})}
						{/* <tr>
							<td>202009100001</td>
							<td>P-0001</td>
							<td>Suite Rooms</td>
							<td>500.000</td>
							<td>
								Kamar Mandi, Bathub, Save Case, Tv, Kitchen Set,
								Sofa, Balcon
							</td>
							<td>Chek In</td>
							<td>
								{" "}
								<Button
									variant="primary"
									size="sm"
									className="me-2"
								>
									Detail Rooms
								</Button>
								<Button
									variant="primary"
									size="sm"
									className="me-2"
								>
									Update
								</Button>
								<Button
									variant="primary"
									size="sm"
									className="me-2"
								>
									Delete
								</Button>
							</td>
						</tr>
						<tr></tr>
						<tr></tr> */}
					</tbody>
				</Table>
			</div>
		</div>
	);
}

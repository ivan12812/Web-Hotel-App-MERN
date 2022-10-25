import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Table from "react-bootstrap/Table";
import { deleteRoom, getAllRooms, searchRoom, updateRoomStatus } from "../../api/Room";
import SearchBarRoom from "../../components/user-management/Search-Bar-Room";
import RoomListTable from "../../components/room-management/Room-List-Table";
import NoData from "../../components/No-Data";
import Loader from "../../components/Loader";





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

	const [currentIndex, setCurrentIndex] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	
	const handleChangeStatus = async (id, index) => {
		setIsLoading(true);
		setCurrentIndex(index);
		const response = await updateRoomStatus(id);

		setTimeout(() => {
			setIsLoading(false);
			setCurrentIndex(null);

			if (response.status === 201) {
				setToastState({
					show: true,
					title: "Success",
					message: response.message,
				});
				getRooms();
			} else {
				setToastState({
					show: true,
					title: "Failed",
					message: response.message + ". " + response.detail || "",
				});
			}

			setTimeout(() => {
				setToastState({
					show: false,
					title: "",
					message: "",
				});
			}, 5000);
		}, 1000);
	};


	const [isFetching, setIsFetching] = useState(false);

	const [toastState, setToastState] = useState({
		show: false,
		title: "",
		message: "",
	});


	const [search, setSearch] = useState({
		query: "",
		category: "roomNo",
	});

	
	const handleChangeSearch = (e) => {
		const key = e.target.name;
		const value = e.target.value;

		if (key === "query" && value === "") {
			getRooms();
		}
		setSearch({
			...search,
			[key]: value,
		});
	};
	

	const handleSubmitSearch = async (e) => {
		setIsFetching(true);
		e.preventDefault();

		const response = await searchRoom(search.category, search.query);

		setTimeout(() => {
			setIsFetching(false);
			if (response.status === 200) {
				setRooms(response.data);
			} else {
				setToastState({
					...toastState,
					show: true,
					title: "Failed",
					message: response.message,
				});
				setTimeout(() => {
					setToastState({
						...toastState,
						show: false,
						title: "",
						message: "",
					});
				}, 5000);
			}
		}, 1000);
	};
	

	const removeRoom= async (id) => {
		try {
			const response = await deleteRoom(id)
			console.log(response,"kehapus")
			
			
			
		} catch (error) {
			console.log(error);
		}

	}

	const style = {
		page: {
			padding: "30px",
			paddingTop: "70px",
			backgroundColor: "#F9F7F7",
		},
		title: {
			color: "#112D4E",
		},
		label: {
			color: "#3F72AF",
		},
		input: {
			borderRadius: "10px",
			borderColor: "#DBE2EF",
			color: "#3F72AF",
		},
	
		card: {
			border: "none",
			borderRadius: "20px",
		},
		button: {
			borderRadius: "15px",
		},
	};


		
		return (
			<div className="min-vh-100" style={style.page}>
				<div className="container">
					<div className="row justify-content-between mb-3">
						<div className="col-auto">
							<h3 style={style.title}>Room Management</h3>
						</div>
						<div className="col-auto">
							<button
								className="btn btn-outline-primary shadow"
								style={style.button}
								
							>
								Create Room
							</button>
						</div>
					</div>
					<div className="mb-3">
					<SearchBarRoom
						search={search}
						handleChangeSearch={handleChangeSearch}
						handleSubmitSearch={handleSubmitSearch}
						style={style}
					/>
<<<<<<< HEAD
					
					</div>
					{isFetching ? (
					<Loader style={style} />
				) : rooms.length > 0 ? (
					<RoomListTable
						rooms={rooms}
						isLoading={isLoading}
						currentIndex={currentIndex}
						handleChangeStatus={handleChangeStatus}
						removeRoom={removeRoom}
						getRooms={getRooms}
						
					/>
				) : (
					<NoData />
				)}
					
				</div>
			
=======
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
>>>>>>> d48b1b969a1ae104248b8b5f4effde2c7987482d
			</div>
		);
	}
	
		
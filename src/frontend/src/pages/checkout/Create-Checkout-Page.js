import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCheckinById } from "../../api/Checkin";
import Loader from "../../components/Loader";
import MessageToast from "../../components/Message-Toast";
import { idrFormat } from "../../utils/Formatter";

export default function CreateCheckoutPage() {
	const [checkOut, setCheckOut] = useState({
		totalPrice: "",
		repayment: "",
		change: "",
		late: {
			isLate: false,
			information: "",
			fine: "",
		},
	});

	const [checkIn, setCheckIn] = useState({});
	const [base64String, setBase64String] = useState("");

	const [isFetching, setIsFetching] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const [toastState, setToastState] = useState({
		show: false,
		title: "",
		message: "",
	});

	const navigate = useNavigate();
	const params = useParams();

	const getCheckIn = async () => {
		setIsFetching(true);
		console.log(params.id);
		const response = await getCheckinById(params.id);
		console.log(response);
		setTimeout(() => {
			setIsFetching(false);

			if (response.status === 200) {
				setCheckIn(response.data);
				setBase64String(
					btoa(
						new Uint8Array(
							response.data.room.picture.data.data
						).reduce(function (data, byte) {
							return data + String.fromCharCode(byte);
						}, "")
					)
				);
			} else {
				navigate("/transaction/checkin", {
					state: {
						toastState: {
							show: true,
							title: "Failed",
							message: response.message,
						},
					},
				});
			}
		}, 3000);
	};

	useEffect(() => {
		getCheckIn();
	}, []);

	const handleChange = (e) => {
		const key = e.target.name;
		const value = e.target.value;

		if (key === "late") {
		}
	};

	const handleSubmit = async (e) => {
		// setIsLoading(true);
		// e.preventDefault();
		// const { departDate, returnDate, ...rest } = borrow;
		// let payload = {
		// 	...rest,
		// };
		// payload["carPlateNo"] = selectedCar.plateNo;
		// payload["carId"] = selectedCar.car._id;
		// payload["customer"] = customer;
		// payload["departDate"] = new Date(departDate);
		// payload["returnDate"] = new Date(returnDate);
		// payload["totalCost"] =
		// 	selectedCar.car.rentPrice.perDay * borrow.daysToBorrow +
		// 	selectedCar.car.rentPrice.perHour * borrow.hoursToBorrow;
		// payload["remains"] = payload["totalCost"] - borrow.downPayment;
		// // console.log(payload);
		// const response = await createBorrow(payload);
		// setTimeout(() => {
		// 	setIsLoading(false);
		// 	if (response.status.includes("401")) {
		// 		localStorage.removeItem("TOKEN");
		// 		navigate("/login", {
		// 			state: {
		// 				toastState: {
		// 					show: true,
		// 					title: "Session Expired",
		// 					message: "Your session has expired, please login",
		// 				},
		// 			},
		// 		});
		// 	} else if (response.status.includes("201")) {
		// 		navigate("/transaction/borrows", {
		// 			state: {
		// 				toastState: {
		// 					show: true,
		// 					title: "Success",
		// 					message: response.message,
		// 				},
		// 			},
		// 		});
		// 	} else {
		// 		setToastState({
		// 			...toastState,
		// 			show: true,
		// 			title: "Error",
		// 			message: response.message,
		// 		});
		// 		setTimeout(() => {
		// 			setToastState({
		// 				...toastState,
		// 				show: false,
		// 				title: "",
		// 				message: "",
		// 			});
		// 		}, 5000);
		// 	}
		// }, 1000);
	};

	const handleCancel = () => {
		navigate("/transaction/checkin");
	};

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
		loader: {
			color: "#3F72AF",
		},
		card: {
			border: "none",
			borderRadius: "20px",
			padding: "20px",
		},
		button: {
			borderRadius: "15px",
		},
	};

	return (
		<div className="min-vh-100" style={style.page}>
			<div className="container">
				<h3 className="mb-3" style={style.title}>
					Check Out
				</h3>
				{!checkIn && isFetching ? (
					<Loader style={style} />
				) : (
					<form onSubmit={handleSubmit}>
						<div className="card shadow mb-3" style={style.card}>
							<div className="card-body">
								<h5
									className="card-title mb-3"
									style={style.title}
								>
									Customer
								</h5>
								<div className="row mb-3">
									<div className="col">
										<h6>ID/KTP</h6>
										<p>{checkIn.customer["ID"]}</p>
									</div>
									<div className="col">
										<h6>Name</h6>
										<p>{checkIn.customer["name"]}</p>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<h6>Address</h6>
										<p>{checkIn.customer["address"]}</p>
									</div>
									<div className="col">
										<h6>Phone Number</h6>
										<p>{checkIn.customer["phoneNumber"]}</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row mb-5">
							<div className="col">
								<div className="card shadow" style={style.card}>
									<div className="card-body">
										<h5 className="card-title mb-3">
											Check In Information
										</h5>
										<div className="row mb-3">
											<div className="col">
												<h6>Check In Date</h6>
												<p>
													{new Date(
														checkIn.checkInDate
													).toLocaleString()}
												</p>
											</div>
											<div className="col">
												<h6>Due Date</h6>
												<p>
													{new Date(
														checkIn.dueDate
													).toLocaleString()}
												</p>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col">
												<h6>Length Of Stay</h6>
												<p>
													{checkIn.lengthOfStay === 1
														? `${checkIn.lengthOfStay} day`
														: `${checkIn.lengthOfStay} days`}
												</p>
											</div>
										</div>
										<h6
											style={{
												textDecoration: "underline",
											}}
										>
											Room Information
										</h6>
										<div className="mb-3 text-center">
											<img
												src={`data:image/png;base64,${base64String}`}
												width={300}
												alt="room picture"
											/>
										</div>
										<div className="row mb-3">
											<div className="col">
												<h6>Room No</h6>
												<p>{checkIn.room.roomNo}</p>
											</div>
											<div className="col">
												<h6>Price</h6>
												<p>
													{idrFormat(
														checkIn.room.price
													)}
												</p>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<h6>Type</h6>
												<p>{checkIn.room.type}</p>
											</div>
											<div className="col">
												<h6>Facility</h6>
												<p>{checkIn.room.facility}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card shadow" style={style.card}>
									<div className="card-body">
										<h5
											className="card-title mb-3"
											style={style.title}
										>
											Billing Information
										</h5>
										<div className="mb-3">
											<label
												htmlFor="downPayment"
												className="form-label"
												style={style.label}
											>
												Repayment
											</label>
											<input
												type="number"
												className="form-control"
												id="repayment"
												name="repayment"
												value={checkOut.repayment}
												onChange={handleChange}
												style={style.input}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						{isLoading ? (
							<Loader style={style} />
						) : (
							<div className="row">
								<div className="col">
									<div className="d-grid gap-2">
										<button
											className="btn btn-dark shadow"
											type="button"
											onClick={() => handleCancel()}
											style={style.button}
										>
											Cancel
										</button>
									</div>
								</div>
								<div className="col">
									<div className="d-grid gap-2">
										<button
											className="btn btn-success shadow"
											type="submit"
											style={style.button}
										>
											Check Out
										</button>
									</div>
								</div>
							</div>
						)}
					</form>
				)}
			</div>
			<MessageToast
				toastState={toastState}
				setToastState={setToastState}
			/>
		</div>
	);
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreteUserForm from "../../components/user-management/Create-User-Form";
import { createUser } from "../../api/Users";
import MessageToast from "../../components/Message-Toast";

export default function CreateUserPage() {
	const [user, setUser] = useState({
		name: "",
		role: "receptionist",
		username: "",
		password: "",
	});

	const [isLoading, setIsLoading] = useState(false);

	const [toastState, setToastState] = useState({
		show: false,
		title: "",
		message: "",
	});

	const navigate = useNavigate();

	const handleChange = (e) => {
		const key = e.target.name;
		const value = e.target.value;

		setUser({
			...user,
			[key]: value,
		});
	};

	const handleSubmit = async (e) => {
		setIsLoading(true);
		e.preventDefault();

		// console.log(data);
		const response = await createUser(user);

		setTimeout(() => {
			setIsLoading(false);

			// if (response.status.includes('401')) {
			// 	localStorage.removeItem('TOKEN');
			// 	navigate('/login', {
			// 		state: {
			// 			toastState: {
			// 				show: true,
			// 				title: 'Session Expired',
			// 				message: 'Your session has expired, please login',
			// 			},
			// 		},
			// 	});
			// } else
			if (response.status.includes("201")) {
				navigate("/master/users", {
					state: {
						toastState: {
							show: true,
							title: "Success",
							message: response.message,
						},
					},
				});
			} else {
				setToastState({
					...toastState,
					show: true,
					title: "Error",
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

	const handleCancel = () => {
		navigate("/master/users");
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
		},
		button: {
			borderRadius: "20px",
		},
	};

	return (
		<div className="min-vh-100" style={style.page}>
			<div className="container">
				<h3 className="mb-3" style={style.title}>
					Create User
				</h3>
				<CreteUserForm
					user={user}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					isLoading={isLoading}
				/>
				<MessageToast
					toastState={toastState}
					setToastState={setToastState}
				/>
			</div>
		</div>
	);
}
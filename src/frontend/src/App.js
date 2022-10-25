import { useState } from "react";
import {
	BrowserRouter,
	Routes,
	Route,
	Outlet,
	Navigate,
} from "react-router-dom";
import NavBar from "./components/Nav-Bar";
import LoginPage from "./pages/authentication/Login-Page";
import CreateUserPage from "./pages/user-management/Create-User-Page";
import UserListPage from "./pages/user-management/User-List-Page";
import SearchBar from "./components/user-management/Search-Bar";
import UpdateUserPage from "./pages/user-management/Update-User-Page";

const Protected = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(
		localStorage.getItem("TOKEN")
	);

	return isAuthenticated ? (
		<>
			<NavBar />
			<Outlet />
		</>
	) : (
		<Navigate to="/login" />
	);
};

const AccessLoginPageHandler = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(
		localStorage.getItem("TOKEN")
	);

	return isAuthenticated ? <Navigate to="/" /> : <LoginPage />;
};

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Protected />}>
					{/* <Route path="transaction">
						<Route path="borrows">
							<Route
								index
								element={<BorrowsListPage />}
							/>
							<Route
								path="create"
								element={<CreateBorrowPage />}
							/>
						</Route>
					</Route>
					<Route path="master">
						<Route path="cars">
							<Route
								index
								element={<CarsListPage />}
							/>
							<Route
								path="create"
								element={<CreateCarPage />}
							/>
							<Route
								path="update/:id"
								element={<UpdateCarPage />}
							/>
						</Route>
						<Route path="users">
							<Route
								index
								element={<UserListPage />}
							/>
							<Route
								path="create"
								element={<CreateUserPage />}
							/>
							<Route
								path="update/:id"
								element={<UpdateUserPage />}
							/>
						</Route>
					</Route> */}
				</Route>
				<Route path="/login" element={<AccessLoginPageHandler />} />
				{/* <Route
					path="*"
					element={<Navigate to="/transaction/borrows" />}
				/> */}
			</Routes>
			<SearchBar/>
			<UpdateUserPage/>
		</BrowserRouter>
	);
}

export default App;

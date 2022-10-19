import UserListTable from "../../components/user-management/User-List-Table";




export default function UserListPage() {
    const style = {
        title: {
            color: '#112D4E',
        },
        buttonCreate: {
            borderRadius: '15px',
            backgroundColor: '#3F72AF',
            color: '#F9F7F7',
        },           
    }
    return(
        <div className="m-5">
           <div className="row justify-content-between mb-3">
				<div className="col-auto">
					<h3 style={style.title}>User List</h3>
				</div>
				<div className="col-auto">
					<button
						className="btn btn-outline-primary shadow"
						style={style.buttonCreate}
					>
						New User
					</button>
				</div>
			</div>
            <UserListTable/>
        </div>
    )
}
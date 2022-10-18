export default function CreateUser() {
    return (
        <div className="card" style={{
            margin: "20px",
            color: "#DBE2EF"
        }}>
            <form className="card-body">
            <h1 className="mb-3">Create User</h1>
                <div className="mb-3">
                    <label className="form-label">Nama</label>
                    <input type="text" className="form-control" />
                </div>
                <select className="form-select mb-3" aria-label=".form-select-lg example" defaultValue={'role'}>
                    <option value="role">Pilih Role?</option>
                    <option value="1">Admin</option>
                    <option value="2">Resepsionis</option>
                </select>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label">Check me out</label>
                </div>
                <div className="row">
                <div className="col">
				    <div className="d-grid gap-1">
                        <button
                            className="btn btn-success shadow"
                            type="button"
                            style={{borderRadius: '20px'}}>
                            Create
                        </button>								
				    </div>			
				</div>
                <div className="col">
				    <div className="d-grid gap-2">
                        <button
                            className="btn btn-dark shadow"
                            type="button"
                            style={{borderRadius: '20px'}}>
                            Cancel
                        </button>								
				    </div>			
				</div>
                </div>		
            </form>
        </div>
    )
}
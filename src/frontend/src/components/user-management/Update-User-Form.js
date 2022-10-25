import { Trash, Eye, Pencil } from 'react-bootstrap-icons';

export default function UpdateUserForm() {

    return (
        <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Name</th>
                    <th scope="col">Role</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>@mdo123</td>
                    <td>Mark</td>
                    <td>Admin</td>
                    <td>Aktive</td>
                    <td>
                        <div className="row">
                            <div className='col'>
                                <div className="d-grid gap-1">
                                    <Trash/>
                                </div>
                                <div className="d-grid gap-2">
                                    <Eye/>
                                </div>
                                <div className="d-grid gap-3">
                                    <Pencil/>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>@mdo123</td>
                    <td>Mark</td>
                    <td>Admin</td>
                    <td>Aktive</td>
                </tr>
                <tr>
                    <td>@mdo123</td>
                    <td>Mark</td>
                    <td>Admin</td>
                    <td>Aktive</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}
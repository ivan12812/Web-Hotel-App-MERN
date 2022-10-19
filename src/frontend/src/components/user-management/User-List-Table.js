import { Trash, Eye, Pencil } from 'react-bootstrap-icons';

export default function UserListTable() {
    return(
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
import { Table } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
const  Dashboard = () => {

  const data=[{id:1,name:"aman",lName:"Sadhwani",userId:"aman@123"},{id:2,name:"rafa",lName:"nadal",userId:"rafa@456"}]
  
  const navigate = useNavigate();
      const handleLogout = () => {
        navigate('/');
      }

      const onRedirectUser = (data) =>{
        navigate(`/user`, { state: data });
      }

    return <div className="w-25">
      <b className="mb-2 d-block">Dashboard</b>

      <Table className="table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item)=>(
          <tr key={item.id}>
            <th className="link" scope="row" onClick={()=>onRedirectUser(item)}> {item.id} </th>
            <td>{item.name}</td>
            <td>{item.lName}</td>
            <td>{item.userId}</td>
          </tr>
        ))}
          
        </tbody>
      </Table>

      <button className="btn btn-danger" onClick={handleLogout}>Logout</button>

     

    </div>
  }


export default Dashboard;
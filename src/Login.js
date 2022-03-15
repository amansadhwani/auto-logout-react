import { useNavigate } from 'react-router-dom';

const Login =()=> {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/dashboard');
  }


    return <div className="w-25">
      <h5 className="mb-3 d-block ">Auto Logout React</h5>
      <b className="mb-2 d-block">Login</b>
      <input className="d-block mb-2 form-control" type="text" placeholder="Email" />
      <input className="d-block mb-2 form-control" type="password" placeholder="Password" />
      <button className="btn btn-success" onClick={handleLogin}>Login</button>
    </div>
  }


export default Login;
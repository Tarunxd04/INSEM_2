import { useNavigate } from 'react-router-dom';

function Registration() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Registration Page</h2>

      <input type="email" placeholder="Enter Email" />
      <br /><br />

      <input type="password" placeholder="Enter Password" />
      <br /><br />

      <button onClick={() => navigate('/login')}>
        Register
      </button>
    </div>
  );
}

export default Registration;
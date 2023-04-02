import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = (props) => {
    const users = props.users
    return (
        <div>
            <h1>WHO'S WATCHING?</h1>
            <div className="user-container">
                {users.map(user => (
                     <Link to="/catalog" key={user.name}>
                        <div className={`user-box ${user.backgroundColor}`}>{user.name}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Landing;

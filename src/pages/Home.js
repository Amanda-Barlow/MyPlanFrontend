import SignIn from '../components/SignIn'
import UserAuth from '../components/UserAuth'
import NavBar from '../components/NavBar'

const Home = (props) => {
    return (
        <div>
            <h1>This is the Home Page</h1>
            <SignIn />
            <UserAuth />
            <NavBar />
        </div>
    )
}

export default Home;

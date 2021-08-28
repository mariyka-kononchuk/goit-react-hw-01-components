import Profile from './components/profile';
import user from './social-profile/user.json';
export default function App() {
    return (
        <div>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
        </div>
    );
}
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
    </div>
  );
}

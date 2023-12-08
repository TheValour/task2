import './App.css'
import Detail from './component/hero/Detail'
import { UserContextProvider } from './component/context/UserContext'
import Users from './component/hero/Users';

function App() {
  return (
    <UserContextProvider>
      <div className="App flex w-screen bg-blue-50">
        <Users />
        <Detail />
      </div>
    </UserContextProvider>
  );
}

export default App;

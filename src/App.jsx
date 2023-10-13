import { UserContextProvider } from "./Context";
import Routes from "./routes/Routes";

function App() {


  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}

export default App;

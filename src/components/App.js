import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  const user = authService.currentUser;
  console.log(user);
  const boolean = false;
  console.log(boolean);
  return (
    <div>
      <AppRouter isLoggedIn={Boolean(boolean)} />
    </div>
  );
}

export default App;

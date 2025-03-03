import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";
import { useAuthStore } from "../../store/authUser";

export default function HomePage() {
  const {user} = useAuthStore();
  return <>{user ? <HomeScreen /> : <AuthScreen />}</>;
}

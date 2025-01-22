import { useAuthStore } from "../../store/authUser";


export default function HomeScreen() {
  const {logout} = useAuthStore();
  return (
    <div className="hero-bg relative">
      HomeScreen
    <button onClick={logout} className="text-white">Logout</button>
    </div>
  );
}

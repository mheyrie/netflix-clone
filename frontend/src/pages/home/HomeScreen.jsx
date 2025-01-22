import { useAuthStore } from "../../store/authUser";


export default function HomeScreen() {
  const {logout} = useAuthStore();
  return (
    <>
    <div className=" h-screen text-white relative ">
     
    <button onClick={logout} className="text-white">Logout</button>
    </div></>
  );
}

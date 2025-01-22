import Navbar from "../../components/Navbar";
// import { useAuthStore } from "../../store/authUser";

export default function HomeScreen() {
  // const { logout } = useAuthStore();
  return (
    <>
      <div className=" h-screen text-white relative bg-gray-900">
<Navbar/>




        {/* <button onClick={logout} className="text-white">
          Logout
        </button> */}
      </div>
    </>
  );
}

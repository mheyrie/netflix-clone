import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div className="h-screen w-full hero-bg">
        <header className="max-w-6xl max-auto flex items-center justify-between p-4">
            <Link to={'/'}>
            <img src="/netflix-logo.png" alt="logo" className="w-52" /></Link>
        </header>
    </div>
  )
}
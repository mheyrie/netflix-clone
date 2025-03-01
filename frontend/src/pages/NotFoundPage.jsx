import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white "
      style={{ backgroundImage: `url('/404.png')` }}
    >
      <header className="absolute top-0 left-0 p-4 bg-black w-full">
        <Link to="/" className="">
          <img src="/netflix-logo.png" alt="Netflix" className="h-8" />
        </Link>
      </header>
      <main className="text-center error-page--content z-10">
        <h1 className="text-7xl font-semibold mb-4 "> Lost your way?</h1>
        <p className="mb-6 text-xl">
          Sorry, we can't find the page you are looking for. Go to Home page to
          Explore more movies and TV shows on Netflix.
        </p>
        <Link to="/" className="bg-red-500 text-white px-4 py-2 rounded-lg">
          Netflix Home
        </Link>
        <div className="border-l-2 h-12 mx-auto w-80 flex justify-center items-center  border-red-500 mt-5">
          {" "}
          <span className="text-3xl font-thin mr-2">Error Code</span>
          <span className="font-bold text-3xl leading-snug tracking-wider">NSES-404</span>
        </div>
      </main>
    </div>
  );
}

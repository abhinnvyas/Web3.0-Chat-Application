import Head from "next/head";
import Login from "../components/Login";

export default function Home() {
  const isAuthenticated = false;

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen">
      <Head>
        <title>Web3 Chat Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to the Application!</h1>
    </div>
  );
}

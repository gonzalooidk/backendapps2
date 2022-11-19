import Head from 'next/head';
import Link from 'next/link';


export default function Home() {
  return (
    <div className="container-login">
      <Head>
        <title>Gestion login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="box-login">
        <h1>Login</h1>
        <form method="POST" action="/api/login">
          <input name="pass" className="passwordInput" type="password"></input>
          <input className="signInInput" value="Sign in" type="submit"></input>
        </form>
      </div>
      
    </div>
  )
}

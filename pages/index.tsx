import Login from "./login";

function noop() {
  return;
}



export default function Home() {
  return (
    <>
      <Login
        shouldRemember={true}
        onPasswordChange={noop}
        onSubmit={noop}
        onUsernameChange={noop}

      />
    </>
  )
}

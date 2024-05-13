import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";

import { type AuthUser } from "aws-amplify/auth";
import "@aws-amplify/ui-react/styles.css";

// components
import { type UseAuthenticator } from "@aws-amplify/ui-react-core";

type AppProps = {
  signOut?: UseAuthenticator["signOut"];
  user?: AuthUser;
};

// make a component
// eslint-disable-next-line react-refresh/only-export-components
const HomePage = () => {
  return (
    <>
      <p className="text-2xl text-red-500">Home Page</p>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
const App: React.FC<AppProps> = ({ user, signOut }) => {
  console.log(user);
  return (
    <>
      <Heading level={1}>Hello {user?.signInDetails?.loginId}</Heading>
      <Button onClick={signOut}>Sign out</Button>

      <HomePage />
    </>
  );
};

export default withAuthenticator(App);

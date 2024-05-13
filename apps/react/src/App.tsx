import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import { type AuthUser } from "aws-amplify/auth";
import { type UseAuthenticator } from "@aws-amplify/ui-react-core";

type AppProps = {
  signOut?: UseAuthenticator["signOut"];
  user?: AuthUser;
};

const App: React.FC<AppProps> = ({ signOut, user }) => {
  return (
    <div>
      <Heading level={1}>Hello {user?.signInDetails?.loginId}</Heading>
      <Button onClick={signOut}>Sign out</Button>
    </div>
  );
};

export default withAuthenticator(App);

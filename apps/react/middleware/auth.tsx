import "@aws-amplify/ui-react/styles.css";
import {
  Authenticator,
  View,
  Button,
  useAuthenticator,
} from "@aws-amplify/ui-react";

export default function App() {
  const components = {
    SignIn: {
      Footer() {
        const { toForgotPassword } = useAuthenticator();
        return (
          <View textAlign="center">
            <Button fontWeight="normal" onClick={toForgotPassword} size="small">
              Forgot Password
            </Button>
          </View>
        );
      },
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Authenticator components={components} />
    </div>
  );
}

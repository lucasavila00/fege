import * as React from "react";
import { Stack } from "office-ui-fabric-react/lib/components/Stack";
import { Text } from "office-ui-fabric-react/lib/components/Text";
// import { ProgressIndicator } from "office-ui-fabric-react/lib/ProgressIndicator";
import { getTheme } from "office-ui-fabric-react/lib/Styling";
// import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { Checkbox } from "office-ui-fabric-react/lib/Checkbox";
import firebase from "gatsby-plugin-firebase";
import { useEffect, useState } from "react";
const defaultRegistration = {
  token: null as string | null,
  registered: false,
};
export const Fcm: React.FunctionComponent = () => {
  const [loading, setLoading] = useState(false);
  const setRegisteredTrue = (token: string) => {
    console.log({ token });
    setRegistered(true);
    // salva no localstorage
    const registration: typeof defaultRegistration = {
      token,
      registered: true,
    };
    localStorage.setItem(
      "registration",
      JSON.stringify(registration),
    );
  };
  const getRegistration = (): typeof defaultRegistration => {
    if (typeof window == "undefined") {
      return defaultRegistration;
    }
    return (
      JSON.parse(
        localStorage.getItem("registration") ?? "null",
      ) ?? defaultRegistration
    );
  };
  const [registered, setRegistered] = useState(
    getRegistration().registered,
  );
  const [error, setError] = useState(false);
  const [
    requestPermission,
    setRequestPermission,
  ] = useState(false);
  useEffect(() => {
    const messaging = firebase.messaging();
    messaging.onMessage((payload) => {
      console.log("Message received. ", payload);
      // ...
    });
    messaging.onTokenRefresh(() => {
      messaging
        .getToken()
        .then((refreshedToken) => {
          console.log("Token refreshed.");
          // Indicate that the new Instance ID token has not yet been sent to the
          // app server.
          // setTokenSentToServer(false);
          // // Send Instance ID token to app server.
          // sendTokenToServer(refreshedToken);
          // ...
          setRegisteredTrue(refreshedToken);
        })
        .catch((err) => {
          console.log(
            "Unable to retrieve refreshed token ",
            err,
          );
          // showToken('Unable to retrieve refreshed token ', err);
          setError(true);
        });
    });
  }, []);

  const onRegisterClub = () => {
    setLoading(true);
    const messaging = firebase.messaging();

    messaging
      .getToken()
      .then((currentToken) => {
        if (currentToken) {
          // sendTokenToServer(currentToken);
          // updateUIForPushEnabled(currentToken);
          setRegisteredTrue(currentToken);
        } else {
          // Show permission request.
          console.log(
            "No Instance ID token available. Request permission to generate one.",
          );
          setRequestPermission(true);
          // Show permission UI.
          // updateUIForPushPermissionRequired();
          // setTokenSentToServer(false);
        }
      })
      .catch((err) => {
        console.log(
          "An error occurred while retrieving token. ",
          err,
        );
        setError(true);
        // showToken('Error retrieving Instance ID token. ', err);
        // setTokenSentToServer(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Stack
      tokens={{ childrenGap: "m" }}
      style={{ paddingBottom: 8, paddingTop: 8 }}
      horizontalAlign="center"
    >
      <Text
        variant={"superLarge"}
        style={{
          color: getTheme().palette.themePrimary,
        }}
      >
        Novidade!
      </Text>
      <Text
        variant={"medium"}
        style={{
          color: getTheme().palette.themePrimary,
        }}
      >
        <b>Clube de Descontos:</b> Que tal ganhar brindes
        <b> grátis</b> da Festa Estranha, participar de{" "}
        <b>sorteios</b> e ainda ganhar <b>descontos</b> nos
        ingressos?
      </Text>
      {/* <PrimaryButton style={{ width: "100%" }}>
      Quero entrar no Clube de Descontos
    </PrimaryButton> */}
      {requestPermission && (
        <Text
          variant={"medium"}
          style={{
            color: getTheme().palette.themePrimary,
          }}
        >
          <b>Atenção: </b> Ative a permissão para receber
          notificações!
        </Text>
      )}
      {error && (
        <Text
          variant={"medium"}
          style={{
            color: "red",
          }}
        >
          <b>Erro: </b> Não foi possível ativar as
          notificações.
        </Text>
      )}
      <Stack style={{ width: "100%" }}>
        <Checkbox
          label={"Participar do Clube de Descontos"}
          checked={registered}
          disabled={loading}
          onChange={onRegisterClub}
        />
      </Stack>
    </Stack>
  );
};

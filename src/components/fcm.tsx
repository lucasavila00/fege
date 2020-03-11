import * as React from "react";
import { Stack } from "office-ui-fabric-react/lib/components/Stack";
import { Text } from "office-ui-fabric-react/lib/components/Text";
// import { ProgressIndicator } from "office-ui-fabric-react/lib/ProgressIndicator";
import { getTheme } from "office-ui-fabric-react/lib/Styling";
// import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { Checkbox } from "office-ui-fabric-react/lib/Checkbox";
import firebase from "gatsby-plugin-firebase";
import { useEffect, useState } from "react";

export const Fcm: React.FunctionComponent = () => {
  const [key, setKey] = useState(0);
  const setRegisteredTrue = () => {
    setRegistered(true);
    // salva no localstorage
    localStorage.setItem("registered", String(true));
  };
  const isRegistered = () => {
    if (typeof window == "undefined") {
      return false;
    }
    return Boolean(
      localStorage.getItem("registered") ?? false,
    );
  };
  const [registered, setRegistered] = useState(
    isRegistered(),
  );
  const [error, setError] = useState(false);
  const [
    requestPermission,
    setRequestPermission,
  ] = useState(false);
  useEffect(() => {
    const messaging = firebase.messaging();
    // messaging.usePublicVapidKey(
    //   "BO3sAUZ7udDO4VykzjTwOGHqOmcVKiLB2VIcyPimkvQ2AGSMzeDxamTngK41QAUNmyUJgGrsHe_y6rs8Ctnh9Sc",
    // );
    messaging.onMessage((payload) => {
      console.log("Message received. ", payload);
      // ...
    });
  }, []);

  const onRegisterClub = () => {
    const messaging = firebase.messaging();
    messaging
      .getToken()
      .then((currentToken) => {
        if (currentToken) {
          console.log({ currentToken });
          // sendTokenToServer(currentToken);
          // updateUIForPushEnabled(currentToken);
          setRegisteredTrue();
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

        setKey((k) => k + 1);
      })
      .catch((err) => {
        console.log(
          "An error occurred while retrieving token. ",
          err,
        );
        setError(true);
        // showToken('Error retrieving Instance ID token. ', err);
        // setTokenSentToServer(false);
        setKey((k) => k + 1);
      });
  };
  console.log({ registered });
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
          onChange={onRegisterClub}
          key={String(key)}
        />
      </Stack>
    </Stack>
  );
};

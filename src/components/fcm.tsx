import * as React from "react";
import { Stack } from "office-ui-fabric-react/lib/components/Stack";
import { Text } from "office-ui-fabric-react/lib/components/Text";
// import { ProgressIndicator } from "office-ui-fabric-react/lib/ProgressIndicator";
import { getTheme } from "office-ui-fabric-react/lib/Styling";
// import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { Checkbox } from "office-ui-fabric-react/lib/Checkbox";
import firebase from "gatsby-plugin-firebase";
import { useEffect, useState } from "react";
import { PrimaryButton } from "office-ui-fabric-react/lib/components/Button";
const defaultRegistration = {
  token: null as string | null,
  registered: false,
};

const CustomCheckBox: React.FunctionComponent<{
  checked: boolean;
}> = ({ checked }) => {
  const commonStyle: React.CSSProperties = {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: getTheme().palette.themePrimary,
  };
  if (checked) {
    const checkedStyle: React.CSSProperties = {
      backgroundColor: getTheme().palette.themePrimary,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
    return (
      <div style={{ ...commonStyle, ...checkedStyle }}>
        <svg
          fill={getTheme().palette.white}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16px"
          height="16px"
        >
          <path
            fill-rule="evenodd"
            d="M 22.59375 3.5 L 8.0625 18.1875 L 1.40625 11.5625 L 0 13 L 8.0625 21 L 24 4.9375 Z"
          />
        </svg>
      </div>
    );
  } else {
    return <div style={{ ...commonStyle }}></div>;
  }
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
    const stored =
      JSON.parse(
        localStorage.getItem("registration") ?? "null",
      ) ?? defaultRegistration;

    return stored;
  };
  const [registered, setRegistered] = useState(false);
  useEffect(() => {
    setRegistered(getRegistration().registered);
  });
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
  const requestPermissionCb = () => {
    console.log("Requesting permission...");
    // [START request_permission]
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        // In many cases once an app has been granted notification permission,
        // it should update its UI reflecting this.
        console.log("Notification permission granted.");
        setRequestPermission(false);
        setError(false);
        onRegisterClub();
      } else {
        setRequestPermission(false);
        setError(true);
        console.log("Unable to get permission to notify.");
      }
    });
    // [END request_permission]
  };
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
      {requestPermission && (
        <Stack
          style={{ width: "100%" }}
          tokens={{ childrenGap: "m" }}
        >
          <Text
            variant={"medium"}
            style={{
              color: getTheme().palette.themePrimary,
            }}
          >
            <b>Atenção: </b> Ative a permissão para receber
            notificações!
          </Text>
          <PrimaryButton
            style={{ width: "100%" }}
            onClick={requestPermissionCb}
          >
            Ativar notificações
          </PrimaryButton>
        </Stack>
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
      <Stack
        style={{ width: "100%", cursor: "pointer" }}
        onClick={onRegisterClub}
        horizontal={true}
        tokens={{ childrenGap: "s1" }}
        verticalAlign="center"
      >
        <CustomCheckBox checked={registered} />
        <Text
          variant="large"
          style={{
            color: loading
              ? getTheme().palette.themeLight
              : getTheme().palette.themeDarker,
          }}
        >
          Participar do Clube de Descontos
        </Text>
      </Stack>
    </Stack>
  );
};

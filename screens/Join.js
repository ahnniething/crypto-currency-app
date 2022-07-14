import React, { useRef, useState } from "react";
import styled from "styled-components/native";
import { BLACK_COLOR } from "../colors";
import { TextInput, Btn, BtnText } from "../components/common";
import auth from "@react-native-firebase/auth";
import { ActivityIndicator, Alert } from "react-native";

const Container = styled.View`
  background-color: ${BLACK_COLOR};
  flex: 1;
  align-items: center;
  color: white;
  padding: 60px 20px;
`;

const Join = () => {
  const passwordInput = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmitEmailEditing = () => {
    passwordInput.current.focus();
  };
  const onSubmitPasswordEditing = async () => {
    if (email === "" || password === "") {
      return Alert.alert("Fill in the form please");
    }
    //in case the user clicks more than one time, prevent executing the below code
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(userCredential);
      /** userCredential
      {
        "additionalUserInfo": {
            "isNewUser": true,
            "profile": null,
            "providerId": "password",
            "username": null
        },
        "user": {
            "displayName": null,
            "email": "ahnniething@crypto.com",
            "emailVerified": false,
            "isAnonymous": false,
            "metadata": [Object
            ],
            "phoneNumber": null,
            "photoURL": null,
            "providerData": [Array
            ],
            "providerId": "firebase",
            "refreshToken": "AOEOulaQ5J7_yGfmfqch5I00wPQG4_0jRSxuzc7KWZ7QrBGyMrucTkIeIDUnjNCgSbY1rB2x1bOjydljSP19BH44ltDnK4SW8uFukWiMXyW4zNaHukoiqGaooUTRKNiwaPO5_utOvJ2FzqTsOvcAUXHrwZQeVXVbTcehZ9PzOhfA5bPe-pZfts5Ge6uXS2mxZgaStg5J6PcEel2_0MOL2ToZsk028FyQ2Q",
            "tenantId": null,
            "uid": "AkW7mkfOA5W1nwo2Udf83742HJj1"
                }
            }
        */
    } catch (e) {
      switch (e.code) {
        case "auth/weak-password": {
          Alert.alert("Write a stronger password!");
        }
        case "auth/invalid-email": {
          Alert.alert("The email address is badly formatted");
        }
      }
    }
  };

  return (
    <Container>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        value={email}
        returnKeyType="next"
        onChangeText={(text) => setEmail(text)}
        onSubmitEditing={onSubmitEmailEditing}
        placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
      />
      <TextInput
        ref={passwordInput}
        placeholder="Password"
        secureTextEntry
        value={password}
        returnKeyType="done"
        onChangeText={(text) => setPassword(text)}
        onSubmitEditing={onSubmitPasswordEditing}
        placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
      />
      <Btn onPress={onSubmitPasswordEditing}>
        {loading ? (
          <ActivityIndicator color={"white"} />
        ) : (
          <BtnText>Create Account</BtnText>
        )}
      </Btn>
    </Container>
  );
};
export default Join;

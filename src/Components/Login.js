import React, { useState } from "react";
import {
  Dialog,
  DialogFooter,
  PrimaryButton,
  DefaultButton,
  TextField,
} from "@fluentui/react";
import { useAuth } from "../hooks/useUser";
import { useNavigate } from "react-router";
export default function LoginModal({ setIsModalOpen, isModalOpen }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuth } = useAuth();
  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const LoginIn = () => {
    setAuth(true);
    navigate("/dashboard");
    setIsModalOpen(false);
  };
  return (
    <>
      <Dialog
        hidden={!isModalOpen}
        onDismiss={() => setIsModalOpen(false)}
        dialogContentProps={{
          title: "Login",
        }}
      >
        <TextField
          label="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <DialogFooter>
          <PrimaryButton onClick={() => LoginIn()} text="Login" />
          <DefaultButton onClick={() => setIsModalOpen(false)} text="Cancel" />
        </DialogFooter>
      </Dialog>
    </>
  );
}

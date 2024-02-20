import React, { useState } from "react";
import {
  Dialog,
  DialogFooter,
  PrimaryButton,
  DefaultButton,
  TextField,
} from "@fluentui/react";
export default function LoginModal({ setIsModalOpen, isModalOpen }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

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
          <PrimaryButton
            onClick={() => console.log("Login clicked")}
            text="Login"
          />
          <DefaultButton onClick={() => setIsModalOpen(false)} text="Cancel" />
        </DialogFooter>
      </Dialog>
    </>
  );
}

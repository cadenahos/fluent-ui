import * as React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogFooter,
  PrimaryButton,
  DefaultButton,
  TextField,
} from "@fluentui/react";

const EditDialog = ({ item, onDismiss, onSave }) => {
  const [name, setName] = useState(item.author.name);
  const [accountNumber, setAccountNumber] = useState(item.accountNumber);
  const [accountType, setAccountType] = useState(item.accountType);
  const [balance, setBalance] = useState(item.balance);

  const handleSave = () => {
    onSave({ ...item, author: { name }, accountNumber, accountType, balance });
  };

  return (
    <div>
      <Dialog
        hidden={false}
        onDismiss={onDismiss}
        dialogContentProps={{
          title: "Edit Item",
        }}
      >
        <TextField
          label="Name"
          value={name}
          onChange={(_, value) => setName(value)}
        />
        <TextField
          label="Account Number"
          value={accountNumber}
          onChange={(_, value) => setAccountNumber(value)}
        />
        <TextField
          label="Account Type"
          value={accountType}
          onChange={(_, value) => setAccountType(value)}
        />
        <TextField
          label="Balance"
          value={balance}
          onChange={(_, value) => setBalance(value)}
        />

        <DialogFooter>
          <PrimaryButton onClick={handleSave} text="Save" />
          <DefaultButton onClick={onDismiss} text="Cancel" />
        </DialogFooter>
      </Dialog>
    </div>
  );
};

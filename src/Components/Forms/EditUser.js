import * as React from "react";
import { useState } from "react";
import { TextField } from "@fluentui/react";

const EditForm = ({ item }) => {
  const [name, setName] = useState(item.author.name);
  const [accountNumber, setAccountNumber] = useState(item.accountNumber);
  const [accountType, setAccountType] = useState(item.accountType);
  const [balance, setBalance] = useState(item.balance);

  return (
    <div>
      <TextField
        label="Name"
        value={name}
        name="name"
        onChange={(_, value) => setName(value)}
      />
      <TextField
        label="Account Number"
        name="accountNumber"
        value={accountNumber}
        onChange={(_, value) => setAccountNumber(value)}
        disabled
      />
      <TextField
        label="Account Type"
        name="accountType"
        value={accountType}
        onChange={(_, value) => setAccountType(value)}
      />
      <TextField
        label="Balance"
        value={balance}
        name="balance"
        onChange={(_, value) => setBalance(value)}
      />
    </div>
  );
};

export default EditForm;

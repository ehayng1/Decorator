import Image from "next/image";
import React from "react";
import ReactDOM from "react-dom";
import withTheme from "../theme";
import withAuthorization from "./authorization";
import withDarkMode from "../darkmode";

const customTheme = {
  border: "2px solid teal",
  fontFamily: "monospace",
  padding: "3rem",
  margin: "3rem",
};

const adminUser = {
  id: 1,
  name: "Alice the Admin",
  role: "admin",
  email: "alice@example.com",
};

const regularUser = {
  id: 2,
  name: "Bob the Regular user",
  role: "user",
  email: "bob@example.com",
};

function AdminPanel({ user }) {
  return (
    <>
      <div>Welcome to the admin panel, {user.name}!</div>
    </>
  );
}

const AuthorizedPanel = withAuthorization(["admin"])(AdminPanel);

const DarkPanel = withTheme(customTheme)(
  withAuthorization(["admin", "user"])(withDarkMode(true)(AdminPanel))
);

export default function HomePage() {
  return (
    <>
      <AuthorizedPanel user={adminUser}></AuthorizedPanel>
      <DarkPanel user={regularUser}></DarkPanel>
    </>
  );
}

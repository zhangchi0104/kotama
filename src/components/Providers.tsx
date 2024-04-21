"use client";
import React from "react";
import FlattenProviders from "./ComposeProviders";
import { store } from "../atoms/store";
import BreakpointDetector from "./utils/BreakpointDetector";
import { Provider as JotaiProvider } from "jotai";
import { UserProvider } from "@auth0/nextjs-auth0/client";
const Providers = ({ children }) => {
  return (
    <FlattenProviders>
      <UserProvider />
      <JotaiProvider store={store} />
      <BreakpointDetector />

      {children}
    </FlattenProviders>
  );
};

export default Providers;

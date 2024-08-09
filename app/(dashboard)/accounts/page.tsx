import React from "react";
import { client } from "@/lib/hono";
import { z } from "zod";

const Accounts = () => {
  const account = client.api.accounts[":id"].$get({
    param: {
      id: "12345",
    },
  });

  const accountss = client.api.accounts.$get();
  return <div>Accounts</div>;
};

export default Accounts;

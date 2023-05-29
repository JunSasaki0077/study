import React from "react";

import Head from "next/head";
import { Header } from "@/components/header";

import { Users as UsersComponent } from "@/components/Users";

const Users = () => {
  return (
    <div>
      <Head>
        <title>Users</title>
      </Head>
      <Header />
      <UsersComponent />
    </div>
  );
};

export default Users;

import { auth } from "@/auth";
import { getUserForSidebar } from "@/lib/data";
import React from "react";

const Chats = async () => {
  const session = await auth();
  console.log(session);
  // const chats = session?.user ? await getUserForSidebar(session.user.id) : [];
  return (
    <nav className="flex-1 overflow-y-auto">
      <ul></ul>
    </nav>
  );
};

export default Chats;

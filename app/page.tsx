"use client";

import Image from "next/image";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import {
  Authenticated,
  Unauthenticated,
  useQuery,
  useMutation,
} from "convex/react";
import { api } from "../convex/_generated/api";

export default function Home() {
  const createDocument = useMutation(api.document.createDocument);

  const getDocuemnts = useQuery(api.document.getDocuments);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <button
          onClick={() =>
            createDocument({
              title: "Asem na Waka",
            })
          }
        >
          Click to insert
        </button>
        {getDocuemnts?.map((item) => {
          return <p key={item._id}>{item.title}</p>;
        })}
      </Authenticated>
    </main>
  );
}

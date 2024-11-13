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
import DocumentCard from "@/components/DocumentCard";
import { Button } from "@/components/ui/button";
import DocumentCreateButton from "@/components/DocumentCreateButton";

export default function Home() {

  const getDocuemnts = useQuery(api.document.getDocuments);

  return (
    <main className="p-24">
      <div className="flex items-center justify-between mb-8">
        <h1>My Documents</h1>

        <DocumentCreateButton />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {getDocuemnts?.map((document) => {
          return <DocumentCard document={document} />;
        })}
      </div>
    </main>
  );
}

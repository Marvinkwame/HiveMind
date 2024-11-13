"use client";

import React from "react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import {
  Authenticated,
  Unauthenticated,
  useQuery,
  useMutation,
} from "convex/react";
import Container from "./Container";
import Link from "next/link";
import ToggleMode from "./ToggleMode";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-20 left-0 border-b border-b-bar backdrop-blur-[12px]">
      <Container className="flex items-center justify-between h-[50px]">
        <Link href="/" className="flex items-center text-md">
          HiveMind
        </Link>

        <div className="flex items-center gap-4">
          <Unauthenticated>
            <SignInButton />
          </Unauthenticated>
          <Authenticated>
            <UserButton />
          </Authenticated>

          <ToggleMode />
        </div>
      </Container>
    </header>
  );
};

export default Header;

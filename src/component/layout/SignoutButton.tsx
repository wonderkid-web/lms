"use client";

import { signOut } from "next-auth/react";

function SignoutButton() {
  return (
    <button
      className="ml-auto flex items-center justify-center rounded-sm bg-red-600 px-4 py-1 text-sm text-white"
      onClick={async () => await signOut()}
    >
      keluar
    </button>
  );
}

export default SignoutButton;

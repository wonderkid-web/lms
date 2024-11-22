"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

function SignoutButton() {
  return (
    <button
      className="ml-auto flex items-center justify-center rounded-md bg-red-600 px-2 gap-1 py-1 text-sm text-white"
      onClick={async () => await signOut()}
    >
      keluar

      <LogOut size={12} className="mt-1 font-bold" />
    </button>
  );
}

export default SignoutButton;

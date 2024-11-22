import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className, ...props }: Props) {
  return (
    <main
      {...props}
      className={`container mx-auto max-h-screen min-h-screen max-w-screen-sm overflow-auto px-3 py-5 flex border-x-2 flex-col gap-5 ${className}`}
    >
      {children}

    </main>
  );
}

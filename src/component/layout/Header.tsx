import React from "react";
import BackButton from "./BackButton";
import SignoutButton from "./SignoutButton";

type Props = {
  text: string;
  className?: string;
  back?: boolean;
};

export default function Header({
  text,
  back = true,
  className,
  ...props
}: Props) {
  return (
    <section
      className={`flex items-center justify-between gap-2 text-3xl font-semibold ${className}`}
      {...props}
    >
      {back && <BackButton />}
      {text}
      <SignoutButton />
    </section>
  );
}

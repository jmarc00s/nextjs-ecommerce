import React, { ReactNode } from "react";

type ContentProps = {
  children: ReactNode;
};

export const Content = ({ children }: ContentProps) => {
  return (
    <main className="h-[calc(100vh-64px-52px)] overflow-auto container mx-auto py-8">
      {children}
    </main>
  );
};

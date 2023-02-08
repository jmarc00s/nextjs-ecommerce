import React, { ReactNode } from "react";

type ContentProps = {
  children: ReactNode;
};

export const Content = ({ children }: ContentProps) => {
  return (
    <main className="h-[calc(100vh-64px-52px)] overflow-auto overflow-x-hidden bg-gray-100">
      <div className="container mx-auto pt-4 pb-8 ">{children}</div>
    </main>
  );
};

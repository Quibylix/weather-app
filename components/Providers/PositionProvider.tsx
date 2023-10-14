"use client";

import { PositionContext } from "@/contexts";
import { usePosition } from "@/hooks";

type PositionProviderProps = {
  children: React.ReactNode;
};

export default function PositionProvider({ children }: PositionProviderProps) {
  const position = usePosition();

  return (
    <PositionContext.Provider value={{ position }}>
      {children}
    </PositionContext.Provider>
  );
}

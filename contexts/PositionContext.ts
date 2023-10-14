import { Position } from "@/models";
import { createContext } from "react";

type PositionContextValue = { position: Position | null };

const PositionContext = createContext<PositionContextValue>({
  position: null,
});

export default PositionContext;

import { PositionContext } from "@/contexts";
import { useContext } from "react";

export default function usePositionContext() {
  return useContext(PositionContext);
}

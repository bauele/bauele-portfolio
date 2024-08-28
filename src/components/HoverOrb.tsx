import { ReactNode } from "react";
import "./HoverOrb.css";

interface Props {
  children: ReactNode;
}

export const HoverOrb = ({ children }: Props) => {
  return (
    <div className="hover-orb">
      <div className="hover-orb-background" />
      {children}
    </div>
  );
};

import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedP } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedP: (value: SelectedP) => void;
};

const ActionButton = ({ children, setSelectedP }: Props) => {
  return (
    <AnchorLink
      className="border-node"
      onClick={() => setSelectedP(SelectedP.FreeDayPass)}
      href={`#${SelectedP.FreeDayPass}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;

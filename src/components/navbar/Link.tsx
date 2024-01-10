import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedP } from "@/shared/types";
type Props = {
  page: string;
  selectedP: SelectedP;
  setSelectedP: (value: SelectedP) => void;
};

const Link = ({ page, selectedP, setSelectedP }: Props) => {
  const smallCaseP = page.toLowerCase().replace(/ /g, "") as SelectedP;
  return (
    <AnchorLink
      className={`${selectedP === smallCaseP ? "tex-primary-500" : ""}
      transition duration-500 hover:text-primary-100`}
      href={`#${smallCaseP}`}
      onClick={() => setSelectedP(smallCaseP)}
    >
      {page}
    </AnchorLink>
  );
};
export default Link;

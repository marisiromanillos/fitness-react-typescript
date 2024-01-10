import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedP } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  selectedP: SelectedP;
  setSelectedP: (value: SelectedP) => void;
};

const Navbar = (selectedP: string, setSelectedP: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [menuToggled, setMenuToggled] = useState<boolean>(false);
  const aboveMScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}
            <img alt="logo" src={Logo} />
            {/* right side */}
            {aboveMScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedP={selectedP}
                    setSelectedP={setSelectedP}
                  />
                  <Link
                    page="Membership"
                    selectedP={selectedP}
                    setSelectedP={setSelectedP}
                  />
                  <Link
                    page="Our Classes"
                    selectedP={selectedP}
                    setSelectedP={setSelectedP}
                  />
                  <Link
                    page="Free Day Pass"
                    selectedP={selectedP}
                    setSelectedP={setSelectedP}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedP={setSelectedP}>
                    Become a member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setMenuToggled(!menuToggled)}
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {!aboveMScreens && menuToggled && (
        <div className="fiexd right-0 botton-0 z-50 h-full w-[300px] bg-primary-300 drop-shadow-xl">
          {/* close icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setMenuToggled(!menuToggled)}>
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
          </div>
          {/* menu items */}
          <div className="ml-[33%] flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedP={selectedP}
              setSelectedP={setSelectedP}
            />
            <Link
              page="Membership"
              selectedP={selectedP}
              setSelectedP={setSelectedP}
            />
            <Link
              page="Our Classes"
              selectedP={selectedP}
              setSelectedP={setSelectedP}
            />
            <Link
              page="Free Day Pass"
              selectedP={selectedP}
              setSelectedP={setSelectedP}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

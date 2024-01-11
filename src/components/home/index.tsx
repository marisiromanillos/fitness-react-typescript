import useMediaQuery from "@/hooks/useMediaQuery";
import { setSelectedP } from "@/shared/ActionButton";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import Adidas from "@/assets/Adidas.png";
import Nike from "@/assets/Nike.png";
import Beats from "@/assets/Beats.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedP } from "@/shared/types";

type Props = {
  setSelectedP: (value: SelectP) => void;
};

const Home = ({ setSelectedP }: Props) => {
  const aboveMediumSc = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-100 md:h-full md:pb-0">
      {/* image & main header */}
      <div>
        {/* main header */}
        <div>
          {/* headings */}
          <div>
            <div>
              <div>
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p>
              Welcome to Be Strong, where fitness meets community! At Be Strong,
              we are dedicated to helping you achieve your health and wellness
              goals in a supportive and motivating environment. Our
              state-of-the-art facilities are equipped with the latest fitness
              technology, ensuring a dynamic workout experience for everyone,
              from beginners to seasoned athletes.
            </p>
          </div>
          {/* actions */}
          <div>
            <ActionButton setSelectedP={setSelectedP}>Join Now</ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 undeline"
              hover:text-secondary-500
              onClick={() => setSelectedP(SelectedP.FreeDayPass)}
              href={`#${SelectedP.FreeDayPass}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>
        {/* image */}
        <div>
          <img alt="home-page-graphic" src={HomePageGraphic} />
        </div>
      </div>
      {/* sponsors */}
      {aboveMediumSc && (
        <div>
          <div>
            <div>
              <img alt="nike-sponsor" src={Nike} />
              <img alt="adidas-sponsor" src={Adidas} />
              <img alt="beats-sponsor" src={Beats} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default Home;

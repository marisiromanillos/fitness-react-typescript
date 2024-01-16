import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedP } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import Adidas from "@/assets/Adidas.png";
import Nike from "@/assets/Nike.png";
import Beats from "@/assets/Beats.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {motion} from "framer-motion"

type Props = {
  setSelectedP: (value: SelectedP) => void;
};

const Home = ({ setSelectedP }: Props) => {
  const aboveMediumSc = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-black py-[100px] md:h-full md:pb-0">
      {/* image & main header */}
      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        {/* main header */}
        <div className="z-10 mt-0 md:basis-3/5">
          {/* headings */}
          <motion.div className="md:-mt-20" initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{duration: 0.5}} variants={{hidden:{opacity:0, x:-50},
        visible:{opacity: 1, x:0}}}>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:z-[-1] before:content-bestrongtext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p className="mt-8 text-sm md:text-start">
              Welcome to Be Strong, where fitness meets community! 
              At Be Strong, we are dedicated to helping you achieve your health and wellness
              goals in a supportive and motivating environment. Our
              state-of-the-art facilities are equipped with the latest fitness
              technology, ensuring a dynamic workout experience for everyone,
              from beginners to seasoned athletes.
            </p>
          </motion.div>
          {/* actions */}
          <motion.div className="mt-8 flex items-center gap-8" initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{ delay:0.2,duration: 0.5}} variants={{hidden:{opacity:0, x:-50},
        visible:{opacity: 1, x:0}}}>
            <ActionButton setSelectedP={setSelectedP}>Join Now</ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline"
              onClick={() => setSelectedP(SelectedP.FreeDayPass)}
              href={`#${SelectedP.FreeDayPass}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* image hero */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img alt="home-page-graphic" src={HomePageGraphic} />
        </div>
      </div>
      {/* sponsors */}
      {aboveMediumSc && (
        <div className="h-auto w-full bg-black py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-100px items-center justify-between gap-8">
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

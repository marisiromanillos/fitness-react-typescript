import { BenefitType, SelectedP } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import {motion} from "framer-motion"
import TitleText from "@/shared/TitleText"
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title:"Techonoly meets strength",
        description: "Where the latest technological solutions enhance every aspect of your fitness journey. Embrace the future of strength training with us"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title:"Workout with muscle-minded people like you",
        description: "Our workouts are not just exercises; they are a collective pursuit of wellness, challenging each other to reach new heights. Embrace the motivation that comes from training alongside those who understand and share your fitness goals."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title:"Science PT's",
        description: "Our expert team of science-driven personal trainers employs evidence-based methodologies to tailor fitness programs uniquely to your body and goals"
    },

];

const container  =  {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
      once: true,
        }
    }
}

type Props = {
  setSelectedP: (value: SelectedP) => void;

  };

const Benefits = ({setSelectedP}: Props) => {
    return <>
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20 md:mt-[150px]">
        {/* header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{duration: 0.5}} variants={{hidden:{opacity:0, x:-50},
        visible:{opacity: 1, x:0}}} className="md:w-3/5 md:my-5">
            <TitleText>
                WHERE ATHLETES ARE BUILT
            </TitleText>
            <p className="my-5 text-sm text-gray-500">
            Joining Be Strong Gym offers numerous benefits for individuals looking to enhance their fitness journey. Our state-of-the-art facilities provide a welcoming and motivating environment for all fitness levels. With a diverse range of cutting-edge equipment and expert trainers, members can tailor their workouts to achieve their specific goals efficiently. The supportive community at Be Strong Gym fosters a sense of camaraderie, making fitness an enjoyable and social experience. Whether you're a beginner or a seasoned fitness enthusiast, our personalized training programs and classes cater to your unique needs.  
            </p>
        </motion.div>
        {/* benefits */}
        <motion.div 
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} variants={container}
        className="mt-5 items-center justify-between gap-8 md:flex">
            {benefits.map((benefit: BenefitType) => (
                <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} setSelectedP={setSelectedP}/>
            ))}
        </motion.div>
        {/* graphics & description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            {/* image */}
            <img className="mx-auto" alt="ronie coleman benefits section" src={BenefitsPageGraphic}/>

            {/* description */}
            <div>
                {/* title */}
                <div>
                    <div className="mt-6">
                        <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{duration: 0.5}} variants={{hidden:{opacity:0, x:50},
        visible:{opacity: 1, x:0}}}>
                            <TitleText>
                                MILLIONS OF KILOGRAMS BEING LIFTED
                            </TitleText>
                        </motion.div>
                    </div>
                </div>
                {/* description */}
                <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{delay: 0.2, duration: 0.5}} variants={{hidden:{opacity:0, x:50},
        visible:{opacity: 1, x:0}}}>
                    <p className="my-5 text-black">The supportive community at Be Strong Gym fosters a sense of camaraderie, making fitness an enjoyable and social experience. Whether you're a beginner or a seasoned fitness enthusiast, our personalized training programs and classes cater to your unique needs. </p>
                    <p className="mb-5 text-black">Experience the positive impact on your physical and mental well-being as you embark on a transformative fitness journey with Be Strong Gym.</p>
                </motion.div>
                {/* button */}
                <div className=" bg-primary-pink hover:bg-primary-blue text-white font-bold py-2 px-4 rounded text-center">
                    <div>
                        <ActionButton setSelectedP={setSelectedP} >
                            Join Now
                        </ActionButton>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
}
export default Benefits
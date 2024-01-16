import { SelectedP, ClassType } from "@/shared/types"
import class1 from "@/assets/class1.png"
import class2 from "@/assets/class2.png"
import class3 from "@/assets/class3.png"
import class4 from "@/assets/class4.png"
import class5 from "@/assets/class5.png"
import class6 from "@/assets/class6.png"
import { motion } from "framer-motion"
import Class from "./Class"

const classes: Array<ClassType> = [
    {
        name: "MedBall Classes",
        description: "Elevate your fitness routine with our MedBall Classes at Be Strong Gym. Experience a dynamic blend of strength, agility, and cardio as our expert instructors guide you through innovative exercises using medicine balls.",
        image: class1,
    },
    {
        name: "HIT Classes",
        description: "Revitalize your fitness journey with our High-Intensity Training (HIT) Classes at Be Strong Gym. Ignite your metabolism and push your limits as our skilled instructors lead you through heart-pumping, full-body workouts",
        image: class2,
    },
    {
        name: "BodyTone Classes",
        description: "Led by expert instructors, our Body Tone Classes combine resistance training and functional movements to enhance muscle definition and improve overall body composition.",
        image: class3,
    },
    {
        name: "Crossfit Classes",
        description: "These dynamic classes blend functional movements, high-intensity intervals, and varied workouts to optimize your cardiovascular fitness, strength, and agility",
        image: class4,
    },
    {
        name: "Circuits Classes",
        description: "Guided by our expert trainers, these high-energy sessions take you through a series of dynamic exercises at different stations, targeting various muscle groups and boosting cardiovascular endurance.",
        image: class5,
    },
    {
        name: "Lifting Classes",
        description: "Whether you're aiming to build muscle, improve posture, or boost overall strength, our 'Learn to Lift' classes provide a supportive environment to master proper form and gain confidence in the gym.",
        image: class6,
    }
]

type Props = {
    setSelectedP: (value: SelectedP) => void;
}

const OurClasses = ({setSelectedP}: Props) => {
    return <>
    <section id="ourclasses" className="w-full bg-black py-40">
        <motion.div onViewportEnter={() => setSelectedP(SelectedP.OurClasses)}>
                <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{duration: 0.5}} variants={{hidden:{opacity:0, x:-50},
        visible:{opacity: 1, x:0}}} className="mx-auto w-5/6">
                    <div className="md:w-3/5">
                        <h1 className="basis-3/5 font-monserrat text-2xl font-bold">
                            Our Classes
                        </h1>
                        <p className="py-5">
                        Choose from a variety of classes, including invigorating group workouts, specialized training sessions, and holistic wellness programs. At Be Strong Gym, we believe in the power of diversity, offering something for everyone on their fitness journey. Join us, break a sweat, and unleash your full potential in a fun and empowering class environment.
                        </p>
                    </div>
                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {classes.map((item: ClassType, index) => (
                            <Class key={`${item.name}-${index}`} name={item.name} description={item.description} image={item.image}/>
                        ))}
                    </ul>
                </div>
        </motion.div>
    </section>
    </>
}
export default OurClasses
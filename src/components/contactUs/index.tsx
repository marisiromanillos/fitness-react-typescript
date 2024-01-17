import { SelectedP } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsGraphic.png"
import TitleText from "@/shared/TitleText";


type Props ={
    setSelectedP: (value: SelectedP) => void
}


const ContactUs = ({setSelectedP}: Props) => {

    const inputStyles = `ms-[50px] mb-2.5 md:w-[500px] w-5/6 rounded-lg bg-primary-500 px-5 py-3 placeholder-black`
    const ptext = `mt-1 text-primary-500 ms-[50px] mb-2.5 md:w-[500px] w-5/6 `;

    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

    return <>
    <section id="freedaypass" className="mx-auto pt-24 pb-32 bg-primary-blue">
        <motion.div onViewportEnter={() => setSelectedP(SelectedP.FreeDayPass)}>
            {/* header */}
            <motion.div className="md:w-3/5" initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{duration: 0.5}} variants={{hidden:{opacity:0, y:50},
        visible:{opacity: 1, y:0}}}>
            <div className="px-[50px]">
            <TitleText>
                Get Your Free Pass
            </TitleText>
            <p className="my-5">
            Contact us today and claim your free day pass to the gym! Experience our state-of-the-art facilities, cutting-edge equipment, and supportive community. Take the first step towards your fitness goals with a complimentary day at our gym. We look forward to welcoming you to a healthier, stronger you!
            </p>
            </div>
            </motion.div>
            {/* form & image */}
            <div className="mt-10 mr-[50px] justify-between gap-8 md:flex">
                <motion.div className="mt-10 basis-3/5 md:mt-0" initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{duration: 0.5}} variants={{hidden:{opacity:0, x:-50},
        visible:{opacity: 1, x:0}}}>
                    <form target="_blank" onSubmit={onSubmit} action='https://formsubmit.co/el/gevaxa' method="POST" >
                        <input className={inputStyles} type="text"  placeholder="Name" {...register("name", {
                            required: true,
                            maxLength: 100,

                        })}/>
                        {errors.name && (
                            <p className={ptext}>
                                {errors.name.type === "required" && "This field is required."}
                                {errors.name.type === "maxLength" && "Max Length is a 100 characters"}
                            </p>
                        )}
                        <input className={inputStyles} type="email"  placeholder="Email" {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,

                        })}/>
                       {errors.email && (
                <p className={ptext}>
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
                <textarea className={inputStyles} rows={4} cols={50} placeholder="Message if you have special requirements" {...register("message", {
                            required: true,
                            maxLength: 2000,

                        })}/>
                        {errors.message && (
                            <p className={ptext}>
                                {errors.message.type === "required" && "This field is required."}
                                {errors.message.type === "maxLength" && "Max Length is a 2000 characters"}
                            </p>
                        )}
                        <button type="submit" className="mt-1 rounded-lg bg-black px-20 py-3 ms-[50px] mb-2.5 md:w-[500px] w-5/6 transition duration-500 hover:text-black ">
                            Submit
                        </button>
                    </form>
                </motion.div>
                <motion.div className="relative mt-16 basis-2/5 md:mt-0" initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{delay:0.2, duration: 0.5}} variants={{hidden:{opacity:0, y:50},
        visible:{opacity: 1, y:0}}}>
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-0  md:before:content-bestrongtext md:before:content-bestrongtext-mb-10" >
            <img className="w-full ms-[25px] mb-2.5  md:flex md:justify-center  items-center "  alt="free-day-pass" src={ContactUsPageGraphic}/>
            </div>
                </motion.div>
            </div>
        </motion.div>
        </section></>
}

export default ContactUs;
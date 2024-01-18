import Weight from "@/assets/Weight.png"

type Props = {}

const Footer = (props: Props) => {
    return <>
    <footer className="bg-black py-16">
        <div className="justify-content mx-auto w-5/6  gap-16 md:flex md:justify-between">
        <div>
            <img alt="logo" className="w-[50px] py-5" src={Weight}/>
        </div>
        <div ><p className="text-primary-pink font-bold">Stay Connected </p>

<p className="py-3 font-bold">Join our community for the latest updates, exclusive offers, and fitness tips.</p></div>
        <div className="py-3 ">© 2023 Be Strong Gym. <p>All rights reserved.
Privacy Policy | Terms of Service</p></div> 
        </div>
    </footer>
    </>
}
export default Footer;
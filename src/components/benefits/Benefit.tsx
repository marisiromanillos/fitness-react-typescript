import { SelectedP } from "@/shared/types"


import AnchorLink from "react-anchor-link-smooth-scroll"


type Props = {
    icon: JSX.Element,
    title: string,
    description: string,
    setSelectedP: (value: SelectedP ) => void
}

const Benefit = ({icon, title, description, setSelectedP}: Props) => {
    return<>
    
    <div className="mt-5 rounded-md border-2 border-white-100 px-5 py-16 text-center">
        <div className="mb-4 flex justify-center">
            <div className="rounded-full border-2 border-white-100 bg-primary-blue">
                    {icon}
            </div>
        </div>
        <h4 className="font-bold text-black">{title}</h4>
        <p className="my-3 text-black">{description}</p>
        <AnchorLink
              className="text-sm font-bold text-black underline" 
              onClick={() => setSelectedP(SelectedP.FreeDayPass)}
              href={`#${SelectedP.FreeDayPass}`}
            >
              <p className="hover:text-primary-blue">Learn More</p>
            </AnchorLink>
    </div>
    </>
}
export default Benefit

import React from "react";

type Props = {
    children: React.ReactNode
}

const TitleText = ({children}: Props) => {
    return <><h1 className="basis-3/5 font-monserrat text-2xl font-bold text-white" >
                {children}
    </h1></>
}
export default TitleText;
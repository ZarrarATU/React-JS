import { useParams } from "react-router-dom";

let About = ()=>{

    let {aboutuser} = useParams()

    return (
        <div className="about">
            THIS IS A ABOUT SECTION SAAR PHULL SAPPART SAAR {aboutuser}
        </div>
    )
}

export default About;
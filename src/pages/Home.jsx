import "./style.css"

import templateData from '../data/dataFile'
import Intro from "../components/Intro"
import Template from "../components/Template"

export default function Home() {

    return <>
          <Intro />

        {templateData && templateData["homePageData"].map((item) => {
            console.log("item:" + item)
            return <Template info={item} />
        })}

    </>
}

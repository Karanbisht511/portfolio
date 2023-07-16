import "./style.css"

import templateData from '../data/dataFile'
import Intro from "../components/Intro"
import Template from "../components/Template"

export default function Home() {

    return <>
          <Intro />

        {templateData && templateData["homePageData"].map((item,index) => {
            console.log("item:" + item)
            return <Template key={index} info={item} />
        })}

    </>
}

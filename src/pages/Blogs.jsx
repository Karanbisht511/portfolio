import templateData from '../data/dataFile'
import Template from "../components/Template"

export default function Blogs() {
    return <>
    <div id='blog'>
     <section id="introduction" class="center page-detail">
      <p>
        <b>
          <span style={{color: 'darkcyan'}}>read</span
          ><span style={{color: 'blueviolet'}}> my blogs</span>
        </b>
      </p>
    </section>

        {templateData && templateData['blogData'].map((item) => {
            console.log("item:"+item)
            return <Template info={item} />
        })}
</div>
    </>
}

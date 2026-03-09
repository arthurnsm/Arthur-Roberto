import Section from "./section";
import Repo from "./repo";
export default function Project (){
    return(
    <section className="w-full px-30">
        <Section title="projetos"/>
        <div className="flex mt-40">
            <Repo/>
        </div>
    </section>
    )
}
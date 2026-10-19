import { FeaturesCard } from "./FeaturesCard";

export function Features(){
    return (
      <main className="grid grid-cols-3 gap-8 px-20">
        <FeaturesCard tag={"Free"} title={"Open source"} description={"Read the code and use it in any project."}/>
        
        <FeaturesCard tag={"Small"} title={"Lightweight"} description={"Import only the components the page uses."}/>
        
        <FeaturesCard tag={"Simple"} title={"Easy to learn"} description={"Every component takes a few plain props."}/>
        
      </main>
    )
}
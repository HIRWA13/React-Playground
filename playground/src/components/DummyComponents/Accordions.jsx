import QnA from "../../assets/QnA";
import Accordion from "./Accordion";
export default function Accordions() {
   
  
    const getAccordions = QnA.map(qn => {
        return <Accordion key={qn.id} questions={qn}/>
    })

    return (
        <>
            <section className="w-3/4  mx-auto mt-10 grid grid-cols-3 gap-10">
               {getAccordions}
            </section>
        </>
    );
}
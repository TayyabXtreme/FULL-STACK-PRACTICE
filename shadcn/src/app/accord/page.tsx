import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  
const AccordPage = () => {
    const faq=[
        "question1","text1",
        "answer1","text1",
    ]
  return (
    <div className='flex justify-center items-center h-full'>
        <main className='w-[500px] p-4'>
            {
                faq.map((item,index)=>{
                    if(index%2===0){
                        return <Accordion type="single" collapsible>
                        <AccordionItem value={item}>
                          <AccordionTrigger>{item}</AccordionTrigger>
                          <AccordionContent>
                            {faq[index+1]}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    }
                })
            }
        
        </main>
       

    </div>
  )
}

export default AccordPage
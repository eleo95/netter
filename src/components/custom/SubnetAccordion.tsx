import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

interface Props {
  subnets: Array<NetworkInfo & Requirement>
}
export default function SubnetAccordion({ subnets }: Props) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue={subnets[0].id}
    >
      {subnets.map(
        ({ id, name, base, bitmask, mask, first, last, broadcast }) => {
          return (
            <AccordionItem key={id} value={id}>
              <AccordionTrigger>{name}</AccordionTrigger>
              <AccordionContent>
                <main className="flex flex-col gap-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div>Subnet Address</div>
                    </div>
                    <div className="flex flex-col text-right">
                      {base}/{bitmask}
                      <div className="text-xs opacity-75">{mask}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>Available Address Range</div>

                    <div>
                      {first} - {last?.split('.')[3]}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>Broadcast Address</div>

                    <div>{broadcast}</div>
                  </div>
                </main>
              </AccordionContent>
            </AccordionItem>
          )
        }
      )}
    </Accordion>
  )
}

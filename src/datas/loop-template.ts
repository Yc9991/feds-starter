import type { ExampleTypes, LoopTemplate } from "@/types"

export const loopTemplateExample: LoopTemplate<ExampleTypes>[] = [
    { dataType: 'string', caption: 'ADDRESS', dataField: '-ADDRESSGroup', items: ['Address', 'City', 'Country', 'PostalCode'] },
]
import { DxForm, DxSimpleItem, DxValidationRule, DxGroupItem } from 'devextreme-vue/form'

export interface TableForm<T = Record<string, any>> {
    input: {
        schema?: any, 
        list: T,
        group?: (InstanceType<typeof DxGroupItem>['$props'] & { keys: (keyof K)[] })[],
        custom?: {
            [K in keyof T]?: InstanceType<typeof DxSimpleItem>['$props']
        },
        validation?: {
            [K in keyof T]?: InstanceType<typeof DxValidationRule>['$props']
        }
    },
    form?: Omit<InstanceType<typeof DxForm>['$props'], 'formData'>,

}
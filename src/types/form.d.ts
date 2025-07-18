import { DxForm, DxSimpleItem, DxValidationRule } from 'devextreme-vue/form'

export interface TableForm<T = Record<string, any>> {
    input: {
        list: T,
        include?: (keyof T)[],
        exclude?: (keyof T)[],
        custom?: {
            [K in keyof T]?: InstanceType<typeof DxSimpleItem>['$props']
        },
        validation?: {
            [K in keyof T]?: InstanceType<typeof DxValidationRule>['$props']
        }
    },
    form?: Omit<InstanceType<typeof DxForm>['$props'], 'formData'>,

}
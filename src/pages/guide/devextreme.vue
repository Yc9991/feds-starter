<script setup lang="ts">
const exampleStore = useExampleStore()
exampleStore.fetching().get()
exampleStore.fetching().getRegion()

let openColumn3 = () => {
    exampleStore.layout = 'ThreeColumnsMidExpanded'
}

</script>
<template>
    <div class="w-full overflow-hidden">
        <TableDrawer @beforeClose="exampleStore.resetData" v-model:layout="exampleStore.layout"
            :midColumnTitle="exampleStore.dataCurrent?.CompanyName">
            <template #startColumn>
                <PageExample />
            </template>

            <template #midColumn>
                <PageExampleForm />
            </template>

            <template #midColumnButton>
                <VBtn @click="openColumn3()" color="primary" variant="tonal">Open
                    Column 3</VBtn>
            </template>

            <template #endColumnButton>
                <VBtn color="primary" variant="text" icon="mdi-information"></VBtn>
            </template>

            <template #endColumn>
                <div class="p-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime molestiae voluptatum nemo natus?
                    Sunt libero eveniet atque. Vitae dolores ipsa quibusdam quis totam vel id reprehenderit distinctio
                    dolore nesciunt earum, incidunt voluptas? Non earum sit ullam distinctio labore dolorem corporis
                    voluptatibus nobis illo, ipsam et.
                </div>
            </template>
        </TableDrawer>
    </div>

</template>
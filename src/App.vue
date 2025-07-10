<script setup lang="ts">


</script>
<template>
  <div>
    <div v-show="false">
      <dx-license>
      </dx-license>
    </div>

    <div v-if="false">
      <dx-license-trigger></dx-license-trigger>
    </div>

    <div>
      <VApp>
        <div class="p-6">
          <RouterView />
    
        </div>
  
      </VApp>

    </div>
  </div>
</template>
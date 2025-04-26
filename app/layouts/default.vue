<script setup lang="ts">
    import { useScroll } from '@vueuse/core'

    const el = useTemplateRef<HTMLElement>('el')
    const { y } = useScroll(el);
    const navbarVisible = ref(true);

    watch(y, (newValue, oldValue) => {
        //Set navbar visibility
        if(newValue>52){
            if(newValue > oldValue){
                navbarVisible.value = false;
            }else{
                navbarVisible.value = true;
            }
        }   
    })
</script>

<template>
    <div ref="el"  class="relative w-full h-full overflow-y-auto overflow-x-hidden bg-custom-green">
        <AppBanner/>
        <AppNavbar :visible="navbarVisible"/>
        <slot/>
    </div>
</template>
<script setup lang="ts">
    defineProps<{
        item: string
    }>()
</script>

<template>
    <article class="w-[280px] h-[215px] flex itemss-center justify-center bg-white rounded-lg">
        {{ item }}
    </article>
</template>
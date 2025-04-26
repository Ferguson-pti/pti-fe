<script setup lang="ts">
    defineProps<{
        styleClass: string
    }>();
</script>

<template>
    <button v-bind="$attrs" :class="`${styleClass} px-4.5 py-3.5 text-xs font-lexent tracking-widest font-medium rounded-lg cursor-pointer`">
        <slot/>
    </button>
</template>
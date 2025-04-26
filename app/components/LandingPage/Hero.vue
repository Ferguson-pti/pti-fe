<script setup lang="ts">
import { AppButton, AppVideo } from '#components';


</script>

<template>
    <section 
        class="
        w-full border border-black h-[90vh] flex flex-row items-start justify-between
        pt-16 px-16    
    ">
        <div class="flex flex-col items-start justify-start w-[52%] bg-[#042729] px-10 py-10 rounded-md">
            <span class="font-lexend font-medium text-6xl text-white">Transforming Africa’s Hydrocarbon Sector</span>
            <span class="font-lexend mt-6 text-[#b9cdbe]">
                (ICHST) is organized biennially to promote technological advancement, enhance research, and provide
                knowledge-sharing platforms across the oil and gas industry spectrum
            </span>
            <AppButton style-class="mt-12 bg-[#d63d00] text-white">
                GET TICKETS NOW
            </AppButton>
        </div>

        <div class="flex flex-col items-start justify-start">
            <span>OCTOBER 22-23, 2025</span>
            <span>PTDF TOWERS, CENTRAL BUSINESS DISTRICT, ABUJA, NIGERIA</span>
            <AppVideo/>
        </div>
    </section>
</template>
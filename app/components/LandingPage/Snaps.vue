<script setup lang="ts">
    import { LandingPageSnapCard } from '#components';
    import { h } from 'vue';

    const slides = [
        'slide00', 'slide01', 'slide02', 'slide03', 'slide04', 'slide05', 'slide06', 'slide07', 'slide08', 'slide09', 'slide10', 'slide11', 'slide12'
    ]

    const renderedItems1 = slides.map((slide, index) => 
        h(
            LandingPageSnapCard,
            {
                key: `snapcardlane1${index}`,
                item: slide
            }
        )
    );

    const renderedItems2 = slides.map((slide, index) => 
        h(
            LandingPageSnapCard,
            {
                key: `snapcardlane2${index}`,
                item: slide
            }
        )
    );
</script>

<template>
    <section class="w-full py-20 px-16 bg-custom-green flex flex-col items-start justify-start font-lexend">
        <p class="text-4xl font-medium text-white">Snaps from ICHST 2024</p>

        <p class="mt-6 text-custom-grey">Relive some favorite moments from INBOUND 2024</p>

        <div class="mt-10 w-full">
            <AppSwiper 
                :items="renderedItems1" style-class="" 
                :slides-per-view="4.5"
                :pagination="false"
                :autoplay="true"
                :speed="1000"
            />
        </div>

        <div dir="rtl" class="mt-4 w-full">
            <AppSwiper 
                :items="renderedItems2" style-class="" 
                :slides-per-view="4.5"
                :pagination="false"
                :autoplay="true"
                :speed="1000"
            />
        </div>
    </section>
</template>
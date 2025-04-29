<script setup lang="ts">
    import { h } from 'vue';
    import { LandingPageAboutCard } from '#components';

    const data = [
        'Slide 1',
        'Slide 2',
        'Slide 3',
    ]

    // Create array of components manually
    const renderedItems = data.map((item, index) =>
        h(LandingPageAboutCard, {
            key: `aboutcard${index}`,
            title: item
        })
    )

</script>

<template>
    <section
        class="
        relative w-full h-[80vh] flex flex-row items-start justify-between
        py-20 px-16 bg-custom-cream overflow-visible
    ">
        <div dir="rtl" class="relative w-[35%] h-full z-10 flex flex-col items-end justify-center">
            <AppSwiper
                style-class="absolute w-[550px] right-[0%] h-[70%]"
                :items="renderedItems"
            />
        </div>

        <div class="relative w-[60%] h-auto rounded-lg z-10 p-20 bg-custom-cream overflow-hidden font-lexend">
            <p class="text-7xl font-medium mb-6 text-custom-green">What is ICHST?</p>
            <p class="font-light text-custom-green">
                ICHST <strong class="font-semibold">(INTERNATIONAL CONFERENCE ON HYDROCARBON SCIENCE & TECHNOLOGY)</strong> is where subject matter experts, leading 
                researchers, academicians, and top players in the oil and gas industry come together to examine topical issues of great relevance 
                to the present and future development of the sector, with a focus on technological advancements and breakthroughs.
            </p>

            <Bubble4 style-class="absolute bottom-0 right-0"/>
        </div>

        <Bubble3 style-class="absolute top-0 right-0"/>
    </section>
</template>
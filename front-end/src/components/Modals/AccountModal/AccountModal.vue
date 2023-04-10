<script setup>
//theme
import "primevue/resources/themes/fluent-light/theme.css";       
//core
import "primevue/resources/primevue.min.css";
//icons
import "primeicons/primeicons.css";

import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import MyInfo from './MyInfo.vue'
import PublicProfile from './PublicProfile.vue'
import MyListings from './MyListings.vue'


</script>
    
<template>

        <Accordion :multiple="true" :activeIndex="[0]">
            <AccordionTab header="My Information" >
                <section><MyInfo /></section>
            </AccordionTab>
            <AccordionTab header="My Public Profile (optional - this is what buyers will see when they view your profile)">
              <section><PublicProfile /></section>
            </AccordionTab>
            <AccordionTab header="My Listings">
                <section><MyListings /></section>
            </AccordionTab>
        </Accordion>
</template>

<style>
/* body {
    font-family: (--font-family);
} */

.p-accordion-header{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

}

.p-accordion	{
    padding: 3em;
}

</style>

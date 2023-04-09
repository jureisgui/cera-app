<script setup>
//theme
// import "primevue/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primevue/resources/primevue.min.css";

//icons
import "primeicons/primeicons.css";

import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import MyInfo from './MyInfo.vue'
import PublicProfile from './PublicProfile.vue'

</script>

    
<template>
    <div class="card">
        <Accordion :multiple="true" :activeIndex="[0]">
            <AccordionTab header="My Information">
                <section><MyInfo /></section>
            </AccordionTab>
            <AccordionTab header="My Public Profile (optional - this is what buyers will see when they view your profile)">
              <section><PublicProfile /></section>
            </AccordionTab>
            <AccordionTab header="Header III">
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </AccordionTab>
        </Accordion>
    </div>
</template>

<style>
body {
    font-family: (--font-family);
}

</style>

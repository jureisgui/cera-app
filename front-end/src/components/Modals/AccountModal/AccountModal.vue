<template>
  <div>
    <Accordion title="Accordion 1">
      <p>Content for Accordion 1</p>
    </Accordion>
    <Accordion title="Accordion 2">
      <p>Content for Accordion 2</p>
    </Accordion>
    <Accordion title="Accordion 3">
      <p>Content for Accordion 3</p>
    </Accordion>
  </div>
</template>

<script>
import Accordion from './Accordion.vue';

export default {
  components: {
    Accordion
  }
};
</script>

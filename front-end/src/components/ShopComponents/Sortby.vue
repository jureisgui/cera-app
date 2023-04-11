<template>
  <div class="sort_by_container">
    <select name="sortby" id="sortBy">
      <option>Sort By</option>
      <option value="price_lowest_first">Price Lowest - Highest</option>
      <!--filter function -->
      <option value="price_highest_first">Price Highest - Lowest</option>
      <!--filter function -->
    </select>
  </div>
</template>

<style scoped>
.sort_by_container {
  margin: 10px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-right: 10%;
  margin-top: 4em;
}
</style>

<script setup></script>

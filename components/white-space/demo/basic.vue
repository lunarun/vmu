<template>
  <div class="demo-container">
    <white-space size="xs"></white-space>
    <div class="demo-grid">Block</div>
    <white-space size="sm"></white-space>
    <div class="demo-grid">Block</div>
    <white-space></white-space>
    <div class="demo-grid">Block</div>
    <white-space size="lg"></white-space>
    <div class="demo-grid">Block</div>
    <white-space size="xl"></white-space>
    <div class="demo-grid">Block</div>
  </div>

</template>

<script>
  import WhiteSpace from '../'
  export default {
    components: {
      WhiteSpace
    }
  }
</script>

<style lang="less">
  .demo-container {
    padding: .18rem 0;
  }

  .demo-grid {
    background-color: #ebebef;
    color: #bbb;
    text-align: center;
    height: 0.6rem;
    line-height: 0.6rem;
    width: 100%;
  }
</style>

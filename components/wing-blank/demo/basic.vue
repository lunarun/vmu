<template>
  <div class="demo-container">
    <white-blank>
      <div class="demo-grid">Block</div>
    </white-blank>
    <white-space></white-space>
    <white-blank size="md">
      <div class="demo-grid">Block</div>
    </white-blank>
    <white-space></white-space>
    <white-blank size="sm">
      <div class="demo-grid">Block</div>
    </white-blank>
  </div>
</template>

<script>
  import WhiteBlank from '../'
  import WhiteSpace from '../../white-space/'
  export default {
    components: {
      WhiteBlank,
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

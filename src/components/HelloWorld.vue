<template>
    <div id="app">
        <dx-list :items="items">
            <div slot="item" slot-scope="data">
                <i>This is my template for {{data}}</i>
            </div>
        </dx-list>
    </div>
</template>

<script>
import DxButton from 'devextreme-vue/button';
export default {
  name: 'HelloWorld',
  data() {
    return {
      text: 'Hello!'
    };
  },
  components: {
    DxButton
  }
};
</script>

<style scoped>

</style>

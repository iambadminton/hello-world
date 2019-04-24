<template>
    <div id="app">
        <div id="usertable">
            <UserTable/>
        </div>
        <!--
        <div id="user">
            <User/>
        </div>
        -->
    </div>

</template>

<script>
import UserTable from './components/UserTable.vue';

export default {
  components: {
    UserTable
  },
  data: function() {
    return {

    };
  },
  methods: {
    addUser: function(user) {

    }

  }
};
</script>

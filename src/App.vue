<template>
    <div id="app">
        <div id="usertable">
            <UserTableExtr/>
        </div>
    </div>

</template>

<script>
import UserTableExtr from './components/UserTableExtr.vue';

export default {
  components: {
    UserTableExtr
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

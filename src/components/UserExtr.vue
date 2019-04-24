<template>
    <div class="container">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">{{action}} user</h3>
            </div>
            <div class="panel-body">
                <form action="#">
                    <div class="form-group">
                        <table>
                            <tr>
                                <td>
                                    <label for="surname">Surname</label>
                                </td>
                                <td>
                                    <input type="text" autocomplete="off" class="form-control" placeholder="Surname"
                                           id="surname" v-model="user.surname">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="name">Name</label>
                                </td>
                                <td>
                                    <input type="text" autocomplete="off" class="form-control" placeholder="Name"
                                           id="name" v-model="user.name">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="patronimic">Patronimic</label>
                                </td>
                                <td>
                                    <input type="text" autocomplete="off" class="form-control" placeholder="Patronimic"
                                           v-model="user.patronimic"
                                           id="patronimic">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="email">Email</label>
                                </td>
                                <td>
                                    <input type="text" autocomplete="off" class="form-control" placeholder="Email"
                                           id="email"
                                           v-model="user.email">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="birthday">Birthday</label>
                                </td>
                                <td>
                                    <input type="text" autocomplete="off" class="form-control" placeholder="Birthday"
                                           id="birthday" v-model="user.birthday">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="city">City</label>
                                </td>
                                <td>
                                    <input type="text" autocomplete="off"
                                           class="form-control"
                                           id="city"
                                           placeholder="City" v-model="user.city">
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" style="text-align: center">
                                    <div>
                                        <div v-if="action === 'edit'">
                                            <button type="submit" class="btn btn-primary" v-on:click="editUser(user)">
                                                Submit
                                            </button>
                                        </div>
                                        <div v-else>
                                            <button type="submit" class="btn btn-primary" v-on:click="addUser(user)">
                                                Submit
                                            </button>
                                        </div>

                                        &nbsp;&nbsp;
                                        <button type="reset" class="btn btn-primary" v-on:click="clearUser()">Cancel
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    user: Object,
    action: String

  },
  template: '<h1>User is:</h1>',

  methods: {
    addUser: function (user) {
      console.log("User.vue::addUser");
      this.$emit('addUser', this.user);
    },
    removeUser: function (id) {
      console.log("User.vue::removeUser");
      this.$emit('removeUser', this.user.id);
    },
    editUser: function (user) {
      console.log('User.vue::editUser: user=' + user + ' user.surname=' + user.surname);
      this.surname = user.surname;
      this.$emit('changeUser', this.user);
    },
    clearUser: function () {

    }

  },
  activated: function () {
    console.log("User.vue:: activated: action=" + this.action);
    this.copyUser = Object.assign(this.user);
  }

};
</script>

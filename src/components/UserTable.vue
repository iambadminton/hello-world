<template>

    <div class="container">
        <div class="list">
            <div class="list-title"  v-show="visible">
                <table>
                    <thead>
                    <tr>
                        <th>Surname</th>
                        <th>Name</th>
                        <th>Patronimic</th>
                        <th>E-mail</th>
                        <th>Birth date</th>
                        <th>City</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody v-for="user in users">
                    <tr>
                        <td>{{user.surname}}</td>
                        <td>{{user.name}}</td>
                        <td>{{user.patronimic}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.birthday}}</td>
                        <td>{{user.city}}</td>
                        <td>
                            <a href="#" v-on:click="editUser(user)">edit</a>&nbsp;
                            <a href="#" v-on:click="removeUser(user)">delete</a>
                        </td>
                    </tr>

                    </tbody>
                </table>
                <a href="#" v-on:click="showAddUserPanel">Add new user</a>&nbsp;
            </div>
            <div class="edit-user" v-show="!visible" >
                <User v-on:addUser="addUser" v-on:changeUser="changeUserProperty"  :user="user" :action="action"  />
            </div>
        </div>
    </div>

</template>

<script>
import User from './User.vue';

export default {
  name: "UserTable",
  components: {
    User
  },
  data: function () {
    return {
      visible: true,
      user: {},
      action: 'add',
      currentId: 2,

      users:
          [{
            id: '1',
            surname: 'Иванов',
            name: 'Иван',
            patronimic: 'Иванович',
            email: 'ivanov@reso.ru',
            birthday: '01.01.1990',
            city: 'Moscow'
          },
          {
            id: '2',
            surname: 'Петров',
            name: 'Петр',
            patronimic: 'Петрович',
            email: 'petrov@reso.ru',
            birthday: '01.01.1990',
            city: 'Moscow'
          }
          ]
    };
  },
  methods: {
    editUser: function (user) {
      console.log("UserTable:: editUser:: id = " + user.id + ' ==>');
      this.visible = !this.visible;
      this.action = "edit";
      var userCopy = Object.assign({}, user);
      this.user = userCopy;

      console.log("UserTable:: editUser:: id = " + user.id + '<==');
      console.log("UserTable:: user.id = " + user.id + " user.surname=" + user.surname);
      console.log("UserTable:: userCopy.id = " + userCopy.id + " userCopy.surname=" + userCopy.surname);
    },
    incrementId: function () {
      this.currentId++;
    },
    addUser: function (user) {
      console.log("UserTable::addUser");
      this.incrementId();
      console.log('this.currentId =' + this.currentId);
      user.id = this.currentId;
      this.users.push(user);
      this.visible = !this.visible;
    },
    removeUser: function (user) {
      console.log("removeUser:: id = " + user.id);
      this.$emit('removeUser', user.id);
      // var numItem = this.users.filter(obj => user);
      var numItem = this.users.indexOf(user);
      console.log('removeuser: numItem =' + numItem);

      this.users.splice(numItem, 1);
    },

    changeUserProperty: function(user) {
      // this.users.find(vuser => vuser.id === userCopy.id).surname = userCopy.surname; // --
      this.users.find(vuser => vuser.id === user.id).surname = user.surname; // --
      this.users.find(vuser => vuser.id === user.id).name = user.name; // --
      this.users.find(vuser => vuser.id === user.id).patronimic = user.patronimic;
      this.users.find(vuser => vuser.id === user.id).email = user.email;
      this.users.find(vuser => vuser.id === user.id).birthday = user.birthday;
      this.users.find(vuser => vuser.id === user.id).city = user.city;
      this.visible = !this.visible;
    },

    showAddUserPanel: function() {
      this.user = {};
      this.action = 'add';
      this.visible = !this.visible;
    }

  },
  computed: {
  }

};
</script>

<style scoped>
    body {
        font-family: Helvetica Neue, Arial, sans-serif;
        font-size: 14px;
        color: #444;
    }

    table {
        border: 2px solid #42b983;
        border-radius: 3px;
        background-color: #fff;
        width: 600px;
    }

    th {
        background-color: #42b983;
        color: rgba(255, 255, 255, 0.66);
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        color: black;
    }

    td {
        background-color: #f9f9f9;
    }

    th, td {
        min-width: 120px;
        padding: 10px 20px;
    }

    th.active {
        color: #fff;
    }

    th.active .arrow {
        opacity: 1;
    }

    .arrow {
        display: inline-block;
        vertical-align: middle;
        width: 0;
        height: 0;
        margin-left: 5px;
        opacity: 0.66;
    }

    .arrow.asc {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 4px solid #fff;
    }

    .arrow.dsc {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid #fff;
    }

</style>

<template>
    <div>
        <header><h1>Friends</h1></header>
        <new-friend @add-contact="addContact" ></new-friend>
        <ul>
            <friend-contact 
              v-for="friend in friends" 
              :key="friend.id"
              :id="friend.id"
              :name="friend.name"
              :phone-number="friend.phone"
              :email-address="friend.email"
              :isFavorite="friend.isFavorite"
              :isRich="friend.isRich"
              @toggle-rich="toggleRichStatus"
              @delete-friend="deleteFriend">
            </friend-contact>
            <!--I am using v-bind to indicate that I am passing a value in the props different from string since we can only
              pass string values without v-bind. -->
            <!-- <friend-contact id="0001" name="Piere" phone-number='9999-5555' email-address='piere@test.com' v-bind:isFavorite=1></friend-contact> -->
            <!-- <friend-contact id="0002" name="Marie" phone-number='9999-7777' email-address='marie@test.com' v-bind:isFavorite=0></friend-contact> -->
        </ul>
    </div>
</template>

<script>
import NewFriend from './components/NewFriend.vue';
 export default {
  components: { NewFriend },
        data(){
            return {
                friends: [
                    {
                        id:'0001',
                        name: 'Piere',
                        phone:"9999-5555",
                        email: 'piere@test.com',
                        isFavorite: 1,
                        isRich: true 
                    },
                    {
                        id: '0002',
                        name: 'Marie',
                        phone:"9999-7777",
                        email: 'marie@test.com',
                        isFavorite: 0,
                        isRich: false
                    }
                ]
            }
        },
        methods:{
          toggleRichStatus(id){
            // change the status of being rich or not from the parent
            const identifiedFriend = this.friends.find((friend) => friend.id === id);
            identifiedFriend.isRich = !identifiedFriend.isRich;
          },
          addContact(name, phone, email){
            const newFriendContact = {
              id: new Date().toISOString(),
              name: name,
              phone: phone,
              email: email,
              isFavorite: 0,
              isRich: false
            };
            this.friends.push(newFriendContact);
          },
          deleteFriend(id){
            this.friends = this.friends.filter(friend => friend.id !== id);
          }
        }
 }
</script>

<style>

* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}

</style>
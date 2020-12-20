<template>
  <div>
    <header>
      <h1>FriendList</h1>
    </header>
      <ul>
        <FriendContact name="Alejandro" phone-number="12345 6789" email-address="abc@hotmail.com" is-favorite=1></FriendContact>
        <FriendContact name="Francisco" phone-number="98765 1234" email-address="xyz@hotmail.com"></FriendContact>
      </ul>  
  </div>
</template>

<script>
import FriendContact from './components/FriendContact.vue'

export default {
  name: 'App',
  components: {
    FriendContact
  }
}
</script>

<style>

</style>

const app = Vue.createApp({
    data(){
        return {
            friend: [
                {
                   
                },
                {
                    
                }
            ],
        };
    },
});

app.component('friend-contact', {
    template: `
    <li>
    <h2>{{friend.name }}</h2>
    <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show'}}
      Details are visible
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{friend.phone}}</li>
      <li><strong>Email:</strong>{{friend.email}}</li>
    </ul>
  </li>`,
    data(){
        return {
            detailsAreVisible: false,
            friend: {
                id:'0001',
                name: 'Piere Lorenz',
                phone: '9999-1111',
                email: 'pierre@test.com'
            }
         };
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');
const app = Vue.createApp({
    data(){
        return {
            friends: [
                {
                    id: 'user1',
                    name: 'Alejandro',
                    phone: '307-315-1824',
                    email: 'abc@hotmail.com'
                },
                {
                    id: 'user2',
                    name: 'Steven',
                    phone: '307-315-1823',
                    email: 'xyz@hotmail.com'
                },
            ]       
        };
    }
});

app.component('friend-contact', {
    template: 
    `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">
            {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
        </button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
  `,
    data(){
        return { 
            detailsAreVisible: false,
            friend: {
                id: 'user1',
                name: 'Alejandro',
                phone: '307-315-1824',
                email: 'abc@hotmail.com'
            }  
         };
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible =!this.detailsAreVisible;
        }
    }
});
app.mount('#app');
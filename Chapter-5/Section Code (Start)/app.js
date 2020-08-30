var data = {
  title: 'The VueJS Instance',
  showParagraph: false
}

// create a new component and re use it
Vue.component('hello2', {
  template: '<h1>Hello2!</h1>'
});

var vm1 = new Vue({
  el: '#app1',
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      console.log(this.$refs.myButton);
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

setTimeout(function(){
  vm1.title = 'Changed by Timer';
  vm1.show();
}, 3000);

// two ways to access to the Vue Modules
console.log(vm1.title);
console.log(vm1.$data.title);

// You can create the data outside of the vue module
// and attach it later.
console.log(vm1.$data === data);

// you can see all the current references of the vue modules
// with $refs (more for debugging)
console.log(vm1.$refs);

//vm1.$refs.heading.innerText = 'Test';

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The second VueJS instance '
  },
  methods: {
    onChange: function(){
      vm1.title = 'Changed';
    }
  }
});


// one way to show the vue module and add it to the DOM manually
var vm3 = new Vue({
  template: '<h1>Hello!</h1>'
});

vm3.$mount('#app3');

//vm3.$mount();
//document.getElementById('app3').appendChild(vm3.$el);
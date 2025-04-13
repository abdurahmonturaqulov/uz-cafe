const app=Vue.createApp({
    data() {
        return{
            name:"murod",
            job: "developer",
            age: 35,
            showAge:true
        }
    },

   methods: {
    showOrHideAge(){
        this.showAge=!this.showAge
    }
   }

   
})

app.mount('#app');
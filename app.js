const app = Vue.createApp(
    {
        // template: '<h1>Hello Vue js</h1>', you can  use this or define directly from the html page
        data (){
            return {
                firstName: 'Bosco',
                lastName: 'Waisana',
                email: 'b.waisana@gmail.com',
                gender: 'male',
                picture: 'https://randomuser.me/api/portraits/men/10.jpg',
            }
        },
        methods: {
            async getUser(){
                // console.log(this.firstName) test the access of the method
                const res = await fetch('https://randomuser.me/api');
                const {results} = await res.json();
                console.log(results);
                this.firstName = results[0].name.first
                this.lastName = results[0].name.last
                this.email = results[0].email
                this.picture =results[0].picture.large
                this.gender = results[0].gender
                
            }
        },
    }
)

app.mount('#app')
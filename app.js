const app = Vue.createApp({
    data(){
        return{
            firstName: 'Rang',
            lastName: 'Jarh',
            email: 'red@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/3.jpg',
            city: 'Towns',
            state: 'Queensland',
            country: 'Australia',
            streetname: 'Kalang',
            streetnumber: '4356',
            age: '24'
        }
    },
    methods:{
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            console.log(results)

            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large
            this.city = results[0].location.city
            this.state = results[0].location.state
            this.country = results[0].location.country
            this.streetname = results[0].location.street.name
            this.streetnumber = results[0].location.street.number
            this.age = results[0].dob.age
        }
    },
    
})

app.mount("#app")
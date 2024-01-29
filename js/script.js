console.log('Vue OK', Vue);

const {createApp} = Vue;

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

const app = createApp({
    data: () =>  ({
        mails: []
    }),
    created() {
        for (let i = 0; i < 10; i++) 
        axios.get(endpoint).then((res) => {
            this.mails.push(res.data.response)
        })
    }
});

app.mount('#root')
import { defineStore } from 'pinia'
import axios from "axios"
// import download from "downloadjs"

let baseURL = "http://localhost:3000/"

export const useIndexStore = defineStore('index', {
    state: () => {
        return {
            isLoggedIn: false,
            expenses: [],
            categories: [],
            paymentResponse: {},
            PDF: {},
            sectors: []
        }
    },

    // getters: {

    // },

    actions: {

        async login(payload) {
            try {
                const { data } = await axios({
                    method: `POST`,
                    url: baseURL + `login`,
                    data: {
                        email: payload.email,
                        password: payload.password
                    }
                })
                // console.log(data);

                let access_token = data.access_token
                let username = data.userData.username
                let status = data.userData.status
                let userId = data.userData.id

                localStorage.setItem("access_token", access_token)
                localStorage.setItem("username", username);
                localStorage.setItem("status", status);
                localStorage.setItem("userId", userId);
                this.isLoggedIn = true
                this.router.push('/')
            } catch (err) {
                console.log(err);
            }
        },

        logout() {
            localStorage.clear()
            this.isLoggedIn = false
            this.router.push(`/login`)
        },

        async register(payload) {
            try {
                await axios({
                    method: `POST`,
                    url: baseURL + `register`,
                    data: {
                        username: payload.username,
                        email: payload.email,
                        password: payload.password
                    }
                })
                // console.log(data);
                this.router.push('/login')
            } catch (err) {
                console.log(err);
            }
        },

        async fetchExpenses() {
            try {
                let { data } = await axios({
                    method: `GET`,
                    url: baseURL + `expenses`,
                    headers: {
                        access_token: localStorage.getItem(`access_token`)
                    }
                })
                this.expenses = data
                // console.log(data);
            } catch (err) {
                // console.log(err);
                console.log(err);
            }
        },

        async fetchCategories() {
            try {
                let { data } = await axios({
                    method: `GET`,
                    url: baseURL + `categories`,
                    headers: {
                        access_token: localStorage.getItem(`access_token`)
                    }
                })
                this.categories = data
                // console.log(data);
            } catch (err) {
                console.log(err);
            }
        },

        async addExpense(payload) {
            console.log(payload);
            try {
                let { data } = await axios({
                    method: `POST`,
                    url: baseURL + `expenses`,
                    headers: {
                        access_token: localStorage.getItem(`access_token`)
                    },
                    data: {
                        name: payload.name,
                        amount: payload.amount,
                        date: payload.date,
                        CategoryId: payload.CategoryId,
                    }
                })
                // console.log(data);
                this.fetchExpenses()
            } catch (err) {
                console.log(err);
            }
        },

        //? blm bisa pake 3rd party API
        // async sendSMS() {
        //     try {
        //         // let { data } = await axios({
        //         //     method: `POST`,
        //         //     url: `https://rest.messagebird.com/messages`,
        //         //     headers: {
        //         //         Authorization: `AccessKey 9PZcBfwv9u0oo6jnmnigHyi6Z`
        //         //     }
        //         // })
        //         // var messagebird = require('messagebird')('9PZcBfwv9u0oo6jnmnigHyi6Z');

        //         // var params = {
        //         //     'originator': 'MessageBird',
        //         //     'recipients': [
        //         //         '085161750033'
        //         //     ],
        //         //     'body': 'This is a test message.'
        //         // };

        //         // messagebird.messages.create(params, function (err, response) {
        //         //     if (err) {
        //         //         return console.log(err);
        //         //     }
        //         //     console.log(response);
        //         // });
        //     } catch (err) {
        //         console.log(err);
        //     }
        // },

        // async editExpense(id, payload) {
        //     try {
        //         await axios({
        //             method: `PATCH`,
        //             url: baseURL + ``,
        //             headers: {
        //                 access_token: localStorage.getItem(`access_token`)
        //             },
        //             data: {
        //                 name: payload.name,
        //                 amount: payload.amount,
        //                 date: payload.date,
        //             }
        //         })
        //     } catch (err) {
        //         console.log(err);
        //     }
        // },

        async payments() {
            try {
                let { data } = await axios({
                    method: `POST`,
                    url: baseURL + `payments`,
                    headers: {
                        access_token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyIiwiZW1haWwiOiJ1c2VyQGdtYWlsLmNvbSIsInN0YXR1cyI6InJlZ3VsYXIiLCJpYXQiOjE2NjU0OTU5OTZ9.HjH-UIwTVesUeY-3IbXPDjKnAL0M5fB4Y4wIoz2ddz4`
                    }
                })
                // console.log(data);

                snap.pay(`${data.transactionToken}`, {
                    onSuccess: async function (result) {
                        console.log(result); //! result dari midtrans
                        this.paymentResponse = result

                        //TODO axios lagi ke server untuk ubah column status jadi premium + add trx data
                        let { data } = await axios({
                            method: `PATCH`,
                            // url: baseURL + `premium/${id}` //? harus dapetin userId
                            url: baseURL + `premium/1`, //? harus dapetin userId,
                            headers: {
                                access_token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyIiwiZW1haWwiOiJ1c2VyQGdtYWlsLmNvbSIsInN0YXR1cyI6InJlZ3VsYXIiLCJpYXQiOjE2NjU0OTU5OTZ9.HjH-UIwTVesUeY-3IbXPDjKnAL0M5fB4Y4wIoz2ddz4`
                            }
                        })
                        console.log(data); //! tadi udh bisa ke hit, tinggal panggil endpoint yg change status
                    },

                    //? Opsional dipake
                    onPending: function (result) { console.log('pending'); console.log(result); },
                    onError: function (result) { console.log('error'); console.log(result); },
                    onClose: function () { console.log('customer closed the popup without finishing the payment'); }
                })
            } catch (err) {
                console.log(err);
            }
        },

        // Cuma bisa dibikin general
        async getPDF() {
            try {
                let response = await axios({
                    method: `GET`,
                    url: baseURL + `reports`,

                    // gajadi pake token
                    // headers: {
                    //     access_token: localStorage.getItem(`access_token`)
                    // }
                })
                this.PDF = response.data
                // console.log(response.pipe);
            } catch (err) {
                console.log(err);
            }
        },

        // Pindahin ke server krn kena cors
        async fetchSectors() {
            try {
                let { data } = await axios({
                    method: `GET`,
                    url: `https://indonesia-stock-exchange.vercel.app/api/sectors`
                })
                this.sectors = data.data
            } catch (err) {
                console.log(err);
            }
        }







    },
})
import { defineStore } from 'pinia'
import axios from "axios"

// let clientKey = `SB-Mid-client-jgPpUBjZXarlGCpk`

let baseURL = "http://localhost:3000/"

export const useIndexStore = defineStore('index', {
    state: () => {
        return {
            isLoggedIn: false,
            paymentResponse: {}
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
        }



    },
})
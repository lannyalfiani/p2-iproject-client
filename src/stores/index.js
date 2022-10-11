import { defineStore } from 'pinia'
import axios from "axios"

// let clientKey = `SB-Mid-client-jgPpUBjZXarlGCpk`

let baseURL = "http://localhost:3000/"

export const useIndexStore = defineStore('index', {
    state: () => {
        return {
            paymentResponse: {}
        }
    },

    // getters: {

    // },

    actions: {

        async payments() {
            try {
                let { data } = await axios({
                    method: `POST`,
                    url: baseURL + `payments`,
                    headers: {
                        access_token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyQGdtYWlsLmNvbSIsInN0YXR1cyI6InJlZ3VsYXIiLCJpYXQiOjE2NjU0Nzg2MDh9.6FuzxJqgHLOEBmhh-EreObeGLLAAh6shR8khOPQ2OSc`
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
                            url: baseURL + `premium/:id` //? harus dapetin userId
                        })
                        console.log(data); //! tadi udh bisa ke hit, tinggal panggil endpoint yg change status
                    },
                  
                    //? kyknya ga dipake
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
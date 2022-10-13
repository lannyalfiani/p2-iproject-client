import axios from "axios"
import { defineStore } from 'pinia'
import Swal from "sweetalert2"


// let baseURL = "http://localhost:3000/"
let baseURL = "https://blooming-sands-84563.herokuapp.com/"

export const useIndexStore = defineStore('index', {
    state: () => {
        return {
            isLoggedIn: false,
            expenses: [],
            categories: [],
            paymentResponse: {},
            PDF: {},
            news: [],
            isPremium: false,
            userId: "",
            forPieChart: {}
        }
    },

    // getters: {

    // },

    actions: {

        async fetchNews() {
            try {
                const { data } = await axios({
                    method: `GET`,
                    url: baseURL + `news`
                })
                this.news = data.posts
            } catch (err) {
                console.log(err);
            }
        },

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
                let access_token = data.access_token
                let username = data.userData.username
                let status = data.userData.status
                let userId = data.userData.id

                localStorage.setItem("access_token", access_token)
                localStorage.setItem("username", username);
                localStorage.setItem("status", status);
                localStorage.setItem("userId", userId);

                Swal.fire('Welcome to XPense!')

                this.isLoggedIn = true
                this.userId = data.userData.id

                if (status === `regular`) {
                    this.isPremium = false
                } else if (status === `premium`) {
                    this.isPremium = true
                }

                // console.log(this.userId); // dapet
                this.router.push('/')

            } catch (err) {
                // console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${err.response.data.message}`,
                })
            }
        },

        async payments() {
            try {

                //! HIT initiate payment
                let { data } = await axios({
                    method: `POST`,
                    url: baseURL + `payments`,
                    headers: {
                        access_token: localStorage.getItem(`access_token`)
                    }
                })
                // console.log(data);

                let UserId = localStorage.getItem(`userId`)

                //! Hit midtrans for payment
                snap.pay(`${data.transactionToken}`, {
                    onSuccess: async (result) => {
                        // console.log(result); //! result dari midtrans
                        this.paymentResponse = result

                        //TODO axios lagi ke server untuk ubah column status jadi premium + add trx data
                        await axios({
                            method: `PATCH`,
                            // url: baseURL + `premium/${id}` //? harus dapetin userId
                            url: baseURL + `premium/${UserId}`, //? harus dapetin userId,
                            headers: {
                                access_token: localStorage.getItem(`access_token`)
                            }
                        })
                        localStorage.setItem("status", `premium`);
                        this.isPremium = true
                        this.checkLogin()
                        // console.log(data); //! tadi udh bisa ke hit, tinggal panggil endpoint yg change status
                    },

                    //? Opsional dipake
                    onPending: function (result) { console.log('pending'); console.log(result); },
                    onError: function (result) { console.log('error'); console.log(result); },
                    onClose: function () {
                        console.log('customer closed the popup without finishing the payment');
                    }
                })
                // console.log(`udah bayar`);
                // localStorage.setItem("status", `premium`);
                // this.isPremium = true
                // this.checkLogin()
                // console.log(`premium keubah`);
                // this.checkPremium()


            } catch (err) {
                console.log(err);
            }
        },

        logout() {
            localStorage.clear()
            this.isLoggedIn = false
            this.router.push(`/login`)
        },

        checkLogin() {
            if (localStorage.access_token) {
                this.isLoggedIn = true
            } else {
                this.isLoggedIn = false
            }
        },

        checkPremium() {
            if (localStorage.status === `premium`) {
                this.isPremium = true
            } else if (localStorage.status === `regular`) {
                this.isPremium = false
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
                Swal.fire('Registered successfully, please log in to proceed!')
                this.router.push('/login')
            } catch (err) {
                // console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${err.response.data.message}`,
                })
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
                // console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${err.message}`,
                })
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
                // console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${err.message}`,
                })
            }
        },

        async addExpense(payload) {
            try {
                await axios({
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
                this.fetchExpenses()
            } catch (err) {
                // console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${err.message}`,
                })
            }
        },

        async deleteExpense(id) {
            // console.log(id);
            try {
                await axios({
                    method: `DELETE`,
                    url: baseURL + `expenses/${id}`,
                    headers: {
                        access_token: localStorage.getItem(`access_token`)
                    }
                })
                // console.log(data);
                this.fetchExpenses()
            } catch (err) {
                // console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${err.response.data.message}`,
                })
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
                // console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${err.message}`,
                })
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
                // console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${err.message}`,
                })
            }
        },

        async showPie() {
            try {
                let { data } = await axios({
                    method: `GET`,
                    url: baseURL + `expenses/pie`,
                    headers: {
                        access_token: localStorage.getItem(`access_token`)
                    }
                })
                this.forPieChart = data
                // console.log(data);
                this.fetchExpenses()
                this.fetchCategories()
            } catch (err) {
                // console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${err.message}`,
                })
            }
        },

        async editExpense(id, payload) {
            try {
                let { data } = await axios({
                    method: `PATCH`,
                    url: baseURL + `expenses/${id}`,
                    headers: {
                        access_token: localStorage.getItem(`access_token`)
                    },
                    data: {
                        name: payload.name,
                        amount: payload.amount,
                        date: payload.date,
                    }
                    // http://localhost:3000/expenses/20
                })
                // console.log(data);
            } catch (err) {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${err.message}`,
                })
            }
        }







    },
})
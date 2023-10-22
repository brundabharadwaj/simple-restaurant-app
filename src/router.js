import HomePage from './components/HomePage'
import SignUp from './components/SignUp'
import Login from './components/Login'
import {createRouter, createWebHistory} from 'vue-router'
import UpdateResturant from './components/UpdateResturant'
import AddResturant from './components/AddResturant'
const routes=[
    {
        name: 'HomePage',
        path: '/',
        component: HomePage,

    },
    {
        name: 'SignUp',
        path: '/sign-up',
        component: SignUp
    },
    {
        name: 'Login',
        path: '/login',
        component: Login
    },
    {
        name: 'UpdateResturant',
        path: '/update',
        component: UpdateResturant,

    },
    {
        name: 'AddResturant',
        path: '/add',
        component: AddResturant,

    }
]

const router = createRouter({
    history : createWebHistory(), routes
})
export default router
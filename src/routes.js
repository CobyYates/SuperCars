import Home from './components/Home.vue'
import Build from './components/Build.vue'
import Garage from './components/Garage.vue'
import Cars from './components/Cars.vue'
import People from './components/People.vue'
import Complete from './components/Complete.vue'
import Contact from './components/Form.vue'
import FormConfirm from './components/FormConfirm.vue'

export const routes = [
    { path: '', component: Home },
    { path: '/build', component: Build, children: [
        { path: '/build', component: Garage },
        { path: '/build/cars', component: Cars },
        { path: '/build/people', component: People },
    ] },
    { path: '/build/complete', component: Complete},
    { path: '/contact', component: Contact}, 
    { path: '/confirmation', name: 'confirm', component: FormConfirm },    
]

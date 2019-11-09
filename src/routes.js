import Home from './components/Home.vue'
import Build from './components/Build.vue'
import Garage from './components/Garage.vue'
import Cars from './components/Cars.vue'
import People from './components/People.vue'
import Grid from './components/Grid.vue'
import Contact from './components/Form.vue'

export const routes = [
    { path: '', component: Home },
    { path: '/build', component: Build, children: [
        { path: '/build', component: Garage },
        { path: '/cars', component: Cars },
        { path: '/people', component: People }
    ] },
    { path: '/grid', component: Grid },
    { path: '/contact', component: Contact },
]
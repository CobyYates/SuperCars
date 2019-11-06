import Home from './components/Home.vue'
import Build from './components/Build.vue'
import Grid from './components/Grid.vue'
import Contact from './components/Form.vue'

export const routes = [
    { path: '', component: Home },
    { path: '/build', component: Build },
    { path: '/grid', component: Grid },
    { path: '/contact', component: Contact },
]
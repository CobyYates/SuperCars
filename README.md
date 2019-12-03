# Vue.js project using Vuetify

## Netlify Link
[Check out the site on Netlify](https://car-garage.netlify.com/)


## Effectively use conditional logic and JavaScript array methods to render large lists.
```JavaSript

```

## Encapsulate your code as VueJS single-file components.
The app.vue file is the main file containing all other components. All content is contained within the children of app.vue. This is the app.vue template content.
```javascript
<template>
  <v-app>
    <app-top-nav/>
    <v-content>
      <v-row>
        <v-col class="pb-0 pt-0">
          <router-view/>
        </v-col>
      </v-row>
    </v-content>
    <app-footer/>
  </v-app>
</template>
```

## Work with the Vue-CLI to create and manage your project within a real development toolset.
```javascript

```

## Allow communication between components using props, custom events, or local store.
The app uses props and local store. The [store.js](./src/store/store.js) file contains 3 arrays which store all the data throughout the app. When a garage, car or person is selected, these values are pushed onto those arrays.
```javascript
if (this.$store.state.selectedSize[0].size > this.$store.state.selectedCars.length) {
      this.$store.state.selectedCars.push(this.car);
    } else if (this.$store.state.selectedSize[0].size <= this.$store.state.selectedCars.length) {
      alert('Too many vehicles')
    }
```

## Present a form for user input that provides useful form validation and feedback.
The user form is found on the [contact page](./src/components/Form.vue)
```javascript

```

## Create a custom directive and use it on at least one of your components.
I created a custom directive for currency for the dollar sign. It is found on any element where there is a price value.
```javascript
{{ car.price | currency }}
```

## Use a mix of animations and transitions to enhance some aspects of your project.
Transitions for the Garage Build page create the transition effect of moving the current component down and moving the next one back in its place. The styling is as follows.
```javascript
.fade-enter-active {
  transform: translateY(100%);
}
.fade-enter {
  opacity: 0;
}
.fade-leave-active {
  transform: translateY(50%);
}
.fade-leave-to {
  opacity: 1;
}
```

## Connect to a server using HTTP and display retrieved data using Axios.
While building a garage, the user has the choice to hire someone to help with their cars. Those people are retrieved from a website called [uinames.com](https://uinames.com)
```javascript
getPeople() {
    let btn = document.querySelector("#hireBtn")
    axios.get('https://uinames.com/api/?ext&region=united states&amount=4')
    .then(response => {
        this.people = response.data
        btn.setAttribute("style", "display: none;")
    })
    .catch(error => console.error(error))
    }
```

## Provide at least 3 different routes with navigation between them using vue-router.
The top navigation has 3 different pages that can be selected. In the [vue-router](./src/routes.js) page, all three routes are all defined
```javascript
export const routes = [
    { path: '', component: Home },
    { path: '/build', component: Build, children: [
        { path: '/build', component: Garage },
        { path: '/build/cars', component: Cars },
        { path: '/build/people', component: People },
    ] },
    { path: '/build/complete', component: Complete},
    { path: '/contact', component: Contact },
]
```

## Manage your application's state using vuex.
Using Vuex, the state management for the each build is saved and stored in the [store.js](./src/store/store.js) file. Each change is saved by pushing data into an array declared in the store.
```javascript
this.$store.state.selectedSize[0].size = this.planName
```
# gym_app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

This web-app was developed and tested on Chrome under Ubunutu.

This website is hosted through firebase and can be accessed at https://gym-platform-dd807.web.app.

This webapp (Single-Page-App and fully responsive) is a platform to deliver instructional content 
on physical training and nutrition; it uses vue.js + materialize for the front end and node.js + firebase
for the back end (authorization and deployment).

The home page contains the general info about the services provided as well as options for
registering and logging in; the "Plans" section (its title) is a link to a page containing the plans
available but can only be accessed if the user is logged in; you can register to be able to
access the '/plans' and '/plans/plan' routes; you can login and logout after registration.

Once a new user registers the site automatically logs him in; this takes him to the page containing
the plans available and links to each one; any link will lead to the page containing the content of
a specific plan. Both routes '/plans' and '/plans/plan' have the option to logout, which will take
the user back to the home page.

All the information in the site is filler info but has the functionality to support dynamic
information if it was actually needed for use.

I used materialize alone with vue (instead of something like vuetify) and some materialize
animations proved stubborn to work; the placeholders for email and password in the registration and
login modals sometimes don't work and have to be accessed through the "Tab" key.

This website is hosted through firebase and can be accessed at https://gym-platform-dd807.web.app.

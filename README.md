# :sparkles: Vuetify Addess Crud

> Project generated with **[Vue Cli 3](https://cli.vuejs.org/ "Vue Cli 3 Website")** and **[Vue.js 2x](https://vuejs.org/ "Vue.js Website")**, uses the design pattern described in this [documentação](https://jedicatvuejs.netlify.app/guide/vuejs/intalacao.html#estrutura-projeto).

## About
It was my first project developed with vuetify easier handling of CRUD operations.

In this project, it is possible to perform operations to create, edit and delete the addresses searched in the external api (https://viacep.com.br/).

<div style="text-align:center"><img src="https://media.giphy.com/media/ihG8HPkRZdDupw5tZJ/giphy.gif)](https://media.giphy.com/media/ihG8HPkRZdDupw5tZJ/giphy.gif" /></div>


## Developing
### Built With
It was used in the development of this application:
> All specified versions are minimal.
- [Vue.js](https://vuejs.org/) - v2.6.11
- [Vue Cli](https://cli.vuejs.org/) - v4.5.1
- [Vue I18N](https://github.com/kazupon/vue-i18n) - v8.22.4
- [Vue Router](https://router.vuejs.org/) - v3.2.0
- [Vue PWA](https://router.vuejs.org/) - v4.5.0
- [Vuex](https://vuex.vuejs.org/) - v3.6.2
- [Vuex Persistedstate](https://github.com/robinvdvleuten/vuex-persistedstate) - v4.0.0-beta.3
- [vuetifyl](https://vuetifyjs.com/en/getting-started/installation/) - v2.4.3
- [vue-flag-icon](https://www.npmjs.com/package/vue-flag-icon) - v1.0.6
- [v-mask](https://www.npmjs.com/package/v-mask) - v3.6.0
- [axios](https://www.npmjs.com/package/axios) - v3.6.0
- [nanoid](https://www.npmjs.com/package/nanoid) - v3.6.0


### Important Explanation
- **[I18N](https://github.com/kazupon/vue-cli-plugin-i18n)**, by default it already provides settings for two languages **pt-BR** and **en**. To provide for more languages just create the files in the directory __src/locales__. Remember that you must have the same keys on all files that have a perfect working order. This plugin is configured with a language __default__ and one of __fallback__ _"error"_,  to change both go in the file __vue.config.js__ located in the root of the project and change the fields __locale__ _"represents the default"_ and __fallbackLocale__ _"represents the fallback"_ to those desired. When changing __default__ and __fallbackLocale__ languages, you must change the [Environment Variable](#Variavel-de-ambiente) in the keys __VUE_APP_I18N_LOCALE__ _"for default and"_ and __VUE_APP_I18N_FALLBACK_LOCALE__ "for the fallback".
- [vuex-persistedstate](https://github.com/robinvdvleuten/vuex-persistedstate), persists store data by refreshing the page in **LocalStorage**, allowing not to delete **Store** data by opening another tab in the browser or even refreshing the page. It is of great value to erase the data saved in **LocalStorage** with the name ** vuex ** when logging out or even closing the system tabs with the **beforeDestroy** or **destroyed** hook.


### Environment variable
For the project to work properly and has better security work with two environment variables files that are being ignored by Git through **.gitignore** file.

Create the files at the root of your project with the names:
- **env.development**: Used by _Vue.js_ when you are developing your project.
- **env.production**: Using by _Vue.js_ when generating project _Build_.
- **.env**: Or use just an unique dotenv file

With the following structure and the appropriate values for your project:

```js
{
  VUE_APP_KEY_NAME=value you want
}
```

It is mandatory to have at least these keys and values to work perfectly:
```js
{
	VUE_APP_NAME=CRUD Vue
	VUE_APP_API=https://viacep.com.br/ws
	VUE_APP_I18N_LOCALE=pt-BR
	VUE_APP_I18N_FALLBACK_LOCALE=en
}
```

### Pages
By default the project already comes with the following pages:
- Home: You do not have to be logged in to access. Here, you can store the addresses via CRUD.
- About: You do not have to be logged in to access.
- Erro 404: You do not have to be logged in to access.


## Installation and Use
### Prerequisites and Installing
- Terminal (Command used in Terminal Powershell)
- Yarn
- Vue.js

### **Project setup**
To run this project you must first install the dependencies. In the root directory type:
```
yarn install
```

#### Compiles and hot-reloads for development
```
yarn run serve
```

#### Compiles and minifies for production
```
yarn run build
```

#### I18N Reports
```
yarn run i18n:report
```

#### Lints and fixes files
```
yarn run lint
```

#### Run your end-to-end tests
```
yarn run test:e2e
```

#### Run your unit tests
```
yarn run test:unit
```

#### Run your verbose unit tests
```
yarn run test:unit_verbose
```

To test the application in the browser click here [```http://localhost:8080```](http://localhost:8080).

### **Production**
For production you need to do some tricks to run the **Vue Route history mode** on some deploy services.

## [netlify](http://netlify.com)
To use in **netlify** you will need to create within the **public** directory a file with the name ***_redirects*** and the following content:
```js
/*    /index.html   200
```

Go to **Settings > Build & Deploy** and in the **Build settings** session in iiii report:

- Build command: **yarn build**
- Publish directory: **dist**

### **Versioning**
0.1.0

#### **TODOS**

 - **Implement a geolocation service:**
Use the obtained address to find out the coordinates and thus be able to display a map of the location.

### **Licensing**
MIT
Copyright (c) 2019 Felipecss.

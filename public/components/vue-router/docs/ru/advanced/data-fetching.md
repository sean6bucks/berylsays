# Запросы данных

Нередко при переходе между путями требуется получить от сервера какие-либо данные. Например, перед отображением профиля пользователя нужно запросить данные о нём. Этой цели можно достичь двумя различными путями:

- **Запросив данные после перехода**: сначала перейти к новому пути, затем запросить данные в хуке жизненного цикла целевого компонента. По мере загрузки данных отобразить индикатор состояния загрузки.

- **Запросив данные перед переходом**: запросить данные в сторожевом хуке роутера, и завершить навигацию уже по когда они будут получены.

С технической точки зрения, оба способа годятся — выбор зависит от того, какой UX вы хотите получить.

## Запрос данных после перехода

При использовании этого подхода, мы осуществляем переход и рендеринг целевого компонента сразу же, а данные запрашиваем в хуке `created` компонента. Это позволяет нам отобразить состояние загрузки, пока данные подтягиваются по сети, причём имея возможность сделать это различным образом для разных компонентов.

Предположим, у нас есть компонент `Post`, которому требуется загрузить с сервера данные, соответствующие id поста из `$route.params.id`:

``` html
<template>
  <div class="post">
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>
```

``` js
export default {
  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    // запрашиваем данные когда реактивное представление уже создано
    this.fetchData()
  },
  watch: {
    // в случае изменения маршрута запрашиваем данные вновь
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true
      // замените здесь `getPost` используемым методом получения данных / доступа к API
      getPost(this.$route.params.id, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
    }
  }
}
```

## Запрос данных перед переходом

Используя этот подход, мы запрашиваем данные до завершения перехода к новому пути. Запрос данных выполняется в сторожевом хуке `beforeRouteEnter` компонента, который вызывает `next`, когда данные получены:

``` js
export default {
  data () {
    return {
      post: null,
      error: null
    }
  },
  beforeRouteEnter (to, from, next) {
    getPost(to.params.id, (err, post) => {
      next(vm => vm.setData(err, post))
    })
  },
  // если путь изменяется, а компонент уже отображён,
  // логика будет немного иной
  beforeRouteUpdate (to, from, next) {
    this.post = null
    getPost(to.params.id, (err, post) => {
      this.setData(err, post)
      next()
    })
  },
  methods: {
    setData (err, post) {
      if (err) {
        this.error = err.toString()
      } else {
        this.post = post
      }
    }
  }
}
```

Пользователь останется на предыдущей странице, пока не загрузятся данные новой. По этой причине мы советуем отображать какой-нибудь индикатор загрузки. Кроме того, если загрузка данных не удастся, следует отобразить глобальное сообщение об ошибке.
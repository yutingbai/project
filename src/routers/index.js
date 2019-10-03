import Vue from 'vue'
import Router from 'vue-router'
import comoperateRouter from './comperate'
import postedRouter from './posted'
import practiceRouter from './practice'
import questionRouter from './question'
import usersRouter from './users'


Vue.use(Router)





export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    comoperateRouter,
    questionRouter,
    postedRouter,
    practiceRouter,
    usersRouter,

    
    {
      path: '/*',
      redirect: '/posted'
    }
  ]
})

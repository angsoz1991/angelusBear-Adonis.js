'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', ({ view  }) => {
    return view.render('page/home')
})

Route.get('/login', () => {
    return 'GET /login'
})

Route.post("/login", () => {
    return "POST /login"
})

Route.put("/logout", () => {
    return "PUT /logout"
})

Route.get("/register", () => {
    return "GET /register"
})

Route.post("/register", () => {
    return "POST /register"
})

Route.get("/forgot-password", () => {
    return "GET /forgot-password"
})

Route.post("/forgot-password", () => {
    return "POST /forgot-password"
})

Route.get(
    "/reset-password/:token",
    ({ params }) => {
        return "GET /reset-password " + params.token
    },
)

Route.post(
    "/reset-password/:token",
    ({ params }) => {
        return "POST /reset-password " + params.token
    },
)

Route.get(
    "/reset-password/:token",
    ({ params }) => {
      return "GET /reset-password " + params.token
    },
  )
  Route.post(
    "/reset-password/:token",
    ({ params }) => {
      return "POST /reset-password " + params.token
    },
  )


Route.on('/').render('welcome')

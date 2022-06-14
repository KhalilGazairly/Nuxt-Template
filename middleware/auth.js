export default function ({ route, store, redirect, app, i18n }) {
  if (app.$cookies.get('lang')) i18n.setLocale(app.$cookies.get('lang'))

  if (app.$cookies.get('Authorization')) {
    store.state.auth.Authorization = app.$cookies.get('Authorization')
  }
  if (app.$cookies.get('Authorization')) {
    store.state.auth.checkAuth = true
  }

  const checkUser = store.state.auth.checkAuth
  //---------------

  //  Invalid Access For Visitor
  if (!checkUser) {
    if (i18n.locale === 'en') return redirect('/login')
    else return redirect('/ar/login')
  }

  //  Invalid Access For User

  if (
    checkUser &&
    ['login___en', 'login___ar', 'register___en', 'register___ar'].includes(
      route.path
    )
  ) {
    if (i18n.locale === 'en') return redirect('/')
    else return redirect('/ar')
  }
}

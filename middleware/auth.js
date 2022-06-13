
export default function ({ route, store, redirect, app, i18n }) {

  if (app.$cookies.get('lang')) i18n.setLocale(app.$cookies.get('lang'))

  const user = app.$cookies.get('user');

  if (app.$cookies.get('token')) {
    store.state.auth.token = app.$cookies.get('token');

  }
  if (app.$cookies.get('iA') === 1) {
    store.state.auth.user = user;
    store.state.auth.checkAuth = true;
  }


  const checkUser = store.state.auth.checkAuth;
  //---------------
  // console.log(route.name)
  //params.id
  // Visitor Access
  if (!checkUser && [
    "index___en", "index___ar",
    'login___en', 'login___ar',
    'register___en', 'register___ar',
    'terms-condition___en', 'terms-condition___ar',
    "privcy-policy___en","privcy-policy___ar",
    "about___en","about___ar",
    "categories-id___en","categories-id___ar",
    "service-id___en","service-id___ar"
  ].includes(route.name)) {
    return false
  }

  
  //  Invalid Access For Visitor
  if (!checkUser) {
    if (i18n.locale === 'en')
      return redirect('/login')
    else
      return redirect('/ar/login')
  }

  //  Invalid Access For User


  if (checkUser && [
      'login___en', 'login___ar',
      'register___en', 'register___ar',
    ].includes(route.path)) {
    if (i18n.locale === 'en')
      return redirect('/')
    else
      return redirect('/ar')

  }




}

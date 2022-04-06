export default function ({ $axios, app, store }, inject) {
  // Create a custom axios instance
  const axios = $axios.create({
    headers: {
      common: {
        'Accept': "application/json",
        'Content-Type': 'multipart/form-data',
        'token':app.$cookies.get('token'),
        // 'session-id':store.state.auth.sessionId
      }
    }
  })

  // Set baseURL to something different

   axios.setBaseURL('https://customer-api.mr-mussllaha.tecbadia.com/')



  // axios.setBaseURL('https://fakestoreapi.com')

  // Inject to context as $api
  inject('axios', axios)
}

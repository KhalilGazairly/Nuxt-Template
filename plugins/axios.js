export default function ({ $axios, app }, inject) {
  // Create a custom axios instance
  const axios = $axios.create({
    headers: {
      common: {
        'Accept': "application/json",
        'Content-Type': 'multipart/form-data',
        'Vary':'X-HTTP-Method-Override',
        'Content-Type': 'application/json',
        'Authorization':app.$cookies.get('Authorization'),
        // 'session-id':store.state.auth.sessionId
      }
    }
  })

  //  axios.setBaseURL('https://customer-api.mr-mussllaha.tecbadia.com/')
  axios.setBaseURL('http://162.0.236.15:5003')
  inject('axios', axios)
}

export default function ({ $axios, app }, inject) {
  // Create a custom axios instance
  const axios = $axios.create({
    headers: {
      common: {
        'Accept': "application/json",
        'Content-Type': 'multipart/form-data',
        'Vary':'X-HTTP-Method-Override',
        'Content-Type': 'application/json',
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWZjZjEzZWM2ZTczNzdlNTk3YjRhNSIsImlhdCI6MTY1NTA1NTA3MCwiZXhwIjoxNjYzNjk1MDcwfQ.Dn3q4mev-E9mM5U3J7rU5vhFrNITRN34RU3PjXSVoIc',
        // 'session-id':store.state.auth.sessionId
      }
    }
  })

  //  axios.setBaseURL('https://customer-api.mr-mussllaha.tecbadia.com/')
  axios.setBaseURL('http://162.0.236.15:5003')
  inject('axios', axios)
}

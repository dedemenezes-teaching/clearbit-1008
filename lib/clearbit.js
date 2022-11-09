const authorization = 'Bearer sk_86ee6f57f938a1770376051456b4d6e6';
// TODO

const fillInformations = (data) => {
  const userName = document.querySelector('#userName')
  const userEmail = document.querySelector('#userEmail')
  const userBio = document.querySelector('#userBio')
  const userLocation = document.querySelector('#userLocation')
  userEmail.innerText = data.person.email
  userBio.innerText = data.person.bio
  userName.innerText = data.person.name.fullName
  userLocation.innerText = data.person.location
}

// 0. SELECT YOUR ELEMENT
const form = document.querySelector('#clearbitForm');
// 1. Add a event listener to the form
form.addEventListener('submit', (event) => {
  // Need to prevent the page reloading
  event.preventDefault()
  // Get the value typed in the input
  // 1. Capture the element you want to manipulate
  const input = document.querySelector('#clearbitEmail')
  // 2. Access input value
  const inputValue = input.value
  // 2. Send an AJAX request to the Clearbit API (fetch)
  const apiURL = `https://person.clearbit.com/v2/combined/find?email=${inputValue}`
  fetch(apiURL, { headers: { Authorization: authorization } })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      // We need to insert the information in the right field
      // 3. Display the result
      fillInformations(data)
    })
})

const contactForm = document.querySelector('#contactForm')

if (contactForm) {
  const button = contactForm.querySelector('button#sendMessageButton')

  button.addEventListener('click', async (e) => {
    e.preventDefault()
    e.stopPropagation()

    let name = contactForm.querySelector('input#name').value
    let email = contactForm.querySelector('input#email').value
    let subject = contactForm.querySelector('input#subject').value
    let message = contactForm.querySelector('textarea#message').value

    // const body = `{"name":"${name}","email":"${email}", "subject":${subject}, "text": ${message}}`
    // console.log(body)

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, email: email, subject: subject, text: message })
    };

    const response = await fetch('/api/v1/contact/send', options);
    const data = await response.json();

    console.log(data)

  })
}
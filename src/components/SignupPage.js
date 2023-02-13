import { useState } from 'react';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState("");
  const [submitted, setSubmitted] = useState(false)

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  

  function handleNationalityChange(event) {
    setNationality(event.target.value);
    
  }


  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
    
     
  }

  return (
    <div>
      SignupPage
      <form onSubmit={handleSubmit}>
      <label htmlFor='email'>Email</label>
      <input
        onChange={handleEmailChange}
        type="email"
        id="email"
        name="email"
        value={email}
      ></input>
      <label htmlFor='password'>Password</label>
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}></input>
      <label htmlFor='nationality'>Nationality</label>
      <select
        onChange={handleNationalityChange}
        name="nationality"
        id="nationality"
        value={nationality}
      >
        <option value="en">en</option>
        <option value="de">de</option>
        <option value="fr">fr</option>
      </select>
      {submitted && (
        <>
          <p>
            {nationality === "en" ? "Hello" : nationality === "de" ? "Hallo" : "Bonjour"}
          </p>
          <p>Your email is {email}</p>
        </>
      )}
      <button id="submit-button" type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignupPage;

import { useState } from 'react'
import './UserRegister.css'

const UserRegister = () => {
    const [progress,setProgress] = useState(0);
    const [formValues,setFormValues] = useState({
        firstName:'',
        lastName:'',
        phoneno:'',
        email:''
    });

    const handleChange = (e) => {
        // setFormValues((prev)=>({
        //     ...prev,
        //     [e.target.name] : e.target.value
        // }));
        const {name,value} = e.target;
         setFormValues((prev) => {
    const updatedValues = {
      ...prev,
      [name]: value,
    };

    const filledFields = Object.values(updatedValues).filter(
      (field) => field.trim() !== ""
    ).length;

    setProgress((filledFields / Object.keys(updatedValues).length) * 100);

    return updatedValues;
  });

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(22,formValues)
    }
  return (
    <main className="registration-page">
      <section className="registration-card" aria-labelledby="registration-title">
        <div className="register">
          <div className="form-heading">
            <span className="form-eyebrow">GET STARTED</span>
            <h1 id="registration-title">Create your account</h1>
            <p>Enter your details to complete your registration.</p>
          </div>
          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="form-fields">
              <div className="form-field">
                <label htmlFor="first-name">First name</label>
                <input id="first-name"
                name="firstName" type="text"
                placeholder="e.g. Alex"
                autoComplete="given-name"
                value={formValues.firstName}
                onChange={handleChange}
                 />
              </div>
              <div className="form-field">
                <label htmlFor="last-name">Last name</label>
                <input id="last-name"
                name="lastName"
                type="text"
                placeholder="e.g. Morgan"
                autoComplete="family-name"
                 value={formValues.lastName}
                onChange={handleChange}
                 />
              </div>
              <div className="form-field">
                <label htmlFor="phone">Contact number</label>
                <input id="phone"
                name="phoneno"
                type="tel"
                placeholder="Enter your phone number"
                autoComplete="tel"
                value={formValues.phoneno}
                onChange={handleChange}
                 />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email address</label>
                <input id="email"
                name="email" type="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={formValues.email}
                onChange={handleChange}
                 />
              </div>
            </div>
            <button className="register-button" type="submit">Create account <span aria-hidden="true">→</span></button>
          </form>
        </div>
        <aside className="completion" aria-label="Registration progress">
          <div className="progress-icon" aria-hidden="true">✓</div>
          <span className="progress-eyebrow">YOUR PROGRESS</span>
          <h2>Almost there</h2>
          <p>A few more details and your account will be ready.</p>
          <div className="progress-copy">
            <span>Profile setup</span>
            <strong>{progress}%</strong>
          </div>
          <progress className="registration-progress" value={progress} max="100" aria-label="Profile setup progress">{progress}%</progress>
          {/* <span className="progress-footnote">Step 1 of 3</span> */}
        </aside>
      </section>
    </main>
  )
}

export default UserRegister

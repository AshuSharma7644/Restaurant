import React from 'react'

const Contact = () => {
  return (
    <>
      {/* Hero Section start */}


     

<div className='contact_main'>
<div>
<div className='inner_col inner_contact'>
<h1>Conatct Us</h1>
<a href="#">Home <span><i className="fa fa-solid fa-chevron-right"></i></span> Contact us</a>
</div>
</div>


</div>


      {/* Hero Section End */}


      {/* Second Section Start  */}
      <section id="form">
      <div className='inner_form'>
      <div className="reservation__done">
    <div className="reservation__content">
      <div className="reservation__inner">
        <span className="circle">
          <i className="fa-solid fa-location-dot" />
        </span>
        <h3>Location</h3>
        <p>
        6952 Shelley St Melbourne
        </p>
      </div>
      <div className="reservation__inner">
        <span className="circle">
          <i className="fa-solid fa-phone" />
        </span>
        <h3>Location</h3>
        <p>
          9854 Shelly st
          <br />
          melbourne
        </p>
      </div>
      <div className="reservation__inner">
        <span className="circle">
          <i className="fa-regular fa-envelope" />
        </span>
        <h3>Location</h3>
        <p>
          9854 Shelly st
          <br />
          melbourne
        </p>
      </div>
      <div className="reservation__inner">
        <span className="circle">
          <i className="fa-regular fa-clock" />
        </span>
        <h3>Location</h3>
        <p>
          9854 Shelly st
          <br />
          melbourne
        </p>
      </div>
    </div>
    <div className="form__inner">
      <h2>Reservation</h2>
      <form className="myform">
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="firstName" className="label">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required=""
              placeholder="John Doe"
            />
          </div>
          <div className="form-col">
            <label htmlFor="lastName" className="label">
              Email:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required=""
              placeholder="info@example.com "
            />
          </div>
          <div className="form-col">
            <label htmlFor="email" className="label">
              Number:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required=""
              placeholder={2565987423}
            />
          </div>
          <div className="form-col">
            <label htmlFor="number" className="label">
              Member:
            </label>
            <input
              type="text"
              id="number"
              name="number"
              required=""
              pattern="\d*"
              placeholder="1 person"
            />
          </div>
        </div>
        <div className="textarea">
          <label htmlFor="message" className="label">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            cols={50}
            placeholder="Hi, do you Have a moment to talk About !"
            defaultValue={""}
          />
        </div>
        <br />
        <br />
        <div className="submit--main">
          <input type="submit" defaultValue="Submit" className="submit" />
        </div>
      </form>
    </div>
  </div>
      </div>
  
</section>

      {/* Second Section End  */}
    </>
  )
}

export default Contact
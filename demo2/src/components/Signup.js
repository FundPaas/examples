import React, { Component } from 'react';
import { Link } from 'react-router';

class Signup extends Component{
  render(){
    return (
      <div className='App__Container'>
        <div className="App__Signup">
          <h1>Signup</h1>
          <hr />
          <div className='App__Notification' />
          <table className="App__Signup__Form">
            <thead className='App__Signup__Form__Instructions'>
              <tr>
               <td colSpan={2}><div></div>Required fields</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="username">Personal email</label>
                  <input type="email" name="username" id="username" />
                </td>
                <td>
                  <label htmlFor="ssn">SSN</label>
                  <input type="text" name="ssn" id="ssn" />
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="firstName">First name</label>
                  <input type="text" name="firstName" id="firstName" />
                </td>
                <td>
                  <label htmlFor="lastName">Last name</label>
                  <input type="text" name="lastName" id="lastName" />
                </td>
              </tr>

              <tr>
                <td colSpan={2}>
                  <label htmlFor="streetAddress1">Personal address</label>
                  <input type="text" name="streetAddress1" id="streetAddress1" placeholder="e.g. 123 Main St" />
                </td>
              </tr>

              <tr>
                <td colSpan={2}>
                  <input type="text" name="streetAddress2" id="streetAddress2" placeholder="e.g. Suite 101" />
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="city">City</label>
                  <input type="text" name="city" id="city" />
                </td>
                <td className='App__Signup__Form__Col--2'>
                  <div>
                    <div>
                      <label htmlFor="usState">State</label>
                      <select name="usState" id="usState" ><option disabled="disabled" selected="selected" value=""></option><option value="AL">AL</option><option value="AK">AK</option><option value="AZ">AZ</option><option value="AR">AR</option><option value="CA">CA</option><option value="CO">CO</option><option value="CT">CT</option><option value="DE">DE</option><option value="DC">DC</option><option value="FL">FL</option><option value="GA">GA</option><option value="HI">HI</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option><option value="IA">IA</option><option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="ME">ME</option><option value="MD">MD</option><option value="MA">MA</option><option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option><option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option><option value="NV">NV</option><option value="NH">NH</option><option value="NJ">NJ</option><option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option><option value="ND">ND</option><option value="OH">OH</option><option value="OK">OK</option><option value="OR">OR</option><option value="PA">PA</option><option value="RI">RI</option><option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option><option value="VT">VT</option><option value="VA">VA</option><option value="WA">WA</option><option value="WV">WV</option><option value="WI">WI</option><option value="WY">WY</option><option value="AS">AS</option><option value="GU">GU</option><option value="MP">MP</option><option value="PR">PR</option><option value="VI">VI</option><option value="FM">FM</option><option value="MH">MH</option><option value="PW">PW</option><option value="AA">AA</option><option value="AE">AE</option><option value="AP">AP</option></select>
                    </div>
                  </div>
                  <div>
                    <div>
                      <label htmlFor="postalCode">Zip code</label>
                      <input type="text" name="postalCode" id="postalCode" />
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="phoneNumber">Personal phone</label>
                  <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="+1 000-000-0000" />
                </td>
                <td>
                  <label htmlFor="dob">Date of birth</label>
                  <input type="date" name="dob" id="dob" />
                </td>
              </tr>

              <tr className='App__Signup__Form__Upload-File'>
                <td colSpan={2}>
                  <label>Driver's license</label>
                  <label>
                    <input type="file" name="driversLicense" id="driversLicense" />
                    <div>Choose file</div>
                    <span></span>
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="App__Signup__Form__Button-Group">
            <Link to='/'>
              <button>Back</button>
            </Link>
            <button type="submit">Continue</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
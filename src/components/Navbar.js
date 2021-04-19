import react from 'react';
import {Link} from 'react-router-dom'

var theme = "light"
function changeTheme(){
  if(theme == "light"){
    document.documentElement.setAttribute('data-theme','dark');
    theme = "dark"
  }
  else {
    document.documentElement.setAttribute('data-theme','light');
    theme = "light"
  }

}
function Navbar()
{
  return (
    <nav className = "navbar">
      <ul className = "navbar-nav">
      <li onClick = {changeTheme} className="nav-link">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 width="578.405px" height="578.405px" viewBox="0 0 578.405 578.405" xml="preserve">
        <g>
        	<g>
        		<path d="M289.203,0C129.736,0,0,129.736,0,289.203C0,448.67,129.736,578.405,289.203,578.405
        			c159.467,0,289.202-129.735,289.202-289.202C578.405,129.736,448.67,0,289.203,0z M28.56,289.202
        			C28.56,145.48,145.481,28.56,289.203,28.56l0,0v521.286l0,0C145.485,549.846,28.56,432.925,28.56,289.202z"/>
        	</g>
        </g>

        </svg>
      </li>

      <Link to='Cypherit/practical-assignment-0' style={{ textDecoration: 'none' }}>
        <li className="nav-link">
          <p className = "font-icon"> PA0 </p>
        </li>
      </Link>
      <Link to='/practical-assignment-1' style={{ textDecoration: 'none' }}>
        <li className="nav-link">
          <p className = "font-icon"> PA1 </p>
        </li>
      </Link>
        <Link to='/key-generator'>
          <li className="nav-link">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 469.333 469.333"  xml="preserve">
            <g>
            <g>
              <path d="M248.533,192c-17.6-49.707-64.853-85.333-120.533-85.333c-70.72,0-128,57.28-128,128s57.28,128,128,128
                c55.68,0,102.933-35.627,120.533-85.333h92.8v85.333h85.333v-85.333h42.667V192H248.533z M128,277.333
                c-23.573,0-42.667-19.093-42.667-42.667S104.427,192,128,192c23.573,0,42.667,19.093,42.667,42.667S151.573,277.333,128,277.333z"
                />
            </g>
            </g>
            </svg>
          </li>
        </Link>

        <Link to="/encrypt-image">
          <li className="nav-link">
              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
          	 width="535.5px" height="535.5px" viewBox="0 0 535.5 535.5" xml="preserve"
          	>
          <g>
          	<g id="lock">
          		<path d="M420.75,178.5h-25.5v-51c0-71.4-56.1-127.5-127.5-127.5c-71.4,0-127.5,56.1-127.5,127.5v51h-25.5c-28.05,0-51,22.95-51,51
          			v255c0,28.05,22.95,51,51,51h306c28.05,0,51-22.95,51-51v-255C471.75,201.45,448.8,178.5,420.75,178.5z M267.75,408
          			c-28.05,0-51-22.95-51-51s22.95-51,51-51s51,22.95,51,51S295.8,408,267.75,408z M346.8,178.5H188.7v-51
          			c0-43.35,35.7-79.05,79.05-79.05c43.35,0,79.05,35.7,79.05,79.05V178.5z"/>
          	</g>
          </g>

          </svg>
          </li>
        </Link>
        <Link to="/encrypt-image-operation">
          <li className="nav-link">
            <svg id="Layer_1" enable-background="new 0 0 512.001 512.001" viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg"><path d="m437.334 0h-234.666s0 0-2.133 0c0 0 0 0-2.133 0s-4.267 2.133-4.267 2.133l-128 128c-2.135 2.134-2.135 2.134-2.135 4.267v2.133 2.133 362.667c0 6.4 4.267 10.667 10.667 10.667h362.667c6.4 0 10.667-4.267 10.667-10.667v-490.666c0-6.4-4.267-10.667-10.667-10.667zm-245.333 36.267v91.733h-91.733zm-32 390.4c-6.4 0-10.667-4.267-10.667-10.667v-38.4l-2.133 2.133c-4.267 4.267-10.667 4.267-14.934 0s-4.267-10.667 0-14.934l21.333-21.333c2.133-2.133 8.533-4.267 10.667-2.133 4.267 2.133 6.4 6.4 6.4 10.667v64h.001c0 6.4-4.267 10.667-10.667 10.667zm21.333-128h-42.667c-6.4 0-10.667-4.267-10.667-10.667v-64c0-6.4 4.267-10.667 10.667-10.667h42.667c6.4 0 10.667 4.267 10.667 10.667v64c0 6.4-4.267 10.667-10.667 10.667zm74.667 117.333c0 6.4-4.267 10.667-10.667 10.667h-42.667c-6.4 0-10.667-4.267-10.667-10.667v-64c0-6.4 4.267-10.667 10.667-10.667h42.667c6.4 0 10.667 4.267 10.667 10.667zm-10.667-117.333c-6.4 0-10.667-4.267-10.667-10.667v-38.4l-2.133 2.133c-4.267 4.267-10.667 4.267-14.934 0s-4.267-10.667 0-14.934l21.333-21.333c2.133-2.133 8.533-4.267 10.667-2.133 4.267 2.133 6.4 6.4 6.4 10.667v64h.001c0 6.4-4.267 10.667-10.667 10.667zm64 128c-6.4 0-10.667-4.267-10.667-10.667v-38.4l-2.133 2.133c-4.267 4.267-10.667 4.267-14.934 0s-4.267-10.667 0-14.934l21.333-21.333c2.133-2.133 8.533-4.267 10.667-2.133 4.267 2.133 6.4 6.4 6.4 10.667v64h.001c0 6.4-4.267 10.667-10.667 10.667zm0-128c-6.4 0-10.667-4.267-10.667-10.667v-38.4l-2.133 2.133c-4.267 4.267-10.667 4.267-14.934 0s-4.267-10.667 0-14.934l21.333-21.333c2.133-2.133 8.533-4.267 10.667-2.133 4.267 2.133 6.4 6.4 6.4 10.667v64h.001c0 6.4-4.267 10.667-10.667 10.667zm64 128c-6.4 0-10.667-4.267-10.667-10.667v-38.4l-2.133 2.133c-4.267 4.267-10.667 4.267-14.934 0s-4.267-10.667 0-14.934l21.333-21.333c2.133-2.133 8.533-4.267 10.667-2.133 4.267 2.133 6.4 6.4 6.4 10.667v64h.001c0 6.4-4.267 10.667-10.667 10.667zm0-128c-6.4 0-10.667-4.267-10.667-10.667v-38.4l-2.133 2.133c-4.267 4.267-10.667 4.267-14.934 0s-4.267-10.667 0-14.934l21.333-21.333c2.133-2.133 8.533-4.267 10.667-2.133 4.267 2.133 6.4 6.4 6.4 10.667v64h.001c0 6.4-4.267 10.667-10.667 10.667z"/><path d="m213.334 362.667h21.333v42.667h-21.333z"/><path d="m149.334 234.667h21.333v42.667h-21.333z"/>
            </svg>
          </li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar

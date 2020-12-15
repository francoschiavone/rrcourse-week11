import React from 'react';
import '../css/Aside.css';

export default function Aside() {
    return (
        <aside>
          <div id = 'asideDiv1'>
            <h3 id = 'asideTitle'>CaldAR</h3>
          </div>
          <div id = 'asideDiv2'>
            <ol>
              <h4>
                <li>
                  <a href="/#">Customers</a>
                </li>
                <li>
                  <a href="/#">Technicians</a>
                </li>
                <li>
                <a style={{color:"#fc6225"}} href="/#">Schedule</a>
                </li>
                <li>
                  <a href="/#">Boilers</a>
                </li>
                <li>
                  <a href="/#">Settings</a>
                </li>
                <li>
                  <a href="/#">Reports</a>
                </li>
              </h4>
            </ol>
          </div>
        </aside>
    )
}

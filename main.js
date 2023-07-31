import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { UsersApp } from './src/users/users-app';
// import { BreakingbadApp } from './src/breakingbad/breakingbad-app'

document.querySelector('#app').innerHTML = `
  <div>
    <div class="card">
      
    </import { loadUsersByPage } from "../use-cases/load-users-by-page";div>
    
  </div>
`;

const element = document.querySelector('.card');

// BreakingbadApp( element );
UsersApp( element );
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

export {default as Home} from './page/home/Home';
export {default as Friend} from './page/friend/Friend';
export {default as JobPage} from './page/jobs/JobPage';
export {default as JobPosting} from './page/jobs/JobPosting';
export {default as Message} from './page/message/Message';
export {default as Profile} from './page/profile/UserProfile';
export {default as Notification} from './page/notifications/Notification';
export {default as EmployerProfile} from './page/profile/EmployerProfile';
export {default as ForgotPassword} from "./page/sign-in/ForgotPassword";
export {default as Login} from "./page/sign-in/SignIn";
export {default as SignUp} from "./page/sign-in/SignUp";
export {default as VerifyAccount} from "./page/sign-in/VerifyAccount";
export {default as AccountSetup} from "./page/set-up-account/AccountSetup";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
  <App/>
</React.StrictMode>);

reportWebVitals();

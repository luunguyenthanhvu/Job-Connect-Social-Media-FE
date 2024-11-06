import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

export {default as Home} from './page/home/Home';
export {default as Friend} from './page/friend/Friend';
export {default as Jobs} from './page/job/Job';
export {default as Profile} from './page/profile/Profile';
export {default as Notification} from './page/notifications/Notification';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
);

reportWebVitals();

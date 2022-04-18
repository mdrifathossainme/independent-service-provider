import React from 'react';

const Blog = () => {
    return (
        <div className='container py-5'>
          <div className="question">
              <h1>1.Difference between authorization and authentication </h1>
              <h4>Authentication:</h4>
              <p>Authentication verifies who the user is. Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user. Authentication is the first step of a good identity and access management process. Authentication is visible to and partially changeable by the user.</p>
              <h4>Authorization:</h4>
              <p>Authorization determines what resources a user can access.Authorization works through settings that are implemented and maintained by the organization.Authorization always takes place after authentication.Authorization isn’t visible to or changeable by the user.</p>
          </div>
          <div className="question">
              <h1>2.Why are you using firebase? What other options do you have to implement authentication? </h1>
              <h4>Why are you using firebase?</h4>
              <p>That's why I use Firebase <br />
                  1. Incredibly Built-In Analytics <br />
               2.App Development Made Easy <br />
               3.Growth and User Engagement <br />4. Increase Your Earnings </p>
              <h4>What other options do you have to implement authentication?</h4>
              <p>1.MySQL Login System <br />2.SQL SERVER <br />3.Dev.to <br />4.Auth0  <br /></p>
          </div>
          <div className="question">
              <h1>3.What other services does firebase provide other than authentication? </h1>
                <p>
                1.Parse  Open Source Backend Platform;<br />
                2.Back4app  Parse Hosting Platform;<br />
                3.Kinvey  Mobile Backend as a Service (mBaaS) for the Enterprise;<br />
                4.Backendless  Mobile Backend and API Services Platform;<br />
                5.Kuzzle  Backend for web, hybrid, or native mobile apps and IoT projects;<br />
                6.Pubnub  Real-time APIs and Global Messaging;<br />
                7.Kumulos  App Performance Management;<br />
                8.Game Sparks  Game Backend Platform;<br />
                9.Hoodie  Generic backend with a client API for Offline First applications;<br />
                10.Appwrite  Open-Source backend for Flutter developers<br />
                11.Deployd  Simple core library, with a modular API for your application;<br />
                12.NHost  Accelerates development and provides full control;<br />
                13.Amplify JS  Open-source Javascript framework;<br />
                14.Heroku  Platform as a service backed by Salesforce.a
                </p>
        </div>
        </div>
    );
};

export default Blog
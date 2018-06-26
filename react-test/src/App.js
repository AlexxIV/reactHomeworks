import React from 'react';
import './App.css';
import ContactList from './contacts.json';

const showContact = data => (
  <div className="contact" key={data.email} data-id="id">
    <span className="avatar small">&#9787;</span>
    <span className="title">{data.firstName} {data.lastName}</span>
  </div>
);

const renderList = () => {
  const finalList = [];
  for (let contact of ContactList) {
      finalList.push(showContact(contact));
  }
  return finalList;
};

const App = (
      <div class="container">
    <header>&#9993; Contact Book</header>
    <div id="book">
        <div id="list">
            <h1>Contacts</h1>
            <div class="content">
               {/* {ContactList.map(showContact)} */}
               {renderList()}
            </div>
        </div>
        <div id="details">
            <h1>Details</h1>
            <div className="content">
                <div className="info">
                    <div className="col">
                        <span className="avatar">&#9787;</span>
                    </div>
                    <div class="col">
                        <span className="name">Ivan</span>
                        <span className="name">Ivanov</span>
                    </div>
                </div>
                <div className="info">
                    <span className="info-line">&phone; 0887 123 456</span>
                    <span className="info-line">&#9993; i.ivanov@gmail.com</span>
                </div>
            </div>
        </div>
    </div>
    <footer>Contact Book SPA &copy; 2017</footer>
</div>
    );

export default App;
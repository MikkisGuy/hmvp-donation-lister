import React from 'react';
import './index.css';
import Header from '../Header';
import DonationList from '../DonationList';
import Footer from '../Footer';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <DonationList />
      <Footer />
    </div>
  );
}
  
export default App;
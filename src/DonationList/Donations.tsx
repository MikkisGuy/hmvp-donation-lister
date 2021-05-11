import React from 'react';
import DonationsFetcher from './DonationsFetcher';

// Siirretään pois täältä ettei kutsuta aina luokassa
const donationsApi = new DonationsFetcher();
const donationsList = donationsApi.GetDonations();

export default function Donations(): JSX.Element {
  console.log(donationsList);
  return <div></div>;
}

// export default function DonationComponents() {
//   render(): React.ReactNode {
//     return donationsList.then((donations) => {
//       donations.map((donation, i) => {
//         return <Donation key={i} params={donation} />;
//       });
//     });
//   }
// }

// Kopioitu: https://stackoverflow.com/questions/47740235/react-js-create-input-elements-from-json-schema
// Muokataan omaan käyttöön
// class Donation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.changeValue = this.changeValue.bind(this);
//   }

//   render() {
//     return (
//       <div className={className}>
//         <label htmlFor={this.props.name}>{this.props.title}</label>
//         <input
//           onChange={this.changeValue}
//           name={this.props.name}
//           type={this.props.type}
//           value={this.props.value}
//         />
//       </div>
//     );
//   }
// }

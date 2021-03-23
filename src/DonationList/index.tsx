import React from 'react';
import DonationsFetcher from './DonationsFetcher';
import './index.css';

export default function DonationList(): JSX.Element {
  const donationsApi = new DonationsFetcher();

  donationsApi.GetDonations().then((donations) => {
    donations.map((donation) => console.log(donation));
  });

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nimimerkki</th>
            <th>Lahjoitus</th>
            <th>Viesti</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
}

import fetch from 'node-fetch';
import React from 'react';
import './index.css';

export default function DonationList(): JSX.Element {
  const donationsApi = new DonationLister();

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

class DonationsData {
  Name: string;
  Amount: number;
  Message: string;

  constructor(Name: string, Amount: number, Message: string) {
    this.Name = Name;
    this.Amount = Amount;
    this.Message = Message;
  }
}

class DonationLister {
  GetDonations(): Promise<DonationsData[]> {
    return fetch(
      'https://potti.mieli.fi/f/Donation/GetDonations/?collectionId=COL-16-3552&pageSize=150&startAt=0'
    ).then((res) => res.json());
  }
}

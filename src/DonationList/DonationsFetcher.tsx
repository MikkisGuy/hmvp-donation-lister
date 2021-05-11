import { useState } from 'react';
import fetch from 'node-fetch';

/* class DonationsData {
  Name: string;
  Amount: number;
  Message: string;

  constructor(Name: string, Amount: number, Message: string) {
    this.Name = Name;
    this.Amount = Amount;
    this.Message = Message;
  }
}

export default class DonationsFetcher {
  GetDonations(): Promise<DonationsData[]> {
    return fetch(
      'https://potti.mieli.fi/f/Donation/GetDonations/?collectionId=COL-16-3552&pageSize=150&startAt=0'
    ).then((res) => res.json());
  }
} */

interface IDonationsData {
  DonationId: string;
  Name: string;
  Amount: number;
  Message: string;
  TransactionDate: string;
}
export default function DonationsFetcher(): HTMLElement {
  const [donations, setDonations] = useState<IDonationsData[]>([]);

  async function fetchDonations(url: string) {
    const response = await fetch(url);
    return await response.json();
  }

  const fetchDon = fetchDonations(
    'https://potti.mieli.fi/f/Donation/GetDonations/?collectionId=COL-16-3552&pageSize=150&startAt=0'
  );

  const donationList = donations.map((donations) => <li>{donations.Name}</li>);

  return donationList;
}

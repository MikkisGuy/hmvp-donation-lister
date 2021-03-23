import fetch from 'node-fetch';

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

export default class DonationsFetcher {
  GetDonations(): Promise<DonationsData[]> {
    return fetch(
      'https://potti.mieli.fi/f/Donation/GetDonations/?collectionId=COL-16-3552&pageSize=150&startAt=0'
    ).then((res) => res.json());
  }
}

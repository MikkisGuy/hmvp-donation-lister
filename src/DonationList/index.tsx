import React from 'react';
import './index.css';
import fetch from 'node-fetch';

function DonationList(): JSX.Element {

  // const donations = iGetDonations('https://potti.mieli.fi/f/Donation/GetDonations/?collectionId=COL-16-3552&pageSize=50&startAt=0');

  // console.log(donations);

  return <>
  
  </>;
}

export default DonationList;

class DonationsData{
  name: string;
  amount: number;
  message: string;

  constructor(name: string, amount: number, message: string){
    this.name = name;
    this.amount = amount;
    this.message = message;
  }
}

// eslint-disable-next-line
function FormatDonations(donation: any): DonationsData{
  return {name: donation.name, amount: donation.amount, message: donation.message};
}

class DonationLister {
  GetDonations(): Promise<DonationsData[]>{
    return fetch('https://potti.mieli.fi/f/Donation/GetDonations/?collectionId=COL-16-3552&pageSize=50&startAt=0')
      .then(res => res.json())
      .then(res => res.map((donation: DonationsData[]) => FormatDonations(donation)));
  }
}

const donationsApi = new DonationLister();

donationsApi.GetDonations().then(donations => console.log(donations[0]['name']));


// interface iDonationsData  {
//   DonationId: string,
//   Name: string,
//   Amount: number,
//   Message: string
// }
// 
// async function iGetDonations(JsonUrl: string): Promise<iDonationsData>{
// 
//   const response = await fetch(JsonUrl);
//   const data = await response.json();
// 
//   // const objs = JSON.parse(data) as MyObj[];
// 
//   return data;
// }
// 
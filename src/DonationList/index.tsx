import React from 'react';
import './index.css';
import fetch from 'node-fetch';

function DonationList(): JSX.Element {

  const donations = GetDonations('https://potti.mieli.fi/f/Donation/GetDonations/?collectionId=COL-16-3552&pageSize=50&startAt=0');

  console.log(donations);

  return <>
  
  </>;
}

export default DonationList;

interface donationsData  {
  DonationId: string,
  Name: string,
  Amount: number,
  Message: string
}

async function GetDonations(JsonUrl: string): Promise<donationsData[]>{

  //  const don: donationsData = {
  //    DonationId: '';
  //  }

  const response = await fetch(JsonUrl);
  const data = await response.json();
  
  return data;
}
import type { NextPage } from 'next'


// -------- Title function of dropdown bubble 
const getFaqTitle = (n: number) => {
  switch (n) {
    case 1:
      return 'What is the Wallet Speed Tester?'
    case 2:
      return 'How do I use the Tester?'
    case 3:
      return 'Who Are You?'
    case 4:
      return 'Is it open source?'
    case 5:
      return 'Is it free?'
    case 6:
      return 'How are Speeds calculated?'
    case 7:
      return 'How are Monies used?'

    default:
      return 'Wallet Speed Test'
  }
}

//-------- Body function of the dropdown bubble
const getFaqText = (n: number) => {
  switch (n) {
    case 1:
      return 'This is the Premium Tester for Cardano Wallets and the best way see how fast you can make your wallet for those teeth cutting mints!'
    case 2:
      return 'Connect your Wallet and let it load the data into the BasicTime Tester Algo. The number it spits out in in reference to lovelace lund units, a custom computational time period of uncertain length.'
    case 3:
      return 'The Wallet Speed Test is "non-custodial". When you use this Service, NOTHING is collected(user info, wallet info, device info, location info, money not part of TimeTest Service or Donation) Except for payment fees from the TimeTest Service or Donation, Nothing is collected.'
    case 4:
      return 'Yes! All of the validation code/Smart contracts/BasicTime algorythms are open source and can be found in the MADAO or ADAO GitHub. Always demand open source.'
    case 5:
      return 'A small fee is placed on the TimeTest feature and any other money sent through the fiat portal will be considered a Donation and not refundable, these fees help us cover the cost to manage this service.'
    case 6:
      return 'Rewards are calculated and accumulated via a snapshot mechanic off-chain, they are based on the amount a user has staked'
    case 7:
      return 'Rewards are distributed from the backend in a single transaction to each user upon clicking harvest.'

    default:
      return 'Wallet Speed Test for Cardano Wallets'
  }
}

// Page call to change to this Layout section with stylings
const Faq: NextPage = () => {
  return (
    <>
      <div className="bg-accent-dark hero min-h-screen bg-hero bg-cover">
        <div className="hero-content flex flex-col text-center text-neutral">
          {[1, 2, 3, 4, 5, 6, 7].map((n) => ( //This is the mapping array to add or remove additonal Dropdown bubbles
            <FaqItem key={n} heading={getFaqTitle(n)} text={getFaqText(n)} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Faq 

// ------- This component styles array within the div tag that is mapping the array
function FaqItem({ heading, text }: { heading: string; text: string }) {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow my-2 w-full rounded-full py-2 text-white focus:outline-white focus:ring active:text-opacity-95"
    >
      <div className="collapse-title text-xl font-medium">{heading}</div>
      <div className="collapse-content">
        <p>{text}</p>
      </div>
    </div>
  )
}


//Made by Riley at ADAO ------ Commented by Sheridan Lund at MADAO




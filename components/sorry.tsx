import { useEffect, useState } from "react";

type SorryProps = {
  error?: boolean,
  reload?: () => void,
}

const Sorry: React.FC<SorryProps> = ({ error, reload }) => {
  
  const phrases = [
    "Hold on, we're buffering...",
    "Please wait while we load this page as slowly as possible.",
    "We're sorry, this page is taking longer than expected. Maybe try a different internet?",
    "Don't worry, we're just trying to make this loading screen last as long as possible.",
    "The internet gods are not in our favor today.",
    "We're sorry, something went wrong. Maybe try reloading the page?",
  ];
  const [phraseIndex, setPhraseIndex] = useState(Math.floor(Math.random() * phrases.length));
 //useEffect(() => {Math.floor(Math.random() * phrases.length)},[])
  //setPhraseIndex(Math.floor(Math.random() * phrases.length))--------------------this is an infinite loop---CAUTION: AVOID USING
  if (error && reload) {
    return (
      <div className="text-2xl font-bold text-red-700">
        {phrases[phraseIndex]}
        <button onClick={reload} className="mx-4 py-2 px-4 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-700 focus:outline-none">Reload</button>
      </div>
    );
  }

  return (
    <div className="text-2xl font-bold text-gray-700 rounded-md bg-blue p-4" >
      {phrases[phraseIndex]}
    </div>
  );
}

export default Sorry;

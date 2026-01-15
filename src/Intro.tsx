import { useState, useEffect } from 'react';
import './index.css'
import headShot from './assets/headshot.jpg';

const phrases = [
  'building impactful software',
  'cooking good food',
  'traveling the world',
  'learning new skills',
  'solving complex problems',
];

const longestPhrase = phrases.reduce((a, b) => a.length > b.length ? a : b);
const maxWidth = `${longestPhrase.length + 2}ch`; 

function Intro() {

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // forward typing
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        } else {
          // wait then deelte
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // delete backwards
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          // delete then move onto next phrase
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex]);

    return (
      <>
        <div className="h-screen w-full bg-transparent mb-10 content-center sm:items-start pt-6 text-white">
          <div className = "pb-8 flex-wrap sm:flex-nowrap flex sm:h-full items-center w-full justify-center gap-10 p-10 lg:gap-20">
              <div className = "fade-in-image opacity-0 transition-opacity duration-[2000ms] ">
                <p className = "text-xl sm:text-2xl md:text-4xl">
                  hi! i am
                </p>
                <p className = "font-semibold text-2xl sm:text-4xl md:text-6xl mb-1 sm:mb-4">
                  isaac nguyen.
                </p>
                <p className='text-xs sm:text-lg md:text-2xl'>
                  i like<span className="inline-block text-white px-1 rounded underline" style={{ minWidth: maxWidth, textUnderlineOffset: '0.1em' }}>{currentText}<span className="animate-pulse inline-block">|</span></span>
                </p>
              </div>
            <img src = {headShot} className='overflow-hidden fade-in-image opacity-0 transition-opacity duration-[2000ms]  sm:w-auto h-28 sm:h-40 md:h-72 rounded-full'></img>
          </div>

        </div>
      </>
    )
  }
  
  export default Intro;
  
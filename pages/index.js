import { useState } from 'react';
import Round from '../components/Round';
import End from '../components/End';

const index = () => {
  let words = [
    'POWERPOINT',
    'RANDOM ACCESS MEMORY',
    'MULTIMEDIA',
    'MALWARE',
    'SPREADSHEET',
    'SUPERCOMPUTER',
    'INTERNET',
    'LINUX',
    'WORLD WIDE WEB',
    'PYTHON',
    'GOOGLE MEET',
    'BROWSER',
  ];
  let hints = [
    'You use this Microsoft Application to make your Holiday projects!',
    'Short term Memory where Data is stored as the Processor needs it.',
    'A form of Communication that uses a Combination of Different content forms such as Text, Audio, Images, Animations, or Video into a Single Interactive Presentation.',
    'Any Program or File that is Intentionally harmful to a Computer, Network or Server.',
    " A Microsoft Application's tool that is used to Store, Manipulate and Analyze data.",
    'A Very high performance Computer.',
    'A Worldwide System of Computer Networks.',
    'A Free and Open source Operating System.',
    'A System of Interconnected Public Webpages accessible through the Internet.',
    'A Computer Programming Language often used to build Websites and Software, Automate tasks, and conduct Data Analysis.',
    'You had your Online Classes here!',
    'A Software Program used to Locate and Display Information on the Internet or an Intranet.',
  ];

  let [wrong, setWrong] = useState(0);
  let [r1, setR1] = useState(true);
  let [r2, setR2] = useState(false);
  let [r3, setR3] = useState(false);
  let [r4, setR4] = useState(false);
  let [r5, setR5] = useState(false);
  let [r6, setR6] = useState(false);
  let [r7, setR7] = useState(false);
  let [r8, setR8] = useState(false);
  let [r9, setR9] = useState(false);
  let [r10, setR10] = useState(false);
  let [r11, setR11] = useState(false);
  let [r12, setR12] = useState(false);
  let [r13, setR13] = useState(false);

  return (
    <>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
      <link
        href='https://fonts.googleapis.com/css2?family=Mynerve&display=swap'
        rel='stylesheet'
      />
      {r1 ? (
        <Round
          rr={1}
          wrong={wrong}
          setWrong={setWrong}
          word={words[0]}
          setRound={setR2}
          setPrev={setR1}
          hint={hints[0]}
        />
      ) : (
        ''
      )}
      {r2 ? (
        <Round
          rr={2}
          wrong={wrong}
          setWrong={setWrong}
          word={words[1]}
          setRound={setR3}
          setPrev={setR2}
          hint={hints[1]}
        />
      ) : (
        ''
      )}
      {r3 ? (
        <Round
          rr={3}
          wrong={wrong}
          setWrong={setWrong}
          word={words[2]}
          setRound={setR4}
          setPrev={setR3}
          hint={hints[2]}
        />
      ) : (
        ''
      )}
      {r4 ? (
        <Round
          rr={4}
          wrong={wrong}
          setWrong={setWrong}
          word={words[3]}
          setRound={setR5}
          setPrev={setR4}
          hint={hints[3]}
        />
      ) : (
        ''
      )}
      {r5 ? (
        <Round
          rr={5}
          wrong={wrong}
          setWrong={setWrong}
          word={words[4]}
          setRound={setR6}
          setPrev={setR5}
          hint={hints[4]}
        />
      ) : (
        ''
      )}
      {r6 ? (
        <Round
          rr={6}
          wrong={wrong}
          setWrong={setWrong}
          word={words[5]}
          setRound={setR7}
          setPrev={setR6}
          hint={hints[5]}
        />
      ) : (
        ''
      )}
      {r7 ? (
        <Round
          rr={7}
          wrong={wrong}
          setWrong={setWrong}
          word={words[6]}
          setRound={setR8}
          setPrev={setR7}
          hint={hints[6]}
        />
      ) : (
        ''
      )}
      {r8 ? (
        <Round
          rr={8}
          wrong={wrong}
          setWrong={setWrong}
          word={words[7]}
          setRound={setR9}
          setPrev={setR8}
          hint={hints[7]}
        />
      ) : (
        ''
      )}
      {r9 ? (
        <Round
          rr={9}
          wrong={wrong}
          setWrong={setWrong}
          word={words[8]}
          setRound={setR10}
          setPrev={setR9}
          hint={hints[8]}
        />
      ) : (
        ''
      )}
      {r10 ? (
        <Round
          rr={10}
          wrong={wrong}
          setWrong={setWrong}
          word={words[9]}
          setRound={setR11}
          setPrev={setR10}
          hint={hints[9]}
        />
      ) : (
        ''
      )}
      {r11 ? (
        <Round
          rr={11}
          wrong={wrong}
          setWrong={setWrong}
          word={words[10]}
          setRound={setR12}
          setPrev={setR11}
          hint={hints[10]}
        />
      ) : (
        ''
      )}
      {r12 ? (
        <Round
          rr={12}
          wrong={wrong}
          setWrong={setWrong}
          word={words[11]}
          setRound={setR13}
          setPrev={setR12}
          hint={hints[11]}
        />
      ) : (
        ''
      )}

      {r13 ? <End /> : ''}
    </>
  );
};

export default index;

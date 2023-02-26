import React from 'react';
import { useState } from 'react';

const Round = ({ rr, wrong, setWrong, word, setRound, setPrev, hint }) => {
  let [a, setA] = useState(false);
  let [b, setB] = useState(false);
  let [c, setC] = useState(false);
  let [d, setD] = useState(false);
  let [e, setE] = useState(false);
  let [f, setF] = useState(false);
  let [g, setG] = useState(false);
  let [h, setH] = useState(false);
  let [i, setI] = useState(false);
  let [j, setJ] = useState(false);
  let [k, setK] = useState(false);
  let [l, setL] = useState(false);
  let [m, setM] = useState(false);
  let [n, setN] = useState(false);
  let [o, setO] = useState(false);
  let [p, setP] = useState(false);
  let [q, setQ] = useState(false);
  let [r, setR] = useState(false);
  let [s, setS] = useState(false);
  let [t, setT] = useState(false);
  let [u, setU] = useState(false);
  let [v, setV] = useState(false);
  let [w, setW] = useState(false);
  let [x, setX] = useState(false);
  let [y, setY] = useState(false);
  let [z, setZ] = useState(false);
  let [a1, setA1] = useState(false);
  let [b1, setB1] = useState(false);
  let [c1, setC1] = useState(false);
  let [d1, setD1] = useState(false);
  let [e1, setE1] = useState(false);
  let [f1, setF1] = useState(false);
  let [g1, setG1] = useState(false);
  let [h1, setH1] = useState(false);
  let [i1, setI1] = useState(false);
  let [j1, setJ1] = useState(false);
  let [k1, setK1] = useState(false);
  let [l1, setL1] = useState(false);
  let [m1, setM1] = useState(false);
  let [n1, setN1] = useState(false);
  let [o1, setO1] = useState(false);
  let [p1, setP1] = useState(false);
  let [q1, setQ1] = useState(false);
  let [r1, setR1] = useState(false);
  let [s1, setS1] = useState(false);
  let [t1, setT1] = useState(false);
  let [u1, setU1] = useState(false);
  let [v1, setV1] = useState(false);
  let [w1, setW1] = useState(false);
  let [x1, setX1] = useState(false);
  let [y1, setY1] = useState(false);
  let [z1, setZ1] = useState(false);
  let [turn, setTurn] = useState(1);
  let [guessedWord, setguessedWord] = useState('');
  let [guess1, setGuess1] = useState(false);
  let [guess, setGuess] = useState(true);
  let [correct, setCorrect] = useState(0);
  console.log(word);

  return (
    <main
      style={{
        'grid-template-columns': '1fr 8fr 1fr',
      }}
      className='bg-[#222] h-full text-gray-100 grid relative'
    >
      {wrong === 8 ? (
        <>
          <div className='absolute w-full h-full bg-[#22222299] z-[15]'></div>
          <div className='bg-[#111] z-20  h-20 text-3xl absolute w-full self-center flex items-center justify-center'>
            <span
              style={{ color: '#f54444 !important' }}
              className="font-['MyNerve'] animate-pulse "
            >
              YoU LoSt
            </span>
          </div>
          <div className='z-20 h-20 text-3xl absolute w-full mt-[250px] self-center flex items-center justify-center'>
            <button
              onClick={() => {
                setWrong(1);
                setRound(true);
                setPrev(false);
                setA(false);
                setB(false);
                setC(false);
                setD(false);
                setE(false);
                setF(false);
                setG(false);
                setH(false);
                setI(false);
                setJ(false);
                setK(false);
                setL(false);
                setM(false);
                setN(false);
                setO(false);
                setP(false);
                setQ(false);
                setR(false);
                setS(false);
                setT(false);
                setU(false);
                setV(false);
                setW(false);
                setX(false);
                setY(false);
                setZ(false);
                setA1(false);
                setB1(false);
                setC1(false);
                setD1(false);
                setE1(false);
                setF1(false);
                setG1(false);
                setH1(false);
                setI1(false);
                setJ1(false);
                setK1(false);
                setL1(false);
                setM1(false);
                setN1(false);
                setO1(false);
                setP1(false);
                setQ1(false);
                setR1(false);
                setS1(false);
                setT1(false);
                setU1(false);
                setV1(false);
                setW1(false);
                setX1(false);
                setY1(false);
                setZ1(false);
                setGuess1(true);
                setCorrect(0);
                setguessedWord('');
              }}
              type='button'
              class='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-xl'
            >
              Next Round >
            </button>
          </div>
        </>
      ) : (
        ''
      )}
      {new Set([...word.split(' ').join('')]).size ===
        new Set([...guessedWord]).size &&
      [...new Set([...word.split(' ').join('')])].every((value) =>
        new Set([...guessedWord]).has(value)
      ) ? (
        <>
          <div className='absolute w-full h-full bg-[#22222299] z-[15]'></div>
          <div className='bg-[#111] z-20  h-20 text-3xl absolute w-full self-center flex items-center justify-center'>
            <span className='text-center'>
              <span
                style={{ color: '#42e44f' }}
                className="font-['MyNerve'] animate-pulse text-center"
              >
                YoU Won
              </span>
              <p className=' font-sans text-lg'>
                Give 1 point to{' '}
                {(turn == 1 ? 'ROW 4' : '') ||
                  (turn % 3 == 0 ? 'ROW 1' : '') ||
                  (turn % 5 == 0 ? 'ROW 2' : '') ||
                  (turn % 7 == 0 ? 'ROW 3' : '')}{' '}
              </p>
            </span>
          </div>
          <div className='z-20 h-20 text-3xl absolute w-full mt-[250px] self-center flex items-center justify-center'>
            <button
              onClick={() => {
                setWrong(1);
                setRound(true);
                setPrev(false);
                setA(false);
                setB(false);
                setC(false);
                setD(false);
                setE(false);
                setF(false);
                setG(false);
                setH(false);
                setI(false);
                setJ(false);
                setK(false);
                setL(false);
                setM(false);
                setN(false);
                setO(false);
                setP(false);
                setQ(false);
                setR(false);
                setS(false);
                setT(false);
                setU(false);
                setV(false);
                setW(false);
                setX(false);
                setY(false);
                setZ(false);
                setA1(false);
                setB1(false);
                setC1(false);
                setD1(false);
                setE1(false);
                setF1(false);
                setG1(false);
                setH1(false);
                setI1(false);
                setJ1(false);
                setK1(false);
                setL1(false);
                setM1(false);
                setN1(false);
                setO1(false);
                setP1(false);
                setQ1(false);
                setR1(false);
                setS1(false);
                setT1(false);
                setU1(false);
                setV1(false);
                setW1(false);
                setX1(false);
                setY1(false);
                setZ1(false);
                setGuess1(true);
                setCorrect(0);
                setguessedWord('');
              }}
              type='button'
              class='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-xl'
            >
              Next Round >
            </button>
          </div>
        </>
      ) : (
        ''
      )}
      <div
        style={{ 'writing-mode': 'vertical-rl' }}
        className='bg-[#22222288] flex items-center justify-center text-4xl justify-items-center rotate-180'
      >
        {(turn == 1 ? 'ROW 1' : '') ||
          (turn % 3 == 0 ? 'ROW 2' : '') ||
          (turn % 5 == 0 ? 'ROW 3' : '') ||
          (turn % 7 == 0 ? 'ROW 4' : '')}{' '}
        - Turn
      </div>
      <div>
        <h1 className="text-5xl text-center pt-2 font-['MyNerve'] relative h-36">
          <span className='relative z-10 text-6xl underline'>Hangman</span>
        </h1>
        <h1 className='text-center py-2 relative font-bold'>
          <span className='relative z-10 text-2xl'>ROUND-{rr}</span>
        </h1>
        <div className='w-full flex flex-col items-center'>
          <img className='w-1/2 mx-auto' src={`${wrong + 1}.png`} />
          <span className='bg-[#00000099] py-3 px-4 mt-5'>
            <b>Hint:</b> {hint}
          </span>
        </div>
        <div className='mt-5 w-1/2 mx-auto'>
          <ul
            style={{
              'grid-template-columns': `repeat(${word.length}, minmax(0, 1fr))`,
            }}
            className={`grid justify-items-center`}
          >
            {[...word].map((el) => (
              <li className='px-2 py-2 font-bold text-2xl'>
                {el === ' ' ? (
                  ''
                ) : !eval(el.toLowerCase()) ? (
                  <span className='px-1'>___</span>
                ) : (
                  el
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-10 xl:w-2/5 mx-auto'>
          <ul className='grid w-full grid-cols-8 justify-center'>
            {[
              'A',
              'B',
              'C',
              'D',
              'E',
              'F',
              'G',
              'H',
              'I',
              'J',
              'K',
              'L',
              'M',
              'N',
              'O',
              'P',
              'Q',
              'R',
              'S',
              'T',
              'U',
              'V',
              'W',
              'X',
            ].map((el) => (
              <button
                disabled={eval(`${el.toLowerCase()}1`) ? true : false}
                onClick={() => {
                  setTurn(turn + 2);

                  setGuess1(true);
                  if (turn === 7) {
                    setTurn(1);
                  }

                  if (word.indexOf(el) > -1) {
                    eval(`set${el}(true)`);
                    setGuess(true);
                    setCorrect(correct + 1);
                    setguessedWord(guessedWord + el);
                    console.log(guessedWord + el);
                  } else {
                    setGuess(false);

                    eval(`set${el}1(true)`);
                    setWrong(wrong + 1);
                    console.log(wrong);
                  }
                }}
                className={
                  eval(`${el.toLowerCase()}1`)
                    ? 'bg-[#ff1c1c] cursor-not-allowed'
                    : ''
                }
              >
                <li
                  className={`px-3 py-2 button text-black m-1 font-bold rounded`}
                >
                  {el}
                </li>
              </button>
            ))}
          </ul>
          <ul className='grid w-full grid-cols-8 justify-center'>
            <li className=' col-span-3'></li>
            {['Y', 'Z'].map((el) => (
              <button
                disabled={eval(`${el.toLowerCase()}1`) ? true : false}
                onClick={() => {
                  setGuess1(true);
                  setTurn(turn + 2);
                  console.log(correct);
                  if (turn === 7) {
                    setTurn(1);
                  }
                  if (word.indexOf(el) > -1) {
                    eval(`set${el}(true)`);
                    setGuess(true);
                    setCorrect(correct + 1);
                    setguessedWord(guessedWord + el);
                    console.log(guessedWord + el);
                  } else {
                    setGuess(false);

                    eval(`set${el}1(true)`);
                    setWrong(wrong + 1);
                  }
                }}
                className={
                  eval(`${el.toLowerCase()}1`)
                    ? 'bg-[#ff0f0f] cursor-not-allowed'
                    : ''
                }
              >
                <li
                  className={`button px-3 py-2 text-black m-1 font-bold rounded`}
                >
                  {el}
                </li>
              </button>
            ))}
          </ul>
        </div>
      </div>
      {guess1 ? (
        !guess ? (
          <div className='bg-[#9d1a3a88] flex items-center justify-center text-4xl justify-items-center'>
            W<br />R<br />O<br />N<br />G
          </div>
        ) : (
          <div className='bg-[#4fa01a88] flex items-center justify-center text-4xl justify-items-center'>
            C<br />O<br />R<br />R<br />E<br />C<br />T
          </div>
        )
      ) : (
        <div className='bg-[#1a599d8c] grid items-center justify-center text-4xl justify-items-center'>
          <div className='grid items-center justify-center text-4xl justify-items-center h-1/2'>
            <span>Make</span>
            <span>A</span>
            <span>Guess</span>
          </div>
        </div>
      )}
    </main>
  );
};

export default Round;

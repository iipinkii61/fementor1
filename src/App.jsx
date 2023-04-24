import { useState } from "react";
import Thanks from "./components/Thanks";

function App() {
  const [rate, setRate] = useState("");
  const [submit, setSubmit] = useState(false);

  return (
    <div className="h-screen flex flex-col justify-center">
      {!submit ? (
        <div className="bg-darkBlue/50 rounded-3xl sm:w-1/3 sm:mx-auto sm:p-10 p-8 mx-4">
          <div className="p-4 bg-darkBlue w-fit rounded-full mb-8">
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
                fill="#FC7614"
              />
            </svg>
          </div>
          <div className="text-white text-2xl ">How did we do?</div>
          <div className="text-mediumGrey text-[15px] my-3">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </div>
          <div className="my-6 flex justify-between">
            <button
              className="sm:py-4 sm:px-6 py-3 px-5 text-sm bg-darkBlue text-mediumGrey w-fit rounded-full hover:text-white hover:bg-lightGrey active:bg-orange active:text-white"
              onClick={() => setRate(1)}
            >
              1
            </button>
            <button
              className="sm:py-4 sm:px-6 py-3 px-5 text-sm bg-darkBlue text-mediumGrey w-fit rounded-full hover:text-white hover:bg-lightGrey active:bg-orange active:text-white"
              onClick={() => setRate(2)}
            >
              2
            </button>
            <button
              className="sm:py-4 sm:px-6 py-3 px-5 text-sm bg-darkBlue text-mediumGrey w-fit rounded-full hover:text-white hover:bg-lightGrey active:bg-orange active:text-white"
              onClick={() => setRate(3)}
            >
              3
            </button>
            <button
              className="sm:py-4 sm:px-6 py-3 px-5 text-sm bg-darkBlue text-mediumGrey w-fit rounded-full hover:text-white hover:bg-lightGrey active:bg-orange active:text-white"
              onClick={() => setRate(4)}
            >
              4
            </button>
            <button
              className="sm:py-4 sm:px-6 py-3 px-5 text-sm bg-darkBlue text-mediumGrey w-fit rounded-full hover:text-white hover:bg-lightGrey active:bg-orange active:text-white"
              onClick={() => setRate(5)}
            >
              5
            </button>
          </div>
          <button
            className="bg-orange w-full rounded-3xl text-white py-3 hover:text-orange hover:bg-white"
            onClick={() => setSubmit(true)}
          >
            S U B M I T
          </button>
        </div>
      ) : (
        <Thanks rate={rate} />
      )}
    </div>
  );
}

export default App;

import { useState } from "react";
import CarsPageOne from "./CarsPageOne.jsx";
import CarsPageTwo from "./CarsPageTwo.jsx";
import Car from "./Car.jsx";
import CreateCar from "./CreateCar.jsx";

function AppExample() {
  const [currentPage, setCurrentPage] = useState(<CarsPageOne />);

  return (
    <div className="wrap">
      <div className="controls">
        <button
          className="button"
          onClick={() => setCurrentPage(<CarsPageOne />)}
        >
          Page 1
        </button>

        <button
          className="button"
          onClick={() => setCurrentPage(<CarsPageTwo />)}
        >
          Page 2
        </button>

        <button
          className="button"
          onClick={() => setCurrentPage(<Car id={2} />)}
        >
          A Car
        </button>

        <button
          className="button"
          onClick={() =>
            setCurrentPage(<CreateCar setCurrentPage={setCurrentPage} />)
          }
        >
          Crate a Car
        </button>
      </div>
      {currentPage}
    </div>
  );
}

export default AppExample;

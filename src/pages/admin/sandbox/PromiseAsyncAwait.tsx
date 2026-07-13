// import { useEffect } from "react";
import SubmitButton from "../../../components/common/SubmitButton";

export default function PromiseAsyncAwait() {
  const getData = (id: number) => {
    return new Promise(
      (resolve: (arg0: string) => void, reject: (arg0: string) => void) => {
        setTimeout(() => {
          if (id > 0) {
            resolve(`Promise resolved ${id}!`);
          } else {
            reject(`Promise rejected ${id}!`);
          }
        }, 2000);
      },
    );
  };

  const fetchData = async (id: number) => {
    console.log(`Fetching data for ID: ${id}`);
    try {
      const result = await getData(id);
      console.log(`Result: ${result}`);
      return result;
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const onClickPromise = () => {
    fetchData(1);
    console.log("This should run first");
  };

  async function fetchDataSequentially() {
    console.time("sequential");
    const data1 = await fetchData(1);
    const data2 = await fetchData(2);
    const data3 = await fetchData(3);
    console.timeEnd("sequential");
    return [data1, data2, data3];
  }

  async function fetchDataInParallel() {
    console.time("parallel");
    const promises = [fetchData(1), fetchData(2), fetchData(3)];
    const results = await Promise.all(promises);
    console.timeEnd("parallel");
    return results;
  }

  const onClickSequentialPromise = () => {
    fetchDataSequentially().then((results) => {
      console.log("Sequential results:", results);
    });
  };

  const onClickParallelPromise = () => {
    fetchDataInParallel().then((results) => {
      console.log("Parallel results:", results);
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <SubmitButton label="Run Promise" onSubmit={onClickPromise} />
      <SubmitButton
        label="Run Sequential Promises"
        onSubmit={onClickSequentialPromise}
      />
      <SubmitButton
        label="Run Parallel Promises"
        onSubmit={onClickParallelPromise}
      />
    </div>
  );
}

export default function ArrayFunctions() {
  const reduceExample = (arr: string) => {
    const reversedArray = Array.from(arr).reduce(
      (accumulator, currentValue) => {
        return [currentValue, ...accumulator];
      },
      [],
    );

    return reversedArray;
  };

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200 border border-gray-100">
        <thead>
          <tr>
            <th>Array Function</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>map</td>
            <td>
              Creates a new array with the results of calling a function for
              every array element
            </td>
            <td></td>
          </tr>
          <tr>
            <td>filter</td>
            <td>Creates a new array with elements that pass a test function</td>
            <td></td>
          </tr>
          <tr>
            <td>reduce</td>
            <td>
              Executes a reducer function on each element of the array,
              resulting in a single output value
            </td>
            <td>String: "abcde", Result: "{reduceExample("abcde")}"</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

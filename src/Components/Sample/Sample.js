import React, { useState } from "react";
import Select from "react-select";

const Sample = () => {
  const [count, setCount] = useState(0);
  const [selectedScheme, setSelectedScheme] = useState();

  const handleCounterIncrement = (incrementFactor) => {
    setCount(count + incrementFactor)
  }

  const handleCounterReset = () => {
    setCount(0)
  }

  const options = [
    {id: 1, value: 'axis-scheme', label: 'Axis Scheme'},
    {id: 2, value: 'icici-scheme', label: 'ICICI Scheme'},
    {id: 3, value: 'pgmi-growth-scheme', label: 'PGMI Growth Scheme'}
  ];

  const handleSchemeSelect = (selected) => {
    setSelectedScheme(selected)
  }

  const counterIncrementFactor = 10

  return (
    <article className="m-2">
      {/* demo-counter section */}
      <section>
        {/* reset counter button */}
        <button
          onClick={() => handleCounterReset(counterIncrementFactor)}
          className='mr-1 px-4 py-2 text-sm text-blue-700 font-medium border border-blue-700 rounded'
        >
          Reset counter to 0
        </button>

        {/* increase counter button */}
        <button
          onClick={() => handleCounterIncrement(counterIncrementFactor)}
          className='px-4 py-2 text-sm font-medium text-white bg-blue-700 border border-blue-700 rounded'
        >
          Increment counter by {counterIncrementFactor}
        </button>

        {/* display count */}
        <div className="mt-4">
          Current Count: {count}
        </div>
      </section>

      {/* react-select section */}
      <section className="m-4">
        <Select
          autoFocus
          options={options}
          name='hello'
          placeholder='Search by fund name, type or AMC'
          onChange={handleSchemeSelect}
          value={selectedScheme}
          isSearchable
          isMulti={false}
          isDisabled={false}
          noOptionsMessage={(val) => `No results found for "${val.inputValue}". Try using different keywords`}
          className='w-full sm:w-40 text-green-600'
          classNamePrefix='input'
        />

        {
          selectedScheme ?
            <div className="mt-2">
              Selected Scheme: {selectedScheme?.label} ({selectedScheme?.value})
            </div> :
            null
        }
      </section>
    </article>
  )
}

export default Sample;

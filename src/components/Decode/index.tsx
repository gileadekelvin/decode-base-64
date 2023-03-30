import { useState } from 'react';
import base64 from 'base-64';

const Decode = () => {
  const [input, setInput] = useState<string | null>(null);
  const [decoded, setDecoded] = useState<string | null>(null);

  const handleDecode = (input: string | null) => {
    if (input) {
      try {
        const inputArray = input.split('\n');
        const decodedArray = inputArray.map((inputStr) => {
          try {
            return base64.decode(inputStr.trim());
          } catch (e) {
            return 'invalid base64 string';
          }
        });
        setDecoded(decodedArray.join('\n'));
      } catch (e) {
        setDecoded('invalid base64 string');
      }
    }
  };

  return (
    <>
      <div className='flex min-w-full flex-col gap-1 xl:min-w-[80%] '>
        <label>
          <span className='font-medium text-white'>Your base64 string</span>
        </label>
        <textarea
          rows={5}
          className='rounded-md border-2 border-gray-600 bg-transparent p-2 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500'
          placeholder='place the base64 here...'
          onChange={(event) => {
            setInput(event.target.value);
          }}
        ></textarea>
      </div>
      <button
        className='rounded-md bg-white p-4 leading-none text-black hover:bg-indigo-300'
        onClick={() => {
          handleDecode(input);
        }}
      >
        <span className='font-bold'>Decode</span>
      </button>
      {!!decoded && (
        <div className='flex min-w-full flex-col gap-1 xl:min-w-[80%]'>
          <label>
            <span className='font-medium text-white'>Decoded string</span>
          </label>
          <textarea
            value={decoded}
            rows={5}
            className='rounded-md border-2 border-gray-600 bg-transparent p-2 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500'
            placeholder='the result will be displayed here...'
          ></textarea>
        </div>
      )}
    </>
  );
};

export default Decode;

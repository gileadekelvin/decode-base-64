import { useEffect, useRef, useState } from 'react';
import base64 from 'base-64';

const Encode = () => {
  const inputReference = useRef<HTMLTextAreaElement | null>(null);

  const [input, setInput] = useState<string | null>(null);
  const [encoded, setEncoded] = useState<string | null>(null);

  useEffect(() => {
    inputReference?.current?.focus();
  }, []);

  const handleEncode = (input: string | null) => {
    if (input) {
      try {
        const encoded = base64.encode(input);
        setEncoded(encoded);
      } catch (e) {
        setEncoded('invalid base64 string');
      }
    }
  };

  return (
    <>
      <div className='flex min-w-full flex-col gap-1 xl:min-w-[80%]'>
        <label>
          <span className='font-medium text-white'>Your string to encode</span>
        </label>
        <textarea
          ref={inputReference}
          rows={5}
          className='rounded-md border-2 border-gray-600 bg-transparent p-2 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500'
          placeholder='Place the string and use ctrl + enter to encode'
          onChange={(event) => {
            setInput(event.target.value);
          }}
          onKeyDown={(key) => {
            if (key.ctrlKey && key.key === 'Enter') {
              handleEncode(input);
            }
          }}
        ></textarea>
      </div>
      <button
        className='rounded-md bg-white p-4 leading-none text-black hover:bg-indigo-300'
        onClick={() => {
          handleEncode(input);
        }}
      >
        <span className='font-bold'>Encode</span>
      </button>
      {!!encoded && (
        <div className='flex min-w-full flex-col gap-1 xl:min-w-[80%]'>
          <label>
            <span className='font-medium text-white'>Encoded base64 string</span>
          </label>
          <textarea
            value={encoded}
            onChange={() => {
              return;
            }}
            rows={5}
            className='rounded-md border-2 border-gray-600 bg-transparent p-2 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500'
            placeholder='the result will be displayed here...'
          ></textarea>
        </div>
      )}
    </>
  );
};

export default Encode;

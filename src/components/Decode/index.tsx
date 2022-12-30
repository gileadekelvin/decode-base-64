import { useState } from 'react';
import base64 from 'base-64';

const Decode = () => {
  const [input, setInput] = useState<string | null>(null);
  const [decoded, setDecoded] = useState<string | null>(null);

  const handleDecode = (input: string | null) => {
    if (input) {
      try {
        const decoded = base64.decode(input);
        setDecoded(decoded);
      } catch (e) {
        setDecoded('invalid base64 string');
      }
    }
  };

  return (
    <>
      <div className='form-control min-w-full xl:min-w-[80%] '>
        <label className='label'>
          <span className='label-text text-base font-bold'>Your base64 string</span>
        </label>
        <textarea
          rows={5}
          className='textarea-info textarea rounded-sm border-[3px] border-gray-700 font-bold text-white'
          placeholder='place the base64 here...'
          onChange={(event) => {
            setInput(event.target.value);
          }}
        ></textarea>
      </div>
      <div className='group relative'>
        <div className='animate-tilt absolute -inset-1 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200'></div>
        <button
          className='btn relative rounded-sm px-7 py-4 leading-none bg-slate-900 border-slate-900'
          onClick={() => {
            handleDecode(input);
          }}
        >
          <span className='font-bold'>Decode</span>
        </button>
      </div>
      {!!decoded && (
        <div className='form-control min-w-full xl:min-w-[80%]'>
          <label className='label'>
            <span className='label-text text-base font-bold'>Decoded string</span>
          </label>
          <textarea
            value={decoded}
            rows={5}
            className='textarea-info textarea rounded-sm border-[3px] border-gray-700 font-bold text-white'
            placeholder='the result will be displayed here...'
          ></textarea>
        </div>
      )}
    </>
  );
};

export default Decode;

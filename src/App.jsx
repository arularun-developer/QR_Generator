import { useState } from "react";
import React from 'react';
function App() {
  const [url, Seturl] = useState();
  const [size, setSize] = useState("400X400");
  const [qrColor, setQrColor] = useState("#002020");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [format, setFormat] = useState("jpg");
  const [src, setSrc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const QRCODE = `https://api.qrserver.com/v1/create-qr-code/?data=${url}&size=${size}&color=${qrColor.slice(1)}&bgcolor=${bgColor.slice(1)}&format=${format}`;
    setSrc(QRCODE);
    Seturl("");
    setSize("400X400");
    setQrColor("#000000");
    setBgColor("#ffffff");
  };

  return (
    <div className='container '>
      <h1 className="text-primary">QR CODE GENERATOR</h1>
      <form onSubmit={handleSubmit}>
        <div className='form_group'>
          <label htmlFor="url" className="mt-1">Enter Url</label>
          <input
            type='url'
            id='url'
            name='url'
            placeholder="Please Enter Your Url"
            required
            value={url}
            onChange={(e) => Seturl(e.target.value)}

          ></input>
          <div className='form_group'>
            <label htmlFor="size">Image Size</label>
            <select
              id='size'
              value={size}
              onChange={(e) => setSize(e.target.value)}className="mt-1"
            >
              <option value='400'>400X400</option>
              <option value='500'>500X500</option>
              <option value='600'>600X600</option>
              <option value='700'>700X700</option>
            </select>
          </div>
          <div className='form_group'>
            <label htmlFor="format">Select Format</label>
            <select
              id='format'
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="mt-1"
            >
              <option value='JPG'>JPG</option>
              <option value='PNG'>PNG</option>
              <option value='GIF'>GIF</option>
              <option value='SVG'>SVG</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='qrcolor' className="mt-1">QR Color</label>
            <input
              type='color'
              id='qrcolor'
              value={qrColor}
              onChange={(e) => setQrColor(e.target.value)}

            />
          </div>
          <div className='form-group'>
            <label htmlFor='bgcolor' className="mt-1">BG Color</label>
            <input
              type='color'
              id='bgcolor'
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <button
              className='btn btn-primary'
              type='submit'
            >
              Generate QR Code
            </button>
          </div>

        </div>
      </form>

      {src && (
        <>
          <img
            src={src}
            alt=''
          />
          <div className='form-group'>
            <a
              href={src}
              className=' btn btn-success mt-1 '
              target='_blank'
              download
            >
              Download
            </a>
          </div>
        </>
      )}




    </div>
  )
}

export default App

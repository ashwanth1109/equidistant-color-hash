import React, { useEffect, useState, useCallback } from "react";

import colorHasher from "../../lib";

const sampleList = [
  "2kc7jlNJaGd4fJ9HaSm2U4B2",
  "Ch63qhQPB7uAiqUR26UH4jJ3",
  "QNdWctaPUSuQRsixwdUMRGA2",
  "rnW7txW0TCDVo7A20mfssUl2",
  "urhdUOR9liGN1xGuACGM7pD2",
  "4Okm9EYrz8VK5c7rL6t7VNc2",
  "uetAQAeIn7lm96wn7iYcHC32",
  "TbBN1JcySx1WhC1KsBCRenf2",
  "N9NPA5NW3MFYAJfOrsRFXaA3",
  "qK1rLUccWvPWAcVEHFsMs243",
  "KjKKPZced5qS00vnmSd12Uu1",
  "KnZinSSGdpoZFmmp8CnRo7V2",
  "Ee0vK7ZZ1B9798FISTPcdCz2",
  "kbY8EkNf1wue2LhEpZkkqIk1",
  "u0yHYfd2x8WwklE4OwcVWaB2"
];

export default () => {
  const [colors, setColors] = useState([]);
  const [list, setList] = useState(sampleList);
  const [input, setInput] = useState("");

  useEffect(() => {
    setColors(colorHasher({ list }));
  }, [list]);

  const addStringToList = useCallback(() => {
    setList([...list, input]);
  }, [input, list]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      List of strings: <br />
      {list.map((str, index) => (
        <span key={str}>
          &nbsp;
          {str}
          {index !== length - 1 ? "," : ""}
        </span>
      ))}
      <br />
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <br />
      <button onClick={addStringToList}>Add strings to the list</button>
      <br />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {list.map((str, index) => (
          <div
            style={{
              background: `${colors[index]}`,
              width: "80px",
              height: "80px",
              margin: "10px 10px 0 0"
            }}
            key={str}
          />
        ))}
      </div>
    </div>
  );
};

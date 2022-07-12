import React, { useEffect, useState } from "react";
import axios from "axios";

const RicksItems = ({ rick }) => {
  const [rickData, setRickData] = useState({});

  useEffect(() => {
    axios.get(rick).then((res) => setRickData(res.data));
  }, []);

  console.log(rickData);

  return (
    <>
      <div className="rickMain">
        <div className="rickContainer">
        <h2>{rickData?.name}</h2>
        <br />
          <div className="rickImage">
            <img src={rickData.image} alt="" />
          </div>
          <div className="rickInfo">
            <p><b>Status: </b>{rickData.status}</p>
            <p>
              <b>Origen: </b> {rickData.origin?.name}
            </p>
            <p>
              <b>Episodes: </b> {rickData.episode?.length}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RicksItems;

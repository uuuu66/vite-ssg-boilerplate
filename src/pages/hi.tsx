"static";
import React, { useState } from "react";

interface Props {}

const hi: React.FC<Props> = (props) => {
  const {} = props;
  const [hi, setHi] = useState<string>();
  const res = fetch(
    "https://apis.data.go.kr/6270000/lectureServiceV2/lectureList?ServiceKey=AEhNK1a8o%2F3tUz9cNdYipn0JGE0kl5SB2cmGeTdjKsH4CfUGRKb2KZp1CGnO%2BLsMuJhmBDV11%2B3ELu%2F1kLCpyg%3D%3D&ord_cd=1&lec_id=1",
    {
      method: "get",
      headers: {},
    }
  ).then(async (res) => {
    const text = await res.text();
    setHi(text);
  });
  return <div>{hi}</div>;
};

export default hi;

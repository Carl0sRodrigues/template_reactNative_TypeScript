import React from "react";
import Svg, { Polyline } from 'react-native-svg';

// export default function ActivityIcon({color}: {color?: string}) {
export default function ActivityIcon({color}: {color?: string}) {

  return(
    <Svg
      width="40px"
      height="40px"
      viewBox="0 0 25 25"
      fill="none"
      stroke={color ? color : 'black'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      >
      <Polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </Svg>
  );
}
import assert from "assert";
import React, { ReactElement } from "react";

interface ITwilioSvgProps {
  height?: number;
}

/**
 * Twilio SVG
 * @param {ITwilioSvgProps} textColor
 * @return {ReactElement}
 */
export function TwilioSvg({ height }: ITwilioSvgProps): ReactElement {
  assert(height);
  return (
    <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 448 512">
      <path
        fill="#bc1c10"
        d="M317.42,239.93c82.89,0,149.57,67,149.44,150.3a149.77,149.77,0,0,1-299.53-1.12C167.47,306.5,234.41,239.93,317.42,239.93Zm-.29,39.51A109.89,109.89,0,0,0,206.86,389.53c-.06,61.31,49,110.34,110.49,110.39,60.24.05,110-49.19,110-108.86C427.37,328.59,378.83,279.44,317.13,279.44Z"
      />
      <path
        fill="#bc1c10"
        d="M280,383.38a30.72,30.72,0,1,1,30.78-30.77A30.81,30.81,0,0,1,280,383.38Z"
      />
      <path
        fill="#bc1c10"
        d="M354.24,383.38a30.72,30.72,0,1,1,30.61-31A30.8,30.8,0,0,1,354.24,383.38Z"
      />
      <path
        fill="#bc1c10"
        d="M310.82,427.34c-.19,16.75-14.39,30.29-31.51,30.05-16.71-.23-30.21-14.51-29.93-31.63.28-16.49,14.4-29.95,31.26-29.8S311,410.23,310.82,427.34Z"
      />
      <path
        fill="#bc1c10"
        d="M384.85,426.44A30.73,30.73,0,1,1,353.76,396,30.81,30.81,0,0,1,384.85,426.44Z"
      />
    </svg>
  );
}

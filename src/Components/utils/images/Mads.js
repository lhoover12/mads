import React, { Component } from "react";
import styled from "styled-components";
import { Motion, spring } from "react-motion";
const Svg = styled.svg`
 

  ${
    this.props
      ? `width:${this.props.width}
height:${this.props.height}`
      : ``
  };
  @media only screen and (max-width: 605px) {
    margin-left -100px;
  }

    @media only screen and (max-width: 426px) {
      width: 300px;
      margin-left -50px;
    }
    @media only screen and (max-width: 325px) {
      margin-left -65px;
    }
    
`;

export default class componentName extends Component {
  render() {
    return (
      <Svg
        height={this.props.height}
        width={this.props.width}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 640"
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          id="Selection #1"
          fill="#d74545"
          stroke="black"
          stroke-width="1"
          d="M 58.32,267.00            C 59.06,257.38 61.95,248.02 67.36,240.00              67.36,240.00 76.94,228.00 76.94,228.00              78.02,225.64 77.20,221.27 77.59,218.00              78.60,209.57 79.91,204.18 84.75,197.00              89.46,190.00 95.28,185.11 103.00,181.67              107.64,179.60 112.89,178.83 117.00,176.15              117.00,176.15 135.00,162.03 135.00,162.03              150.98,151.11 171.37,143.03 191.00,143.74              211.19,144.48 227.20,150.15 244.00,161.35              244.00,161.35 264.00,176.78 264.00,176.78              264.00,176.78 277.00,181.67 277.00,181.67              284.72,185.11 290.54,190.00 295.25,197.00              300.09,204.18 301.40,209.57 302.41,218.00              302.80,221.27 301.98,225.64 303.06,228.00              304.71,231.61 309.75,234.46 315.06,244.00              323.82,259.44 323.52,277.61 315.06,293.00              320.17,295.57 323.33,300.76 325.61,306.00              332.52,322.58 328.96,331.65 325.61,348.00              325.61,348.00 323.13,356.58 323.13,356.58              322.70,360.98 326.72,367.24 328.68,371.00              331.32,376.04 332.88,382.28 332.49,388.00              331.08,408.69 314.41,420.86 295.00,423.15              292.25,423.48 290.86,423.89 288.00,423.85              281.17,423.16 269.39,421.75 263.00,423.85              263.00,423.85 242.00,438.95 242.00,438.95              225.99,449.14 207.20,455.97 188.00,455.26              169.32,454.57 153.71,448.94 138.00,438.95              138.00,438.95 118.00,424.42 118.00,424.42              113.89,422.61 101.78,422.63 96.99,423.06              93.97,423.34 92.10,423.91 89.00,423.68              68.07,422.10 45.90,408.66 47.51,385.00              47.87,379.73 48.87,375.69 51.32,371.00              53.14,367.52 56.89,361.58 56.93,357.58              56.95,355.24 55.14,351.61 54.52,349.00              52.85,341.98 50.87,334.20 50.32,327.00              49.54,316.70 55.33,297.81 65.00,293.00              61.24,286.20 57.73,274.80 58.32,267.00 Z            M 89.21,254.00            C 86.48,257.87 83.17,263.48 81.77,268.00              78.09,279.93 80.19,299.11 83.72,311.00              95.59,350.99 131.32,379.53 172.00,386.25              176.91,387.06 182.02,387.94 187.00,388.00              232.59,388.53 276.51,361.95 293.55,319.00              299.03,305.19 302.66,282.36 298.23,268.00              297.03,264.13 294.92,260.42 292.77,257.00              290.00,252.58 283.89,244.40 279.00,242.60              277.06,241.88 274.09,242.00 272.00,242.00              272.00,242.00 157.00,242.00 157.00,242.00              157.00,242.00 121.00,242.00 121.00,242.00              115.31,242.00 106.24,241.48 101.00,242.60              96.07,245.18 92.39,249.48 89.21,254.00 Z"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          id="Selection #2"
          fill="#edcbaa"
          stroke="black"
          stroke-width="0"
          d="M 119.00,242.00            C 119.00,242.00 154.00,242.00 154.00,242.00              154.00,242.00 272.00,242.00 272.00,242.00              274.09,242.00 277.06,241.88 279.00,242.60              282.39,243.85 286.26,248.21 288.53,251.00              296.15,260.37 300.26,269.85 299.99,282.00              298.86,331.64 265.88,371.05 218.00,383.37              208.21,385.89 198.16,387.63 188.00,387.26              141.71,385.56 99.75,357.81 85.00,313.00              82.09,304.15 81.71,299.02 80.83,290.00              80.40,285.50 79.90,283.87 80.01,279.00              80.32,265.69 88.98,250.36 100.00,243.02              105.41,241.21 113.18,242.00 119.00,242.00 Z"
        />
      </Svg>
    );
  }
}

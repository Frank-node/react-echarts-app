import React, { Component } from "react";
import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h1>Hello, world!</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
import ReactEcharts from "echarts-for-react";
class App extends Component {
  render() {
    return (
      <ReactEcharts
        option={{
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          },
          yAxis: {
            type: "value"
          },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: "line"
            }
          ]
        }}
      />
    );
  }
}
export default App;

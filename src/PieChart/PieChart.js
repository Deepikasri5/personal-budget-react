import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import {getChart} from "../App";


class PieChart extends Component {
  state = {
    labels: [],
    datasets: [
      {
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#A62A2A",
          "#9F703A",
          "#9CCB19"
        ],
        data: [],
      },
    ],
  };
   getData = async () => {
    await getChart().then((res)=>{
      for (let i = 0; i < res.data.myBudget.length; i++) {
        this.state.datasets[0].data[i] = res.data.myBudget[i].budget;
        this.state.labels[i] = res.data.myBudget[i].title;
      }
    })
    return this.state;
  };
  componentDidMount() {
    if (!this.state.data) {
      (async () => {
        try {
          this.setState({ data: await this.getData() });
        } catch (e) {
          //...handle the error...
        }
      })();
    }
  }
  render() {
    return (
      <div>
     
          <Pie
            data={this.state}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        
      </div>
    );
  }
}
export default PieChart;

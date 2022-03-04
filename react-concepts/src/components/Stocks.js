import React, { Component } from "react";
import { stockData } from "../data";

const Stock = ({ company, ticker, stockPrice, timeElapsed }) => {
    if (!company) return <div />;
    return (
      <table>
          <tr>
            <td>
              <h5>{company}</h5>
            </td>
            <td>
              <h5>{ticker}</h5>
            </td>
            <td>
              <h4>{stockPrice}</h4>
            </td>
            <td>
              <p>{timeElapsed}</p>
            </td>
          </tr>
      </table>
    );
  };


  class Stocks extends Component{
        render(){
            return (
                <>
                  <div className="stock-container">
                    {stockData.map((data, key) => {
                      return (
                          <div>
                              < header className="header">
                                    <h2>Your Stock Tracker</h2>
                                </header>
                                <div key={key}>
                                    {data.company +
                                        " , " +
                                        data.ticker +
                                        " ," +
                                        data.stockPrice +
                                        ", " +
                                        data.timeElapsed}
                                </div>
                          </div>
                      );
                    })}
                  </div>
                </>
              );
        }
  }

  export default Stocks;
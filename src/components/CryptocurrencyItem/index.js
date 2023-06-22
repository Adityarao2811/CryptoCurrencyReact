// Write your JS code here
// Write your code here
import {Component} from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class CryptocurrencyItem extends Component {
  render() {
    const {currencyList} = this.props

    return (
      <div className="blog-container">
        <table>
          <ul>
            <li>
              <p>Coin Type</p>
              <p>USD</p>
              <p>EURO</p>
            </li>
            {currencyList.map(item => (
              <li key={item.currency_name}>
                <img
                  src={item.currency_logo}
                  alt={item.currency_name}
                  height={20}
                  width={20}
                />
                <p>{item.currency_name}</p>
                <p>{item.usd_value}</p>
                <p>{item.euro_value}</p>
              </li>
            ))}
          </ul>
        </table>
      </div>
    )
  }
}

export default CryptocurrencyItem

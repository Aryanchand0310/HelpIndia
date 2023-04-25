import React, { useState } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './Cart.css'
import './Progress.css'
import './CartContainer.css'
import './ShippingContainer.css'
import './PaymentContainer.css'
import './OrderSucessfull.css'
import { useRecoilState } from 'recoil'
import { orderSuccessfulProvider } from '../../Providers/OrderSuccessfulProvider'
import OrderSuccessful from '../../COMPONENTS/Order/OrderSuccessful'
const Cart = () => {
  const [cartdata, setcartdata] = React.useState([])
  const [subtotal, setsubtotal] = React.useState(0)
  const [shipping, setshipping] = React.useState(0)
  const [active, setactive] = React.useState(1)
  const [tax, settax] = React.useState(0)
  const [deliverydate, setdeliverydate] = React.useState(
    new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  )

  const getcartitemsfromlocalstorage = () => {
    let cart = JSON.parse(localStorage.getItem('cart'))
    if (cart) {
      console.log(cart)
      setcartdata(cart)

      let tempsubtotal = 0
      cart.forEach(item => {
        tempsubtotal += item.productdata.SalesPrice * item.quantity
      })
      // console.log(tempsubtotal)
      setsubtotal(tempsubtotal)
      setshipping(80)
      settax(tempsubtotal * 0.18 + 80 * 0.10)
      setreloadnavbar(!reloadnavbar)
    }
    else {
      console.log("Cart is empty")
      setreloadnavbar(!reloadnavbar)
    }
  }

  React.useEffect(() => {
    getcartitemsfromlocalstorage()
  }, [])

  const checklogin = () => {
    return true
  }

  const [reloadnavbar, setreloadnavbar] = React.useState(false)
  const removeitemfromcart = (index) => {
    // alert(index)
    let temp = [...cartdata]
    temp.splice(index, 1)
    setcartdata(temp)
    localStorage.setItem('cart', JSON.stringify(temp))
    getcartitemsfromlocalstorage()
  }

  const savedaddress = [
    {
      AddressLine1: "Address Line 1",
      AddressLine2: "Address Line 2",
      AddressLine3: "Address Line 3",
      postalcode: "123456"
    },
    {
      AddressLine1: "Address Line 1",
      AddressLine2: "Address Line 2",
      AddressLine3: "Address Line 3",
      postalcode: "123456"
    }
  ]


  const [selectedorderid, setselectedorderid] = useState(0)
  const [ordersuccesscont, setordersuccesscont] = useRecoilState(orderSuccessfulProvider)
  return (
    <div>
      <Navbar reloadnavbar={reloadnavbar} />
      {
        ordersuccesscont && <OrderSuccessful orderid={selectedorderid} message={`Order Placed Successfully, Order ID: ${selectedorderid}`}  redirecto='userorders'/>
      }
      <SingleBanner
        heading="My Cart"
        bannerimage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZPax9vt459EIZF7dTv9RBiOLxKa86YHUxg&usqp=CAU'
      />
      <div className='cart'>
        <div className='progress'>
          {
            active == 1 ?
              <div className='c11'
                onClick={() => {
                  cartdata.length > 0 && checklogin() && setactive(1)
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <span>My Cart</span>

              </div>
              :
              <div className='c1'
                onClick={() => {
                  cartdata.length > 0 && checklogin() && setactive(1)
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <span>My Cart</span>
              </div>
          }


          {
            active == 2 ?
              <div className='c11'
                onClick={() => {
                  cartdata.length > 0 && checklogin() && setactive(2)
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>

                <span>Packed</span>

              </div>
              :
              <div className='c1'
                onClick={() => {
                  cartdata.length > 0 && checklogin() && setactive(2)
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>

                <span>Packed</span>
              </div>
          }

          {
            active == 3 ?
              <div className='c11'
                onClick={() => {
                  cartdata.length > 0 && checklogin() && setactive(3)
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>


                <span>Payment</span>

              </div>
              :
              <div className='c1'
                onClick={() => {
                  cartdata.length > 0 && checklogin() && setactive(3)
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>

                <span>Payment</span>
              </div>
          }
          {
            active == 4 ?
              <div className='c11'
                onClick={() => {
                  cartdata.length > 0 && checklogin() && setactive(4)
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>

                <span>Success</span>

              </div>
              :
              <div className='c1'
                onClick={() => {
                  cartdata.length > 0 && checklogin() && setactive(4)
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>


                <span>Success</span>
              </div>
          }
        </div>

        {
          active == 1 &&
          <div className='cartcont'>
            {/* <p>Cart cont</p> */}
            {
              cartdata.length > 0 ?
                <table className='carttable'>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Total</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartdata.map((item, index) => {
                        return (
                          <tr key={index} className="cartitemrow">
                            <td data-label="Product"
                            >
                              <div className='cartproduct'
                                onClick={() => {
                                  window.location.href = `/product/${item.productdata.ProductId}`
                                }}
                              >
                                <img src={item.productdata.ProductImage[0].image}
                                  alt={item.productdata.ProductName} />
                                <p>{
                                  item.productdata.ProductName
                                }</p>
                              </div>
                            </td>

                            <td
                              data-label="Quantity"
                            >
                              <div className='quantity'>
                                <button className='minus'
                                  onClick={() => {
                                    let newcartdata = [...cartdata]

                                    if (newcartdata[index].quantity > 1) {
                                      newcartdata[index].quantity -= 1
                                      setcartdata(newcartdata)
                                      localStorage.setItem('cart', JSON.stringify(newcartdata))
                                      getcartitemsfromlocalstorage()
                                    }
                                  }}
                                >-</button>
                                <span>{item.quantity}</span>
                                <button className='plus'
                                  onClick={() => {
                                    let newcartdata = [...cartdata]
                                    newcartdata[index].quantity += 1
                                    setcartdata(newcartdata)
                                    localStorage.setItem('cart', JSON.stringify(newcartdata))
                                    getcartitemsfromlocalstorage()
                                  }}
                                >+</button>
                              </div>
                            </td>

                            <td
                              data-label="Price"
                            >
                              <p>
                                 {item.productdata.SalesPrice ? item.productdata.SalesPrice.toFixed(2) : 0.00}
                              </p>
                            </td>

                            <td>
                              <p> {
                                (item.productdata.SalesPrice * item.quantity).toFixed(2)
                              }</p>
                            </td>

                            <td
                              data-label="Remove"
                            >
                              <div className='delbtn'
                                onClick={() => {
                                  removeitemfromcart(index)
                                }}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                              </div>
                            </td>
                          </tr>
                        )
                      })
                    }

                    <tr>
                      <td></td>
                      <td></td>
                      <td className='totaltableleft'>Sub-Total</td>
                      <td className='totaltableright'>
                        $ {subtotal.toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td className='totaltableleft'>Shipping</td>
                      <td className='totaltableright'>
                        $ {shipping.toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td className='totaltableleft'>Total</td>
                      <td className='totaltableright'>
                        $ {(subtotal + shipping).toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td className='totaltableleft'>Tax</td>
                      <td className='totaltableright'>
                        $ {tax.toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td className='totaltableleft'>Net-Total</td>
                      <td className='totaltableright'>
                        $ {(tax + subtotal + shipping).toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>
                :
                <div className='emptycart'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>

                  <p>Your cart is empty</p>
                </div>
            }
          </div>
        }

        {
          active == 2 &&
          <div className='shippingcont'>
            <div className='selectdate'>
              <h2 className='mainhead1'></h2>
              <input
                min={new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                type='date'
                value={deliverydate}
                onChange={(e) => {
                  setdeliverydate(e.target.value)
                }}
              />
            </div>
            <div className='previous'>
              <h2 className='mainhead1'>Previous Saved Address</h2>
              {
                savedaddress.length > 0 ?
                  savedaddress.map((item, index) => {
                    return (
                      <div className='radio' key={index}>
                        <input type='radio' name='address' id={index} />
                        <span>
                          {
                            item.AddressLine1 + ', ' + item.AddressLine2 + ', ' + item.AddressLine3 + ', ' + item.postalcode
                          }
                        </span>
                      </div>
                    )
                  })
                  :
                  <div className='emptyaddress'>
                    <p>No address Found</p>
                  </div>
              }
            </div>
            <h3>OR</h3>
            <div className='shippingadd'>
              <input type='text' placeholder='Address Line 1' />
              <input type='text' placeholder='Address Line 2' />
              <input type='text' placeholder='Address Line 3' />
              <input type='text' placeholder='Postal Code' />
              <button>Save</button>
            </div>

          </div>
        }
        {
          active == 3 &&
          <div className='paymentcont'>
            <h2 className='mainhead1'>Select Payment Method</h2>
            <div className='paymenttypes'>
              <div className='c1'>
                <input type='radio' name='payment' id='payment1' />
                <img src='https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png'
                  alt='paypal'
                />
              </div>
              <div className='c1'>
                <input type='radio' name='payment' id='payment1' />
                <img src='data:image/png;base64,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'
                  alt='paypal'
                />
              </div>
              <div className='c1'>
                <input type='radio' name='payment' id='payment1' />
                <img src='https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png'
                  alt='paypal'
                />
              </div>
            </div>

            <div
              className='paymentagreement'
            >
              <input type='checkbox' name='agreement' id='agreement' />
              <label htmlFor='agreement'>I agree to the terms and conditions</label>
            </div>

            <div className='c2'>
              <span>Net Total</span>
              &nbsp;&nbsp;
              <span>$ {(subtotal + tax + shipping).toFixed(2)}</span>
            </div>
          </div>
        }
        {
          active == 4 &&
          <div className='ordersuccessfull'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>

            <h2 className='mainhead1'>Order Placed Successfully</h2>
            <p>Thank you for your Contribution</p>
            <span>Order ID : 12345</span>
          </div>
        }




        {/* CART BUTTONS */}
        {
          active == 1 && cartdata.length > 0 &&
          <div className='btns'>
            <button className='nextbtn'
              onClick={() => {
                checklogin() && setactive(2)
              }}
            >Next</button>
          </div>
        }

        {
          active == 2 &&
          <div className='btns'>
            <button className='backbtn'
              onClick={() => {
                checklogin() && setactive(1)
              }}
            >Back</button>
            <button className='nextbtn'
              onClick={() => {
                checklogin() && setactive(3)
              }}
            >Next</button>
          </div>
        }

        {
          active == 3 &&
          <div className='btns'>
            <button className='backbtn'
              onClick={() => {
                checklogin() && setactive(2)
              }}
            >Back</button>
            <button className='nextbtn'
              onClick={() => {
                checklogin() && setactive(4)
              }}
            >Next</button>
          </div>
        }
        {
          active == 4 &&
          <div className='btns'>
            {/* <button className='backbtn'
              onClick={() => {
                checklogin() && setactive(3)
              }}
            >Back</button> */}
            <button className='nextbtn'
              onClick={() => {
                setselectedorderid(12345)
                setordersuccesscont(true)
              }}
            >View Invoice</button>
          </div>
        }
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default Cart
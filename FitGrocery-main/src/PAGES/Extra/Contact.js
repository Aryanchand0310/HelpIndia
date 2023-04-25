import React, { useEffect } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './Extrapages.css'

const Contact = () => {
    const [rating, setrating] = React.useState(0)

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
    return (
        <div className='extrapage'>
            <Navbar reloadnavbar={false}/>
            <SingleBanner
                bannerimage='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFRUYGBgYGBoaGhgZGBoZGBoYGBgZGhgYGhocIS4nHCErIRoYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHzQsJSw0NjQ2MTY0NDE2NDQ0NDoxNDQ0MTQ1NDE0NDE0NDQ0NDQ0NDQ2NDQ0NDU0NTQxNDQ0P//AABEIAMcA/QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA/EAACAQIDBAYIBAQGAwEAAAABAgADEQQSIQUxQVETIjJhcZEGUlOBobHB8EJy0dIUI2KSFYKisuHxBzOTQ//EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAsEQACAgEDBAECBQUAAAAAAAAAAQIRAxIhMQQyQVETImEFFHGBkaGxwdHw/9oADAMBAAIRAxEAPwD2aEIQAhCEAIQhACEIQAhCEAIQhACEIQBIShUxpBYBd0uIbgHulFJNtLwCSEIS4CEIQAhCEAIQhACEIQAhCEAIQhACEIQAhCEAIQiGABMI1Vj4Akq47GpRQ1KjBVXeT36ADmSeEtTmf/IeHz7PxA9VVf8A+bq5+AMlbuiG6QlL02wrX7QtzyD5tLI9LMLa+fd3qf8AaTPBAjlc4V8g0zANlG7TNuG8ecSlVNx1ja448L6zf4fuZ/IfQuztvYeu+Sm+Zgpa1iNAQCdRzImpeeU/+OaLJiFLFizo66DqqtgwDNz6o0nfek5th2PJkv4Fwv1/73HnypxvTuaRdmsXHOUNq7ZpYcDO2pFwo1J7+4TidobQpinRp2IcuBoumhHEacvwzr8WQxIK3sSNytuPLeOE83N1ssONzkuPBppTdJmDR9MlAIGFrmxJuKYIYscxIJYaXJ3zotk7ZSuLBWVrdlhYyqMOnL/R/wASWmApBAPwE8nB+MT+TtbTflmjxqjbhKdDaFN+y4Py85aVgdxvPqDAdEvGtHAQBYQhACEIQAhEMS8AdCIDFgBCEIAQhCAEIQgCExAIWjoAQhCAEo7Zw3S4etT9ek6f3IR9YzbDVhTPQFA/AupYDQ7lBFyTYakCcbg6OPqEmrtNUzHsJQDFQNLZlKqp8c/iYBwfo16SPQoVaQRXVlLi5KkFwlNvEZSDbmvfM/aO1+mdnNGipa2ioRuFrkg6k8THjA1ErVQEdlpvWpl8jZMy51TMbWW7ZdO8T0c7PouqsaSG9t6Kd4I5d8r1XUY+lkpabb8pkYsbyKr4Oa2dtR2UtR0N0dgjZXVwpRicx3EG17zTxlTGmgzsapUKSczkrdnGUZWN2y2324zl2JoYnEqgCjI+UAaDsuth3Rx2hWRcgqMVIFwxuD4zDNlupJbNJr9yVj33fBLQxNV3QvcgOp1XdqL2uNJ6XicfUFVlbDFlLEq6lSct7dnfwv4tPLlxL2uLZgdBlNrc75vpL+xtu10rq2Z3ucpXtE34qN5PdxnBmTzY3jkueP1NVs7PTBix7Kp/b/zDPn0yFBzIsT3ShV2zVCXXD1mbkURfhnv8JRwHpBWbpUqUslQDOhqKyoqAAajtHW509bunB0PQSjnUp1S35stKSrY3/wDDkOtteccMCR2Xcf5ifnOf2fisVVbpP4qglMkhUyq2o0ucpuuvrMD3CaO1MNirXTGU05EUvhq7/wC2fTGBpFaqgsKmgFzmFx/ptLeBxROj7yLg8PDunNYbF1wmXE16TNnsFC9dxoVKlbZdeBXymPiMRVqYp0DlQGZVJF1AVSQLHTUjfv14ys56TSGNyPRxikOmZfMSUGebJiMSlr082/s9bcbHsk8dN28Seltl1tmR1uubS/ZJtm0tpfjM1nj5LvA/B6HCcVS9JSNMzA8m/wCR9ZNU9MVXfZyOCg/PdLLNH2VeGXo68xsrbNxXS0kqWtnUNa97Zhe15bmid7mTVAIsISQEIQgBCEaRAHQhCAEIQgBCESAY3pTh6j4dhSYI4KsrElR1Tc6jUaXnDYDBVrO1RlYFjlK1QWFtS5ANiv4SN9xw3ztdubaopTYB0Z+CA3vYgsOrexteZv8AgNB06tMFSPwkqADY2tfTUbhxmE39WxZHCYQHPjECXRejrFiL5Mtidc1rmxNtT1TytOs2FTJw1MuQCEUH8yaH4qZyGCVU2jkW9nUqwYZesmoJDX9Uct/C86b0YrN0JUgBld7i27M5cD3BwPdMfxFKWJSftFsFqbRzXpNSCYx7E/zKWvK4IGmnIfe45OIXrTa9NWbpqD8WR1HK5vv7tR5TLx1F1bVW8bHX3zNNSwwa9V/BMtpNfcic9WwkmyabNXpqjBHZ1Csdwa+hMha+XcfKWNiqy4ii5UgLVpm50/EOco+5BHoX8BjVTI1SmWBPWAJuCBa914a+coY+lWpgNUdXARiVV3p3AAuQ41UjnF2ycQWYLW0DuRwJDNmAzDkLAeE513dW/nB9dL7/AInQ+F5aENc2lJJp8eTWUXjSbi9/PgvYbD0GU2OLQPqR0aV0toeqaJ1HfLH8HRy2FWtbd1cFXDeFwZl4TC0wysiK+RlcBSyEMtivVBHqDQX0EgxdEHPZGu7Fm/mNfNnLiykCwzMTa/CbNZ4uqte/+ZEcuNr/ABt/o2auFQKWSniXKKbNWZaKKcvayg5ybfhOh0vpOSO0KiVGCVGuHZRfrGwYgatf5zsNgYJwhpA01Rxcq4diSVC7ka4OVRpfh3mVsd6HOGzg0gS2iqXVixNxZarLf3EyvxZZNuTX2o9DpOswYk1OL/uN2ZXZwt6qOWFlKr2XU5wGJuWW662sdxBG+XMBjqgT+IbKTlZNBdbl2YEkMbEsc2oA0EYno86KDQCMWD7mOZXIsyNmCkC2nfYbpv7Jo5FyFD1WbqFiVUFmKhVJtYA8R3xOLjRlPPGadbq1V7OjnsdjlqC4TK2a5Oh6uW2W9hpcX783cJmVkFySwUXPextp2R9bTuMfsekxFRUGX8aqCpH9QC8Zw+OYBqiqTbO4AsNVzEC7b9wGkwpqVsqpJrY9b2KmWhRHKlTHkgl+Q4ZMqKvJQPICSz1EqR5z5FhCEkgIQhACEIQAhCEAIQiEwAmdts/yWt/T5ZhL5Mo7W1ov4X8iDKy7WSuUcnWw6OAGG4EAgkEZlKm3uJlrZp6KmaaXKliRmbUXNyL8pVQyenyE4U6do2cU+Ti9u4DFJX/iERyLsL0rO4UrYGxHMDcDa3Ayf0Qx4PSp1gQykq4CsDkVdR/kv752iNI8Vg6VQWqIjj+pQT7jwl8svkxfG/5IhHTLUjhvTyp1KT+rVsffb9J0SFCilhvCbrE2ZCVXcct9LXtvHKVNqegmHqiyPVp63sHLpf8AK1/haTYnZGJRGVMrk00pgjQ3VqZzEHQWVCLXN8/dKQgowUbErcmy3jMMFpPbPddGuCAPG40vwnH4upldG10dTpvNiDp5TpttO7DEo10V3RlNnGYB8xsyi40nnuKV0q1b3yrojEEZrITcZhewO4ynxJ5FJPgqn4PTKZZlDMAGIBIBva/C/Gaz7MRqSadZggNtQcxI6wJtuHnvlDB4ZsiKASQijnqFF5oUxVSx7wACRv3jXu7915zwS1ybVp/0PVyN6IqLpo5nHbAW9wGQ3NjbqmxtcD9DKFanXTtqKqgWvvIHd+IHzneJi17LgXC2sbEX0sRqBu0vpvmKyd00/Mzw1pdr0+UZfl4ZrtU/a4ZyNHbBpnMHyeJGnnxm9sj0n6ZWyqM1Ow6YjrnNm0ubEWt8ROH9KrPi6l3VAgRbnMSeopNgoNzcnlF2CiZHD5LMr5S7ZADdAGGhBYWbQ8zxtPTVzgpLZtJ/oeXqWPI4tWk355O7we3QlUuWFQgqHAO5SdTfgbbhxtOn2riVujLY3XNm5rvFxx0zHxHfOC6cOLKqrTDuwCIURc7syrcgF7BiBYAADnNlAzJhXGZsi1EIAJJXUKLDhcLv7jM2qjTdv2bSlf1JUvCOqwxAKkADXUAb77x8bzzWtSLOz6BWckd923Ae/dO/Rm6ulrAad8p4fAJTHVXUC1zqbDvM52rNIvSdfhq6uoZTcHcd3wOsmmdsQfy/Fj9B9Jozui7SZzNUxYRIssQEIRLwBYRLwvAFhCEASNZo4yImABMq7Q1pP+RvgDLBkOIF0Yc1I8wZD4JRx6ma+zqAylmGt/eBYTERpsYPEFge63nz+E5MSWrc2ndCYiibkjjwkYJG8W++cvxQom8sMXwZKbRTVpMpkjYZTw8tI1sOeBv4zJ4pIupJgQDvAMxsf6J4Stq1PKb3uhKEnmQpAb33mwQRvBiq8zarksRLhWAsrdW/LrW428dPIR6YVdL5lbffMb8OYtz4SZGkitKJJeDRzk/JRr0tbMRc9lgO0b6qwHEDcB8d0pCgSSOW/lNp6atoR/2I04INrmN8wJvrew485lPEpO0bY8+lUzxfaKsauIdKqFi7sAgUva5GjmzKAAOzvnb+guyV/haVRwCHBZQN5zMTdiOGs19meiFCnZqn891Nw7qtla+5FAsB43PfN6wGgAA7uU68k04qK4Rx4k4ycvLKOJ2ejqqstkU3CLoL2I1t4ySnRRAFRQANwEnZpGqFtw/SZq3si7flkTStVmmmGA1Jv8pBtBRlHDeZq8T02yqkro09jf8AqXvLf7jLxlPZQtRTwv5kmW50R7UZPkALx0SEsQOiRIQAhCEAdCEIASNhJIhgEDSIyZxIWMA4e9tPvSaOy27XgPrM/ECzsOTN8zLuzDq3gJx49po3l2mssobN2izuysoUZ6iI6tmVxTYq1wQCrAhurqCFJB0NryzEOwnRDkxFZ2XOaasaa5XqMxd1KIvXIdwGYkDPedhgdIscJyYxGJoqluoq3JSsWrO3S1kShS6UP27lrnM9s6jW00KvpLSQOzBlVMlmYqFdalRqauLElVLI1iwF7QDeCxr4dTwjMPikfLkOYMudXUEoVvbRx1Sdd15ZEhpPkENLDW3GNq0iuvCWhCsOqfvjM544tbF4ydlIGSUm1EibTSPpnUTjexsLVbUwRC3DTnGOdTLmF7I9/wAzL4o6pUysnpWww4ccdflFtaLiKoRSzHQC5sCT7gNSe4amZOK2xY5EQtU3lG6psB1spFwxF9QDwIvcWnYopcGLbZos0y9qt2ff9JawKMqAP2yWZt3adixGmnHhKO1X1Hh9ZXL2smHJ0mBX+Wg5Iv8AtEs2kdBbKo5KB8JJeXXBViQiwkgSEIQAhCEAW8LxYQAhCEAYyyrUEuyvXWAcLjxaq/52+JJk2zD1j+X5ESPa4tWfxHxUGWdmKGtbtLe/eDOOK+v9zeXaaSNHqZAI9TOwwLIMo1NjUuuUQU3dqbs6KNXpOaiOV3Ehib8/K1Db20HptSWnmJYuzhER26NFALZWYaB3p3IubHdxF7Z20lbJTepS6c01d0Rwd4BJUXvl1uO4jxgFLH7OrC75qtUN0SVOjcJXelTSqSVa6KjGo4JylercDgJGmKxlPo1JUKgw9Mo6tUepUq1OsBUzDsUyLv1rkMbaa9IpkgHwgEoMbiT1D98RHAxmK7DeErLtZMeSi73tJKR1ErqZLROs4GzpHMdTLtB7qPf85nO2+WadZUpl3NlUMSTwAJm3T9zM8nAuOwwqLkJNsyMbEi4Rg1rjvAkdOglMHKN5ZubdY3IHduAA7pWxG2ky9QM7kEqhVkNwSCrF16hFjdSM2m46XrDCPWOerdV1yJ2XVSykgjmQo1OovbS5E6zEc+1gzBKSl7mxe2gIcI1gbE2BLX0FrEZryvtM3e3cB5/9zUSkqDKot8yeZPE95mViReuo5sg8yJjl4/cvDk7O0WJCbFAhCLaAF4kW0LQBIRbQtAFhCEAIQiQBY0i8TNHQDhPSOmVrtfiFI7xa2nlKeExRRgw8uYnSekGEV2GYX6oseI1O48JztbAOvZOYcjv9x/XznNLG9WpGsZKqZtHEKwDA2vz5+MlUznFqW6huOOU6a93P3Szh8S66A6cjqPdyllmraSIcPRq4nB06oAqIr2va41F99j38RxlR9kENnpuq2Y1ERkBRahpCjmbKQWUJcBLjU77WtYw2NVtCLHzHn+suq02Uk+CjTXJV2DhHp0sju7sGYZnbNmVTlQqL9UZFTq873uSSdUGQKZIrSSCdTIca9kPu+YkimQY/s+8fOVn2v9C0eUU1MmpNrKymS0TrPPZ0oHaT16LvSCoVUsVuzAkBcwZur+IkAi27rd1jVYzTo9hfyj5Tfp1uzLKV6ODSmSRvYg3c3Nwtri+4mxJ53Mo43apy/wAlDUaw3A2QtkC5lGp7akjSwViSLWNjauFeoFRXKDrkstr6oyBe6+cm416uhBIIdhsKlMEILXYsTxJYkn5n/smdZiPMzi2bEovAMvwsT8pbr4kICTqeXfM7ZT58Qh5sT5Kx+kxySVqP3LxXLO0jo2F5sUHQiWiwAhCEAIQhACEIQAjSeECYoEAAIjGOjTAMvaiXYeH1mc9Ka20h2ff9JSVZBJm18IrCxAI8JRqYBl7Bv/S2vkd4+M6B0HASFqcrKKfJKZks2Tqm62y7tMzN/VJhUYDQkaE67wQQCDz3y+6AjUcLXBtpylGtgzbqHKPV3jff7tymbg12llL2TUNoesPeP0l2lVVuyQfn7xwmAxZO2uXv3r58PfaSK3HyI+hEhZZR2kTpT4OkUxuKTMhv3fOZuExjbic3jv8AOWMTjVKkKddND48OBl3OMosqotMq7jYyWidZWUyemZxG4jH7+U06XYW/qj5CZIexvNF8UoAHGw05acZ0YWlbZnkQ93tqZl4rGk6JoOfE/pIsRWLE3OnwkdOgX3aDn+ktKcpbRIUUt2V3LHqjXjb6zU2FhctQMdTY+7w/WLRwwUaCaGzU6/8AlPzEmMEtyJSs1w0WMEeBNjMURYgEWSAhCEAIQiXgCwhCAJaLCEAIkWEApbQGg8fpKGWaWOHVHj9DKFpVkoMsMsfACSQQtTkZSWisQiKJRUamDKVXZw3ocp7uyfFd31msySMpaVcb5LJmGyOnaW49ZdR7xvHx8YqODqDfwm0UlWtgFbUdVvWXQ+/gffeYyxLwXUvZUVvOS0zr7pC+HdN4zjmuh968fd5RcPUDXsd2/mO4jgZhKDjyXUkwJidw1PKPpUWfdoOf6S/Rw4XdNIY292VlL0VaOE4t5fe+WwkmCxypOmMaM2yMU5a2cup8PrIiJY2eO17vrLFS5aOESLBA6ESLJAQhCAES0WEAzcVtMU7ZkcXvbscN/wCLvEh/x+n6rf6f3SHb2XpKAa2Ulr30H4d54CZ+MtkbMLEAZbjKb8bCwsOGmlm7rzzsvUZIzkk1SIbZ0aYokAim+oBGqbjx7Ud07eyfzp8vze6YletSDUw5dWNOlYqARciplXS7G9nBAFt14i4vDG38+q2a5Xtk2vrYZeAHkb8bzvi7SZJu9O3s380/dEFdvZP50/3zB/isPmU9PVbrKQMrFboQ4Fsl+I3cCZKlXDMGy1nA3kDON7ZdBlvcsRoN+hlgateoxFhTffzT933aVujf2b+ad/8AX93hR2vQFlDk9bKOq514C+W1u/doeU1pFAywr+zfzp/v+7Qyv7N/NOf55qQkgyir2/8AW/mnj68QU39m3mnP881YQTZmZX9m/nT/AH/d4mR/Zv5p+/7tNSECzJNFuFN/NO/+v7vG9FU9m3mn7/u02YSKFmMaD+zbzTn+aQvgSTc0STbfdL87dub0JGlCzHFBx/8Am3mn7ooov7NvOn+/7vNeEmkLMJsUAQpRgSbWJQa8PxceB3HyvMpYmwQm2+xS43/1d3xmlWoqwswBHeAfnIsLh8o3C40FuWl9OFyPlvlPqUq8EWyoUf2b+dP98mwxZb3pvqeaeHre+X4TQFbp29k/nT/fHdO3s380/dM3Z+HbM3XW+Ui6sWa9xqQd24+cuJhXFr1mPiBr8ZTHJyVtUCbp29k/nT/dE6dvZP50+7+r7tHYemVFmYsb7yLcAPpf3yeXBX6dvZv50/3fd4dO3sn86f7pYhAK3Tt7NvNP3e+L07ezfzT98sQgFHH7PSsAHvcXsQbEX3/ITNw3o2gN2csOAAy6d5/S0ITCXT45y1SW4o1zhxcWsMoAGgOgO6+/hGDCm97r/Yv3xPnCE3Aowp5r/Yu/T9B5RDhTbevLsLu5fE+ZhCAOGHPNd9z1RqeJjujf1/8ASP1hCALkf1h/b/zDo39f/SP1hCASre2u+OhCAEIQgBCEIAQhCAEIQgBCEIARIsIBmYbZgUm7EjLlta2lwfpJzghp16n958vvlCEpCKitgK2EBN8zDebBiBrfh74n8APWfeD2zwhCXAfwa+s2618xB3Ab9/CH8APWfj+M8YQgCnBi1sz/AN5+e+WVFtIQgH//2Q=='
                heading="Contact Us"
            />
            <div className='pgleft pgcommon'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qUDtFbsyzxlKWXHzQ2lya5mtVPS8OIHyRg&usqp=CAU' />

                <div>
                    <h1>Our Story</h1>
                    <p>One such website is the Help india  platform, which is dedicated to creating a giving culture in India. The platform connects donors with a variety of trusted nonprofits and social organizations that work towards various causes, including education, health, and disaster relief. Help INDIA  donation process is user-friendly and secure, with options to donate one-time or set up recurring donations, and it provides tax receipts for Indian donors. .</p>

                </div>
            </div>
            <div className='pgright pgcommon'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjbdeCH23SqqLlPj6zbw-YlDhOnk4KwYEi2w&usqp=CAU'/>

                <div>
                    <h1>Who are we</h1>
                    <p>One such website is the Help india  platform, which is dedicated to creating a giving culture in India. The platform connects donors with a variety of trusted nonprofits and social organizations that work towards various causes, including education, health, and disaster relief. Help INDIA  donation process is user-friendly and secure, with options to donate one-time or set up recurring donations, and it provides tax receipts for Indian donors. </p>

                </div>
            </div>

            <form className='extrapageform'>
                <h1 className='formheading'>Get in Touch</h1>
                <div className='fromgroup'>
                    <label htmlFor="">Name</label>
                    <input type="text" />
                </div>

                <div className='fromgroup'>
                    <label htmlFor="">Email</label>
                    <input type="email" />
                </div>

                <div className='fromgroup'>
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>

                <div className='fromgroup'>
                    <label htmlFor="">Rating</label>
                    <div className='rating'>
                        <div className='star'
                            onClick={() => {
                                setrating(1)
                            }}
                        >
                            {
                                rating >= 1 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>

                            }
                        </div>

                        <div className='star' onClick={() => {
                            setrating(2)
                        }}>
                            {
                                rating >= 2 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>

                            }
                        </div>
                        <div className='star' onClick={() => {
                            setrating(3)
                        }}>
                            {
                                rating >= 3 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>

                            }
                        </div>
                        <div className='star' onClick={() => {
                            setrating(4)
                        }}>
                            {
                                rating >= 4 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>

                            }
                        </div>
                        <div className='star' onClick={() => {
                            setrating(5)
                        }}>
                            {
                                rating >= 5 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>

                            }
                        </div>
                    </div>
                </div>

                <button>Submit</button>
            </form>

            <Footer1 />
            <Footer2 />
            Contact</div>
    )
}

export default Contact
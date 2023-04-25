import React from 'react'
import ProductCard from './ProductCard'
import img1 from '../../ASSETS/Products/1.png'
import img2 from '../../ASSETS/Products/2.png'
import img3 from '../../ASSETS/Products/3.png'
import img4 from '../../ASSETS/Products/4.png'
import './AllProduct.css'
const AllProduct = () => {
    const products = [
        {
            "ProductId": 1,
            "ProductName": "Product 1",
            "ProductDescription": "Normal quality cloth for the people who cannot afford . ",
            "ProductImage": [
                {
                    id: 1,
                    image: img1
                },
                {
                    id: 2,
                    image: img2
                },
                {
                    id: 3,
                    image: img3
                }
            ],
            "ProductCode": "P1",
            "ProductCategory": "Category 1",
            "ProductSubCategory": "Sub Category 1",
            "ProductBrand": "Brand 1",
            "ProductColor": "Color 1",
            "ProductSize": "Size 1",
            "ProductWeight": "Weight 1",
            "ProductMaterial": "Material 1",
            "ProductQuantity": 10,
            "ProductUnit": "Unit 1",
            "ProductPrice": 100,
            "SalesPrice": 80,
            "ProductDiscount": 20,
            "ProductDiscountType": "Percentage",
            "ProductTax": 20,
            "ProductTaxType": "Percentage",
            "ProductShippingCharge": 20,
            "ProductShippingChargeType": "Percentage",
            "ProductShippingTime": "1-2 days",
            "ProductShippingTimeType": "Days",
            "ProductShippingLocation": "Location 1",
            "ProductShippingLocationType": "Country",
            "ProductShippingReturnPolicy": "Return Policy 1",
            "ProductShippingReturnPolicyType": "Days",
            "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
            "ProductShippingReturnPolicyDescriptionType": "Days",
            "ProductReviews": [
                {
                    "ReviewId": 1,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 5,
                    "Date": "2021-08-01",
                    "Review": "good donation website",
                },
                {
                    "ReviewId": 2,
                    "Name": "Viraj",
                    "Email": "",
                    "Rating": 1,
                    "Date": "2021-08-01",
                    "Review": "good donation website",
                },
                {
                    "ReviewId": 3,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2021-08-01",
                    "Review": " good donation website",
                }
            ]
        },
        {
            "ProductId": 2,
            "ProductName": "Product 2",
            "ProductDescription": ".Money is important factor for everybody. if user is confuse which product they can donate , they can directly donate some money.",
            "ProductImage": [
                {
                    id: 1,
                    image: img2
                },
                {
                    id: 2,
                    image: img1
                },
                {
                    id: 3,
                    image: img3
                }
            ],
            "ProductCode": "P1",
            "ProductCategory": "Category 1",
            "ProductSubCategory": "Sub Category 1",
            "ProductBrand": "Brand 1",
            "ProductColor": "Color 1",
            "ProductSize": "Size 1",
            "ProductWeight": "Weight 1",
            "ProductMaterial": "Material 1",
            "ProductQuantity": 10,
            "ProductUnit": "Unit 1",
            "ProductPrice": 100,
            "SalesPrice": 90,
            "ProductDiscount": 10,
            "ProductDiscountType": "Percentage",
            "ProductTax": 20,
            "ProductTaxType": "Percentage",
            "ProductShippingCharge": 20,
            "ProductShippingChargeType": "Percentage",
            "ProductShippingTime": "1-2 days",
            "ProductShippingTimeType": "Days",
            "ProductShippingLocation": "Location 1",
            "ProductShippingLocationType": "Country",
            "ProductShippingReturnPolicy": "Return Policy 1",
            "ProductShippingReturnPolicyType": "Days",
            "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
            "ProductShippingReturnPolicyDescriptionType": "Days",
            "ProductReviews": [
                {
                    "ReviewId": 1,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 5,
                    "Date": "2021-08-01",
                    "Review": "GOOD DONATION WEBSITE .EASY TO USE.",
                },
                {
                    "ReviewId": 2,
                    "Name": "Viraj",
                    "Email": "",
                    "Rating": 1,
                    "Date": "2021-08-01",
                    "Review": "GOOD DONATION WEBSITE .EASY TO USE",
                },
                {
                    "ReviewId": 3,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2021-08-01",
                    "Review": "Education realted product like bag, copies,books and more items.",
                }
            ]
        },
        {
            "ProductId": 3,
            "ProductName": "Product 3",
            "ProductDescription": ".",
            "ProductImage": [
                {
                    id: 1,
                    image: img3
                },
                {
                    id: 2,
                    image: img2
                },
                {
                    id: 3,
                    image: img3
                }
            ],
            "ProductCode": "P1",
            "ProductCategory": "Category 1",
            "ProductSubCategory": "Sub Category 1",
            "ProductBrand": "Brand 1",
            "ProductColor": "Color 1",
            "ProductSize": "Size 1",
            "ProductWeight": "Weight 1",
            "ProductMaterial": "Material 1",
            "ProductQuantity": 10,
            "ProductUnit": "Unit 1",
            "ProductPrice": 100,
            "SalesPrice": 70,
            "ProductDiscount": 30,
            "ProductDiscountType": "Percentage",
            "ProductTax": 20,
            "ProductTaxType": "Percentage",
            "ProductShippingCharge": 20,
            "ProductShippingChargeType": "Percentage",
            "ProductShippingTime": "1-2 days",
            "ProductShippingTimeType": "Days",
            "ProductShippingLocation": "Location 1",
            "ProductShippingLocationType": "Country",
            "ProductShippingReturnPolicy": "Return Policy 1",
            "ProductShippingReturnPolicyType": "Days",
            "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
            "ProductShippingReturnPolicyDescriptionType": "Days",
            "ProductReviews": [
                {
                    "ReviewId": 1,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 5,
                    "Date": "2021-08-01",
                    "Review": "GOOD DONATION WEBSITE .EASY TO USE",
                },
                {
                    "ReviewId": 2,
                    "Name": "Viraj",
                    "Email": "",
                    "Rating": 1,
                    "Date": "2021-08-01",
                    "Review": "GOOD DONATION WEBSITE .EASY TO USE",
                },
                {
                    "ReviewId": 3,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2021-08-01",
                    "Review": "Education realted product like bag, copies,books and more items",
                }
            ]
        },
        {
            "ProductId": 1,
            "ProductName": "Product 1",
            "ProductDescription": " Money is important factor for everybody. if user is confuse which product they can donate , they can directly donate some money.",
            "ProductImage": [
                {
                    id: 1,
                    image: img1
                },
                {
                    id: 2,
                    image: img2
                },
                {
                    id: 3,
                    image: img3
                }
            ],
            "ProductCode": "P1",
            "ProductCategory": "Category 1",
            "ProductSubCategory": "Sub Category 1",
            "ProductBrand": "Brand 1",
            "ProductColor": "Color 1",
            "ProductSize": "Size 1",
            "ProductWeight": "Weight 1",
            "ProductMaterial": "Material 1",
            "ProductQuantity": 10,
            "ProductUnit": "Unit 1",
            "ProductPrice": 100,
            "SalesPrice": 80,
            "ProductDiscount": 20,
            "ProductDiscountType": "Percentage",
            "ProductTax": 20,
            "ProductTaxType": "Percentage",
            "ProductShippingCharge": 20,
            "ProductShippingChargeType": "Percentage",
            "ProductShippingTime": "1-2 days",
            "ProductShippingTimeType": "Days",
            "ProductShippingLocation": "Location 1",
            "ProductShippingLocationType": "Country",
            "ProductShippingReturnPolicy": "Return Policy 1",
            "ProductShippingReturnPolicyType": "Days",
            "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
            "ProductShippingReturnPolicyDescriptionType": "Days",
            "ProductReviews": [
                {
                    "ReviewId": 1,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 5,
                    "Date": "2021-08-01",
                    "Review": "Money is important factor for everybody. if user is confuse which product they can donate , they can directly donate some money",
                },
                {
                    "ReviewId": 2,
                    "Name": "Viraj",
                    "Email": "",
                    "Rating": 1,
                    "Date": "2021-08-01",
                    "Review": "Money is important factor for everybody. if user is confuse which product they can donate , they can directly donate some money.",
                },
                {
                    "ReviewId": 3,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2021-08-01",
                    "Review": "Education realted product like bag, copies,books and more items.",
                }
            ]
        },
        {
            "ProductId": 2,
            "ProductName": "Product 2",
            "ProductDescription": "Money is important factor for everybody. if user is confuse which product they can donate , they can directly donate some money.",
            "ProductImage": [
                {
                    id: 1,
                    image: img2
                },
                {
                    id: 2,
                    image: img1
                },
                {
                    id: 3,
                    image: img3
                }
            ],
            "ProductCode": "P1",
            "ProductCategory": "Category 1",
            "ProductSubCategory": "Sub Category 1",
            "ProductBrand": "Brand 1",
            "ProductColor": "Color 1",
            "ProductSize": "Size 1",
            "ProductWeight": "Weight 1",
            "ProductMaterial": "Material 1",
            "ProductQuantity": 10,
            "ProductUnit": "Unit 1",
            "ProductPrice": 100,
            "SalesPrice": 90,
            "ProductDiscount": 10,
            "ProductDiscountType": "Percentage",
            "ProductTax": 20,
            "ProductTaxType": "Percentage",
            "ProductShippingCharge": 20,
            "ProductShippingChargeType": "Percentage",
            "ProductShippingTime": "1-2 days",
            "ProductShippingTimeType": "Days",
            "ProductShippingLocation": "Location 1",
            "ProductShippingLocationType": "Country",
            "ProductShippingReturnPolicy": "Return Policy 1",
            "ProductShippingReturnPolicyType": "Days",
            "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
            "ProductShippingReturnPolicyDescriptionType": "Days",
            "ProductReviews": [
                {
                    "ReviewId": 1,
                    "Name": "Aryan Chand",
                    "Email": "",
                    "Rating": 5,
                    "Date": "2021-08-01",
                    "Review": " Website is good . All the product were donated succesfully .",
                },
                {
                    "ReviewId": 2,
                    "Name": "Viraj",
                    "Email": "",
                    "Rating": 1,
                    "Date": "2021-08-01",
                    "Review": " Website is good . All the product were donated succesfully .",
                },
                {
                    "ReviewId": 3,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2021-08-01",
                    "Review": "  Website is good . All the product were donated succesfully ",
                }
            ]
        },
        {
            "ProductId": 3,
            "ProductName": "Product 3",
            "ProductDescription": "  Website is good . All the product were donated succesfully .",
            "ProductImage": [
                {
                    id: 1,
                    image: img3
                },
                {
                    id: 2,
                    image: img2
                },
                {
                    id: 3,
                    image: img3
                }
            ],
            "ProductCode": "P1",
            "ProductCategory": "Category 1",
            "ProductSubCategory": "Sub Category 1",
            "ProductBrand": "Brand 1",
            "ProductColor": "Color 1",
            "ProductSize": "Size 1",
            "ProductWeight": "Weight 1",
            "ProductMaterial": "Material 1",
            "ProductQuantity": 10,
            "ProductUnit": "Unit 1",
            "ProductPrice": 100,
            "SalesPrice": 70,
            "ProductDiscount": 30,
            "ProductDiscountType": "Percentage",
            "ProductTax": 20,
            "ProductTaxType": "Percentage",
            "ProductShippingCharge": 20,
            "ProductShippingChargeType": "Percentage",
            "ProductShippingTime": "1-2 days",
            "ProductShippingTimeType": "Days",
            "ProductShippingLocation": "Location 1",
            "ProductShippingLocationType": "Country",
            "ProductShippingReturnPolicy": "Return Policy 1",
            "ProductShippingReturnPolicyType": "Days",
            "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
            "ProductShippingReturnPolicyDescriptionType": "Days",
            "ProductReviews": [
                {
                    "ReviewId": 1,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 5,
                    "Date": "2021-08-01",
                    "Review": " Website is good . All the product were donated succesfully ",
                },
                {
                    "ReviewId": 2,
                    "Name": "Viraj",
                    "Email": "",
                    "Rating": 1,
                    "Date": "2021-08-01",
                    "Review": "  Website is good . All the product were donated succesfully .",
                },
                {
                    "ReviewId": 3,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2021-08-01",
                    "Review": " Website is good . All the product were donated succesfully .",
                }
            ]
        }
    ]
    return (
        <div className='allproducts'>
            <h1>All Products</h1>
            <div className='products'>
                {
                    products.map((item,index) => {
                        return (
                            <ProductCard data={item} key={index}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllProduct
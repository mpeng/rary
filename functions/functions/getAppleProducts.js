const fetch = require("node-fetch");
const _ = require('lodash');

var appleProducts =  { "iphone X": { 
   "psid":"30001MQA82ZP/A",
   "bsin":"1061B86A0736CA",
   "sku":"MQA82ZP/A",
   "upc":"190198456823",
   "name":"iPhone X 256GB Space Gray",
   "brand":"apple",
   "manufacturer":"Apple",
   "shortDescription":"iPhone X 256GB Space Gray",
   "hasVariations":false,
   "hasOffer":false,
   "offerTypes":[  

   ],
   "imageUrls":{  
      "thumbnail":"https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-gray-select-2017?wid=1200&hei=1200&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1515602510330",
      "small":"https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-gray-select-2017?wid=1200&hei=1200&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1515602510330",
      "medium":"https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-gray-select-2017?wid=1200&hei=1200&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1515602510330",
      "large":"https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-gray-select-2017?wid=1200&hei=1200&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1515602510330"
   },
   "productType":"MERCHANDISE",
   "categorySlugs":[  
      "iphone-iphone-x"
   ],
   "appliedChanges":[  

   ],
   "merchant":"APPLE",
   "totalReviews":0,
   "sourceCountry":"HKG",
   "variations":[  

   ],
   "options":{  
      "model":{  
         "key":"iPhone X",
         "value":"iPhone X",
         "label":"Model"
      },
      "storage":{  
         "key":"256gb",
         "value":"256gb",
         "label":"Storage"
      },
      "color":{  
         "key":"space_gray",
         "value":"Space Gray",
         "label":"Finish"
      }
   },
   "purchasableByAgentsOnly":false,
   "shippingInformation":{  
      "deliveryInformation":{  
         "source":{  
            "country":"HKG",
            "supplier":"apple"
         },
         "destinations":[  
            {  
               "country":"HKG",
               "method":"DOMESTIC_SHIPPING",
               "originalShippingPriceInfo":{  
                  "shippingCost":"HKD 0.00",
                  "fees":"HKD 0.00"
               },
               "expeditedShippingEligible":false,
               "enabled":true
            }
         ]
      }
   },
   "pricingInformation":{  
      "originalPriceInfo":{  
         "basePrice":"HKD 9295.00",
         "suppliersSalesTax":"HKD 0.00",
         "shippingCost":"HKD 0.00",
         "msrp":"HKD 9888.00",
         "fees":"HKD 0.00"
      },
      "calculatedPriceInfo":[  
         {  
            "basePrice":"PNT 2323750",
            "suppliersSalesTax":"PNT 0",
            "shippingCost":"PNT 0",
            "msrp":"PNT 2472000",
            "fees":"PNT 0",
            "displayPrice":"PNT 2323750",
            "unpromotedDisplayPrice":"PNT 2323750",
            "msrpDisplayPrice":"PNT 2472000",
            "priceType":"SUPPLIER",
            "splitTenderEligibility":{  
               "splitTenderEligible":false
            },
            "taxes":"PNT 0"
         }
      ]
   },
   "inStoreEligible":false,
   "reserveAndPickupEligible":false,
   "shippingEligible":true
}, 
"macbook" : {  
   "psid":"30001MNYL2ZP/A",
   "bsin":"102E85665DA4D3",
   "sku":"MNYL2ZP/A",
   "upc":"190198204837",
   "name":"12-inch MacBook 512GB - Gold",
   "brand":"apple",
   "manufacturer":"Apple",
   "shortDescription":"12-inch MacBook 512GB - Gold",
   "hasVariations":false,
   "hasOffer":false,
   "offerTypes":[  

   ],
   "imageUrls":{  
      "thumbnail":"https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/macbook/select/macbook-select-gold-201706?wid=1200&hei=1200&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1505775436903",
      "small":"https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/macbook/select/macbook-select-gold-201706?wid=1200&hei=1200&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1505775436903",
      "medium":"https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/macbook/select/macbook-select-gold-201706?wid=1200&hei=1200&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1505775436903",
      "large":"https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/macbook/select/macbook-select-gold-201706?wid=1200&hei=1200&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1505775436903"
   },
   "productType":"MERCHANDISE",
   "categorySlugs":[  
      "macbook"
   ],
   "appliedChanges":[  

   ],
   "merchant":"APPLE",
   "totalReviews":0,
   "sourceCountry":"HKG",
   "variations":[  

   ],
   "options":{  
      "color":{  
         "key":"gold",
         "value":"Gold",
         "label":"Finish"
      },
      "processor":{  
         "key":"1_3ghz",
         "value":"1_3ghz",
         "label":"Processor"
      },
      "storage":{  
         "key":"512gb",
         "value":"512 GB",
         "label":"Storage"
      }
   },
   "purchasableByAgentsOnly":false,
   "shippingInformation":{  
      "deliveryInformation":{  
         "source":{  
            "country":"HKG",
            "supplier":"apple"
         },
         "destinations":[  
            {  
               "country":"HKG",
               "method":"DOMESTIC_SHIPPING",
               "originalShippingPriceInfo":{  
                  "shippingCost":"HKD 0.00",
                  "fees":"HKD 0.00"
               },
               "expeditedShippingEligible":false,
               "enabled":true
            }
         ]
      }
   },
   "pricingInformation":{  
      "originalPriceInfo":{  
         "basePrice":"HKD 11029.00",
         "suppliersSalesTax":"HKD 0.00",
         "shippingCost":"HKD 0.00",
         "msrp":"HKD 11988.00",
         "fees":"HKD 0.00"
      },
      "calculatedPriceInfo":[  
         {  
            "basePrice":"PNT 2757250",
            "suppliersSalesTax":"PNT 0",
            "shippingCost":"PNT 0",
            "msrp":"PNT 2997000",
            "fees":"PNT 0",
            "displayPrice":"PNT 2757250",
            "unpromotedDisplayPrice":"PNT 2757250",
            "msrpDisplayPrice":"PNT 2997000",
            "priceType":"SUPPLIER",
            "splitTenderEligibility":{  
               "splitTenderEligible":false
            },
            "taxes":"PNT 0"
         }
      ]
   },
   "inStoreEligible":false,
   "reserveAndPickupEligible":false,
   "shippingEligible":true
} };



module.exports = (name = 'all', callback) => {
   if ( name != 'all' ) {		
		var rtn = _.get(appleProducts, name);
	    if ( rtn == null )
			rtn = {};	
   		return callback(null, rtn);		
   } else
   		return callback(null, appleProducts);		
};


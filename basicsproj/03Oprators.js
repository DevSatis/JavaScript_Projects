var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice)/listingPrice)*100;

var displayDiscountPercentage = Math.round(discountPercent)
console.log("Discount percentage is :",displayDiscountPercentage,"% off");

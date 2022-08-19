// step 1. adding event handler on button
document.getElementById('button').addEventListener('click', function () {
    // step 2. getting input price, converting it to number from string and clearing the input field
    const actualPrice = document.getElementById('actual-price');
    const actualInputPriceString = actualPrice.value;
    const actualInputPrice = parseFloat(actualInputPriceString);

    // step 3. added coupon input by id
    const couponCode = document.getElementById('coupon-code');
    const couponCodeInput = couponCode.value;

    // step 4. added discount input by id
    const discountedPrice = document.getElementById('discounted-price');
    const discountedPriceString = discountedPrice.value;


    // added condition and calculate the final output
    if (actualInputPrice > 0 && couponCodeInput === 'DOM') {
        const finalPrice = actualInputPrice * (30 / 100);
        const finalDiscountedPrice = actualInputPrice - finalPrice;
        discountedPrice.value = finalDiscountedPrice;
    }

    else {
        alert('You cannot get discount!');
    }
})
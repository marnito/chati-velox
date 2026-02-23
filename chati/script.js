// REDIRECCIÓN A STRIPE PAYMENT LINK
const paymentLink = "https://buy.stripe.com/28E5kD0iR1B6bWGdPj4ow00";

document.getElementById("buyButton").addEventListener("click", () => {
    window.location.href = paymentLink;
});

document.getElementById("buyButton2").addEventListener("click", () => {
    window.location.href = paymentLink;
});

document.getElementById("buyButton3").addEventListener("click", () => {
    window.location.href = paymentLink;
});

# Jak-tech-test (Checkout)

this is a checkout page of a tech test. Made using React with `create-react-app` and some external libraries from `react-hooks-form` and `react-icons`.

### First step (Delivery)

This step contains delivery details of receiver, consist of 5 input texts whereis 3 input for personal data and 2 other for dropshipper data (if user select it to send as a dropshipper). On the right hand there is a summary component of goods and total amount that needs to be paid. If user send it as a dropshipper, then there is a fee for dropshipping that will be added with the cost of goods.

### Second step (Payment)

In this step, user will select the shipment that they will use and the payment that they will pay from. Each shipment contain a name and a price for delivery. As for the payment, consist of e-Wallet showing current balance, bank transfer, and virtual account. On selecting shipment, there will be added an estimation of delivery inside the summary component based on shipment the user choose, and the button to pay will be changed using which the user choose for the payment method.

### Third step (Final)

This step only shows that the payment received and showing the order ID with random generated alphanumerical without 1,I,0, and O. The summary component shows delivery estimation, payment method, total amount details and the total amount that was paid. It contain a button to go back to homepage but it will redirected back to the first step.

All in all, i'm only passing the parameters between components and save it in local storage so after it refresh, it still on the last step and what the user already input. This page is also styled for a responsive design. I'm using the `react-hooks-form` but somehow i can't get the errors state of each input for now.

import React from 'react'
import '../App.css'
import Footer from '../home/Footer'
const Pay = () => {
  return (
   <div className='flex justify-center'>

<div className='mt-[100px] max-w-[800px] flex flex-col gap-5 mb-24'>
      <h1 className='pol text-5xl font-bold text-center mb-5'><span className='text'>Payment</span> Policy</h1>
<p>
 Payment Policy
Effective Date: January 1, 2026 
At Timeless Watch Co., we aim to make your shopping experience secure, simple, and transparent. This Payment Policy explains the accepted payment methods, billing process, and payment-related terms when purchasing from our website.

</p>


<p className='pol'>
   <span className='text-red-500 font-bold'>1. Accepted Payment Methods</span> <br />
We accept the following payment methods:

Debit and Credit Cards (Visa, MasterCard, Verve)

Bank Transfers

Mobile and Online Payments (e.g., Paystack, Flutterwave, Stripe, PayPal)

All payments are processed securely through trusted third-party payment gateways.

</p>

<p className='pol'>
  <span className='text-red-500 font-bold'>2. Payment Currency</span><br />
All prices on our website are displayed in Nigerian Naira (₦) unless otherwise stated. If you are paying from another country, your bank or card provider may apply currency conversion fees.
</p>
<p className='pol'>
  <span className='text-red-500 font-bold'>3. Payment Processing</span><br />
  
Payment must be completed in full before an order is processed or shipped.

Once payment is successful, you will receive an order confirmation via email.

If a payment fails or i
</p>
s declined, your order will not be completed.
<p className='pol'>
  <span  className='text-red-500 font-bold'>4. Payment Security</span><br />
  
We take payment security seriously.

We do not store your card details on our servers.

All transactions are encrypted and handled by secure payment providers that comply with industry security standards.

</p>
<p className='pol'>
  <span  className='text-red-500 font-bold'>5. Billing Information</span><br />
  
You agree to provide accurate and complete billing information. If incorrect information is provided, we reserve the right to cancel or delay your order.
</p>
<p className='pol'>
  <span  className='text-red-500 font-bold'>  6. Failed or Disputed Payments</span><br />

In the event of a failed payment, you may retry using a different payment method.

Any chargebacks or disputes may result in temporary suspension of your account while the issue is investigated.

</p>
<p className='pol'>
  <span  className='text-red-500 font-bold'>7. Refunds and Cancellations</span><br />
  
Refunds and cancellations are handled according to our Refund & Return Policy. Approved refunds will be processed back to the original payment method within a specified period, depending on your bank or payment provider.
</p>
<p className='pol'>
  <span  className='text-red-500 font-bold'> 8. Pricing and Errors</span><br />
 
We reserve the right to:

Correct pricing errors or inaccuracies

Cancel orders affected by incorrect pricing

Update product prices without prior notice
</p>
<p className='pol'>
  <span  className='text-red-500 font-bold'>9. Changes to This Payment Policy</span> <br/>
  
We may update this Payment Policy at any time. Changes will be posted on this page with an updated effective date.
</p>
<p className='pol'>
  <span  className='text-red-500 font-bold'> 10. Contact Us</span> <br />
If you have any questions about payments or billing, please contact us:

Email: support@timelesswatchco.com
Phone: +234 XXX XXX XXXX
</p>
</div>
<Footer/>
   </div> 
  )
}

export default Pay
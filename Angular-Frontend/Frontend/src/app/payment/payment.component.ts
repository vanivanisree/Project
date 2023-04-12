import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  paymentHandler: any = null;
  constructor() {}
  ngOnInit() {
    this.invokeStripe();
  }
  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51Mc1F5SE20fH3DuVCwnM4wGl5O6KdtS2WIN1DQZQThG5KH4TeMPXequw4ifxxiYttnSfwURy3S1euA74HjJPseI400gRKlNVSc',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        // alert('Stripe token generated!');
        alert('Payment has been successfull!');

      },
    });
    paymentHandler.open({
      name: 'Positronx',
      description: '3 widgets',
      amount: amount * 100,
    });
  }
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51Mc1F5SE20fH3DuVCwnM4wGl5O6KdtS2WIN1DQZQThG5KH4TeMPXequw4ifxxiYttnSfwURy3S1euA74HjJPseI400gRKlNVSc',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }
}

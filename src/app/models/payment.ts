export interface Payment {
  bearer: string;
}

export interface CreditCardPayment extends Payment {
  cardNumber: string;
  cardHolder: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
}

export enum PaymentProvider {
  FakePSP = 'FakePSP',
  InvoicePayment = 'InvoicePayment',
  Adyen = 'Adyen'
}

export enum PaymentKind {
  BlackLabel = 'BlackLabel',
  DirectDebit = 'DirectDebit',
  CreditCard = 'CreditCard'
}

export let PaymentProviderMapping: { provider: PaymentProvider, kinds: PaymentKind[] }[] = [
  {provider: PaymentProvider.FakePSP, kinds: [PaymentKind.DirectDebit]},
  {provider: PaymentProvider.InvoicePayment, kinds: [PaymentKind.BlackLabel]},
  {provider: PaymentProvider.Adyen, kinds: [PaymentKind.CreditCard]}
];

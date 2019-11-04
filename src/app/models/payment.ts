export interface Payment {
  bearer: string;
  accountHolder: string;
  iban: string;
  bic: string;
  cardNumber: string;
  cardHolder: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
}

export enum PaymentProvider {
  FakePSP = 'FakePSP'
}

export enum PaymentKind {
  Debit = 'Debit:FakePSP',
  CreditCard = 'CreditCard:FakePSP'
}
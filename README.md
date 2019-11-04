# Signup Example Application (Angular)

This project is an example of a basic Signup application in Angular
 by using [SubscriptionJS](https://developer.billwerk.io/Docs/subscriptionJS_Introduction)
 and [REST API](https://developer.billwerk.io/Docs/ApiReference)
 through [billwerk node wrapper](https://www.npmjs.com/package/billwerk)

## <font color="red">IMPORTANT!</font> Before you launch the application
- Clone repo `git clone git@github.com:billwerk/subscriptionjs-angular.git` 
- Run `npm install`

## Launch application with Sandbox server
- Login to your account on [Sandbox](https://sandbox.billwerk.com) server
- Make sure that your account has any active planvariants ([Products](https://sandbox.billwerk.com/#/products))
- Make sure that your account has set both FakePSP payment methods ([Settings/Payment Settings](https://sandbox.billwerk.com/#/settings/payment-providers-list))
- Populate your settings in `src\environment\sandbox\environment.ts`:
  - `publicApiKey` - please visit [Settings/Self-Service](https://sandbox.billwerk.com/#/settings/self-service) and copy your `Public API Key` on `General` tab
  - `clientId` and `clientSecret` - please visit [Settings/My Apps](https://sandbox.billwerk.com/#/settings/oauth-clients), create a new `Confidential` client and copy `Id` and `Secret`
- Run `npm run sandbox` or `ng serve --c=sandbox` for a sandbox server
- Navigate to http://localhost:4200/

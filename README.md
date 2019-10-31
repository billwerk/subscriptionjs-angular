# Signup Example Application (Angular)

This project is an example of Signup application in Angular
 with using [SubscriptionJS](https://developer.billwerk.io/Docs/subscriptionJS_Introduction)
 and [REST API](https://developer.billwerk.io/Docs/ApiIntroduction)
 through [billwerk npm package](https://www.npmjs.com/package/billwerk)

## <font color="red">IMPORTANT!</font> Before you launch the application
- Clone repo `git clone git@github.com:billwerk/subscriptionjs-angular.git` 
- Run `npm install`
- Replace `line 31` in `node_modules\billwerk\dist\index.js` with following code:
```javascript
    return `http://${this.billwerkHost}${!short ? this.apiPath : ''}`;
```

## Launch application with Sandbox server
- Login to your account on [Sandbox](https://sandbox.billwerk.com) server
- Make sure that your account has any active Plan Variants ([Products](https://sandbox.billwerk.com/#/products))
- Make sure that your account has active `CreditCard:Ayden` paument method ([Settings/Payment Settings](https://sandbox.billwerk.com/#/settings/payment-providers-list))
- Populate your settings in `src\environment\sandbox\environment.ts`:
    - `publicApiKey` - please visit [Settings/Self-Service](https://sandbox.billwerk.com/#/settings/self-service) and copy your `Public API Key` on `General` tab
    - `clientId` and `clientSecret` - please visit [Settings/My Apps](https://sandbox.billwerk.com/#/settings/oauth-clients), create new `Confidential` client and copy `Id` and `Secret`
- Run `npm run sandbox` or `ng serve --c=sandbox` for a sandbox server
- Navigate to http://localhost:4200/

## Launch application with Local server
- Login to your account on [Local](http://localhost) server
- Make sure that your account has any active Plan Variants ([Products](http://localhost/#/products))
- Make sure that your account has active `CreditCard:Ayden` paument method ([Settings/Payment Settings](http://localhost/#/settings/payment-providers-list))
- Populate your settings in `src\environment\environment.ts`:
    - `publicApiKey` - please visit [Settings/Self-Service](http://localhost/#/settings/self-service) and copy your `Public API Key` on `General` tab
    - `clientId` and `clientSecret` - please visit [Settings/My Apps](http://localhost/#/settings/oauth-clients), create new `Confidential` client and copy `Id` and `Secret`
- Run `npm run sandbox` or `ng serve --c=sandbox` for a sandbox server
- Navigate to http://localhost:4200/

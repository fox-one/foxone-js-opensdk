# Fox.ONE Js-Open-SDK

## 安装
依赖 axios 
```
npm install foxone-js-opensdk
```
## 使用
1、html 引入
```html
// 先引入 axios 
<script src="[your path]/axios.js"></script>
<script src="[node_modules]/foxone-js-opensdk/dist/FoxSDK.js"></script>

<script>
// load assets
FoxSDK.loadAssets.then(assets => {
  // code
}).catch(err => {
  // handle error
})
</script>

```
2、js 引入

```javascript
import FoxSDK from 'foxone-js-opensdk'

// load assets
FoxSDK.loadAssets().then(assets => {
  // code
}).catch(err => {
  // handle error
})
```

## Account
Account module


* [Account](#module_Account)
    * [.modifyPIN(pin, newPin)](#module_Account.modifyPIN) ⇒ <code>Promise</code>
    * [.verifyPIN(pin)](#module_Account.verifyPIN) ⇒ <code>Promise</code>
    * [.getAccountDetail()](#module_Account.getAccountDetail) ⇒ <code>PromiseLike.&lt;({user: \*}\|never)&gt;</code> \| <code>Promise.&lt;({user: \*}\|never)&gt;</code> \| <code>\*</code>

<a name="module_Account.modifyPIN"></a>

### Account.modifyPIN(pin, newPin) ⇒ <code>Promise</code>
setup or modify your pin.

**Kind**: static method of [<code>Account</code>](#module_Account)  
**Fulfil**: <code>Object</code> - result of modify pin.  
**Reject**: <code>Error</code> - request Error.  

| Param | Type | Description |
| --- | --- | --- |
| pin | <code>string</code> | pin for now. '' when setting pin for the first time. |
| newPin | <code>string</code> | pin to set, a string of 6 digits. |

<a name="module_Account.verifyPIN"></a>

### Account.verifyPIN(pin) ⇒ <code>Promise</code>
verify pin.

**Kind**: static method of [<code>Account</code>](#module_Account)  
**Fulfil**: <code>Object</code> - result of verify pin.  
**Reject**: <code>Error</code> - request error.  

| Param | Type | Description |
| --- | --- | --- |
| pin | <code>string</code> | pin for now, a string of 6 digits. |

<a name="module_Account.getAccountDetail"></a>

### Account.getAccountDetail() ⇒ <code>Promise</code>
get login user account detail.

**Kind**: static method of [<code>Account</code>](#module_Account)  
**Fulfil**: <code>User</code> - user account object.  
**Reject**: <code>error</code> - request error.  



* [Wallet](#module_Wallet)
    * [.loadAssets()](#module_Wallet.loadAssets) ⇒ <code>Promise</code>
    * [.loadAsset(id)](#module_Wallet.loadAsset) ⇒ <code>Promise</code>
    * [.loadEnabledCoins()](#module_Wallet.loadEnabledCoins) ⇒ <code>Promise</code>
    * [.withdraw(data, pin)](#module_Wallet.withdraw) ⇒ <code>Promise</code>
    * [.loadSnapshots(id)](#module_Wallet.loadSnapshots) ⇒ <code>Promise</code>
    * [.loadFee(data, pin)](#module_Wallet.loadFee) ⇒ <code>Promise</code>

<a name="module_Wallet.loadAssets"></a>

### Wallet.loadAssets() ⇒ <code>Promise</code>
load all assets in the wallet.

**Kind**: static method of [<code>Wallet</code>](#module_Wallet)  
**Fulfil**: <code>Array</code> - all assets details.  
**Reject**: <code>Error</code> - request error.  
<a name="module_Wallet.loadAsset"></a>

### Wallet.loadAsset(id) ⇒ <code>Promise</code>
load an asset by assetId.

**Kind**: static method of [<code>Wallet</code>](#module_Wallet)  
**Fulfil**: <code>Object</code> - asset detail.  
**Reject**: <code>Error</code> - request error.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | the assetId for the asset to load. |

<a name="module_Wallet.loadEnabledCoins"></a>

### Wallet.loadEnabledCoins() ⇒ <code>Promise</code>
load available coins for deposit.


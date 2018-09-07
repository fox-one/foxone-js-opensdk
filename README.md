<a name="module_Account"></a>

## Account
Account module


* [Account](#module_Account)
    * [.modifyPIN(pin, newPin)](#module_Account.modifyPIN) ⇒ <code>Promise</code>
    * [.verifyPIN(pin)](#module_Account.verifyPIN) ⇒ <code>Promise</code>

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

<a name="module_Wallet"></a>

## Wallet
Wallet module.


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

**Kind**: static method of [<code>Wallet</code>](#module_Wallet)  
**Fulfil**: <code>Array</code> - available coins.  
**Reject**: <code>Error</code> - request error.  
<a name="module_Wallet.withdraw"></a>

### Wallet.withdraw(data, pin) ⇒ <code>Promise</code>
withdraw assets.

**Kind**: static method of [<code>Wallet</code>](#module_Wallet)  
**Fulfil**: <code>Array</code> - transfer recodes after withdraw.  
**Reject**: <code>Error</code> - request error.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | params for withdraw request. for EOS it should include: assetId, publicKey, memo, label, amount;for the others: assetId, publicKey, amount, memo. |
| pin | <code>string</code> | personal identification number. |

<a name="module_Wallet.loadSnapshots"></a>

### Wallet.loadSnapshots(id) ⇒ <code>Promise</code>
transfer snapshot for an asset.

**Kind**: static method of [<code>Wallet</code>](#module_Wallet)  
**Fulfil**: <code>Array</code> - all transfer records.  
**Reject**: <code>Error</code> - request error.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | assetId. |

<a name="module_Wallet.loadFee"></a>

### Wallet.loadFee(data, pin) ⇒ <code>Promise</code>
load transfer fee for an transition or withdraw

**Kind**: static method of [<code>Wallet</code>](#module_Wallet)  
**Fulfil**: <code>Object</code> - fee details.  
**Reject**: <code>Error</code> - request error.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | params for the request. for EOS: it should include: assetId, publicKey, label; for the others: assetId, publicKey |
| pin | <code>string</code> | personal identification number. |



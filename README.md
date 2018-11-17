# Fox.ONE JS-Open-SDK



## 安装

项目依赖 axios，请先安装axios
```shell
npm install axios
npm install foxone-js-opensdk
```


## 使用

```javascript
// 在javascript文件中引入：
import FoxSDK from 'foxone-js-opensdk'
let sdk = new FoxSDK() 

// 默认是生产环境，配置开发环境：
// let sdk = new FoxSDK({env: 'development'}) 

// 配置token
sdk.api.config({
    headers: {
        // token 从后台获取的token
       'Authorization': `Bearer ${token}`
    }
})

// 使用
sdk.getAccountDetail().then(res => {
    // code
}).catch(err => {
    // error
})

```



### API 接口

Fox.ONE Open SDK中的接口返回类型是Promise。下面response中的列出了请求成功时resolve()中的参数的字段，并且删除了一些API中有返回但是用不到的字段。



#### getAccountDetail() ⇒ <code>Promise</code>

获取账户信息

 **response：**

```javascript
{
    "code": 0,
    "data": {
        "user": {
            "avatar": "", // 头像
            "bio": "", // 简介
            "createdAt": 1540198807, // 创建时间
            "email": "", // 电子邮件
            "fullname": "", // fullname
            "isPinSet": true, // 是否设置了pin
            "isPwdSet": true, // 是否设置了密码
            "mixinUserId": "", 
            "tel": "86 18656007000", // 手机号
            "userId": 20518 // id
        }
    }
}
```



#### verifyPIN(pin) ⇒ <code>Promise</code>

验证pin是否正确

**request**

| 字段 | type   | require | 描述 |
| ---- | ------ | ------- | ---- |
| pin  | String | true    |      |

**response**

```javascript
{"code":0,"data":{}}
```



#### **modifyPIN(pin, newPin) ⇒ <code>Promise</code>**

修改或者设置pin，第一次设置pin的时候将旧的pin传空字符串。

**request**

| 字段   | type   | require | 描述      |
| ------ | ------ | ------- | --------- |
| pin    | String | true    | 旧的pin码 |
| newPin | String | true    | 新的pin码 |

**response**

```javascript
{"code":0,"data":{}}
```



#### loadAssets()  ⇒ <code>Promise</code>

获取资产详情。注意eos资产和其他资产的区别： EOS标识使用的是账户名称（accountName）和账户标识（accountTag），其他资产的标识使用的是publicKey。

**response**

```javascript
{
    "code": 0,
    "data": {
        "assets": [
            {
                "name": "EOS",
                "symbol": "EOS", // 简称
                "publicKey": "", // 资产标识
                "accountName": "eoswithmixin", // eos账户名称
                "accountTag": "2f06d6944a63343661b1db4dcb21c129",  // eos账户标识
                "assetId": "6cfe566e-4aad-470b-8c9a-2fd35b49c68d", // mixinAssetId
                "assetKey": "", 
                "balance": 0.005, // 余额
                "chain": { // 主链信息
                    "coinId": 5,
                    "logo": "https://www.fox.one/assets/coins/eos.png",
                    "mixinAssetId": "6cfe566e-4aad-470b-8c9a-2fd35b49c68d",
                    "name": "EOS",
                    "symbol": "EOS"
                },
                "chainId": "6cfe566e-4aad-470b-8c9a-2fd35b49c68d",
                "change": -0.01022158, // 价格变化 
                "changeBtc": -0.01513198, // 价格变化，btc计价
                "changeUsd": 0.007236840585224058, // 价格变化，usd计价
                "confirmations": 64, // 转账需要多少区块确认
                "icon": "https://www.fox.one/assets/coins/eos.png", 
                "price": 32.33471769, // 当前价格
                "priceBtc": 0.00082601, // 当前价格 btc计价
                "priceUsd": 4.64989319 // 当前价格 usd计价
            }
        ]
    }
}
```



#### loadAsset(id) ⇒ <code>Promise</code>

获取单个资产的详情

**request**

| 字段 | type   | require | 描述         |
| ---- | ------ | ------- | ------------ |
| id   | String | true    | mixinAssetId |

**response**

```javascript
{
    "code": 0,
    "data": {
        "asset": {
            "name": "EOS",
            "symbol": "EOS", // 简称
            "publicKey": "", // 资产标识
            "accountName": "eoswithmixin", // eos账户名称
            "accountTag": "2f06d6944a63343661b1db4dcb21c129",  // eos账户标识
            "assetId": "6cfe566e-4aad-470b-8c9a-2fd35b49c68d", // mixinAssetId
            "assetKey": "", 
            "balance": 0.005, // 余额
            "chain": { // 主链信息
                "coinId": 5,
                "logo": "https://www.fox.one/assets/coins/eos.png",
                "mixinAssetId": "6cfe566e-4aad-470b-8c9a-2fd35b49c68d",
                "name": "EOS",
                "symbol": "EOS"
            },
            "chainId": "6cfe566e-4aad-470b-8c9a-2fd35b49c68d",
            "change": -0.01022158, // 价格变化 
            "changeBtc": -0.01513198, // 价格变化，btc计价
            "changeUsd": 0.007236840585224058, // 价格变化，usd计价
            "confirmations": 64, // 转账需要多少区块确认
            "icon": "https://www.fox.one/assets/coins/eos.png", 
            "price": 32.33471769, // 当前价格
            "priceBtc": 0.00082601, // 当前价格 btc计价
            "priceUsd": 4.64989319 // 当前价格 usd计价
        }
    }
}
```



#### loadEnabledCoins() ⇒ <code>Promise</code>

支持提币的资产列表

**response**

```javascript
{
    "code": 0,
    "data": {
        "coins": [
            {
                "coinId": 1,
                "logo": "https://www.fox.one/assets/coins/btc.png",
                "mixinAssetId": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
                "name": "Bitcoin",
                "symbol": "BTC"
            },
        ]
    }
}
```



#### withdraw(data, pin) ⇒ <code>Promise</code>

提币

**request**

| 字段           | type   | require | 描述                                                         |
| -------------- | ------ | ------- | ------------------------------------------------------------ |
| data           | Object | true    | 包含提币所需信息的对象                                       |
| data.assetId   | String | true    | 资产id                                                       |
| data.publicKey | String | true    | 币种是eos时应该传eos的accountTag，其他币种传资产对应的pulicKey |
| data.label     | String | false   | 币种是eos时传eos的accountName，其他币种可以                  |
| data.amount    | String | true    | 提币的数量                                                   |
| pin            | String | true    | pin                                                          |

**response**

```javascript
{
    "code":0,
    "data": {
        "snapshot":{
            "coinId":2437, 
            "snapshotId":"70574d71-0fc7-49ad-a776-d8e0e8a360e1",  
            "assetId":"965e5c6e-434c-3fa9-b780-c50f43cd955c", 
            "traceId":"fd34e783-ef45-4d71-82cb-315b10c5aede",
            "amount":-10, // 数量
            "memo":"sss", // 备注
            "createdAt":1542356956, // 创建时间
            "counterUserId":"1f898df6-06aa-398b-ac8ef448ecfa994c", // 
            "sender":"", // 发送方地址。mixin内部转账为空
            "receiver":"", // 接受方地址。mixin内部转账为空
            "transactionHash":""
        }
    }
}
```



#### loadSnapshots() ⇒ <code>Promise</code>

转账、交易等操作详细信息的列表

**response**

```javascript
{
    "code": 0,
    "data": {
        "pagination": { // 分页
            "nextCursor": "MTU0MTIxNTI0MTgyODk1NzAwMA==",
            "hasNext": true
        },
        "snapshots": [
            { 
                "amount": 1.024, // 数量
                "asset": { // 资产信息
                    "assetId": "965e5c6e-434c-3fa9-b780-c50f43cd955c", 
                    "chainId": "43d61dcd-e413-450d-80b8-101d5e903357", // 主链id
                    "coinId": 2437, 
                    "icon": "https://images.mixin.one/0sQY63dDMkWTURkJVjowWY6Le4ICjAFuu3ANVyZA4uI3UdkbuOT5fjJUT82ArNYmZvVcxDXyNjxoOv0TAYbQTNKS=s128",
                    "name": "Chui Niu Bi",
                    "symbol": "CNB"
                },
                "assetId": "965e5c6e-434c-3fa9-b780-c50f43cd955c",  // mixinAssetId
                "createdAt": 1542351842, // 创建时间
                "extraData": {},  
                "insideMixin": true, // 是否是Mixin网络内
                "memo": "I wish you good luck!", // 备注
                "opponent": { // 对方信息
                    "avatar": "https://images.mixin.one/dhB4QJLEhEFhzc8mH3mSFyL2kdjFVecF-BCdnYJhCA42kjl6txWGdgrbLqEVFM-_Cf6BE3d-seO6RhbSRYGVDmM=s256",
                    "foxId": 0,
                    "fullname": "FoxOne", 
                    "mixinId": "7f361fd2-e649-411f-8774-74fe07376874"
                },  
                "opponentId": "7f361fd2-e649-411f-8774-74fe07376874", // 对方的mixinId
                "receiver": "", // 接受方
                "sender": "", // 发送方
                "snapshotId": "ed8a9aae-514d-4051-a496-d94e93bad883", 
                "source": "TRANSFER_INITIALIZED", // 操作类型
                "traceId": "e039a437-ee24-42f2-a14c-baef70e36044", // 唯一标识，防重放
                "transactionHash": "", 
                "userId": "df7a373b-422a-32e4-b170-8c2e07f7ed0d"
            }
        ]
    }
}
```

```javascript
// source (操作类型) 字段取值范围：
DEPOSIT_CONFIRMED //充值
TRANSFER_INITIALIZED // 转账, 结合数量（amount）可以判断是转入还是转出，amount大于0是转入，小于0是转出
WITHDRAWAL_INITIALIZE // 提现
WITHDRAWAL_FEE_CHARGED // 提现手续费
WITHDRAWAL_FAILED // 提现失败
O1_OPEN_ACCOUNT // OceanOne账户开通
O1_PUT_ORDER // OceanOne下单
O1_CANCEL_ORDER // OceanOne撤单
O1_ORDER_CANCELED // OceanOne订单退回
O1_ORDER_REFUND // OceanOne订单取消
O1_ORDER_MATCHED // OceanOne订单成交
FOX_REDPACKET_REWARD  // 收到红包
FOX_REDPACKET_PAY // 发出红包
FOX_REDPACKET_REFUND  // 红包退款
```



#### loadFee() ⇒ <code>Promise</code>

交易手续费

**response**

```javascript
{
    "code":0,
    "data":{
        "fee":{
            "amount":"0", // 数量
            "assetId":"965e5c6e-434c-3fa9-b780-c50f43cd955c", // mixinAssetId
            "coinId":2437 
        }
    }
}
```



### 错误码

| code | 描述                                        |
| ---- | ------------------------------------------- |
| 1    | invalid operation                           |
| 2    | unknown error                               |
| 3    | server error                                |
| 4    | visit too frequently                        |
| 5    | login too frequently                        |
| 6    | forbidden operation                         |
| 1553 | You have not set PIN yet, please set first. |
| 1554 | PIN is incorrect, please try again.         |
|  1560    | mixin has bind with other user |
| 1561 | mixin has not bind |
| 1586 | item is not exist |
| 1587 | no data changed |
| 1600 | wallet not initialized |
| 1601 | invalid public key |
| 2048 | invalid application |


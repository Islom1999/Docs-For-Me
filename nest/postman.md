# postman set variable
postman set collection variable from response

ushbu kode kelgan responseni json qilib ichidan token da qanday qiymat bo'lsa olib collection ichidagi variablellarga qo'shib beradi

```js
let jsonData = pm.response.json()
let token = jsonData.token

pm.collectionVariables.set("token", token);
```

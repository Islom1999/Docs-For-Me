# 📔 17-dars

## Promise

Biz insonlar bir vaqtning o'zida biron bir faoliyatni amalga oshirishga va'da beramiz yoki olamiz. Agar biz va'daga vafo qilsak, boshqalarni xursand qilamiz, lekin va'daga vafo qilmasak, bu norozilikka olib kelishi mumkin. JavaScript-dagi va'da yuqoridagi misollar bilan umumiy narsaga ega.

Promise - JavaScript-da asinxron operatsiyalarni bajarish usuli. U asinxron harakatning yakuniy muvaffaqiyat qiymati yoki muvaffaqiyatsizlik sababi bilan ishlov beruvchilarga ruxsat beradi. Bu asinxron usullarga sinxron usullar kabi qiymatlarni qaytarish imkonini beradi: yakuniy qiymatni darhol qaytarish o'rniga, asinxron usul kelajakda qaysidir nuqtada qiymat berish va'dasini qaytaradi.

Promise quyidagi holatlardan birida:

- pending: boshlang'ich holati, bajarilmagan yoki rad etilgan.
- fulfilled: operatsiya muvaffaqiyatli yakunlanganligini anglatadi.
- rejected: operatsiya muvaffaqiyatsiz tugadi degan ma'noni anglatadi.

Kutilayotgan va'da qiymat bilan bajarilishi yoki sabab (xato) bilan rad etilishi mumkin. Ushbu variantlardan biri sodir bo'lganda, va'daning keyin usuli bilan navbatga qo'yilgan bog'langan ishlov beruvchilar chaqiriladi. (Agar va'da allaqachon bajarilgan bo'lsa yoki tegishli ishlov beruvchi biriktirilganda rad etilgan bo'lsa, ishlov beruvchi chaqiriladi, shuning uchun asinxron operatsiya tugallanishi va uning ishlov beruvchilari biriktirilishi o'rtasida musobaqa sharti yo'q.)

Promise.prototype.then() va Promise.prototype.catch() usullari va'dalarni qaytargani uchun ularni zanjirlash mumkin.

## Callbacks

Va'dani juda yaxshi tushunish uchun, avvalo, qayta qo'ng'iroq qilishni tushunamiz. Keling, quyidagi qayta qo'ng'iroqlarni ko'rib chiqaylik. Quyidagi kod bloklaridan siz qayta qo'ng'iroq va va'dalar o'rtasidagi farqni ko'rasiz.

- call back
  Keling, ikkita parametrni qabul qila oladigan qayta qo'ng'iroq funksiyasini ko'rib chiqaylik. Birinchi parametr xato, ikkinchisi esa natija. Agar err parametri noto'g'ri bo'lsa, xato bo'lmaydi, aks holda u xatoni qaytaradi.

Bu holda xatoning qiymati bor va u xato blokini qaytaradi.

```js
//Callback
const doSomething = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    callback('It did not go well', skills)
  }, 2000)
}

const callback = (err, result) => {
  if (err) {
    return console.log(err)
  }
  return console.log(result)
}

doSomething(callback)
```

```sh
// after 2 seconds it will print
It did not go well
```

Bunday holda xato noto'g'ri bo'lib, natija bo'lgan else blokini qaytaradi.

```js
const doSomething = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    callback(false, skills)
  }, 2000)
}

doSomething((err, result) => {
  if (err) {
    return console.log(err)
  }
  return console.log(result)
})
```

```sh
// after 2 seconds it will print the skills
["HTML", "CSS", "JS"]
```

### Promise constructor

Biz Promise konstruktoridan foydalanib va'da yaratishimiz mumkin. Biz yangi kalit so'zdan keyin va'da so'zidan va keyin qavsdan foydalanib yangi va'da yaratishimiz mumkin. Qavs ichida u qayta qo'ng'iroq qilish funktsiyasini oladi. Va'da qilingan qayta qo'ng'iroq funktsiyasi ikkita parametrga ega, ular hal qilish va rad etish funktsiyalari.

```js
// sintaksis 
const promise = new Promise((resolve, reject) => {
  resolve('success')
  reject('failure')
})
```

```js
// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.length > 0) {
      resolve(skills)
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.log(error))
```

```sh
["HTML", "CSS", "JS"]
```

Yuqoridagi va'da qat'iyat bilan bajarildi. Va'da rad qilish bilan hal qilinganda yana bir misol keltiraylik.


```js
// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.icludes('Node')) {
      resolve('fullstack developer')
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.error(error))
```

```sh
Something wrong has happened
```

## Fetch API

Fetch API resurslarni (jumladan, tarmoq bo'ylab) olish uchun interfeysni taqdim etadi. XMLHttpRequest-dan foydalangan har bir kishi uchun bu tanish bo'lib tuyuladi, ammo yangi API yanada kuchli va moslashuvchan xususiyatlar to'plamini taqdim etadi. Ushbu tanlovda biz url va APIS so'rovini olish uchun fetch-dan foydalanamiz. Bunga qo'shimcha ravishda, keling, Fetch API yordamida tarmoq resurslariga kirishda va'dalardan foydalanishni ko'rsatamiz.

```js
const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // API ma'lumotlariga JSON sifatida kirish
  .then(data => {
    //  ma'lumotlarni olish
    console.log(data)
  })
  .catch(error => console.error(error)) // biror narsa noto'g'ri bo'lsa, ishlov berish
```

## Async va Await

Async va wait - bu va'dalarni bajarishning ajoyib usuli. Tushunish oson va yozish uchun toza.

```js
const square = async function (n) {
  return n * n
}

square(2)
```

```sh
Promise {<resolved>: 4}
```

Funktsiya oldidagi async so'zi funktsiya va'dani qaytarishini anglatadi. Yuqoridagi kvadrat funktsiyasi qiymat o'rniga va'da berdi.

Va'dadagi qiymatga qanday erishamiz? Va'dadagi qiymatga kirish uchun biz kutish kalit so'zidan foydalanamiz .

```js
const square = async function (n) {
  return n * n
}
const value = await square(2)
```

```sh
4
```

Endi, yuqoridagi misoldan ko'rinib turibdiki, funktsiya oldida async yozish va'da yarating va biz foydalanadigan va'dadan qiymat olish uchun biz kutamiz. Async va wait birgalikda harakat qiladi, biri ikkinchisiz mavjud bo'lmaydi.

Keling, API ma'lumotlarini va'da qilish usuli va sinxronlash va kutish usullaridan foydalanib keltiraylik.

- promise

```js
const url = 'https://restcountries.com/v2/all'
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error))
```

- async va await

```js
const fetchData = async () => {
  try {
    const response = await fetch(url)
    const countries = await response.json()
    console.log(countries)
  } catch (err) {
    console.error(err)
  }
}
console.log('===== async va await')
fetchData()
```

🌕 Siz haqiqiy odamsiz va va'dangizni bajardingiz va 18-kunga yetib keldingiz. Va'dangizni bajaring va muammoni qat'iyat bilan hal qiling. Siz buyuklik sari 18 qadam oldindasiz. Endi miyangiz va mushaklaringiz uchun bir nechta mashqlarni bajaring.



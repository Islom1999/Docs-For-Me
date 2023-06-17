
# 📔 14-dars

## JSON

JSON JavaScript Object Notation degan ma'noni anglatadi. JSON sintaksisi JavaScript ob'ekt belgilari sintaksisidan olingan, ammo JSON formati faqat matn yoki satrdir. JSON saqlash va tashish uchun engil vaznli ma'lumotlar formatidir. JSON asosan serverdan mijozga maʼlumotlar yuborilganda ishlatiladi. JSON - bu XML ga ishlatish uchun qulay muqobil.

**Misol:**

```js
{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}
```

Yuqoridagi JSON misoli oddiy ob'ekt uchun unchalik farq qilmaydi. Xo'sh, qanday farq bor? Farqi shundaki, JSON ob'ektining kaliti qo'sh tirnoqli bo'lishi kerak yoki u satr bo'lishi kerak. JavaScript Ob'ekti va JSON juda o'xshash, biz JSONni Ob'ektga va Ob'ektni JSONga o'zgartirishimiz mumkin.

Keling, yuqoridagi misolni batafsil ko'rib chiqaylik, u jingalak qavs bilan boshlanadi. Jingalak qavs ichida qiymatlar qatoriga ega bo'lgan "foydalanuvchilar" tugmasi mavjud. Massiv ichida bizda turli xil ob'ektlar bor va har bir ob'ektda kalitlar mavjud, har bir kalitda qo'sh tirnoq bo'lishi kerak. Misol uchun, biz faqat firstName o'rniga "firstNaMe" dan foydalanamiz, lekin ob'ektda biz qo'sh tirnoqsiz kalitlardan foydalanamiz. Bu ob'ekt va JSON o'rtasidagi asosiy farq. 
Keling, JSON haqida ko'proq misollarni ko'rib chiqaylik.

**Misol:**

```js
{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
```

### JSON-ni JavaScript obyektiga aylantirish

Ko'pincha biz JSON ma'lumotlarini HTTP javobidan yoki fayldan olamiz, lekin biz JSONni satr sifatida saqlashimiz va namoyish qilish uchun Ob'ektga o'zgartirishimiz mumkin. JavaScript-da JSON kalit so'zida parse () va stringify() usullari mavjud. JSONni ob'ektga o'zgartirmoqchi bo'lganimizda, biz JSONni JSON.parse() yordamida tahlil qilamiz . Ob'ektni JSONga o'zgartirmoqchi bo'lganimizda biz JSON.stringify() dan foydalanamiz .

#### JSON.parse()

```js
JSON.parse(json[, reviver])
// json or text , the data
// reviver is an optional callback function
```

```js
const usersText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`

const usersObj = JSON.parse(usersText, undefined, 4)
console.log(usersObj)
```

### JSON.parse() bilan reviver funksiyasidan foydalanish

Reviver funktsiyasidan formatlovchi sifatida foydalanish uchun biz ism va familiya qiymatini formatlashni xohlagan kalitlarni qo'yamiz. Aytaylik, biz JSON ma'lumotlarining ismi va familiyasini formatlashdan manfaatdormiz.

```js
const usersText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`

const usersObj = JSON.parse(usersText, (key, value) => {
  let newValue =
    typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
  return newValue
})
console.log(usersObj)
```

_JSON.parse ()_ dan foydalanish juda qulay. Siz ixtiyoriy parametrdan o'tishingiz shart emas, uni faqat kerakli parametr bilan ishlatishingiz mumkin va siz juda ko'p narsaga erishasiz.

### Ob'ektni JSONga aylantirish

Ob'ektni JSONga o'zgartirmoqchi bo'lganimizda biz _JSON.stringify()_ dan foydalanamiz . Stringify usuli bitta talab qilinadigan parametr va ikkita ixtiyoriy parametrni oladi. O'zgartirish moslamasi filtr sifatida ishlatiladi va bo'sh joy - chuqurchalar. Agar biz ob'ektdan biron bir kalitni filtrlashni istamasak, biz aniqlanmagan holda o'tishimiz mumkin.

```js
JSON.stringify(obj, replacer, space)
// json or text , the data
// reviver is an optional callback function
```

Keling, quyidagi ob'ektni satrga aylantiramiz. Avval foydalanishga ruxsat bering, barcha kalitlarni saqlab qo'ying va bizda 4 ta bo'sh joy bo'lsin.

```js
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

const txt = JSON.stringify(users, undefined, 4)
console.log(txt) // matn JSON- degan ma'noni anglatadi, chunki json ob'ektning satr shaklidir.
```

```sh
{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
```

### JSON.stringify bilan filtr massividan foydalanish

Keling, almashtirgichni filtr sifatida ishlatamiz. Foydalanuvchi ob'ektida kalitlarning uzoq ro'yxati mavjud, ammo biz ulardan faqat bir nechtasi bilan qiziqamiz. Biz saqlamoqchi bo'lgan kalitlarni misolda ko'rsatilganidek, massivga joylashtiramiz va uni almashtiruvchi o'rniga ishlatamiz.

```js
const user = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  country: 'Finland',
  city: 'Helsinki',
  email: 'alex@alex.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Pyhton'],
  age: 250,
  isLoggedIn: false,
  points: 30
}

const txt = JSON.stringify(user,['firstName', 'lastName', 'country', 'city', 'age'],4)
console.log(txt)
```

```sh
{
    "firstName": "Asabeneh",
    "lastName": "Yetayeh",
    "country": "Finland",
    "city": "Helsinki",
    "age": 250
}
```

🌕 Siz g'ayrioddiysiz. Endi siz ma'lumotlarni saqlash yoki HTTP serverini yuborish uchun foydalanishingiz mumkin bo'lgan engil ma'lumotlar formatini bildingiz. Siz buyuklik sari 16 qadam oldindasiz. Endi miyangiz va mushaklaringiz uchun bir nechta mashqlarni bajaring.

## HTML5 Web Storage

Web Storage (sessionStorage va localStorage) yangi HTML5 API boʻlib, anʼanaviy cookie-fayllarga nisbatan muhim afzalliklarni taqdim etadi. HTML5 dan oldin dastur ma'lumotlari har bir server so'roviga kiritilgan cookie fayllarida saqlanishi kerak edi. Veb-saqlash yanada xavfsizroq va katta hajmdagi ma'lumotlar veb-sayt ishlashiga ta'sir qilmasdan mahalliy sifatida saqlanishi mumkin. Ko'pgina veb-brauzerlarda cookie-fayllarni saqlash chegarasi har bir cookie fayli uchun taxminan 4 KB ni tashkil qiladi. Biz saqlash joylari ancha kattaroq ma'lumotlarni (kamida 5 MB) saqlashi mumkin va hech qachon serverga o'tkazilmaydi. Bitta yoki bir kelib chiqishi barcha saytlar bir xil ma'lumotlarni saqlashi va ularga kirishi mumkin.

Saqlanayotgan ma'lumotlarga JavaScript yordamida kirish mumkin, bu sizga an'anaviy ravishda server tomonida dasturlash va relyatsion ma'lumotlar bazalarini o'z ichiga olgan ko'p narsalarni qilish uchun mijoz tomoni skriptlaridan foydalanish imkoniyatini beradi. Ikkita Web Storage obyekti mavjud:

- sessionStorage
- localStorage

localStorage sessionStorage-ga o'xshaydi, bundan tashqari localStorage-da saqlangan ma'lumotlarning amal qilish muddati bo'lmasa-da, sessionStorage-da saqlangan ma'lumotlar sahifa sessiyasi tugaganda, ya'ni sahifa yopilganda tozalanadi.

Shuni ta'kidlash kerakki, localStorage yoki sessionStorage-da saqlangan ma'lumotlar sahifaning protokoliga xosdir.

Kalitlar va qiymatlar har doim satrlardir (esda tutingki, ob'ektlarda bo'lgani kabi, butun sonli kalitlar avtomatik ravishda satrlarga aylantiriladi).

<!-- ![web_storage](../images/web_storage.png) -->

### sessionStorage

sessionStorage faqat brauzer yorlig'i yoki oyna sessiyasida mavjud. U bitta veb-sahifa seansida ma'lumotlarni saqlash uchun mo'ljallangan. Ya'ni, agar oyna yopilsa, sessiya ma'lumotlari o'chiriladi. SessionStorage va localStorage shunga o'xshash usullarga ega bo'lgani uchun biz faqat localStorage-ga e'tibor qaratamiz.

### localStorage

HTML5 localStorage - bu veb-xotira API-ning paragrafi bo'lib, u brauzerda amal qilish muddati tugamaydigan ma'lumotlarni saqlash uchun ishlatiladi. Ma'lumotlar brauzer yopilgandan keyin ham brauzerda mavjud bo'ladi. localStorage brauzer seanslari orasida ham saqlanadi. Bu shuni anglatadiki, ma'lumotlar brauzer yopilganda va qayta ochilganda, shuningdek, yorliqlar va oynalar o'rtasida darhol mavjud bo'ladi.

Veb saqlash ma'lumotlari, har ikkala holatda ham, turli brauzerlar o'rtasida mavjud emas. Masalan, Firefox-da yaratilgan saqlash ob'ektlariga xuddi cookie fayllari kabi Internet Explorer-da kirish mumkin emas. Mahalliy xotirada ishlashning beshta usuli mavjud:
_setItem(), getItem(), removeItem(), clear(), key()_

### Veb-xotiralardan foydalanish holati

Veb-xotiralardan foydalanishning ba'zi holatlari

- ma'lumotlarni vaqtincha saqlash
- foydalanuvchi xarid qilish savatiga joylashtirgan mahsulotlarni saqlash
- ma'lumotlar sahifa so'rovlari, bir nechta brauzer yorliqlari, shuningdek, localStorage yordamida brauzer seanslari o'rtasida mavjud bo'lishi mumkin
- localStorage yordamida butunlay oflayn rejimda foydalanish mumkin
- Keyinchalik so'rovlar sonini kamaytirish uchun mijozda ba'zi statik ma'lumotlar saqlanganida veb-xotira ajoyib ishlash yutug'i bo'lishi mumkin. Base64 kodlash yordamida hatto tasvirlar ham satrlarda saqlanishi mumkin.
- foydalanuvchi autentifikatsiya usuli uchun foydalanish mumkin

Yuqorida keltirilgan misollar uchun localStorage-dan foydalanish mantiqan to'g'ri keladi. O'shanda biz sessionStorage-dan qachon foydalanishimiz kerak, deb hayron bo'lishingiz mumkin.

Bunday hollarda, oyna yopilishi bilanoq biz ma'lumotlardan xalos bo'lishni xohlaymiz. Yoki, ehtimol, agar dastur boshqa oynada ochilgan bir xil dasturga xalaqit berishini xohlamasak. Ushbu stsenariylar eng yaxshi sessionStorage bilan xizmat qiladi.

Keling, ushbu Web Storage API-laridan qanday foydalanishni ko'rib chiqaylik.

## HTML5 veb-xotira ob'ektlari

HTML veb-xotirasi mijozda ma'lumotlarni saqlash uchun ikkita ob'ektni taqdim etadi:

- window.localStorage -  amal qilish muddati tugamaydigan ma'lumotlarni saqlaydi
- window.sessionStorage - bir seans uchun ma'lumotlarni saqlaydi (brauzer yorlig'i yopilganda ma'lumotlar yo'qoladi) Ko'pgina zamonaviy brauzerlar veb-xotirani qo'llab-quvvatlaydi, ammo localStorage va sessionStorage uchun brauzer yordamini tekshirish yaxshidir. Keling, Web Storage ob'ektlari uchun mavjud usullarni ko'rib chiqaylik.

Web Storage objects:

- _localStorage_ - localStorage ob'ektini ko'rsatish uchun
- _localStorage.clear()_ - lokal xotiradagi hamma narsani o'chirish uchun
- _localStorage.setItem()_ - localStorage-da ma'lumotlarni saqlash uchun. U kalit va qiymat parametrlarini oladi.
- _localStorage.getItem()_ - localStorage-da saqlangan ma'lumotlarni ko'rsatish uchun. Parametr sifatida kalitni oladi.
- _localStorage.removeItem()_ - localStorage-dan saqlangan elementni olib tashlash uchun. U kalitni parametr sifatida oladi.
- _localStorage.key()_ - localStorage-da saqlangan ma'lumotlarni ko'rsatish uchun. Parametr sifatida indeksni oladi.

<!-- ![local_storage](../images/local_storage.png) -->

### Elementni localStorage-ga sozlash

Biz ma'lumotlarni localStorage-da saqlashni o'rnatganimizda, u satr sifatida saqlanadi. Agar biz massiv yoki ob'ektni saqlayotgan bo'lsak, aks holda biz massiv tuzilishini yoki asl ma'lumotlarning ob'ekt tuzilishini yo'qotmasak, formatni saqlab qolish uchun avval uni qatorlashtiramiz.

Biz ma'lumotlarni localStorage-da _localStorage.setItem_ usuli yordamida saqlaymiz.

```js
//syntax
localStorage.setItem('key', 'value')
```

- Satrni localStorageda saqlash

```js
localStorage.setItem('firstName', 'Asabeneh') // since the value is string we do not stringify it
console.log(localStorage)
```

```sh
Storage {firstName: 'Asabeneh', length: 1}
```

- Raqamni localStorageda saqlash

```js
localStorage.setItem('age', 200)
console.log(localStorage)
```

```sh
 Storage {age: '200', firstName: 'Asabeneh', length: 2}
```

- Massivni localStorageda saqlash. Agar biz massiv, ob'ekt yoki ob'ekt massivini saqlayotgan bo'lsak, avval ob'ektni stringifikatsiya qilishimiz kerak. Quyidagi misolga qarang.

```js
const skills = ['HTML', 'CSS', 'JS', 'React']
//Formatni saqlab qolish uchun avvalo malakalar massivini stringizatsiya qilish kerak. 
const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage)
```

```sh
Storage {age: '200', firstName: 'Asabeneh', skills: 'HTML,CSS,JS,React', length: 3}
```

```js
let skills = [
  { tech: 'HTML', level: 10 },
  { tech: 'CSS', level: 9 },
  { tech: 'JS', level: 8 },
  { tech: 'React', level: 9 },
  { tech: 'Redux', level: 10 },
  { tech: 'Node', level: 8 },
  { tech: 'MongoDB', level: 8 }
]

let skillJSON = JSON.stringify(skills)
localStorage.setItem('skills', skillJSON)
```

- Ob'ektni localStorageda saqlash. Ob'ektlarni localStorage-ga saqlashdan oldin, ob'ektni stringizatsiya qilish kerak.

```js
const user = {
  firstName: 'Asabeneh',
  age: 250,
  skills: ['HTML', 'CSS', 'JS', 'React']
}

const userText = JSON.stringify(user, undefined, 4)
localStorage.setItem('user', userText)
```

### LocalStorage dan element olish

Mahalliy xotiradan ma'lumotlarni _localStorage.getItem()_ usuli yordamida olamiz.

```js
//syntax
localStorage.getItem('key')
```

```js
let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
let skills = localStorage.getItem('skills')
console.log(firstName, age, skills)
```

```sh
 'Asabeneh', '200', '['HTML','CSS','JS','React']'
```

Ko'rib turganingizdek, mahorat string formatida. Uni oddiy massivga ajratish uchun JSON.parse() dan foydalanamiz.

```js
let skills = localStorage.getItem('skills')
let skillsObj = JSON.parse(skills, undefined, 4)
console.log(skillsObj)
```

```sh
['HTML','CSS','JS','React']
```

### LokalStorage ni tozalash

Aniq usul mahalliy xotirada saqlangan hamma narsani tozalaydi

```js
localStorage.clear()
```

🌕 Siz qaror qildingiz. Endi siz veb-xotiralarni bilardingiz va kichik ma'lumotlarni mijoz brauzerlarida qanday saqlashni bildingiz. Siz buyuklik sari 17 qadam oldindasiz. Endi miyangiz va mushaklaringiz uchun bir nechta mashqlarni bajaring.



## Toza kod yozish

### JavaScript Style Guide(Uslublar bo'yicha qo'llanma)

JavaScript uslubi uchun qo'llanma - bu JavaScript kodini qanday yozish va tartibga solish kerakligini ko'rsatadigan standartlar to'plami. Ushbu bo'limda biz JavaScript qo'llanmalari va toza kodni qanday yozish haqida gaplashamiz.

JavaScript - bu dasturlash tili va inson tili kabi sintaksisga ega. JavaScript sintaksisi ishonchli va sodda bo'lishi uchun ma'lum bir uslub ko'rsatmalariga muvofiq yozilishi kerak.

### Nima uchun bizga uslublar bo'yicha qo'llanma kerak

Siz uzoq vaqtdan beri yolg'iz kodlashdingiz, lekin hozir u jamoada ishlayotganga o'xshaydi. Baribir, u ishlayotgan ekan, kod yozishingiz muhim emas, lekin bitta loyihada va bir xil kod bazasida 10 yoki 20 yoki undan ortiq dasturchidan iborat jamoada ishlaganingizda, kod tartibsiz va agar mavjud bo'lsa, uni boshqarish qiyin bo'ladi. amal qilish uchun hech qanday ko'rsatmalar yo'q.

Siz o'zingizning ko'rsatmalaringiz va konventsiyalaringizni ishlab chiqishingiz yoki yaxshi ishlab chiqilgan ko'rsatmalarni moslashingiz mumkin. Keling, eng keng tarqalgan ko'rsatmalarni bilib olaylik. 
Eng keng tarqalgan JavaScript uslubiy qo'llanmalar:

- Airbnb JavaScript Style Guide
- JavaScript Standard Style Guide
- Google JavaScript Style Guide

#### Airbnb JavaScript Style Guide

[Airbnb style guide](https://github.com/airbnb/javascript) internetdagi eng mashhur JavaScript uslubiy qo'llanmalaridan biriga ega. U JavaScript-ning deyarli barcha jihatlarini qamrab oladi va u ko'plab ishlab chiquvchilar va kompaniyalar tomonidan qabul qilinadi. Airbnb uslubi bo'yicha qo'llanmani tekshirishingiz mumkin . Men ham sinab ko'rishni tavsiya qilaman. Ularning uslubini ishlatish juda oson va tushunish oson.

#### Standard JavaScript Style Guide

Bu [style guide](https://standardjs.com/) Airbnb kabi mashhur emas, lekin uni ko'rib chiqishga arziydi. Ular uslubiy qo'llanmada nuqta-vergulni olib tashladilar.

#### Google JavaScript Style Guide

Men Google yo'riqnomasi haqida ko'p gapirmayman va men foydalanmadim, aksincha, ushbu [havolani](https://google.github.io/styleguide/jsguide.html) ko'rib chiqishingizni tavsiya qilaman.

### JavaScript kodlash konventsiyalari

Ushbu muammoni hal qilishda biz umumiy JavaScript kodlash yozish qoidalari va qo'llanmalaridan ham foydalandik. Kodlash konventsiyalari - bu shaxs, jamoa yoki kompaniya tomonidan ishlab chiqilgan dasturlash uslubi bo'yicha ko'rsatmalar.

Kodlash konventsiyalari yordam beradi:

- toza kod yozish uchun
- kodni o'qishni yaxshilash uchun
- kodni qayta ishlatish va texnik xizmat ko'rsatishni yaxshilash

Kodlash konventsiyalari o'z ichiga oladi

- O'zgaruvchilar uchun nom berish va e'lon qilish qoidalari
- Funktsiyalarni nomlash va e'lon qilish qoidalari
- Oq bo'shliq, chekinish va sharhlardan foydalanish qoidalari
- Dasturlash amaliyoti va tamoyillari

#### Konventsiyalar 30DaysOfJavaScript-da qo'llaniladi

Ushbu tanlovda biz odatiy JavaScript konventsiyasiga amal qilamiz, lekin men yozishni afzal ko'rganimni ham qo'shdim.

- Biz o'zgaruvchilar va funktsiyalar uchun camelCase-dan foydalandik.
- Barcha o'zgaruvchilar nomlari harf bilan boshlanadi.
- Biz konstantalar, massivlar, obyektlar va funksiyalar uchun const dan foydalanishni tanladik . Ikki tirnoq o'rniga biz bitta qo'shtirnoq yoki teskari belgidan foydalanishni tanladik. Yagona tirnoq modaga aylanib bormoqda.
- Kodimizdan nuqtali vergulni ham olib tashladik, ammo bu shaxsiy imtiyozlar masalasidir.
- Arifmetik operatorlar, belgilash operatorlari atrofida va verguldan keyin bo'sh joy
- Funktsiya deklaratsiyasi o'rniga o'q funktsiyasi
- Agar funktsiya bitta chiziq bo'lsa, yashirin qaytish o'rniga aniq qaytish
- Ob'ektning oxirgi qiymatida oxirgi vergul yo'q
- Biz uzunroq versiya o'rniga +=, -=, *= /=, **= ma'qullaymiz
- Biz console.log() dan foydalanganda, konsol qayerdan kelayotganini aniqlash uchun teglar qatori bilan chop etish yaxshidir.

#### O'zgaruvchilar

```js

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'

const PI = Math.PI
const gravity = 9.81
```

#### Massivlar

Biz massiv nomlarini ko‘plik qilishni tanladik

- names
- numbers
- countries
- languages
- skills
- fruits
- vegetables

```js
// arrays
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const languages = ['Amharic', 'Arabic', 'English', 'French', 'Spanish']
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Python']
const fruits = ['banana', 'orange', 'mango', 'lemon']
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
```

#### Funksiyalar

Hozircha siz funksiya deklaratsiyasi, ifoda funksiyasi, strelka funksiyasi va anonim funksiyani juda yaxshi bilasiz. Ushbu muammoni hal qilishda biz boshqa funktsiyalar o'rniga o'q funktsiyasidan foydalanamiz. Ok funksiyasi boshqa funksiyalarni almashtirmaydi. Bundan tashqari, o'q funktsiyalari va funksiya deklaratsiyasi mutlaqo bir xil emas. Shuning uchun siz qachon va qachon foydalanmasligingizni bilishingiz kerak. Farqni boshqa bo'limlarda batafsil yoritib beraman. Agar funktsiya bitta chiziq bo'lsa, biz yashirin qaytarish o'rniga aniq qaytarishdan foydalanamiz

```js
// shaxsning toʻliq ismini chop etadigan funksiya 
const printFullName = (firstName, lastName) => firstName + ' ' + lastName

// sonning kvadratini hisoblaydigan funksiya 
const square = (n) => n * n

// tasodifiy hexa ranglarini yaratuvchi funktsiya 
const hexaColor = () => {
  const str = '0123456789abcdef'
  let hexa = '#'
  let index
  for (let i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * str.length)
    hexa += str[index]
  }
  return hexa
}

// sana va vaqtni ko'rsatadigan funktsiya
const showDateTime = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const date = now.getDate()
  let hours = now.getHours()
  let minutes = now.getMinutes()
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }

  const dateMonthYear = date + '.' + month + '.' + year
  const time = hours + ':' + minutes
  const fullTime = dateMonthYear + ' ' + time
  return fullTime
}
```

#### Tsikllar

Ushbu qiyinchiliklarda biz ko'p turdagi halqalarni ko'rib chiqamiz. Muntazam for sikli, while sikli, do while sikli, for of loop, forEach tsikli va for in tsikli. 
Keling, ulardan qanday foydalanishimizni ko'rib chiqaylik:

```js
for (let i = 0; i < n; i++){
    console.log()
}

// massiv oʻzgaruvchisini eʼlon qilish
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

//  massivni muntazam for siklidan foydalanib iteratsiya qilish
let len = names.length;
for(let i = 0; i < len; i++){
    console.log(names[i].toUpperCase())
}


// for of yordamida massivni takrorlash
for( const name of names) {
    console.log(name.toUpperCasee())
}

//  forEach yordamida massivni takrorlash
names.forEach((name) => name.toUpperCase())


const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: ['HTML','CSS','JavaScript','React','Node','MongoDB','Python','D3.js'],
  isMarried: true
}
for(const key in user) {
    console.log(key)
}

```

#### Ob'ektlar

Biz ob'ektni **const** bilan literal deb e'lon qilamiz .


```js
// declaring object literal
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: ['HTML','CSS','JavaScript','React','Node','MongoDB','Python','D3.js'],
  isMarried: true
}
// ob'ekt kalitlari orqali iteratsiya
for(const key in person) {
    console.log(key, person[key])
}


```

#### Shartlar

Oldingi qiyinchiliklarda if, if other, if another if, switch va uchlik operatorlarni aytamiz.

 ```js
 // sintaksis
if (condition) {
  // kodning bu qismi to'g'ri shart uchun ishlaydi 
} else {
  // kodning bu qismi noto'g'ri holat uchun ishlaydi 
}
 ```

 ```js
 // if else
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  3 is a positive number
 ```

 ```js
 // if else if else if else

let a = 0
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}
 ```

 ```js
 // Switch More Examples
let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}
 ```

 ```js
 // ternary

 let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
 ```

#### Klasslar

Biz katta harf bilan boshlanadigan CamelCase bilan sinfni e'lon qilamiz.

```js
// sintaksis 
class ClassName {
    // code goes here
}
```

```js
// defining class
class Person {
  constructor(firstName, lastName) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
  }
}

```

Qaysi uslub qo'llanmasiga amal qilsangiz, izchil bo'ling. Ba'zi dasturlash paradigmalari va dizayn naqshlariga amal qiling. Esingizda bo'lsin, agar siz kodingizni ma'lum tartibda yoki uslubda yozmasangiz, kodingizni o'qish qiyin bo'ladi. Shunday qilib, o'zingiz uchun yoki o'qilishi mumkin bo'lgan kod yozish orqali kodingizni o'qimoqchi bo'lgan kishi uchun yaxshilik qiling.

🌕 Siz tartiblisiz. Endi siz toza kod yozishni bilasiz, shuning uchun ingliz tilini biladigan har bir kishi sizning kodingizni tushunishi mumkin. Siz doimo rivojlanib borasiz va siz buyuklik sari 20 qadam oldindasiz.





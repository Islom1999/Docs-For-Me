# 📔 10-dars


## Destructuring (Tarqatish) va Spread (Yig'ish)

Destrukturizatsiya - massivlar va ob'ektlarni ochish va alohida o'zgaruvchiga belgilash usuli.

### Massivlarni destruktizatsiyalash

```js
  const numbers = [1, 2, 3]
  let [numOne, numTwo, numThree] = numbers

  console.log(numOne, numTwo, numThree)
```

```sh
  1 2 3
```

```js
  const names = ['Asabeneh', 'Brook', 'David', 'John']
  let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

  console.log(firstPerson, secondPerson,thirdPerson, fourthPerson)
```

```sh
Asabeneh Brook David John
```

```js
  const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
  let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

  console.log(e,pi,gravity, bodyTemp, boilingTemp)
```

```sh
2.72 3.14 9.81 37 100
```

```js
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack

console.log(frontEnd)
console.log(backEnd)
```

```sh
["HTML", "CSS", "JS", "React"]
["Node", "Express", "MongoDB"]
```

Agar biz massivdagi qiymatlarni o'tkazib yubormoqchi bo'lsak, biz qo'shimcha verguldan foydalanamiz. Vergul o'sha maxsus indeksdagi qiymatni olib tashlashga yordam beradi

```js
  const numbers = [1, 2, 3]
  let [numOne, , numThree] = numbers // 2 o'tkazib yuborilgan 

  console.log(numOne, numThree)
```

```sh
1 3
```

```js
  const names = ['Asabeneh', 'Brook', 'David', 'John']
  let [, secondPerson, , fourthPerson] = name // birinchi va uchinchi shaxslar o'tkazib yuborilgan 

  console.log(secondPerson, fourthPerson)
```

```sh
Brook John
```

Agar ushbu indeks uchun massiv qiymati aniqlanmagan bo'lsa, biz standart qiymatdan foydalanishimiz mumkin:

```js
const names = [undefined, 'Brook', 'David']
let [
  firstPerson = 'Asabeneh',
  secondPerson,
  thirdPerson,
  fourthPerson = 'John'
] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)  
```

```sh
Asabeneh Brook David John
```

Biz massivdagi barcha elementlarga o‘zgaruvchini tayinlay olmaymiz. Biz birinchisidan bir nechtasini yo'q qilishimiz mumkin, qolganini esa spread operatori (...) yordamida massiv sifatida olishimiz mumkin.

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)
```

```sh
1 2 3
[4, 5, 6, 7, 8, 9, 10]
```

### Iteratsiya paytida massivni tarqatish

```js
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
console.log(country, city)
}
```

```sh
Finland Helsinki
Sweden Stockholm
Norway Oslo
```

```js
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

for(const [first, second, third] of fullStack) {
console.log(first, second, third)
}
```

```sh
HTML CSS JS
Node Express MongoDB
```

### Ob'ektni destruktizatsiyalash

Biz tuzilmani buzganimizda, biz yo'q qilish uchun foydalanadigan o'zgaruvchining nomi ob'ektning kaliti yoki xususiyati bilan aynan bir xil bo'lishi kerak. Quyidagi misolga qarang.

```js
const rectangle = {
  width: 20,
  height: 10,
  area: 200
}
let { width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter)
```

```sh
20 10 200 undefined
```

### Strukturalash mobaynida qayta nomlash

```js
const rectangle = {
  width: 20,
  height: 10,
  area: 200
}
let { width: w, height: h, area: a, perimeter: p } = rectangle

console.log(w, h, a, p)
```

```sh
20 10 200 undefined
```

Agar kalit ob'ektda topilmasa, o'zgaruvchi undefined ga tayinlanadi. Agar kalit ob'ektda bo'lmasa, biz deklaratsiya paytida standart qiymatni berishimiz mumkin. Misolga qarang.

```js
const rectangle = {
  width: 20,
  height: 10,
  area: 200
}
let { width, height, area, perimeter = 60 } = rectangle

console.log(width, height, area, perimeter) //20 10 200 60
//Ob'ektni o'zgartirishga ruxsat bering: eni 30 ga va perimetri 80 ga
```

```js
const rectangle = {
  width: 30,
  height: 10,
  area: 200,
  perimeter: 80
}
let { width, height, area, perimeter = 60 } = rectangle
console.log(width, height, area, perimeter) //30 10 200 80
```

Funktsiya parametrlari sifatida kalitlarni destruksiya qilish. To'rtburchak ob'ektni oladigan va to'rtburchak perimetrini qaytaradigan funksiya yarataylik.

### Ob'ekt parametri destrukturalashsiz

```js
// destrukturalashsiz
const rect = {
  width: 20,
  height: 10
}
const calculatePerimeter = rectangle => {
  return 2 * (rectangle.width + rectangle.height)
}

console.log(calculatePerimeter(rect)) // 60
//destrukturizatsiya bilan
```

```js
//Boshqa bir misol 
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)']
}
// Keling destrukturalashsiz shaxs ob'ekti haqida ma'lumot beradigan funksiya yaratamiz

const getPersonInfo = obj => {
  const skills = obj.skills
  const formattedSkills = skills.slice(0, -1).join(', ')
  const languages = obj.languages
  const formattedLanguages = languages.slice(0, -1).join(', ')

  personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
    obj.age
  } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

  return personInfo
}

console.log(getPersonInfo(person))
```

### Ob'ekt parametri destrukturalash bilan

```js

const calculatePerimeter = ({ width, height }) => {
  return 2 * (width + height)
}

console.log(calculatePerimeter(rect)) // 60
```

```js
// Keling destrukturalash bilan shaxs ob'ekti haqida ma'lumot beradigan funksiya yaratamiz
const getPersonInfo = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages
}) => {
  const formattedSkills = skills.slice(0, -1).join(', ')
  const formattedLanguages = languages.slice(0, -1).join(', ')

  personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

  return personInfo
}
console.log(getPersonInfo(person))
/*
Asabeneh Yetayeh lives in Finland. He is  200 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
*/
```

### Iteratsiya paytida ob'ektni tarqatish

```js
const todoList = [
{
  task:'Prepare JS Test',
  time:'4/1/2022 8:30',
  completed:true
},
{
  task:'Give JS Test',
  time:'4/1/2022 10:00',
  completed:false
},
{
  task:'Assess Test Result',
  time:'4/1/2022 1:00',
  completed:false
}
]

for (const {task, time, completed} of todoList){
  console.log(task, time, completed)
}
```

```sh
Prepare JS Test 4/1/2022 8:30 true
Give JS Test 4/1/2022 10:00 false
Assess Test Result 4/1/2022 1:00 false
```

### Spread va Rest Operatorlari

Massivni yo'q qilganda, qolgan elementlarni massiv sifatida olish uchun tarqalish operatoridan (...) foydalanamiz. Bunga qo'shimcha ravishda biz arr elementlarini boshqa massivga yoyish uchun tarqalish operatoridan foydalanamiz.

### Massivning qolgan elementlarini olish uchun Spread operatori

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
​
console.log(num1, num2, num3)
console.log(rest)
```

```sh
1 2 3
[4, 5, 6, 7, 8, 9, 10]
```

```js
const countries = [
  'Germany',
  'France',
  'Belgium',
  'Finland',
  'Sweden',
  'Norway',
  'Denmark',
  'Iceland'
]

let [gem, fra, , ...nordicCountries] = countries

console.log(gem)
console.log(fra)
console.log(nordicCountries)
```

```sh
Germany
France
["Finland", "Sweden", "Norway", "Denmark", "Iceland"]
```

### Massivni nusxalash uchun Spread operatori

```js
const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)


```

```sh
[0, 2, 4, 6, 8, 10]
[1, 3, 5, 7, 9]
[0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]
```

```js
const frontEnd = ['HTML', 'CSS', 'JS', 'React']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [...frontEnd, ...backEnd]

console.log(fullStack)
```

```sh
["HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB"]
```

### Ob'ektni nusxalash uchun Spread operatori

Biz Spread operatori yordamida ob'ektni nusxalashimiz mumkin

```js
const user = {
  name:'Asabeneh',
  title:'Programmer',
  country:'Finland',
  city:'Helsinki'
}

const copiedUser = {...user}
console.log(copiedUser)
```

```sh
{name: "Asabeneh", title: "Programmer", country: "Finland", city: "Helsinki"}
```

Nusxa olish paytida ob'ektni tahrirlash yoki o'zgartirish

```js
const user = {
  name:'Asabeneh',
  title:'Programmer',
  country:'Finland',
  city:'Helsinki'
}

const copiedUser = {...user, title:'instructor'}
console.log(copiedUser)
```

```sh
{name: "Asabeneh", title: "instructor", country: "Finland", city: "Helsinki"}
```

#### Spread operatori strelkali funksiya bilan

Cheksiz ko'p argumentlarni oladigan o'q funksiyasini yozishni xohlaganimizda biz tarqalish operatoridan foydalanamiz. Parametr sifatida tarqalish operatoridan foydalansak, funktsiyani chaqirganimizda berilgan argument massivga o'zgaradi.

```js

const sumAllNums = (...args) => {
  console.log(args)
}

sumAllNums(1, 2, 3,4,5)

```

```sh
[1, 2, 3, 4, 5]

```

```js

const sumAllNums = (...args) => {
  let sum = 0
  for (const num of args){
    sum += num
  }
  return sum
  
}

console.log(sumAllNums(1, 2, 3,4,5))
```

```sh
15

```

🌕 Siz hozirgacha juda ko'p narsaga erishdingiz. Endi sizning JavaScript darajangiz o'rta darajada. Davom eting! Siz hozirgina 11-kun sinovlarini yakunladingiz va siz buyuklik sari 11 qadam oldindasiz. Endi miyangiz va mushaklaringiz uchun bir nechta mashqlarni bajaring.
## Console Obyekt Methodlari

Ushbu bo'limda biz konsol va konsol ob'ekt usullari haqida gapiramiz. Mutlaq yangi boshlanuvchilar odatda qaysi birini ishlatishni bilishmaydi: console.log(), document.write() yoki document.getElementById.

Brauzer konsolida chiqishni ko'rsatish uchun konsol ob'ekt usullaridan foydalanamiz va brauzer hujjatida (ko'rish porti) chiqishni ko'rsatish uchun document.write dan foydalanamiz. Ikkala usul ham faqat sinov va disk raskadrovka maqsadlarida qo'llaniladi. Konsol usuli brauzerdagi eng mashhur sinov va disk raskadrovka vositasidir. DOM bilan ishlashni xohlayotganimizda, biz document.getElementById() dan foydalanamiz, JavaScript-ni ishlatib ko'ring. Biz boshqa bo'limda DOMni ko'rib chiqamiz.

Mashhur, console.log() usulidan tashqari, konsol boshqa usullarni ham taqdim etadi.

### console.log()

Brauzer konsolida chiqishni ko'rsatish uchun console.log() dan foydalanamiz. Biz qiymatlarni almashtira olamiz va shuningdek, %c yordamida tizimdan chiqishni uslublashimiz mumkin.

- Brauzer konsolida chiqish ko'rsatilmoqda

```js
console.log('30 Days of JavaScript')
```

```sh
30 Days of JavaScript
```

- Almashtirish

```js
console.log('%d %s of JavaScript', 30, 'Days')
```

```sh
30 Days of JavaScript
```

- CSS

Biz CSS yordamida jurnalga yozish xabarini shakllantirishimiz mumkin. Natijani ko'rish uchun quyidagi koddan nusxa oling va brauzer konsoliga joylashtiring.

```js
console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
  '%c30 Days%c %cOf%c %cJavaScript%c',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow'
) // log output green red and yellow text
```

### console.warn()

Brauzerda ogohlantirish uchun console.warn() dan foydalanamiz. Masalan, paket versiyasi yoki noto'g'ri amaliyotlar haqida eskirish haqida xabar berish yoki ogohlantirish. Ogohlantirish xabarlarini ko'rish uchun quyidagi koddan nusxa oling va brauzer konsoliga joylashtiring.

```js
console.warn('This is a warning')
console.warn(
  'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)
console.warn('Warning is different from error')
```

### console.error()

console.error() usullari xato xabarlarini ko'rsatadi.

```js
console.error('This is an error message')
console.error('We all make mistakes')
```

### console.table()

console.table() usuli ma'lumotlarni konsoldagi jadval sifatida ko'rsatadi. Jadval ma'lumotlarini jadval sifatida ko'rsatadi. console.table() massiv yoki ob'ekt bo'lishi kerak bo'lgan bitta talab qilinadigan argument ma'lumotlarini va bitta qo'shimcha ixtiyoriy parametr ustunlarini oladi.

Avval oddiy massivdan boshlaylik. Quyidagi kod ikkita ustunli jadvalni ko'rsatadi. Nomlarni ko'rsatish uchun indeks va qiymat ustunini ko'rsatish uchun indeks ustuni

```js
const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)
```

Keling, ob'ektning natijasini ham tekshiramiz. Bu ikkita ustunli jadvalni yaratadi: kalitlarni o'z ichiga olgan indeks ustuni va qiymat ustuni ob'ektning qiymatlarini o'z ichiga oladi.

```js
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
console.table(user)
```

Qolgan misollarni brauzer konsoliga nusxalash va joylashtirish orqali tekshiring.

```js
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
console.table(countries)
```

```js
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]
console.table(users)
```

### console.time()

Operatsiya qancha davom etishini kuzatish uchun foydalanishingiz mumkin bo'lgan taymerni ishga tushiradi. Siz har bir taymerga o'ziga xos nom berasiz va ma'lum bir sahifada 10 000 tagacha taymer ishlaydi. Xuddi shu nom bilan console.timeEnd() ga qo'ng'iroq qilsangiz, brauzer taymer ishga tushirilgandan beri o'tgan vaqtni millisekundlarda chiqaradi.

```js
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]

console.time('Regular for loop')
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1])
}
console.timeEnd('Regular for loop')

console.time('for of loop')
for (const [name, city] of countries) {
  console.log(name, city)
}
console.timeEnd('for of loop')

console.time('forEach loop')
countries.forEach(([name, city]) => {
  console.log(name, city)
})
console.timeEnd('forEach loop')
```

```sh
Finland Helsinki
Sweden Stockholm
Norway Oslo
Regular for loop: 0.34716796875ms
Finland Helsinki
Sweden Stockholm
Norway Oslo
for of loop: 0.26806640625ms
Finland Helsinki
Sweden Stockholm
Norway Oslo
forEach loop: 0.358154296875ms
```

Yuqoridagi natijaga ko'ra, muntazam for tsikli for of yoki forEach tsikliga qaraganda sekinroq.


### console.info()

U brauzer konsolida ma'lumot xabarini ko'rsatadi.

```js
console.info('30 Days Of JavaScript challenge is trending on Github')
console.info('30 Days Of fullStack challenge might be released')
console.info('30 Days Of HTML and CSS challenge might be released')
```

### console.assert()

Agar tasdiq noto'g'ri bo'lsa, console.assert() usullari konsolga xato xabari yozadi. Agar da'vo haqiqat bo'lsa, hech narsa bo'lmaydi. Birinchi parametr tasdiqlash ifodasidir. Agar bu ibora noto'g'ri bo'lsa, Tasdiqlash muvaffaqiyatsiz tugadi xato xabari ko'rsatiladi.

```js
console.assert(4 > 3, '4 is greater than 3') // hech qanday natija 
console.assert(3 > 4, '3 is not greater than 4') // Tasdiqlash bajarilmadi: 3 4 dan katta emas

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}
```

### console.group()

console.group() turli jurnal guruhlarini guruhlashga yordam beradi. Quyidagi koddan nusxa oling va uni brauzer konsoliga guruhlarga joylashtiring.

```js
const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()
```

### console.count()

Bu console.count() chaqirilgan vaqt sonini chop etadi. U string label parametrini oladi. Funktsiyaning necha marta chaqirilishini hisoblash juda foydali. Quyidagi misolda console.count() usuli uch marta ishlaydi

```js
const func = () => {
  console.count('Function has been called')
}
func()
func()
func()
```

```sh
Function has been called: 1
Function has been called: 2
Function has been called: 3
```

### console.clear()

console.clear() brauzer konsolini tozalaydi.

🌕 Yaxshi ishlashda davom eting. Bosishda davom eting, osmon chegara! Siz hozirgina 13-kun sinovlarini yakunladingiz va siz buyuklik sari 13 qadam oldindasiz. Endi miyangiz va mushaklaringiz uchun bir nechta mashqlarni bajaring.



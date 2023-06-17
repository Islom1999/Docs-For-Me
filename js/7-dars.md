# 📔 7-dars

## Funksiyalar

Hozirgacha biz ko'plab o'rnatilgan JavaScript funktsiyalarini ko'rdik. Ushbu bo'limda biz maxsus funktsiyalarga e'tibor qaratamiz. Funktsiya nima? Funksiyalarni yaratishni boshlashdan oldin, keling, funksiya nima ekanligini va nima uchun bizga funktsiya kerakligini tushunamiz?

Funktsiya - bu ma'lum bir vazifani bajarish uchun mo'ljallangan kod yoki dasturlash bayonotlarining qayta ishlatilishi mumkin bo'lgan blokidir. Funktsiya funktsiya kalit so'zidan keyin nom va keyin qavs () bilan e'lon qilinadi. Qavslar parametr olishi mumkin.
Agar funktsiya parametr qabul qilsa, u argument bilan chaqiriladi. Funktsiya standart parametrni ham qabul qilishi mumkin. Funktsiyaga ma'lumotni saqlash uchun funktsiya ma'lum ma'lumotlar turlarini qaytarishi kerak. Qiymatni olish uchun biz funktsiyani chaqiramiz yoki chaqiramiz.

Funktsiya kodni quyidagi ko'rinishga keltirishga xizmat qiladi:

- toza and o'qishga qulay
- qayta foydalanish mumkin
- testlashga oson 

Funktsiya bir necha usulda e'lon qilinishi yoki yaratilishi mumkin:

- _Declaration funksiya_
- _Expression funksiya_
- _Anonymous funksiya_
- _Arrow funksiya_

### Declaration funksiya

Keling, funktsiyani qanday e'lon qilishni va funktsiyani qanday chaqirishni ko'rib chiqaylik.

```js
//funksiyani parametrsiz e'lon qilish
function functionName() {
  // kod shu yerda 
}
functionName() // funksiyani nomi va qavslar bilan chaqirish
```

### Parametrsiz funksiya

Funktsiyani parametrsiz e'lon qilish mumkin.

**Misol:**

```js
//  parametrsiz funksiya, sonni kvadratga tiklash
function square() {
  let num = 2
  let sq = num * num
  console.log(sq)
}

square() // 4

// funktsiya parametrsiz
function addTwoNumbers() {
  let numOne = 10
  let numTwo = 20
  let sum = numOne + numTwo

  console.log(sum)
}

addTwoNumbers() // funktsiyani bajarish uchun uning nomi bilan chaqirish kerak
```

```js
  function printFullName (){
      let firstName = 'Asabeneh'
      let lastName = 'Yetayeh'
      let space = ' '
      let fullName = firstName + space + lastName
      console.log(fullName)
}

printFullName() // funktsiyani chaqirish
```

### Qiymat qaytaruvchi funksiya


Funktsiya qiymatlarni ham qaytarishi mumkin, agar funktsiya qiymatlarni qaytarmasa, funktsiyaning qiymati aniqlanmagan. Yuqoridagi funksiyalarni return bilan yozamiz. Bundan buyon biz qiymatni funksiyaga chop etish o‘rniga qaytaramiz.

```js
function printFullName (){
      let firstName = 'Asabeneh'
      let lastName = 'Yetayeh'
      let space = ' '
      let fullName = firstName + space + lastName
      return fullName
}
console.log(printFullName())
```

```js

  function addTwoNumbers() {
      let numOne = 2
      let numTwo = 3
      let total = numOne + numTwo
      return total

  }

console.log(addTwoNumbers())
```

### Parametrli funksiya


Funktsiyada biz turli xil ma'lumotlar turlarini (raqam, satr, mantiqiy, ob'ekt, funktsiya) parametr sifatida o'tkazishimiz mumkin.

```js
// bitta parametrli 
function functionName(parm1) {
  //kod shu yerda 
}
functionName(parm1) // funksiyani chaqirish paytida bir argument berish kerak 

function areaOfCircle(r) {
  let area = Math.PI * r * r
  return area
}

console.log(areaOfCircle(10)) // funktsiyasi bitta argument bilan chaqirilishi kerak

function square(number) {
  return number * number
}

console.log(square(10))
```

### Ikkita parametrli funksiya


```js
// ikkita parametrli funksiya
function functionName(parm1, parm2) {
  //kod shu yerda 
}
functionName(parm1, parm2) // funksiyani chaqirish paytida ikkita argument berish kerak
// Parametrsiz funktsiya kiritilmaydi, shuning uchun ruxsat beramiz parametrlari bilan
function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  console.log(sum)
}
sumTwoNumbers(10, 20) // funksiyalarni chaqirish

// Agar funktsiyadan hech nima qaytmasa, u ma'lumotlarni saqlamaydi, shuning uchun unda return bo'lishi kerak
function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  return sum
}

console.log(sumTwoNumbers(10, 20))
function printFullName(firstName, lastName) {
  return `${firstName} ${lastName}`
}
console.log(printFullName('Asabeneh', 'Yetayeh'))
```

### Ko'p parametrli funksiya


```js
// bir nechta parametrli funksiya
function functionName(parm1, parm2, parm3,...){
  //kod shu yerda 
}
functionName(parm1,parm2,parm3,...) // funksiyani chaqirish paytida 3 ta argument berish kerak


// bu funksiya massivni parametr sifatida qabul qiladi va massiv funksiyasidagi raqamlar yig'indisini qaytaradi
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
    //funktsiyani chaqirish
console.log(sumArrayValues(numbers));


    const areaOfCircle = (radius) => {
      let area = Math.PI * radius * radius;
      return area;
    }
console.log(areaOfCircle(10))

```

### Cheksiz parametrli funksiya


Ba'zan biz foydalanuvchi qancha argumentlar o'tkazishini bilmaymiz. Shuning uchun biz cheksiz miqdordagi argumentlarni qabul qila oladigan funktsiyani qanday yozishni bilishimiz kerak. Buni amalga oshirish usuli funktsiya deklaratsiyasi (muntazam funktsiya) va strelkali funktsiyasi o'rtasida sezilarli farqga ega. Keling, misollarni funktsiya deklaratsiyasida ham, strelkali funktsiyasida ham ko'rib chiqaylik.

#### Cheksiz parametrli oddiy funksiya


Funktsiya deklaratsiyasi ob'ektga o'xshash funksiya ko'lamli argumentlar qatorini taqdim etadi. Funktsiyada argument sifatida berilgan har qanday narsaga funksiyalar ichidagi argumentlar ob'ektidan kirish mumkin. Keling, bir misolni ko'rib chiqaylik

 ```js
//  Keling funksiyaning Argumentlar obyektini titkilaymiz)

function sumAllNums() {
  console.log(arguments)
}

sumAllNums(1, 2, 3, 4) 
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

```

```js
// funksiyaning ifodalanishi

function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173
```

#### Cheksiz parametrli strelkali funksiya


Strelkali funksiyasi funksiya ko'p argumentlar obyektiga ega emas. Strelkali funksiyasida cheksiz miqdordagi argumentlarni qabul qiladigan funktsiyani amalga oshirish uchun biz har qanday parametr nomidan keyin `spread`  operatori`(...)`dan foydalanamiz. Funktsiyada argument sifatida berilgan har qanday narsaga strelkali funksiyasida massiv sifatida kirish mumkin.
Keling, bir misolni ko'rib chiqaylik

 ```js
// Argumentlar obyektiga kirishga ruxsat bering

const sumAllNums = (...args) => {
  // console.log(arguments), arguments ob'ekti strelkali funktsiyasida topilmadi
    // buning o'rniga biz a parametridan keyin `spread` operatoridan foydalanamiz
  console.log(args)
}

sumAllNums(1, 2, 3, 4)
// [1, 2, 3, 4]

```

```js
// funksiyaning ifodalanishi

const sumAllNums = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173
```

### Anonim funksiya

Anonim funksiya yoki nomsiz funksiya

```js
const anonymousFun = function() {
  console.log(
    'I am an anonymous function and my value is stored in anonymousFun'
  )
}
```

### Expression funksiya

Ifoda funksiyalari anonim funksiyalardir. Biz nomsiz funksiya yaratganimizdan so'ng va uni o'zgaruvchiga tayinlaymiz. Funktsiyadan qiymat qaytarish uchun biz o'zgaruvchini chaqirishimiz kerak.
Quyidagi misolga qarang.

```js

// Function expression(ifodali funksiya) -> bu o'zgaruvchiga tayinlangan funksiyadir!
const square = function(n) {
  return n * n
}

console.log(square(2)) // -> 4
```

### Self Invoking Funksiyalar

O'z-o'zidan chaqiriladigan funktsiyalar - bu qiymatni qaytarish uchun chaqirilishi shart bo'lmagan anonim funktsiyalar.

```js
(function(n) {
  console.log(n * n)
})(2) // 4, lekin biz ma'lumotlarni qaytarish va saqlashni istasak, faqat chop etish o'rniga, biz quyida ko'rsatilgandek qilamiz

let squaredNum = (function(n) {
  return n * n
})(10)

console.log(squaredNum)
```

### Strelkali funksiya

Strelkali funksiya yozishga muqobildir, ammo oddiy funksiya va strelkali funksiyasi kichik farqlarga ega.

Strelkali funktsiyani e'lon qilish uchun _function_ kalit so'zi o'rniga o'q(strelkadan)dan foydalanadi . Keling, ikkala funktsiya oddiy funksiyani ham, o'q funksiyasini ham ko'rib chiqaylik.

```js
// Oddiy yoki deklaratsiya funksiyasini shunday yozamiz 
// Bu deklaratsiya funksiyasini strelkali funktsiyaga o'zgartiramiz
function square(n) {
  return n * n
}

console.log(square(2)) // 4

const square = n => {
  return n * n
}

console.log(square(2))  // -> 4

// agar kod blokida faqat bitta satr bo'lsa, uni quyidagicha yozish mumkin, ixchamgina :)
const square = n => n * n  // -> 4
```

```js
const changeToUpperCase = arr => {
  const newArr = []
  for (const element of arr) {
    newArr.push(element.toUpperCase())
  }
  return newArr
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))

// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
```

```js
const printFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`
}

console.log(printFullName('Asabeneh', 'Yetayeh'))
```

Yuqoridagi funktsiya faqat return iborasiga ega, shuning uchun biz uni quyidagicha qaytarishimiz mumkin.

```js
const printFullName = (firstName, lastName) => `${firstName} ${lastName}`

console.log(printFullName('Asabeneh', 'Yetayeh'))
```

### Standart parametrli funksiya


Ba'zan biz parametrlarga standart qiymatlarni o'tkazamiz, agar biz argumentni o'tkazmasak, funktsiyani chaqirganimizda standart qiymat ishlatiladi. Funktsiya deklaratsiyasi ham, o'q funksiyasi ham standart qiymat yoki qiymatlarga ega bo'lishi mumkin.

```js
// syntax
// Funktsiyani e'lon qilish
function functionName(param = value) {
  //codes
}

// funksiyani chaqirish
functionName()
functionName(arg)
```

**Misol:**

```js
function greetings(name = 'Peter') {
  let message = `${name}, welcome to 30 Days Of JavaScript!`
  return message
}

console.log(greetings())
console.log(greetings('Asabeneh'))
```

```js
function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}

console.log(generateFullName())
console.log(generateFullName('David', 'Smith'))
```

```js
function calculateAge(birthYear, currentYear = 2019) {
  let age = currentYear - birthYear
  return age
}

console.log('Age: ', calculateAge(1819))
```

```js
function weightOfObject(mass, gravity = 9.81) {
  let weight = mass * gravity + ' N' // qiymat avval satrga o'zgartirilishi kerak
    return weight
}

console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon
```

Keling, yuqoridagi funktsiyalarni o'q funktsiyalari bilan qanday yozishimizni ko'rib chiqaylik

```js
// syntax
// funksiyaning ifodalanishi
const functionName = (param = value) => {
  //codes
}

// funksiyani chaqirish
functionName()
functionName(arg)
```

**Misol:**

```js
const greetings = (name = 'Peter') => {
  let message = name + ', welcome to 30 Days Of JavaScript!'
  return message
}

console.log(greetings())
console.log(greetings('Asabeneh'))
```

```js
const generateFullName = (firstName = 'Asabeneh', lastName = 'Yetayeh') => {
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}

console.log(generateFullName())
console.log(generateFullName('David', 'Smith'))
```

```js

const calculateAge = (birthYear, currentYear = 2019) => currentYear - birthYear
console.log('Age: ', calculateAge(1819))
```

```js
const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N'
  
console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon
```

### Declaration funksiya vs Strelkali funksiya

Bu boshqa bo'limda yoritiladi

🌕 Siz ko'tarilayotgan yulduzsiz, endi siz funktsiyani bildingiz. Endi siz funktsiyalarning kuchi bilan to'lasiz. Siz hozirgina 7 kunlik sinovlarni yakunladingiz va siz buyuklik sari 7 qadam oldindasiz. Endi miyangiz va mushaklaringiz uchun bir nechta mashqlarni bajaring.
## Xato bilan ishlash

JavaScript erkin yozilgan tildir. Ba'zida siz aniqlanmagan o'zgaruvchiga kirishga harakat qilganingizda yoki aniqlanmagan funktsiyaga qo'ng'iroq qilganingizda ish vaqti xatosi paydo bo'ladi.

Python yoki Java-ga o'xshash JavaScript try-catch-finally bloki yordamida ish vaqtidagi xatolarni aniqlash uchun xatolarni qayta ishlash mexanizmini taqdim etadi.

```js
try {
  // xato berishi mumkin bo'lgan kod 
} catch (err) {
  // xatolik yuz berganda bajariladigan kod 
} finally {
  // xatolik yuz bergan yoki bo'lmasligidan qat'iy nazar bajariladigan kod 
}
```

**try**: try blokida xatolikka olib kelishi mumkin bo'lgan shubhali kodni o'rab oling. try iborasi bizga bajarilayotgan vaqtda xatolar uchun tekshiriladigan kod blokini aniqlash imkonini beradi.

**catch**: xatolik yuz berganda catch blokida biror narsa qilish uchun kod yozing. Catch blokida xatolik haqida ma'lumot beradigan parametrlar bo'lishi mumkin. Catch bloki xatoni qayd qilish yoki foydalanuvchiga ma'lum xabarlarni ko'rsatish uchun ishlatiladi.

**finally**: finally blok har doim xatolik yuzaga kelishidan qat'iy nazar bajariladi. Finally bloki qolgan vazifani bajarish yoki sinab ko'rish blokida xatolik yuz berishidan oldin o'zgargan o'zgaruvchilarni tiklash uchun ishlatilishi mumkin.

**Misol:**

```js
try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.log(err)
}
```

```sh
ReferenceError: fistName is not defined
    at <anonymous>:4:20
```

```js
try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.error(err) // biz console.log() yoki console.error() 
} finally {
  console.log('In any case I will be executed')
}
```

```sh
ReferenceError: fistName is not defined
    at <anonymous>:4:20
In any case it  will be executed
```

Catch bloki parametrni oladi. Catch blokiga parametr sifatida e, err yoki xatoni o'tkazish odatiy holdir. Bu parametr ob'ekt bo'lib, unda nom va xabar kalitlari mavjud. Ism va xabardan foydalanaylik.

```js
try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.log('Name of the error', err.name)
  console.log('Error message', err.message)
} finally {
  console.log('In any case I will be executed')
}
```

```sh
Name of the error ReferenceError
Error message fistName is not defined
In any case I will be executed
```

throw: throw bayonoti bizga maxsus xato yaratish imkonini beradi. Biz satr, raqam, mantiqiy yoki ob'ekt orqali mumkin. Istisnoni tashlash uchun throw iborasidan foydalaning. Istisno qo'yganingizda, ifoda istisnoning qiymatini belgilaydi. Quyidagilarning har biri istisno qiladi:

```js
throw 'Error2' // string qiymati bilan istisno hosil qiladi 
throw 42 // qiymati bilan istisno hosil qiladi 
throw true // qiymati bilan istisno hosil qiladi true 
throw new Error('Required') // xato ob'ektini yaratadi. Majburiy xabar
```

```js
const throwErroMisolFun = () => {
  let message
  let x = prompt('Enter a number: ')
  try {
    if (x == '') throw 'empty'
    if (isNaN(x)) throw 'not a number'
    x = Number(x)
    if (x < 5) throw 'too low'
    if (x > 10) throw 'too high'
  } catch (err) {
    console.log(err)
  }
}
throwErroMisolFun()
```

### Error Types

- ReferenceError: Noqonuniy havola yuz berdi. Agar biz e'lon qilinmagan o'zgaruvchidan foydalansak, ReferenceError tashlanadi.

```js
let firstName = 'Asabeneh'
let fullName = firstName + ' ' + lastName

console.log(fullName)
```

```sh
Uncaught ReferenceError: lastName is not defined
    at <anonymous>:2:35
```

- SyntaxError: Sintaksis xatosi yuz berdi

```js
let square = 2 x 2
console.log(square)

console.log('Hello, world")
```

```sh
Uncaught SyntaxError: Unexpected identifier
```

- TypeError: Tur xatosi yuz berdi

```js
let num = 10
console.log(num.toLowerCase())
```

```sh
Uncaught TypeError: num.toLowerCase is not a function
    at <anonymous>:2:17
```

Bular kod yozishda duch kelishi mumkin bo'lgan keng tarqalgan xatolardir. Xatolarni tushunish sizga qanday xatolarga yo'l qo'yganingizni bilishingizga yordam beradi va kodingizni tezda disk raskadrovka qilishga yordam beradi.

🌕 Siz beg'uborsiz. Endi siz xatolarni qanday hal qilishni bilar edingiz va kutilmagan foydalanuvchi kiritishlarini boshqaradigan mustahkam dastur yozishingiz mumkin. Siz hozirgina 14-kun sinovlarini yakunladingiz va siz buyuklik sari 14 qadam oldindasiz. Endi miyangiz va mushaklaringiz uchun bir nechta mashqlarni bajaring.


## Guvohlik
Endi Muallif va 30DaysOfJavaScript haqidagi fikrlaringizni bildirish vaqti keldi. Siz o'z fikringizni [ushbu havolada](https://testimonify.herokuapp.com/) qoldirishingiz mumkin

## Masalalar
1. FullName funksiyasini e'lon qiling va u sizning to'liq ismingizni chop etadi.

2. FullName funksiyasini e'lon qiling va endi u parametr sifatida firstName, LastNameni oladi va u sizning to'liq ismingizni qaytaradi .

3. addNumbers funksiyasini e'lon qiling va u ikkita ikkita parametr oladi va u summani qaytaradi.

4. addItem funksiya nomini e'lon qiling . U element parametrini oladi va elementni qo'shgandan keyin massivni qaytaradi

5. Funktsiya nomini e'lon qiling removeItem . U indeks parametrini oladi va elementni olib tashlaganidan keyin massivni qaytaradi

6. sumOfNumbers funksiya nomini e'lon qiling . Bu raqam parametrini oladi va u ushbu diapazondagi barcha raqamlarni qo'shadi.

7. sumOfOdds funksiya nomini e'lon qiling . Bu raqam parametrini oladi va u diapazondagi barcha toq raqamlarni qo'shadi.

8. sumOfEven funksiya nomini e'lon qiling . Bu raqam parametrini oladi va bu diapazondagi barcha juft raqamlarni qo'shadi.


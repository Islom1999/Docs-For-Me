

# 📔 1-dars

[[toc]]


## Kirish

### Javascript haqida
Javascript - web uchun maxsus yuqori darajadagi (high-level) dasturlash
tili. Uning yordamida HTML va CSS'ni dinamik darzda o'zgartirish
imkoniyati mavjud.
Hayotiy o'xshatish
    
<img src="/image_js/html-css-js.png">

- Web asoslarini kundalik ishlatatigan tilimizga o'xshatadigan bo'lsak,
HTML - ot (noun), CSS - sifat (adjective), Javascript esa fe'l (verb)
va'zifasini bajaradi

<img src="/image_js/html-css-js-2.png">
        
### Amaliyotda qo'llanilishi

1. Frontend development - Javascript yordamida veb sahifaga dinamik
ko'rinishda qo'shimchalar qo'shish, masalan matn va kontentni o'zgartirish,
rasmlarni o'lchovini o'zgartirish va h.k. Undan tashqari JS freymvorklar
yordamida veb sayt ishlab chiqish jarayonini ancha tez va oson amalga oshirish
imkoniyati mavjud

2. Backend development - JS'ga asoslangan NodeJS texnologiyasi orqali
backend ya'ni server-side dasturlashni amalga oshirish imkoniyati mavjud

3. Mobile application development - ReactNative va shunga o'xshash
texnologiyalar orqali Hybrid ko'rinishda mobil ilovalar yaratish imkoniyati mavjud

4. Game development - Online o'yinlar yaratishda Javascript ham faol tarzda
ishlatilinadi

### Javascript versiyalari - Javascript vs ECMAScript
Javascript - umumiy maqsadga yo'naltirilgan scripting til bo'lib,
ECMAScript tomonidan belgilangan spetsifikatsiyalarga javob beradi.
Boshqacha qilib aytganda, ECMAScript scripting til uchun reja (blueprint,
standard) bo'lsa, Javascript esa bu standard'ning amalga oshirilishidir.

## Ma'lumot turlari

 Ma'lumotlar yoki qiymatlar ma'lumotlar turlariga ega. Ma'lumotlar turlari ma'lumotlarning xususiyatlarini tavsiflaydi. Ma'lumotlar turlarini ikkiga bo'lish mumkin:

1. Primitiv ma'lumotlar turlari
2. Oddiy bo'lmagan ma'lumotlar turlari (ob'ektga havolalar)

### Primitiv ma'lumotlar turlari

JavaScript-dagi primitive ma'lumotlar turlariga quyidagilar kiradi:

 1. Raqamlar - butun sonlar, vergulli(Float)
 2. Satrlar - bitta qo'shtirnoq ostidagi har qanday ma'lumotlar, qo'sh tirnoq yoki teskari tirnoq
 3. Mantiqiy qiymatlar - true yoki false qiymat
 4. Null - bo'sh qiymat yoki qiymat yo'q
 5. Undefined - qiymatsiz e'lon qilingan o'zgaruvchi

JavaScript-dagi Non-primitive(oddiy bo'lmagan) ma'lumotlar turlarini o'z ichiga oladi:

1. Ob'ektlar
2. Funksiyalar
3. Massivlar

Keling, Primitive va Primitive bo'lmagan ma'lumotlar turlari nimani anglatishini ko'rib chiqaylik. _Primitiv_ ma'lumotlar turlari o'zgarmas (o'zgartirilmaydigan) ma'lumotlar turlaridir. Bir Primitive ma'lumotlar turi yaratilgandan keyin biz uni o'zgartira olmaymiz.

**Misol:**

```js
let word = 'JavaScript'
```

Agar biz _word_ o'zgaruvchisida saqlangan satrni o'zgartirishga harakat qilsak, JavaScript xatoga yo'l qo'yishi kerak. Bitta qo'shtirnoq, qo'sh qo'shtirnoq yoki teskari tirnoq ostidagi har qanday ma'lumotlar turi satr ma'lumotlar turidir.

```js
word[0] = 'Y'
```

Bu ifoda _word_ o'zgaruvchisida saqlangan qatorni o'zgartirmaydi. Shunday qilib, biz satrlarni o'zgartirib bo'lmaydigan yoki boshqacha qilib aytganda o'zgarmas deb aytishimiz mumkin. Primitiv ma'lumotlar turlari qiymatlari bo'yicha taqqoslanadi. Keling, turli xil ma'lumotlar qiymatlarini solishtiraylik.
Quyidagi misolga qarang:

```js
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false
```

### Non-Primitiv ma'lumotlar turlari

Primitiv bo'lmagan ma'lumotlar turlari o'zgartirilishi yoki o'zgarishi mumkin. Biz primitive bo'lmagan ma'lumotlar turlarining qiymatini yaratilgandan keyin o'zgartirishimiz mumkin. Keling, massiv yaratish orqali ko'raylik. Massiv - kvadrat qavs ichidagi ma'lumotlar qiymatlari ro'yxati.
Massivlar bir xil yoki turli xil ma'lumotlarni o'z ichiga olishi mumkin. Massiv qiymatlariga ularning indeksi orqali havola qilinadi. JavaScript-da massiv indeksi noldan boshlanadi.
Ya'ni, massivning 1-elementi indeks 0 da, 2-element 1-indeksda, 3-element esa 2-indeksda va hokazo.

```js
let nums = [1, 2, 3]
nums[0] = 10

console.log(nums)  // [10, 2, 3]
```

Ko'rib turganingizdek, primitiv bo'lmagan ma'lumotlar turi bo'lgan massiv o'zgaruvchan. Primitiv bo'lmagan ma'lumotlar turlarini qiymat bo'yicha taqqoslab bo'lmaydi. Ikki primitive bo'lmagan ma'lumotlar turi bir xil xususiyat va qiymatlarga ega bo'lsa ham, ular qat'iy teng emas.

```js
let nums = [1, 2, 3]
let numbers = [1, 2, 3]
// 2 ta massivni solishtiramiz va ular qat'iy teng emas!
console.log(nums == numbers)  // false

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}
// 2 ta obyektni solishtiramiz va ular qat'iy teng emas!
console.log(userOne == userTwo) // false
```

Asosiy qoida, biz primitive bo'lmagan ma'lumotlar turlarini solishtirmaymiz. Massivlarni, funktsiyalarni yoki ob'ektlarni solishtirmang. Primitiv bo'lmagan qiymatlar mos yozuvlar turlari deb ataladi, chunki ular qiymat o'rniga mos yozuvlar bilan taqqoslanadi.
Ikki ob'ekt faqat bir xil asosiy ob'ektga tegishli bo'lsa, qat'iy tengdir.

```js
let nums = [1, 2, 3]
let numbers = nums

console.log(nums == numbers)  // true

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = userOne

console.log(userOne == userTwo)  // true
```

Agar siz primitive ma'lumotlar turlari va primitive bo'lmagan ma'lumotlar turlari o'rtasidagi farqni tushunishda qiynalayotgan bo'lsangiz, siz yagona emassiz. Tinchlaning va faqat keyingi bo'limga o'ting va biroz vaqt o'tgach qaytib kelishga harakat qiling.
Endi raqamlar turi bo'yicha ma'lumotlar turlarini boshlaylik.

## Raqamlar

Raqamlar barcha arifmetik amallarni bajara oladigan butun va o'nlik qiymatlardir. Keling, raqamlarning ba'zi misollarini ko'rib chiqaylik.


### Raqamli ma'lumotlar turlarini e'lon qilish

```js
let age = 35
const gravity = 9.81  // o'zgarmas qiymatlar uchun const dan foydalanamiz, tortishish doimiysi m/s2
let mass = 72         // Kilogrammdagi massa
const PI = 3.14       // pi geometrik doimiy

// Ko'proq misollar
const boilingPoint = 100 // oC dagi harorat, doimiy bo'lgan suvning qaynash nuqtasi
const bodyTemp = 37      // oC inson tanasining o'rtacha harorati, bu doimiy

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)
```
## Satrlar

Satrlar - bu **_bitta( ' )_** , _**qo'sh( " )**_, _**orqa( ` ESC ni tagida)**_ belgisi ostidagi matnlar. Satrni e'lon qilish uchun bizga o'zgaruvchi nomi, belgilash operatori, bitta qo'shtirnoq ostidagi qiymat, qo'sh qo'shtirnoq yoki teskari tirnoq kerak.
Keling, qatorlarning ba'zi misollarini ko'rib chiqaylik:

```js
let space = ' '           // bo'sh joy satri
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let quote = "The saying,'Seeing is Believing' is not correct in 2022."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2022.`
```

### Satrlarni birlashtirish

Ikki yoki undan ortiq qatorlarni bir-biriga bog'lash birlashma deyiladi. Oldingi String bo'limida e'lon qilingan satrlardan foydalanish:

```js
let fullName = firstName + space + lastName; // birlashtirish, ikki qatorni birlashtirish.
console.log(fullName);
```

```sh
Asabeneh Yetayeh
```

Biz satrlarni turli yo'llar bilan birlashtira olamiz.

## Undefined

O'sha haqiqat qiymatlarini va yolg'on qiymatlarini eslash yaxshidir. Keyingi bo'limda biz ularni qaror qabul qilish uchun shartlar bilan ishlatamiz.

```js
let firstName
console.log(firstName) //aniqlanmagan, chunki u hali qiymatga tayinlanmagan
```

## Null

```js
let empty = null
console.log(empty) // -> null , qiymat yo'q degan ma'noni anglatadi
```

## Window methodlari

### Window alert() method

Eng boshida ko'rganingizdek, alert() usuli ma'lum bir xabar va OK tugmasi bilan ogohlantirish oynasini ko'rsatadi. Bu o'rnatilgan usul va u argumentni oladi.

```js
alert(message)
```

```js
alert('Welcome to 30DaysOfJavaScript')
```

Juda ko'p ogohlantirishdan foydalanmang, chunki u buzadi va bezovta qiladi, uni faqat sinab ko'rish uchun foydalaning.

### Window prompt() method

Oynaning so'rov usullari kirish qiymatlarini olish uchun brauzeringizda kirish bilan so'rov oynasini ko'rsatadi va kiritilgan ma'lumotlar o'zgaruvchida saqlanishi mumkin. prompt() usuli ikkita argumentni oladi. Ikkinchi dalil ixtiyoriydir.

```js
prompt('required text', 'optional text')
```

```js
let number = prompt('Enter number', 'number goes here')
console.log(number)
```

### Window confirm() method

confirm() usuli OK va Bekor qilish tugmasi bilan birga belgilangan xabarga ega dialog oynasini ko'rsatadi. Tasdiqlash oynasi ko'pincha foydalanuvchidan biror narsani bajarish uchun ruxsat so'rash uchun ishlatiladi. Window confirm() argument sifatida qatorni oladi. OK tugmasini bosish haqiqiy qiymatni beradi, Bekor qilish tugmasini bosish esa noto'g'ri qiymatni beradi.

```js
const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // dialog oynasida bosgan narsangizga qarab natija rost yoki noto'g'ri bo'ladi
```

Bu barcha oyna usullari emas, biz oyna usullariga chuqur kirish uchun alohida bo'limga ega bo'lamiz.

## Operatorlar

### Belgilash operatorlari

JavaScript-dagi tenglik belgisi tayinlash operatoridir. U o'zgaruvchini tayinlash uchun foydalanadi.

```js
let firstName = 'Asabeneh'
let country = 'Finland'
```

Belgilash operatorlari

<!-- ![Assignment operators](../images/assignment_operators.png) -->

### Arifmetik operatorlar

Arifmetik operatorlar matematik operatorlardir.

- Qo'sish(+): a + b
- Ayirish(-): a - b
- Ko'paytirish (*): a * b
- Bo'lish(/): a / b
- Modul(%): a % b
- Eksponensial(Daraja)(**): a ** b

```js
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64

```

```js
const PI = 3.14
let radius = 100          // metrda

//Doira maydonini hisoblaymiz 
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m


const gravity = 9.81      // in m/s2
let mass = 72             // Kilogrammda

// Ob'ektning og'irligini hisoblaymiz 
const weight = mass * gravity
console.log(weight)        // 706.32 N(Nyuton)

const boilingPoint = 100  // harorat oC, suvning qaynash nuqtasi 
const bodyTemp = 37       // tana harorati oC


// Satr interpolyatsiyasi yordamida raqamlar bilan qatorni birlashtirish
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
)
```

### Taqqoslash operatorlari

Dasturlashda biz qiymatlarni solishtiramiz, ikkita qiymatni solishtirish uchun taqqoslash operatorlaridan foydalanamiz. Biz qiymatning boshqa qiymatdan katta yoki kichik yoki teng ekanligini tekshiramiz.

<!-- ![Comparison Operators](../images/comparison_operators.png) -->
**Misol: Taqqoslash operatorlari**

```js
console.log(3 > 2)              // true,  chunki 3 katta 2 dan 
console.log(3 >= 2)             // true,  chunki 3 katta 2 dan
console.log(3 < 2)              // false, chunki 3 katta 2 dan
console.log(2 < 3)              // true,  chunki 2 kichik 3 dan
console.log(2 <= 3)             // true,  chunki 2 kichik 3 dan
console.log(3 == 2)             // false, chunki 3 2 ga teng emas
console.log(3 != 2)             // true,  chunki 3 2 ga teng emas
console.log(3 == '3')           // true,  chunki faqat qiymatlar solishtirildi
console.log(3 === '3')          // false, chunki qiymatlar va ma'lumot turi solishtirildi
console.log(3 !== '3')          // true,  chunki qiymatlar va ma'lumot turi solishtirildi
console.log(3 != 3)             // false, chunki faqat qiymatlar solishtirildi
console.log(3 !== 3)            // false, chunki qiymatlar va ma'lumot turi solishtirildi
console.log(0 == false)         // true,  ekvivalent
console.log(0 === false)        // false, aynan bir xil emas
console.log(0 == '')            // true,  ekvivalent
console.log(0 == ' ')           // true,  ekvivalent
console.log(0 === '')           // false, aynan bir xil emas
console.log(1 == true)          // true,  ekvivalent
console.log(1 === true)         // false, aynan bir xil emas
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, teng emas
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false
```

Yuqoridagi taqqoslashlarni qandaydir mantiq bilan tushunishga harakat qiling. Hech qanday mantiqsiz eslab qolish qiyin bo'lishi mumkin. JavaScript - bu qandaydir simli dasturlash tili. JavaScript kodi ishlaydi va sizga natija beradi, lekin agar siz buni yaxshi bilmasangiz, kerakli natija bo'lmasligi mumkin.

Umumiy qoida sifatida, agar qiymat == bilan to'g'ri bo'lmasa, u === bilan teng bo'lmaydi. === dan foydalanish == dan ko'ra xavfsizroqdir. Quyidagi havolada ma'lumotlar turlarini taqqoslashning to'liq ro'yxati mavjud.

### Mantiqiy operatorlar

Quyidagi belgilar umumiy mantiqiy operatorlardir:
&&(ampersand) , ||(quvur) and !(inkor).
_&&_ operatori faqat ikkita operand rost bo'lsa rost bo'ladi.
_||_ operator to'g'ri bo'ladi, agar operandlardan biri rost bo'ladi.
_!_ operator rostdan noto'g'riga va noto'g'ridan rostga rad etadi.

```js
// && ampersand operatoriga misol

const check = 4 > 3 && 10 > 5         // true && true -> true
const check = 4 > 3 && 10 < 5         // true && false -> false
const check = 4 < 3 && 10 < 5         // false && false -> false

// || quvur yoki operator, misol

const check = 4 > 3 || 10 > 5         // true  || true -> true
const check = 4 > 3 || 10 < 5         // true  || false -> true
const check = 4 < 3 || 10 < 5         // false || false -> false

// ! Inkor qilish misollari

let check = 4 > 3                     // true
let check = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true
```

### O'sish operatori

JavaScrip-da biz o'zgaruvchida saqlangan qiymatni oshirish uchun oshirish operatoridan foydalanamiz. O'sish oldingi yoki keyingi o'sish bo'lishi mumkin. Keling, ularning har birini ko'rib chiqaylik:

1. Pre-increment (Oldindan oshirish)

```js
let count = 0
console.log(++count)        // 1
console.log(count)          // 1
```

1. Post-increment (Keyin oshirish)

```js
let count = 0
console.log(count++)        // 0
console.log(count)          // 1
```

Biz ko'pincha o'sishdan keyin foydalanamiz. Hech bo'lmaganda post-increment operatoridan qanday foydalanishni eslab qolishingiz kerak.

### Kamaytirish operatori

JavaScrip-da biz o'zgaruvchida saqlangan qiymatni kamaytirish uchun kamaytirish operatoridan foydalanamiz. Kamaytirish dekretsiyadan oldin yoki keyin bo'lishi mumkin. Keling, ularning har birini ko'rib chiqaylik:

1. Pre-decrement (Oldindan kamaytirish)

```js
let count = 0
console.log(--count) // -1
console.log(count)  // -1
```

2. Post-decrement (Keyin kamaytirish)

```js
let count = 0
console.log(count--) // 0
console.log(count)   // -1
```

### Uchlik(Ternar) operatorlari

Uchlik operator shart yozishga imkon beradi. Shartlarni yozishning yana bir usuli - uchlik operatorlardan foydalanish. Quyidagi misollarni ko'rib chiqing:

```js
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
```

```sh
You need a rain coat.
No need for a rain coat.
```

```js
let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
number = -5

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
```

```sh
5 is a positive number
-5 is a negative number
```

### Operator ustunligi

[Men sizga ushbu havoladan](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
operator ustunligi haqida o'qishni tavsiya qilmoqchiman 



## 💻 Mashqlar: 

1. O'zgaruvchini e'lon qiling va uni **'Javascript'** boshlang'ich qiymatiga belgilang va uni consolega chiqaring.
2. **Prompt** yordamida ism va familiya kiriting ularni **name** va **lastName** ozgarivchilariga taminlab bitta **alertda ism familiyani** qo'shib chiqaring.
3. **Prompt** yordamida tug'ilgan yil kiritilsin va hozirgi yildan ayrilib necha yoshda ekanligi alertda ko'rsatilsin.
4. **soat** nomli o'zgaruvchi va uning qiymati bor. **consolega** shu soat qancha   **minutlarga  sekondlarga va millisekondlarga** tengligini chiqaring.  
5. **a** va **b** son bor shu sonlarni **ko'paytmasini** **c** songa tenglashtirib **consolega** chiqaring.
6. **a** va **b** sonlar mavjud shu sonlarning **o'rta arifmetigini** hisoblab **consolega** chiqaring. <br/>
(o'rta arifmetik barcha sonlar yig'indisini nechta sonligiga bo'linadi **M: (12 + 34)/2** )
7. **a** , **b**, **c** sonlar mavjud shu sonlarning **o'rta arifmetigini** hisoblab **consolega** chiqaring. <br/>
(o'rta arifmetik barcha sonlar yig'indisini nechta sonligiga bo'linadi **M: (12 + 34 + 45)/3**)



# 📔 4-dars


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

#### Qo'shish operatori yordamida birlashtirish

Qo‘shish operatori yordamida birlashtirish eski usul. Birlashtirishning bu usuli zerikarli va xatolarga moyil. Shu tarzda birlashtirishni bilish yaxshi, lekin men ES6 shablon satrlaridan foydalanishni tavsiya qilaman (keyinroq tushuntiriladi).

```js
// Har xil turdagi ma'lumotlarning turli o'zgaruvchilarini e'lon qilish
let space = ' '
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250


let fullName =firstName + space + lastName
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 satrlarni birlashtirish

console.log(personInfoOne)
```

```sh
Natija:
Asabeneh Yetayeh. I am 250. I live in Finland
```

#### Uzun harfli satrlar

Satr bitta belgi yoki paragraf yoki sahifa bo'lishi mumkin. Agar satrning uzunligi juda katta bo'lsa, u bir qatorga to'g'ri kelmaydi. Satrning keyingi satrda davom etishini bildirish uchun har bir satr oxiridagi teskari chiziq belgisidan (\) foydalanishimiz mumkin.
**Misol:**

```js
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2022. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)
```

#### Satrlardagi qochish ketma-ketligi

JavaScript va boshqa dasturlash tillarida \ va undan keyin ba'zi belgilar qochib ketish ketma-ketligidir. Keling, eng keng tarqalgan qochish belgilarini ko'rib chiqaylik:

- \n: yangi qator
- \t: Tab, odatda 4 bo'shliqni bildiradi
- \\: Teskari chiziq
- \': Bitta tirnoq (')
- \": Qo'sh tirnoq (")
  
```js
console.log('Umid qilamanki, barchaga JavaScript-ning 30 kuni tanlovi yoqadi.\nSizgachi ?') // qator uzilishi(yangi qatorga o'tish)
console.log('Kunlar\tMavzular\tMashqlar')
console.log('Kun 1\t3\t5')
console.log('Kun 2\t3\t5')
console.log('Kun 3\t3\t5')
console.log('Kun 4\t3\t5')
console.log('Bu teskari chiziq belgisi (\\)') // Teskari chiziq yozish uchun
console.log('Har bir dasturlash tilida u bilan boshlanadi \"Hello, World!\"')
console.log("Har bir dasturlash tilida u bilan boshlanadi \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2022')
```

Konsolda chiqish:

```sh
Umid qilamanki, barchaga JavaScript-ning 30 kuni tanlovi yoqadi.
Sizgachi ?
Kunlar	Mavzular	Mashqlar
Kun 1 3 5
Kun 2 3 5
Kun 3 3 5
Kun 4 3 5
Bu teskari chiziq belgisi (\)
Har bir dasturlash tilida u bilan boshlanadi "Hello, World!"
Har bir dasturlash tilida u bilan boshlanadi 'Hello, World!'
The saying 'Seeing is Believing' isn't correct in 2022
```

#### Andoza harflari (shablon satrlari)

Shablon satrlarini yaratish uchun biz ikkita orqa belgidan foydalanamiz. Biz ma'lumotlarni shablon qatoriga ifoda sifatida kiritishimiz mumkin. Ma'lumotni kiritish uchun biz iborani $ belgisidan oldin jingalak qavs ({}) bilan o'rab olamiz. Quyidagi sintaksisga qarang.

```js
//Sintaksis
`String literal matn`
`String literal matn ${ifoda}`
```

**Misol: 1**

```js
console.log(`The sum of 2 and 3 is 5`)              // ma'lumotlarni statik ravishda yozish
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // ma'lumotlarni dinamik ravishda satr ichiga kiritish 
```

**Misol:2**

```js
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250
let fullName = firstName + ' ' + lastName

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolyatsiya usuli
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)
```

```sh
I am Asabeneh Yetayeh. I am 250. I live in Finland.
I am Asabeneh Yetayeh. I live in Helsinki, Finland. I am a teacher. I teach JavaScript.
```

Satr shablonidan yoki satr interpolyatsiyasi usulidan foydalanib, biz qiymat bo'lishi mumkin bo'lgan ifodalarni yoki ba'zi operatsiyalarni (taqqoslash, arifmetik amallar, uchlik operatsiya) qo'shishimiz mumkin.

```js
let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a > b}`)
```

```sh
2 is greater than 3: false
```

### Satr funksiyalari

JavaScript-dagi hamma narsa ob'ektdir. Satr - bu primitive ma'lumotlar turi bo'lib, biz uni yaratilgandan keyin o'zgartira olmaymiz. String ob'ektida ko'plab string methodlari mavjud. Satrlar bilan ishlashda bizga yordam beradigan turli xil string methodlari mavjud.

1. *length*: Satrning *length* usuli bo'sh joy kiritilgan qatordagi belgilar sonini qaytaradi.

**Misol:**

```js
let js = 'JavaScript'
console.log(js.length)         // 10
let firstName = 'Asabeneh'
console.log(firstName.length)  // 8
```

2. Satrdagi belgilarga kirish: Biz uning indeksidan foydalanib, satrdagi har bir belgiga kirishimiz mumkin. Dasturlashda sanash 0 dan boshlanadi. Satrning 1-indeksi 0 ga teng, oxirgi indeks esa satr uzunligi -1 ga teng.

  <!-- ![Accessing sting by index](../images/string_indexes.png) -->

Keling, "JavaScript" qatoridagi turli belgilarga kirishga ruxsat bering.

```js
let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)           // J

let secondLetter = string[1]       // a
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter)            // t

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t
```

3. *toUpperCase()*: bu method satrni katta harflarga o'zgartiradi.

```js
let string = 'JavaScript'

console.log(string.toUpperCase())     // JAVASCRIPT

let firstName = 'Asabeneh'

console.log(firstName.toUpperCase())  // ASABENEH

let country = 'Finland'

console.log(country.toUpperCase())    // FINLAND
```

4. *toLowerCase()*: bu method satrni kichik harflarga o'zgartiradi.

```js
let string = 'JavasCript'

console.log(string.toLowerCase())     // javascript

let firstName = 'Asabeneh'

console.log(firstName.toLowerCase())  // asabeneh

let country = 'Finland'

console.log(country.toLowerCase())   // finland
```

5. *substr()*: Ikkita argument, boshlang'ich indeks va bo'laklarga bo'linadigan belgilar soni kerak bo'ladi.

```js
let string = 'JavaScript'
console.log(string.substr(4,6))    // Script

let country = 'Finland'
console.log(country.substr(3, 4))   // land
```

6. *substring()*: Bu ikkita argumentni oladi, boshlang'ich indeks va to'xtash indeksi, lekin u to'xtash indeksidagi belgini o'z ichiga olmaydi.

```js
let string = 'JavaScript'

console.log(string.substring(0,4))     // Java
console.log(string.substring(4,10))    // Script
console.log(string.substring(4))       // Script

let country = 'Finland'

console.log(country.substring(0, 3))   // Fin
console.log(country.substring(3, 7))   // land
console.log(country.substring(3))      // land
```

7. *split()*: Split methodi qatorni belgilangan joydan ajratadi.

```js
let string = '30 Days Of JavaScript'

console.log(string.split())     // Massivga o'zgartirish -> ["30 Days Of JavaScript"]
console.log(string.split(' '))  // Bo'sh joy orqali massivni bo'laklarga bo'lish -> ["30", "Days", "Of", "JavaScript"]

let firstName = 'Asabeneh'

console.log(firstName.split())    // Massivga o'zgartirish - > ["Asabeneh"]
console.log(firstName.split(''))  // Har bir harfda massivga bo'linadi ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // vergul orqali satrni massivga bo'lib tashlash-> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
```

8. *trim()*: Satrning boshida yoki oxiridagi bo'sh joyni olib tashlaydi.

```js
let string = '   30 Days Of JavaScript   '

console.log(string)
console.log(string.trim(' '))

let firstName = ' Asabeneh '

console.log(firstName)
console.log(firstName.trim())  // hali ham satrning boshida va oxiridagi bo'shliqlarni olib tashlaydi
```

```sh
   30 Days Of JavasCript   
30 Days Of JavasCript
  Asabeneh 
Asabeneh
```

9. *includes()*: U pastki qator argumentini oladi va u satrda pastki qator argumenti mavjudligini tekshiradi. include() mantiqiy qiymatni qaytaradi. Agar satrda pastki satr mavjud bo'lsa, u rostni qaytaradi, aks holda u yolg'onni qaytaradi.

```js
let string = '30 Days Of JavaScript'

console.log(string.includes('Days'))     // true
console.log(string.includes('days'))     // false - u katta harfga sezgir! Ya'ni katta va kichik harf bir hil emas deb qabul qiladi
console.log(string.includes('Script'))   // true
console.log(string.includes('script'))   // false
console.log(string.includes('java'))     // false
console.log(string.includes('Java'))     // true

let country = 'Finland'

console.log(country.includes('fin'))     // false
console.log(country.includes('Fin'))     // true
console.log(country.includes('land'))    // true
console.log(country.includes('Land'))    // false
```

10. *replace()*: parametr sifatida eski va yangi pastki qatorni oladi. Almashtiradi eskini yangiga

```js
string.replace(oldsubstring, newsubstring)
```

```js
let string = '30 Days Of JavaScript'
console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python

let country = 'Finland'
console.log(country.replace('Fin', 'Noman'))       // Nomanland
```

11. *charAt()*: Indeksni oladi va u satrdan indeksdagi qiymatni qaytaradi

```js
string.charAt(index)
```

```js
let string = '30 Days Of JavaScript'
console.log(string.charAt(0))        // 3

let lastIndex = string.length - 1
console.log(string.charAt(lastIndex)) // t
```

12. *charCodeAt()*: Indeksni oladi va u satrning indeksdagi qiymatning char kodini (ASCII raqami) qaytaradi

```js
string.charCodeAt(index)
```

```js
let string = '30 Days Of JavaScript'
console.log(string.charCodeAt(3))        // D ASCII da 68-belgi

let lastIndex = string.length - 1
console.log(string.charCodeAt(lastIndex)) // t ASCII da 116-belgi

```

13.  *indexOf()*: Pastki satrni oladi va agar pastki satr satrda mavjud bo'lsa, u pastki satrning 1-pozitsiyasini qaytaradi, agar mavjud bo'lmasa, u -1 ni qaytaradi

```js
string.indexOf(substring)
```

```js
let string = '30 Days Of JavaScript'

console.log(string.indexOf('D'))          // 3
console.log(string.indexOf('Days'))       // 3
console.log(string.indexOf('days'))       // -1
console.log(string.indexOf('a'))          // 4
console.log(string.indexOf('JavaScript')) // 11
console.log(string.indexOf('Script'))     //15
console.log(string.indexOf('script'))     // -1
```

14.  *lastIndexOf()*: Pastki satrni oladi va agar pastki satr satrda mavjud bo'lsa, u pastki satrning oxirgi pozitsiyasini qaytaradi, agar u mavjud bo'lmasa, u -1 ni qaytaradi.

```js
//syntax
string.lastIndexOf(substring)
```

```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(string.lastIndexOf('love'))       // 67
console.log(string.lastIndexOf('you'))        // 63
console.log(string.lastIndexOf('JavaScript')) // 38
```

15. *concat()*: u ko'plab pastki qatorlarni oladi va ularni birlashtiradi.

```js
string.concat(substring, substring, substring)
```

```js
let string = '30'
console.log(string.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

let country = 'Fin'
console.log(country.concat("land")) // Finland
```

16. *startsWith*: u argument sifatida pastki qatorni oladi va satr o'sha ko'rsatilgan pastki qatordan boshlanishini tekshiradi. Bu mantiqiy (true yoki false) qaytaradi.

```js
//syntax
string.startsWith(substring)
```

```js
let string = 'Love is the best to in this world'

console.log(string.startsWith('Love'))   // true
console.log(string.startsWith('love'))   // false
console.log(string.startsWith('world'))  // false

let country = 'Finland'

console.log(country.startsWith('Fin'))   // true
console.log(country.startsWith('fin'))   // false
console.log(country.startsWith('land'))  //  false
```

17. *endsWith*: u argument sifatida pastki qatorni oladi va satr o'sha ko'rsatilgan pastki qator bilan tugashini tekshiradi. Bu mantiqiy (true yoki false) qaytaradi.

```js
string.endsWith(substring)
```

```js
let string = 'Love is the most powerful feeling in the world'

console.log(string.endsWith('world'))         // true
console.log(string.endsWith('love'))          // false
console.log(string.endsWith('in the world')) // true

let country = 'Finland'

console.log(country.endsWith('land'))         // true
console.log(country.endsWith('fin'))          // false
console.log(country.endsWith('Fin'))          //  false
```

18. *search*: u argument sifatida pastki qatorni oladi va u birinchi moslik indeksini qaytaradi. Qidiruv qiymati satr yoki oddiy ifoda namunasi bo'lishi mumkin.

```js
string.search(substring)
```

```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))          // 2
console.log(string.search(/javascript/gi))  // 7
```

19. *match*: u argument sifatida pastki satr yoki oddiy ifoda naqshini oladi va agar mos kelsa, massivni qaytaradi, agar bo'lmasa, u nullni qaytaradi. Keling, oddiy ifoda namunasi qanday ko'rinishini ko'rib chiqaylik. U / belgisi bilan boshlanadi va / belgisi bilan tugaydi.

```js
let string = 'love'
let patternOne = /love/     // har qanday bayroqsiz
let patternTwo = /love/gi   // g-butun matn bo‘ylab qidirishni bildiradi, i - katta-kichik harf sezmaydi(2 sini ham bir hil deb qabul qiladi)
```

Match sintaksisi

```js
// syntax
string.match(substring)
```

```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love'))
```

```sh
["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]
```

```js
let pattern = /love/gi
console.log(string.match(pattern))   // ["love", "love", "love"]
```

Muntazam ibora yordamida matndan raqamlarni ajratib olaylik. Bu Muntazam ifoda bo'limi emas, vahima qilmang! Muntazam iboralar haqida keyinroq toʻxtalamiz.

```js
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2022 I am super exited to start this challenge'
let regEx = /\d+/

// d escape belgisi bilan d oddiy emas, d o'rniga raqam ishlaydi
// + bir yoki bir nechta raqamli sonlarni bildiradi,
// agar undan keyin g bo'lsa, bu global degan ma'noni anglatadi, hamma joyda qidiring.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2022"]
```

20. *repeat()*: u argument sifatida raqamni oladi va satrning takroriy versiyasini qaytaradi.

```js
string.repeat(n)
```

```js
let string = 'love'
console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove
```

## Massivlar

O'zgaruvchilardan farqli o'laroq, massiv bir nechta qiymatlarni saqlashi mumkin . Massivdagi har bir qiymat indeksga ega va har bir indeks xotira manzilida mos yozuvlarga ega . Har bir qiymatga ularning indekslari yordamida kirish mumkin . Massiv indeksi noldan boshlanadi va oxirgi element indeksi massiv uzunligidan bittaga kichikdir.

Massiv - bu tartiblangan va o'zgartirilishi mumkin bo'lgan (o'zgartirilishi mumkin bo'lgan) turli xil ma'lumotlar to'plami. Massiv ikki nusxadagi elementlarni va turli xil ma'lumotlar turlarini saqlashga imkon beradi. Massiv bo'sh bo'lishi mumkin yoki u turli xil ma'lumotlar turi qiymatlariga ega bo'lishi mumkin.

### Bo'sh massivni qanday yaratish kerak

JavaScript-da biz massivni turli usullarda yaratishimiz mumkin. Keling, massivni yaratishning turli usullarini ko'rib chiqaylik. Massiv o'zgaruvchisini e'lon qilish uchun let o'rniga const dan foydalanish juda keng tarqalgan . Agar siz const dan foydalansangiz, bu o'zgaruvchi nomini boshqa ishlatmasligingizni anglatadi.

- Massiv konstruktoridan foydalanish

```js
// sintaksis
const arr = Array()
// yoki
// let arr = new Array()
console.log(arr) // []
```

- Kvadrat qavslardan foydalanish([])

```js
// sintaksis
// Bu bo'sh ro'yxat yaratishning eng tavsiya etilgan usuli 
const arr = []
console.log(arr)
```

### Qiymatlar bilan massivni qanday yaratish mumkin

Boshlang'ich qiymatlari bo'lgan massiv. Massiv uzunligini topish uchun biz length xususiyatidan foydalanamiz.

```js
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // raqamlar massivi
const fruits = ['banana', 'orange', 'mango', 'lemon'] // satrlar massivi, mevalar
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // satrlar massivi, sabzavotlar 
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // satrlar massivi, mahsulotlar
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // web-texnologiyalar massivi
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // satrlar massivi, mamlakatlar

// Massiv va uning uzunligini chop eting

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)
```

```sh
Numbers: [0, 3.14, 9.81, 37, 98.6, 100]
Number of numbers: 6
Fruits: ['banana', 'orange', 'mango', 'lemon']
Number of fruits: 4
Vegetables: ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
Number of vegetables: 5
Animal products: ['milk', 'meat', 'butter', 'yoghurt']
Number of animal products: 4
Web technologies: ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']
Number of web technologies: 7
Countries: ['Finland', 'Estonia', 'Denmark', 'Sweden', 'Norway']
Number of countries: 5
```

- Massivda har xil turdagi ma'lumotlar bo'lishi mumkin

```js
const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] //  turli xil ma'lumotlar o'z ichiga olgan arr
console.log(arr)
```

### Split yordamida massiv yaratish

Avvalgi bo'limda ko'rganimizdek, biz satrni turli pozitsiyalarga bo'lishimiz va massivga o'zgartirishimiz mumkin. Keling, quyidagi misollarni ko'rib chiqaylik.

```js
let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')

console.log(words)
// matnda faqat so'zlarni qanday qilib olish mumkinligini o'ylaydigan maxsus belgilar mavjud 
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]
```

### Indeks yordamida massiv elementlariga kirish

Biz massivdagi har bir elementga ularning indeksidan foydalanamiz. Massiv indeksi 0 dan boshlanadi. Quyidagi rasmda massivdagi har bir elementning indeksi aniq ko'rsatilgan.

<!-- ![arr index](../images/array_index.png) -->

```js
const fruits = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[0] // biz uning indeksidan foydalanib birinchi elementga kiramiz.

console.log(firstFruit) // banana

secondFruit = fruits[1]
console.log(secondFruit) // orange

let lastFruit = fruits[3]
console.log(lastFruit) // lemon
// Oxirgi indeksni quyidagicha hisoblash mumkin

let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]

console.log(lastFruit)  // lemon
```

```js
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]  // raqamlar toʻplami

console.log(numbers.length)  // => massiv hajmini bilish uchun, qaysi 6
console.log(numbers)         // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0])      //  -> 0
console.log(numbers[5])      //  -> 100

let lastIndex = numbers.length - 1;
console.log(numbers[lastIndex]) // -> 100
```

```js
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // Veb-texnologiyalar ro'yxati

console.log(webTechs)        // barcha massiv elementlari 
console.log(webTechs.length) // => massiv hajmini bilish uchun 7 ta 
console.log(webTechs[0])     //  -> HTML
console.log(webTechs[6])     //  -> MongoDB

let lastIndex = webTechs.length - 1
console.log(webTechs[lastIndex]) // -> MongoDB
```

```js
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
] // Davlatlar ro'yxati

console.log(countries)      // -> barcha mamlakatlar
console.log(countries[0])   //  -> Albania
console.log(countries[10])  //  -> Kenya

let lastIndex = countries.length - 1;
console.log(countries[lastIndex]) //  -> Kenya
```

```js
const shoppingCart = [
  'Milk',
  'Mango',
  'Tomato',
  'Potato',
  'Avocado',
  'Meat',
  'Eggs',
  'Sugar'
] // Oziq-ovqat mahsulotlari ro'yxati

console.log(shoppingCart) // -> barcha mahsulotlar
console.log(shoppingCart[0]) //  -> Milk
console.log(shoppingCart[7]) //  -> Sugar

let lastIndex = shoppingCart.length - 1;
console.log(shoppingCart[lastIndex]) //  -> Sugar
```

### Massiv elementini o'zgartirish

Massiv o'zgaruvchan (o'zgartirilishi mumkin). Massiv yaratilgandan so'ng, biz massiv elementlarining tarkibini o'zgartirishimiz mumkin.

```js
const numbers = [1, 2, 3, 4, 5]
numbers[0] = 10      // 0 indeksidagi 1 ni 10 
numbers[1] = 20      // indeks 1 dan 20 gacha

console.log(numbers) // [10, 20, 3, 4, 5]

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

countries[0] = 'Afghanistan'  // Albaniyani Afg'oniston bilan almashtirish
let lastIndex = countries.length - 1
countries[lastIndex] = 'Korea' // Keniya o'rniga Koreya

console.log(countries)
```

```sh
["Afghanistan", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Korea"]
```

### Massivni manipulyatsiya qilish usullari

Massivni manipulyatsiya qilishning turli usullari mavjud. Massivlar bilan ishlashning mavjud usullaridan ba'zilari quyidagilardir:_Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift_

#### Massiv konstruktori

Array: massiv yaratish uchun.

```js
const arr = Array() // bo'sh massiv 
console.log(arr)

const eightEmptyValues = Array(8) // sakkizta bo'sh qiymat  konsolini yaratadi 
console.log(eightEmptyValues) // [bo'sh x 8]
```

#### To'ldirish bilan statik qiymatlarni yaratish

fill: massivning barcha elementlarini statik qiymat bilan to'ldiring

```js
const arr = Array() //  bo'sh massiv yaratish
console.log(arr)

const eightXvalues = Array(8).fill('X') // "X" qiymati bilan to'ldirilgan sakkizta element qiymatini yaratadi 
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0) // '0' qiymati bilan to'ldirilgan sakkizta element qiymatini yaratadi
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4) //'4' qiymati bilan to'ldirilgan 4 element qiymatini yaratadi
console.log(four4values) // [4, 4, 4, 4]
```

#### Concat yordamida massivni birlashtirish

concat:Ikki massivni birlashtirish uchun.

```js
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]
```

```js
const fruits = ['banana', 'orange', 'mango', 'lemon']                 // mevalar 
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // sabzavot 
const fruitsAndVegetables = fruits.concat(vegetables)                 // ikkita massivni birlashtirish

console.log(fruitsAndVegetables)
```

```sh
["banana", "orange", "mango", "lemon", "Tomato", "Potato", "Cabbage", "Onion", "Carrot"]
```

#### Massiv uzunligini olish

Length:Massiv hajmini bilish uchun

```js
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.length) // ->  5 - massivning o'lchami
```

#### arr massivida indeks elementini olish

indexOf:Massivda element mavjudligini tekshirish uchun. Agar u mavjud bo'lsa, u indeksni qaytaradi, aks holda u -1 ni qaytaradi.

```js
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.indexOf(5)) // -> 4
console.log(numbers.indexOf(0)) // -> -1
console.log(numbers.indexOf(1)) // -> 0
console.log(numbers.indexOf(6)) // -> -1
```

Element massivda mavjudligini tekshiring.

- Ro'yxatdagi narsalarni tekshiring
  
```js
// massivda banan mavjudligini tekshiramiz

const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana')  // 0

if(index != -1){
   console.log('Bu meva massivda mavjud')  
} else {
    console.log('Bu meva massivda mavjud emas')
}
// Bu meva massivda mavjud

// biz bu yerda ternar operatori( shart ? true bo'lsa : false bo'lsa)dan ham foydalanishimiz mumkin
index != -1 ? console.log('This fruit does exist in the array'): console.log('This fruit does not exist in the array')

// Keling, massivda avakado mavjudligini tekshiramiz
let indexOfAvocado = fruits.indexOf('avocado')  // -1, agar element topilmasa indeks -1
if(indexOfAvocado!= -1){
   console.log('Bu meva massivda mavjud')  
} else {
    console.log('Bu meva massivda mavjud emas')
}
// Bu meva massivda mavjud emas
```

#### Massivdagi elementning oxirgi indeksini olish

lastIndexOf: Bu massivdagi oxirgi elementning o'rnini beradi. Agar mavjud bo'lsa, u indeksni qaytaradi, aks holda u -1 ni qaytaradi.

```js
const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers.lastIndexOf(2)) // 7
console.log(numbers.lastIndexOf(0)) // -1
console.log(numbers.lastIndexOf(1)) //  6
console.log(numbers.lastIndexOf(4)) //  3
console.log(numbers.lastIndexOf(6)) // -1
```

includes:Massivda element mavjudligini tekshirish uchun. Agar u mavjud bo'lsa, u rostni qaytaradi, aksincha, yolg'onni qaytaradi.

```js
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.includes(5)) // true
console.log(numbers.includes(0)) // false
console.log(numbers.includes(1)) // true
console.log(numbers.includes(6)) // false

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // Veb-texnologiyalar 

console.log(webTechs.includes('Node'))  // true
console.log(webTechs.includes('C'))     // false
```

#### Massivni tekshirish

Array.isArray:Ma'lumotlar turi massiv ekanligini tekshirish uchun

```js
const numbers = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers)) // true

const number = 100
console.log(Array.isArray(number)) // false
```

#### Massivni satrga aylantirish

toString:Massivni satrga aylantiradi

```js
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.toString()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook
```

#### Massiv elementlarini birlashtirish

join: U massiv elementlarini birlashtirish uchun ishlatiladi, biz birlashtirish usulida o'tkazgan argument massivga qo'shiladi va satr sifatida qaytariladi. Odatiy bo'lib, u vergul bilan birlashtiriladi, lekin biz elementlar orasiga qo'shilishi mumkin bo'lgan turli qator parametrlarini o'tkazishimiz mumkin.

```js
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.join()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')) //AsabenehMathiasEliasBrook
console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // Veb-texnologiyalar 

console.log(webTechs.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechs.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"
```

#### Massiv elementlarini kesish

Slice: diapazondagi bir nechta elementlarni kesish uchun. Bu ikkita parametrni oladi: boshlang'ich va tugatish pozitsiyasi. U yakuniy pozitsiyani o'z ichiga olmaydi.

```js
  const numbers = [1,2,3,4,5]

  console.log(numbers.slice()) // -> u barcha elementlarni nusxalab ko'chiradi
  console.log(numbers.slice(0)) // -> u barcha elementlarni nusxalab ko'chiradi
  console.log(numbers.slice(0, numbers.length)) // u barcha elementlarni nusxalab ko'chiradi
  console.log(numbers.slice(1,4)) // -> [2,3,4] // u yakuniy pozitsiyani o'z ichiga olmaydi
```

#### Massivni tarkibini o'zgartirish usuli

Splice: Bu uchta parametrni oladi: Boshlang'ich pozitsiyasi, olib tashlanadigan martalar soni va qo'shiladigan elementlar soni.

```js
  const numbers = [1, 2, 3, 4, 5]

  console.log(numbers.splice())                // -> barcha elementlarni olib tashlang

```

```js
  const numbers = [1, 2, 3, 4, 5]
  console.log(numbers.splice(0,1))            // birinchi elementni olib tashlang
```

```js
  const numbers = [1, 2, 3, 4, 5, 6];
  console.log(numbers.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] // u uchta elementni olib tashlaydi va uchta elementni almashtiradi
```

#### Push yordamida massivga element qo'shish

Push: oxiriga element qo'shish. Mavjud massivning oxiriga element qo'shish uchun biz push usulidan foydalanamiz.

```js
// sintaksis
const arr  = ['item1', 'item2','item3']
arr.push('new item')

console.log(arr)
// ['item1', 'item2','item3','new item']
```

```js
const numbers = [1, 2, 3, 4, 5]
numbers.push(6)

console.log(numbers) // -> [1,2,3,4,5,6]

numbers.pop() // -> oxirdan bitta elementni olib tashlang
console.log(numbers) // -> [1,2,3,4,5]
```

```js
let fruits = ['banana', 'orange', 'mango', 'lemon']
fruits.push('apple')

console.log(fruits)    // ['banana', 'orange', 'mango', 'lemon', 'apple']

fruits.push('lime')
console.log(fruits)   // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']
```

#### Pop yordamida oxirgi elementni olib tashlash

pop: Oxirgi elementni olib tashlash.

```js
const numbers = [1, 2, 3, 4, 5]
numbers.pop() // -> oxirgi bitta elementni olib tashlash

console.log(numbers) // -> [1,2,3,4]
```

#### Elementni boshidan olib tashlash

shift: Massiv boshidan bitta massiv elementini olib tashlash.

```js
const numbers = [1, 2, 3, 4, 5]
numbers.shift() // -> boshlang'ich bitta elementni olib tashlang

console.log(numbers) // -> [2,3,4,5]
```

#### Elementni boshidan qo'shish

unshift: Massiv elementini massiv boshiga qo‘shish.

```js
const numbers = [1, 2, 3, 4, 5]
numbers.unshift(0) // -> boshiga bitta element qo'shish

console.log(numbers) // -> [0,1,2,3,4,5]
```

#### Massiv tartibini teskari aylantirish

reverse: massiv tartibini teskari aylantiradi.

```js
const numbers = [1, 2, 3, 4, 5]
numbers.reverse() // -> teskari massiv tartibi 

console.log(numbers) // [5, 4, 3, 2, 1]

numbers.reverse()
console.log(numbers) // [1, 2, 3, 4, 5]
```

#### Massivdagi elementlarni saralash

sort: massiv elementlarini o'sish tartibida joylashtirish. Saralash qayta qo'ng'iroq qilish funksiyasini oladi, biz keyingi bo'limlarda qayta qo'ng'iroq qilish funksiyasi bilan tartiblashdan qanday foydalanishimizni ko'rib chiqamiz.

```js
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

webTechs.sort()
console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs.reverse() // tartiblashdan so'ng
console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]
```

### Massivlar massivi

Massiv turli xil ma'lumotlar turlarini, shu jumladan massivning o'zini ham saqlashi mumkin. Keling, massivlar massivini yarataylik

```js
const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0]) // [1, 2, 3]

 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
 console.log(fullStack.length)  // 2
 console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
 console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]
```

## Masalalar 

### String masalalari
1. toUpperCase() methodidan foydalanib, barcha satr belgilarini bosh harflarga o'zgartiring
2. toLowerCase() methodi yordamida barcha qator belgilarni kichik harflarga o'zgartiring
3. substr() yoki substring() methodidan foydalanib, satrning birinchi so'zini kesib oling (bo'laklang).
4. "HTML, CSS, JavaScript, NodeJS" iborasidan "JavaScript" iborasini ajratib oling.
5. "HTML, CSS, JavaScript, NodeJS" dan includes() usuli yordamida satrda Script so‘zi borligini tekshiring
6. "HTML, CSS, JavaScript, NodeJS" iborasini split() usuli yordamida satrni massivga ajrating
7. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split satrni vergul orqali massivga ajrating.

### Array masalalari

```js
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

let countires = [
  "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"
]

```

1. console.log() yordamida massivlarni chop eting
2. Massivdagi davlatlar sonini chop eting
3. Birinchi davlat, o'rta va oxirgi davlatni chop eting
4. Har bir davlatni chop eting
5. Har bir davlat nomini birma-bir bosh harfga o'zgartiring va ularni chop eting
6. Massivni jumla sifatida chop eting: "Facebook, Google, Microsoft, Apple, IBM, Oracle va Amazon yirik IT kompaniyalari"
7. Companies qatorida ma'lum bir kompaniya mavjudligini tekshiring. Agar u mavjud bo'lsa, kompaniya qaytaring, aks holda kompaniya topilmaydi
8. Bir nechta "o" ga ega davlatlarni filtrlash usulisiz filtrlang
9. Sort () usuli yordamida massivni tartiblang
10. Reverse () usuli yordamida massivni teskari aylantiring
11. Massivdan dastlabki 3 ta davlatni ajratib oling
12. Massivdan oxirgi 3 ta davlatni ajratib oling
13. Massivni o'rtasidagi IT kompaniyani yoki kompaniyalarni ajratib oling
14. Birinchi IT kompaniyaini massivdan olib tashlang
15. O'rta IT kompaniyani yoki kompaniyalarni massivdan olib tashlang
16. Massivdan oxirgi It kompaniyasini olib tashlang
17. Barcha IT kompaniyxalarini olib tashlang








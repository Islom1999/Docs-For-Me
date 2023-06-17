# 📔 2-dars

[[toc]]

## Math Obyekti

JavaScript-da Math ob'ekti raqamlar bilan ishlashning ko'plab usullarini taqdim etadi.

```js
const PI = Math.PI

console.log(PI)                            // 3.141592653589793

// Eng yaqin raqamga yaxlitlash 
// agar yuqori bo'lsa, .5 yuqoriga, agar kamroq bo'lsa, 0,5 pastga yaxlitlash

console.log(Math.round(PI))                // 3 dan qiymatlarni eng yaqin raqamga yaxlitlang

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3 pastga yaxlitlash

console.log(Math.ceil(PI))                 // 4 tepaga yaxlitlash

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, minimal qiymatni qaytaradi

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, maksimal qiymatni qaytaradi

const randNum = Math.random() // 0 dan 0.999999 gacha bo'lgan tasodifiy sonni yaratadi
console.log(randNum)

// 0 dan 10 gacha tasodifiy son yarataylik

const num = Math.floor(Math.random () * 11) // 0 dan 10 gacha bo'lgan tasodifiy sonni yaratadi
console.log(num)

//Mutlaq qiymat
console.log(Math.abs(-10))      // 10

//Kvadrat ildiz
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Daraja
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logarifm
// X ning E asosi bilan natural logarifmni qaytaradi, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

```

#### Tasodifiy raqamlar generatori

JavaScript Matematik Ob'ektida 0 dan 0.999999999 gacha raqamlarni hosil qiluvchi random() usuli raqamli generator mavjud...

```js
let randomNum = Math.random() // generates 0 to 0.999...
```

Keling, 0 dan 10 gacha tasodifiy sonni yaratish uchun random() usulidan qanday foydalanishimiz mumkinligini ko'rib chiqamiz:

```js
let randomNum = Math.random()         // 0 dan 0.999 gacha hosil qiladi...
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)         // bu beradi: min 0 va maksimal 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // bu 0 dan 10 gacha bo'lgan qiymatlarni beradi
```



## Boolean tiplari

Boolean ma'lumotlar turi ikkita qiymatdan birini ifodalaydi: _true_ yoki _false_. Mantiqiy qiymat haqiqiy yoki noto'g'ri. Taqqoslash operatorini ishga tushirganingizda ushbu ma'lumotlar turlaridan foydalanish aniq bo'ladi.Har qanday taqqoslash haqiqiy yoki noto'g'ri bo'lgan mantiqiy qiymatni qaytaradi.

**Misol: Boolean Qiymatlari**

```js
let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false
```

Biz mantiqiy qiymatlar to'g'ri yoki noto'g'ri ekanligiga kelishib oldik.

### Haqiqiy qiymatlar

- Noldan tashqari barcha raqamlar (musbat va salbiy) haqiqiydir
- Bo'sh satr('')dan tashqari barcha satrlar haqiqiydir
- Boolean true

### Yolg'on qiymatlar

- 0
- 0n
- null
- undefined
- NaN
- Boolean false
- '', "", ``, bo'sh satr

It is good to remember those truthy values and falsy values. In later section, we will use them with conditions to make decisions.


## Ma'lumotlar turlarini tekshirish va uzatish

### Ma'lumotlar turlarini tekshirish

Muayyan o'zgaruvchining ma'lumotlar turini tekshirish uchun biz _typeof_ methodidan foydalanamiz.

**Misol:**

```js
// Turli xil javascript ma'lumotlar turlari
// Keling, turli xil ma'lumotlar turlarini e'lon qilaylik

let firstName = 'Asabeneh'      // string
let lastName = 'Yetayeh'        // string
let country = 'Finland'         // string
let city = 'Helsinki'           // string
let age = 250                   // number, bu mening haqiqiy yoshim emas, bu haqda tashvishlanmang ;)
let job                         // undefined, chunki qiymat belgilanmagan

console.log(typeof 'Asabeneh')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object
```

### Ma'lumotlar turini o'zgartirish (casting)

- Casting: Bir ma'lumot turini boshqa ma'lumotlar turiga aylantirish. Biz ishlatamiz _parseInt()_, _parseFloat()_, _Number()_, _+ sign_, _str()_
  Biz arifmetik amallarni bajarganimizda, satr raqamlari birinchi navbatda butun songa yoki floatga aylantirilishi kerak, agar u xato qaytarsa.

#### Satr ni Butun songa

Biz satr sonini raqamga aylantirishimiz mumkin. Qo'shtirnoq ichidagi har qanday raqam qator raqamidir. Satr raqamiga misol: '10', '5' va boshqalar.
Biz quyidagi usullardan foydalanib satrni raqamga aylantirishimiz mumkin:

- parseInt()
- Number()
- Plus belgisi(+)

```js
let num = '10'
let numInt = parseInt(num)
console.log(numInt) // 10
```

```js
let num = '10'
let numInt = Number(num)

console.log(numInt) // 10
```

```js
let num = '10'
let numInt = +num

console.log(numInt) // 10
```

#### Satr ni Float(vergulli) songa

Biz satr float raqamini float raqamiga o'zgartirishimiz mumkin. Qo'shtirnoq ichidagi har qanday suzuvchi raqam qatorli float raqamidir. Satr float raqamiga misol: '9.81', '3.14', '1.44' va boshqalar.
Biz quyidagi usullar yordamida string floatni raqamga aylantirishimiz mumkin:

- parseFloat()
- Number()
- Plus belgisi(+)

```js
let num = '9.81'
let numFloat = parseFloat(num)

console.log(numFloat) // 9.81
```

```js
let num = '9.81'
let numFloat = Number(num)

console.log(numFloat) // 9.81
```

```js
let num = '9.81'
let numFloat = +num

console.log(numInt) // 9.81
```

#### Float(vergulli) sonni Butun songa

Biz float sonlarni butun sonlarga o'zgartira olamiz.
floatni int ga aylantirish uchun quyidagi usuldan foydalanamiz:

- parseInt()
  
```js
let num = 9.81
let numInt = parseInt(num)

console.log(numInt) // 9
```

🌕  Siz ajoyibsiz. Siz hozirgina 2-kun sinovlarini yakunladingiz va siz buyuklik sari ikki qadam oldindasiz. Endi miyangiz va mushaklaringiz uchun bir nechta mashqlarni bajaring.




## Conditionals (Shartlar)

Shartli bayonotlar turli shartlarga asoslangan qarorlar qabul qilish uchun ishlatiladi. Odatiy bo'lib, JavaScript skriptidagi bayonotlar yuqoridan pastgacha ketma-ket bajariladi. Agar ishlov berish mantig'i shuni talab qilsa, ketma-ket bajarilish jarayoni ikki yo'l bilan o'zgartirilishi mumkin:

- Shartli bajarish: agar ma'lum bir ifoda to'g'ri bo'lsa, bir yoki bir nechta bayonotlar bloki bajariladi.
- Takroriy bajarilish: bir yoki bir nechta bayonotlar bloki ma'lum bir ifoda to'g'ri bo'lsa, takroriy bajariladi. Ushbu bo'limda if , else , else if iboralarini ko'rib chiqamiz . Oldingi bo'limlarda biz o'rgangan taqqoslash va mantiqiy operatorlar bu erda foydali bo'ladi.

Shartlar quyidagi usullar yordamida amalga oshirilishi mumkin:


- if
- if else
- if else if else
- switch
- uchlik operator

### If

JavaScript va boshqa dasturlash tillarida _if_ kalit so'zi shartning to'g'ri yoki yo'qligini tekshirish va blok kodini bajarish uchun ishlatiladi. If shartini yaratish uchun bizga _if_ kalit so'zi, qavs ichidagi shart va jingalak qavs ({}) ichidagi kod bloki kerak bo'ladi .

```js
// sintaksis
if (condition) {
  //kodning bu qismi haqiqat sharti uchun ishlaydi
}
```

**Misol:**

```js
let num = 3
if (num > 0) {
  console.log(`${num} musbat son`)
}
//  3 musbat son
```

Yuqoridagi shart misolida ko'rib turganingizdek, 3 0 dan katta, shuning uchun u ijobiy sondir. Shart to'g'ri edi va kod bloki bajarildi. Biroq, agar shart noto'g'ri bo'lsa, biz hech qanday natijani ko'ra olmaymiz.

```js
let isRaining = true
if (isRaining) {
  console.log('Yomg\'ir paltongizni olishni unutmang.')
}
```

Xuddi shu narsa ikkinchi shartga ham tegishli, agar isRaining noto'g'ri bo'lsa, if bloki bajarilmaydi va biz hech qanday chiqishni ko'rmayapmiz. Noto'g'ri holatning natijasini ko'rish uchun bizda boshqa blok bo'lishi kerak .

### If Else

Agar shart rost bo'lsa, birinchi blok bajariladi, bo'lmasa boshqa shart bajariladi.

```js
// sintaksis 
if (condition) {
  // kodning bu qismi to'g'ri shart uchun ishlaydi
} else {
  // kodning bu qismi noto'g'ri holat uchun ishlaydi
}
```

```js
let num = 3
if (num > 0) {
  console.log(`${num} musbat son`)
} else {
  console.log(`${num} musbat son`)
}
//  3 musbat son

num = -3
if (num > 0) {
  console.log(`${num} musbat son`)
} else {
  console.log(`${num} musbat son`)
}
//  -3 musbat son
```

```js
let isRaining = true
if (isRaining) {
  console.log('Sizga yomg\'ir palto kerak.')
} else {
  console.log('Yomg\'ir paltosi kerak emas.')
}
// Sizga yomg'ir palto kerak.

isRaining = false
if (isRaining) {
  console.log('Sizga yomg\'ir palto kerak.')
} else {
  console.log('Yomg\'ir paltosi kerak emas.')
}
// Yomg\'ir paltosi kerak emas.
```

Oxirgi shart noto'g'ri, shuning uchun else bloki bajarildi. Agar bizda ikkitadan ortiq shart bo'lsa-chi? Bunday holda, biz _else if_ shartlaridan foydalanamiz.

### If  Else if Else

Kundalik hayotimizda biz har kuni qaror qabul qilamiz. Biz bir yoki ikkita shartni tekshirib emas, balki bir nechta shartlarga asoslanib qaror qabul qilamiz.
Bizning kundalik hayotimizga o'xshab, dasturlash ham shartlarga to'la. Agar bizda bir nechta shartlar mavjud bo'lsa, biz _else if_ dan foydalanamiz .

```js
// sintaksis 
if (condition) {
     // code
} else if (condition) {
   // code
} else {
    //  code

}
```

**Misol:**

```js
let a = 0
if (a > 0) {
  console.log(`${a} musbat son`)
} else if (a < 0) {
  console.log(`${a} musbat son`)
} else if (a == 0) {
  console.log(`${a} nolga teng`)
} else {
  console.log(`${a} raqam emas`)
}
```

```js
// if else if else
let weather = 'quyoshli'
if (weather === 'yomg\'irli') {
  console.log('Sizga yomg\'ir palto kerak.')
} else if (weather === 'bulutli') {
  console.log('Havo sovuq bo\'lishi mumkin, sizga kurtka kerak.')
} else if (weather === 'quyoshli') {
  console.log('Bemalol tashqariga chiqing.')
} else {
  console.log('Yomg\'ir kiyimi kerak emas.')
}
```

### Switch

Switch - bu **if else if else else** ga alternativdir. Ya'ni ma'nosi bir lekin sintaksisi qisqa va ixcham.
Switch bayonoti kalit so'zdan keyin qavs va kod blokidan boshlanadi. Kod blokida bizda turli holatlar bo'ladi. Agar switch bayonotidagi qavsdagi qiymat case qiymatiga mos kelsa, Case bloki ishlaydi. Tanaffus bayonoti shart bajarilgandan keyin kod bajarilishi pasaymasligi uchun bajarishni tugatishdir. Standart blok barcha holatlar shartni qoniqtirmasa ishlaydi.
```js
switch(caseValue){
  case 1:
    // code
    break
  case 2:
   // code
   break
  case 3:
  // code
  default:
   // code
}
```

```js
let weather = 'bulutli'
switch (weather) {
  case 'yomg\'irli':
    console.log('Sizga yomg\'ir palto kerak.')
    break
  case 'bulutli':
    console.log('Havo sovuq bo\'lishi mumkin, sizga kurtka kerak.')
    break
  case 'quyoshli':
    console.log('Bemalol tashqariga chiqing.')
    break
  default:
    console.log('Yomg\'ir kiyimi kerak emas.')
}

// Switch ko'roq misollarda
let dayUserInput = prompt('Bugun qaysi kun ?') // Brouzer orqali kiritasiz
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Bugun  Monday')
    break
  case 'tuesday':
    console.log('Bugun  Tuesday')
    break
  case 'wednesday':
    console.log('Bugun  Wednesday')
    break
  case 'thursday':
    console.log('Bugun  Thursday')
    break
  case 'friday':
    console.log('Bugun  Friday')
    break
  case 'saturday':
    console.log('Bugun  Saturday')
    break
  case 'sunday':
    console.log('Bugun  Sunday')
    break
  default:
    console.log('Bu hafta kuni emas')
}

```

// Shartlardan foydalanishga misollar

```js
let num = prompt('Raqamni kiriting');
switch (true) {
  case num > 0:
    console.log('Raqam musbat');
    break;
  case num == 0:
    console.log('Raqamlar nolga teng');
    break;
  case num < 0:
    console.log('Raqam manfiy');
    break;
  default:
    console.log('Kiritilgan qiymat raqam emas edi');
}
```

### Ternar Operatorlar

Shartlarni yozishning yana bir usuli - uchlik operatorlardan foydalanish. Biz buni boshqa bo'limlarda ko'rib chiqdik, lekin bu erda ham eslatib o'tishimiz kerak.

```js
// isRaining => yomg'ir yog'ayaptimi = true
let isRaining = true
isRaining
  ? console.log('Sizga yomg\'ir palto kerak.')
  : console.log('Yomg\'ir paltosi kerak emas.')
```


## 💻 Mashqlar: 

### Mashqlar: Level 1

1. **ism, familiya, mamlakat, shahar, yosh, isMarried, yil** o'zgaruvchisini e'lon qiling va unga qiymat bering va har xil ma'lumotlar turlarini tekshirish uchun **typeof** operatoridan foydalaning.
2. **"10" turi 10 ga teng** ekanligini tekshiring
3. **parseInt('9.8') 10 ga teng** ekanligini tekshiring
4. **Console.log() dan foydalanmasdan** avval quyidagi taqqoslash ifodasi natijasini aniqlang. Natijani aniqlaganingizdan so'ng, uni **console.log()** yordamida tasdiqlang.
   1. 4 > 3
   2. 4 >= 3
   3. 4 < 3
   4. 4 <= 3
   5. 4 == 4
   6. 4 === 4
   7. 4 != 4
   8. 4 !== 4
   9. 4 != '4'
   10. 4 == '4'
   11. 4 === '4'

5. **Console.log()** dan foydalanmasdan avval quyidagi ifodalarning natijasini aniqlang. Natijani aniqlaganingizdan so'ng, uni **console.log()** yordamida tasdiqlang.
   1. 4 > 3 && 10 < 12
   2. 4 > 3 && 10 > 12
   3. 4 > 3 || 10 < 12
   4. 4 > 3 || 10 > 12
   5. !(4 > 3)
   6. !(4 < 3)
   7. !(false)
   8. !(4 > 3 && 10 < 12)
   9. !(4 > 3 && 10 > 12)
   10. !(4 === '4')

### Mashqlar: Level 2

1. **promptda ism** kiriting agar ismingiz uzunligi 7 dan katta bo'lsa, ismingiz uzun, yoki ismingiz qisqa deb **consolega** yozuvchi dastur tuzing.
2. **promptda ism va familiya** kiriting, keyin ismingiz uzunligi va familiyangiz uzunligini solishtiring **consolega** natijasini chiqaring natijalar **1)ismingiz uzun 2)familiyangiz uzun 3)ikkalasi teng**
3. **prompt da raqam** kiriting va shu raqamga qarab **havta kunlarini** chiqaring, **1 bo'lsa dushanba 2 bo'lsa sheshanba va hokazo** agar raqam 1dan 7gacha oraliqda bo'lmasa **unaqa kun yo'q** <br> (if shart operatorida ishlang).
3. **prompt da raqam** kiriting va shu raqamga qarab **havta kunlarini** chiqaring, **1 bo'lsa dushanba 2 bo'lsa sheshanba va hokazo** agar raqam 1dan 7gacha oraliqda bo'lmasa **unaqa kun yo'q** <br> (switch case operatorida ishlang).




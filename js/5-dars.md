# 📔 5-dars

## Tsikllar

Hayotda qiladigan ko'p harakatlarimiz takrorlash bilan to'la. Tasavvur qiling-a, agar sizdan console.log() yordamida 0 dan 100 gacha chop etishingizni so'rasam. Ushbu oddiy vazifani bajarish uchun sizga 2 dan 5 minutgacha vaqt ketishi mumkin, bunday zerikarli va takroriy vazifani tsikl yordamida bajarish mumkin. Agar siz videolarni tomosha qilishni afzal ko'rsangiz, [video darsliklarni ko'rishingiz mumkin](https://www.youtube.com/channel/UCM4xOopkYiPwJqyKsSqL9mw)

Dasturlash tillarida takrorlanuvchi topshiriqlarni bajarish uchun biz har xil turdagi sikllardan foydalanamiz. Quyidagi misollar JavaScript va boshqa dasturlash tillarida tez-tez ishlatiladigan sikllardir.

### for tsikli

```js
// For tsikli tuzilishi 
for(initialization, condition, increment/decrement){
  // kod shu yerda 
}
```

```js
for(let i = 0; i <= 5; i++){
  console.log(i)
}

// 0 1 2 3 4 5
```

```js
for(let i = 5; i >= 0; i--){
  console.log(i)
}

// 5 4 3 2 1 0
```

```js
for(let i = 0; i <= 5; i++){
  console.log(`${i} * ${i} = ${i * i}`)
}
```

```sh
0 * 0 = 0
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25
```

```js
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}

// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]
```

Massivdagi barcha elementlarni qo'shish

```js
const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
  sum  = sum + numbers[i]  // qisqartirilishi mumkin, sum += numbers[i]

}

console.log(sum)  // 15
```

Mavjud massiv asosida yangi massiv yaratish

```js
const numbers = [1, 2, 3, 4, 5]
const newArr = []
let sum = 0
for(let i = 0; i < numbers.length; i++){
  newArr.push( numbers[i] ** 2)

}

console.log(newArr)  // [1, 4, 9, 16, 25]
```

```js
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}

console.log(newArr)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
```

### while tsikli

```js
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

// 0 1 2 3 4 5
```

### do while tsikli

```js
let i = 0
do {
  console.log(i)
  i++
} while (i <= 5)

// 0 1 2 3 4 5
```

### for of tsikli

Biz massivlar uchun _for of_ loop dan foydalanamiz. Agar biz massivdagi har bir elementning indeksiga qiziqmasangiz, bu massivni takrorlashning juda qulay usuli.

```js
for (const element of arr) {
  // kod shu yerda 
}
```

```js

const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num)
}

// 1 2 3 4 5

for (const num of numbers) {
  console.log(num * num)
}

// 1 4 9 16 25

// massivdagi barcha raqamlarni qo'shsak 
let sum = 0
for (const num of numbers) {
  sum = sum + num  // shu tarzda ham qisqartirilishi mumkin, sum += num
}
console.log(sum) // 15

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

for (const tech of webTechs) {
  console.log(tech.toUpperCase())
}

// HTML CSS JAVASCRIPT REACT NODE MONGODB

for (const tech of webTechs) {
  console.log(tech[0]) // har bir elementning faqat birinchi harfini olish,  H C J R N M
}

```

```js
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr = []
for(const country of countries){
  newArr.push(country.toUpperCase())
}

console.log(newArr)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
```

### break

Break tsiklni buzish(to'xtatish) uchun ishlatiladi.

```js
for(let i = 0; i <= 5; i++){
  if(i == 3){
    break
  }
  console.log(i)
}

// 0 1 2
```

Yuqoridagi kod, agar takrorlash jarayonida 3 topilsa, to'xtaydi.

### continue

Biz ma'lum bir takrorlashni o'tkazib yuborish uchun *continue*  kalit so'zidan foydalanamiz .

```js
for(let i = 0; i <= 5; i++){
  if(i == 3){
    continue
  }
  console.log(i)
}

// 0 1 2 4 5
```

## Masalalar

1. For tsikli yordamida 0 dan 10 gacha takrorlang, while va do while yordamida xuddi shunday qiling
2. For tsikli yordamida 10 dan 0 gacha takrorlang, while va do while yordamida xuddi shunday qiling
3. For tsikli yordamida 0 dan n gacha takrorlang
4. Quyidagi karra jadvalini chop etish uchun Tsikldan foydalaning:
```js
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
```
5. 0 dan 100 gacha takrorlash va faqat juft raqamlarni chop etish uchun for tsiklidan foydalaning

6. 0 dan 100 gacha takrorlash va faqat toq raqamlarni chop etish uchun for tsikli dan foydalaning

7. 0 dan 100 gacha takrorlash va faqat tub sonlarni chop etish uchun for tsikli dan foydalaning

8. 0 dan 100 gacha takrorlash va barcha raqamlarning yig'indisini chop etish uchun for tsikli dan foydalaning.




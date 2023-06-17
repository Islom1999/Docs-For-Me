# 📔 3-dars


## Amalyot (if, else, switch, case)

::: details Masalalar


:::
## Masalalar 

### if, else - masalalar
1. **a** butun son berilgan. Agar a soni juft bo'lsa **consolega** **juft** yoki **toq** bo'lasa consolega toq natijani chiqaring.
2. **a** butun son berilgan. Agar a soni **musbat** bo'lsa consolega **musbat**, **manfiy** bo'lsa consolega **manfiy** yoki son **nolga** teng bo'lsa consolega **nol**  natijani chiqaring.
3. **3ta** son berilgan **a,b,c** sonlar. **a** **b** dan katta **b** **c** dan katta rostlikka tekshiring.
4. **a, b, c,** son berilgan. **b son a va c** sonlarni orasida yotadi.
5. **a, b sonlar** berilgan sonlarni ikalasi ham toq sonligini tekshiring.
6. **a,b,c,d** sonlar berilgan barchasi musbatliggini tekshiring.
7. **a,b,c** sonlar berilgan kamida ikkitasi musbatligini tekshiring.
8. **hafta kunlari** uchun **a soni** berilgan songa qarab hafta kunlarini nomini chiqaring.
9. **Telefon nomer kodi** uchun **a soni** orqali qaysi kompaniya ekanligini chiqaring.
10. **Butun son** berilgan agar son **musbat** bo'lsa sonni 3 ga oshiring, **manfiy** bo'lsa unda 2ga kamaytiring.
11. **a va b** ikkita butun son berilgan **kattasini** aniqlovchi dastur tuzing.
12. **a,b,c** uchta ta butun son berilgan eng **kattasini** aniqlovchi dastur tuzing.
13. **a,b,c** uchta ta butun son berilgan eng **kichigini** aniqlovchi dastur tuzing.
14. **a butun son** berilgan shu songa qarab musbat, manfiyligi va juft, toqligini consolega chiqaruvchi dastur tuzing. <br>
**Masalan:**
```js
a = 3 // toq, musbat 
a = 4 // juft, musbat 
a = -3 // toq, manfiy 
a = -4 // juft, manfiy 
```
15. **a va b** ikkita butun son berilgan ikki sondan bittasitasi toq bo'lsa consolaga **"bittasi toq"**, ikkalasi ham toq bo'lsa consolega **"ikkalasi ham toq"**, ikkalasi ham juft bo'lsa consolega **"ikkalasi ham juft"** degan natijani chiqaring.
16. a uch xonali son berilgan. Shu sonning har bir raqamlari har xil ekanligini tekshiring. <br>
**Masalan:**
```js
a = 123   // har hil
a = 268   // har hil
a = 903   // har hil 
a = 707   // har hil emas
a = 111   // har hil emas
a = 223   // har hil emas
```

### switch, case - masalalar

1. **hafta kunlari** uchun **a soni** berilgan songa qarab hafta kunlarini nomini chiqaring.
2. **Telefon nomer kodi** uchun **a soni** orqali qaysi kompaniya ekanligini chiqaring.
3.  **a butun son** berilgan. Shu songa qarab baho natijalarini chiqaruvchi dastur tuzing. <br> **1-yomon, 2-qoniqarsiz, 3-qoniqarli, 4-yaxshi, 5 - alo**
4. **a oy raqami** berilgan Kiritilgan oy qaysi faslga tegishli ekanin chiqaruvchi dastur tuzing.
5. **a, b sonlar** va **c amal** berilgan **c amalga** qarab **a va b sonlar** ustida **amal** bajaruvchi dastur tuzing.


## Date Obyekti
::: details Date Obyekti
Vaqt muhim narsa. Biz muayyan faoliyat yoki hodisaning vaqtini bilishni yaxshi ko'ramiz. JavaScript-da joriy vaqt va sana JavaScript Date Object yordamida yaratilgan. Date obyekti yordamida biz yaratgan ob'ekt sana va vaqt bilan ishlashning ko'plab usullarini taqdim etadi.
Sana ob'ekti qiymatlaridan sana va vaqt ma'lumotlarini olish uchun foydalanadigan usullar get so'zi bilan boshlanadi , chunki u ma'lumot beradi.
_getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay()_

<!-- ![Date time Object](../images/date_time_object.png) -->

### Vaqt ob'ektini yaratish

Vaqt ob'ektini yaratganimizdan so'ng. Vaqt ob'ekti vaqt haqida ma'lumot beradi. Keling, vaqt ob'ektini yarataylik

```js
const now = new Date()
console.log(now) // 2022-yil, 04-yanvar, 00:56:41 GMT+0200 (Sharqiy Yevropa standart vaqti)
```

Biz vaqt ob'ektini yaratdik va biz jadvalda aytib o'tgan get usullari yordamida ob'ektdan istalgan sana-vaqt ma'lumotlariga kirishimiz mumkin.

### To'liq yilni olish

Keling, vaqt ob'ektidan to'liq yilni chiqaramiz yoki olamiz.

```js
const now = new Date()
console.log(now.getFullYear()) // 2022
```

### Oyni olish

Vaqt ob'ektidan oyni chiqaramiz yoki olamiz.

```js
const now = new Date()
console.log(now.getMonth()) // 0, chunki oy yanvar, oy(0-11)
```

### Sanani olish

Vaqt ob'ektidan oyning sanasini chiqaramiz yoki olamiz.

```js
const now = new Date()
console.log(now.getDate()) // 4, chunki oyning kuni 4-kun, kun(1-31)
```

### Kunni olish

Vaqt ob'ektidan haftaning kunini chiqaramiz yoki olamiz.

```js
const now = new Date()
console.log(now.getDay()) //  6, chunki kun shanba, ya'ni 7-kun 
//  yakshanba 0, dushanba 1 va shanba 6 
// ish kunini raqam sifatida olish (0-6)
```

### Soatlarni olish

Vaqt ob'ektidan soatlarni chiqaramiz yoki olamiz.

```js
const now = new Date()
console.log(now.getHours()) // 0, chunki vaqt 00:56:41
```

### Daqiqalarni olish

Vaqt obyektidan daqiqalarni chiqaramiz yoki olamiz.

```js
const now = new Date()
console.log(now.getMinutes()) // 56, chunki vaqt 00:56:41
```

### Soniyalarni olish

Vaqt ob'ektidan soniyalarni chiqaramiz yoki olamiz.


```js
const now = new Date()
console.log(now.getSeconds()) // 41, chunki vaqt 00:56:41
```

### Vaqtni olish

Bu usul 1970-yil 1-yanvardan boshlab millisekundlarda vaqtni beradi. Unix vaqti deb ham ataladi. Unix vaqtini ikki yo'l bilan olishimiz mumkin:

1. _getTime()_ dan foydalanish

```js
const now = new Date() //
console.log(now.getTime()) // 1578092201341,bu 1970-yil 1-yanvardan 2022-yil 4-yanvargacha oʻtgan soniyalar soni 00:56:41
```

1. _Date.now()_ dan foydalanish

```js
const allSeconds = Date.now() //
console.log(allSeconds) // 1578092201341, bu 1970-yil 1-yanvardan 2022-yil 4-yanvargacha oʻtgan soniyalar soni 00:56:41

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true
```

Keling, ushbu qiymatlarni inson o'qiy oladigan vaqt formatiga formatlaylik. Misol:
**Misol:**

```js
const now = new Date()
const year = now.getFullYear() // yil ni qaytaradi
const month = now.getMonth() + 1 // oy(0 - 11) ni qaytaradi
const date = now.getDate() // kun (1 - 31) ni qaytaradi
const hours = now.getHours() // soat (0 - 23) ni qaytaradi
const minutes = now.getMinutes() // daqiqa (0 -59) ni qaytaradi

console.log(`Natija: ${date}/${month}/${year} ${hours}:${minutes}`) // Natija: 4/1/2022 0:56
```

🌕  Sizda cheksiz energiya bor. Siz hozirgina 3-kun sinovlarini yakunladingiz va siz buyuklik sari uch qadam oldindasiz. Endi miyangiz va mushaklaringiz uchun bir nechta mashqlarni bajaring.


:::

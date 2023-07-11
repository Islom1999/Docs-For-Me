# Docker compose

## Docker compose nima

Docker Compose, Docker konteynerlarini birlashtirish, qo'shish va boshqarishning asosiy usulini ta'minlaydigan bir konfiguratsiya fayli formatidir. Uning yordamida bir qator konteynerlarni o'zaro bog'lash, muhit o'zgaruvchanlarini sozlash va o'zgaruvchanlarni boshqarish imkoniyatlariga ega bo'lishingiz mumkin.

Docker Compose fayli, biror bir proyektni tavsiflash uchun ishlatiladi. Ushbu faylda muhit o'zgaruvchanlari, konteynerlarni birlashtirish va ularning sozlamalari, bog'lanishlar va boshqa tadbirlar ta'riflanadi.

Docker Compose faylida quyidagi ma'lumotlar kiritilishi mumkin:

1. Services (Xizmatlar): Kompozitsiyada bo'lishi kerak bo'lgan xizmatlar (konteynerlar) ro'yxati. Har bir xizmat (konteyner) uchun image nomi, portlar, muhit o'zgaruvchanlari va boshqa sozlamalar ta'riflanadi.

2. Networks (Tarmoqlar): Xizmatlar o'rtasidagi tarmoqlarni ta'riflash. Xususiy tarmoqlarni yaratish, xizmatlarni ular orqali bog'lash va ulardan foydalanish imkoniyatiga ega bo'lishingiz mumkin.

3. Volumes (Hajmlar): Xizmatlar uchun fayl va kataloglar uchun hajmlarni ta'riflash. Ushbu hajmlar, konteynerlar o'rtasida ma'lumot almashinuvi uchun ishlatiladi.

4. Environment Variables (Muhit o'zgaruvchanlari): Xizmatlarga muhit o'zgaruvchanlarini ta'riflash. Bu o'zgaruvchanlar, konteynerlar ichidagi ilovalar tomonidan ishlatilishi mumkin.

5. Configurations (Sozlamalar): Xizmatlar uchun boshqa sozlamalarni ta'riflash, masalan, resurs limitlari, konteynerlar orasidagi bog'lanishlar va boshqalar.

Docker Compose faylini yaratib, `docker-compose.yml` nomi bilan saqlash orqali, kompozitsiyadagi xizmatlarni birlashtirishingiz, o'rnatishingiz va boshqarishingiz mumkin.

Docker Compose ni ishlatib, bir nechta konteynerlardan iborat muhitlarni qurishingiz, ularga avtomatik ravishda bog'lanishingiz, o'zgaruvchanlarni sozlashingiz va hamjihatlikda ishlashingiz mumkin. Bu ishni bajarish uchun terminalda `docker-compose up` komandasidan foydalanishingiz va Docker Compose

faylini belgilab, ko'rsatilgan muhiti ishga tushirishingiz kifoya.

## Docker Compose yaratish
Docker Compose faylini yaratish uchun quyidagi qadamlarni izohlashingiz mumkin:

1. Yangi fayl yaratish: Bir papka ichida `docker-compose.yml` nomli fayl yaratish mumkin. Fayl nomi o'zgarishi mumkin, ammo umumiy ravishda `docker-compose.yml` nomini ishlatish maslahat beriladi.

2. Faylni ochish va tahrirlash: Yaratilgan `docker-compose.yml` faylini tanlang va muhim ma'lumotlarni kiritish uchun tahrirlashni boshlang. Faylning tarkibi kabi, har bir xizmat (konteyner) uchun quyidagi shaklda ma'lumotlarni kiritishingiz mumkin:

```yaml
version: '3'
services:
  xizmat1:
    image: image_nomi:tag
    ports:
      - host_port:container_port
    environment:
      - MUHIT_O'ZGARUVCHAN=qiymat
  xizmat2:
    image: image_nomi:tag
    ports:
      - host_port:container_port
    environment:
      - MUHIT_O'ZGARUVCHAN=qiymat
```

- `version`: Docker Compose versiyasi (masalan, `3`).
- `services`: Xizmatlar ro'yxati. Har bir xizmatni nomi bilan belgilash kerak.
- `image`: Xizmat uchun ishlatiladigan Docker image-ni nomi va versiyasi.
- `ports`: Portlar bilan bog'lash (masalan, `host_port:container_port`).
- `environment`: Xizmatga muhit o'zgaruvchanlarini belgilash.

3. Xizmatlarni qo'shish: Faylga muvaffaqiyatli barcha xizmatlarni qo'shish uchun `services` bo'limiga xizmatlar bilan bog'langan ma'lumotlarni qo'shing. Xizmatlar nomi bilan belgilanadi va bir qator ichida xizmat haqida ma'lumotlarni kiritishingiz mumkin.

4. Docker Compose ni ishga tushirish: Terminalda Docker Compose-ni ishga tushirish uchun, faylni joylashgan papkaga o'tib, quyidagi komandani ishlatishingiz mumkin:

```shell
docker-compose up
```

Bu komanda, Docker Compose faylini qabul qilib, barcha xizmatlarni yaratadi va ularni ishga tushiradi.

Shu bilan birga, Docker Compose faylini yaratib, xizmatlar va ularning sozlamalarini kiritib, `docker-compose up` komandasini ishga tushirishingiz mumkin. Bunda, barcha xizmatlar belgilangan sozlamalarga muvofiq yaratiladi va ularni bir vaqtning o'zida ishga tushiriladi.




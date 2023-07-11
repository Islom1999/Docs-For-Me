# Docker image

## Docker image nima

Docker image, Docker konteynerlarini yaratish uchun asosiy qurilmalardan biridir. Bu, bir dastur va uning barcha zarur fayllarini, kutubxonalarni, tizim sozlamalarini va operatsion tizimini o'z ichiga olgan bir paketlashgan to'plam hisoblanadi.

Docker image, bitta asosiy dastur yoki tizimning hammasini o'z ichiga oladi. Misol uchun, Linux operatsion tizimi, Python dasturlash tili va kerakli kutubxonalarni o'z ichiga olgan image yaratish mumkin. Image yaratish jarayoni Dockerfile nomli fayl orqali amalga oshiriladi. Dockerfile da dasturning muhitini sozlash, kerakli paketlarni yuklash, fayllarni ko'chirish va boshqa sozlamalarni bajarish uchun komandalar beriladi.

Docker image, muhiti ifodalaydi, ammo ishga tushirilmagan holatda o'zgarishlarga yo'l qo'ymaydi. Birinchi qadamda Docker image yaratiladi va keyin ushbu image asosida bir yoki bir nechta Docker konteynerlari yaratiladi. Har bir konteyner o'zining o'ziga xos ishlatish uchun o'z nusxasini olishadi.

Docker image-ning afzalliklari quyidagilardan iborat:

1. Portabilitet: Docker image, dastur va muhitni o'z ichiga olgan paketlashgan to'plam sifatida o'zgarisiz va portativdir. Uning portativligi sababli image-ni bir tizimdan boshqasiga osonlik bilan ko'chirish va ulardan foydalanish mumkin.

2. Isolatsiya: Har bir Docker konteyneri o'zining o'ziga xos image-ni asosida ishlaydi, shuning uchun ulardan foydalanish bilan tizimning boshqa qismlari ta'sir etmaydi. Bu isolatsiya va xavfsizlikni ta'minlaydi.

3. Tijoratlar ustidan tejamkorlik: Docker image-ni yaratish va tarqatish tezroq va oson bo'ladi. Image-ni qayta ishga tushirish, yangilash va tarqatishning tejamkor usullari mavjud.

4. Layered struktura: Docker image, ichida bir nechta qatlar (layer)dan iborat bo'lgan layered struktura bilan yaratiladi. Bu qatlar, har bir amalning o'zining o'ziga xos ma'lumotlardan iborat bo'lib, bir necha image-ni biriktirish imkonini beradi. Bu layered struktura disk ishlab chiqarish va tizim resurslarini samarali foydalanishni ta'minlaydi.

Docker image, dasturlash

 va tizim boshqaruvini soddalashtiradi va avtomatlashtiradi. Uning yordamida bir xil image asosida o'zgaruvchan tizimlarni tez va ishonchli tarzda yaratish, o'rnatish va boshqarish mumkin.

## Docker image boshqaruvi

Docker image boshqaruvi, Docker platformasi yordamida yaratilgan Docker image-larni boshqarish va ulardan foydalanishning samarali usulini ta'minlayan qurilmadirlar. Bu boshqaruvi Docker CLI va boshqa qo'llanmalarga asoslangan vositalar orqali amalga oshiriladi.

Quyidagilarni Docker image boshqaruvi bilan amalga oshirish mumkin:

1. Docker CLI: Docker image-larni boshqarishning asosiy usuli Docker CLI komandalari orqali amalga oshiriladi. `docker build`, `docker pull`, `docker push`, `docker tag` kabi komandalarni ishlatish orqali image-larni yaratish, yuklash, saqlash va nomlarni o'zgartirish mumkin.

2. Docker Registry: Docker image-larini saqlash uchun ishlatiladigan registrlar mavjud. Rasmiy Docker Hub registry-si, boshqa umumiy registry-lar yoki o'zining xususiy registry-sini o'rnatish orqali image-lar ko'chiriladi va o'zgartiriladi.

3. Docker Compose: Docker Compose, biror bir proyektning o'z ichidagi ko'p konteynerli muhiti tavsiflash uchun ishlatiladi. Bu, bir boshqaruvi fayli yordamida bir qator konteynerlarni birlashtiradi va boshqarishga imkon beradi.

4. Orqaga qaytish (Rollback): Docker image boshqaruvi orqali, bir avvalgi versiyaga o'zgarishlar qilish va hattoki xatolarni tuzatish osonligi mavjud. Bu, image-ni muharrirlik qilish, bir versiyani o'chirish yoki avvalgi holatiga qaytarish imkonini beradi.

5. Image sozlamalari: Docker image-larni boshqaruvi, image sozlamalarini o'zgartirishga imkon beradi. Misol uchun, konteyner uchun portni aniqlash, muhit o'zgaruvchanlarini sozlash va boshqa tarkibiy sozlamalarni o'zgartirish mumkin.

6. Multistage Build: Docker image boshqaruvi orqali, bir nechta jarayonni o'z ichiga olgan "multistage build" jarayonlarini amalga oshirish mumkin. Bu, bitta Dockerfile-da bir nechta langlarni yaratish va ulardan foydalanish imkonini beradi. Bu usul orqali o'zgaruvchanligi kamaytiriladi va image o'lchamini kichraytirish mumkin.

Bu faqat bir nechta umumiy Docker image boshqaruvi vositalardan bir qancha misollar. Docker ekosistemasida boshqa boshqaruv vositalari mavjud bo'lib, ulardan foydalanish orqali image-larni tashqi vazifalarni bajarish va boshqarish imkoniyati kengayadi.

## Docker image qurish
Docker image-ni qurish uchun quyidagi qadamlarni izohlashim mumkin:

1. Dockerfile yaratish: Dockerfile nomli bir matn faylini yaratish kerak. Bu fayl Docker image-ni qanday yaratish, qanday kutubxonalarni o'rnatish, sozlamalarni bajarish va boshqa muhimmu tadbirlarni amalga oshirishni aniqlaydi. Dockerfile misol bo'lishi mumkin:

```
# Asosiy Docker image-ni tanlash
FROM ubuntu:latest

# Kerakli paketlarni o'rnatish
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip

# Loyiha fayllarini image-ga ko'chirish
COPY . /app

# Kerakli kutubxonalarni o'rnatish
RUN pip3 install -r /app/requirements.txt

# Konteynerda ishga tushiriladigan asosiy buyruqlar
CMD ["python3", "/app/main.py"]
```

2. Docker image-ni yaratish: Yaratilgan Dockerfile-ni asosida Docker image-ni yaratish uchun quyidagi komandani ishga tushiring:

```
docker build -t image_nomi:tag -f Dockerfile_ismi .
```

Bu komanda Dockerfile ni bazasida yangi image yaratadi. `-t` parametri yaratiladigan image ning nomini va versiyasini aniqlaydi, `-f` parametri Dockerfile ni aniqlaydi va `.` joriy katalogni bildiradi.

3. Yaratilgan image-ni tekshirish: Image-ni yaratgandan so'ng uni tekshirish uchun `docker images` komandasidan foydalanishingiz mumkin. Bu komanda mavjud barcha Docker image-larni ro'yxatini chiqaradi.

4. Yaratilgan image-ni ishlatish: Yaratilgan image-ni konteyner yaratish uchun `docker run` komandasidan foydalanishingiz mumkin. Misol uchun:

```
docker run -d --name container_nomi image_nomi:tag
```

Bu komanda `-d` parametri orqali konteynerning asosiy jarayonini fonde ishga tushiradi va `--name` parametri orqali konteynerga nom beradi.

Bu qadamga asosan yuqoridagi jarayonlarni amalga oshirishingiz mumkin va o'zingizning maqsadingizga mos Docker image-ni yarata olasiz.

## Portlar bilan ishlash

Docker konteynerlari va localhost (tizimning o'zi) orasida portlar bilan bog'lash uchun quyidagi qadamlarni izohlashingiz mumkin:

1. Docker konteyneriga portlar ta'minlash: Dockerfile yoki Docker Compose faylida, konteyner yaratilganda murojaat qilingan portlarni aniqlashingiz kerak. Misol uchun, `Dockerfile` da konteyner uchun 8080 portini ochish quyidagicha ifodalangan bo'lishi mumkin:

```dockerfile
EXPOSE 8080
```

2. Docker konteynerini portlar bilan ishga tushirish: Konteyner yaratilgandan so'ng, Docker run komandasi orqali portlar bilan bog'lashni aniqlashingiz kerak. Misol uchun, konteyner uchun 8080 portini 8080 porti bilan bog'lash quyidagicha komanda bilan amalga oshiriladi:

```shell
docker run -p 8080:8080 image_nomi:tag
```

Bu komanda `-p` parametri orqali hostning 8080 portini konteynerning 8080 portiga yo'naltiradi.

3. Bog'langan portlarni localhost (tizimning o'zi) orqali ishlatish: Bog'langan portlarni localhost (tizimning o'zi) orqali ishlatish uchun quyidagi URL-ni ishlatishingiz mumkin:

```
http://localhost:8080
```

Bu URL-ni brauzeringizda ochib, bog'langan konteynerning 8080 portiga murojaat qilasiz.

Agar konteyner portini boshqa portga bog'lashni istasangiz, `-p` parametrini o'zgartirishingiz mumkin. Masalan, hostning 8888 portini konteynerning 8080 portiga bog'lash uchun quyidagi komanda bilan ishlatishingiz mumkin:

```shell
docker run -p 8888:8080 image_nomi:tag
```

Bu komandaga murojaat qilish uchun URL quyidagicha bo'ladi:

```
http://localhost:8888
```

Bu usul orqali Docker konteynerlari orqali ishlayotgan dasturlarni localhost orqali test qilishingiz va ularga murojaat qilishingiz mumkin.
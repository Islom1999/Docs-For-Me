
# DockerFile

## Dockerfile nima

Dockerfile, Docker konteynerini yaratishning avtomatlashtirilgan texnologik vositasi hisoblanadi. Ushbu fayl, Docker obrazini o'zgartirish, sozlash va konteynerning ma'lum bir holatini belgilash uchun foydalaniladi. Dockerfile-ni yaratib, Docker obrazini o'rnatish uchun quyidagi qadamlarni izohlashingiz mumkin:

1. Yangi fayl yaratish: Bitta direktoriya ichida Dockerfile nomli fayl yaratish kerak. Fayl nomi o'zgarishi mumkin, lekin umumiy ravishda "Dockerfile" nomini ishlatish maslahat beriladi.

2. Faylni ochish va tahrirlash: Yaratilgan Dockerfile-ni tanlang va faylni tahrirlashni boshlang. Dockerfile-ni foydalanuvchini talablari va xohishlari bo'yicha sozlash uchun tahrir qilishingiz mumkin.

3. Direktivani belgilash: Dockerfile-dagi direktivlar, konteyner obrazini qanday o'rnatish va sozlash haqida yo'riqnoma hisoblanadi. Quyidagi direktivlar odatda foydalaniladi:

- `FROM`: Bazoviy obrazni belgilash.
- `RUN`: Komandani ishga tushirish.
- `COPY` yoki `ADD`: Fayllarni obrazga ko'chirish.
- `WORKDIR`: Ish jarayoni uchun ish katalogini belgilash.
- `EXPOSE`: Konteyner uchun ochiq portni belgilash.
- `CMD` yoki `ENTRYPOINT`: Konteyner ishga tushganda amalga oshiriladigan asosiy buyruqni belgilash.

4. Faylni saqlash: Dockerfile-ni tahrirlaganingizdan so'ng, o'zgartirishlarni saqlashingiz kerak.

5. Docker obrazini o'rnatish: Terminalda Dockerfile joylashgan direktoriyaga o'ting va quyidagi komandani ishga tushiring:

```shell
docker build -t image_nomi:tag .
```

Bu komanda Dockerfile-ni qabul qilib, Docker obrazini o'rnatish uchun ishga tushiradi. `-t` parametri bilan obraz nomi va versiyasi belgilanadi. `.` nuqta belgisi joriy direktoriyani ifodalaydi.

Komanda bajarilgandan so'ng Docker, Dockerfile-ni o'qiydi, direktivalar ustida bajarilishi kerak bo'lgan amallarni amalga oshiradi va natijadagi Docker obrazini yaratadi.

Shu bilan birga, Dockerfile-ni tahrirlab, direktivalar orqali Docker obrazini o'rnatishingiz mumkin. Bu obrazni Docker Compose, Docker Swarm yoki boshqa usullar orqali ishlatishingiz mumkin.

## Dockerfile yaratish

Dockerfile yaratish uchun quyidagi qadamlarni izohlashingiz mumkin:

1. Yangi fayl yaratish: Bitta direktoriya ichida Dockerfile nomli fayl yaratish kerak. Fayl nomi o'zgarishi mumkin, lekin umumiy ravishda "Dockerfile" nomini ishlatish maslahat beriladi.

2. Faylni ochish va tahrirlash: Dockerfile-ni tanlang va uning tarkibini tahrirlashni boshlang. 

3. `FROM` direktivasi: Obraz asosini belgilash uchun `FROM` direktivasini ishlatish kerak. Misol uchun, agar Python tilida yozilgan bazoviy bir Docker obrazidan foydalanishni xohlaysiz bo'lsin, quyidagi satrni qo'shing:

   ```Dockerfile
   FROM python:3.9
   ```

   Bu direktiva Docker obrazini tanlashda foydalaniladi. `python:3.9` obrazidan boshlaydigan o'zgartirilgan bir obraz yaratiladi.

4. Qo'shimcha direktivalar: Obrazni sozlash uchun qo'shimcha direktivalarni qo'shishingiz mumkin. Misol uchun, quyidagi direktivani qo'shing:

   ```Dockerfile
   WORKDIR /app
   COPY . /app
   RUN pip install -r requirements.txt
   ```

   Bu direktivlar Dockerfile-ni quyidagi amallarni bajarishga buyuradi:
   - `WORKDIR`: Konteyner ichidagi ish katalogini `/app` deb belgilaydi.
   - `COPY`: Loyiha katalogidagi barcha fayllarni `/app` papkaga nusxalaydi.
   - `RUN`: `requirements.txt` faylidagi Python paktlarini o'rnatish uchun `pip install` komandasini bajaradi.

5. Faylni saqlash: Dockerfile-ni tahrirlaganingizdan so'ng, o'zgartirishlarni saqlashingiz kerak.

6. Docker obrazini yaratish: Terminalda Dockerfile-ni joylashgan direktoriyaga o'ting va quyidagi komandani ishga tushiring:

   ```shell
   docker build -t image_nomi:tag .
   ```

   Bu komanda Dockerfile-ni qabul qilib, Docker obrazini yaratish uchun ishga tushiradi. `-t` parametri bilan obraz nomi va versiyasi belgilanadi. `.` nuqta belgisi joriy direktoriyani ifodalaydi.

   Komanda bajarilgandan so'ng Docker, Dockerfile-ni o'qiydi, direktivalar ustida bajarilishi kerak bo'lgan amallarni amalga oshiradi va natijadagi Docker obrazini yaratadi.

Shu bilan birga, Dockerfile-ni tahrirlab, direktivalar orqali Docker obrazini yaratishingiz mumkin. Obrazni Docker Compose, Docker Swarm yoki boshqa usull

ar orqali ishlatishingiz mumkin.

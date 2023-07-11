# Komandalar

## Asosiy komandalar
Docker CLI (Command Line Interface) o'z ichiga bir nechta komandalarni oladi, ulardan ba'zi taniqli va kerakli bo'lganlarni quyidagi ro'yhatda ko'rsataman:

1. `docker run`: Yangi konteyner yaratish va uni ishga tushirish uchun foydalaniladi.
2. `docker build`: Dockerfile asosida yangi Docker obrazini yaratish uchun ishlatiladi.
3. `docker pull`: Docker hubdan (yoki boshqa registry dan) mavjud Docker obrazini yuklash uchun ishlatiladi.
4. `docker push`: Docker obrazini Docker hubga (yoki boshqa registry ga) yuklash uchun foydalaniladi.
5. `docker images`: Lokal saqlanayotgan Docker obrazlarini ro'yxatini ko'rsatadi.
6. `docker ps`: Ishga tushirilgan konteynerlarni ro'yxatini ko'rsatadi.
7. `docker stop`: Konteynerlarni to'xtatish (stop) uchun foydalaniladi.
8. `docker start`: To'xtatilgan konteynerlarni qayta ishga tushirish (start) uchun ishlatiladi.
9. `docker restart`: Konteynerlarni qayta ishga tushirish (restart) uchun foydalaniladi.
10. `docker rm`: Konteynerlarni o'chirish (remove) uchun foydalaniladi.
11. `docker rmi`: Docker obrazlarini o'chirish (remove) uchun foydalaniladi.
12. `docker exec`: Ishga tushirilgan konteyner ichidagi buyruqlarni bajarish uchun ishlatiladi.
13. `docker logs`: Konteynerdan chiqadigan loglarni ko'rish uchun foydalaniladi.
14. `docker network`: Docker tarmog'ida tarmoqlarni yaratish, o'chirish va boshqarish uchun foydalaniladi.
15. `docker volume`: Docker bo'limlarini yaratish, o'chirish va boshqarish uchun ishlatiladi.

Bu faqat bir nechta asosiy komandalardan faqat bir nechasi. Docker CLI-da boshqa ham ko'p komandalar mavjud. Agar belgilangan amalni bajarish uchun qaysi komandalarni kerakligini bilmasangiz, `docker` komandasidan keyin `--help` yoki `-h` kalit so'zini qo'shing, masalan, `docker run --help`, va ko'rsatilgan komandaning o'zining ma'lumotlari va qo'llanmani ko'rishingiz mumkin.

## Docker Container comandalari

Docker konteynerlarini boshqarish uchun ko'p ishlatiladigan CLI (Command Line Interface) komandalaridan ba'zilarini quyidagicha ko'rsataman:

1. `docker run`: Yangi konteyner yaratish va uni ishga tushirish uchun ishlatiladi.
2. `docker start`: To'xtatilgan konteynerlarni qayta ishga tushirish uchun foydalaniladi.
3. `docker stop`: Konteynerlarni to'xtatish (stop) uchun foydalaniladi.
4. `docker restart`: Konteynerlarni qayta ishga tushirish (restart) uchun foydalaniladi.
5. `docker pause`: Konteynerlarni to'xtatish (pause) uchun foydalaniladi.
6. `docker unpause`: To'xtatilgan konteynerlarni davom ettirish (unpause) uchun ishlatiladi.
7. `docker kill`: Konteynerlarni faqatgina to'xtatish uchun foydalaniladi.
8. `docker rm`: Konteynerlarni o'chirish (remove) uchun foydalaniladi.
9. `docker exec`: Ishga tushirilgan konteyner ichidagi buyruqlarni bajarish uchun foydalaniladi.
10. `docker logs`: Konteynerdan chiqadigan loglarni ko'rish uchun foydalaniladi.
11. `docker inspect`: Konteyner haqida batafsil ma'lumotlarni ko'rish uchun foydalaniladi.
12. `docker top`: Konteyner ichidagi ishga tushirilgan protsesslarni ko'rish uchun ishlatiladi.
13. `docker stats`: Konteynerlarning yuqori darajadagi ma'lumotlarini ko'rish uchun foydalaniladi.
14. `docker attach`: Konteynerga bog'lanishni amalga oshirish uchun ishlatiladi.
15. `docker cp`: Fayl va direktoriyalarni konteynerga (va konteynerdan) nusxalash uchun foydalaniladi.
16. `docker rename`: Konteyner nomini o'zgartirish uchun foydalaniladi.

Bu faqat bir nechta CLI komandalardan faqat bir nechasi. Docker CLI-da boshqa ham ko'p komandalar mavjud. Agar belgilangan amalni bajarish uchun qaysi komandalarni kerakligini bilmasangiz, `docker` komandasidan keyin `--help` yoki `-h` kalit so'zini qo'shing, masalan, `docker run --help`, va ko'rsatilgan komandaning o'zining ma'lumotlari va qo'llanmani ko'rishingiz mumkin.

## Docker image comandalari

Docker obrazlarini boshqarish uchun ko'p ishlatiladigan CLI (Command Line Interface) komandalaridan ba'zilarini quyidagicha ko'rsataman:

1. `docker build`: Dockerfile asosida yangi Docker obrazini yaratish uchun ishlatiladi.
2. `docker pull`: Docker hubdan (yoki boshqa registry dan) mavjud Docker obrazini yuklash uchun foydalaniladi.
3. `docker push`: Docker obrazini Docker hubga (yoki boshqa registry ga) yuklash uchun foydalaniladi.
4. `docker images`: Lokal saqlanayotgan Docker obrazlarini ro'yxatini ko'rsatadi.
5. `docker rmi`: Docker obrazlarini o'chirish (remove) uchun foydalaniladi.
6. `docker tag`: Docker obraziga yangi nom (tag) berish uchun ishlatiladi.
7. `docker history`: Docker obrazning tarixini va tarkibini ko'rish uchun foydalaniladi.
8. `docker inspect`: Docker obraz haqida batafsil ma'lumotlarni ko'rish uchun ishlatiladi.
9. `docker save`: Docker obrazni tar formatida saqlash uchun foydalaniladi.
10. `docker load`: Saqlangan tar formatidagi Docker obrazini yuklash uchun foydalaniladi.
11. `docker export`: Konteyner o'rniga tar formatida Docker obrazini yaratish uchun foydalaniladi.
12. `docker import`: Tar formatidagi Docker obrazni yuklash va o'rnatish uchun ishlatiladi.
13. `docker search`: Docker hubda obrazlarni qidirish uchun foydalaniladi.
14. `docker prune`: Chet el obrazlarini, tarmoqlarni, tizim resurslarini o'chirish uchun foydalaniladi.

Bu faqat bir nechta CLI komandalardan faqat bir nechasi. Docker CLI-da boshqa ham ko'p komandalar mavjud. Agar belgilangan amalni bajarish uchun qaysi komandalarni kerakligini bilmasangiz, `docker` komandasidan keyin `--help` yoki `-h` kalit so'zini qo'shing, masalan, `docker build --help`, va ko'rsatilgan komandaning o'zining ma'lumotlari va qo'llanmani ko'rishingiz mumkin.


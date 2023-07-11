# Docker Container 

## Docker Container nima

Docker konteyneri, Docker platformasi orqali yaratilgan va boshqarilgan bir sanalizatsiya oynasi hisoblanadi. Bu, biror dasturning o'z muhitini o'zida o'zgartirishga to'g'ri keladigan, isolatsiyalangan va portable xususiyatlarga ega bo'lgan bir turda "izolatsiyalangan" o'rtamni ifodalaydi.

Konteyner, dastur va uning barcha xususiyatlari, dastur ishlashi uchun zarur resurslar va kutubxonalarni o'z ichiga oladi. Konteyner tizimi host operatsion tizimi va ma'lumotlar bilan nisbatan aloqador bo'lib, alohida tizim resurslari va isolatsiya qo'shimchalari, masalan, izolatsiya korpuslari, jadval asosida ishlaydi.

Docker konteyneri, xususiyatlarini ta'minlash uchun Dockerfile nomli konfiguratsiya faylidan foydalanadi. Dockerfile, dastur yaratish jarayonini ma'lumotlarga asoslanadigan instruksiyalardan iborat matn faylidir. Bu instruksiyalar orqali Docker konteyneri yaratiladi, kerakli paketlar yuklanadi, dastur yuklanadi va sozlangan sozlamalar bajariladi.

Docker konteynerlarining afzalliklari quyidagilar o'rtasida keltirilishi mumkin:

1. Izolatsiya: Har bir Docker konteyneri alohida ishlaydi va xususiyatlarini o'z ichiga oladi. Bunda bir konteynerdagi dastur va resurslar boshqa konteynerlarga ta'sir etmaydi.

2. Portabilitet: Docker konteynerlari o'zlariga xos o'rtamda ishlashadi, shuning uchun ulardan foydalanishning oson va portativ usuli mavjud. Konteynerlarning yaratishida ishlatilgan Dockerfile, bir host tizimidan boshqasiga dasturlar va muhitlarni ko'chirishni osonlashtiradi.

3. Skalabilnost: Docker orqali konteynerlarni qo'shish, o'chirish va boshqarish oson bo'ladi. Uning ichida Docker Compose, Docker Swarm, Kubernetes kabi vositalar mavjud, bu vositalar yordamida ko'p-konteynerli muhitlar yaratish va boshqarish mumkin.

4. Tijoratlar ustidan tejamkorlik: Docker konteynerlari tezroq ishga tushishi va o'chirilishi mumkin. Konteynerlar yaratish, sozlash va yangilash uchun minimal vaqt sarflanadi.

5. Ekosistema: Docker katta va ommaviy yozuvlarning o'z ichiga olgan ekosistemaga ega. Bunda sizning dast

ur va tizimlaringiz uchun katta bir kutubxona mavjud.

Docker konteynerlarining foydalanishlariga misollar quyidagilardir: dasturlarni ishga tushirish, tizimlarni test qilish, mahalliy muhitdan o'zgarmasligi uchun muhitlarni tashlash, tizimlar o'rtasidagi muhiti boshqarish, skalalash va ko'p qator boshqaruv skhemalarini bajarish.

Bu jumladan, Docker konteyneri dasturlash va tizim boshqaruvi sohasida katta o'rinni egallaygan innovatsion va samarador bir vositadir.

## Docker container boshqaruvi

Docker konteynerlarini boshqarish uchun bir nechta vositalar mavjud. Bu vositalardan biri Docker CLI (Command Line Interface) - Docker komandalarini ishga tushirishga yordam beruvchi komandalar ketmasligidir. Buning orqali siz konteynerlarni yaratishingiz, boshqarishingiz, bajarishingiz va o'chirishingiz mumkin.

Quyidagi komandalarni Docker CLI yordamida foydalanish orqali konteynerlarni boshqarishingiz mumkin:

1. `docker run`: Yangi konteyner yaratish uchun ishlatiladi. Bu komanda orqali siz konteynerni boshqaruv uchun o'zgartirishlar bilan bajarilishi kerak bo'lgan imkoniyatlarni sozlashingiz mumkin.

2. `docker start`: Konteynerni boshlash uchun ishlatiladi. Avvalroq yaratilgan konteynerlarni qayta ishga tushirish uchun foydalaniladi.

3. `docker stop`: Konteyner ishini to'xtatish uchun ishlatiladi. Konteynerda ishlayotgan dastur tugagandan so'ng, konteynerlarni to'xtatish uchun foydalaniladi.

4. `docker restart`: Konteynerni qayta ishga tushirish uchun ishlatiladi. Bu komanda orqali konteynerlarni to'xtatish va keyin qayta boshlash imkoniyatiga ega bo'lasiz.

5. `docker rm`: Konteyner o'chirish uchun ishlatiladi. O'chirilgan konteynerlarning barcha ma'lumotlari yo'qolib ketadi, shuning uchun bu komandaning ixtiyoriy foydalanishidan oldin dikkatli bo'lishingiz kerak.

6. `docker ps`: Ishga tushirilgan konteynerlarni ro'yxatini ko'rish uchun ishlatiladi. Bunda yangi konteynerlar, ishlamayotgan konteynerlar va davom etayotgan konteynerlar ro'yxatini ko'rish imkoniyati mavjud.

7. `docker logs`: Konteynerning loglarini ko'rish uchun ishlatiladi. Bu komanda orqali konteynerga oid loglarni ko'rish va tekshirish imkoniyatiga ega bo'lasiz.

Bu faqat bir nechta umumiy Docker CLI komandalardan bir qancha misollar. Docker boshqaruv vositalari ko'p, masalan, Docker Compose, Docker Swarm, Kubernetes va boshqalar. Ulardan foydalanish orqali konteynerlarni yaratish, boshqarish va ko'p-komponentli muhitlarni tuzish imkoniyatlari mavjud.


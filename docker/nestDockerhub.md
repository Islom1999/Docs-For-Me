# Nest Project dockerhub

## dockerhubga yuklash

Agar NestJS loyihasida Prisma ORM va PostgreSQL ishlatilsa, DockerHub'ga joylash uchun quyidagi qadamlarni bajarishingiz mumkin:

1. Dockerfile yaratish: Loyiha direktoriyasida Dockerfile nomli yangi fayl yaratish kerak. Faylda quyidagi kodlarni qo'shing:

```Dockerfile
# Base image
FROM node:14

# Work directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to container
COPY . .

# Expose a port (if needed)
EXPOSE 3000

# Command to run when the container starts
CMD [ "npm", "run", "start:dev" ]
```

Bu Dockerfile, Node.js 14 asosida yaratilgan asosiy Docker obrazini ishlatadi. Loyiha fayllarini obrazga nusxalaydi, npm paketlarini o'rnatadi, 3000-portni ochadi va `npm run start:dev` komandasini bajaradi.

2. Docker Compose faylini yaratish: Loyiha direktoriyasida `docker-compose.yml` nomli yangi fayl yaratish kerak. Faylda quyidagi kodlarni qo'shing:

```yaml
version: '3'
services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - 3000:3000
    depends_on:
      - db
  db:
    image: postgres
    environment:
      POSTGRES_DB: your_database_name
      POSTGRES_USER: your_username
      POSTGRES_PASSWORD: your_password
    volumes:
      - postgres_data:/var/lib/postgresql/data
volumes:
  postgres_data:
```

Bu Docker Compose fayli, loyiha uchun ikkita xizmatni aniqlaydi: `app` (Loyiha) va `db` (PostgreSQL). `app` xizmati, yaratilgan Docker obrazidan foydalanadi, 3000-portni ochadi va `db` xizmatiga bog'liq bo'ladi. `db` xizmati esa `postgres` rasmiy Docker obrazidan yaratiladi, kerakli muhit o'zgaruvchilari bilan sozlanadi va ma'lumotlarni saqlash uchun `postgres_data` bo'limiga bog'lanadi.

3. DockerHub'ga yuklash: Loyiha direktoriyasida Terminal (yoki CMD) oching va quyidagi komandani ishga tushiring:

```shell
docker-compose up -d
```

Bu komanda Docker Compose faylida belgilangan xizmatlarni yuklaydi va ularni birgalikda ishga tushiradi. `-d` bayrak esa xizmatlarni fon rejimida ishga tushiradi.

4. DockerHub'ga joylash: DockerHub'a obrazni yuklash uchun quyidagi qadamni bajarishingiz kerak:

- DockerHub'da hisob oching (https://hub.docker.com/).
- Obraz nomini va versiyasini tanlang.
- Terminalda quyidagi komandalarni tartib bilan ishga tushiring:

```shell
docker login
docker tag your_image_name:your_image_version your_dockerhub_username/your_image_name:your_image_version
docker push your_dockerhub_username/your_image_name:your_image_version
```

Bu komandalar DockerHub'a kirmoq, obraz nomini va versiyasini tanlash, obrazni qayta nomlash va yuklash jarayonlarini amalga oshiradi.

Keyin, loyihani boshqa ishchi mashinada yoki Docker tarmoqida ishlatish uchun DockerHub'dan obrazni yuklab olishingiz mumkin.

## dockerhub yordamida ishga tushirish
NestJS loyihasini DockerHub'dan olingan obraz orqali ishga tushirish uchun quyidagi qadamlarni bajarishingiz mumkin:

1. Dockerfile yaratish: Loyiha direktoriyasida Dockerfile nomli yangi fayl yaratish kerak. Faylda quyidagi kodlarni qo'shing:

```Dockerfile
# Base image
FROM your_dockerhub_username/your_image_name:your_image_version

# Expose a port (if needed)
EXPOSE 3000

# Command to run when the container starts
CMD [ "npm", "run", "start:dev" ]
```

Bu Dockerfile, sizning DockerHub'dan olingan obrazni asosida yaratilgan. Loyiha konteynerini 3000-portni ochish uchun sozlash va `npm run start:dev` komandasini bajarish uchun sozlanadi.

2. Docker Compose faylini yaratish: Loyiha direktoriyasida `docker-compose.yml` nomli yangi fayl yaratish kerak. Faylda quyidagi kodlarni qo'shing:

```yaml
version: '3'
services:
  app:
    image: your_dockerhub_username/your_image_name:your_image_version
    ports:
      - 3000:3000
    depends_on:
      - db
  db:
    image: postgres
    environment:
      POSTGRES_DB: your_database_name
      POSTGRES_USER: your_username
      POSTGRES_PASSWORD: your_password
    volumes:
      - postgres_data:/var/lib/postgresql/data
volumes:
  postgres_data:
```

Bu Docker Compose fayli, loyiha uchun ikkita xizmatni aniqlaydi: `app` (Loyiha) va `db` (PostgreSQL). `app` xizmati DockerHub'dan olingan obrazdan foydalanadi, 3000-portni ochadi va `db` xizmatiga bog'liq bo'ladi. `db` xizmati esa `postgres` rasmiy Docker obrazidan yaratiladi, kerakli muhit o'zgaruvchilari bilan sozlanadi va ma'lumotlarni saqlash uchun `postgres_data` bo'limiga bog'lanadi.

3. Docker Compose orqali loyiha ishga tushirish: Loyiha direktoriyasida Terminal (yoki CMD) oching va quyidagi komandani ishga tushiring:

```shell
docker-compose up -d
```

Bu komanda Docker Compose faylida belgilangan xizmatlarni yuklaydi va ularni birgalikda ishga tushiradi. `-d` bayrak esa xizmatlarni fon rejimida ishga tushiradi.

Keyin, NestJS loyihangiz Docker tarmoqida Docker Compose orqali Prisma ORM va PostgreSQL bilan ishga tushiriladi.

<hr>

`depends_on` va `volumes` sozlamalari Docker Compose faylida xizmatlar o'rtasidagi bog'lanishlarni va ma'lumotlarni saqlashni tavsiflash uchun ishlatiladi.

`depends_on` sozlamasi: Ushbu sozlamalar, bir xizmatning boshlanish tartibini belgilash uchun ishlatiladi. Misol uchun, loyihada `app` xizmati `db` xizmatiga bog'liq bo'lsa, `app` xizmatining boshlanishidan oldin `db` xizmatini ishga tushirish kerak. Bu uchun `depends_on` sozlamasidan foydalanish mumkin.

```yaml
services:
  app:
    depends_on:
      - db
  db:
    image: postgres
```

Yuqoridagi misolda, `app` xizmati `db` xizmatiga bog'liq bo'lib, `depends_on` sozlamasi orqali boshlanish tartibini belgilaydi.

`volumes` sozlamasi: Ushbu sozlamalar, konteynerning fayl tizimiga (filesystem) kirishini va konteynerdan fayl tizimiga ma'lumotlar saqlashni tavsiflash uchun ishlatiladi. Bu sozlamalar fayl tizimida (host machine) saqlangan ma'lumotlarni konteynerga ulashish uchun yoki konteynerda saqlangan ma'lumotlarni saqlash uchun ishlatiladi.

```yaml
services:
  db:
    volumes:
      - postgres_data:/var/lib/postgresql/data
volumes:
  postgres_data:
```

Yuqoridagi misolda, `db` xizmati `volumes` sozlamasi orqali `postgres_data` nomli bir bo'limni `/var/lib/postgresql/data` papkasiga bog'lashadi. Shu yerda PostgreSQL ma'lumotlarini saqlash uchun fayl tizimi bo'lib qo'yiladi. Bu usul orqali, ma'lumotlar konteynerda saqlanadi va qo'shimcha xususiyatlar uchun saqlangan ma'lumotlarni yo'qotishda xizmat qiladi.


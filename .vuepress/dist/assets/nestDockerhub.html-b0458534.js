import{_ as a,o as n,c as s,d as i}from"./app-a9a991a6.js";const e={},l=i(`<h1 id="nest-project-dockerhub" tabindex="-1"><a class="header-anchor" href="#nest-project-dockerhub" aria-hidden="true">#</a> Nest Project dockerhub</h1><h2 id="dockerhubga-yuklash" tabindex="-1"><a class="header-anchor" href="#dockerhubga-yuklash" aria-hidden="true">#</a> dockerhubga yuklash</h2><p>Agar NestJS loyihasida Prisma ORM va PostgreSQL ishlatilsa, DockerHub&#39;ga joylash uchun quyidagi qadamlarni bajarishingiz mumkin:</p><ol><li>Dockerfile yaratish: Loyiha direktoriyasida Dockerfile nomli yangi fayl yaratish kerak. Faylda quyidagi kodlarni qo&#39;shing:</li></ol><div class="language-Dockerfile line-numbers-mode" data-ext="Dockerfile"><pre class="language-Dockerfile"><code># Base image
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
CMD [ &quot;npm&quot;, &quot;run&quot;, &quot;start:dev&quot; ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Bu Dockerfile, Node.js 14 asosida yaratilgan asosiy Docker obrazini ishlatadi. Loyiha fayllarini obrazga nusxalaydi, npm paketlarini o&#39;rnatadi, 3000-portni ochadi va <code>npm run start:dev</code> komandasini bajaradi.</p><ol start="2"><li>Docker Compose faylini yaratish: Loyiha direktoriyasida <code>docker-compose.yml</code> nomli yangi fayl yaratish kerak. Faylda quyidagi kodlarni qo&#39;shing:</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">app</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span>
      <span class="token key atrule">context</span><span class="token punctuation">:</span> .
      <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> Dockerfile
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 3000<span class="token punctuation">:</span><span class="token number">3000</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db
  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">POSTGRES_DB</span><span class="token punctuation">:</span> your_database_name
      <span class="token key atrule">POSTGRES_USER</span><span class="token punctuation">:</span> your_username
      <span class="token key atrule">POSTGRES_PASSWORD</span><span class="token punctuation">:</span> your_password
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> postgres_data<span class="token punctuation">:</span>/var/lib/postgresql/data
<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">postgres_data</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Bu Docker Compose fayli, loyiha uchun ikkita xizmatni aniqlaydi: <code>app</code> (Loyiha) va <code>db</code> (PostgreSQL). <code>app</code> xizmati, yaratilgan Docker obrazidan foydalanadi, 3000-portni ochadi va <code>db</code> xizmatiga bog&#39;liq bo&#39;ladi. <code>db</code> xizmati esa <code>postgres</code> rasmiy Docker obrazidan yaratiladi, kerakli muhit o&#39;zgaruvchilari bilan sozlanadi va ma&#39;lumotlarni saqlash uchun <code>postgres_data</code> bo&#39;limiga bog&#39;lanadi.</p><ol start="3"><li>DockerHub&#39;ga yuklash: Loyiha direktoriyasida Terminal (yoki CMD) oching va quyidagi komandani ishga tushiring:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Bu komanda Docker Compose faylida belgilangan xizmatlarni yuklaydi va ularni birgalikda ishga tushiradi. <code>-d</code> bayrak esa xizmatlarni fon rejimida ishga tushiradi.</p><ol start="4"><li>DockerHub&#39;ga joylash: DockerHub&#39;a obrazni yuklash uchun quyidagi qadamni bajarishingiz kerak:</li></ol><ul><li>DockerHub&#39;da hisob oching (https://hub.docker.com/).</li><li>Obraz nomini va versiyasini tanlang.</li><li>Terminalda quyidagi komandalarni tartib bilan ishga tushiring:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> login
<span class="token function">docker</span> tag your_image_name:your_image_version your_dockerhub_username/your_image_name:your_image_version
<span class="token function">docker</span> push your_dockerhub_username/your_image_name:your_image_version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Bu komandalar DockerHub&#39;a kirmoq, obraz nomini va versiyasini tanlash, obrazni qayta nomlash va yuklash jarayonlarini amalga oshiradi.</p><p>Keyin, loyihani boshqa ishchi mashinada yoki Docker tarmoqida ishlatish uchun DockerHub&#39;dan obrazni yuklab olishingiz mumkin.</p><h2 id="dockerhub-yordamida-ishga-tushirish" tabindex="-1"><a class="header-anchor" href="#dockerhub-yordamida-ishga-tushirish" aria-hidden="true">#</a> dockerhub yordamida ishga tushirish</h2><p>NestJS loyihasini DockerHub&#39;dan olingan obraz orqali ishga tushirish uchun quyidagi qadamlarni bajarishingiz mumkin:</p><ol><li>Dockerfile yaratish: Loyiha direktoriyasida Dockerfile nomli yangi fayl yaratish kerak. Faylda quyidagi kodlarni qo&#39;shing:</li></ol><div class="language-Dockerfile line-numbers-mode" data-ext="Dockerfile"><pre class="language-Dockerfile"><code># Base image
FROM your_dockerhub_username/your_image_name:your_image_version

# Expose a port (if needed)
EXPOSE 3000

# Command to run when the container starts
CMD [ &quot;npm&quot;, &quot;run&quot;, &quot;start:dev&quot; ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Bu Dockerfile, sizning DockerHub&#39;dan olingan obrazni asosida yaratilgan. Loyiha konteynerini 3000-portni ochish uchun sozlash va <code>npm run start:dev</code> komandasini bajarish uchun sozlanadi.</p><ol start="2"><li>Docker Compose faylini yaratish: Loyiha direktoriyasida <code>docker-compose.yml</code> nomli yangi fayl yaratish kerak. Faylda quyidagi kodlarni qo&#39;shing:</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">app</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> your_dockerhub_username/your_image_name<span class="token punctuation">:</span>your_image_version
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 3000<span class="token punctuation">:</span><span class="token number">3000</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db
  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">POSTGRES_DB</span><span class="token punctuation">:</span> your_database_name
      <span class="token key atrule">POSTGRES_USER</span><span class="token punctuation">:</span> your_username
      <span class="token key atrule">POSTGRES_PASSWORD</span><span class="token punctuation">:</span> your_password
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> postgres_data<span class="token punctuation">:</span>/var/lib/postgresql/data
<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">postgres_data</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Bu Docker Compose fayli, loyiha uchun ikkita xizmatni aniqlaydi: <code>app</code> (Loyiha) va <code>db</code> (PostgreSQL). <code>app</code> xizmati DockerHub&#39;dan olingan obrazdan foydalanadi, 3000-portni ochadi va <code>db</code> xizmatiga bog&#39;liq bo&#39;ladi. <code>db</code> xizmati esa <code>postgres</code> rasmiy Docker obrazidan yaratiladi, kerakli muhit o&#39;zgaruvchilari bilan sozlanadi va ma&#39;lumotlarni saqlash uchun <code>postgres_data</code> bo&#39;limiga bog&#39;lanadi.</p><ol start="3"><li>Docker Compose orqali loyiha ishga tushirish: Loyiha direktoriyasida Terminal (yoki CMD) oching va quyidagi komandani ishga tushiring:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Bu komanda Docker Compose faylida belgilangan xizmatlarni yuklaydi va ularni birgalikda ishga tushiradi. <code>-d</code> bayrak esa xizmatlarni fon rejimida ishga tushiradi.</p><p>Keyin, NestJS loyihangiz Docker tarmoqida Docker Compose orqali Prisma ORM va PostgreSQL bilan ishga tushiriladi.</p><hr><p><code>depends_on</code> va <code>volumes</code> sozlamalari Docker Compose faylida xizmatlar o&#39;rtasidagi bog&#39;lanishlarni va ma&#39;lumotlarni saqlashni tavsiflash uchun ishlatiladi.</p><p><code>depends_on</code> sozlamasi: Ushbu sozlamalar, bir xizmatning boshlanish tartibini belgilash uchun ishlatiladi. Misol uchun, loyihada <code>app</code> xizmati <code>db</code> xizmatiga bog&#39;liq bo&#39;lsa, <code>app</code> xizmatining boshlanishidan oldin <code>db</code> xizmatini ishga tushirish kerak. Bu uchun <code>depends_on</code> sozlamasidan foydalanish mumkin.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">app</span><span class="token punctuation">:</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db
  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Yuqoridagi misolda, <code>app</code> xizmati <code>db</code> xizmatiga bog&#39;liq bo&#39;lib, <code>depends_on</code> sozlamasi orqali boshlanish tartibini belgilaydi.</p><p><code>volumes</code> sozlamasi: Ushbu sozlamalar, konteynerning fayl tizimiga (filesystem) kirishini va konteynerdan fayl tizimiga ma&#39;lumotlar saqlashni tavsiflash uchun ishlatiladi. Bu sozlamalar fayl tizimida (host machine) saqlangan ma&#39;lumotlarni konteynerga ulashish uchun yoki konteynerda saqlangan ma&#39;lumotlarni saqlash uchun ishlatiladi.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> postgres_data<span class="token punctuation">:</span>/var/lib/postgresql/data
<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">postgres_data</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Yuqoridagi misolda, <code>db</code> xizmati <code>volumes</code> sozlamasi orqali <code>postgres_data</code> nomli bir bo&#39;limni <code>/var/lib/postgresql/data</code> papkasiga bog&#39;lashadi. Shu yerda PostgreSQL ma&#39;lumotlarini saqlash uchun fayl tizimi bo&#39;lib qo&#39;yiladi. Bu usul orqali, ma&#39;lumotlar konteynerda saqlanadi va qo&#39;shimcha xususiyatlar uchun saqlangan ma&#39;lumotlarni yo&#39;qotishda xizmat qiladi.</p>`,37),o=[l];function d(t,r){return n(),s("div",null,o)}const u=a(e,[["render",d],["__file","nestDockerhub.html.vue"]]);export{u as default};

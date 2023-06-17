import{_ as n,o as a,c as s,d as t,a as o}from"./app-6ef299f7.js";const i={},e=t(`<h1 id="google-auth" tabindex="-1"><a class="header-anchor" href="#google-auth" aria-hidden="true">#</a> Google auth</h1><h2 id="nest-js-da-google" tabindex="-1"><a class="header-anchor" href="#nest-js-da-google" aria-hidden="true">#</a> Nest.js-da Google</h2><p>Nest.js-da Google autentifikatsiyasini o&#39;rnatish uchun quyidagi qadam-lar kerak:</p><ol><li><p>Google API-da loyiha ochildi: Avval, sizning proyektingiz uchun Google API-sida yangi loyiha ochildingizga ishonch hosil qiling. Bu, sizga OAuth 2.0 uchun ma&#39;lumotlarni olish imkoniyatini beradi.</p></li><li><p>Nest.js proyekti yaratish: Agar hali boshlanmagan bo&#39;lsa, Nest.js-proyektingizni yarating. Buning uchun <code>nest new</code> buyrug&#39;i yoki mavjud proyektni o&#39;zgartiring.</p></li><li><p><code>@nestjs/passport</code> va <code>passport-google-oauth20</code> kutubxonalarni o&#39;rnatish: Terminalda proyekt katalogida quyidagi buyruqlarni bajarib, Passport va Google OAuth 2.0 ni yoqish uchun kerakli kutubxonalarni o&#39;rnatishni boshlang:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--save</span> @nestjs/passport passport-google-oauth20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>OAuth konfiguratsiyasini sozlash: Nest.js-proyekt katalogida <code>src/auth</code> katalogni yarating. Uning ichida <code>google.strategy.ts</code> nomli faylni yaratib quyidagi kodni yozing:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Injectable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> PassportStrategy <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/passport&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Strategy <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;passport-google-oauth20&#39;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Injectable</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">GoogleStrategy</span> <span class="token keyword">extends</span> <span class="token class-name">PassportStrategy</span><span class="token punctuation">(</span>Strategy<span class="token punctuation">,</span> <span class="token string">&#39;google&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      clientID<span class="token operator">:</span> <span class="token string">&#39;Google-API-Client-ID&#39;</span><span class="token punctuation">,</span>
      clientSecret<span class="token operator">:</span> <span class="token string">&#39;Google-API-Client-Secret&#39;</span><span class="token punctuation">,</span>
      callbackURL<span class="token operator">:</span> <span class="token string">&#39;http://localhost:3000/auth/google/callback&#39;</span><span class="token punctuation">,</span>
      scope<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;email&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;profile&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">validate</span><span class="token punctuation">(</span>accessToken<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> refreshToken<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> profile<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Bu funksiya foydalanuvchining profilini tekshiradi va foydalanuvchini bazaga saqlash uchun ma&#39;lumotlarni qaytaradi</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      googleId<span class="token operator">:</span> profile<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
      email<span class="token operator">:</span> profile<span class="token punctuation">.</span>emails<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value<span class="token punctuation">,</span>
      name<span class="token operator">:</span> profile<span class="token punctuation">.</span>displayName<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>clientID</code> va <code>clientSecret</code> ni Google API-da olingan ma&#39;lumotlar bilan almashtiring. <code>callbackURL</code> esa foydalanuvchining autentifikatsiya bo&#39;lganidan keyin yo&#39;naltiriladigan manzilni bildiradi. <code>scope</code> esa talab qilingan ma&#39;lumotlarni belgilaydi.</p></li><li><p><code>AuthModule</code> ni sozlash: <code>src/auth</code> katalogida <code>auth.module.ts</code> nomli faylni yaratib quyidagi kodni yozing:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Module <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> PassportModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/passport&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> GoogleStrategy <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./google.strategy&#39;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Module</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  imports<span class="token operator">:</span> <span class="token punctuation">[</span>PassportModule<span class="token punctuation">]</span><span class="token punctuation">,</span>
  providers<span class="token operator">:</span> <span class="token punctuation">[</span>GoogleStrategy<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AuthModule</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>AppModule</code> ga <code>AuthModule</code> ni qo&#39;shish:</p></li></ol><p><code>src/app.module.ts</code> faylda <code>AuthModule</code> ni <code>imports</code> ichiga qo&#39;shing:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Module <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AuthModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./auth/auth.module&#39;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Module</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  imports<span class="token operator">:</span> <span class="token punctuation">[</span>AuthModule<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppModule</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li><p>Autentifikatsiyani ko&#39;rsatish uchun Endpoint yaratish: Endpointni yaratish uchun <code>AppController</code> ga <code>@UseGuards()</code> dekoratorini va <code>@Get()</code> dekoratorini qo&#39;shing. <code>src/app.controller.ts</code> faylda quyidagi kodni yozing:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Controller<span class="token punctuation">,</span> Get<span class="token punctuation">,</span> UseGuards<span class="token punctuation">,</span> Request <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AuthGuard <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/passport&#39;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Controller</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppController</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">&#39;auth/google&#39;</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">UseGuards</span></span><span class="token punctuation">(</span><span class="token function">AuthGuard</span><span class="token punctuation">(</span><span class="token string">&#39;google&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token function">googleLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">&#39;auth/google/callback&#39;</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">UseGuards</span></span><span class="token punctuation">(</span><span class="token function">AuthGuard</span><span class="token punctuation">(</span><span class="token string">&#39;google&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token function">googleLoginCallback</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Request</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> req<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> req<span class="token punctuation">.</span>user<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Serverni ishga tushirish: Terminalda proyektni katalogida quyidagi buyruqlarni bajarib, serverni ishga tushiring:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Server <code>http://localhost:3000</code> manzilida ishga tushiriladi.</p></li><li><p>Autentifikatsiya qilish: Avval, brauzeringizda <code>http://localhost:3000/auth/google</code> manzilini oching. U sizni Google-login sahifasiga yo&#39;naltiradi. Foydalanuvchi ma&#39;lumotlarini kiriting va Google-hisobingizga kirishni tasdiqlang.</p></li><li><p>Autentifikatsiya natijasini ko&#39;rish: Foydalanuvchi autentifikatsiyadan o&#39;tgandan so&#39;ng, <code>http://localhost:3000/auth/google/callback</code> manzilida serverdan foydalanuvchining ma&#39;lumotlari JSON formatida olinadi va brauzerda ko&#39;rsatiladi.</p></li></ol><h2 id="google-api-clientid-va-clientsecret" tabindex="-1"><a class="header-anchor" href="#google-api-clientid-va-clientsecret" aria-hidden="true">#</a> Google API , <code>clientID</code> va <code>clientSecret</code></h2><p>Google API&#39;dan <code>clientID</code> va <code>clientSecret</code> olish uchun quyidagi qadam-larni bajaring:</p><ol><li><p>Google API Console-ga kirish qiling: Google Cloud Console-ga kirib oling: https://console.cloud.google.com/</p></li><li><p>Yangi loyiha yarating: &quot;Select a project&quot; (Proyektni tanlash) tugmasini bosib yoki &quot;Select a project&quot; (Proyektni tanlash) menyusini ichidagi &quot;New Project&quot; (Yangi loyiha) ni tanlang. Lohiyhani nomlang va &quot;Create&quot; (Yaratish) tugmasini bosing.</p></li><li><p>API-larni yoqish: &quot;APIs &amp; Services&quot; (API-lar va Xizmatlar) menyusidagi &quot;Library&quot; (Kutubxona) ni tanlang. Kerakli API-larni qidiring va ularga kirib &quot;Enable&quot; (Yoqish) tugmasini bosing. Autentifikatsiya uchun &quot;Google Sign-In API&quot; ni va &quot;Google+ API&quot; ni yoqishingiz kerak.</p></li><li><p>Kimliklarni olish: &quot;APIs &amp; Services&quot; (API-lar va Xizmatlar) menyusidagi &quot;Credentials&quot; (Kimliklar) bo&#39;limiga o&#39;ting. &quot;Create Credentials&quot; (Kimliklarni yaratish) tugmasini bosib &quot;OAuth client ID&quot; ni tanlang.</p></li><li><p>Kimlikni sozlash: Kimlik yaratish oynasida quyidagi ma&#39;lumotlarni to&#39;ldiring:</p><ul><li>&quot;Application type&quot; (Dastur turi)ni &quot;Web application&quot; (Veb dasturi) deb tanlang.</li><li>&quot;Name&quot; (Nomi)ga loyihaning nomini kiriting.</li><li>&quot;Authorized JavaScript origins&quot; (Ruxsat etilgan JavaScript manzillari) bo&#39;limida <code>http://localhost:3000</code> manzilini qo&#39;shing (manzilni o&#39;zgartirib turishingiz mumkin).</li><li>&quot;Authorized redirect URIs&quot; (Ruxsat etilgan qayta yo&#39;naltirish manzillari) bo&#39;limida <code>http://localhost:3000/auth/google/callback</code> manzilini qo&#39;shing (manzilni o&#39;zgartirib turishingiz mumkin).</li></ul></li><li><p>Kimlik ma&#39;lumotlarini olish: Kimlik yaratilgandan so&#39;ng sizga &quot;Client ID&quot; (Mijoz identifikatori) va &quot;Client Secret&quot; (Mijoz paroli) olinadi. Bu ma&#39;lumotlarni to&#39;play olganingizda, ularni Nest.js-proyektingizdagi <code>GoogleStrategy</code>-ning <code>clientID</code> va <code>clientSecret</code> qismlariga joylashtiring.</p></li></ol><p>Ushbu jarayonlar natijasida siz Google API-dan <code>clientID</code> va <code>clientSecret</code> ma&#39;lumotlarini olish va Nest.js proyektingizda ularga qo&#39;shish mumkin. Iltimos, ma&#39;lumotlarni to&#39;g&#39;ri kiritish va saqlashni unutmang. Kimliklarni xavfsiz saqlang va joriy qilingan proyektlarga faqatgina etkazib berish uchun ularni foydalaning.</p>`,11),p=o("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/oa6c1tbbskU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,-1),l=[e,p];function c(u,r){return a(),s("div",null,l)}const k=n(i,[["render",c],["__file","googleAuth.html.vue"]]);export{k as default};
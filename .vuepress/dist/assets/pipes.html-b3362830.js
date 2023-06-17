import{_ as n,o as a,c as s,d as t}from"./app-6ef299f7.js";const i={},e=t(`<h1 id="pipes" tabindex="-1"><a class="header-anchor" href="#pipes" aria-hidden="true">#</a> Pipes</h1><p>NestJS dasturlash tilida &quot;Pipes&quot; haqida tushuntirishdan oldin, Pipes nima ekanligini tushunish kerak.</p><p>Pipes, NestJS frameworkda argumentlarni ma&#39;lum bir formatga o&#39;tkazish, yoki ularga yondashuv qilish uchun ishlatiladigan xususiyatlar. Pipeslar ikki turdagi vazifalarni bajarishi mumkin: transformatsiya va validatsiya.</p><ol><li><strong>Transformatsiya:</strong> Bu, kiritilgan argumentlarni ma&#39;lum formatga o&#39;tkazishni o&#39;z ichiga oladi. Misol uchun, agar siz string formatidagi sonni o&#39;qib olishni xohlashingiz, siz Pipe ni ishlatishingiz mumkin.</li><li><strong>Validatsiya:</strong> Bu, kiritilgan argumentlarning to&#39;g&#39;ri formatda yoki qiymatda bo&#39;lishini tekshirishni o&#39;z ichiga oladi. Agar argument noto&#39;g&#39;ri bo&#39;lsa, Pipe avtomatik ravishda xatolik yuboradi.</li></ol><p>Endi, Pipesni qanday ishlatish kerakligi haqida misollar bilan gaplashamiz.</p><p><strong>Birinchi misol: Built-in <code>ParseIntPipe</code></strong></p><p>NestJS-da <code>ParseIntPipe</code> degan built-in Pipe bor, u string formatidagi sonni integer formatiga o&#39;tkazadi. Bu Pipe&#39;ni route handler&#39;da ishlatish mumkin.</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Controller<span class="token punctuation">,</span> Get<span class="token punctuation">,</span> Param<span class="token punctuation">,</span> ParseIntPipe <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>

@<span class="token function">Controller</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UsersController</span> <span class="token punctuation">{</span>
  @<span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&#39;:id&#39;</span><span class="token punctuation">)</span>
  <span class="token function">findOne</span><span class="token punctuation">(</span>@<span class="token function">Param</span><span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span> ParseIntPipe<span class="token punctuation">)</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// id argumenti endi number turi, biz shu yerda biznes logikani amalga oshiramiz</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">User #</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Bu kodda, <code>:id</code> parametri <code>ParseIntPipe</code> orqali o&#39;tkaziladi, shuning uchun <code>id</code> parametri number formatida bo&#39;ladi. Agar client string formatidagi son emas, balki noto&#39;g&#39;ri qiymat yuborsa, NestJS avtomatik ravishda xatolik yuboradi.</p><p><strong>Ikkinchi misol: Custom Pipe yaratish</strong></p><p>Agar siz o&#39;zingizning custom Pipe&#39;ingizni yaratmoqchi bo&#39;lsangiz, quyidagicha amalga oshirishingiz mumkin:</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> PipeTransform<span class="token punctuation">,</span> Injectable<span class="token punctuation">,</span> ArgumentMetadata<span class="token punctuation">,</span> BadRequestException <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>

@<span class="token function">Injectable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ValidateInputPipe</span> <span class="token keyword">implements</span> <span class="token class-name">PipeTransform</span> <span class="token punctuation">{</span>
  <span class="token function">transform</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> metadata<span class="token operator">:</span> ArgumentMetadata<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">BadRequestException</span><span class="token punctuation">(</span><span class="token string">&#39;Value is required&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// qo&#39;shimcha validatsiya logikasi</span>
    <span class="token keyword">return</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Bu <code>ValidateInputPipe</code> nomli custom Pipe buni ishlatish uchun:</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Controller<span class="token punctuation">,</span> Get<span class="token punctuation">,</span> Query<span class="token punctuation">,</span> BadRequestException <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ValidateInputPipe <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./validate-input.pipe&#39;</span><span class="token punctuation">;</span>

@<span class="token function">Controller</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UsersController</span> <span class="token punctuation">{</span>
  @<span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">findAll</span><span class="token punctuation">(</span>@<span class="token function">Query</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">ValidateInputPipe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// name parametri endi tekshirilgan</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Uchinchi misol: Class-validator va Class-transformer bilan ishlovchi Pipe</strong></p><p><code>class-validator</code> va <code>class-transformer</code> kabi kutubxonalar yordamida, siz parametrlar va DTO&#39;larni (Data Transfer Objects) yaxshi validatsiya va transformatsiya qilishingiz mumkin. Bu ikkala kutubxona birga ishlatilganda, siz <code>@Body()</code>, <code>@Query()</code>, va <code>@Param()</code> decoratorlari uchun yordamchi <code>ValidationPipe</code> dan foydalanishingiz mumkin.</p><p>Avvalo, <code>class-validator</code> kutubxonasini o&#39;rnatamiz:</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code>npm install <span class="token keyword">class</span><span class="token operator">-</span>validator <span class="token keyword">class</span><span class="token operator">-</span>transformer

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Keyin, DTO classini yaratamiz va u uchun validatsiya decoratorlarini qo&#39;shamiz:</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> IsNotEmpty<span class="token punctuation">,</span> IsInt<span class="token punctuation">,</span> IsPositive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;class-validator&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">CreateUserDto</span> <span class="token punctuation">{</span>
  @<span class="token function">IsNotEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  @<span class="token function">IsInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  @<span class="token function">IsPositive</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Shu paytda, <code>ValidationPipe</code> ni ishlatib, <code>@Body()</code> decorator orqali keladigan ma&#39;lumotlarni validatsiya qilishimiz mumkin:</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Controller<span class="token punctuation">,</span> Post<span class="token punctuation">,</span> Body<span class="token punctuation">,</span> ValidationPipe <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CreateUserDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./create-user.dto&#39;</span><span class="token punctuation">;</span>

@<span class="token function">Controller</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UsersController</span> <span class="token punctuation">{</span>
  @<span class="token function">Post</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">create</span><span class="token punctuation">(</span>@<span class="token function">Body</span><span class="token punctuation">(</span>ValidationPipe<span class="token punctuation">)</span> createUserDto<span class="token operator">:</span> CreateUserDto<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Ma&#39;lumotlar endi validatsiya qilingan va CreateUserDto formatiga o&#39;tkazilgan</span>
    <span class="token comment">// Shu yerda biznes logikani amalga oshirishimiz mumkin</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Bu yerda, <code>ValidationPipe</code> <code>@Body()</code> decorator orqali kelgan ma&#39;lumotlarni avtomatik tarzda <code>CreateUserDto</code> ga o&#39;tkazadi va har bir maydon uchun validatsiya qiladi. Agar ma&#39;lumotlar noto&#39;g&#39;ri bo&#39;lsa, avtomatik ravishda xatolik yuboradi.</p><p>Ushbu misollar orqali, NestJS da Pipesning asosiy vazifalarini va ularni qanday qilib ishlatish kerakligini ko&#39;rdik. Boshqa savollaringiz bo&#39;lsa, iltimos so&#39;rang.</p>`,24),o=[e];function p(l,c){return a(),s("div",null,o)}const r=n(i,[["render",p],["__file","pipes.html.vue"]]);export{r as default};

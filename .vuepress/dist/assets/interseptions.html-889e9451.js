import{_ as n,o as s,c as a,d as t}from"./app-6ef299f7.js";const e={},o=t(`<h1 id="interceptors" tabindex="-1"><a class="header-anchor" href="#interceptors" aria-hidden="true">#</a> Interceptors</h1><h1 id="_1-tushunchalr" tabindex="-1"><a class="header-anchor" href="#_1-tushunchalr" aria-hidden="true">#</a> 1 - Tushunchalr</h1><p>NestJS-dagi &quot;Interceptors&quot; haqida gaplashayotganimizda, u umumiy ravishda API-lar uchun foydalanish uchun qanday qilib o&#39;zgartirishlar yaratish yoki ma&#39;lumotlarni tahlil qilish uchun ishlatilishini aytib o&#39;tamiz.</p><p>Interceptor-lar asosan 2 ta vazifani bajara oladi:</p><ol><li>Request va Response o&#39;rtasidagi data flow-ni o&#39;zgartirish</li><li>Request va Response jarayonini monitoring qilish yoki loglash</li></ol><p>Interceptor-lar <code>@Injectable()</code> decorator bilan belgilangan class-lar bo&#39;lib, ular <code>NestInterceptor</code> interface-dan meros oladilar.</p><p>Quyidagi misolga e&#39;tibor bering:</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Injectable<span class="token punctuation">,</span> NestInterceptor<span class="token punctuation">,</span> ExecutionContext<span class="token punctuation">,</span> CallHandler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Observable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rxjs&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> map <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rxjs/operators&#39;</span><span class="token punctuation">;</span>

@<span class="token function">Injectable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">TransformInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">NestInterceptor</span> <span class="token punctuation">{</span>
  <span class="token function">intercept</span><span class="token punctuation">(</span>context<span class="token operator">:</span> ExecutionContext<span class="token punctuation">,</span> next<span class="token operator">:</span> CallHandler<span class="token punctuation">)</span><span class="token operator">:</span> Observable<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> next
      <span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">map</span><span class="token punctuation">(</span>data <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Bu interceptor barcha route-lar uchun qaytarilayotgan ma&#39;lumotlarni <code>{ data: ... }</code> formatiga o&#39;zgartiradi. Bu yerda <code>context</code> o&#39;zgaruvchisi so&#39;rov haqida ma&#39;lumotlarni beradi, <code>next</code> esa controller-dagi metodga kirish uchun ishlatiladi.</p><p>Bu interceptor-ni biror route-da ishlatish uchun, uni controller-ga yoki method-ga <code>@UseInterceptors()</code> decorator orqali ulashingiz kerak:</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Controller<span class="token punctuation">,</span> UseInterceptors <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TransformInterceptor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./transform.interceptor&#39;</span><span class="token punctuation">;</span>

@<span class="token function">Controller</span><span class="token punctuation">(</span><span class="token string">&#39;example&#39;</span><span class="token punctuation">)</span>
@<span class="token function">UseInterceptors</span><span class="token punctuation">(</span>TransformInterceptor<span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ExampleController</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Bu usul bilan, <code>ExampleController</code>-dagi barcha metodlar <code>TransformInterceptor</code>-ni ishlatadi. Agar siz interceptor-ni faqat biror bir metod uchun ishlatmoqchi bo&#39;lsangiz, uni shu metodga decorator sifatida qo&#39;shing:</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Controller<span class="token punctuation">,</span> Get<span class="token punctuation">,</span> UseInterceptors <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TransformInterceptor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./transform.interceptor&#39;</span><span class="token punctuation">;</span>

@<span class="token function">Controller</span><span class="token punctuation">(</span><span class="token string">&#39;example&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ExampleController</span> <span class="token punctuation">{</span>
  @<span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  @<span class="token function">UseInterceptors</span><span class="token punctuation">(</span>TransformInterceptor<span class="token punctuation">)</span>
  <span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Bu misolda, <code>TransformInterceptor</code> faqat <code>findOne()</code> metodida ishlaydi.</p><h1 id="_1-vazifasiga-hayotiy-misol" tabindex="-1"><a class="header-anchor" href="#_1-vazifasiga-hayotiy-misol" aria-hidden="true">#</a> 1-Vazifasiga hayotiy misol</h1><p>Interceptorning birinchi vazifasi request va response o&#39;rtasidagi data flow-ni o&#39;zgartirishdir. Bu misolda biz <code>WrapResponseInterceptor</code> nomli interceptor yaratamiz, bu interceptor javobni boshqa ma&#39;lumot bilan o&#39;rab, boshqa formatda qaytaradi.</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Injectable<span class="token punctuation">,</span> NestInterceptor<span class="token punctuation">,</span> ExecutionContext<span class="token punctuation">,</span> CallHandler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Observable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rxjs&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> map <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rxjs/operators&#39;</span><span class="token punctuation">;</span>

@<span class="token function">Injectable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">WrapResponseInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">NestInterceptor</span> <span class="token punctuation">{</span>
  <span class="token function">intercept</span><span class="token punctuation">(</span>context<span class="token operator">:</span> ExecutionContext<span class="token punctuation">,</span> next<span class="token operator">:</span> CallHandler<span class="token punctuation">)</span><span class="token operator">:</span> Observable<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> next<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">map</span><span class="token punctuation">(</span>data <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> success<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> data <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Bu interceptor har bir response-ni o&#39;rab, yangi formatga keltiradi. Har bir javob <code>{ success: true, data: ... }</code> formatida bo&#39;ladi, bu yerda <code>data</code> asl javob bo&#39;ladi.</p><p>Endi, bu interceptor-ni controller-da ishlataylik:</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Controller<span class="token punctuation">,</span> Get<span class="token punctuation">,</span> UseInterceptors <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> WrapResponseInterceptor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./wrap-response.interceptor&#39;</span><span class="token punctuation">;</span>

@<span class="token function">Controller</span><span class="token punctuation">(</span><span class="token string">&#39;cats&#39;</span><span class="token punctuation">)</span>
@<span class="token function">UseInterceptors</span><span class="token punctuation">(</span>WrapResponseInterceptor<span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">CatsController</span> <span class="token punctuation">{</span>
  @<span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">&#39;cat1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cat2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cat3&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Bu misolda, <code>GET /cats</code> so&#39;rovi kelganda, <code>findAll</code> metodi <code>[&#39;cat1&#39;, &#39;cat2&#39;, &#39;cat3&#39;]</code> arrayini qaytaradi, lekin <code>WrapResponseInterceptor</code> bu javobni <code>{ success: true, data: [&#39;cat1&#39;, &#39;cat2&#39;, &#39;cat3&#39;] }</code> formatiga o&#39;zgartiradi. Bu yerda <code>data</code> maydoni asl javobni ifodalaydi.</p><h1 id="_2-vazifasiga-hayotiy-misol" tabindex="-1"><a class="header-anchor" href="#_2-vazifasiga-hayotiy-misol" aria-hidden="true">#</a> 2-Vazifasiga hayotiy misol</h1><p>Keling, <code>LoggingInterceptor</code> nomli interceptor yaratalay. Bu interceptor har bir so&#39;rovning bajarilish vaqti haqida log yozadi.</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Injectable<span class="token punctuation">,</span> NestInterceptor<span class="token punctuation">,</span> ExecutionContext<span class="token punctuation">,</span> CallHandler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Observable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rxjs&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> tap <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rxjs/operators&#39;</span><span class="token punctuation">;</span>

@<span class="token function">Injectable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">LoggingInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">NestInterceptor</span> <span class="token punctuation">{</span>
  <span class="token function">intercept</span><span class="token punctuation">(</span>context<span class="token operator">:</span> ExecutionContext<span class="token punctuation">,</span> next<span class="token operator">:</span> CallHandler<span class="token punctuation">)</span><span class="token operator">:</span> Observable<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Before...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> now <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> next
      <span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>
        <span class="token function">tap</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">After... </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> now<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Bu interceptor <code>Before...</code> yozuvini chiqaradi, so&#39;rov bajarilishini kutadi, va so&#39;rov bajarilgandan keyin <code>After...</code> yozuvini chiqaradi, shuningdek, so&#39;rovning bajarilish vaqti haqida ham ma&#39;lumot beradi.</p><p>Endi, bu interceptor-ni biror controller-da ishlataylik:</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Controller<span class="token punctuation">,</span> Get<span class="token punctuation">,</span> UseInterceptors <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> LoggingInterceptor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./logging.interceptor&#39;</span><span class="token punctuation">;</span>

@<span class="token function">Controller</span><span class="token punctuation">(</span><span class="token string">&#39;cats&#39;</span><span class="token punctuation">)</span>
@<span class="token function">UseInterceptors</span><span class="token punctuation">(</span>LoggingInterceptor<span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">CatsController</span> <span class="token punctuation">{</span>
  @<span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;This action returns all cats&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Bu misolda, <code>LoggingInterceptor</code> <code>CatsController</code>-dagi barcha so&#39;rovlarga ta&#39;sir qiladi, shu bilan birga, har bir so&#39;rovdan oldin va keyin log yoziladi. Har bir so&#39;rovnoma <code>GET /cats</code> so&#39;rovi kelganda, <code>Before...</code> va <code>After...</code> yozuvlari chiqadi, va so&#39;rov bajarilish vaqti konsolga yoziladi.</p>`,28),p=[o];function c(i,l){return s(),a("div",null,p)}const u=n(e,[["render",c],["__file","interseptions.html.vue"]]);export{u as default};

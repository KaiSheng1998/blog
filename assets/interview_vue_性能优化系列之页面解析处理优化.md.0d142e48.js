import{_ as s,o as a,c as l,Q as e}from"./chunks/framework.01edc906.js";const u=JSON.parse('{"title":"性能优化系列之页面解析处理优化","description":"","frontmatter":{},"headers":[],"relativePath":"interview/vue/性能优化系列之页面解析处理优化.md","filePath":"interview/vue/性能优化系列之页面解析处理优化.md"}'),n={name:"interview/vue/性能优化系列之页面解析处理优化.md"},t=e(`<h1 id="性能优化系列之页面解析处理优化" tabindex="-1">性能优化系列之页面解析处理优化 <a class="header-anchor" href="#性能优化系列之页面解析处理优化" aria-label="Permalink to &quot;性能优化系列之页面解析处理优化&quot;">​</a></h1><h2 id="_1-资源加载顺序" tabindex="-1">1，资源加载顺序 <a class="header-anchor" href="#_1-资源加载顺序" aria-label="Permalink to &quot;1，资源加载顺序&quot;">​</a></h2><blockquote><p>资源加载顺序优化是前端性能优化的一个重要方面。正确的资源加载顺序可以减少页面加载时间，提高用户体验。以下是一些可行的方法：</p></blockquote><p>1.将 CSS 文件放在 head 中：将 CSS 文件放在 head 中可以使浏览器尽早地开始解析样式，避免了在页面渲染时出现无样式内容的情况。 例如，下面的 HTML 代码中就将 CSS 文件放在 head 中：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;!-- 页面内容 --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/body&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;!-- 页面内容 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/body&gt;</span></span></code></pre></div><p>2.将 JavaScript 文件放在 body 底部：将 JavaScript 文件放在 body 底部可以避免文件阻止页面渲染，从而加快页面加载速度。当浏览器解析到 JavaScript 文件时，它会停止解析页面并下载该文件。如果文件比较大，这可能会导致页面长时间白。 例如，下面的 HTML 代码中就将 JavaScript 文件放在 body 底部：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;title&gt;Example Page&lt;/title&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;!-- 页面内容 --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;script src=&quot;script.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;title&gt;Example Page&lt;/title&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;!-- 页面内容 --&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &lt;script src=&quot;script.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/html&gt;</span></span></code></pre></div><p>3.使用预加载和懒加载：通过使用预加载和懒加载技术，可以减少不必要的资源请求并提高页面加载效率。预加载是指在页面加载完成前提前加载一些重要资源，如图片、字体等。懒加载则是指在需要时再加载资源，比如在滚动到可视区域之前不加载图片。 例如，下面的代码中使用了 lazyload.js 库实现了懒加载：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;title&gt;Example Page&lt;/title&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;script src=&quot;lazyload.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;img class=&quot;lazy&quot; data-src=&quot;image.jpg&quot; alt=&quot;Example Image&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;img class=&quot;lazy&quot; data-src=&quot;another-image.jpg&quot; alt=&quot;Another Example Image&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;!-- 页面内容 --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;title&gt;Example Page&lt;/title&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;script src=&quot;lazyload.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;img class=&quot;lazy&quot; data-src=&quot;image.jpg&quot; alt=&quot;Example Image&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;img class=&quot;lazy&quot; data-src=&quot;another-image.jpg&quot; alt=&quot;Another Example Image&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &lt;!-- 页面内容 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/html&gt;</span></span></code></pre></div><p>4.使用 CDN 加速：将静态文件存放在 CDN 上可以提高文件下载速度并减轻服务器负担。CDN 将文件缓存在全球多个节点上，用户可以从最近的节点获取文件，从而加快文件加载速度。 例如，下面的代码中使用了百度 CDN 加速库来加载 jQuery 库</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;title&gt;Example Page&lt;/title&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;script src=&quot;https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;!-- 页面内容 --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;title&gt;Example Page&lt;/title&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;script src=&quot;https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;!-- 页面内容 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/html&gt;</span></span></code></pre></div><h2 id="_2-异步加载资源" tabindex="-1">2，异步加载资源 <a class="header-anchor" href="#_2-异步加载资源" aria-label="Permalink to &quot;2，异步加载资源&quot;">​</a></h2><blockquote><p>通过异步加载脚本和资源，可以减少阻塞页面加载的因素。例如，在加载 JavaScript 文件时，可以使用 defer 或 async 属性来异步加载文件。</p></blockquote><h3 id="defer-和-async-的区别" tabindex="-1">defer 和 async 的区别 <a class="header-anchor" href="#defer-和-async-的区别" aria-label="Permalink to &quot;defer 和 async 的区别&quot;">​</a></h3><p>1.defer 属性：表示该脚本需要延迟执行，等到文档解析完毕后再执行。多个 defer 脚本按照它们在文档中出现的顺序执行（不考虑 onload 事件），但是会在 DOMContentLoaded 事件之前执行。defer 属性只适用于外部脚本文件。 2.async 属性：表示该脚本可以异步加载，不会阻塞页面渲染。脚本下载完成后会立即执行，不保证多个 async 脚本按照它们在文档中出现的顺序执行。</p><h3 id="使用-defer-和-async-优化脚本加载" tabindex="-1">使用 defer 和 async 优化脚本加载 <a class="header-anchor" href="#使用-defer-和-async-优化脚本加载" aria-label="Permalink to &quot;使用 defer 和 async 优化脚本加载&quot;">​</a></h3><p>1.使用 defer 属性：如果脚本文件不需要立即执行，可以使用 defer 属性来延迟执行。例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;title&gt;Example Page&lt;/title&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;script src=&quot;script.js&quot; defer&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;!-- 页面内容 --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;title&gt;Example Page&lt;/title&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;script src=&quot;script.js&quot; defer&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;!-- 页面内容 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/html&gt;</span></span></code></pre></div><p>2.使用 async 属性：如果脚本文件可以异步加载并立即执行，可以使用 async 属性。例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;title&gt;Example Page&lt;/title&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;script src=&quot;script.js&quot; async&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;!-- 页面内容 --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;title&gt;Example Page&lt;/title&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;script src=&quot;script.js&quot; async&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;!-- 页面内容 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/html&gt;</span></span></code></pre></div><p>3.结合 defer 和 async 属性：如果要兼顾脚本的延迟执行和异步加载，可以将 defer 和 async 属性结合使用。例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;title&gt;Example Page&lt;/title&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;script src=&quot;deferred.js&quot; defer&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;script src=&quot;async.js&quot; async&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;!-- 页面内容 --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;title&gt;Example Page&lt;/title&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;script src=&quot;deferred.js&quot; defer&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;script src=&quot;async.js&quot; async&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;!-- 页面内容 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/html&gt;</span></span></code></pre></div><p>在这个例子中，deferred.js 文件会在 DOMContentLoaded 事件之前（但是不阻塞页面渲染）加载并延迟执行，而 async.js 文件会被立即下载并在下载完成后立即执行，不会阻塞页面渲染。</p><h2 id="_3-资源压缩" tabindex="-1">3，资源压缩 <a class="header-anchor" href="#_3-资源压缩" aria-label="Permalink to &quot;3，资源压缩&quot;">​</a></h2><blockquote><p>通过减小 HTML、CSS 和 JavaScript 文件的文件大小，可以提高文件的下载速度，从而加快页面加载速度。</p></blockquote><p>1.压缩 HTML：在服务器上对 HTML 文件进行压缩可以减少文件大小并加快文件下载速度。可以使用像 HTMLMinifier 这样的工具来压缩 HTML 文件。<br> 例如，下面的代码中就使用了 HTMLMinifier 对 HTML 文件进行了压缩：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;&lt;title&gt;Example Page&lt;/title&gt;&lt;/head&gt;&lt;body&gt;&lt;h1&gt;Hello, World!&lt;/h1&gt;&lt;p&gt;This is an example page.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;&lt;title&gt;Example Page&lt;/title&gt;&lt;/head&gt;&lt;body&gt;&lt;h1&gt;Hello, World!&lt;/h1&gt;&lt;p&gt;This is an example page.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</span></span></code></pre></div><p>2.压缩 CSS：在服务器上对 CSS 文件进行压缩可以减少文件大小并加快文件下载速度。可以使用像 Clean-CSS 这样的工具来压缩 CSS 文件。<br> 例如，下面的代码中就使用了 Clean-CSS 对 CSS 文件进行了压缩：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">body{background:#fff;color:#000}h1{font-size:2em;margin-bottom:0.5em}p{margin-bottom:1em}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">body{background:#fff;color:#000}h1{font-size:2em;margin-bottom:0.5em}p{margin-bottom:1em}</span></span></code></pre></div><p>3.压缩 JavaScript：在服务器上对 JavaScript 文件进行压缩可以减少文件大小并加快文件下载速度。可以使用像 UglifyJS 这样的工具来压缩 JavaScript 文件。<br> 例如，下面的代码中就使用了 UglifyJS 对 JavaScript 文件进行了压缩：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function hello(){console.log(&quot;Hello, World!&quot;)}hello();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function hello(){console.log(&quot;Hello, World!&quot;)}hello();</span></span></code></pre></div><p>需要注意的是，在进行文件压缩时，应该尽量保持代码的可读性和可维护性。对于一些特别长的变量名，可以使用短变量名来代替，但是不要过分压缩代码，导致代码变得难以理解和维护。</p><hr><p>除了在服务器上压缩文件外，还可以使用一些在线工具来压缩文件，如 HTML Minifier、CSS Minifier 和 JS Compressor 等。这些工具都提供了简单易用的界面，可以快速压缩文件并下载压缩后的文件。</p>`,34),p=[t];function o(c,i,r,g,d,y){return a(),l("div",null,p)}const m=s(n,[["render",o]]);export{u as __pageData,m as default};

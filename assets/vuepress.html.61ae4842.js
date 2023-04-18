import{_ as r,r as p,o as t,a as c,b as n,d as e,F as l,e as s,c as o}from"./app.58c1cda6.js";const i={},u=n("h2",{id:"\u4ECB\u7ECD",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4ECB\u7ECD","aria-hidden":"true"},"#"),s(" \u4ECB\u7ECD")],-1),b=n("p",null,"\u9759\u6001\u7F51\u7AD9\u751F\u6210\u5668, Vue \u9A71\u52A8",-1),h=n("h3",{id:"\u5B98\u7F51",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5B98\u7F51","aria-hidden":"true"},"#"),s(" \u5B98\u7F51")],-1),d=n("p",null,"\u4F7F\u7528\u65B9\u6CD5, \u53C2\u8003\u5B98\u7F51",-1),m={href:"https://www.vuepress.cn/",target:"_blank",rel:"noopener noreferrer"},_=s("https://www.vuepress.cn/"),g=o(`<h2 id="\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a> \u90E8\u7F72</h2><p>\u8FD9\u91CC\u63D0\u4F9B\u4E00\u4E2A github \u9759\u6001\u9875\u7684\u90E8\u7F72\u65B9\u6CD5\uFF0C\u5148\u521B\u5EFA\u4ED3\u5E93 <code>xxx.github.io</code>\uFF0Cxxx \u4E3A\u4F60 Github \u6CE8\u518C\u7684\u540D\u5B57\uFF0C\u4EE5\u540E xxx.github.io \u5C06\u6210\u4E3A\u4F60\u9759\u6001\u9875\u7684\u6839\u57DF\u540D\uFF0C\u914D\u7F6E Action \u81EA\u52A8\u90E8\u7F72\u540E\uFF0C\u5199\u597D\u7684\u4EE3\u7801\u76F4\u63A5 push \u5230\u4E3B\u5206\u652F</p><h3 id="github-actions" tabindex="-1"><a class="header-anchor" href="#github-actions" aria-hidden="true">#</a> Github Actions</h3><p>\u5728\u4ED3\u5E93 Actions \u4E2D\u914D\u7F6E Workflow\uFF0C\u53EF\u5E2E\u52A9\u81EA\u52A8\u6253\u5305\u7A0B\u5E8F\uFF0C<code>git push</code> \u540E\u5373\u53EF\u89E6\u53D1\uFF0C\u5B83\u4F1A\u5C06\u6253\u5305\u597D\u7684 Dist \u6587\u4EF6\u653E\u5165 <code>gh-pages</code> \u5206\u652F</p><h4 id="workflow-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#workflow-\u793A\u4F8B" aria-hidden="true">#</a> Workflow \u793A\u4F8B</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>name: deploy
on:
  push:
    branches: <span class="token punctuation">[</span> main <span class="token punctuation">]</span>
jobs:
  build:
    <span class="token comment"># \u73AF\u5883</span>
    runs-on: ubuntu-latest
    <span class="token comment"># \u6B65\u9AA4</span>
    steps:
      <span class="token comment"># \u62C9\u4EE3\u7801</span>
      - uses: actions/checkout@v3

      <span class="token comment"># \u521D\u59CB\u5316 \u73AF\u5883</span>
      - name: \u521D\u59CB\u5316 Node.js \u73AF\u5883
        uses: actions/setup-node@v3.1.1
        with:
          node-version: <span class="token string">&quot;14.X&quot;</span>

      <span class="token comment"># \u5B89\u88C5\u4F9D\u8D56</span>
      - name: \u5B89\u88C5\u4F9D\u8D56
        run: <span class="token function">npm</span> <span class="token function">install</span>

      <span class="token comment"># \u6784\u5EFA App</span>
      - name: \u6784\u5EFA App
        run: <span class="token function">npm</span> run build

      <span class="token comment"># \u90E8\u7F72\u5230 Github Page</span>
      - name: \u90E8\u7F72\u5230 Github Page
        uses: peaceiris/actions-gh-pages@v3
        with:
          personal_token: <span class="token variable">\${{ secrets.PERSONAL_TOKEN }</span><span class="token punctuation">}</span>
          publish_dir: docs/.vuepress/dist
          emptyCommits: <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h3 id="github-page" tabindex="-1"><a class="header-anchor" href="#github-page" aria-hidden="true">#</a> Github Page</h3><p>\u4ED3\u5E93 Settings \u4E2D Pages \u9009\u62E9 Workflow \u751F\u6210\u7684 <code>gh-pages</code> \u5206\u652F\uFF0C\u8BBF\u95EE <code>xxx.github.io</code> \u8BD5\u8BD5</p><h4 id="\u5B98\u65B9\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u5B98\u65B9\u6587\u6863" aria-hidden="true">#</a> \u5B98\u65B9\u6587\u6863</h4>`,9),k={href:"https://docs.github.com/cn/pages",target:"_blank",rel:"noopener noreferrer"},f=s("https://docs.github.com/cn/pages");function x(v,w){const a=p("ExternalLinkIcon");return t(),c(l,null,[u,b,h,d,n("blockquote",null,[n("p",null,[n("a",m,[_,e(a)])])]),g,n("blockquote",null,[n("p",null,[n("a",k,[f,e(a)])])])],64)}var A=r(i,[["render",x],["__file","vuepress.html.vue"]]);export{A as default};

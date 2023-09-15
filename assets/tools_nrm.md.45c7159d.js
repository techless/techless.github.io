import{_ as s,o as a,c as n,M as l}from"./chunks/framework.623678b7.js";const m=JSON.parse('{"title":"NRM","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"tools/nrm.md"}'),p={name:"tools/nrm.md"},o=l(`<h1 id="nrm" tabindex="-1">NRM <a class="header-anchor" href="#nrm" aria-label="Permalink to &quot;NRM&quot;">​</a></h1><p><a href="https://github.com/Pana/nrm" target="_blank" rel="noreferrer">nrm</a> 是 npm pnpm 的镜像源管理工具，可以快速切换镜像源</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>全局安装</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">nrm</span></span></code></pre></div><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 列出当前源</span></span>
<span class="line"><span style="color:#FFCB6B;">nrm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">ls</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看当前源</span></span>
<span class="line"><span style="color:#FFCB6B;">nrm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">current</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换源</span></span>
<span class="line"><span style="color:#FFCB6B;">nrm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">use</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">registr</span><span style="color:#BABED8;">y</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 添加源</span></span>
<span class="line"><span style="color:#FFCB6B;">nrm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">registr</span><span style="color:#BABED8;">y</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">ur</span><span style="color:#BABED8;">l</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> [home]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除源</span></span>
<span class="line"><span style="color:#FFCB6B;">nrm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">del</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">registr</span><span style="color:#BABED8;">y</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 测试源速度，不加 [registry] 测试所有源</span></span>
<span class="line"><span style="color:#FFCB6B;">nrm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">test</span><span style="color:#BABED8;"> [registry]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看 nrm 版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nrm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-V</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看帮助</span></span>
<span class="line"><span style="color:#FFCB6B;">nrm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-h</span></span></code></pre></div>`,7),e=[o];function t(r,c,i,y,B,D){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{m as __pageData,d as default};

import{_ as s,o as n,c as a,M as l}from"./chunks/framework.623678b7.js";const D=JSON.parse('{"title":"pyenv","description":"","frontmatter":{},"headers":[],"relativePath":"tools/pyenv.md"}'),p={name:"tools/pyenv.md"},e=l(`<h1 id="pyenv" tabindex="-1">pyenv <a class="header-anchor" href="#pyenv" aria-label="Permalink to &quot;pyenv&quot;">​</a></h1><p>python版本管理工具</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">pyenv</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">pyenv-virtualenv</span></span></code></pre></div><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看 pyenv 版本</span></span>
<span class="line"><span style="color:#FFCB6B;">pyenv</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--version</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看当前 python 版本</span></span>
<span class="line"><span style="color:#FFCB6B;">pyenv</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">version</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看当前可用 python 版本</span></span>
<span class="line"><span style="color:#FFCB6B;">pyenv</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">versions</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看所有可安装的版本</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># mbp m2测试安装 \`python 3.10.4\` 可用</span></span>
<span class="line"><span style="color:#FFCB6B;">pyenv</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装指定版本</span></span>
<span class="line"><span style="color:#FFCB6B;">pyenv</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">3.6</span><span style="color:#C3E88D;">.5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装新版本后执行 rehash</span></span>
<span class="line"><span style="color:#FFCB6B;">pyenv</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">rehash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除指定版本</span></span>
<span class="line"><span style="color:#FFCB6B;">pyenv</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">uninstall</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">3.5</span><span style="color:#C3E88D;">.2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 指定全局版本</span></span>
<span class="line"><span style="color:#FFCB6B;">pyenv</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">global</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">3.6</span><span style="color:#C3E88D;">.5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 指定多个全局版本, 3版本优先</span></span>
<span class="line"><span style="color:#FFCB6B;">pyenv</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">global</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">3.6</span><span style="color:#C3E88D;">.5</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2.7</span><span style="color:#C3E88D;">.14</span></span></code></pre></div>`,6),o=[e];function t(c,r,y,i,B,E){return n(),a("div",null,o)}const h=s(p,[["render",t]]);export{D as __pageData,h as default};

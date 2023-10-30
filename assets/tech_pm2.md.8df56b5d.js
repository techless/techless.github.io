import{_ as s,o as a,c as n,M as l}from"./chunks/framework.ad85ce10.js";const C=JSON.parse('{"title":"PM2","description":"","frontmatter":{},"headers":[],"relativePath":"tech/pm2.md"}'),p={name:"tech/pm2.md"},o=l(`<h1 id="pm2" tabindex="-1">PM2 <a class="header-anchor" href="#pm2" aria-label="Permalink to &quot;PM2&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">pm2</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-g</span></span></code></pre></div><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 启动</span></span>
<span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">start</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--name</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[package.json中的name]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">run</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">start</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看进程</span></span>
<span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">list</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 结束并删除进程</span></span>
<span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">delete</span><span style="color:#BABED8;"> [进程name]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 监控</span></span>
<span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">monit</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 日志</span></span>
<span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">logs</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 停止</span></span>
<span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">xxx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 停止所有</span></span>
<span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">all</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重启</span></span>
<span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">xxx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重启所有</span></span>
<span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">all</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重载</span></span>
<span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">reload</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">xxx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重载所有</span></span>
<span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">reload</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">all</span></span></code></pre></div>`,5),e=[o];function t(c,r,y,i,B,E){return a(),n("div",null,e)}const m=s(p,[["render",t]]);export{C as __pageData,m as default};
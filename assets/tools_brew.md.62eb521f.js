import{_ as s,o as n,c as a,O as l}from"./chunks/framework.4703df87.js";const E=JSON.parse('{"title":"Brew","description":"","frontmatter":{},"headers":[],"relativePath":"tools/brew.md"}'),p={name:"tools/brew.md"},o=l(`<h1 id="brew" tabindex="-1">Brew <a class="header-anchor" href="#brew" aria-label="Permalink to &quot;Brew&quot;">​</a></h1><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看版本</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看命令帮助</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-help</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看已安装程序的更新</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">outdated</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 更新单个软件</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">upgrade</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 更新所有软件</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">upgrade</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装软件</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 卸载软件</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uninstall</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 清理所有包旧版本(安装包缓存)</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cleanup</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示要删除的内容，但不删除</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cleanup</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-n</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 清理单个软件旧版本</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cleanup</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看包信息</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">info</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看安装列表</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查询可用包</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">search</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示包依赖</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">deps</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示安装的服务列表</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">services</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span></span></code></pre></div>`,3),e=[o];function t(c,r,y,i,C,A){return n(),a("div",null,e)}const B=s(p,[["render",t]]);export{E as __pageData,B as default};

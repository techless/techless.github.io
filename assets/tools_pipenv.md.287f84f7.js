import{_ as s,o as n,c as a,M as p}from"./chunks/framework.ad85ce10.js";const C=JSON.parse('{"title":"pipenv","description":"","frontmatter":{},"headers":[],"relativePath":"tools/pipenv.md"}'),l={name:"tools/pipenv.md"},e=p(`<h1 id="pipenv" tabindex="-1">pipenv <a class="header-anchor" href="#pipenv" aria-label="Permalink to &quot;pipenv&quot;">​</a></h1><p>Python 虚拟环境管理工具</p><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看当前环境位置</span></span>
<span class="line"><span style="color:#FFCB6B;">pipenv</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--venv</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 进入虚拟环境</span></span>
<span class="line"><span style="color:#FFCB6B;">pipenv</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">shell</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装包到dev</span></span>
<span class="line"><span style="color:#FFCB6B;">pipenv</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--dev</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">xxx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看项目位置</span></span>
<span class="line"><span style="color:#FFCB6B;">pipenv</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--where</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看虚拟环境python解释器位置</span></span>
<span class="line"><span style="color:#FFCB6B;">pipenv</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--py</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看包依赖关系</span></span>
<span class="line"><span style="color:#FFCB6B;">pipenv</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">graph</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 运行命令</span></span>
<span class="line"><span style="color:#FFCB6B;">pipenv</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">run</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">xxx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 更新所有包</span></span>
<span class="line"><span style="color:#FFCB6B;">pipenv</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">update</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 更新包</span></span>
<span class="line"><span style="color:#FFCB6B;">pipenv</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">update</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">xxx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看过期包信息</span></span>
<span class="line"><span style="color:#FFCB6B;">pipenv</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">update</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--outdated</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 生成lock文件</span></span>
<span class="line"><span style="color:#FFCB6B;">pipenv</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">lock</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 生成requirements文件</span></span>
<span class="line"><span style="color:#FFCB6B;">pipenv</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">requirements</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">requirements.txt</span></span></code></pre></div>`,4),o=[e];function t(c,r,i,y,B,E){return n(),a("div",null,o)}const d=s(l,[["render",t]]);export{C as __pageData,d as default};

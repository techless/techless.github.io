import{_ as s,o as a,c as n,O as l}from"./chunks/framework.4703df87.js";const h=JSON.parse('{"title":"GIT","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"tech/git-1.md"}'),o={name:"tech/git-1.md"},p=l(`<h1 id="git" tabindex="-1">GIT <a class="header-anchor" href="#git" aria-label="Permalink to &quot;GIT&quot;">​</a></h1><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 全局配置</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">techless</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.email</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">workth@163.com</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 局部配置</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">techless</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.email</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">workth@163.com</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看配置信息</span></span>
<span class="line"><span style="color:#FFCB6B;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./gitconfig</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看版本</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看配置</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--local</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--list</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看当前名字</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.name</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看当前邮箱</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.email</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 禁止忽略大小写不敏感</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">core.ignorecase</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span></span></code></pre></div><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h2><h3 id="初始化-init" tabindex="-1">初始化 <code>init</code> <a class="header-anchor" href="#初始化-init" aria-label="Permalink to &quot;初始化 \`init\`&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 新仓库 初始化仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span></code></pre></div><h3 id="克隆-clone" tabindex="-1">克隆 <code>clone</code> <a class="header-anchor" href="#克隆-clone" aria-label="Permalink to &quot;克隆 \`clone\`&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx.git</span></span></code></pre></div><h3 id="操作日志-log" tabindex="-1">操作日志 <code>log</code> <a class="header-anchor" href="#操作日志-log" aria-label="Permalink to &quot;操作日志 \`log\`&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查询版本日志</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查询版本变动日志</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查询版本日志 单行简略信息 近10条</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--oneline</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-10</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查询版本变动日志最近一次</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查询版本文件变动日志</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--name-only</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查询版本文件变动详细日志 (添加还是修改)</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--name-status</span></span></code></pre></div><h3 id="远程-remote" tabindex="-1">远程 <code>remote</code> <a class="header-anchor" href="#远程-remote" aria-label="Permalink to &quot;远程 \`remote\`&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看远程信息</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查询远程信息(详细)</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 添加远程地址 [如删除 origin]</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/xxx/test.git</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除远程地址</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 修改远程地址 [如修改 origin]</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set-url</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/xxx/test.git</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 拉取远程仓库的分支到本地指定分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fetch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin-branch-name:local-branch-name</span></span></code></pre></div><h3 id="添加暂存区-add" tabindex="-1">添加暂存区 <code>add</code> <a class="header-anchor" href="#添加暂存区-add" aria-label="Permalink to &quot;添加暂存区 \`add\`&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 添加xxx.txt到暂存区</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx.txt</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 添加所有文件到暂存区</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span></code></pre></div><h3 id="提交-commit" tabindex="-1">提交 <code>commit</code> <a class="header-anchor" href="#提交-commit" aria-label="Permalink to &quot;提交 \`commit\`&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 提交暂存区到本地仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">提交信息</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 提交暂存区到本地仓库，-a 代表添加所有修改的文件,不包括新建文件</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">提交信息</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># --amend 代表修改上一次提交的信息</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--amend</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># --no-edit 代表不修改上一次提交的信息,直接提交</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--amend</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">--no-edit</span></span></code></pre></div><h3 id="拉取版本-pull" tabindex="-1">拉取版本 <code>pull</code> <a class="header-anchor" href="#拉取版本-pull" aria-label="Permalink to &quot;拉取版本 \`pull\`&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span></span></code></pre></div><h3 id="拉取版本对比-fetch" tabindex="-1">拉取版本对比 <code>fetch</code> <a class="header-anchor" href="#拉取版本对比-fetch" aria-label="Permalink to &quot;拉取版本对比 \`fetch\`&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fetch</span></span></code></pre></div><h3 id="推送版本库-push" tabindex="-1">推送版本库 <code>push</code> <a class="header-anchor" href="#推送版本库-push" aria-label="Permalink to &quot;推送版本库 \`push\`&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 推送到远程 master 分支 [需要提前设置好远程信息]</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span></code></pre></div><h3 id="修改-mv" tabindex="-1">修改 <code>mv</code> <a class="header-anchor" href="#修改-mv" aria-label="Permalink to &quot;修改 \`mv\`&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 改名</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mv</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx.txt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yyy.txt</span></span></code></pre></div><ul><li>可能会遇到 indexControler.txt 提交到暂存区,但是显示 indexcontroler.txt,可以用 mv 命令解决</li></ul><h3 id="删除-rm" tabindex="-1">删除 <code>rm</code> <a class="header-anchor" href="#删除-rm" aria-label="Permalink to &quot;删除 \`rm\`&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 删除版本库和工作区中文件</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx.txt</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 仅删除版本库中文件，不删除工作区文件</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--cache</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx.txt</span></span></code></pre></div><h3 id="检出-checkout" tabindex="-1">检出 <code>checkout</code> <a class="header-anchor" href="#检出-checkout" aria-label="Permalink to &quot;检出 \`checkout\`&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 创建dev分支, 并切换到dev分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换到master分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 回退到上一版本</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HEAD^</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 回退前n个版本</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HEAD~n</span></span></code></pre></div><h3 id="分支-branch" tabindex="-1">分支 <code>branch</code> <a class="header-anchor" href="#分支-branch" aria-label="Permalink to &quot;分支 \`branch\`&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看所有分支及当前处于哪个分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 创建dev分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 移动分支位置</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HEAD~n</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除远程dev分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 忽略提醒，强制删除dev分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看已合并分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--merged</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看未合并分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--no-merged</span></span></code></pre></div><h3 id="撤销-reset-revert-restore" tabindex="-1">撤销 <code>reset</code> <code>revert</code> <code>restore</code> <a class="header-anchor" href="#撤销-reset-revert-restore" aria-label="Permalink to &quot;撤销 \`reset\` \`revert\` \`restore\`&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 撤销，仅本地有效，未提交前可以使用</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HEAD~1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 撤销，生成新纪录，用于远程提交</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">revert</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HEAD</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 撤销暂存区文件到工作目录</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restore</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--staged</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span></code></pre></div><h3 id="临时存储-stash" tabindex="-1">临时存储 <code>stash</code> <a class="header-anchor" href="#临时存储-stash" aria-label="Permalink to &quot;临时存储 \`stash\`&quot;">​</a></h3><p>未写完代码，但需要切换分支，可以用此命令先暂时保存</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 创建临时存储</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 列出临时存储</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 恢复临时存储</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apply</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除临时存储</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">drop</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash@{</span><span style="color:#F78C6C;">0</span><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 恢复最新状态并删除临时存储</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pop</span></span></code></pre></div><h2 id="gitignore-文件" tabindex="-1">.gitignore 文件 <a class="header-anchor" href="#gitignore-文件" aria-label="Permalink to &quot;.gitignore 文件&quot;">​</a></h2><p>忽略提交的文件</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># txt后缀的忽略</span></span>
<span class="line"><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.txt</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># txt后缀忽略除了xxx.txt</span></span>
<span class="line"><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">xxx.txt</span></span>
<span class="line"><span style="color:#89DDFF;">!</span><span style="color:#FFCB6B;">a.txt</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 忽略文件夹</span></span>
<span class="line"><span style="color:#FFCB6B;">/xxx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 忽略子目录下所有txt文件</span></span>
<span class="line"><span style="color:#FFCB6B;">/xxx/**/*.txt</span></span></code></pre></div><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><p>The file will have its original line endings in your working directory</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--cached</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">core.autocrlf</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span></code></pre></div><p>Updates were rejected because the remote contains work that you do</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 原因是已经建立仓库</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 先将空仓库拉取下来rebase到本地仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rebase</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 然后重新提交</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span></code></pre></div>`,44),e=[p];function t(c,r,i,C,y,D){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{h as __pageData,d as default};

import{_ as s,o as a,c as n,O as l}from"./chunks/framework.4703df87.js";const g=JSON.parse('{"title":"GIT","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"tech/git.md"}'),o={name:"tech/git.md"},p=l(`<h1 id="git" tabindex="-1">GIT <a class="header-anchor" href="#git" aria-label="Permalink to &quot;GIT&quot;">​</a></h1><h2 id="安装-git" tabindex="-1">安装 Git <a class="header-anchor" href="#安装-git" aria-label="Permalink to &quot;安装 Git&quot;">​</a></h2><blockquote><p><a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" target="_blank" rel="noreferrer">https://git-scm.com/book/en/v2/Getting-Started-Installing-Git</a></p></blockquote><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Windows</span></span>
<span class="line"><span style="color:#FFCB6B;">winget</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--id</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Git.Git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--source</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">winget</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># CentOS</span></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Ubuntu / Debian</span></span>
<span class="line"><span style="color:#FFCB6B;">apt-get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Mac</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span></span></code></pre></div><h2 id="git-操作合集" tabindex="-1">Git 操作合集 <a class="header-anchor" href="#git-操作合集" aria-label="Permalink to &quot;Git 操作合集&quot;">​</a></h2><h3 id="初次配置" tabindex="-1">初次配置 <a class="header-anchor" href="#初次配置" aria-label="Permalink to &quot;初次配置&quot;">​</a></h3><ul><li>/etc/gitconfig 文件</li><li>~/.gitconfig 或 ~/.config/git/config 文件</li><li>工作目录中的 .git/config</li></ul><p>每个级别覆盖上一级别的配置</p><p>查看所有配置以及它们所在的文件：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--list</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--show-origin</span></span></code></pre></div><h4 id="用户信息" tabindex="-1">用户信息 <a class="header-anchor" href="#用户信息" aria-label="Permalink to &quot;用户信息&quot;">​</a></h4><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">John Doe</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.email</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">johndoe@example.com</span></span></code></pre></div><p>使用 <code>--global</code> 选项，更改的配置文件位于用户主目录下，如果不使用，那么就是当前的仓库的配置文件。</p><h4 id="检查配置信息" tabindex="-1">检查配置信息 <a class="header-anchor" href="#检查配置信息" aria-label="Permalink to &quot;检查配置信息&quot;">​</a></h4><p>列出当前 Git 配置信息，重复的配置会被覆盖，仅显示最后一次设置的值。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--list</span></span></code></pre></div><p>查看某个配置 <code>git config &lt;key&gt;</code></p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.name</span></span></code></pre></div><h3 id="获取-git-仓库" tabindex="-1">获取 Git 仓库 <a class="header-anchor" href="#获取-git-仓库" aria-label="Permalink to &quot;获取 Git 仓库&quot;">​</a></h3><h4 id="已有项目" tabindex="-1">已有项目 <a class="header-anchor" href="#已有项目" aria-label="Permalink to &quot;已有项目&quot;">​</a></h4><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span></code></pre></div><h4 id="克隆现有仓库" tabindex="-1">克隆现有仓库 <a class="header-anchor" href="#克隆现有仓库" aria-label="Permalink to &quot;克隆现有仓库&quot;">​</a></h4><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/techless/techless.github.io.git</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 自定义目录名为 demo</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/techless/techless.github.io.git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">demo</span></span></code></pre></div><h3 id="别名" tabindex="-1">别名 <a class="header-anchor" href="#别名" aria-label="Permalink to &quot;别名&quot;">​</a></h3><p>常用别名</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看简要状态</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alias.st</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">status -sb</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 检出</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alias.co</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">checkout</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看单行提交历史</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alias.ll</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">log --oneline</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 最近一次提交</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alias.last</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">log -1 HEAD --stat</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 提交</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alias.cm</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">commit -m</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 远程仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alias.rv</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">remote -v</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 差异</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alias.d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">diff</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 差异外部工具</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alias.dv</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">difftool -t vimdiff -y</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 配置列表</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alias.gl</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">config --global -l</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 搜索提交</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alias.se</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">!git rev-list --all | xargs git grep -F</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 贡献者排序</span></span>
<span class="line"><span style="color:#FFCB6B;">rank</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shortlog</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-sn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--no-merges</span></span></code></pre></div><h2 id="git命令" tabindex="-1">Git命令 <a class="header-anchor" href="#git命令" aria-label="Permalink to &quot;Git命令&quot;">​</a></h2><h3 id="status" tabindex="-1">status <a class="header-anchor" href="#status" aria-label="Permalink to &quot;status&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看当前文件状态</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># (简洁) 查看当前文件状态</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span></span></code></pre></div><h3 id="add" tabindex="-1">add <a class="header-anchor" href="#add" aria-label="Permalink to &quot;add&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 将新文件或已修改的文件放入暂存区，或者冲突文件标记为已解决状态</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">README.md</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># (所有文件) 将新文件或已修改的文件放入暂存区，或者冲突文件标记为已解决状态</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span></code></pre></div><h3 id="commit" tabindex="-1">commit <a class="header-anchor" href="#commit" aria-label="Permalink to &quot;commit&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 提交暂存区到仓库区</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">first commit</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># (跳过暂存区) 提交暂存区到仓库区</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-am</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">first commit</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 提交到上一次的commit，可以修改上一次的commit</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--amend</span></span></code></pre></div><h3 id="diff" tabindex="-1">diff <a class="header-anchor" href="#diff" aria-label="Permalink to &quot;diff&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看工作区和暂存区的差异</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">diff</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># (简洁) 查看差异</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">diff</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--stat</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看暂存区和版本库的差异</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">diff</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--cached</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">diff</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--staged</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看工作区和版本库的差异</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">diff</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HEAD</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看当前分支与指定分支的差异</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">diff</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看两个分支的差异</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">diff</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch2</span></span></code></pre></div><h3 id="rm" tabindex="-1">rm <a class="header-anchor" href="#rm" aria-label="Permalink to &quot;rm&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 从工作区和暂存区删除文件</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">README.md</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 从暂存区删除文件，但保留工作区文件</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--cached</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">README.md</span></span></code></pre></div><h3 id="mv" tabindex="-1">mv <a class="header-anchor" href="#mv" aria-label="Permalink to &quot;mv&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 移动或重命名文件，也可以用于修改大小写</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mv</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">README.md</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">README</span></span></code></pre></div><h3 id="log" tabindex="-1">log <a class="header-anchor" href="#log" aria-label="Permalink to &quot;log&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看提交历史</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># (简洁) 查看提交历史，显示最近的10次提交</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--oneline</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-10</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看提交历史，显示具体文件差异</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看提交历史，显示简要文件差异</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--stat</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示分支、合并历史</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-graph</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看提交历史，格式化显示</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--pretty=format:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%h - %an, %ar : %s</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 过滤时间</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--since=2.weeks</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--after=1.day</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 过滤作者</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--author=techless</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 过滤提交者</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--committer=techless</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 过滤内容中添加或删除某些字符串</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">function_name</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 过滤提交说明中包含某些字符串</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">feat</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 不显示合并提交</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--no-merges</span></span></code></pre></div><h3 id="reset" tabindex="-1">reset <a class="header-anchor" href="#reset" aria-label="Permalink to &quot;reset&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 重置暂存区为指定版本</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HEAD^</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HEAD~1</span></span></code></pre></div><h3 id="restore" tabindex="-1">restore <a class="header-anchor" href="#restore" aria-label="Permalink to &quot;restore&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 恢复工作区文件</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restore</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">README.md</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 恢复暂存区文件</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restore</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--staged</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">README.md</span></span></code></pre></div><h3 id="remote" tabindex="-1">remote <a class="header-anchor" href="#remote" aria-label="Permalink to &quot;remote&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看远程仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 添加远程仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除远程仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重命名远程仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rename</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">upstream</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看远程仓库具体信息</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">show</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 设置远程仓库的url</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set-url</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span></span></code></pre></div><h3 id="fetch" tabindex="-1">fetch <a class="header-anchor" href="#fetch" aria-label="Permalink to &quot;fetch&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 从远程仓库获取代码，并拉取所有分支引用</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fetch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span></span></code></pre></div><h3 id="pull" tabindex="-1">pull <a class="header-anchor" href="#pull" aria-label="Permalink to &quot;pull&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 从远程仓库获取代码</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span></span></code></pre></div><h3 id="push" tabindex="-1">push <a class="header-anchor" href="#push" aria-label="Permalink to &quot;push&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 推送到远程仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span></code></pre></div><h3 id="tag" tabindex="-1">Tag <a class="header-anchor" href="#tag" aria-label="Permalink to &quot;Tag&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 列出所有tag</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tag</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 创建tag</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tag</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v1.0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">my version 1.0</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 创建轻量级tag</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tag</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v1.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 后期打tag</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tag</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v1.0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#C3E88D;">fceb02</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看tag信息</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">show</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v1.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 推送tag到远程仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v1.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 推送所有tag到远程仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--tags</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除本地tag</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tag</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v1.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除远程tag</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:refs/tags/v1.0</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--delete</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v1.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看tag指向的文件版本</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v1.0</span></span></code></pre></div><h3 id="branch" tabindex="-1">branch <a class="header-anchor" href="#branch" aria-label="Permalink to &quot;branch&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"></span></code></pre></div>`,57),e=[p];function t(c,r,i,C,y,D){return a(),n("div",null,e)}const h=s(o,[["render",t]]);export{g as __pageData,h as default};
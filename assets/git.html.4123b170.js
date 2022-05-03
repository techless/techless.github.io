import{_ as n,c as s}from"./app.b54b24a8.js";const a={},e=s(`<h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># test workflow1</span>
<span class="token comment"># \u5168\u5C40\u914D\u7F6E</span>
<span class="token function">git</span> config --global user.name <span class="token string">&quot;techless&quot;</span>
<span class="token function">git</span> config --global user.email <span class="token string">&quot;workth@163.com&quot;</span>
<span class="token comment"># \u5C40\u90E8\u914D\u7F6E</span>
<span class="token function">git</span> config user.name <span class="token string">&quot;techless&quot;</span>
<span class="token function">git</span> config user.email <span class="token string">&quot;workth@163.com&quot;</span>

<span class="token comment"># \u67E5\u770B\u914D\u7F6E\u4FE1\u606F</span>
<span class="token function">vim</span> ./gitconfig
<span class="token comment"># \u67E5\u770B\u7248\u672C</span>
<span class="token function">git</span> --version
<span class="token comment"># \u67E5\u770B\u914D\u7F6E</span>
<span class="token function">git</span> config --local --list
<span class="token comment"># \u67E5\u770B\u5F53\u524D\u540D\u5B57</span>
<span class="token function">git</span> config user.name
<span class="token comment"># \u67E5\u770B\u5F53\u524D\u90AE\u7BB1</span>
<span class="token function">git</span> config user.email
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4" aria-hidden="true">#</a> \u547D\u4EE4</h2><h3 id="\u521D\u59CB\u5316-init" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316-init" aria-hidden="true">#</a> \u521D\u59CB\u5316 <code>init</code></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u65B0\u4ED3\u5E93 \u521D\u59CB\u5316\u4ED3\u5E93</span>
<span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u514B\u9686-clone" tabindex="-1"><a class="header-anchor" href="#\u514B\u9686-clone" aria-hidden="true">#</a> \u514B\u9686 <code>clone</code></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone xxx.git
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u64CD\u4F5C\u65E5\u5FD7-log" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u65E5\u5FD7-log" aria-hidden="true">#</a> \u64CD\u4F5C\u65E5\u5FD7 <code>log</code></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u8BE2\u7248\u672C\u65E5\u5FD7</span>
<span class="token function">git</span> log
<span class="token comment"># \u67E5\u8BE2\u7248\u672C\u53D8\u52A8\u65E5\u5FD7</span>
<span class="token function">git</span> log -p
<span class="token comment"># \u67E5\u8BE2\u7248\u672C\u65E5\u5FD7 \u7B80\u7565\u4FE1\u606F</span>
<span class="token function">git</span> log --oneline
<span class="token comment"># \u67E5\u8BE2\u7248\u672C\u53D8\u52A8\u65E5\u5FD7\u6700\u8FD1\u4E00\u6B21</span>
<span class="token function">git</span> log -p -1
<span class="token comment"># \u67E5\u8BE2\u7248\u672C\u6587\u4EF6\u53D8\u52A8\u65E5\u5FD7</span>
<span class="token function">git</span> log --name-only
<span class="token comment"># \u67E5\u8BE2\u7248\u672C\u6587\u4EF6\u53D8\u52A8\u8BE6\u7EC6\u65E5\u5FD7 (\u6DFB\u52A0\u8FD8\u662F\u4FEE\u6539)</span>
<span class="token function">git</span> log --name-status
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="\u8FDC\u7A0B-remote" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u7A0B-remote" aria-hidden="true">#</a> \u8FDC\u7A0B <code>remote</code></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u8FDC\u7A0B\u4FE1\u606F</span>
<span class="token function">git</span> remote
<span class="token comment"># \u67E5\u8BE2\u8FDC\u7A0B\u4FE1\u606F(\u8BE6\u7EC6)</span>
<span class="token function">git</span> remote -v
<span class="token comment"># \u6DFB\u52A0\u8FDC\u7A0B\u5730\u5740 [\u5982\u5220\u9664 origin]</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/xxx/test.git
<span class="token comment"># \u5220\u9664\u8FDC\u7A0B\u5730\u5740</span>
<span class="token function">git</span> remote <span class="token function">rm</span> origin
<span class="token comment"># \u4FEE\u6539\u8FDC\u7A0B\u5730\u5740 [\u5982\u4FEE\u6539 origin]</span>
<span class="token function">git</span> remote set-url origin https://github.com/xxx/test.git
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u6DFB\u52A0\u6682\u5B58\u533A-add" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u6682\u5B58\u533A-add" aria-hidden="true">#</a> \u6DFB\u52A0\u6682\u5B58\u533A <code>add</code></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6DFB\u52A0xxx.txt\u5230\u6682\u5B58\u533A</span>
<span class="token function">git</span> <span class="token function">add</span> xxx.txt
<span class="token comment"># \u6DFB\u52A0\u6240\u6709\u6587\u4EF6\u5230\u6682\u5B58\u533A</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u62C9\u53D6\u7248\u672C-pull" tabindex="-1"><a class="header-anchor" href="#\u62C9\u53D6\u7248\u672C-pull" aria-hidden="true">#</a> \u62C9\u53D6\u7248\u672C <code>pull</code></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> pull
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u62C9\u53D6\u7248\u672C\u5BF9\u6BD4fetch" tabindex="-1"><a class="header-anchor" href="#\u62C9\u53D6\u7248\u672C\u5BF9\u6BD4fetch" aria-hidden="true">#</a> \u62C9\u53D6\u7248\u672C\u5BF9\u6BD4<code>fetch</code></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> fetch
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u63A8\u9001\u7248\u672C\u5E93push" tabindex="-1"><a class="header-anchor" href="#\u63A8\u9001\u7248\u672C\u5E93push" aria-hidden="true">#</a> \u63A8\u9001\u7248\u672C\u5E93<code>push</code></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u63A8\u9001\u5230\u8FDC\u7A0B master \u5206\u652F [\u9700\u8981\u63D0\u524D\u8BBE\u7F6E\u597D\u8FDC\u7A0B\u4FE1\u606F]</span>
<span class="token function">git</span> push -u origin master
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u4FEE\u6539-mv" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539-mv" aria-hidden="true">#</a> \u4FEE\u6539 <code>mv</code></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6539\u540D</span>
<span class="token function">git</span> <span class="token function">mv</span> xxx.txt yyy.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u53EF\u80FD\u4F1A\u9047\u5230 indexControler.txt \u63D0\u4EA4\u5230\u6682\u5B58\u533A,\u4F46\u662F\u663E\u793A indexcontroler.txt,\u53EF\u4EE5\u7528 mv \u547D\u4EE4\u89E3\u51B3</li></ul><h3 id="\u5220\u9664-rm" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664-rm" aria-hidden="true">#</a> \u5220\u9664 <code>rm</code></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5220\u9664\u7248\u672C\u5E93\u548C\u5DE5\u4F5C\u533A\u4E2D\u6587\u4EF6</span>
<span class="token function">git</span> <span class="token function">rm</span> xxx.txt
<span class="token comment"># \u4EC5\u5220\u9664\u7248\u672C\u5E93\u4E2D\u6587\u4EF6\uFF0C\u4E0D\u5220\u9664\u5DE5\u4F5C\u533A\u6587\u4EF6</span>
<span class="token function">git</span> <span class="token function">rm</span> --cache xxx.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u68C0\u51FAcheckout" tabindex="-1"><a class="header-anchor" href="#\u68C0\u51FAcheckout" aria-hidden="true">#</a> \u68C0\u51FA<code>checkout</code></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFAdev\u5206\u652F, \u5E76\u5207\u6362\u5230dev\u5206\u652F</span>
<span class="token function">git</span> checkout -b dev
<span class="token comment"># \u5207\u6362\u5230master\u5206\u652F</span>
<span class="token function">git</span> checkout master
<span class="token comment"># \u56DE\u9000\u5230\u4E0A\u4E00\u7248\u672C</span>
<span class="token function">git</span> checkout HEAD^
<span class="token comment"># \u56DE\u9000\u524Dn\u4E2A\u7248\u672C</span>
<span class="token function">git</span> checkout HEAD~n
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u5206\u652F-branch" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F-branch" aria-hidden="true">#</a> \u5206\u652F <code>branch</code></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u6240\u6709\u5206\u652F\u53CA\u5F53\u524D\u5904\u4E8E\u54EA\u4E2A\u5206\u652F</span>
<span class="token function">git</span> branch
<span class="token comment"># \u521B\u5EFAdev\u5206\u652F</span>
<span class="token function">git</span> branch dev
<span class="token comment"># \u79FB\u52A8\u5206\u652F\u4F4D\u7F6E</span>
<span class="token function">git</span> branch -f main HEAD~n
<span class="token comment"># \u5220\u9664\u5206\u652F</span>
<span class="token function">git</span> branch -d dev
<span class="token comment"># \u5FFD\u7565\u63D0\u9192\uFF0C\u5F3A\u5236\u5220\u9664dev\u5206\u652F</span>
<span class="token function">git</span> branch -D dev
<span class="token comment"># \u67E5\u770B\u5DF2\u5408\u5E76\u5206\u652F</span>
<span class="token function">git</span> branch --merged
<span class="token comment"># \u67E5\u770B\u672A\u5408\u5E76\u5206\u652F</span>
<span class="token function">git</span> branch --no-merged

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="\u64A4\u9500-reset-revert-restore" tabindex="-1"><a class="header-anchor" href="#\u64A4\u9500-reset-revert-restore" aria-hidden="true">#</a> \u64A4\u9500 <code>reset</code> <code>revert</code> <code>restore</code></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u64A4\u9500\uFF0C\u4EC5\u672C\u5730\u6709\u6548\uFF0C\u672A\u63D0\u4EA4\u524D\u53EF\u4EE5\u4F7F\u7528</span>
<span class="token function">git</span> reset HEAD~1
<span class="token comment"># \u64A4\u9500\uFF0C\u751F\u6210\u65B0\u7EAA\u5F55\uFF0C\u7528\u4E8E\u8FDC\u7A0B\u63D0\u4EA4</span>
<span class="token function">git</span> revert HEAD
<span class="token comment"># \u64A4\u9500\u6682\u5B58\u533A\u6587\u4EF6\u5230\u5DE5\u4F5C\u76EE\u5F55</span>
<span class="token function">git</span> restore --staged <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u4E34\u65F6\u5B58\u50A8stash" tabindex="-1"><a class="header-anchor" href="#\u4E34\u65F6\u5B58\u50A8stash" aria-hidden="true">#</a> \u4E34\u65F6\u5B58\u50A8<code>stash</code></h3><p>\u672A\u5199\u5B8C\u4EE3\u7801\uFF0C\u4F46\u9700\u8981\u5207\u6362\u5206\u652F\uFF0C\u53EF\u4EE5\u7528\u6B64\u547D\u4EE4\u5148\u6682\u65F6\u4FDD\u5B58</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u4E34\u65F6\u5B58\u50A8</span>
<span class="token function">git</span> stash
<span class="token comment"># \u5217\u51FA\u4E34\u65F6\u5B58\u50A8</span>
<span class="token function">git</span> stash list
<span class="token comment"># \u6062\u590D\u4E34\u65F6\u5B58\u50A8</span>
<span class="token function">git</span> stash apply
<span class="token comment"># \u5220\u9664\u4E34\u65F6\u5B58\u50A8</span>
<span class="token function">git</span> stash drop stash@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>
<span class="token comment"># \u6062\u590D\u6700\u65B0\u72B6\u6001\u5E76\u5220\u9664\u4E34\u65F6\u5B58\u50A8</span>
<span class="token function">git</span> stash pop
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="gitignore-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#gitignore-\u6587\u4EF6" aria-hidden="true">#</a> .gitignore \u6587\u4EF6</h2><p>\u5FFD\u7565\u63D0\u4EA4\u7684\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># txt\u540E\u7F00\u7684\u5FFD\u7565</span>
*.txt
<span class="token comment"># txt\u540E\u7F00\u5FFD\u7565\u9664\u4E86xxx.txt</span>
*xxx.txt
<span class="token operator">!</span>a.txt
<span class="token comment"># \u5FFD\u7565\u6587\u4EF6\u5939</span>
/xxx
<span class="token comment"># \u5FFD\u7565\u5B50\u76EE\u5F55\u4E0B\u6240\u6709txt\u6587\u4EF6</span>
/xxx/**/*.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898" aria-hidden="true">#</a> \u95EE\u9898</h2><p>The file will have its original line endings in your working directory</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> -r --cached <span class="token builtin class-name">.</span>
<span class="token function">git</span> config core.autocrlf <span class="token boolean">false</span>

<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Updates were rejected because the remote contains work that you do</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u539F\u56E0\u662F\u5DF2\u7ECF\u5EFA\u7ACB\u4ED3\u5E93</span>
<span class="token comment"># \u5148\u5C06\u7A7A\u4ED3\u5E93\u62C9\u53D6\u4E0B\u6765rebase\u5230\u672C\u5730\u4ED3\u5E93</span>
<span class="token function">git</span> pull --rebase origin main
<span class="token comment"># \u7136\u540E\u91CD\u65B0\u63D0\u4EA4</span>
<span class="token function">git</span> push -u origin main
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,41);function c(l,p){return e}var r=n(a,[["render",c],["__file","git.html.vue"]]);export{r as default};

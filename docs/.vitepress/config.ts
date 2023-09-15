import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Techless Docs',
    description: '记录学习过程、文档',
    themeConfig: {
        nav: [
            {
                text: '前端',
                items: [
                    { text: 'javascript', link: '/markdown-examples' },
                    { text: 'typescript', link: '/markdown-examples' },
                    { text: 'vue2', link: '/markdown-examples' },
                    { text: 'vue3', link: '/markdown-examples' }
                ]
            },
            {
                text: '后端',
                items: [
                    { text: 'django', link: '/backend/django' },
                    { text: 'django-rest-framework', link: '/markdown-examples' }
                ]
            },
            {
                text: '技术',
                items: [
                    { text: 'mysql', link: '/markdown-examples' },
                    { text: 'redis', link: '/markdown-examples' },
                    { text: 'nginx', link: '/markdown-examples' },
                    { text: 'docker', link: '/markdown-examples' },
                    { text: 'linux', link: '/markdown-examples' },
                    { text: 'shell', link: '/markdown-examples' }
                ]
            },
            {
                text: '工具',
                items: [
                    { text: 'brew', link: '/tools/brew' },
                    { text: 'git', link: '/tools/git' },
                    { text: 'nrm', link: '/tools/nrm' },
                    { text: 'pyenv', link: '/tools/pyenv' },
                    { text: 'pipenv', link: '/tools/pipenv' }
                ]
            },
            { text: '配置', items: [{ text: '.zshrc', link: '/config/zshrc' }] },
            { text: '关于', link: '/markdown-examples' }
        ],
        sidebar: [
            {
                text: '目录',
                items: [
                    {
                        text: '前端',
                        items: [{ text: 'javascript', link: '/markdown-examples' }]
                    },
                    { text: '', link: '/tech/git' },
                    { text: 'Runtime API Examples', link: '/api-examples' }
                ]
            }
        ],
        socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
    }
})

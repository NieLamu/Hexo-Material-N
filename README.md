<h1 align="center">Hexo-Material-N</h1>

<p align="center">A Hexo theme, which is inspired by <a href="https://github.com/creativetimofficial/material-kit">Material-Kit</a></p>

<p align="center">
  <a href="https://github.com/NieLamu/Hexo-Material-N/issues?q=is%3Aopen+is%3Aissue+label%3Anotification"><img alt="notification" src="https://img.shields.io/github/issues-raw/NieLamu/Hexo-Material-N/notification.svg?label=notification&style=flat"></a>
  <img alt="contributors" src="https://img.shields.io/github/contributors/NieLamu/Hexo-Material-N.svg?style=flat">
  <img alt="license" src="https://img.shields.io/github/license/NieLamu/Hexo-Material-N.svg?style=flat">
</p>

![screenshot-index](screenshot-index.png)


## 在线预览 Live Preview

[NieLamu | blog](http://NieLamu.github.io)

## 安装 Installation

**1.** 获取最新版本

```bash
cd themes
git clone -b master https://github.com/NieLamu/Hexo-Material-N.git Hexo-Material-N
  ```

**2.** 修改 Hexo 的`_config.yml`

```yml
// 关闭归档页的默认分页：
archive_generator:
  per_page: 0

// 关闭默认代码高亮
highlight:
  enable: false

启用 `Hexo-Material-N`
theme: Hexo-Material-N
```

**3.** 开启代码高亮

```bash
npm i hexo-prism-plugin
```

```yml
prism_plugin:
  mode: 'preprocess'    # realtime/preprocess 
  theme: 'tomorrow'
  line_number: true    # default false 
```

**3.** 创建 About Page

```bash
hexo new page about
```

修改 `/source/about/index.md`，添加属性 `type: "about"`

## 更新

`git pull`

## 贡献 Contributing

项目会持续更新，期待您的 Pull Request

## License

MIT

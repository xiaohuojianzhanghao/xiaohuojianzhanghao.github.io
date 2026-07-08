# Shadowrocket 账号出售中心

这是一个使用 Jekyll 搭建的静态网站，专门用于出售美区 Apple ID 和 Shadowrocket 小火箭账号。

## 项目概述

该网站提供以下服务：

- **美区 Apple ID 出售** - 全新注册的美区 Apple ID，支持修改密码，永久使用
- **Shadowrocket 共享账号** - 已购 Shadowrocket 的共享账号，即买即用
- **24/7 客服支持** - 专业的客服团队随时准备帮助您

## 网站结构

```
.
├── _config.yml              # Jekyll 配置文件
├── index.md                 # 首页
├── products.md              # 产品详情页
├── faq.md                   # 常见问题页
├── contact.md               # 联系我们页
├── about.md                 # 关于我们页
├── README.md                # 项目说明文件
└── website_plan.md          # 网站规划文档
```

## 页面说明

### 首页 (index.md)
介绍网站的主要产品和服务，包括美区 Apple ID 和 Shadowrocket 账号的优势和特点。

### 产品详情页 (products.md)
详细介绍产品的特点、价格、购买流程和使用说明。

### 常见问题页 (faq.md)
回答用户关于购买、使用、技术支持等方面的常见问题。

### 联系我们页 (contact.md)
提供多种联系方式，包括邮件、在线客服、电话等。

### 关于我们页 (about.md)
介绍网站的背景、使命、愿景和核心价值观。

## 本地开发

### 环境要求

- Ruby 2.5.0 或更高版本
- Jekyll 4.0 或更高版本
- Bundler

### 安装依赖

```bash
bundle install
```

### 本地运行

```bash
bundle exec jekyll serve
```

访问 `http://localhost:4000` 查看网站。

### 构建网站

```bash
bundle exec jekyll build
```

构建后的网站将在 `_site` 目录中。

## 部署到 GitHub Pages

该网站已配置为使用 GitHub Pages 进行自动部署。只需将代码推送到 GitHub 仓库，网站将自动构建和部署。

```bash
git add .
git commit -m "Update website"
git push origin main
```

## 关键词优化

网站针对以下关键词进行了优化：

- 美区 Apple ID
- Shadowrocket
- 小火箭
- 美区账号
- Shadowrocket 账号下载
- 小火箭共享账号
- Apple 美区账号
- 美区 App Store 账号
- iOS 翻墙工具

## 技术栈

- **静态网站生成器** - Jekyll 4.3.2
- **主题** - Minima
- **部署平台** - GitHub Pages
- **语言** - Markdown

## 插件

- jekyll-feed - 生成 RSS 订阅源
- jekyll-seo-tag - SEO 标签优化

## 自定义

### 修改网站标题和描述

编辑 `_config.yml` 文件中的以下字段：

```yaml
title: 美区 Apple ID & Shadowrocket 账号出售
description: 专业出售美区 Apple ID，Shadowrocket 小火箭账号下载，共享账号服务
```

### 修改主题

编辑 `_config.yml` 文件中的 `theme` 字段，选择其他 Jekyll 主题。

### 添加新页面

在根目录创建新的 Markdown 文件，例如 `privacy.md`，并添加以下 Front Matter：

```yaml
---
layout: page
title: 隐私政策
permalink: /privacy/
---
```

## 许可证

该项目采用 MIT 许可证。详见 LICENSE 文件。

## 联系方式

- 邮件: support@shadowrocket-store.com
- 网站: https://xiaohuojianzhanghao.github.io

## 更新日志

### v1.0.0 (2024-06-18)
- 初始版本发布
- 完成首页、产品详情、常见问题、联系我们、关于我们等主要页面
- 配置 Jekyll 和 GitHub Pages 部署

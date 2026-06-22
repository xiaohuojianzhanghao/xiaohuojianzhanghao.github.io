# 📝 新闻文章发布指南

欢迎使用 Shadowrocket 账号出售中心的文章发布系统。本指南将帮助您快速上手。

---

## 📂 文件结构

所有文章都存放在 `_posts` 目录中：

```
_posts/
├── 2024-06-22-shadowrocket-guide.md
├── 2024-06-21-apple-id-security.md
└── 2024-06-20-product-update.md
```

---

## ✍️ 如何发布新文章

### 第一步：创建文件

在 `_posts` 目录中创建一个新的 Markdown 文件，文件名格式必须为：

```
YYYY-MM-DD-文章标题.md
```

**示例**：`2024-06-25-my-article.md`

### 第二步：添加 Front Matter

在文件开头添加以下内容（称为 Front Matter）：

```yaml
---
layout: post
title: 您的文章标题
date: 2024-06-25
author: 作者名称
category: 文章分类
excerpt: 文章摘要（会在列表页显示）
---
```

### 第三步：编写文章内容

在 Front Matter 之后编写您的文章内容，使用 Markdown 格式：

```markdown
## 一级标题

这是一个段落。

### 二级标题

- 列表项 1
- 列表项 2

**粗体文本** 和 *斜体文本*
```

### 第四步：提交到 GitHub

1. 将文件保存到 `_posts` 目录
2. 使用 Git 提交：
   ```bash
   git add _posts/2024-06-25-my-article.md
   git commit -m "发布新文章: 文章标题"
   git push origin main
   ```

3. 等待 GitHub Pages 重新构建（通常 1-2 分钟）
4. 访问 [https://xiaohuojianID.github.io/news](https://xiaohuojianID.github.io/news) 查看您的文章

---

## 📋 Front Matter 详解

### 必填字段

| 字段 | 说明 | 示例 |
|------|------|------|
| `layout` | 布局类型 | `post` |
| `title` | 文章标题 | `如何使用 Shadowrocket` |
| `date` | 发布日期 | `2024-06-25` |

### 可选字段

| 字段 | 说明 | 示例 |
|------|------|------|
| `author` | 作者名称 | `Shadowrocket Store` |
| `category` | 文章分类 | `使用教程` |
| `excerpt` | 文章摘要 | `本文介绍了...` |

### 完整示例

```yaml
---
layout: post
title: Shadowrocket 完整使用指南
date: 2024-06-25
author: Shadowrocket Store
category: 使用教程
excerpt: 本文详细介绍了 Shadowrocket 的安装、配置和使用方法。
---
```

---

## 🎨 Markdown 语法

### 标题

```markdown
# 一级标题
## 二级标题
### 三级标题
```

### 文本格式

```markdown
**粗体**
*斜体*
~~删除线~~
`代码`
```

### 列表

```markdown
- 无序列表项 1
- 无序列表项 2

1. 有序列表项 1
2. 有序列表项 2
```

### 链接和图片

```markdown
[链接文本](https://example.com)
![图片描述](https://example.com/image.jpg)
```

### 代码块

````markdown
```python
def hello():
    print("Hello, World!")
```
````

### 表格

```markdown
| 列1 | 列2 | 列3 |
|-----|-----|-----|
| 数据1 | 数据2 | 数据3 |
| 数据4 | 数据5 | 数据6 |
```

### 引用

```markdown
> 这是一个引用
> 可以有多行
```

---

## 📚 文章分类

建议使用以下分类：

- **产品更新** - 产品新功能、更新信息
- **使用教程** - 如何使用产品的教程
- **安全建议** - 安全相关的建议和指南
- **新闻动态** - 公司动态、行业新闻
- **常见问题** - 常见问题的解答
- **用户故事** - 用户案例和故事

---

## ✅ 发布前检查清单

在发布文章前，请检查以下项目：

- [ ] 文件名格式正确（YYYY-MM-DD-标题.md）
- [ ] Front Matter 完整且正确
- [ ] 文章标题清晰有吸引力
- [ ] 摘要简洁明了（50-100 字）
- [ ] 内容使用正确的 Markdown 语法
- [ ] 链接都是有效的
- [ ] 没有拼写错误
- [ ] 分类选择合适

---

## 🔗 内部链接

在文章中引用网站内的其他页面：

```markdown
[查看产品](/products)
[常见问题](/faq)
[关于我们](/about)
[联系我们](/contact)
```

---

## 💡 最佳实践

### 1. 标题要有吸引力

❌ **不好**：`Shadowrocket 指南`

✅ **好**：`Shadowrocket 完整使用指南 - 从入门到精通`

### 2. 使用清晰的结构

使用标题和子标题组织内容，让读者容易扫描。

### 3. 添加有用的链接

在文章中添加指向相关页面的链接，帮助读者了解更多信息。

### 4. 保持内容更新

定期检查和更新文章内容，确保信息准确。

### 5. 使用格式化

使用 **粗体**、*斜体* 和 `代码` 来突出重要信息。

---

## 🐛 常见问题

### Q: 文章发布后多久能看到？

**A:** 通常需要 1-2 分钟。GitHub Pages 会自动重新构建网站。

### Q: 我可以编辑已发布的文章吗？

**A:** 可以。编辑文件后重新提交即可。

### Q: 如何删除文章？

**A:** 从 `_posts` 目录中删除文件，然后提交更改。

### Q: 文章可以有图片吗？

**A:** 可以。使用 Markdown 图片语法：`![描述](图片URL)`

### Q: 如何预览文章？

**A:** 在本地运行 `jekyll serve`，然后访问 `http://localhost:4000/news`

---

## 📞 需要帮助？

如果您有任何问题，请 [联系我们](/contact)。

---

**开始发布您的第一篇文章吧！** 🚀

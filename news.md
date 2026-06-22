---
layout: page
title: 新闻动态 - Shadowrocket 账号出售中心
description: 了解最新的 Shadowrocket 账号、美区 Apple ID 相关新闻和动态
permalink: /news/
---

<div style="margin-bottom: 40px;">
  <p style="color: #666; font-size: 16px;">欢迎来到我们的新闻中心。在这里，您可以了解最新的产品更新、行业动态和使用技巧。</p>
</div>

<!-- 新闻列表 -->
<div id="news-list">
  {% if site.posts.size == 0 %}
  <div style="text-align: center; padding: 60px 20px; background: #f5f7fa; border-radius: 10px;">
    <i class="fas fa-inbox" style="font-size: 3rem; color: #ccc; margin-bottom: 20px; display: block;"></i>
    <p style="color: #999; font-size: 16px;">暂时没有新闻文章。敬请期待！</p>
  </div>
  {% else %}
  <div style="display: grid; gap: 30px;">
    {% for post in site.posts %}
    <article class="card" style="border-left: 5px solid #667eea; padding: 25px;">
      <!-- 文章日期 -->
      <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
        <div>
          <time style="color: #999; font-size: 14px;">
            <i class="fas fa-calendar"></i>
            {{ post.date | date: "%Y年%m月%d日" }}
          </time>
          {% if post.category %}
          <span style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; margin-left: 10px; font-weight: 600;">
            {{ post.category }}
          </span>
          {% endif %}
        </div>
      </div>

      <!-- 文章标题 -->
      <h3 style="margin-bottom: 15px; margin-top: 0;">
        <a href="{{ post.url }}" style="color: #333; text-decoration: none; transition: all 0.3s ease;">
          {{ post.title }}
        </a>
      </h3>

      <!-- 文章摘要 -->
      <p style="color: #666; margin-bottom: 15px; line-height: 1.8;">
        {{ post.excerpt | strip_html | truncatewords: 50 }}
      </p>

      <!-- 阅读更多链接 -->
      <a href="{{ post.url }}" style="color: #667eea; font-weight: 600; display: inline-flex; align-items: center; gap: 8px; transition: all 0.3s ease;">
        阅读全文
        <i class="fas fa-arrow-right"></i>
      </a>
    </article>
    {% endfor %}
  </div>
  {% endif %}
</div>

<!-- 分页 -->
{% if paginator.total_pages > 1 %}
<div style="display: flex; justify-content: center; gap: 10px; margin-top: 50px; flex-wrap: wrap;">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path }}" class="btn btn-secondary" style="padding: 10px 20px; font-size: 14px;">
      <i class="fas fa-chevron-left"></i> 上一页
    </a>
  {% endif %}

  {% for page_num in (1..paginator.total_pages) %}
    {% if page_num == paginator.page %}
      <span style="padding: 10px 15px; background: #667eea; color: white; border-radius: 5px; font-weight: 600;">
        {{ page_num }}
      </span>
    {% else %}
      <a href="{% if page_num == 1 %}/news/{% else %}/news/page{{ page_num }}/{% endif %}" 
         style="padding: 10px 15px; background: white; color: #667eea; border: 1px solid #667eea; border-radius: 5px; text-decoration: none; transition: all 0.3s ease;">
        {{ page_num }}
      </a>
    {% endif %}
  {% endfor %}

  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path }}" class="btn btn-secondary" style="padding: 10px 20px; font-size: 14px;">
      下一页 <i class="fas fa-chevron-right"></i>
    </a>
  {% endif %}
</div>
{% endif %}

<style>
#news-list article {
  transition: all 0.3s ease;
}

#news-list article:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
}

#news-list article h3 a:hover {
  color: #667eea;
}

#news-list article a:hover {
  gap: 12px;
}
</style>

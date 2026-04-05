---
layout: default
title: Blog
permalink: /blog/
---

<section class="panel stagger stagger-1">
  <h1>Blog</h1>
  <p>Notes, breakdowns, and build logs.</p>
  <p>All posts live here. For personal entries only, use the <a href="{{ '/journal/' | relative_url }}">Journal</a> page.</p>
</section>

<section class="panel stagger stagger-2">
  <h2>Browse</h2>
  <ul>
    <li><a href="{{ '/blog/' | relative_url }}">All posts</a></li>
    <li><a href="{{ '/journal/' | relative_url }}">Journal posts</a></li>
    <li>Use categories like <strong>journal</strong>, <strong>build-log</strong>, or <strong>weekly</strong> for cleaner organization.</li>
  </ul>
</section>

<section class="panel posts-list stagger stagger-3">
  {% if site.posts.size > 0 %}
    <ul>
      {% for post in site.posts %}
        <li>
          <div class="post-entry-main">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            {% if post.categories and post.categories.size > 0 %}
              <div class="post-cats">{{ post.categories | join: ", " }}</div>
            {% endif %}
          </div>
          <small>{{ post.date | date: "%b %-d, %Y" }}</small>
        </li>
      {% endfor %}
    </ul>
  {% else %}
    <p>No posts yet. Create a new file in <code>_posts</code> using the format <code>YYYY-MM-DD-title.md</code>.</p>
  {% endif %}
</section>


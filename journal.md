---
layout: default
title: Journal
permalink: /journal/
---

<section class="panel stagger stagger-1">
  <h1>Journal</h1>
  <p>Personal entries and reflective notes.</p>
</section>

<section class="panel posts-list stagger stagger-2">
  {% assign journal_posts = site.posts | where_exp: "post", "post.categories contains 'journal'" %}
  {% if journal_posts.size > 0 %}
    <ul>
      {% for post in journal_posts %}
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
    <p>No journal posts yet. Add category <code>journal</code> in a post front matter to include it here.</p>
  {% endif %}
</section>

---
layout: default
title: Blog
permalink: /blog/
---

<section class="panel stagger stagger-1">
  <h1>Blog</h1>
  <p>Notes, breakdowns, and build logs.</p>
  <p>Use the post templates in <code>_posts</code> and publish one focused update at a time.</p>
</section>

<section class="panel stagger stagger-2">
  <h2>Post Template</h2>
  <ul>
    <li><strong>Goal:</strong> What you wanted to achieve.</li>
    <li><strong>Changes:</strong> What you changed.</li>
    <li><strong>Issues:</strong> What broke or was hard.</li>
    <li><strong>Fix:</strong> What solved it.</li>
    <li><strong>Result:</strong> What improved.</li>
    <li><strong>Next:</strong> Next actions in 1 to 3 bullets.</li>
  </ul>
</section>

<section class="panel posts-list stagger stagger-3">
  {% if site.posts.size > 0 %}
    <ul>
      {% for post in site.posts %}
        <li>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          <small>{{ post.date | date: "%b %-d, %Y" }}</small>
        </li>
      {% endfor %}
    </ul>
  {% else %}
    <p>No posts yet. Create a new file in <code>_posts</code> using the format <code>YYYY-MM-DD-title.md</code>.</p>
  {% endif %}
</section>

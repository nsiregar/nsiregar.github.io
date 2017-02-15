---
layout: page
title: Home
---
{% include JB/setup %}

<!--<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>-->

<ul class="posts">
  {% for post in site.posts %}
    <li style="cursor: pointer;">
      <div style="margin: 0;">
        <a href="{{ BASE_PATH }}{{ post.url }}" style="margin: 0;">{{ post.title }}</a>
        <p style="margin: 0;">{{ post.content | strip_html | truncatewords:20}}</p>
      </div>
      <span style="margin: 0;">{{ post.date | date_to_string }}</span>
    </li>
  {% endfor %}
</ul>
---
layout: page
title: Home
---
{% include JB/setup %}
<ul class="posts">
  {% for post in site.posts %}
    <li>
      <div>
        <h2><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></h2>
        <p>{{ post.content | strip_html | truncatewords:20}}</p>
      </div>
      <span>{{ post.date | date_to_string }}</span>
    </li>
  {% endfor %}
</ul>
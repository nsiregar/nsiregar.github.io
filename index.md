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
      <div>
        <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
        <p>{{ post.content | strip_html | truncatewords:20}}</p>
        {% if post.tags.size > 0 %}
        Tag:
          {{ post.tags | sort | join: ", " }}
        {% endif %}
      </div>
      <span>{{ post.date | date_to_string }}</span>
    </li>
  {% endfor %}
</ul>
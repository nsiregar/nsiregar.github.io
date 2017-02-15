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
    {% for post in site.posts limit 4 %}
    <li>
      <div>
        <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
        <p>
            {{ post.content | truncatewords:15}}
        </p>
      </div>
      <span>{{ post.date | date_to_string }}</span>
    </li>
    {% endfor %}
</ul>

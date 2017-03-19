---
layout: landing
title: Home
---
{% include JB/setup %}
<ul class="posts">
  {% for post in site.posts %}
    <li>
      <div>
        <h3><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></h3>
        <p>{{ post.content | strip_html | truncatewords:20}}</p>
      </div>
      <span>{{ post.date | date_to_string }}</span>
    </li>
  {% endfor %}
</ul>

<!-- Pagination links -->
<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path }}" class="previous">Previous</a>
  {% else %}
    <span class="previous">Previous</span>
  {% endif %}
  <span class="page_number ">Page: {{ paginator.page }} of {{ paginator.total_pages }}</span>
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path }}" class="next">Next</a>
  {% else %}
    <span class="next ">Next</span>
  {% endif %}
</div>
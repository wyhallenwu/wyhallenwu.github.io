---
layout: page
title: Album
permalink: /albums/
description: 
nav: false
nav_order: 12
display_categories: [test, ]
horizontal: false
---

<!-- pages/projects.md -->
<div class="albums">
{%- if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_albums = site.albums | where: "category", category -%}
  {%- assign sorted_albums = categorized_albums | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for album in sorted_albums -%}
      {% include albums_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for album in sorted_albums -%}
      {% include albums.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
  {% endfor %}

{%- else -%}
<!-- Display projects without categories -->
  {%- assign sorted_albums = site.albums | sort: "importance" -%}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for album in sorted_albums -%}
      {% include albums_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for album in sorted_albums -%}
      {% include albums.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
{%- endif -%}
</div>

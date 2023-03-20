---
layout: page
permalink: /statistics/
title: Stats
description: overall statistics
nav: false
nav_order: 8
---

## Date
[![Moon.svg](https://dday-widget.minung.dev/widget?text=Days%20Left&date=2023-12-31&startDate=2023-01-01&theme=theme2)](https://dday-widget.minung.dev)

---

## GitHub users

{% if site.data.repositories.github_users %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.html username=user %}
  {% endfor %}
</div>

---

<!-- {% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
  {% if site.data.repositories.github_users.size > 1 %}
  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.html username=user %}
  </div>

--- -->

{% endfor %}
{% endif %}
{% endif %}

## GitHub Repositories

{% if site.data.repositories.github_repos %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.html repository=repo %}
  {% endfor %}
</div>
{% endif %}

---
## Coding

<a href="https://wakatime.com"><img src="https://wakatime.com/share/@GreatAllenWu/c559e33f-09cc-4a42-988c-189f4ca4773c.png" /></a>

---

<figure><embed src="https://wakatime.com/share/@wyhallenwu/8a704862-4b6b-49ba-9e2d-f79d0063b156.svg"></embed></figure>

---

## LeetCode

[![Leetcode Stats](https://leetcard.jacoblin.cool/yuhengwu?site=cn&theme=unicorn&border=0&radius=20&ext=heatmap)](https://leetcode.cn/u/yuhengwu/)

---


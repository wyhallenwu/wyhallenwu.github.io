---
layout: page
title: "How2Compress"
description: MM, 2025
img: assets/img/paper/how2compress.png
importance: 1
category: ["Edge Video Analytics Systems"]
related_publications: false
---

how2compress proposes a machine-centric video compression framework that optimizes macroblock-level quality allocation to enhance downstream analytics accuracy under bandwidth constraints. The core insight is that different spatial regions contribute unequally to task performance and exhibit varying resilience to compression. To this end, how2compress introduces an Emphasis Assignment Model to predict per-macroblock quality levels and a Region-aware Emphasis Routing mechanism that generates task-aware supervision signals without requiring explicit labels. The system employs a co-adaptive self-supervised training strategy to iteratively refine compression emphasis, achieving efficient bitrate usage while preserving analytical fidelity.

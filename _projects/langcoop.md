---
layout: page
title: "Langcoop"
description: CVPR Workshop, 2025
img: assets/img/paper/langcoop.png
importance: 1
category: ["Collaborative Emboddied Agents"]
related_publications: false
---

Multi-agent collaboration holds great promise for enhancing the safety, reliability, and mobility of autonomous driving systems by enabling information sharing among multiple connected agents. However, existing multi-agent communication approaches are hindered by limitations of existing communication media, including high bandwidth demands, agent heterogeneity, and information loss. To address these challenges, we introduce LangCoop, a new paradigm for collaborative autonomous driving that leverages natural language as a compact yet expressive medium for inter-agent communication. LangCoop features two key innovations: Mixture Model Modular Chain-of-thought (M3CoT) for structured zero-shot vision-language reasoning and Natural Language Information Packaging (LangPack) for efficiently packaging information into concise, language-based messages. Through extensive experiments conducted in the CARLA simulations, we demonstrate that LangCoop achieves a remarkable 96\% reduction in communication bandwidth (< 2KB per message) compared to image-based communication, while maintaining competitive driving performance in the closed-loop evaluation.

_Code is available at_: https://github.com/taco-group/LangCoop

If you find it useful, cite our paper:

```
@article{gao2025langcoop,
  title={Langcoop: Collaborative driving with language},
  author={Gao, Xiangbo and Wu, Yuheng and Wang, Rujia and Liu, Chenxi and Zhou, Yang and Tu, Zhengzhong},
  journal={CVPR 2nd Workshop on Multi-Agent Embodied Intelligent Systems},
  year={2025}
}
```

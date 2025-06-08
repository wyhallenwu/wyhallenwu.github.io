---
layout: page
title: "OCTOPINF"
description: Percom, 2024
img: assets/img/paper/octopinf.png
importance: 1
category: ["Edge Video Analytics Systems"]
related_publications: false
---

PipelineScheduler is a system which enables the highest performance in terms of throughput and latency for can find the optimal workload distribution to split the pipelines between the server and the Edge devices, and set the optimal batch sizes for them to ensure the best throughput and latency against challenges such as content dynamics and network instability. PipelineScheduler also considers resource contention and is equipped with inference spatiotemporal scheduling to mitigate the adverse effects of co-location interference.

_Code is available at_: https://github.com/tungngreen/PipelineScheduler

If you find it useful, cite our paper:
```
@inproceedings{nguyen2025,
    author={Thanh-Tung Nguyen and Lucas Liebe and Tau-Nhat Quang and Yuheng Wu and Jinghan Cheng and Dongman Lee}
    title = {OCTOPINF: Workload-Aware Real-Time Inference Serving for Edge Video Analytics},
    booktitle = {The 23rd International Conference on Pervasive Computing and Communications (PerCom 2025)},
    year = {2025},
    publisher = {IEEE},
    month = march,
}
```
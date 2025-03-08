---
layout: single
title:  "AnimeDiff"
date:   "2024-02-09 18:07:54 +0800"
categories: AI 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240209180729.png
---


- [Deep Image Blend](https://github.com/owenzlz/DeepImageBlending)
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240209180729.png" alt="20240209180729"/>
  - 针对泊松融合的局限性，作者提出了Deep Image Blend
    - 泊松融合主要是参考融合边界处的像素信息，进行梯度最小的优化融合算法。
  - 本论文主要联合优化了3种不同的损失
    - 泊松融合损失、风格损失和内容损失
    - 风格损失合内容损失主要引入VGG的风格化向量
    - 通过迭代的方法保证了边界的过度
  - 论文还涉及了正则化损失，包括直方图损失和总变差损失，以提高图像的平滑度和稳定风格转换。

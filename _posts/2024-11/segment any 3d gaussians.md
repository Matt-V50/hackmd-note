---
layout: single
title:  "segment any 3d gaussians"
date:   "2024-11-09 21:42:34 +0800"
categories: AI 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20241109214815.png
---


## SAGA: Segment Any 3D Gaussians

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20241109214815.png" alt="20241109214815"/>

- The key technique of this paper is to use the segemntation result from SAM model, then use `Std` of 3d point cloud to denote the scale of each object. 
  - actuallt, the std is calculate from the depth information which is predicted from the Gaussian splatting model.
  - The intuition of this method is
  - > if two pixels p1, p2 share at least a same mask at a given scale (i.e., V(s, p1) · V(s, p2) > 0), they should have similar features at scale s.
  - The output include the basic `ply` file, and also the feature ply file, which is trained by the whole pipeline.

## Gaussian Grouping: Segment and Edit Anything  in 3D Scenes

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20241109215552.png" alt="20241109215552"/>

- This paper is also tring to use the SAM segmentation result to split each of object from the 3D scene. However, the author try to group those relative gaussian together to make editiable.
- By implementing this method, the author also tried other different 3D task. Which like, 3D inpainting, delete a single instance, and also add a new instance to the scene.
- However, this method highly rely on the DEVA video object Segmentation (VOS) technique.
  - First, it require a time sequence of the images. Not like the video recording device, the data from Drone also provide the spatial information which is ignored by the traditional video data.
  - Second, alought DEVA claim that it has a long time memory, but it still lack of the ability to recognize the new object from video, no matter what the image order be chosen.

## Distilling the Knowledge in a Neural Network

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20241109222812.png" alt="20241109222812"/>

- Hinton et al. proposed the concept of knowledge distillation in 2015. Consider about how to transfer the knowledge from a `teacher` model to `sutdent` model. When we compress the size of model, some key knowledge may be lost. Not only the softmax vector, but we also need to contain the infomation and relationship between different data. For instance, the similarity between different number image, like 1 and 7, 2 and 5, etc. By using distillation, we can keep the feature distribution between different data.

## Tracking Anything with Decoupled Video Segmentation

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20241109223648.png" alt="20241109223648"/>

- This paper try to use the segmentation ability from SAM model to track the object in the video. Not like the others. This paper try to match the semantic mask shape between several frames to get the tracking result.
  - First, the author use SAM generate the semantic mask for each frame.
  - Second, the author using `Xmem` to predict the next frame mask from the previous frame mask.
  - Third, the author use the `IoU` to calculate the similarity between the mask from different frame. Pick the most common area as the object mask, then give it a unique ID.
- Weakness: This method is not very good at tracking for the large angle changing camera video. Basically, this method can not can not track and memorize the object when the camera angle is changing.

## XMem: Long-Term Video Object Segmentation  with an Atkinson-Shiffrin Memory Model

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20241109224413.png" alt="20241109224413"/>

- This method use atkinson-shiffrin memory model to simulate humen-being memory process.
  - First, find all key point from a frame. Basically, the author just extract the target point from the frame.
  - Second, decide if it is need to be memorized. Then put it into Working memory.
  - Third, insert the feature to long-term memory if the working memory is full.
- This method also compared different technique to test, how long and how good those approach can memorize. And evaluate the result by the IoU score.
- Good point
  - This method provide a RAM usage stable strategy. By comparing the others, this method can provide a relative a low memory requirement growth rate.
<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20241109225128.png" alt="20241109225128"/>

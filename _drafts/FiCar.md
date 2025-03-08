# 审稿

This Paper propose a novel Fine-grained Feature Assisted Cross-modal Image-Text Retrieval (FiACR) model for cross-model retrieval. And they design a novel architecture named Local-Global Visual Features Fusion (LGVFF) by using gloabl and instance level infomation to reach a better alignment between image and text.

## weakness

1. Fig. 2, the second position information $x_1^1,y_1^1,x_2^1,y_2^1$ between two local encoder seems not correct. It should be $x_1^2,y_1^2,x_2^2,y_2^2$ I believe.
2. Lack of local feature filter description which be introduced in ablation study.
3. Why don't you offer the result of dataset COCO-1K in Table 3.

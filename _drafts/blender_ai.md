# Blender Addon 使用说明

## 1 整体功能

<center>
<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240413211950.png" alt="整体说明"/>
<br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">整体</div>
</center>

### 1.1 相机模式

<center>
<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240413225246.png" alt="20240413225246"/>
</center>

- Blender渲染两种模式
  - 相机渲染
    - 跟相机的分辨率有关
    - <center><img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240413220726.png" alt="20240413220726"/></center>
    - 可以选择512x512到1024x1024 5种模式
    - 相机模式以原点为中心，拖拽物体本身不影响不影响物体的世界坐标，通过影响相机坐标和相机的旋转矩阵达到改变物体位置的目的。
  - 可视区渲染， persp
    - 跟显示屏的分辨率有关
    - 分辨率不可选
    - 渲染速度慢
  - 渲染模式会保存在pov中，pov跟随view history保存在blend文件中

### 1.2 生成模型选择

- 后端为comfyui
- 需要服务器开启dev mode
- 需要特定的comfyui pipeline
- 通过primitive node暴漏参数
- 默认生成模型可以根据`data`目录中的例子中创建
- 生成模型本身可以很复杂，只需要暴漏参数即可
- 可用的模型参数见`生成参数节`

### 1.3 多视角生成器

<center><img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/imgcamera_per.png" alt="camera_per"/></center>

相机所需2个参数，位置和旋转，位置生成如上图所示，其中包围球与物体的倍数关系为1.5，主要是为了适配训练数据集中的物体中心的偏执。

- 相机默认参数为
  - len: 50
  - clip_start: 0.1
  - clip_end: 1000
  - lock_cursor: False
- 相机位置为帕累托立方体顶点位置
- view clean
  - <center><img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240413222230.png" alt="20240413222230"/></center>
  - 选中后点击数字会清除历史视角
  - 否则追加

### 1.4 生成参数

- seed为-1时，全局随机
  - 不控制随机模式，根据暴漏参数作为依据
  - 在comfyui中有cpu随机和gpu随机，注意区分
- batchsize
  - 单次返回的图片数量
- prompt
  - 默认不暴露在交互界面
  - txt2img,img2img,inpaint,refer均使用同一套prompt
  - 需要修改时可以在上述操作后按`F9`后再bubble options中更改
  - <center><img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img1713018427469.jpg" alt="1713018427469"/></center>

### 1.5 视角历史

<center><img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240413223045.png" alt="20240413223045"/></center>

- set
  - 将视角改为当前选择视角
- delete
  - 删除该视角，该视角生成的图片将一并删除
- save
  - 将界面当前视角保存在历史视角中

## 2 生成功能

### 2.1 Generate

背后逻辑为txt2img模式

所需参数

- workflow
  - 有ui控制，为文件夹名字
- normal_img
  - 法向图，由glsl渲染
- depth_img
  - 深度图，gpu渲染
- batch_size
  - 由ui界面控制
- seed
  - 由ui界面控制
- prompt_pos
  - 默认只开放prompt positive

### 2.2 Inpaint

背后逻辑为txt2img模式

所需参数

- workflow
  - 有ui控制，为文件夹名字
- normal_img
  - 法向图，由glsl渲染
- depth_img
  - 深度图，gpu渲染
- mask_img
  - shader渲染alpha通道得到
- batch_size
  - 由ui界面控制
- seed
  - 由ui界面控制
- prompt_pos
  - 默认只开放prompt positive

### 2.3 Variate

背后逻辑为img2img模式

所需参数

- workflow
  - 有ui控制，为文件夹名字
- normal_img
  - 法向图，由glsl渲染
- depth_img
  - 深度图，gpu渲染
- batch_size
  - 由ui界面控制
- seed
  - 由ui界面控制
- prompt_pos
  - 默认只开放prompt positive

### 2.4 Upscale

背后逻辑为txt2img模式

所需参数

- workflow
  - 有ui控制，为文件夹名字
  - upscale由workflow模型控制
- batch_size
  - 由ui界面控制
- seed
  - 由ui界面控制
- prompt_pos
  - 默认只开放prompt positive

### 2.5 Refer

背后逻辑为txt2img模式

所需参数

- workflow
  - 有ui控制，为文件夹名字
- normal_img
  - 法向图，由glsl渲染
- depth_img
  - 深度图，gpu渲染
- refer_img
  - <center><img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240413223715.png" alt="20240413223715"/></center>
  - 根据该区域选择
- mask_img
  - shader渲染alpha通道得到
- batch_size
  - 由ui界面控制
- seed
  - 由ui界面控制
- prompt_pos
  - 默认只开放prompt positive

## 3 安装说明

安装包为zip

安装操作

blender > edit > preference > adds on > install

选中zip文件，安装即可

## 4 插件服务器

<center><img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240413223832.png" alt="20240413223832"/></center>

- Comfyui server
  - \<ip:port\>
  - 不应添加http等协议头
- workflow path
  - 模型文件夹路径
- 模型路径结构
  - <center><img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240413224115.png" alt="20240413224115"/></center>


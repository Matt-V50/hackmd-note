var store = [{
        "title": "First Day, install ubuntu",
        "excerpt":"台式机被格式化, USB装Ubuntu系统， 18.04.5 没有登录账户 网络层的非特殊站点均要求登录 172.18.50.22:8080 目前观察到的不要求登录的站点 archive.ubuntu.com anconda.com search.cpan.org 在试图安装snap时, 出现Ca认证错误，怀疑跟网络环境有关 openssl s_client -connect api.snapcraft.io:443 出现Verification error: self signed certificate issuer=CN = H3C-HTTPS-Self-Signed-Certificate-5978b0f0a780e531 怀疑H3C路由器做了固定域名策略 装了哪些组件 apt install namp apt install traceroute apt install python apt install tree apt install conda apt install snap apt install make apt install gcc...","categories": ["env","system"],
        "tags": [],
        "url": "/env/system/First-Day-install-ubuntu/",
        "teaser": null
      },{
        "title": "Try to connect to the internet",
        "excerpt":"尝试解决上网问题      笔记本-wifi-暂时走刘浩宇师兄的账号密码   台式机还没有办法联网            利用暂时的漏洞       通过ipv6搭建ssh信道       目前的路由                    台式机-&gt;seattle ipv6-&gt;阿里云-&gt;笔记本                       由于未联网状态下无法使用openvpn的1194或其他端口，暂时解决访问问题                seattle 到 台式机的root登录       PermitRootLogin yes           使用nginx反向代理，将台式机暴露给公网   ali-hk -ipv6-&gt; 台式机   地址 公网地址   jupyter-lab   装了哪些组件      apt install sshpass   apt install openvpn   apt install unzip   阅读      三维重建综述     ","categories": ["env","system"],
        "tags": [],
        "url": "/env/system/Try-to-connect-to-the-internet/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img/3edc8471faea4ec0350dd49526aac66.png"
      },{
        "title": "Robotics-Flight week 1 and 2",
        "excerpt":"准备看点Coursera课程 Coursera: robotics-flight Week 1 State Estimation obtaub reliable estimates of position and velocity SLAM(Simultaneous Localization And Mapping) Control for trajectory tracking in a simple second-order system PD control $u(t) = x’’^{des}(t)+K_ve’(t)+K_pe(t)$ PID control (proportion integration differentiation) $u(t) = x’’^{des}(t)+K_ve’(t)+K_pe(t)+K_i\\int_0^t{e(\\tau)d\\tau}$ code Here Week2 rotation matrix is orthogonal matrix all vector...","categories": ["coursera","system","env"],
        "tags": [],
        "url": "/coursera/system/env/Robotics-Flight-week-1-and-2/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img/20210721131633.png"
      },{
        "title": "Install Remote Browser[remoteview], And Coursera Robotics-Flight week 2",
        "excerpt":"remote chrome debuging need ws resever proxy to ws trying to use ipv6 access browser directly trying to ssh tunnel mapping 9222 to 9223 still can not fix ws problem Try to use remoteview[base on npm] here is the tutorial trying to install remoteview by npm npm i remoteview but...","categories": ["env","system","coursera"],
        "tags": [],
        "url": "/env/system/coursera/Robotics-Flight-week-2/",
        "teaser": null
      },{
        "title": "Robotics-Flight week 3 and 4, 3D rebuilding",
        "excerpt":"准备看点Coursera week 3 2-d-quadrotor-control state-space form[状态空间] Identify the order, n, of the system Define the states, $x=y(t), x_1 = \\dot y(t) \\dotsc$ Create the states vector, $\\mathbf{x} = [x_1, x_2, \\dotsc ]^T = [y, \\dot y, \\dotsc ]^T$ write system of first-order differencial equations as matrix. $$ \\begin{bmatrix} \\dot x_1\\\\...","categories": ["coursera","3d"],
        "tags": [],
        "url": "/coursera/3d/Robotics-Flight-week-3-and-4/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img/20210723122620.png"
      },{
        "title": "Install RemoteView.docker, Finish Dynamic System Control[1]",
        "excerpt":"尝试安装 remoteview 搞定浏览器嵌套 docker github docker -v pull dosyago/browsergapce:2.5 # from other has access to internet docker save -o remoteview.docker dosyago/browsergapce:2.5 docker load -i remoteview.docker # at ucas server wget https://raw.githubusercontent.com/c9fe/ViewFinder/master/chrome.json docker run -d -p 8002:8002 --security-opt seccomp=$(pwd)/chrome.json dosyago/browsergapce:2.5 nginx rewrite_log on; proxy_pass http://127.0.0.1:8002/; proxy_redirect / /browser/; rewrite ^(?!/browser)/?(.*)$ /browser/$2...","categories": ["env","system","docker","zhihu"],
        "tags": [],
        "url": "/env/system/docker/zhihu/RemoteView-docker-and-Dynamic-System/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img/20210724144046.png"
      },{
        "title": "E-L Equation",
        "excerpt":"准备搞明白泛函 无人机的动力学系统 运动轨迹方程与E-L方程 高阶E-L方程 For $J[y(x)] = \\int_{x_0}^{x_1}F(x, \\dot x, \\ddot x, \\dotsc, x^{(n)})dx$ 这里的$\\dot x$为x的一阶导数，即速度，由于在力学领域，经常使用$\\dot x, \\ddot x$的形式描述高阶导数(牛顿导数记号)，这里也一并改为此种写法 E-L : $\\frac{\\partial F}{\\partial x} - \\frac{d}{dt}(\\frac{\\partial F}{\\partial \\dot x}) + \\frac{d^2}{dt^2}(\\frac{\\partial F}{\\partial \\ddot x}) - \\frac{d^3}{dt^3}(\\frac{\\partial F}{\\partial x^{(3)}}) + \\dotsc +(-1)^n \\frac{d^n}{dt^n}(\\frac{\\partial F}{\\partial x^{(n)}})= 0$ 计算例子 求解从时间$0$到时间$t$, 速度的平方最小的函数, 即，一阶动力学问题 $J[x(t)]...","categories": ["zhihu"],
        "tags": [],
        "url": "/zhihu/E-L-Equation/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img/20210725184457.png"
      },{
        "title": "Coordinate System in Dynamic",
        "excerpt":"准备搞明白泛函 无人机的动力学系统 动力系统 惯性系[inertial frame]$\\mathbf{A}$ 3个转轴$a_1, a_2, a_3$ 原点$O$ 随体系[body frame]或固连系[body-fixed frame]或体坐标系[body coordinate]$\\mathbf{B}$ 3个转轴$b_1, b_2, b_3$ 原点$C$ $L$为旋翼到质心的距离 这个体系描述了这样一种运动 刚体从O点移动到C点，并且进行了旋转变换，此时由于随体系与刚体保持不动，因此随体系坐标不变，而随体系相对于惯性系存在变化，因此旋转矩阵是描述刚体旋转后的惯性系坐标变换 旋转矩阵$\\mathbf{R}$[同一个点到两个坐标系的运算] 欧拉角[刚体的转动可以视为绕不同的轴，独立转动3次] 如果不考虑位移[位移可以通过向量加法单独运算]，那么刚体仅存在旋转运动 Z-X-Y顺序旋转[顺序不一定是Z-X-Y，也可能是Z-X-Z或其他，但运算矩阵要一致] 旋转矩阵$R$ $$ \\begin{aligned} R &= R_{Z(\\psi)}R_{X(\\phi)}R_{Y(\\theta)}\\\\ &=\\begin{bmatrix} \\cos{(\\psi)} & -\\sin{(\\psi)} & 0\\\\ \\sin{(\\psi)} & \\cos{(\\psi)} & 0\\\\ 0 & 0 & 1 \\end{bmatrix} \\begin{bmatrix} 1&0&0\\\\ 0&\\cos{(\\phi)}...","categories": ["zhihu","coursera"],
        "tags": [],
        "url": "/zhihu/coursera/Coordinate-System-in-Dynamic/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img/20210726104110.png"
      },{
        "title": "Robotics Perception week 1",
        "excerpt":"准备看点摄像机视觉 Week1 Camera Modeling $\\frac{1}{f} = \\frac{1}{a} + \\frac{1}{b}$ $f$焦距， $a$, 物体到透镜的位置, $b$, 透镜到成像的位置 $\\frac{Y}{a}=\\frac{y}{b}$ $Y$物体大小, $y$像的大小 Single View Geometry 平面图到透视图 $o^\\star$为眼睛位置 $S$为垂足 $OS=O^\\star$, 因此$\\angle{SOO^\\star}=45\\degree$ $P$为平面图上一点 连接$P-O$交图像平面$M$ 连接$P-O^\\star$交图像平面$P^\\star$ $\\triangle MLP^\\star\\sim\\triangle OSO^\\star$ $\\angle LMP’$为$45\\degree$ $\\triangle MLP^\\star=\\triangle MLP’$, 即，将成像面的点$P^\\star$映射到平面$P’$变为透视图 因此，$P’$是$P$关于$ML$对称的透视图 多透视点画法Kim Jung Gi 投影面[Projective Plane] 投影面上的点$(x,y)$可以视为，视点向外发出的射线$(s_x, s_y, s)$ homogeneous coordinates[齐次坐标] 引入新的维度，表示无限远处的坐标 $(x,y)\\rightarrow(x,y,1)$,...","categories": ["coursera","3d"],
        "tags": [],
        "url": "/coursera/3d/Robotics-Perception-week-1/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img/20210727143124.png"
      },{
        "title": "Jekyll+Github page+Gihub Actions",
        "excerpt":"尝试使用github pages 主要组件 Jekyll 静态网站生成器 Github Actions 需要项目下存在.github/workflows/*.yml, 作为Github Actions的扫描程序 Action marketplace _config.yml, 根目录下，Jekyll运行时需要的配置 ruby Gemfile ruby 需要的版本 Gemfile.lock ruby 一台机器已经安装各个组件的具体版本以及依赖条件 运行流程 Actions扫描workflows下的配置文件寻找job Actions按照顺序依次执行 ruby 按照Gemfile.lock的文件安装指定组件版本 ruby拿到_config.yml的配置之后依次执行 主题 dash 插件 jekyll-feed jekyll/tagging jekyll-paginate paginate: 5 # 分页数 paginate_path: “/page:num/” # 扫描位置 kramdown-math-katex 参考 minusgix.github.io git 南方科技大学数学建模协会 git 需要本地构建 leopardpan 效果同上...","categories": ["tutorial"],
        "tags": [],
        "url": "/tutorial/Jekyll-Github-page-Gihub-Actions/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/imge706435a04d4061079e6e726c22e50a.png"
      },{
        "title": "Build Blog System",
        "excerpt":"Build Blog System by Github pages and jekyll markdown github use GFM[GitHub Flavored Markdown] resizing image only support by inner html code like&lt;img src=\"src\", alt=\"\", weight=\"\"&gt;&lt;/img&gt; kramdown resizing image by ![](){height:\"100px\"} hackmd resizing image by ![](src... =100x100) markdownlint MD033 does not recommand for inner html finily I disable MD033 in...","categories": ["tutorial"],
        "tags": [],
        "url": "/tutorial/Build-Blog-System/",
        "teaser": null
      },{
        "title": "Double slash test",
        "excerpt":"Render No dollar A /A //A \\A \\A Single dollar $A$ $/A$ $\\A$ $//A$ Double dollar $$ A $$ $$ /A $$ $$ \\\\A $$ $$ //A $$ Matrix with Single Dollar single line $\\begin{bmatrix}1\\2\\3\\end{bmatrix}$ multy line $\\begin{bmatrix} 1\\2\\3 \\end{bmatrix}$ Matrix with Double Dollar single line $$ \\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix} $$ multy...","categories": ["tutorial"],
        "tags": [],
        "url": "/tutorial/Double-slash/",
        "teaser": null
      },{
        "title": "Initial 3D Builder environment",
        "excerpt":"Inistall FLTK FLTK(Fast Light Toolkit，读做”fulltick”) 通过OpenGL和内建的GLUT模拟器提供3D图形支持 Download form offical site Pinoccio recommend for 1.1.7 or 1.1.x Flollow This video Install Cmake gui from office Remeber set the correct config, I’m using VS2017 and x64 system Configure and Generate Close Select sln file from build dir Open it in VS20XX. Open...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Initial-3D-builder-environment/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img7324062.png"
      },{
        "title": "Jekyll Search And Logo",
        "excerpt":"Jekyll-Algolia Jekyll-Algolia A search engine to help you get a list of result. But have some bugs I have post a new issue at here jekyll-archives include: - _pages jekyll-archives: enabled: - categories - tags layouts: category: archive-taxonomy tag: archive-taxonomy permalinks: category: /categories/:name/ tag: /tags/:name/ First, you need _include make...","categories": ["tutorial"],
        "tags": [],
        "url": "/tutorial/Add-Jekyll-Search-And-Logo/",
        "teaser": null
      },{
        "title": "Jekyll Archive",
        "excerpt":"How Jekyll Archive Work      用Ruby写的   主要作用是将文章按categories, tags, year, month, day, 生成新的索引页面   但是对于索引页面本身，jekyll-archive, 并未创建   因此需要_pages中的页面进行辅助   在nav中加入连接，才可以   Minimal-Mistakes在Archive界面上的处理逻辑      它实现了自己的pages   但是仅仅使用#作为业内索引，而并没有生成连接   我的实现逻辑      同样在_layouts中实现years.html, tags.html, months.html   在_pages中进行相应的调用   不过为了和jekyll-archive配合，将日期连接统一改成了dates\\:year\\:month  ","categories": ["tutorial"],
        "tags": [],
        "url": "/tutorial/Jekyll-Archive/",
        "teaser": null
      },{
        "title": "Review of Robotics Perception week1",
        "excerpt":"Review of week 1 First Person Camera World $x’, y’$ 为投影面坐标 $X,Y$ 为物体实际坐标 $Z$为物体距离原点距离 $C$为第一视角原点 $f$为焦距 投影面为一个虚像，真实成像是个倒像，但大小一致 $x’=f\\frac{X}{Z}, y’=f\\frac{Y}{Z}$ 矩阵形式 $$ Z_c \\begin{bmatrix} x'\\\\y'\\\\1 \\end{bmatrix} = \\begin{bmatrix} f&0&0&0\\\\ 0&f&0&0\\\\ 0&0&1&0\\\\ \\end{bmatrix} \\begin{bmatrix} X_c\\\\Y_c\\\\Z_c\\\\1 \\end{bmatrix} $$ 这里的1作为3位空间的齐次项 Conversion form mm to pixels 光学中心$O_C,O_r$ $x’,y’$投影面坐标(像素) $c,r$为实际距离 缩放加平移之后 $s_x, s_y$为像素宽 $c-O_c=\\frac{x’}{s_x}, r-O_r=\\frac{y’}{s_y}$ 矩阵形式...","categories": ["3d","coursera"],
        "tags": [],
        "url": "/3d/coursera/Review-of-Robotics-Perception-week1/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210801194917.png"
      },{
        "title": "Try To Start Up Pinocchio",
        "excerpt":"Install Visual Studio 2019 Cmake generate x64 and x32 for Fltk Target at \\Path\\to\\fltk-1.3.7\\build-2019-32 \\Path\\to\\fltk-1.3.7\\build-2019-64 The Whole Configuration for Pinocchio 参考文章 Visual Studio 2019 配置 OpenGL - 「已注销」的文章 - 知乎 Marco[宏]，全局定义，避免hash_map警告 For AttachWeights, DemoUI,Pinocchio,PinocchioStatic Set Property&gt;C/C++&gt;Preprocessor&gt;Preprocessor Definitions Append _SILENCE_STDEXT_HASH_DEPRECATION_WARNINGS; Lib[库] Set Property&gt;VC++ Directories&gt;Library Directories Append \\Path\\to\\fltk-1.3.7\\build-2019-32\\lib\\Debug; Fltk lib dir Download...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Try-to-startup-Pinocchio/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210802180508.png"
      },{
        "title": "Robotics Perception week2",
        "excerpt":"Homogeneous Coordinate[齐次坐标] Homo means dictionary.com a combining form appearing in loanwords from Greek, where it meant “same” (homology); on this model, used in the formation of compound words (homomorphic). Reference[参考文章] 深入探索透视投影变换 - Twinsen[CSDN] 内容相同，这里的排版可能更舒服 齐次坐标的理解 - MorStar[cnblogs] Homogeneous Coordinates - 안성호(Song Ho Ahn) [英文原文] 齐次坐标 - Wikipedia 计算机视觉中的多视图几何 2.2.1 Explaining...","categories": ["3d","coursera"],
        "tags": [],
        "url": "/3d/coursera/Robotics-Perception-week2/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210802233241.png"
      },{
        "title": "Robotics-Perception-week2[2]",
        "excerpt":"Two Method Of Perception Matrix with 4 points 线性代数推导 参考 inf.ed.ac.uk [多视图几何 2.3] 对于点$x$经过$H$变换后有如下公式 $\\begin{aligned} \\begin{bmatrix} y'\\\\x'\\\\1 \\end{bmatrix} &= \\mathbf{H} \\begin{bmatrix} x\\\\y\\\\1 \\end{bmatrix}\\\\ &= \\begin{bmatrix} h_{11}&h_{12}&h_{13}\\\\ h_{21}&h_{22}&h_{23}\\\\ h_{31}&h_{32}&h_{33} \\end{bmatrix} \\begin{bmatrix} x\\\\y\\\\1 \\end{bmatrix}\\\\ \\end{aligned}$ 根据一个点，我们可以得到两个方程组 $\\begin{aligned} x' &= \\frac{h_{11}x+h_{12}y+h_{13}}{h_{31}x+h_{32}y+h_{33}}\\\\ y' &= \\frac{h_{21}x+h_{22}y+h_{23}}{h_{31}x+h_{32}y+h_{33}}\\\\ \\end{aligned}$ 其中$h_{31}x+h_{32}y+h_{33}$ 用于表示一个未知的倍数变量 表示成矩阵形式有 $\\begin{bmatrix} x&y&1&0&0&0&-x'x&-x'y&-x'\\\\ 0&0&0&x&y&1&-y'x&-y'y&-y'\\\\ \\end{bmatrix} \\begin{bmatrix}...","categories": ["3d","coursera"],
        "tags": [],
        "url": "/3d/coursera/Robotics-Perception-Week2/",
        "teaser": "https://upload.wikimedia.org/wikipedia/commons/9/94/Projection_geometry.svg"
      },{
        "title": "Robotics-Perception-Week3",
        "excerpt":"Visual Features[视觉特征提取] SIFT [Scale-invariant feature transform] 尺度不变特征转换 大致思想 我们需要同一个相机按不同视角拍摄的同一处的画面 类似于全景图 在拼接全景图时，我们需要找到对应的特征点，才能方便图片对接 SIFT即为一种寻找特征点的算法 对于一张图片进行不同$\\sigma=1, \\sqrt{2}, 2, \\dotsc$的二维高斯卷积得到一组(octive) 再将这张图片进行降采样(隔点采样)，拿到缩水的图片 对于缩水的图片再次进行卷积，使用的$2\\sigma=2, 2\\sqrt{2}, 4 \\dotsc$ 对于同一组(octive)的图片，相邻两张做差，得到DoG Difference of Gaussian, 其实是一种LoG laplacian of gaussian的近似 Gaussian pyramid[高斯金字塔] 迭代(高斯卷积-&gt;降采样-&gt;得到一个长宽只有$\\frac{1}{2}$的图) 拉普拉斯金字塔 Sift算法中的多尺度金字塔 差分金字塔与Difference of Gaussian(DOG)高斯函数的差分 同时，需要归一化，以避免信号流式 拿到的最大响应点即我们需要的特征点 Reference zhaoxuhui.top 图像特征尺度不变性-拉普拉斯-高斯差DOG-SIFT特征提取-旋转不变性-SVD分析-齐次坐标的理解-线性的理解-齐次方程的理解 CSDN 🤙SIFT算法详解 - zddblog[CSDN] 🤙SIFT算法原理详解 - Alliswell-WP[cnblogs] 🤙UCF...","categories": ["3d","coursera"],
        "tags": [],
        "url": "/3d/coursera/Robotics-Perception-Week3/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210804142207.png"
      },{
        "title": "Try to start up texture",
        "excerpt":"colmap/colmap feature_extractor 特征提取 matcher exhaustive_matcher 特征匹配 vocab_tree_matcher sequential_matcher spatial_matcher transitive_matcher matches_importer mapper Sparse 3D reconstruction / mapping of the dataset using SfM after performing feature extraction and matching model_converter Convert the COLMAP export format to another format, such as PLY or NVM SFM[Structure from Motion] mapillary/OpenSfM - github Open source...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Try-To-Start-Up-Texture/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210804193756.png"
      },{
        "title": "Newton Euler Equation",
        "excerpt":"牛顿欧拉方程 Newton Equation 计算出4旋翼的作用力在惯性系下的分量 无人机在水平状态下，受到向上的推力$F=f_1+f_2+f_3+f_4$和重力$mg$ 无人机在旋转状态下通过旋转矩阵$R$可以计算出惯性系下3个方向的作用力分量 同时由于重力方向不变，可以之间减去，得到 $$ R_{ZXY}\\begin{bmatrix} 0\\\\0\\\\f_1+f_2+f_3+f_4 \\end{bmatrix} - \\begin{bmatrix} 0\\\\0\\\\mg \\end{bmatrix} $$ 其中$R_{ZXY}$为按照$ZXY$3个轴依次旋转得到的矩阵，如果转轴不同，则可能得到不同的表示 $$ R_{ZXY} = \\begin{bmatrix}- s(\\phi ) s(\\psi ) s(\\theta ) + c(\\psi ) c(\\theta ) & - s(\\psi ) c(\\phi ) & s(\\phi ) s(\\psi ) c(\\theta ) + s(\\theta ) c(\\psi )\\\\s(\\phi...","categories": ["zhihu"],
        "tags": [],
        "url": "/zhihu/Newton-Euler-Equation/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img/20210726104110.png"
      },{
        "title": "Robotics-Perception-Week3[2]",
        "excerpt":"RANSAC[Random Sample Consenus]         该算法其实是一种迭代选过滤outliers的思想，并不局限于对点进行拟合   通常与Linear regressor进行对比用于体现Linear regressor的不足之处   从信息提供的角度来说   Linear regressor认为每个点所在的位置都是有意义的，即便存在outlier，也不应当将其剔除，因此该算法在遇到outlier距离其他数据很远时，则会显现出倾向于outlier结果   而RANSAC则倾向于，多数点同意则完全收敛到点数最多的模型那里，但显然RANSAC在面对两组数据量差不多的模型时，无法单独做出决策，即，在两个模型中反复横跳   Code at ucas   Orthogonal Procrustes Problem[正交普鲁克问题, 3D-3D pose]      一个为了让客人和自己的床一样大小而砍断客人双脚或拉长客人的古希腊故事[普罗克汝斯特斯之床]   给定两个矩阵$A$和$B$并要求找到一个正交矩阵$\\Omega$最接近映射$A$到$B$   $R=\\underset{\\Omega}{\\argmin}{\\Vert\\Omega A-B\\Vert}_F\\ \\ \\ \\text{subject to}\\ \\ \\ \\Omega^T\\Omega=I$   其中$\\Vert X\\Vert_F$为Frobenius 范数   $\\Vert X\\Vert_F=\\sqrt{trace(X^TX)}=\\sqrt{\\sum_{i,j}x_{ij}^2}$         当$S$为单位阵时，表达式可以最大化   通常用来解决点云旋转的匹配最优解，(因为旋转变换都是正交阵)   Pose from Point Correspondences P3P      当船看到两个灯塔并测得方位角时，可以知道，船在这个圆上         在3D世界中，同样已知2点的位置，相机会被越说在一个曲面内         Tienstra公式   已知3点所对应的角度，可以确定观察者的位置        ","categories": ["3d","coursera"],
        "tags": [],
        "url": "/3d/coursera/Robotics-Perception-Week3-2/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210804142207.png"
      },{
        "title": "Start up OpenSfm",
        "excerpt":"Start service with docker mapillary/OpenSfM - github sbstnkll/opensfm -Docker hub How to use docker pull sbstnkll/opensfm:opensfm docker save -o opensfm.docker.docker sbstnkll/opensfm:opensfm docker host docker load -i opensfm.docker docker run -itd -p 8000:8000 \\ --mount type=bind,source=/path/to/OpenSfM/data,target=/source/OpenSfM/data \\ sbstnkll/opensfm:opensfm \\ bash -c 'python3 -m http.server' run compiler command need attach docker attach...","categories": ["3d","docker"],
        "tags": [],
        "url": "/3d/docker/Start-up-OpenSfM/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210806134610.png"
      },{
        "title": "Robotics Perception Week 4",
        "excerpt":"Epipolar Geometry[对极几何] $O_L$经过旋转和移动之后来到了$O_R$ 其中$X_L,X_R$为$X$在两个相机上的像点 红线为对极线 绿色的面为对极平面 $e_L, e_R$分别为对极点, 即另外一个相机的像点 两个相机的连线$O_LO_R$为基线，当X点移动时，对极平面绕基线旋转 这种几何体系描述了一种相机位置变更后，像点的变化 Essential Matrix[本质矩阵] 本质矩阵的定义 $$ \\begin{aligned} \\mathbf{x}_R&=R\\mathbf{x}_L+\\mathbf{t}\\\\ \\mathbf{t}\\times \\mathbf{x}_R&=\\mathbf{t}\\times R\\mathbf{x}_L + \\mathbf{t}\\times \\mathbf{t}&(1)\\\\ \\mathbf{t}\\times \\mathbf{x}_R&=\\mathbf{t}\\times R\\mathbf{x}_L&(2)\\\\ \\mathbf{x}_R\\cdot (\\mathbf{t}\\times \\mathbf{x}_R)&=\\mathbf{x}_R\\cdot (\\mathbf{t}\\times R\\mathbf{x}_L)\\\\ 0&=\\mathbf{x}_R\\cdot (\\mathbf{t}\\times R\\mathbf{x}_L)&(3)\\\\ \\mathbf{x}_R^T\\mathbf{\\hat t} R\\mathbf{x}_L&=0&(4)\\\\ \\mathbf{x}_R^TE\\mathbf{x}_L&=0\\\\ \\end{aligned} $$ 其中 $E$即为本质矩阵 $R$为旋转矩阵 $\\mathbf{t}$从$O_L$到$O_R$的平移向量 $(1)$表示对极平面的法向量, 这里将$\\mathbf{x}_R$视为$O_R$的一条射线 $(2)$是因为，$t\\times t=0$ $(3)$是因为$\\mathbf{x}_R$与法向量垂直 $(4)$将内积换成矩阵形式...","categories": ["3d","coursera"],
        "tags": [],
        "url": "/3d/coursera/Robotics-Perception-Week4/",
        "teaser": "https://upload.wikimedia.org/wikipedia/commons/1/14/Epipolar_geometry.svg"
      },{
        "title": "Robotics Perception Week 4[2]",
        "excerpt":"Nonlinear Least Squares [非线性最小二乘法] Method for non-linear least suqares problems - 2004 Descent method The steepest descent method[最速下降] Newton’s method[牛顿下降] Linear Search[线性搜索] Trust Region and Damped Methods Non-linear least squares problems The Gauss-Newton Method The Levenberg-Marquardt Method Powell’s Dog leg Method A Hybrid Method: L-M and Quasi-Newton A Secant Version...","categories": ["3d","coursera"],
        "tags": [],
        "url": "/3d/coursera/Robotics-Perception-Week4-2/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210807224958.png"
      },{
        "title": "Software Report Ranking",
        "excerpt":"SfM                     Repository       spark       star                                                                                                                                                                                                                                          MVS                     Repository       spark       star                                                                                                                                                                                                                                          Reference      simov  ","categories": ["3d"],
        "tags": [],
        "url": "/3d/Software-Report-Ranking/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img1628431917(1).jpg"
      },{
        "title": "The File Format",
        "excerpt":"File Format obj 文本格式 Wavefront 基本结构 type name   Vertex data v vertices[顶点] vt Texture vertices vn Vertex normals [顶点法线] vp Parameter space vertices [参数空格顶点]   表面属性(surface attributes) deg Degree[度] bmat Basis matrix step Step size cstype Curve or surface type[曲线或表面类型]   Elements p point l line f face curv...","categories": ["3d"],
        "tags": [],
        "url": "/3d/The-file-format/",
        "teaser": "https://i.all3dp.com/cdn-cgi/image/fit=cover,w=1284,h=722,gravity=0.5x0.5,format=auto/wp-content/uploads/2018/05/26152516/obj-lead.jpg"
      },{
        "title": "Deploy Cv environment for ubuntu, colmap, openmvs, e.g.",
        "excerpt":"install colmap install openmvs Environment Ubuntu 18.04.5 LTS x86_64 gcc version 7.5.0 (Ubuntu 7.5.0-3ubuntu1~18.04) Colmap Require sudo apt-get install \\ git \\ cmake \\ build-essential \\ libboost-program-options-dev \\ libboost-filesystem-dev \\ libboost-graph-dev \\ libboost-system-dev \\ libboost-test-dev \\ libeigen3-dev \\ libsuitesparse-dev \\ libfreeimage-dev \\ libgoogle-glog-dev \\ libgflags-dev \\ libglew-dev \\ qtbase5-dev \\...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Start-Up-Colmap-env/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210810003311.png"
      },{
        "title": "Robotics Motion Planning Week 1 and 2",
        "excerpt":"Week 1 Grassfire Algorithm From red point to green point, like fire. Dijkstra’s Algorithm[地接丝卡尔] A star Algorithm[A*] 优先搜索距离终点最近的点 Week 2 Configuration Space[C-Space 构型空间] 与之相对应的还有 Work-Space 对于一个由一个点连接的两段悬臂，他们的旋转角度$\\theta_1, $\\theta_2$可以表达出悬臂所有能产生的形态 即通过$\\theta_1,\\theta_2$构成的空间表示为悬臂可能的空间 通过将笛卡尔体系下的Work-Space转化为C-Space，更方便求解规划问题 例如，对于RR arm[2R arm, 二自由度机械臂] 3D 的情形 Reference 机器人运动规划中的C space怎样理解？为什么不直接在笛卡尔坐标系下运算呢？ - fly qq的回答 - 知乎 Visibility Graph 将多边形的顶点转化为路径点，转化为路径规划问题 但是边缘行走很危险 另一种方案是，根据多边形的顶点在X轴上将其分割为多个三角形或者梯形，在这些多边形内的直线运动是无障碍的，相应的，做出一个辅助路线图，连接两个可达的三角形或梯形的内部点，再进行路径规划 Piano Mover’s...","categories": ["coursera"],
        "tags": [],
        "url": "/coursera/Robotics-Motion-Planning-week1-week2/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/imgbandicam-2021-08-10-20-27-00-953.gif"
      },{
        "title": "Try to use OpenMVS under ubuntu",
        "excerpt":"Run under jupyter-lab Open it at ucas OpenSfM feature_type KAZE[EECV]風 github KAZE Features. Pablo F. Alcantarilla, Adrien Bartoli and Andrew J. Davison. In European Conference on Computer Vision (ECCV), Fiorenze, Italy, October 2012. bibtex Perona-Malik方程 非线性尺度空间 AKAZE[Accelerated-KAZE KAZE的加速版] SIFT DoG[Difference of Gaussian] SURF[Speeded up robust features] Use Box-Filter[盒子滤波器] instead of...","categories": ["coursera"],
        "tags": [],
        "url": "/coursera/Try-to-use-OpenMVS-under-ubuntu/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/imgbandicam-2021-08-10-20-27-00-953.gif"
      },{
        "title": "Robotics Motion Planning week3 and week4",
        "excerpt":"week3   Probilalitic Road Map(PRM)      Rapidy Exploring Random Tree(RRT) Method      RRT 2      Week4   Artificial Potential Field[人造势场]         规划路径平滑化   将随机取点改为梯度下降法   Attractive Field[引力场]            将起点放在高处，终点放在低处           Repulsive Field[斥力场]            障碍物提供斥力           Reference      路径规划-人工势场法(Artificial Potential Field) - 半杯茶的小酒杯的文章 - 知乎  ","categories": ["coursera"],
        "tags": [],
        "url": "/coursera/Robotics-Motion-Planning-week3-and-week4/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/imgbandicam-2021-08-10-20-27-00-953.gif"
      },{
        "title": "Make OpenMVS work at jupyter",
        "excerpt":"尝试高清ColMap逻辑 Feature Extractor 特征点提取 --SiftExtraction.use_gpu 0 You cannot use the feature extractor in GPU mode without an attached display issue --ImageReader.camera_model SIMPLE_RADIAL camera model Default is SIMPLE_RADIAL, you can choice one of PINHOLE RADIAL OPENCV SIMPLE_RADIAL_FISHEYE RADIAL_FISHEYE OPENCV_FISHEYE FOV THIN_PRISM_FISHEYE colmap feature_extractor \\ --database_path $DATASET_PATH/database.db \\ --image_path $DATASET_PATH/images\\ --SiftExtraction.use_gpu 0...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Make-OpenMVS-Work-at-Jupyter/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210811172921.png"
      },{
        "title": "ColMap OpenMVS workflow",
        "excerpt":"Through a lot of reading about those doc and issue I wanna write a tutorial for fresh people. This is prepare for linux server (means no desktop) And I have compile the latest version colmap and openmvs Step 1 colmap feature_extractor \\ --SiftExtraction.use_gpu 0 \\ --database_path $PROJECT/database.db\\ --image_path $DATA_ROOT/$PROJECT/images here...","categories": ["3d"],
        "tags": [],
        "url": "/3d/ColMap-OpenMVS-workflow/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/imgbandicam-2021-08-10-20-27-00-953.gif"
      },{
        "title": "Problem Analysis About Texture mapping",
        "excerpt":"现象      贴图不完整         贴图边缘抖动      原因分析      mesh交叉         平面过薄  ","categories": ["3d"],
        "tags": [],
        "url": "/3d/Problem-Analysis-About-Texture-mapping/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210812184013.png"
      },{
        "title": "Convert Camera Parameters [model of colmap]",
        "excerpt":"Try Colmap with cuda(gpu) enable gpu with args --SiftExtraction.use_gpu 1 but throw qt error, need x display close QT gui by export QT_QPA_PLATFORM=offscreen but throw these error below *** Aborted at 1628840833 (unix time) try \"date -d @1628840833\" if you are using GNU date *** PC: @ 0x7f07a36bbbf8 (unknown) ***...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Convert-Camera-Parameters/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/imgogjbzom3fyingbqavx06.gif"
      },{
        "title": "PID and laplace transform",
        "excerpt":"PID Control 最常见的形式 $u(t)=K_pe(t)+K_i\\int_0^te(\\tau)d\\tau+K_d\\frac{d}{dt}e(t)$ 其中 $K_p$为比例(proportional)增益 $K_i$为积分(integral)增益 $K_d$为微分(derivative)增益 $e=SP-PV$为误差，设定值(setpoint)$SP$与过程值(process variable)$PV$的差 $t$为时间 $\\tau$积分变数，因为是历史状态的积分，因此要与$t$区分开来 比较常见的解释和应用 通过控制水箱的流入速度，使得水箱内的高度或体积保持不变的一种过程 汽车定速巡航，遇到上坡如何设计动力 无人机的悬停和应激相应(推一下回到原来的位置，或者前往目标点) 解决电路问题 PID 通常学习PID控制时，往往不太懂得3个变量的实际作用，又有计算机作为辅助进行模拟，那么就会导致盲目调参，而书中提到的调参方法又只讲参数含义，将调参性质描述一遍，这样完全不得法门，最后只能得到一个差不多的结果 历史上 惠更斯17世纪改造了风车，使得磨盘转速和磨盘间隙可以根据谷物数量变化 Power From the Wind , Cambridge University Press 瓦特使用圆锥摆以解决蒸汽机的速度输出 History of AutoCtrl 1868年，为了更好的保持鱼雷的深度，引入了微分控制 直到1922年，才有了完整的3项控制率 因此，大多数书籍往往会根据每项变量引入时发挥的作用加以解释，但是又与纯PI控制，PD控制，甚至单纯的P控制应用相违背，除了硬件或成本上的限制，更需要思考的是，每一项为整个系统的稳定性到底提供了多大的好处 PID调参 为了获得更好的参数，有如下几种方法 手动 Ziegler–Nichols[齐格勒－尼科尔斯方法] Ziegler–Nichols_method - Wikipedia 使用Z-N方法调节气压 - Bilibili 将ID项置0，调节P使得达到恒定震荡，再根据震荡周期和震荡值计算PID参数 注意，想要在P控制下得到稳定震荡，要有超调现象，如果通过计算机模拟，而时间单位又很小，那么无论用多大的$K_P$你都看不到超调现象，可以理解为，系统刚刚输入一点点就被感知到了，而上面视频里从气流输入到输出存在一定的延迟，因此可以使用该方法 反馈较慢 快速反馈...","categories": ["zhihu"],
        "tags": [],
        "url": "/zhihu/PID-and-laplace-transform/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210816231759.png"
      },{
        "title": "Convert Camera Parameters [usage of ContextCapture Master]",
        "excerpt":"Convert parameters 拿到空三的参数文件，发现是 Smart3D(soarscape.com) 的软件导出的，尝试下载，发现需要申请 根据关键字查找，找到ContextCapture Master 下载安装 Model generate Add photos click submit aerotriangulation at general tab. start ContextCapture Engine wait job complish Reconstruction&gt;new Reconstruction click submit new production wait for job complish check production 3D view output Model ├── Model.mtl ├── Model.obj ├── Model_0.jpg ├── Model_1.jpg ├── Model_2.jpg...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Camera-parameters-convert/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210816194645.png"
      },{
        "title": "Reading Texure paper",
        "excerpt":"Reconstructing textured meshes from multiple range+rgb maps ISTI-CNR summary Minimizing redundancy and optimizing the color attribute represendtation Eliminate most of the color difference or discontinuity which exist in input images cross-correlation interpolation Work flow visibility calculation get a set of valid cameras/images for the face ray-tracing calculation[耗时] hardware-accelerated OpenGL 每个面一个颜色，用OpenGL直接渲染，选择相机能看到的颜色作为可观测颜色...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Reading-Texture-paper/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210817225945.png"
      },{
        "title": "Texture for 9-9 project",
        "excerpt":"Try difference combination original case 1 srs: original, EPSG:4490 rotation: M_00 to M_22 t: x,y,z in metadata&gt;center xml: original data: 1-1 case 2 srs: original, EPSG:4490 rotation: M_00 to M_22 t: x,y,z in center xml: original data: 1-1 NOTHING output export from ccm srs: 4490 rotation: M_00 to M_22 t:...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Texture-for-9-9-project/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210818235000.png"
      },{
        "title": "Texture for 9-9 project[2]",
        "excerpt":"Intrinsics matrix $$ \\begin{bmatrix}\\frac{f s_{w}}{w} & 0 & p_{x}\\\\0 & \\frac{f s_{h}}{h} & p_{y}\\\\0 & 0 & 1\\end{bmatrix} $$ $f$: focal $w,h$: 图片像素大小 $s_w,s_h$: 感光元件大小 $p_x,p_y$: 光心位置 Externals matrix $$ R=\\begin{bmatrix}\\cos{\\left(\\psi \\right)} \\cos{\\left(\\theta \\right)} & \\sin{\\left(\\phi \\right)} \\sin{\\left(\\theta \\right)} \\cos{\\left(\\psi \\right)} + \\sin{\\left(\\psi \\right)} \\cos{\\left(\\phi \\right)} & \\sin{\\left(\\phi \\right)} \\sin{\\left(\\psi...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Texture-for-9-9-project-2/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210820003537.png"
      },{
        "title": "Texture for 9-9 project[3]",
        "excerpt":"Change Externals matrix 相机中心点 9-9/1-3/ $A_{amap}=(120.394685,36.06414)$ $A_{cams}=(120.389564,36.063963)$ $A_{model}=(79.1888,45.546)$meter 模型原点 O $O_{amap}=(120.394637,36.064383)$ $O_{cams}=o_{amap} + (A_{cams} - A_{amap})$ $$ \\mathbf{T} = \\begin{bmatrix} 111320&&\\\\ &7156&\\\\ &&1 \\end{bmatrix}\\left( \\begin{bmatrix} x\\\\y\\\\z \\end{bmatrix} - \\begin{bmatrix} 120.388816\\\\ 36.064206\\\\ 0 \\end{bmatrix} \\right) $$ 其中 经纬转换 Formula 1 how-to-convert-latitude-or-longitude-to-meters Stackoverflow $$ \\begin{aligned} \\frac{latitude}{degree}&=111320m/\\degree\\\\ \\frac{longitude}{degree}&=40075km\\frac{\\cos(lat)}{360}=40075km\\frac{\\cos(36.064\\frac{\\pi}{180})}{360}\\\\ &=90013.62031373613m/\\degree \\end{aligned} $$ f_lai =...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Texture-for-9-9-project-3/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img6b7c545c0dfcde72831729be9319e32.png"
      },{
        "title": "Point Cloud Match",
        "excerpt":"script Cloud point match for greeb x 高斯分布得到子集 for red dot 随机抽样得到的子集 other is total tie point Block 3 tie point 尝试多对多ICP def match(pc_gps, pc_model, t): scala = np.array([110959.71900894716, 90118.10182968706, 1]) target_pair = [] def distance(source, target): return np.linalg.norm(scala * (source - t) - target, axis=1) for i in tqdm(range(len(pc_gps)),...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Point-Cloud-Match/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210823123247.png"
      },{
        "title": "ICP 2D and 3D",
        "excerpt":"Point Cloud Registration[点云配准] Coarse Registration 粗配准 Fine Registration 精配准 Iterative Closest Point, ICP ICP OpenCV doc 2D ICP 2D Rotation Matrix $$ M(\\theta) = \\begin{bmatrix} \\cos(\\theta)&-\\sin(\\theta)\\\\ \\sin(\\theta)&\\cos(\\theta)\\\\ \\end{bmatrix} = exp\\bigg(\\begin{bmatrix} 0&-\\theta\\\\ \\theta&0 \\end{bmatrix}\\bigg) $$ Code def icp(a, b, init_pose=(0,0,0), no_iterations = 13): src = np.array([a.T], copy=True).astype(np.float32) dst = np.array([b.T], copy=True).astype(np.float32)...","categories": ["3d"],
        "tags": [],
        "url": "/3d/ICP-2D-and-3D/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210825142134.png"
      },{
        "title": "ICP Benchmark",
        "excerpt":"ICP 2D 收敛域检测 数据集 ang = np.linspace(-np.pi/2, np.pi/2, 320) originate_point = np.array([ang, np.sin(ang)]).T th = np.pi/2 rot = np.array([[np.cos(th), -np.sin(th)],[np.sin(th), np.cos(th)]]) # 旋转后的点 rotated_point = cv2.transform(originate_point[None, :], np.append(rot, np.array([[0.2], [0.3]]), axis=1))[0] # 采样 sample_rotated_point = rotated_point[sorted(np.random.choice(b.shape[0], 10, replace=False)), :] 其中 rot为旋转矩阵 $M(\\theta) = \\begin{bmatrix} \\cos(\\theta)&-\\sin(\\theta)\\\\ \\sin(\\theta)&\\cos(\\theta)\\\\ \\end{bmatrix} = exp\\bigg(\\begin{bmatrix} 0&-\\theta\\\\...","categories": ["3d"],
        "tags": [],
        "url": "/3d/ICP-benchmark/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210825222557.png"
      },{
        "title": "Point Cloud Match[2]",
        "excerpt":"类局部的配准算法 受限于点云初始位置 仅适用于小角度错开的点云配准问题 受限于主成分分析、奇异值分解算法 迭代次数较多，后期收敛缓慢 最近邻点的成本较高，KD-tree虽然搜索效率较高，但仍无法满足于解决大规模点云的配准问题 ICP(Iterative Closest Point) 不断迭代原始点云的变换矩阵，直到RMSE收敛域局部最优解 迭代过程 搜索最近点集 构造协方差矩阵 奇异值分解 求解旋转矩阵 OpenCv cv2.estimateAffinePartial2D(src, dst[0, indices.T]), 4自由度 cv2.estimateAffine2D(src, dst[0, indices.T]),6自由度 $$ \\begin{cases} E(R,T)=\\sum_{i=1}^N\\Vert Rp_i+T-p_{closest}\\Vert_2^2\\\\ P_{closest}=\\underset{q_j}{\\argmin}\\Vert p_i-Q\\Vert_2^2 \\end{cases} $$ ICP 变种 LM-ICP Moré J J. The Levenberg-Marquardt algorithm: Implementation and theory[J]. Lecture Notes in Mathematics, 1978, 630: 105-116....","categories": ["3d"],
        "tags": [],
        "url": "/3d/Point-Cloud-Match-2/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210826160724.png"
      },{
        "title": "ICP Gradient descent",
        "excerpt":"solver def fun(x): return x**2 - 16 def double_fun(x): return 3*np.exp(x[0]) + x[1]**2 - 16 sample_point = rotated_point[sorted(np.random.choice(rotated_point.shape[0], 20, replace=False)), :] def icp_fun(x): R = icp(originate_point, sample_point, x, 2) rotated_fit_point = cv2.transform(originate_point[None, :], R)[0] return cost(rotated_fit_point, rotated_point) def derivative(f, x): delta = 1E-6 * np.eye(len(x)) de = [] for i...","categories": ["3d"],
        "tags": [],
        "url": "/3d/ICP-Gradient-descent/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210828004409.png"
      },{
        "title": "Matplotlib animation bliting",
        "excerpt":"prerequisite matplotlib==3.2.2, cause this issue Using blitting method to speed up animation rendering Method 1, using method Follow this link Making Animations Quickly with Matplotlib Blitting - alexgude.com def init_fig(fig, ax, artists): \"\"\"Initialize the figure, used to draw the first frame for the animation. \"\"\" ax.set_title(\"Supernova 2011fe Spectrum\", fontsize=22) ax.set_xlabel(\"Wavelength...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Matplotlib-animation-bliting/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210829022917.png"
      },{
        "title": "ICP Back Propagate fix",
        "excerpt":"A Error at ICP iterations Iterative Closest Point (ICP) implementation on python - stack import cv2 import numpy as np import matplotlib.pyplot as plt from sklearn.neighbors import NearestNeighbors def icp(a, b, init_pose=(0,0,0), no_iterations = 13): src = np.array([a.T], copy=True).astype(np.float32) dst = np.array([b.T], copy=True).astype(np.float32) Tr = np.array([[np.cos(init_pose[2]),-np.sin(init_pose[2]),init_pose[0]], [np.sin(init_pose[2]), np.cos(init_pose[2]),init_pose[1]], [0, 0,...","categories": ["3d"],
        "tags": [],
        "url": "/3d/ICP-Back-Propagate-fix/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210830190751.png"
      },{
        "title": "ICP 3D With Standard Scalar",
        "excerpt":"      9 自由度最小化优化         4x4 矩阵改为     ","categories": ["3d"],
        "tags": [],
        "url": "/3d/ICP-3D-with-standard-scalar/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210831005957.png"
      },{
        "title": "Using vcpkg and cmake with Visual studio 2019",
        "excerpt":"C++ project package manager Comparison Read thoes detail at Reddit vcpkg Repository spark star Conan Repository spark star build2 Repository spark star Install vcpkg Install Windows git clone https://github.com/microsoft/vcpkg cd vcpkg bootstrap-vcpkg.bat install package vcpkg install eigen3 Check support platform vcpkg help triplets Check Installed package vcpkg list Using vcpkg...","categories": ["tutorial"],
        "tags": [],
        "url": "/tutorial/Using-vcpkg-and-cmake-with-Visual-studio-2019/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210903234604.png"
      },{
        "title": "Cmake Texture project",
        "excerpt":"vcpkg install set proxy $env:HTTP_PROXY=\"localhost:4780\" $env:HTTPS_PROXY=\"localhost:4780\" Camke generator Warning CMP0074 log Policy CMP0074 is not set: find_package uses &lt;PackageName&gt;_ROOT variables. Run \"cmake --help-policy CMP0074\" for policy details. Use the cmake_policy command to set the policy and suppress this warning. Environment variable Eigen3_ROOT is set to: ... For compatibility, CMake is...","categories": ["tutorial"],
        "tags": [],
        "url": "/tutorial/Cmake-Texture-project/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210903234604.png"
      },{
        "title": "Texture for original model And Cmake on OpenMVS",
        "excerpt":"Texture at original mesh name size comment vertices faces mesh-original 2.1G Original Block Merge     mesh-original-building 2.1G Building only     mesh-original-plant 429M Plant only     mesh-original-reduce-50p 1.0G maya reduce 50%     mesh-original-reduce-50p-50p 529M maya reduce 25%     mesh-original-reduce-50p-50p-50p 265M maya reduce 12.5% 694001 1361715 case1...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Texture-For-Original-Model/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210907221533.png"
      },{
        "title": "Texture for dog project",
        "excerpt":"Original Texture Some sureface mesh too small be ignored. Remeshing Make mesh to Equilateral triangle 3DScan Texture after remeshing Texture after remeshing with invert matrix[0:3, 0:3] = np.linalg.inv(matrix[0:3, 0:3]) 相机不动物体动时，相机朝向需要取逆 Easy 3D Repository spark star Home Page Author Usage ------------------------------------------------------------------ F1: Help F2: Toggle animation (if available) Ctrl + 'o':...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Texture-for-dog-project/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210908163126.png"
      },{
        "title": "Texture Paper Reading-[Let There Be Color!]",
        "excerpt":"Let There Be Color! - Large-Scale Texturing of 3D Reconstructions Paper.pdf In this paper we therefore present the first unified texturing approach that handles large, realistic datasets reconstructed from images with a structure-from-motion plus multi-view stereo pipeline. millions of triangles within less than two hours. Related view selection blend multiple...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Texture-Paper-Reading-Let-There-Be-Color!/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210910164754.png"
      },{
        "title": "Possion Image Edit",
        "excerpt":"Possion Image Edit PPT Paper.pdf - Microsoft Research UK Python output = cv2.seamlessClone(src, dst, mask, center, flags) Definitions $g$: 原始图像，左图企鹅 $f$: 插值函数 $f^*$: 目标图像 $\\Omega$: 目标域 $\\partial\\Omega$: 目标域边缘，边界 Basic idea 期望的结果 填补内容要尽可以平滑 填补内容的边界像素值和现有的$S$一致，即要无缝过度 变分方程 $\\underset{f}{\\min}\\iint_\\Omega\\vert\\nabla f\\vert^2$ with $f\\vert_{\\partial\\Omega}=f^*\\vert_{\\partial\\Omega}$ E-L Equation $\\Delta f=0$ over $\\Omega$ with $f\\vert_{\\partial\\Omega}=f^*\\vert_{\\partial\\Omega}$ $\\Delta$: 二阶微分， 散度divergence $f\\vert_{\\partial\\Omega}=f^*\\vert_{\\partial\\Omega}$:...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Possion-Image-Edit/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210910131356.png"
      },{
        "title": "Install Cpp jupyter kernel, Image Guied Filter",
        "excerpt":"Install Cpp kernel jupyter notebook 安装 C/C++ kernel - KEN的文章 - 知乎 conda install xeus-cling -c conda-forge after install jupyter kernelspec list fix issue by cp /opt/anaconda3/envs/gpu/lib/python3.8/_sysconfigdata_x86_64_conda_cos6_linux_gnu.py /opt/anaconda3/envs/gpu/lib/python3.8/_sysconfigdata_x86_64_conda_linux_gnu.py check installation python3 /opt/anaconda3/envs/gpu/share/jupyter/kernels/python3 xcpp11 /opt/anaconda3/envs/gpu/share/jupyter/kernels/xcpp11 xcpp14 /opt/anaconda3/envs/gpu/share/jupyter/kernels/xcpp14 xcpp17 /opt/anaconda3/envs/gpu/share/jupyter/kernels/xcpp17 Guided Image Filtering PPT eccv 2010 Paper.pdf - Microsoft Research Image Filtering...","categories": ["tutorial","3d"],
        "tags": [],
        "url": "/tutorial/3d/Install-Cpp-jupyter-kernel/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210908163126.png"
      },{
        "title": "Texture for color lion",
        "excerpt":"Texture for colorful lion Params List and annotation params st comment decimate d decimation factor in range [0..1] to be applied to the input surface before refinement (0 - auto, 1 - disabled) close-holes ch try to close small holes in the input surface (0 - disabled) resolution-level rl how...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Texture-for-color-lion/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210916224127.png"
      },{
        "title": "Texture for smooth",
        "excerpt":"Run Data set id obj image ot mr csr gsl lsl ec result 1 12w pure-color 0 0 1 false false ⬛ 💩 2 meshlab_lap-smooth_12w pure-color 0 0 1 false false ⬛ 💩 3 meshlab_HC-lap-smooth_12w pure-color 0 0 1 false false ⬛ 💩 4 meshlab_normal-smooth_12w pure-color 0 0 1 false...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Texture-for-smooth/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210917172233.png"
      },{
        "title": "Texture for smooth 2",
        "excerpt":"More Smooth case id obj image ot mr csr gsl lsl ec result 1 12w pure-color 0 0 1 false false ⬛ 💩 2 12w-5w pure-color 0 0 1 false false ⬛ 💩 3 mapple_gussian-0.1_12w pure-color 0 0 1 false false ⬛ 💩 4 mapple_sm-remesh_12w-5w pure-color 0 0 1 false...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Texture-for-smooth2/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210918235717.png"
      },{
        "title": "Texture Paper Reading TODO",
        "excerpt":"Texture Mapping Progressive Meshes - Microsoft Research         Paper.pdf   Abstract      goal            minimizes texture stretch (small texture distances mapped onto large surface distances) to balance sampling rates over all locations and directions on the surface       minimizes texture deviation (“slippage” error based on parametric correspondence) to obtain accurate textured mesh approximations          ","categories": ["3d"],
        "tags": [],
        "url": "/3d/Texture-Paper-Reading-TODO/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210910164754.png"
      },{
        "title": "Texture Paper Reading - [Rethinking Texture Mapping]",
        "excerpt":"Rethinking Texture Mapping - State of The Art Report Paper.pdf 1.1 Scope Perfecting the Traditional Texture Mapping RNLL10 - Invisible Seams Paper.pdf LFJG17 - Seam Erasure Seamless: seam erasure and seam-aware decoupling of shape from mesh resolution. Paper.pdf Tar12 - Seamless Toroidal/Cylindrical Textures Cylindrical and toroidal parameterizations without vertex seams...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Texture-Paper-Reading-Rethinking-Texture-Mapping/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210921190258.png"
      },{
        "title": "Clion Debug",
        "excerpt":"Problem List windows [xps] build ... [ 75%] Linking CXX executable ..\\..\\bin\\x86\\InterfaceVisualSFM.exe LINK: command \"... C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v11.4\\lib\\Win32\\cuda.lib ...\" failed (exit code 1120) with the following output: MVS.lib(Mesh.cpp.obj) : error LNK2001: 无法解析的外部符号 cuGetErrorString MVS.lib(Mesh.cpp.obj) : error LNK2001: 无法解析的外部符号 cuGetErrorName MVS.lib(Mesh.cpp.obj) : error LNK2001: 无法解析的外部符号 cuParamSetSize MVS.lib(Mesh.cpp.obj) : error...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Clion-Debug/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210923165954.png"
      },{
        "title": "Build and run TextureMesh at UCAS machine",
        "excerpt":"Reinstall vcpkg at xps Just remove vcpkg directory. Compile and Build Texture_extract at xps machine The files need change Copy CMakeLists.txt from TextureMesh to TextureMesh_extract, change TextureMesh to TextureMesh_extract at the same time Change include at TextureMesh_extract.cpp and interfaceCamera.hpp Build with x64 Same example after texture original HC-lap-smooth gussian Detail...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Build-And-Run-TextureMesh-at-UCAS-machine/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210924191016.png"
      },{
        "title": "OpenMVS Texture code reading",
        "excerpt":"TextureMesh FaceViewSelection ListVertexFaces✔️ // extract array of triangles incident to each vertex EmptyExtra✔️ ListIncidenteFaces✔️ ListBoundaryVertices✔️, // 边界点检查，在面中，只使用了1次的点是边界点，另外，代码中假设每个点通常不会超过12个面使用 // create texture patches✔️ ListCameraFaces // list all views for each face //create vertices octree of vertices✔️ //extract array of faces viewed by each image✔️ //compute gradient magnitude✔️ //select faces inside view frustum✔️...","categories": ["3d"],
        "tags": [],
        "url": "/3d/OpenMVS-Texture-Code-Reading/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210928142744.png"
      },{
        "title": "Minimum bounding box [MBB]",
        "excerpt":"MBB 最小包围盒 [Minimum bounding box] AABB 轴对齐包围盒 [Axis-aligned minimum bounding box] when the model is rotated they cannot be simply rotated with it, but need to be recomputed. $$ \\begin{aligned} P_{min} &= [x_{min},y_{min},z_{min}]\\\\ P_{max} &= [x_{max},y_{max},z_{max}] \\end{aligned} $$ OBB 有向围盒 [Oriented minimum bounding box] 其中 $C$: Center Point $\\mathbf{u, v,...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Minimum-bounding-box-MBB/",
        "teaser": "https://upload.wikimedia.org/wikipedia/commons/7/7e/BoundingBox.jpg"
      },{
        "title": "Operator For Image",
        "excerpt":"Sobel Operator - 1968 [索伯算子, 索贝尔算子] Paper - An Isotropic 3x3 Image Gradient Operator Paper.pdf Formula $$ \\begin{aligned} G_x &= \\begin{bmatrix} +1&0&-1\\\\+2&0&-2\\\\+1&0&-1\\\\ \\end{bmatrix} * IMG\\\\ G_y &= \\begin{bmatrix} +1&+2&+1\\\\0&0&0\\\\-1&-2&-1\\\\ \\end{bmatrix} * IMG\\\\ G &= \\sqrt{G_x^2 + G_y^2}\\\\ \\Theta &= \\arctan(\\frac{G_y}{G_x})=atan2(G_x, G_y) \\end{aligned} $$ OpenMvs Related Digital step edges from zero...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Operator-For-Image/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210927162819.png"
      },{
        "title": "Trangle Rasterization",
        "excerpt":"OpenMVS[Homogeneous Coordinate] Advanced Rasterization - Nick 2004 Triangle Scan Conversion using 2D Homogeneous Coordinates - CMU Line sweeping[线扫法] Triangle-rasterization-and-back-face-culling 对y排序，从左向右设置像素 分两段画完 Barycentric Coordinates[重心坐标系判定法 - 并行计算中的判定] 遍历AABB内的所有点的重心坐标 For Convex 重心坐标具有仿射不变性 As Area coordinates in trangle 对于三点$A,B,C$的坐标分别为$\\mathbf{a,b,c}$ 对于任意点$P$的坐标$p$ 设$S_{\\triangle{PBC}}:S_{\\triangle{PBC}}:S_{\\triangle{PBC}}=\\lambda_1:\\lambda_2:\\lambda_3$ $\\lambda_1+\\lambda_2+\\lambda_3=1$ 延长$AP$交$BC$于$D$ $$ \\begin{aligned} &\\because&BD:DC&=\\lambda_3:\\lambda_2\\\\ &\\therefore& \\mathbf{d}&=\\frac{\\lambda_2\\mathbf{b}+\\lambda_3\\mathbf{c}}{\\lambda_2+\\lambda_3}\\\\ &\\because&AP:PD&=(\\lambda_2+\\lambda_3):\\lambda_1\\\\ &\\therefore&\\mathbf{p}&=\\frac{(\\lambda_2+\\lambda_3)\\mathbf{d}+\\lambda_1\\mathbf{a}}{\\lambda_1+\\lambda_2+\\lambda_3}\\\\ &\\therefore&\\mathbf{p}&=\\lambda_1\\mathbf{a}+\\lambda_2\\mathbf{b}+\\lambda_3\\mathbf{c} \\end{aligned} $$ 因此，重心坐标，...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Trangle-Rasterization/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210927162819.png"
      },{
        "title": "Cmake Bug",
        "excerpt":"Cmake can not find OpenMP Clion(2021.2.2) use the default Cmake version is 3.20.2 Got following error at path-to-build/CMakeFiles/CMakeError.log -- The C compiler identification is MSVC 19.29.30133.0 -- The CXX compiler identification is MSVC 19.29 30133.0 -- Detecting C compiler ABI info -- Detecting C compiler ABI info - failed --...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Cmake-Bug/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210927162819.png"
      },{
        "title": "Texture for invisible",
        "excerpt":"Causes of no texture      bInvisibleFace || bInvisibleFaceAdj == Ture                       bInvisibleFace == True                              mesh问题                       C++ Tech      调用约定——_cdecl,_stdcall,_fastcall                      ","categories": ["3d"],
        "tags": [],
        "url": "/3d/Texture-for-invisible-face/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211009132134.png"
      },{
        "title": "Nerf",
        "excerpt":"Nerf                  Repository       spark       star                                                   Nerf HomePage                   Paper.pdf           Key Point      输入是位置和视角方向$(x,y,z) + (\\theta, \\phi)$构成的5D坐标，输出是体积密度和颜色            Position encoding可以提高细节       层次化的采样流程可以减少采样           通过volume rendering实现视图合成   全连接网络MLP      Reference      【论文精炼】何雨龙 - cnblogs   nerf(ML Research Paper Explained) - Youtube   图形学新高潮? NeRF 笔记 - Lee bro的文章 - 知乎   NeRF ——使用神经辐射场(Neural Radiance Fields)表示场景来进行视图合成(View Synthesis)🤙   【NeRF论文笔记】用于视图合成的神经辐射场技术 - 林天威的文章 - 知乎  ","categories": ["3d"],
        "tags": [],
        "url": "/3d/Nerf/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211014233233.png"
      },{
        "title": "The Path to Nerf",
        "excerpt":"Three tools to create citation mapping 3 new tools to try for Literature mapping — Connected Papers, Inciteful and Litmaps - Medium Connected Papers Inciteful Litmaps🤙 CoCites Has chrome extension Citation Gecko Too simple VOSviewer Need data file NeRF Path Track [2D变3D，视角随意换，神还原高清立体感，还是不用3D建模的那种 代码数据开源 - 量子位的文章 - 知乎](https://zhuanlan.zhihu.com/p/128554388) 白话神经辐射场（NeRF）：类神经网路在查看综合的热门新方向 - medium...","categories": ["3d"],
        "tags": [],
        "url": "/3d/The-Path-To-Nerf/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211018233219.png"
      },{
        "title": "The Path to Nerf",
        "excerpt":"LLFF Prepare Image data/desk/images ├── 2c68275866dc2b1da47f5eaf885c583.jpg ├── 2fd70dcc8b5f374886df488054fa5ab.jpg ├── 34df512a279040a3820c531c13d5e17.jpg ├── 358af944c88b7a3ff231e4e2eeafdd0.jpg ├── 3808e607c1cf63cebf12b29dc7f2442.jpg ├── 5dbf835776758757c2be8b5ee08e17b.jpg ├── 9ca4a35fffb7a69f84be9e1f2945848.jpg ├── d86ac4a847edb12b6dcded776d47732.jpg ├── e1402fe72717cfac86bd9cd69c3b98f.jpg ├── f2dfe38840ae9fd02dd33fa09dad769.jpg ├── fd177d4977813dfce11b09f71797e01.jpg └── ff21b26780837071d7980447866f217.jpg At LLFF project directory nvidia-docker run --rm --env CUDA_VISIBLE_DEVICES=3 --volume /:/host --workdir /host$PWD tf_colmap bash demo.sh --env CUDA_VISIBLE_DEVICES=3 is docker container env....","categories": ["3d"],
        "tags": [],
        "url": "/3d/LLFF-To-NeRF/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211021200334.png"
      },{
        "title": "MPI Paper Reading",
        "excerpt":"MPI: Single-view view synthesis with multiplane images                  Repository       spark       star                                                   Github.io         Colab                       term or concept            non-Lambertian effects                    为什么太阳看起来像一个均匀发光圆盘? - a crysfer的回答 - 知乎           Lambertian reflectance - WikiPidea           几何反照率 - WikiPidea                                       发光强度和亮度的概念不仅适用于自己发光的物体，也可以应用到反射体。光线射到光滑的表面上，定向地发射出去；射到粗糙的表面上时，它将朝向所有方向漫射。一个理想的漫射面，应是遵循朗伯定律的，即不管入射光来自何方，沿各方向漫射光的发光强度总与cosθ成正比，从而亮度相同。积雪、刷粉的白墙或十分粗糙的白纸表面，都很接近这类理想的漫射面。这类物体称为朗伯反射体。                                                   ","categories": ["3d"],
        "tags": [],
        "url": "/3d/MPI-Paper-Reading/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211022153912.png"
      },{
        "title": "Pytorch Gpu",
        "excerpt":"Pytorch using GPU to training Make input data and model to cuda device for Model net = Net() device = None if torch.cuda.is_available(): device = torch.device(\"cuda\") net = net.to(device) for data inputs = inputs.to(device) labels = labels.to(device) verify input.device # cuda label.device # cuda Make output data to cpu device...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Pytorch-GPU/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211025231533.png"
      },{
        "title": "VPN Share",
        "excerpt":"翻墙小白入门 历史 hosts |Repository|spark|star| |:-:|:-:|:-:| ||| 自由门 GoAgent GAE to 2015-8 GoProxy to 2015-3 ss [clowwindy] |Repository|spark|star| |:-:|:-:|:-:| ||| 2012年4月22日 发布 2015年8月18日 警察 2015年8月21日 喝茶 Shadowsocks 是如何被检测和封锁的 ssr [breakwa11] 评价 shadosocks-windows/Issue108 2017年7月27日 停止 事件列表 2017年1月《关于清理规范互联网网络接入服务市场的通知》 2017年7月底，中国区 App Store 多款 VPN 相关应用在无任何说明与通知的情况下，突然集体被下架 2017年10月, 十九大, 封杀, SSR 大会闭幕后, IP解封 2018年1月, 两会, 更大规模的封杀...","categories": ["share"],
        "tags": [],
        "url": "/share/VPN-Share/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211026163001.png"
      },{
        "title": "Pytorch Multi GPU",
        "excerpt":"单机多卡 Priori Knowledge Pytorch 1.x 的多机多卡计算模型 Uber: Horovod, Baidu: RingAllReduce Baidu: RingAllReduce PS 计算模型 DataParallel [DP] dataset: FashionMNIST Main Code DataParallel Parameter server 算法 reducer的那张卡会多出3-4g的显存占用 # Model net = nn.DataParallel(net) net = net.cuda() # Data inputs = inputs.cuda() labels = labels.cuda() Params Speed Mem% CUDA_VISIBLE_DEVICES=3 15000it [00:55, 271.38it/s] 3:7-13 CUDA_VISIBLE_DEVICES=3,4,6...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Pytorch-Multi-GPU/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211028112306.png"
      },{
        "title": "3D Render Lib Python",
        "excerpt":"Python 3D render engine 3D Scene Renderer for Python [closed] - stackoverflow First-rate, full game engines (have been used for commercial games) Panda3d |Repository|spark|star| |:-:|:-:|:-:| ||| PyOgre Pyrr (Irrlicht wrapper) Less popular 3d engines, new or beta: YMMV. OpenSceneGraph Spyre PySoy Official Web is Dead Soya PyCrystal Horde3d VTK pyrender...","categories": ["3d"],
        "tags": [],
        "url": "/3d/3D-Render-Lib-Python/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211028112306.png"
      },{
        "title": "Normal Device Coordinate with Different System",
        "excerpt":"NDC [Normal Device Coordinate] 标准化设备坐标 Clip coordinates - Wikipedia assume the coordinate system in math x: outside the screen y: right side z: up side NDC coordinate system platform coordinate system rotation cite pytorch 3d right hand left hand, clockwise pytorch3d doc unity left hand left hand, clockwise aclockworkberry OpenGL...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Normal-Device-Coordinate-with-Different-System/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211102164656.png"
      },{
        "title": "The Coordinate System - How to convert between different coordinate system",
        "excerpt":"Coordinate System system image System hand Rotation hand Camera Order OpenGL RH RH (0,0,-1) XYZ Unity LH LH (0,0,1) YXZ(local) zxy(global) pytorch3d RH LH (0,0,1) XYZ OpenCV、Open3D、Matterport3D、Colmap RH RH (0,0,1) XYZ scipy   RH LH   XYZ xyz blender RH RH     Docs scipy quat = [x,y,z,w] euler XYZ...","categories": ["3d"],
        "tags": [],
        "url": "/3d/The-Coordinate-System-How-to-convert-between-different-coordinate-system/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211116000556.png"
      },{
        "title": "Mutly Polygon plot",
        "excerpt":"WordCloud Algorithm Repository spark star 分词 根据词频设计字体大小 从大到小，利用积分图寻找可以放置矩形的空白空间 积分图 每个点表示左上角矩形的像素和 利用int_canvas[y+h,x+w] - int_canvas[y,x+w] - int_canvas[y+h,x] + int_canvas[y,x] 可以判断该矩形内是否存在任何像素 wordcloud使用内置对象IntegralOccupancyMap实现积分图查找对应矩形内是否存在像素 缺点 wordcloud不支持任意角度旋转 echart支持 Triangle Texture Random triangle contours = np.random.randint(0, 100, (n, 3, 2)) 四叉树 Triangle collision detection Quadrilateral collision detection AABB with AABB collision detection kishimotostudios.com Square Layout Refernece 你不知道的词云...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Mutly-Polygon-plot/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211210133721.png"
      },{
        "title": "Pytorch mesh render memory using",
        "excerpt":"Memory                  Name       Memory       speed                       factor x4       1.6-2.5G       2.3s/it                 factor x2       2.6-3.7G       2.5s/it                 factor x1       4.68G-8.58G       5s/it           Parameter                  Name       Comment                       9-9       在原有贴图上训练进行修正，Factor=4                 uv_avg_pooling       为了避免某些贴图像素未被训练，讲max_pooling改为avg_pooling                 factor       更改uv大小                 zeros_uv       纯黑色的uvmap                 color_sobel       gray sobel的训练结果偏绿，各层训练结果不同步，使用3层sobel修正彩色部分                 no_maxmin_scalar       blur后存在大于1的像素点，归一化时曾使用过maxmin_scalar，但这直接影响了训练结果的齐次性                 random_uv       zero uv在训练时存在扩散效应，固训练速度较慢，改为random_uv训练速度变大                 multi_loss       sobel_loss只将边缘计算了出来，无法表达平滑像素                 softphone-shader       更改hardphone-shader，使得点的权重加大           $\\sqrt{0}\\rightarrow\\frac{1}{2}0^{-\\frac{1}{2}}$   $\\sqrt{0 + \\epsilon^2}-\\epsilon\\rightarrow\\frac{1}{2}(0+\\epsilon^2)^{-\\frac{1}{2}}$   $uv=sigmoid(\\log(\\frac{uv}{1-uv}))$  ","categories": ["3d"],
        "tags": [],
        "url": "/3d/Pytorch-mesh-render-memory/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211210133721.png"
      },{
        "title": "Mesh UV Motivation",
        "excerpt":"obj file Img file mtllib square.mtl v 0 0 0 v 0 1 0 v 1 1 0 v 0 0 0 v 1 1 0 v 1 0 0 vt 0.25 0.25 vt 0.25 0.75 vt 0.75 0.75 vt 0.25 0.25 vt 0.75 0.75 vt 0.75 0.25 usemtl material_0...","categories": ["3d"],
        "tags": [],
        "url": "/3d/uv-mesh-motivation/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20220115190637.png"
      },{
        "title": "Pytorch Distributed Training Dataloader Test",
        "excerpt":"How the dataloader split data into mutly devices Code from typing import List import torch from torch.distributed import init_process_group, get_rank from torch.utils.data import Dataset, DataLoader, DistributedSampler from tqdm import tqdm class TestDataset(Dataset): def __init__(self, size: int): self.size = size self.data: List[int] = list(range(size)) def __len__(self): return self.size def __getitem__(self, index):...","categories": ["3d","pytorch"],
        "tags": [],
        "url": "/3d/pytorch/pytorch-distributed-training-dataloader-test/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20220115190637.png"
      },{
        "title": "Rotation Training by backward progation",
        "excerpt":"Fix light parameter With Sobel Loss RANDOM_UV = False UV_SHAPE = 1024, 1024, 3 UV_TRAIN = False AMBIENT_TRAIN: bool = True DIFFUSE_TRAIN: bool = False SPECULAR_TRAIN: bool = False LOCATION_TRAIN: bool = False expect_value euler_angles_to_matrix(rotation_mask.rotation[i] / 10, 'XYZ') @ euler_angles_to_matrix(torch.tensor([-.1, -.2, -.03], device=device), 'ZYX') With Pixel Loss RANDOM_UV = False...","categories": ["3d","pytorch"],
        "tags": [],
        "url": "/3d/pytorch/rotation-training/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20220115190637.png"
      },{
        "title": "Python speed up, Campare for numba and cuda",
        "excerpt":"numba Code from timeit import timeit import numpy as np import numba from numba import jit, njit # 传入jit，numba装饰器中的一种 @jit(nopython=True) def go_fast(a): # 首次调用时，函数被编译为机器代码 trace = 0 # 假设输入变量是numpy数组 for i in range(a.shape[0]): # Numba 擅长处理循环 trace += np.tanh(a[i, i]) # numba喜欢numpy函数 return a + trace # numba喜欢numpy广播 @jit(nopython=True) def...","categories": ["3d","pytorch"],
        "tags": [],
        "url": "/3d/pytorch/python-speed-up-compare-numba-cuda/",
        "teaser": null
      },{
        "title": "Python setup.py, How to install package by your self",
        "excerpt":"Code Home Page - Github Pypi Page setup.py file from setuptools import setup, find_packages with open('requirements.txt', mode=\"r\", encoding=\"utf8\") as f: required = f.read().splitlines() setup( name='cuefig', version='0.0.2', url='https://github.com/FavorMylikes/cuefig', license='MIT License', author='麦丽素', author_email='l786112323@gmail.com', description='A config framework that you can cue and hint quickly.', package_data={\"\": [\"*.yaml\"], }, classifiers=[ \"Programming Language :: Python ::...","categories": ["tutorial"],
        "tags": [],
        "url": "/tutorial/python-setup/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20220115190637.png"
      },{
        "title": "Matlab 2018b support vs 2019",
        "excerpt":"Config   mex -setup      Choose ` mex -setup C++ `   Reference      让MATLAB2018b支持VS2019的mex配置 - CSDN            Can I use Microsoft Visual Studio 2019 with MATLAB R2019a or R2018b? - MathWork          ","categories": ["tutorial"],
        "tags": [],
        "url": "/tutorial/Matlab-2018a-support-vs2019/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20220115190637.png"
      },{
        "title": "Ubuntu change dns",
        "excerpt":"现象      Can not ping, but curl ok   apt can not update            Could not resolve 'nvidia.github.io'           Can not ping 8.8.8.8, but 223.5.5.5(ali dns) ok   如何解决      更改dns        ubuntu 18       sudo vim /etc/systemd/resolved.conf DNS=223.5.5.5 sudo systemctl restart systemd-resolved.service           检查   systemd-resolve --status   Global     DNS Servers: 223.5.5.5   Reference      Ubuntu 18.04 永久修改DNS的方法 - 51cto  ","categories": ["tutorial"],
        "tags": [],
        "url": "/tutorial/Ubuntu-change-dns/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20220115190637.png"
      },{
        "title": "Pytorch3d conda environment",
        "excerpt":"Pre-install-dependency Anaconda / Miniconda 镜像 - 清华大学开源软件镜像站 - CSDN 驱动匹配 match Failed to initialize NVML: Driver/library version mismatch sudo nvidia-bug-report.sh nvidia-bug-report.log Sep 29 09:57:22 ubuntu kernel: [ 9996.759866] NVRM: API mismatch: the client has the version 470.74, but Sep 29 09:57:22 ubuntu kernel: [ 9996.759866] NVRM: this kernel module has...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Pytorch3d-conda-environment/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20220115190637.png"
      },{
        "title": "Differentiable Renderer OverView",
        "excerpt":"微分渲染的流程以及纹理问题   Dataset      BlendedMVS            Format       image(w/o mask), camera, pdm(The depth and probability maps)           Tanks and Temples            Description                    gt：点云数据，视频数据，照片数据                       Intermediate       Advanced           [贵州]            渲染图片(非真实图片)，未简化模型+简模(无地面)，lod2           Reference      NMR 2018 cvpr            可训练的神经三维网格渲染器（Neural 3D Mesh Renderer）- CSDN                 ","categories": ["3d"],
        "tags": [],
        "url": "/3d/Differentiable-Renderer/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20220115190637.png"
      },{
        "title": "",
        "excerpt":"Pixar-USD 安装趟坑 PixarAnimationStudios/USD Issues 编译 Requirement windows official usd-windows reference usd on win10 依赖， PySide需要用pip安装 PyOpenGL 3.1.6 conda PyQt5 5.15.7 conda PySide2 5.15.5 conda PySide6 6.3.1 pip 安裝目录不要使用空格 python USD\\build_scripts\\build_usd.py \"C:\\Program Files\\USD\" ❌ python USD\\build_scripts\\build_usd.py \"C:\\USD\"✔️ 运行 数据kitchen_set 启动脚本，创建\\usd\\usd.cmd ```bat @echo off pushd %~dp0 set USD_INSTALL_ROOT=%CD% popd setlocal set PATH=%USD_INSTALL_ROOT%\\lib;%PATH%...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Pixar-usd/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img1663053520068.jpg"
      },{
        "title": "ubuntu install desktop",
        "excerpt":"Ubuntu 服务器安装桌面   sudo apt install ubuntu-desktop sudo apt install tightvncserver xrdp      login with xorg options      Reference      🤙Windows 远程控制 Ubuntu 系统 - segmentfault   How to Switch Between GDM and LightDM in Ubuntu - itsfoss            用于lightdm 和 GDM3切换           CentOS8或Ubuntu17.10以上系统无法通过向日葵被远控解决方案   如何在 Ubuntu 服务器上安装桌面环境（GUI）            内置部分方法不应采用       tasksel 不是很安全           应当安装ubuntu-desktop而不是xubuntu-desktop  ","categories": ["3d"],
        "tags": [],
        "url": "/3d/Ubuntu-install-desktop/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img1663053520068.jpg"
      },{
        "title": "Omniverse Kaolin install",
        "excerpt":"Startup   Requirement      Desktop   RTX 2080 +   Reconmmend      Livestream Clients   Install      Kaolin - github   Kaolin - py package   Kaolin - Installation   Run    MESA_GL_VERSION_OVERRIDE=4.6 ./omniverse-launcher-linux.AppImage   Issue      kaolin [carb.cudainterop.plugin] Peer access from 0 to 1 is NOT supported.            restart omniverse with MESA_GL_VERSION_OVERRIDE=4.6           Reference      GLXBadFBConfig - forums.nvidia   Linux Troubleshooting            Q6, Q8          ","categories": ["3d"],
        "tags": [],
        "url": "/3d/Omniverse-Kaolin-install/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20221014194734.png"
      },{
        "title": "Blender export unity problem",
        "excerpt":"Issues      Blender export unity problem            Blender导入模型到Unity的导出设置 - BiliBili           Blender scale vertices            short cut is S in obj-model          ","categories": ["3d"],
        "tags": [],
        "url": "/3d/Blender-export-unity-problem/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20221014194734.png"
      },{
        "title": "Rotation Matrix with different coordinate system",
        "excerpt":"Rotation Matrix   2D  ","categories": ["3d"],
        "tags": [],
        "url": "/3d/Rotation-Matrix-with-different-coordinate-system/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20221014194734.png"
      },{
        "title": "Inpainting",
        "excerpt":"Loss pixel loss $\\mathcal{L}=|I_{est}-I_{HR}|_2^2$ $I_{est}$估计图像，$I_{HR}$高清图像 perceptual loss $\\mathcal{L}=|\\phi(I_{est})-\\phi(I_{HR})|_2^2$ $\\phi(*)$ VGG-19的第二和第五pooling层 texture matching loss $\\mathcal{L}=|G(\\phi(I_{est}))-G(\\phi(I_{HR}))|_2^2$ $G(F)=F·F^T$, 为Gram矩阵 Adversarial loss G 最小化loss $\\mathcal{L}=-log(D(G(z)))$ D 最小化 $\\mathcal{L}=-log(D(x))-log(1-D(G(z)))$ Content Loss 内容损失 讲解^[DeepLearning.ai学习笔记（四）卷积神经网络 – week4 特殊应用:人力脸识别和神经风格转换] 讲解CSDN^[神经网络风格迁移Pytorch] $\\mathcal{L}_{content}^{l}=\\frac{1}{2}|A^{l}(C)-A^{l}(G)|^2$ $l$为层数，通常取vgg中间层，浅层为像素级别，深层为语义级别 $C$内容图像 $G$风格图像 $A$为激活层 Style loss 风格损失 $\\mathcal{L}{Style}^{l}=\\frac{1}{(2n_H^{l}n_W^{l}n_C^{l})^2}\\sum{k}\\sum_{k’}(Gram_{kk’}^{l}(S)-Gram_{kk’}^{l}(G))$ $l$为层数 $Gram$为$Gram$矩阵$G_{kk’}^{l}(S)=\\sum_{i=1}^{n_H^{l}}\\sum_{j=1}^{n_W^{l}}A_{i,j,k}^{l}(S)A_{i,j,k’}^{l}(S)$ $Gram$ $size=(n_c^l,n_c^l)$ $n_H^{l}$为第l层的H大小 $\\mathcal{L}{style}(S, G)=\\sum_l\\lambda^l\\mathcal{L}{style}^l(S,G)$ PAN^[Perceptual Adversarial...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Inpainting/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20221014194734.png"
      },{
        "title": "Diffusion Model",
        "excerpt":"Diffusion Model Introduction 算法主要分为2个部分，第一步讲解关于扩散模型的数据来源和扩散的推导理论，第二部讲解关于反向递推的过程 其中，模型预测的为上一步的噪音值，而非真实值。 $\\alpha_t=1-\\beta_t, beta=0.00001 to 0.002, step =200$ $x_t=\\sqrt{\\alpha_t}x_{t-1}+\\sqrt{1-\\alpha_t}z_1$ $x_{t-1}=\\sqrt{\\alpha_{t-1}}x_{t-2}+\\sqrt{1-\\alpha_{t-1}}z_2$ $x_t=\\sqrt{\\alpha_t\\alpha_{t-1}}x_{t-2}+\\sqrt{1-\\alpha_t\\alpha_{t-1}}\\bar{z_2}$ $x_t=\\sqrt{\\bar{\\alpha_t}}x_0+\\sqrt{1-\\bar{\\alpha_t}}\\bar{z_t}$ Sample 采样过程即增加噪音的过程，噪音服从正太分布，每一步的权重根据步骤会进行变化，可以理解为，开始加的噪音小，后面加的噪音大。 每一步增加的噪音服从正态分布，因此可以根据给定$x_0$得知任意时刻的$x_t$。将每一步增加的噪音值作为GT，通过$x_t$预测$x_{t-1}$时所增加的噪音值 权重推导 Training 训练过程使用了UNet作为噪音的编解码模型对噪音进行预测 discriminator Reference Stable Diffusion: Theory and Applications - medium Diffusion - BiliBili 扩散模型 Diffusion Models - 原理篇 - 荏苒岁月的文章 - 知乎 有代码有图，有原理 diffusion model（二）—— DDIM（将diffusion model 提速50倍！） - 莫叶何竹的文章...","categories": ["AI"],
        "tags": [],
        "url": "/ai/Diffusion-Model/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230702193049.png"
      },{
        "title": "ControlNet",
        "excerpt":"ControlNet   Introduction      利用Stable Diffusion的Copy，对模型的控制模型进行额外的训练。同时对Stable Diffusion的模型进行冻结，转成对ControlNet进行训练   ControlNet的初始化使用Zero Convolution, 初始化为0的卷积核为1的卷积层。   对每次的输出运算同步到Stable Diffusion当中   实际网络连接    Reference      [ ]   Adding Conditional Control to Text-to-Image Diffusion Models - arxiv   ControlNet - BiliBili  ","categories": ["AI"],
        "tags": [],
        "url": "/ai/ControlNet/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230703021424.png"
      },{
        "title": "Self-Attention",
        "excerpt":"Self-Attention 以腰围和身高举例 腰围是K，身高是V，有对应关系。这时我希望用Q对合适的K进行查询，Q也是腰围，我希望得到合适的V，一般情况下我需要计算各个腰围K的权重并与V相乘，得到最终结果 若KQV矩阵是自身，则是自注意力机制。 Introduction Self Attention Cross Attention ViT（Vision Transformer）解析 Reference [注意力机制的本质 Self-Attention Transformer QKV矩阵 - BiliBili](https://www.bilibili.com/video/BV1dt4y1J7ov/?spm_id_from=333.337.search-card.all.click&amp;vd_source=fd373f40f4a1d2e059be533c5b77797f) Cross Attention _ Method Explanation _ Math Explained - BiliBili Attention机制详解（二）——Self-Attention与Transformer - 川陀学者的文章 - 知乎 从ReLU到GELU，一文概览神经网络的激活函数 - 机器之心的文章 - 知乎 Transformer中使用GELU ViT（Vision Transformer）解析 - 德怀特的文章 - 知乎 图片Transformer VAE、GAN 这种生成模型和 transformer 有什么区别？...","categories": ["AI"],
        "tags": [],
        "url": "/ai/Self-Attention/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230704222250.png"
      },{
        "title": "Palette: Image-to-Image Diffusion Models",
        "excerpt":"Introduction      第一篇基于Conditional Diffusion 的 Image to Image 任务   在训练Diffusion时，L1， L2的作用，以及self attention            L1 和 L2的结果质量相似，但L2有更好的多样性                 损失函数增加了额外的条件信息x       Reference                                      [注意力机制的本质           Self-Attention           Transformer           QKV矩阵 - BiliBili](https://www.bilibili.com/video/BV1dt4y1J7ov/?spm_id_from=333.337.search-card.all.click&amp;vd_source=fd373f40f4a1d2e059be533c5b77797f)                           Cross Attention _ Method Explanation _ Math Explained - BiliBili  ","categories": ["AI"],
        "tags": [],
        "url": "/ai/Image-to-Image/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230707020103.png"
      },{
        "title": "Lora",
        "excerpt":"Introduction   LORA: LOW-RANK ADAPTATION OF LARGE LANGUAGE MODELS         论文的基本假设，对于一个大模型，参数的秩通常是满的，但是对于一个特定领域的微调模型，存在一个更低维度的秩，使得模型可以适配于特定领域。因此，对于微调的模型，可以通过Lora的方式来训练   其基本公式$W=W_0+\\Delta W=W_0+BA$   其中$B\\in\\reals^{d\\times r},A\\in\\reals^{r\\times k}$   秩$r\\llless\\min(d, k)$   对于$h=W_0x+\\Delta Wx=W_0x+BAx$   只需要适当训练BA即可   其中A使用随机高斯初始化，B使用0初始化，因此，训练开始时$BA=0$   该算法可以应用到大部分矩阵，例如对于Transformer[QKVO]   Reference      LoRA论文回顾 - 我是阿豪啊的文章 - 知乎   论文阅读：LORA-大型语言模型的低秩适应 - 小虎AI珏爷的文章 - 知乎  ","categories": ["AI"],
        "tags": [],
        "url": "/ai/LORA/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230708022434.png"
      },{
        "title": "Dreambooth",
        "excerpt":"Introduction DreamBooth: Fine Tuning Text-to-Image Diffusion Models for Subject-Driven Generation It’s like a photo booth, but once the subject is captured, it can be synthesized wherever your dreams take you. 在微调层面，我们重新使用图片进行微调训练会导致几个问题 语言漂移【学了新的忘了旧的】 在大模型上微调之后，逐渐失去语言的句法和语义知识。即失去对一般知识的理解 过度拟合 如图所示，在输入狗的照片后，过拟合会导致狗的姿势一直趴在沙滩上，而非其他姿势 Dreambooth的优势 使用了一个新的罕见词来代表图片的含义，保证新加入的图片对应的词在模型中没有其他太多含义 区别于Textual inversion方法，Dreambooth使用罕见次，而textual inversion是新词。Dreambooth会对整个模型进行微调，而textual inversion只对embedding部分调整 Reference dreambooth github 【AI绘画】LoRA训练与正则化的真相：Dreambooth底层原理 - 秋葉aaaki的文章 - 知乎 stable...","categories": ["AI"],
        "tags": [],
        "url": "/ai/Dreambooth/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230708190125.png"
      },{
        "title": "DeepSDF",
        "excerpt":"Introduction DeepSDF: Learning Continuous Signed Distance Functions for Shape Representation 数据集 ShapeNet 代码 C++\\python 学习连续的有符号距离函数（Signed Distance Function，SDF） WIKI SDF 有符号距离场原理及实现 2D基本图形的Sign Distance Function (SDF)详解（上） SDF的零极线，差不多是为0的等势面 输入： 3D点云 + 噪声或缺失 用于训练SDF，并构建3D模型 模型通过输入的部分和嘈杂的3D数据点，使用神经网络进行训练，并生成一个能够表示形状表面的连续距离函数。这个距离函数可以通过计算一个点到形状边界的距离，并根据符号指示区域是形状内部还是外部。通过学习这样的连续距离函数，模型能够实现对形状的表示、重建、插值和完成任务。 DeepSDF通过神经网络将未知形状的表面表示为SDF的零级线，并可用于插值和完成部分和噪声3D数据。相比之前的方法，DeepSDF在学习的3D形状表示和完成任务上取得了最先进的性能。这项工作的关键创新之处在于引入了自动解码器（auto-decoder）的学习方案，将形状编码和网络参数联合进行优化，同时在数据准备、网络架构和实验设计等方面进行了深入的探索和分析。 The authors normalized each mesh to a unit sphere and sampled singed distance values for 500,000 spatial points....","categories": ["3d","AI"],
        "tags": [],
        "url": "/3d/ai/DeepSDF/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230819180636.png"
      },{
        "title": "MeshNet",
        "excerpt":"Introduction   DeepSDF: Learning Continuous Signed Distance Functions for Shape Representation   Over View      数据处理      面旋转卷积      面核卷积      mesh convolution         数据集            ModelNet40           代码            python           github   论文要点      将输入转化为空间描述符合结构描述符两种，最后通过mesh 卷积得到全局特征   结构描述符包含面核相关性、面旋转卷积            面核相关性由作者定义的函数进行计算       面旋转卷积由名片各点到面中心的向量进行计算           空间描述符主要使用mesh中每个平面的几个中心直接进行MLP处理 后续增加池化等，活动全局特征   论文不提供重建过程，更多用于分类   Reference      youtube MeshNet++   Github  ","categories": ["3d","AI"],
        "tags": [],
        "url": "/3d/ai/MeshNet/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230820161208.png"
      },{
        "title": "MeshNet Latent space",
        "excerpt":"Introduction DeepSDF: Learning Continuous Signed Distance Functions for Shape Representation text to 3d 3dfy text to 3d, image to 3d objects interiors: table lamps、sofa、table、ottoman、cutlery gaming：sword、shield、axes 提供API 面像对象：GTA 架构和技术方案(没有具体写参照的论文) DreamFusion - google 平均1.5小时 文本-&gt;2D图像-&gt;优化为Nerf Score Jacobian Chaining(目前几乎所有的零样本开放域文生 3D 工作所使用的算法) 问题：过于平滑、过饱和现象严重 stable-dreamfusion python + cuda A pytorch implementation of the text-to-3D model...","categories": ["3d","AI"],
        "tags": [],
        "url": "/3d/ai/Mesh-Latent-space/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230820221546.png"
      },{
        "title": "WGAN-GP",
        "excerpt":"WGAN-GP: Wasserstein GAN with Gradient Penalty      Paper   论文要点      Wasserstein GAN            WGAN在训练过程中可能遇到不稳定性和收敛困难的问题，而WGAN-GP通过引入梯度惩罚项来替代权重裁剪，能够有效提升GAN的稳定性和训练效果。       WGAN-GP中，通过对批次中真实样本和生成样本之间直线上的点进行采样，并对生成器的梯度进行惩罚来实现Lipschitz约束。这种方法能够在不进行任何超参数调整的情况下，稳定地训练各种GAN架构，包括具有101层ResNet的图像生成模型和连续生成器的语言模型。       在实验中，通过对CIFAR-10和LSUN卧室数据集进行训练和生成，展示了WGAN-GP相对于传统权重裁剪方法在训练速度和样本质量上的改进。论文还对200个随机架构进行了训练并对比其性能，结果显示WGAN-GP能够成功训练大多数架构。           需要理解KL散度，JS散度（KL的对称版）   GAN            D(Y, θ)：其中相对熵被用神经网络训练(希望尽可能大-网络可以区分)       G(X, θ)：希望两个分布尽可能相似(希望尽可能小)           CVAE-GAN: Fine-Grained Image Generation through Asymmetric Training   Reference      互怼的艺术：从零直达WGAN-GP                                                            [公众号：PaperWeekly 第41期               互怼的艺术：从零直达 WGAN-GP](https://mp.weixin.qq.com/s?__biz=MzIwMTc4ODE0Mw==&amp;mid=2247484880&amp;idx=1&amp;sn=4b2e976cc715c9fe2d022ff6923879a8&amp;chksm=96e9da50a19e5346307b54f5ce172e355ccaba890aa157ce50fda68eeaccba6ea05425f6ad76&amp;scene=21#wechat_redirect)                                               github                                           [变分自编码器VAE：原来是这么一回事           附开源代码 - PaperWeekly的文章 - 知乎](https://zhuanlan.zhihu.com/p/34998569)                          ","categories": ["AI"],
        "tags": [],
        "url": "/ai/WGAN-GP/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230820161208.png"
      },{
        "title": "VAE",
        "excerpt":"   AutoEncoder         VAE      训练结构      Reference      json007.gitbook.io            公式简洁，可能看不懂       含代码，模型结构清晰           从零推导：变分自编码器（VAE） - Alex的文章 - 知乎            含有公式推导，比较清晰，以及对ELBO(Evidence Lower Bound)的理解比较到位           机器学习方法—优雅的模型（一）：变分自编码器（VAE） - 苗思奇的文章 - 知乎            含有公式推导，写的相对全面           c-harlin.github.io 理解VAE            从直观感受上理解VAE，有图           VAE、GAN 这种生成模型和 transformer 有什么区别？ - 知乎用户的回答 - 知乎   概论生成网络(GAN/VAE/Flow/Diffusion) - ZhouBH的文章 - 知乎            四种生成模型           通俗形象地分析比较生成模型（GAN/VAE/Flow/Diffusion/AR） - 谭旭的文章 - 知乎   ","categories": ["AI"],
        "tags": [],
        "url": "/ai/VAE/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230911134758.png"
      },{
        "title": "视角选择",
        "excerpt":"Mesh Saliency      TOG-2005   主要思路            任一视角下mesh，或点的曲率和最大，即提供更多的信息                  A Benchmark for Best View Selection of 3D Objects            MM-2010              数据来自于人类经验       使用指标VSE，跟人的选择进行比较                         Heidrich. Viewpoint selection using viewpoint entropy.            视角选择，视角熵       使用face的投影在球面上占比作为概率                  A Survey of Viewpoint Selection Methods for Polygonal Models                       Reference      Mesh Saliency论文阅读 - CSDN  ","categories": ["AI"],
        "tags": [],
        "url": "/ai/Mesh-Saliency/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230911165620.png"
      },{
        "title": "Image Similarity",
        "excerpt":"Chamfer distance      棋盘距离      别称                                                            切比雪夫距离， $D_{chebyshev}(p,q):= \\max(               p_i-q_i               )$                                               $L_\\infin$度量                                                       $\\underset{k\\to\\infin}{\\lim}\\bigg(\\sum_{i=1}^n               p_i-q_i               ^k\\bigg)^{\\frac{1}{k}}$                                               棋盘距离为二维的切比雪夫距离           城市街区距离      别称            City Block distance       曼哈顿距离       L1距离       出租车距离(Taxicab Distance), RectilinearDistance(矩形式距离)，蛇形距离（SnakeDistance）              欧式距离   Reference      Chamfer distance   涨知识！​数据科学家绝对不能错过的3个距离 - 读芯术的文章 - 知乎   如何判断两条轨迹（或曲线）的相似度？ - Di Yao的回答 - 知乎            轨迹相似度           pdal.io - 有公式  ","categories": ["AI"],
        "tags": [],
        "url": "/ai/image-simlar-distance/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230914204243.png"
      },{
        "title": "A kind of mind for 3d manifold to 2d",
        "excerpt":"   问题，希望建立一种2d坐标对应3维流形坐标的方法      类似问题：            1维方程$R_1\\rightarrow R_1$, 可以使用参数方程进行0,1映射       点集，可以使用ICP进行匹配，但可能会造成过拟合           $R_2\\rightarrow R_3$   数据是空间点云   方案1，以点的路径和作为极坐标的距离，以投影方向作为极坐标的角度      投影方向可以使用PCA，即所有点距离初始点的方差最大的方向作为投影面法线   距离使用树的路径积分            如图所示，以A为原点，最近点为K，AK做垂直平分线(或面)，K侧的点不在作为A的子树，因为他们距离k的距离都小于A，可以通过二分查找进行优化       距离k最近的点为J，此时KJ的垂直平分线划分出的COQP点只属于K的子树，因为他们距离K的距离都小于J       此时，A到C的距离为，AK+KC       尽管AC距离更短，但由于KC短于AC，因此C更适合作为K的后继       当采样点足够多时，若ACK在同一平面，则AC约等于AK+CK，若ACK不在同一平面，则AK+CK更适合表示AC的距离           Reference      做图工具            https://www.geogebra.org/geometry           清华笔记：计算共形几何讲义 （16）拓扑球面的调和映照   B样条曲面和曲线  ","categories": ["AI"],
        "tags": [],
        "url": "/ai/A-kind-of-mind-for-3d-manifold-to-2d/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230914204243.png"
      },{
        "title": "Latent Partition Implicit with Surface Codes for 3D Representation",
        "excerpt":"Latent Partition Implicit with Surface Codes for 3D Representation             这篇论文的主要贡献在于提出了一种名为Latent Partition Implicit（LPI）的方法，用于表示三维形状。LPI是一种多层级表示方法，能够高效地捕捉形状中不同数量的部分。该方法使用表面编码来表示个别的部分，并通过在潜在空间中加权这些表面编码来重建表面，从而实现了高度准确的形状和部分建模。            LPI的一个优点在于其灵活性，可以整合额外的表面属性，比如测地距离或分割信息。作者展示了LPI可以从点云中学习，而不需要真实的有符号距离或点法线。            通过在广泛使用的基准数据集上进行详尽的评估，作者展示了他们的方法在形状表示方面胜过了现有最先进的方法。他们在L2 Chamfer距离、法线一致性和F-score等指标上取得了优越的结果。            作者还强调了LPI捕捉复杂结构的能力和重建部分的意义。他们提供了视觉对比来支持他们的观点，并展示了LPI可以准确地表示具有复杂几何结构的形状。            在消融实验中，作者分析了不同距离度量和表面编码对该方法收敛和性能的影响。他们发现使用距离度量来混合部分可以实现更快、更好的收敛。他们还展示了对于非刚性形状建模，使用内在距离与表面编码相结合可以获得最佳性能。      ","categories": ["AI","3d"],
        "tags": [],
        "url": "/ai/3d/LPI-Latent-Partition-Implicit-with-Surface-Codes-for-3D-Representation/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230918203343.png"
      },{
        "title": "SDF 相关论文",
        "excerpt":"Neural-Pull: Learning Signed Distance Functions from Point Clouds by Learning to Pull Space onto Surfaces Loss: 最近点距离 2023 CVPR - Diffusion-Based Signed Distance Fields for 3D Shape Generation 2022 CVPR - AutoSDF: Shape Priors for 3D Completion, Reconstruction, and Generation Signed Distance Field - 欧克欧克的文章 - 知乎 浅谈3D隐式表示（SDF，Occupancy field，NeRF）- CSDN...","categories": ["AI","3d"],
        "tags": [],
        "url": "/ai/3d/SDF%E7%9B%B8%E5%85%B3/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230918215628.png"
      },{
        "title": "卷积-棋盘效应",
        "excerpt":"Reference      deconv-checkerboard - 可交互   反卷积   A Comprehensive Introduction to DifferentTypes of Convolutions in Deep Learning  ","categories": ["AI","3d"],
        "tags": [],
        "url": "/ai/3d/checkerboard/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230921221558.png"
      },{
        "title": "参数化",
        "excerpt":"参数化 Parameterization 网格参数化原理 - 1： Metric Distortion - Allan的文章 - 知乎 比较经典 【相容性网络】Compatible mesh 两个mesh的一一对应关系 球面参数化 Spherical parameterization 球面参数化度量 体参数化 Volumetric parameterization 四面体 $\\sigma_1\\ge\\sigma_2\\ge\\sigma_3$ 几何映射 (Geometric Mapping) $R-&gt;R$ 函数对应 $R^2\\rightarrow R^2$ $M\\rightarrow R^2$ $M\\rightarrow S^2$ $M\\rightarrow M’$ $R^3\\rightarrow R^3$ 低维嵌入 高纬数据可能存在低维结构 【GAMES301-曲面参数化】 雅克比矩阵，用于衡量曲面扭曲情况 参数化方法 线性方法 Tutte 1963; Floater 1997 变形...","categories": ["AI","3d"],
        "tags": [],
        "url": "/ai/3d/%E5%8F%82%E6%95%B0%E5%8C%96/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/imgd04569fbaac510add8cd8a9b507021e.jpg"
      },{
        "title": "3d Mesh 生成",
        "excerpt":"3D Mesh 生成 NeuralNetworksSketchbook - github stable diffusion blender 格栅化反传 TEXTure: Text-Guided Texturing of 3D Shapes iteration[“keep”, “refine”, “generate”] 多较多球面参数化，获得高清纹理 Magic123 - One Image to High-Quality 3D Object Generation Using Both 2D and 3D Diffusion Priors 采用两阶段的3dmesh生成方法 第一阶段使用nerf生成粗糙的3d mesh表示 第二阶段用可微的神经网络对粗糙的3d mesh表示进行精细化 引入了2D和3D扩散先验的结合 论文中提到了姿势化，姿势化是指目标物体或人体在图像中的姿势和表情。在一个单一的未指定姿势的图像中，姿势化是指通过计算机视觉技术和深度学习模型，从图像中推断出物体或人体的三维姿势和形状 Wonder3D: Single Image to 3D using Cross-Domain...","categories": ["AI","3d"],
        "tags": [],
        "url": "/ai/3d/3d-Mesh-%E7%94%9F%E6%88%90/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230921221558.png"
      },{
        "title": "3d Mesh 深度相关",
        "excerpt":"3D Mesh 深度学习      Subdivision-Based Mesh Convolution Networks - TOG 2021                   通过细分网格，获得mesh网络的卷积关键面，将细分后的网格作为输入，进行卷积核池化运算，卷积运算即通过面榻缩的方式或者边榻缩的方式，将榻缩后的面作为卷积输出，同时，池化操作也很类似。       作者还给出了不同strip参数和不同kernel参数做卷积运算时与原2d conv的类比图              同时论文介绍了基于该思想的不同上采样方法           3D Mesh style transfer      Neural Style Transfer for 3D Meshes                   是一种基于mesh conv net的3d风格迁移方法       网络输入还是mesh的三角面片       网路架构类似2d图片风格迁移，可以参考2016年李飞飞的风格迁移论文              通过比较特征值之间的损失即可得到，同时，损失包含Content loss和style Loss, 在李飞飞2016的论文当中，同样存在两种loss          ","categories": ["AI","3d"],
        "tags": [],
        "url": "/ai/3d/3d-Mesh-%E6%B7%B1%E5%BA%A6%E7%9B%B8%E5%85%B3/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20231112150600.png"
      },{
        "title": "3d 生成 商业版本",
        "excerpt":"3D Mesh 生成 web pipeline price result labs.masterpiecex.com text-&gt;3d 3000c/36.99$/month, pic/50c g3d.ai waitlist     ponzu.gg TypeError: Failed to fetch     https://www.prometheanai.com/ Error     leonardo.ai depth-&gt;texture 6000t/month 48$/month   mirageml.com waitlist     pixela.ai stable diffusion     https://github.com/nv-tlabs/GET3D **     www.kaedim3d.com image-&gt;3d 60c/1000$/month   https://www.kinetix.tech animate...","categories": ["AI","3d"],
        "tags": [],
        "url": "/ai/3d/3d-%E7%94%9F%E6%88%90-%E5%95%86%E4%B8%9A%E7%89%88/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20231112150600.png"
      },{
        "title": "pytorch 扩展 安装",
        "excerpt":"涉及项目 Wonder3d pip install git+https://github.com/NVlabs/tiny-cuda-nn/#subdirectory=bindings/torch 问题：fatal error: filesystem: No such file or directory 解决方案，升级gcc到8.0以上 参考 Ubuntu问题——Ubuntu18.04 更新gcc和g++的版本号 - CSDN Failed to build tinycudann - git Install gcc-8 only on Ubuntu 18.04? - askubuntu 解决gcc-8和gcc7共存问题 安装高版本[&gt;10]的gcc需要ppa的镜像站, 无国内镜像站 apt install software-properties-common add-apt-repository ppa:ubuntu-toolchain-r/test apt update 安装gcc-8: apt install gcc-8 g++-8 安装gcc-7: apt...","categories": ["AI","3d"],
        "tags": [],
        "url": "/ai/3d/pytorch-%E6%89%A9%E5%B1%95-%E5%AE%89%E8%A3%85/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20231112150600.png"
      },{
        "title": "pytorch 扩展 安装",
        "excerpt":"涉及项目 Wonder3d pip install git+https://github.com/NVlabs/tiny-cuda-nn/#subdirectory=bindings/torch 问题：fatal error: filesystem: No such file or directory 解决方案，升级gcc到8.0以上 参考 Ubuntu问题——Ubuntu18.04 更新gcc和g++的版本号 - CSDN Failed to build tinycudann - git Install gcc-8 only on Ubuntu 18.04? - askubuntu 解决gcc-8和gcc7共存问题 安装高版本[&gt;10]的gcc需要ppa的镜像站, 无国内镜像站 apt install software-properties-common add-apt-repository ppa:ubuntu-toolchain-r/test apt update 安装gcc-8: apt install gcc-8 g++-8 安装gcc-7: apt...","categories": ["AI","3d"],
        "tags": [],
        "url": "/ai/3d/pytorch-%E6%89%A9%E5%B1%95-%E5%AE%89%E8%A3%85/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20231112150600.png"
      },{
        "title": "AnimeDiff",
        "excerpt":"   Deep Image Blend                   针对泊松融合的局限性，作者提出了Deep Image Blend                    泊松融合主要是参考融合边界处的像素信息，进行梯度最小的优化融合算法。                       本论文主要联合优化了3种不同的损失                    泊松融合损失、风格损失和内容损失           风格损失合内容损失主要引入VGG的风格化向量           通过迭代的方法保证了边界的过度                       论文还涉及了正则化损失，包括直方图损失和总变差损失，以提高图像的平滑度和稳定风格转换。          ","categories": ["AI","3d"],
        "tags": [],
        "url": "/ai/3d/AnimeDiff/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240209180729.png"
      },{
        "title": "AnimeDiff",
        "excerpt":"   AnimeDiff                          论文主要使用stablediffusion中增加animediff模块进行动画学习                    AnimeDiff包含3个模块                            domain adapter                                    用于减轻基准T2I与视频培训数据之间的视觉分布差异                   主要是由于不同视频之间的风格差异导致的                                               运动模块                                    用于学习动画的运动先验                                               MotionLoRA                                    通过针对上一帧的运动模块，进行运动的预测                   数据集主要是一些带有运动信息的视频                                                                                  ","categories": ["AI","3d"],
        "tags": [],
        "url": "/ai/3d/Deep-Image-Blend-copy/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240209184118.png"
      },{
        "title": "SparseCtrl: Adding Sparse Controls to Text-to-Video Diffusion Models",
        "excerpt":"   SparseCtrl                   论文主要验证了稀疏控制在text2video方面的作用       原本的条件控制主要在稠密的视频流生成中起作用，但通过稀疏信号的控制一样可以得到较好的结果                    该方法在预训练的T2V模型之上增加了一个附加的条件编码器           通过在帧间复制ControlNet编码器，并将条件图像添加到帧中，实现了条件信号在帧间的传播，以增强时间一致性           通过计算生成视频中的关键帧的深度图像与原始视频中提取的深度图像之间的mse进行评估视频的事件一致性           WebVid-10M数据集                           IpAdaptor                   IP-Adapter通过解耦的跨注意力策略，将图像特征嵌入到预训练的文本到图像扩散模型中实现图像提示能力       将图像特征嵌入到预训练的文本到图像扩散模型中。IP-Adapter由图像编码器和带有解耦跨注意力的调整模块组成       两个开源数据集（LAION-2B和COYO-700M）的大约1000万个文本-图像对       IP-Adapter由图像编码器和带有解耦跨注意力的调整模块组成。图像编码器使用预训练的CLIP图像编码器从图像提示中提取图像特征。解耦的跨注意力策略通过在原始UNet模型中添加新的跨注意力层来嵌入图像特征，从而实现更有效的图像提示适配器。       使用一个大规模的多模态数据集进行IP-Adapter的训练，其中包含来自不同数据集的文本-图像对。训练过程使用AdamW优化器进行，使用DeepSpeed ZeRO-2加速训练。进行了定量和定性的实验评估，比较IP-Adapter与其他适配器方法的性能和效果。           Text2Tex                   从多个视点逐步合成高分辨率的部分纹理。为了避免在视角变化过程中累积不一致和拉伸的伪影，作者将渲染的视图动态分割为生成掩模，表示每个可见像素的生成状态       为了控制扩散过程中的随机性，引入了一个缩放因子γ，通过控制扩散步骤的数量来开始去噪潜在编码       使用修复掩模指导采样过程       通过视角投射和插值，减少纹理的伪影和拉伸问题          ","categories": ["AI","3d"],
        "tags": [],
        "url": "/ai/3d/SparseCtrl/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240209185739.png"
      },{
        "title": "Sora: The paper you need to read",
        "excerpt":"Papers Dall-e 3 Improving Image Captioning with Better Use of Captions Improving Image Generation with Better Captions - dalle3 Dalle-3论文阅读 - nlpcver的文章 - 知乎 Vq-vae Neural Discrete Representation Learning DiT Scalable Diffusion Models with Transformers Generating Long Videos of Dynamic Scenes VideoGPT: Video Generation using VQ-VAE and Transformer Imagen Video:...","categories": ["AI","3d"],
        "tags": [],
        "url": "/ai/3d/Sora/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240209185739.png"
      },{
        "title": "OpenClip",
        "excerpt":"OpenClip, 对齐文本和图像的隐空间 OpenClip 对比学习 对比学习(Contrastive Learning)是一种自监督学习方法,旨在学习数据的通用表示,以便在下游任务中可以更好地利用这些表示。其核心思想是通过最大化相似样本对之间的相似度,同时最小化不相似样本对之间的相似度,来学习数据的特征表示。具体而言: 正样本对:对同一实例的两个随机增强版本(如图像的裁剪、翻转、颜色变化等)构成正样本对,模型需要学习将它们的特征表示拉近。 负样本对:将不同实例的特征表示作为负样本对,模型需要将它们的特征表示拉远。 对比损失:通过一个对比损失函数(如InfoNCE损失)来优化上述目标,使相似样本对的特征表示相近,不相似样本对的特征表示相异。 常见的对比损失函数 InfoNCE损失(Information Noise-Contrastive Estimation): InfoNCE损失源自NCE (Noise-Contrastive Estimation),是一种常用的对比损失函数。对于一个正样本对(i,j),InfoNCE损失定义为: $L_{i,j} = -\\log \\frac{\\exp(sim(z_i,z_j)/\\tau)}{\\sum_{k=1}^N \\exp(sim(z_i,z_k)/\\tau)}$ 其中,$z_i$和$z_j$是正样本对的特征表示,$z_k$是负样本的特征表示,$sim$是相似度度量(如点积),$\\tau$是温度超参数,N是负样本的数量。 Triplet损失(Triplet Loss): Triplet损失通过构建三元组(anchor, positive, negative)来优化样本间的相对距离。其目标是anchor与positive之间的距离小于anchor与negative之间的距离。数学表达为: $L = \\max(d(a,p) - d(a,n) + \\mathit{margin}, 0)$ 其中,$d$是距离度量(如欧氏距离),$\\mathit{margin}$是一个正的边界值。 NT-Xent损失(Normalized Temperature-scaled Cross Entropy Loss): NT-Xent损失是SimCLR中使用的损失函数,类似于InfoNCE损失,但进行了标准化和对称化处理。对于一对正样本(i,j),NT-Xent损失定义为: $l_{i,j} = -\\log \\frac{\\exp(sim(z_i,z_j)/\\tau)}{\\sum_{k=1}^{2N} \\mathbf{1}{[k \\neq i]} \\exp(sim(z_i,z_k)/\\tau)}$...","categories": ["AI","3d"],
        "tags": [],
        "url": "/ai/3d/OpenClip/",
        "teaser": "https://raw.githubusercontent.com/mlfoundations/open_clip/main/docs/CLIP.png"
      },{
        "title": "VQ-VAE",
        "excerpt":"VQ-VAE Model Stage-1 (latent space learning) Latent Space Stage-2 (prior learning) VQ-VAE VQ-VAE Discrete (after quantization) Autoregressive PixelCNN VQGAN VQGAN (VQ-VAE + GAN + Perceptual Loss) Discrete (after quantization) Autoregressive GPT-2 (Transformer) VQ-Diffusion VQ-VAE Discrete (after quantization) Discrete Diffusion Latent Diffusion (VQ-reg) VAE or VQGAN Continuous (before quantization) Continuous Diffusion...","categories": ["AI","3d"],
        "tags": [],
        "url": "/ai/3d/VQ-VAE/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240326221537.png"
      },{
        "title": "Dalle3",
        "excerpt":"Dalle3 Improving Image Generation with Better Captions - dalle3 关于生成模型 基础模型:先在图文对数据集上预训练了一个类似于语言模型的图像描述生成器。输入为图像的CLIP编码和已生成的字符,输出为下一个字符的概率分布。这样模型就学会了根据图像内容生成与之匹配的描述文本。 短句微调:在此基础上,作者又准备了一个小规模的数据集,其中的描述只关注图像的主要内容。用这个数据集微调上一步的模型,使其倾向于生成简洁的描述文本。这一步得到的模型被称为”short synthetic captions”。 长句微调:类似地,作者再准备一个小规模的长描述数据集,其中的描述不仅涉及图像主体,还包含了背景、数量、颜色等丰富的细节。再次用这个数据集微调,得到的模型称为”descriptive synthetic captions”,可以生成详尽的描述。 关于提高文本到图像生成系统能力 现有的文本到图像模型在跟随详细的图像描述指令方面存在困难,经常会忽略或混淆文字中的含义。作者认为这个问题源自训练数据中的图像描述文本质量较差,存在噪声和不准确性。 为了解决这个问题,作者训练了一个定制的图像描述生成模型,用它重新为训练图像生成了更详细、准确的人工描述文本。然后用这些高质量的合成描述来训练文本到图像模型。 实验结果表明,用合成的描述训练可以显著提高模型对输入文本的理解和表达能力。基于这个发现,作者构建了一个新的系统DALL-E 3。 在对DALL-E 3进行评估时,考察了它在理解指令、生成连贯图像、图像美感等方面的表现,结果优于目前的一些竞争模型。作者还公开了评估所用的样本和代码,以推动后续研究进一步优化文本到图像模型的这些重要能力。 论文还讨论了当前方法的局限性,例如DALL-E 3在空间感知、生成文本、理解特定概念等方面仍有不足,未来可通过改进图像描述生成器等方式来提升。同时还分析了系统可能带来的风险,并在附录中详细阐述了安全性和偏差的缓解措施。 使用的文本编辑器 T5 (Text-to-Text Transfer Transformer) 即过度拟合数据集中的分布规律。 Likelihood models like our text-to-image diffusion models have a notorious tendency to overfit to distributional regularities in the...","categories": ["AI","3d"],
        "tags": [],
        "url": "/ai/3d/Dalle3/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240329142726.png"
      },{
        "title": "Dalle3",
        "excerpt":"   Dit   ","categories": ["AI","3d"],
        "tags": [],
        "url": "/ai/3d/Dit/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240329150229.png"
      },{
        "title": "A Dataset and Explorer for 3D Signed Distance Functions",
        "excerpt":"   A Dataset and Explorer for 3D Signed Distance Functions      主要贡献            一个python和c++结合的shader渲染器，包含glsl       讨论了sdf的好处                    其中讨论了Eikonal equation和Lipschitz constant           讨论了一些sdf的CSG操作           讨论了一下sdf在ray-matching上的好处                       主要整理了一下几个基于sdf的数据集          ","categories": ["AI","3d"],
        "tags": [],
        "url": "/ai/3d/SDF-McGuire/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240409201627.png"
      },{
        "title": "Unsigned Orthogonal Distance Fields: An Accurate Neural Implicit Representation for Diverse 3D Shapes",
        "excerpt":"Unsigned Orthogonal Distance Fields: An Accurate Neural Implicit Representation for Diverse 3D Shapes 主要贡献 UODFs定义为沿三个正交方向(左右、前后、上下)的无符号距离场。每个空间点的UODFs值表示该点沿三个正交方向到形状表面的最短距离。 UODFs有三个主要特点: 由三个正交方向的无符号距离场组成 每个点的UODFs在每个正交方向上的一维导数绝对值等于1 相邻射线之间的UODFs值可能不连续 使用三个MLP神经网络分别拟合三个正交方向的UODFs。对每个射线等间隔采样点,每个采样点可直接估计其最近的表面点。 提出了一种从多个采样点估计表面点的方法,可以消除插值误差,只受神经网络拟合误差影响。最后融合三个方向估计的表面点得到最终结果。 在各种3D模型(封闭、开放、多层、组装等)上进行实验,UODFs的重建精度显著优于SDF、UDF等其他隐式表示方法,尤其是开放曲面和小尺寸点云重建。 NC-SDF: Enhancing Indoor Scene Reconstruction Using Neural SDFs with View-Dependent Normal Compensation 提出了一种视角相关的法向补偿模型(view-dependent normal compensation model),用于解决单目几何先验在多视角下的不一致性问题。通过将法向先验中视角相关的偏差显式建模到场景的隐式表示中,并自适应地学习和校正这些偏差,可以有效缓解不一致监督带来的负面影响,提高重建的全局一致性和局部细节。 解决单目几何先验(尤其是法向先验)在多视角下不一致的问题 在之前的方法中,研究者通常直接将预测的单目法向图作为监督信号,引导隐式场景表示的优化。然而,由于预测网络是在单视角下进行估计的,所以预测的法向图往往与场景的真实法向不完全一致,并且这种偏差具有视角相关性。当多个视角的法向预测结果存在不一致时,会给隐式表示的优化带来困难,导致重建质量下降。 为了解决这个问题,论文提出将每个视角的法向偏差也建模到场景的隐式表示中。具体来说,他们设计了一个法向补偿模型,以视角方向为输入,预测对应视角下的法向补偿旋转角度。通过将这个旋转作用在隐式表示的法向上,就得到了经过补偿的法向。优化时,渲染得到的补偿后法向图与单目法向预测结果对齐,而不是直接用隐式表示的法向。 在训练过程中,法向补偿模型与颜色模型和几何模型一起联合优化。这种方式可以自适应地学习和校正不同视角下的法向偏差,使隐式表示更加鲁棒,从而提高重建质量。可视化结果表明,通过法向补偿,最终渲染得到的法向图与颜色图在不同视角下都更加一致,证明该模型能有效建模视角相关的法向偏差。 设计了一种信息量丰富的像素采样策略,通过优先采样信息量高的像素,使模型更加关注复杂的几何细节。 提出了一种基于特征融合的混合几何建模方法,利用MLP的感应平滑性来确保平滑表面,同时利用体素网格提供的高频编码来捕捉精细几何。 ClusteringSDF: Self-Organized Neural Implicit Surfaces for...","categories": ["AI","3d"],
        "tags": [],
        "url": "/ai/3d/Unsigned-Orthogonal-Distance-Fields-UODF/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240512235923.png"
      },{
        "title": "AnySyn3D Paper sets",
        "excerpt":"CLAY: A Controllable Large-scale Generative Model for Creating High-quality 3D Assets 主要贡献 CLAY的核心是一个在大规模3D数据上预训练的1.5亿参数的生成模型。该模型使用多分辨率VAE对几何形状进行编码,并用一个极简的latent diffusion transformer进行几何生成。 将多分辨率VAE和极简的latent diffusion transformer结合,并在1.5亿参数量级上实现了模型的高效训练 为了训练该大规模模型,作者提出了一个数据标准化流程,包括重新网格化来统一不同来源的3D数据格式,以及利用GPT-4V对数据自动标注。 统一重新网格化和利用GPT-4V进行自动语义标注 在几何生成的基础上,CLAY还可以合成PBR材质贴图,实现逼真的渲染效果。作者训练了一个多视角材质扩散模型来高效地生成高分辨率的漫反射、粗糙度等贴图。 CLAY支持低秩适应(LoRA)微调以及多种条件生成,可以根据草图、体素、包围盒、点云等多种输入控制生成。 SketchDream: Sketch-based Text-to-3D Generation and Editing 同时使用单视角手绘草图和文本提示作为输入,生成高质量3D模型的端到端系统。生成的结果既能忠实于输入的草图,也能满足文本的描述。 利用深度引导的扭曲策略来建立视角间的空间对应关系,并使用3D注意力模块来确保不同视角下生成图像的3D一致性 粗到精的两阶段编辑框架 支持对重建或生成的NeRF进行局部细节编辑 并采用3D注意力控制模块确保3D一致性 对于新视角图像,最近视角的输入是通过深度扭曲得到的草图,其他视角的输入是空白图像。为了确保不同视角下生成图像的3D一致性,该模块采用了MVDream中的3D注意力机制 Direct3D: Scalable Image-to-3D Generation via 3D Latent Diffusion Transformer 提出了D3D-VAE模型,可以将高分辨率的点云编码到一个紧致的3D latent空间中。不同于以往方法使用渲染图像作为监督信号,D3D-VAE直接对解码后的几何形状进行监督,采用了半连续的表面采样策略,更好地保留了3D形状的细节 在D3D-VAE中,编码器将点云压缩到三平面latent空间,解码器再将低分辨率的latent表示上采样到高分辨率的三平面特征图,最后通过可学习的MLP将三个特征图映射为occupancy场,以重建3D形状。 提出了D3D-DiT扩散模型,可以根据输入的参考图像在3D latent空间中生成与之一致的3D模型。D3D-DiT专门设计了像素级和语义级两个层面的图像对齐模块,使生成的3D模型能在局部细节和整体语义上与输入图像保持一致。 采用了显式的triplane latent表示,比隐式编码更利于3D信息的保留;提出的像素级和语义级图像条件对齐模块有助于提升3D生成的细节和一致性。...","categories": ["AI","3d"],
        "tags": [],
        "url": "/ai/3d/AnySyn3D-Paper-sets/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240701120650.png"
      },{
        "title": "Nerf and 3DGS",
        "excerpt":"Trans-LoRA: towards data-free Transferable Parameter Efficient Finetuning The main contributions of this method are: It use a Discriminator module to fit the distribution of task data to reduce data transfer. This training process of lora for new base model is simplified. Problems This method mainly focus on the transfer between...","categories": ["AI","3d"],
        "tags": [],
        "url": "/ai/3d/nerf-and-3dgs/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240701120650.png"
      },{
        "title": "FruitNerf",
        "excerpt":"FruitNeRF: A Unified Neural Radiance Field based Fruit Counting Framework The main idea of this paper is to use segmentation result from SAM or GroundingDINO to generate another neural radiance field to point out the fruit in 3d space. Then use the high light point to count fruit with point...","categories": ["AI","3d"],
        "tags": [],
        "url": "/ai/3d/fruit-nerf/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240701120650.png"
      }]

# TheSameWorld
a simple game with angular

## 来源
想法来自移动端游戏“同一个世界”。

## 游戏
### 关卡设置

### 规则
每个关卡有黑白两色的圆点和两个具有特殊标志的起点，从起点出发划过圆点，划过的会变成和其本身相反的颜色，两个起点，一共两次，最后如果所有的圆点都变成相同的颜色，则过关。

## 实现思路
### 事件
- 手机端是采用手指滑动的方式，现在放在PC端，采用鼠标点击的方式。
- 从起点单击开始，单击过的圆点之间形成连线，双击结束，点击过的圆点颜色反转

### 变量
- 圆点的黑白：二维数组存储生成（可以用0、1来表示黑白）
- 起点：通过数组索引获得

### 数据绑定
- angular进行数据绑定（黑白状态，样式绑定），用户操作后改变model，改变相应反映到视图

### 状态维护
游戏要维护的所有状态包含：
- 二维数组`circlesArr`（控制黑白颜色变换）
- 起点坐标`origins`（控制起点标志的显示与隐藏）
- 和连线有关的一维数组`clickArr`（存储形成线的点，控制连线的显示与隐藏）
- 成功失败等提示信息的状态

### 关卡切换
- 将关卡和关卡信息（存储点的二维数组，对应的起点）进行关联，对象数组存储
- 每当判断成功过关后，改变二维数组的值

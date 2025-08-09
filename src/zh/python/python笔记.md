---
icon: pen-to-square
date: 2025-08-04
category:
  - Python
tag:
  - python
  - 学习
---


# pyton学习笔记

## 1.1运算

### 1.1.1算术运算

- 加法：+
- 减法：-
- 乘法：*
- 除法：/
- 取余：%
- 幂运算：**
- 整除：//

### 1.1.2比较运算

- 等于：==
- 不等于：!=
- 大于：>
- 小于：<
- 大于等于：>=
- 小于等于：<=

### 1.1.3赋值运算

- 赋值：=
- 加法赋值：+=

## 1.2变量

### 1.2.1变量的类型和定义

- 整数：int
- 浮点数：float
- 字符串：str
- 布尔值：bool
- 空值：None
- 同时定义多个变量：a,b,c = 1,2,3

### 1.2.2变量的命名规则

- 变量名由字母、数字和下划线组成，不能以数字开头
- 变量名不能是Python的关键字
- 变量名要见名知意

## 1.3数据类型转换

+ int()  float()  str()
+ eval()执行str所代表的语句,十分强大不够安全
  ```python
  a=eval('10+10') # 20
  ls=eval('[1,2,3]') # 创建了一个列表
  obj=eval('Apple()') # 实例化了一个对象
  ```
+ list()将可迭代对象转化为list
  ```python
  # str->list
  print(list('abc'))
  # turple->list
  print(list((1,3,5)))
  # dict->list
  print(list({1:'a',2:'b'}))
  # set->list
  print(list({'a','b','c','b'}))
  ```

## 1.4语句

### 条件语句

- if语句
- if-else语句
- if-elif-else语句

  ```python
  #对于条件，python可以理解一些复杂的式子 x<y<z  x<y>z
  if 条件:
      代码块
  elif 条件:
      代码块
  else:
      代码块
  ```

### 循环语句

- for循环
  ```python
  example_list=[1,2,3,4,5]
  for i in example_list:
      print(i)
  for i in range(5):#range(5)表示从0到4,左闭右开
      print(i)
  for i in range(1,6):#range(1,6)表示从1到5
      print(i)
  for i in range(1,6,2):#range(1,6,2)表示从1到5，步长为2
      print(i)
  ```
- while循环
  ```python
  while 条件:
      代码块
  ```
- break语句
- continue语句

## 1.5函数

### 函数的定义

```python
def 函数名(函数参数)
    代码块
    return 返回值
```

+ 嵌套定义

### 函数的参数

- 默认参数
- 全局和局部
- global关键字
- 未知参数必须放在默认参数前面
- 可变参数def func(a,b,*args)
- 关键字参数 def funcd(**kwargs)
  ```python
    def login(name,password,**other):
        print("name:",name)
        print("password",password)
        for key,vaule in other.items():
            print(key,":",other[key])
    login("zhangsan","123456a",sex='男',兴趣=['唱','跳','rap','打篮球'])
  ```

### 函数的返回值

- return语句
- 函数的返回值可以是任意类型
- 函数需要返回多个值时候，使用元组返回

### 匿名函数

+ func= lambda 参数:返回的表达式

### 内置函数

+ 查看所有的内置函数
  import builtins
  print(dir(builtins))
+ 常用sum(),ans(),max(),min()
  ```python
  li=[1,3,0,11,-120]
  print(max(li,key=abs)) 
  # -120
  ```
+ zip将可迭代对象作为参数，将每个元素打包成一个元组

```python
   for i in zip([1,2,3],{'a','b','c','d'}):
       print(i)
   # 转换为list打印
   print(list(zip([1,2,3],{'a','b','c','d'})))
```

+ map映射
  ```python
    func=lambda x:x*2
    str='abc'
    print(list(map(func,str)))
    # ['aa','bb','cc']
  ```
+ reduce():先把对象中的里两个元素取出来计算一个值保存着，接着与第三个元素计算
  ```python
    from functools import reduce
    l3=[1,3,5,7]
    print(reduce(add,l3))
    # 补充：filter
    print(list(filter(lambda a:a>3,l3)))
  ```
+ 拆包（解构）
  ```python
    tua=(1,2,3,'a')
    li=[1,5,1,'a']
    a,b,c,d=tua
    print(a,b,c,d)
    a,b,c,d=li
    print(a,b,c,d)
    a,*b=tua
    print(a,b,type(b))
    def func(a,b,*args):
        print(a,b)
        print(args,type(args))
    func(*tua)
  ```
+ type()不会认为子类是一种父类类型。isinstance()会认为子类是一种父类类型。

## 1.6 元组,列表,字典，集合

### 集合

+ 定义空集合 s1=()
+ 集合不能修改只能增删，自动去重（唯一性）
+ 集合的常见操作
  ```python
    s1={1,2,3,4,6} 
    print(s1)# 有序的
    s2={'a','b','c','d','e'}
    print(s2)# 无序的
    s1.add((5,6)) # 添加的是一个整体
    s1.update([5,9,10,6])
    # 1，2，3，4，5，3，6，10，(5，6)

    s1.remove(5) # 没有会报错
    s1.pop()
    s1.discard((5,6)) # 没有不会报错

    a={1,2,3,4}
    b={4,5,1,3}
    print(a & b) # 交集
    print(a | b) # 并集
    print(a - b) # 差集
  ```

### 元组，列表

+ 元组：不可变序列
+ 列表：可变序列
+ 元组使用小括号()，列表使用方括号[]

```python
tuple1 = (1, 2, 3)
tuple2= 1,2,3,4
list1 = [1, 2, 3]
tuple1[0] = 4  # 报错，元组不可变
list1[0] = 4  # 正常，列表可变
```
- append()方法
- insert()方法
- remove()方法
- 列表推导式
```python
  list2 = [x * 2 for x in range(5)]  # 生成一个包含0到8的偶数的列表
```

### 字典

```python
dict={'name':'zjy','age':18}
dict['grade']=150 # 增
del dict['grade'] # 删
mymap['name']='Mike' # 改
'name' in mymap # 查
for name,phone in phones.items(): # keys()  values()
    print(f'名字：{name},电话：{phone}')
```

## 1.7深浅拷贝
### 1.赋值（完全共享资源）


### 2.深浅拷贝
会创建一个新对象，拷贝第一层数据，嵌套层会指向原来的内存地址
+ 优点：时间短，速度快,空间小
+ 深拷贝
```python
import copy # 导入模块

l1=[1,2,3,[4,5,6]]
l2=l1.copy()
l3=copy.deepcopy(l1)

l1.append(5)
l1[3].append(10)
print("l1:",l1)
print("l2:",l2)
print("l3:",l3)

# 查看内存地址
print("l1的内存地址:",id(l1[3]))
print("l2的内存地址:",id(l2[3]))
print("l2的内存地址:",id(l3[3]))
```
### 3.可变对象：list dict set
+ 含义：改变值但是地址不会发生改变
+ 不可变类型:数值，str,turple.若修改值会分配新的空间
+ 深浅拷贝只针对于可变对象


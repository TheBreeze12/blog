---
icon: pen-to-square
date: 2025-08-12
category:
  - Python
tag:
  - 爬虫
  - 学习
---

# 爬虫基础

## 一、爬虫网络基础知识

### 1.网络请求
+ url:统一资源定位符
+ 请求：
   1. 请求地址 -- request url
   2. 请求方法 -- request methods
   3. 请求标头 --request header
   4. 请求体 --request body
+ 爬虫分类：通用/聚焦  功能/增量
+ 爬虫的基本过程 url->发送请求->解析响应->保存数据
+ robots协议(可以不遵守)

### 2.网络通信的步骤：
+ 电脑向DNS服务器发送url  -- www.baidu.com
+ DNS服务器：ip地址标注服务器 返回IP地址给浏览器
+ 浏览器拿到IP地址其访问服务器，返回响应
+ 服务器返回的数据有：html,css,js,jpg...

### 3.http/https协议
+ http协议：规定了服务器和客户端互相通信的规则
+ http协议：超文本传输协议，默认端口是80
+ 超文本不仅仅局限限与文本，还包括图片等
+ 传输协议：使用公用的约定的固定格式来传递转换为字符串的超文本内容
+ https:http+ssl ssl(安全套接字层)，默认端口：443 更安全性能更低
+ ssl:对传输的内容进行加密
+ http请求响应的步骤:连接服务器->发送请求->获得相应->释放tcp连接->解析内容

### 4.请求头：
+ 请求url
+ 请求方式：get/post/put/delete
+ cookie:保持登录
+ User-Agent:模拟1111正常用户
+ referer:当前这一次请求是哪个请求过来的
+ 请求数据

## 二、requests库的使用
### 1.requests库
```python
import requests
```
### 2.基本过程
```python
# 1.url
url='https://www.baidu.com/'
# 2.请求
response=requests.get(url)
# 3.响应
# print(response.text) # 会有乱码
# 设置属性
response.encoding='utf-8'
print(response.text) 
print(response.content.decode())
# 4.保存文件
with open('baidu.html','w',encoding='utf-8') as f :
    f.write(response.content.decode())
```   

### 3.使用库来保存图片
```python
# 1.url
url='https://ww1.sinaimg.cn/mw690/006faMndly1hs3ye2mi4kj30u01t37r4.jpg'
# 2.请求
re=requests.get(url)
# print(re.content)
# 3.保存
with open('1.jpg','wb') as ft:
    ft.write(re.content)
```
### 4.其他属性
```python
print("url:"+re.url)
print("请求标头："+str(re.request.headers))
print("响应标头："+str(re.headers))
print("Cookies:"+str(re.cookies))
```
### 5.用户代理
+ User-Agent字段必不了少
  ```python
    url='https://www.baidu.com/'
    # 构建请求头
    headers={
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0'
    }
    res=requests.get(url,headers=headers)
    # print(res.content.decode())
    print(res.request.headers)

    with open('baidu2.html','w',encoding='utf-8') as f:
        f.write(res.content.decode())
    ```
+ user-agent池
    ```python 
    UAlist=[
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1 Edg/138.0.0.0',
        'Mozilla/5.0 (Linux; Android 11.0; Surface Duo) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Mobile Safari/537.36 Edg/138.0.0.0'
    ]
    print(random.choice(UAlist))
    ```
    ```python
    from fake_useragent import UserAgent
    print(UserAgent().random)
    ```


### 6.带参数的请求
'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=%E5%AD%A6%E6%A0%A1&fenlei=256&rsv_pq=0xfda11edc01a88c36&rsv_t=05d4d6371RKj%2FBW1QvV1Uimqc553xjfn%2BD4gP7chpXExKM%2FGst%2Fv4T5tJaQ&rqlang=en&rsv_dl=tb&rsv_enter=1&rsv_sug3=8&rsv_sug1=8&rsv_sug7=101&sug=%25E5%25AD%25A6%25E6%25A0%25A1%25E8%258B%25B1%25E8%25AF%25AD&rsv_n=1&rsv_sug2=0&rsv_btype=i&prefixsug=%25E5%25AD%25A6%25E6%25A0%25A1&rsp=6&inputT=6665&rsv_sug4=7258'

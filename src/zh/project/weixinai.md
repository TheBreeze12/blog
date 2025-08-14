---
icon: pen-to-square
date: 2025-08-12
category:
  - 项目
tag:
  - AI
  - python
---

# 微信AI自动回复系统

这是一个基于AI大模型的微信自动回复机器人，可以智能回复微信消息。

## 项目地址

https://github.com/TheBreeze12/WeChatAIRobot/

## 🚀 功能特性

- ✨ 集成deepseek大模型，回答质量高
- 💰 成本低廉，比GPT-4便宜50倍
- 🔧 配置简单，易于使用
- 🛡️ 支持错误处理和重试机制
- 📝 支持调试模式，方便问题排查

## 📋 使用前准备

### 1. 获取AI大模型API密钥

1. 访问相关大模型网站
2. 注册并登录账号
3. 创建应用并获取API Key
4. 创建模型endpoint并获取endpoint ID

### 2. 安装依赖

```bash
pip install requests wxauto
```

## ⚙️ 配置说明

在 `config.py` 文件中修改以下配置：

```python
AI_CONFIG = {
    "api_key": "你的API密钥",         
    "endpoint_id": "ep-xxxxxxxxx",  
    # 其他配置保持默认即可
}

WECHAT_CONFIG = {
    "listen_contacts": ["朋友昵称"],  # 要监听的联系人昵称
    "reply_prefix": "AI回答：",      # 回复消息前缀
}
```

## 🏃‍♂️ 运行步骤

1. **配置API密钥**：修改 `config.py` 中的API配置
2. **设置监听联系人**：在 `config.py` 中添加要监听的微信联系人昵称
3. **启动程序**：运行 `python main.py`
4. **开始使用**：向监听的联系人发送消息，机器人会自动回复

```bash
python main.py
```

## 📁 文件说明

- `main.py` - 主程序入口
- `ai.py` - AI大模型设置和回复逻辑
- `listen.py` - 微信消息监听和AI大模型API调用逻辑
- `config.py` - 配置文件，包含API密钥等设置
- `README.md` - 使用说明文档

## 🔧 高级配置

### 调整AI回答参数

在 `config.py` 中可以调整以下参数：

```python
AI_CONFIG = {
    "temperature": 0.7,    # 控制回答创造性 (0-1)
    "max_tokens": 500,     # 最大回答长度
}
```

### 调试模式

开启调试模式可以查看详细的运行日志：

```python
GENERAL_CONFIG = {
    "debug_mode": True,  # 开启调试模式
}
```

## ⚠️ 注意事项

1. **API密钥安全**：请妥善保管你的API密钥，不要分享给他人
2. **费用控制**：大模型API按使用量计费，请注意控制使用成本
3. **微信限制**：请遵守微信使用规范，避免频繁发送消息
4. **联系人昵称**：确保配置的联系人昵称与微信中显示的完全一致

## 🐛 常见问题

### Q: API调用失败？
A: 检查以下几点：
- API密钥是否正确
- endpoint ID是否正确
- 网络连接是否正常
- 是否有足够的API调用额度

### Q: 监听不到消息？
A: 确认以下设置：
- 联系人昵称是否正确
- 微信是否正常登录
- wxauto库是否正常工作

### Q: 回复内容不理想？
A: 可以调整以下参数：
- 调整 `temperature` 参数控制创造性
- 修改 `max_tokens` 控制回答长度
- 优化系统提示词

## 📈 更新日志

- v1.0.0: 初始版本，支持大模型API集成
- 支持配置文件管理
- 添加错误处理和调试模式

## 🤝 贡献

欢迎提交Issues和Pull Requests来改进这个项目！

## 📄 许可证

本项目采用MIT许可证开源。
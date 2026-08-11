# OrderAI Sample Call 音频功能实施手册

> **项目**：OrderAI - AI 电话点餐 SaaS 平台
> **仓库**：https://github.com/xiaoenbi1987/OrderAI
> **本地路径**：`D:\cursor\OrderAI`
> **文档用途**：把网站首页 Hero 区右侧电话卡片上的"Play sample call"按钮变成一个能真正播放 AI 电话录音的功能
> **预计总耗时**：约 4 小时（分 2 天完成）

---

## 📑 目录

1. [项目背景与决策依据](#1-项目背景与决策依据)
2. [5 阶段完整路线图](#2-5-阶段完整路线图)
3. [阶段 1：剧本设计](#3-阶段-1剧本设计)
4. [阶段 2：录音操作](#4-阶段-2录音操作)
5. [阶段 3：音频后期处理](#5-阶段-3音频后期处理)
6. [阶段 4：上传到项目](#6-阶段-4上传到项目)
7. [阶段 5：网页集成播放器](#7-阶段-5网页集成播放器)
8. [测试验证清单](#8-测试验证清单)
9. [未来升级路径](#9-未来升级路径)
10. [常用工具速查表](#10-常用工具速查表)
11. [快速索引：所有 Claude Code 提示词](#11-快速索引所有-claude-code-提示词)

---

## 1. 项目背景与决策依据

### 目标
在网站首页 Hero 区右侧的电话样式卡片上，让"Play sample call"按钮真的能播放一段 AI 接餐厅电话的录音演示。

### 3 条实施路径对比

| 路径 | 说明 | 成本 | 时间 | 真实度 | 复杂度 |
|------|------|------|------|--------|--------|
| 路 1 | 预录音频（自己录 + AI TTS） | $0-5 | 1-2 小时 | 中 | 🟢 简单 |
| **路 2** ⭐ | **用自己的 Demo APP 打真电话录音** | **几美分** | **30-60 分钟** | **高** | **🟢 简单** |
| 路 3 | 网页实时调用 AI（WebRTC） | 每次几美分 | 2-3 周 | 最高 | 🔴 复杂 |

### 最终决策：路 2 ⭐

**理由**：
- 用户已有可拨打真电话的 Demo APP（Twilio 已配置）
- 用户已有的资产是"能开的车"，不需要"再造一辆虚拟车"
- Vapi、Retell、Bland AI 等行业头部公司的 sample call 也都是预录音频
- MVP 阶段"看起来专业"比"技术复杂"更重要

### MVP 范围决策

- **只做 1 个场景**：餐厅点餐（不是 4 个场景切换）
- **只做 1 种语言**：英文（4 种语言的 sample call 是未来阶段）
- **只做简单播放/暂停**：不做进度条、音量控制、下载等花活

---

## 2. 5 阶段完整路线图

```
✅ 阶段 1: 剧本设计       (30 分钟)  剧本已提供,可直接用
▶️ 阶段 2: 录音           (30 分钟)  华为手机通话录音
▶️ 阶段 3: 音频后期处理    (30 分钟)  Adobe Podcast + Audacity
▶️ 阶段 4: 上传到项目      (15 分钟)  拖文件或用 Claude Code
▶️ 阶段 5: 集成播放器      (60 分钟)  Claude Code 实施 + 测试
──────────────────────────────────────
总计: 约 4 小时(分散在 1-2 天完成)
```

### 建议时间安排

**第 1 天下午**：完成阶段 1、2、3（录音 + 后期）
**第 2 天早上**：完成阶段 4、5（集成 + 测试）
**第 2 天中午**：git commit + push，功能上线

---

## 3. 阶段 1：剧本设计

### 剧本设计原则

- ⏱️ **总时长 45-60 秒**（超过 1 分钟用户完成率暴跌 70%）
- 🎯 **每句话都是一个卖点**（不是随便对话）
- 💬 **加入自然口语词**（Um、Yeah 等，让对话听起来是真人）

### 一个专业 Sample Call 的结构

```
[00:00] 电话响铃 1-2 声       ← 真实感
[00:03] AI 接听 + 问候        ← 展示"专业接待"
[00:10] 顾客提问              ← 展示"能听懂自然语言"
[00:15] AI 回答 + 主动引导     ← 展示"业务熟练"
[00:25] 顾客下单/预约         ← 展示"实际业务场景"
[00:35] AI 确认订单           ← 展示"准确性"
[00:45] AI 结束通话           ← 展示"专业收尾"
```

### 完整剧本：餐厅点餐场景（可直接用）

```
[铃声 1-2 声]

🤖 AI:
"Thanks for calling Golden Wok. This is your AI assistant.
How can I help you tonight?"

👤 顾客:
"Hi, I'd like to place an order for pickup."

🤖 AI:
"Absolutely. What can I get started for you?"

👤 顾客:
"Um, one General Tso's chicken, and... do you have brown rice?"

🤖 AI:
"Yes, we do. Brown rice is a dollar extra. Would you like
to substitute it for your General Tso's?"

👤 顾客:
"Yeah, let's do that. And can I add spring rolls?"

🤖 AI:
"Two spring rolls or four?"

👤 顾客:
"Four, please."

🤖 AI:
"Got it. So that's one General Tso's chicken with brown rice,
and four spring rolls. Your total is $18.50, ready in about
20 minutes. Can I get your name for the order?"

👤 顾客:
"Mike."

🤖 AI:
"Perfect, Mike. See you in 20 minutes. Have a good night."

[挂断音]
```

### 剧本里的 6 个销售亮点（隐藏设计）

1. **AI 自报家门** → 展示"这不是骗子电话"
2. **顾客用"Um、Yeah"等口语** → 展示"能听懂真人说话"
3. **AI 主动介绍额外收费** → 展示"透明诚实"
4. **AI 数量确认（2 个还是 4 个）** → 展示"不会搞错订单"
5. **AI 报总价 + 取餐时间** → 展示"完整业务闭环"
6. **AI 记住顾客名字** → 展示"有记忆有礼貌"

---

## 4. 阶段 2：录音操作

### 硬件方案：华为 HarmonyOS 手机

HarmonyOS 自带通话录音功能，音质通常很好，适合直接使用。

### 方案 A：华为原生通话录音（首选）

#### 方法 1：拨号时手动开启

```
1. 拨打 Twilio 号（接通后）
2. 通话界面 → 找"更多"或"···"按钮
3. 点击"录音"图标（通常是红点）
4. 通话过程会有语音提示"通话正在录音"
5. 挂断后录音自动保存
```

#### 方法 2：全自动通话录音（推荐）

```
1. 打开"电话" App
2. 右上角"···"或"三条杠"菜单
3. "设置" → "通话录音"
4. 开启"所有通话"或添加你的 Twilio 号
5. 之后拨打这个号会自动录音
```

#### 录音文件保存位置

```
文件管理 → 内部存储 → Sounds → CallRecord
或:
文件管理 → 内部存储 → Music → Record
```

### 方案 B：备选方案（电脑录音）

如果华为原生录音找不到，用这个：

```
1. 手机拨打 Twilio 号，接通后开"扬声器/免提"
2. 手机放在电脑麦克风旁 10-15 cm
3. 电脑用免费录音工具录环境音
4. 录完剪辑

推荐 Windows 录音工具:
- Voice Recorder（Win 10/11 自带）← 最简单
  开始菜单搜"录音机"即可
- Audacity（免费，专业）
- OBS Studio（免费，专业级）
```

### 录音时的 5 个专业技巧

1. **说话速度比平时稍慢 10%**（紧张会说快，慢一点更专业）
2. **加自然口语词**（"Um..."、"Yeah, let's do that."）
3. **手机拿离嘴巴 10-15 cm**（太近爆音，太远回声）
4. **录完不要立刻挂断**，多留 2 秒静音（给后期剪辑留余地）
5. **录 3-5 次**：热身、正常、放松、备份

### 录音质量检查（3 次试录）

正式录音前先做 **2 次试录**，检查：

- [ ] AI 声音清晰吗？会不会太小/太大？
- [ ] 我的声音清晰吗？会不会有回音？
- [ ] 电话延迟怎么样？AI 反应是不是很快？

试录发现问题的解决：
- AI 声音太小 → 手机音量调大
- 我说话有回音 → 换个不空旷的房间
- 反应太慢 → 剧本某些地方说话稍微延迟

### 法律合规提醒 ⚖️

- ✅ **你自己录你自己的 AI**：完全合法，不需要任何顾虑
- ⚠️ **未来给餐厅客户用**：AI 开场白必须说 "This call may be recorded"（美国部分州要求）

---

## 5. 阶段 3：音频后期处理

### 为什么需要后期处理？

原始录音的问题：
- ❌ 开头有"喂喂喂"、等接通的杂音
- ❌ 结尾有挂断"咔嚓"声
- ❌ 音量忽大忽小，AI 大声、你小声
- ❌ 中间有咳嗽、思考停顿等杂音
- ❌ 文件格式可能是 `.amr`，网页不支持

### 需要做的 5 件事

#### ① 剪掉开头和结尾多余部分

- **保留**：从"Thanks for calling..."到"Have a good night."
- **剪掉**：接通前的等待、开场闲聊、挂断杂音
- **目标长度**：45-60 秒

#### ② 统一音量（归一化 / Normalize）

- **目标响度**：-16 LUFS（网页音频行业标准）
- 工具里找 "Normalize to -16 LUFS" 或 "Loudness Normalize"

#### ③ 降噪（Noise Reduction）

- 过滤空调声、白噪音
- ⚠️ **不要过度降噪**（会让声音像水下讲话）
- 宁可留一点点噪音，也不要过度处理

#### ④ 导出为 MP3 格式

**为什么必须 MP3？**

| 格式 | 网页支持 | 文件大小 | 音质 |
|------|---------|---------|------|
| **MP3** ⭐ | 所有浏览器 | 小 | 好 |
| WAV | 所有浏览器 | 巨大（10 倍） | 完美 |
| M4A | 大部分浏览器 | 中 | 好 |
| AMR（华为默认） | ❌ 不支持 | 小 | 一般 |

**目标文件**：
- 格式：MP3
- 比特率：128 kbps
- 大小：< 1 MB（60 秒 128kbps ≈ 900 KB）
- 命名：`sample-call-restaurant-en.mp3`

#### ⑤ 试听最终成品

**至少 3 个设备**测试：
- [ ] 电脑喇叭
- [ ] 电脑耳机
- [ ] 手机

### 推荐工具

#### 选项 A：Adobe Podcast Enhance（一键处理）⭐⭐

- 网址：https://podcast.adobe.com/enhance
- 上传音频 → 等 30 秒 → 下载增强版
- Adobe AI 自动归一化、降噪、清晰化
- **最适合新手**

#### 选项 B：Audacity（免费专业级）⭐

- 网址：https://www.audacityteam.org
- 免费开源，Windows/Mac 都能用
- 上手 30 分钟
- YouTube 搜"Audacity 剪辑教程"有免费教程

#### 选项 C：在线组合工具

- 剪辑：https://online-audio-converter.com/cut-audio
- 增强：Adobe Podcast Enhance
- 转 MP3：https://cloudconvert.com

### 新手推荐工作流（20-30 分钟）

```
第 1 步: 华为手机录音文件传电脑
   ↓
第 2 步: 上传到 Adobe Podcast Enhance
        自动清晰化 + 归一化(30 秒等待)
        下载增强版 MP3
   ↓
第 3 步: 用 Audacity 打开增强版
        剪掉开头结尾多余部分
        导出为 sample-call-restaurant-en.mp3
   ↓
✅ 完成! 文件在电脑桌面
```

---

## 6. 阶段 4：上传到项目

### 关键概念：Next.js 的 public 文件夹

`public/` 文件夹是 Next.js 存放**静态资源**（图片、音频、视频、字体）的地方。

```
D:\cursor\OrderAI\
├── app/           ← 页面代码
├── components/    ← 组件代码
├── locales/       ← 多语言文件
├── public/        ← ⭐ 音频文件放这里
│   ├── favicon.ico
│   └── audio/                             ← 需要新建这个子文件夹
│       └── sample-call-restaurant-en.mp3  ← 你的音频
└── package.json
```

**网页访问路径**：`/audio/sample-call-restaurant-en.mp3`
（前缀 `/` 表示从 `public/` 开始）

### 做法 A：手动拖文件（最简单）

```
1. 打开文件资源管理器
2. 进入 D:\cursor\OrderAI\public\
3. 新建文件夹 audio
4. 把 sample-call-restaurant-en.mp3 拖进去
5. ✅ 完成
```

### 做法 B：让 Claude Code 处理（有验证）

**优点**：
- 验证文件确实到位
- 检查文件大小
- 更新 README 记录

**Claude Code 提示词**（复制粘贴）：

```
I recorded a sample AI phone call for our restaurant use case and
saved the MP3 file at [填你的文件路径,如 C:\Users\me\Desktop\sample-call-restaurant-en.mp3].

Please help me integrate this audio file into the project:

=== STEP 1: SETUP ===

1. Create a `public/audio/` folder in the project if it doesn't
   already exist.

2. Copy my file into that folder as:
   public/audio/sample-call-restaurant-en.mp3

3. Verify the file was copied successfully:
   - Confirm it exists at the correct path
   - Report its file size in KB (should be under 1MB ideally)
   - Confirm the file extension is .mp3

=== STEP 2: SANITY CHECKS ===

4. Make sure the `public/` folder is NOT in `.gitignore` (it should
   be tracked by git so the audio gets deployed with the site).

5. Confirm no other audio files with the same name exist elsewhere
   in the project (to avoid confusion).

=== STEP 3: DOCUMENT ===

6. Add a small note to the README.md (or create a new AUDIO.md if
   README doesn't exist) documenting:
   - Where sample call audio files live: public/audio/
   - Naming convention: sample-call-{industry}-{language}.mp3
   - Current files present
   - How to add new sample calls in the future

=== STEP 4: WAIT ===

After all four steps, STOP and confirm to me that the file is in
place. Do NOT yet modify any React components — I want to review
the setup before we integrate the audio into the UI.
```

---

## 7. 阶段 5：网页集成播放器

### 播放器方案：简单播放/暂停（MVP 最佳）

**为什么不用进度条？**

Vapi、Retell、Bland AI 等大牌 sample call 都不用进度条。

心理学原因：
- 用户看到"60 秒 sample call" → 会想"要花我 60 秒？算了"
- 用户看到"点一下就能听" → 反正就一下 → 更容易点

**这不是"简陋"，是"精心设计的低门槛"。**

### 4 个状态设计

```
INITIAL     ▶ Play sample call
    ↓ 点击
PLAYING     ⏸ Playing...
    ↓ 自然播放完
INITIAL     ▶ Play sample call

INITIAL     ▶ Play sample call
    ↓ 点击
PLAYING     ⏸ Playing...
    ↓ 手动暂停
PAUSED      ▶ Play sample call
    ↓ 再次点击
PLAYING     ⏸ Playing... (从暂停处继续)
```

### Claude Code 主提示词（复制粘贴）

```
I've placed my sample call audio at public/audio/sample-call-restaurant-en.mp3.
Now I want to make the "Play sample call" button in the Hero section's
phone card actually functional. Currently it's just a static play icon
that does nothing.

=== PRODUCT REQUIREMENTS ===

1. Simple play/pause behavior (no progress bar, no volume slider, no
   time display — this is a marketing demo, not a music player).

2. States I need to handle:
   - INITIAL: Shows ▶ play icon, text "Play sample call"
   - PLAYING: Shows ⏸ pause icon, text "Playing..." (or similar)
   - ENDED (audio finished): Returns to INITIAL state automatically
   - USER PAUSED: Same visual as INITIAL, but resumes from where it
     paused if clicked again

3. When user clicks Play:
   - The audio starts playing
   - The play button becomes a pause button
   - The phone icon in the middle of the card should get a subtle
     visual indication (pulsing ring, glow, or animation) to show
     "the call is happening now"

4. When user clicks Pause:
   - Audio pauses (does not reset)
   - Button returns to play icon
   - Clicking again resumes from same position

5. When audio finishes naturally:
   - Button returns to initial state
   - Any pulsing animation on the phone icon stops

=== TECHNICAL REQUIREMENTS ===

6. Use the browser's native HTMLAudioElement (via React ref or hook),
   NOT a third-party audio library. This keeps the bundle small and
   avoids dependencies for such a simple feature.

7. Only ONE audio instance should exist at a time. If user reloads or
   navigates away, clean up properly (useEffect cleanup).

8. Handle errors gracefully:
   - If the audio file fails to load, log to console but don't crash
     the page
   - If the browser blocks autoplay, do NOT try to autoplay — this is
     click-to-play only, so it should never hit that issue

9. Accessibility (a11y):
   - Button needs aria-label that updates based on state ("Play sample
     call" / "Pause sample call")
   - Should be keyboard accessible (Space/Enter to toggle)

10. Path to audio: /audio/sample-call-restaurant-en.mp3
    (Note the leading slash — it's served from public/)

=== INTEGRATION APPROACH ===

11. Before writing code, please:
    a. Read the current Hero component to find the phone card
       structure
    b. Identify the exact JSX for the "Play sample call" element
    c. Show me the file path and the specific block you'll modify
    d. Propose your implementation plan (which hooks, what state
       variables, any new sub-components)

12. Then wait for my "go ahead" before making changes.

=== NOT IN SCOPE (do NOT do these) ===

- Do NOT add progress bar, seek bar, or time display
- Do NOT add volume controls
- Do NOT add playback speed
- Do NOT add sharing/download buttons
- Do NOT add transcript display (may come later, but not now)
- Do NOT change the visual design of the phone card itself
- Do NOT touch other sections of the homepage

=== VERIFICATION AFTER YOU IMPLEMENT ===

After code changes, please:
1. Run `npm run build` to confirm the build passes
2. Confirm the dev server is still running (or restart it if needed)
3. Tell me exactly what to click in the browser to test
4. Warn me about anything I should specifically look for (edge cases,
   potential issues)

Take your time. This is the MVP version, so simplicity > cleverness.
```

### 提示词的 6 段结构解释

| 段落 | 作用 |
|------|------|
| PRODUCT REQUIREMENTS | 告诉 AI **要什么行为**（4 个状态、切换逻辑、动效） |
| TECHNICAL REQUIREMENTS | 告诉 AI **怎么做**（原生 audio、别引入库、无障碍） |
| INTEGRATION APPROACH | 让 AI **先规划、后动手**，等你批准 |
| NOT IN SCOPE | 明确告诉 AI **别做什么**（最重要的护栏！） |
| VERIFICATION | 让 AI 帮你**制定测试方案** |
| 语气引导 | "Simplicity > cleverness" 让 AI 保守 |

### AI 提出计划后需要检查的 3 点

看到 AI 的实施计划，重点检查：

- ✅ 修改哪些文件？（应该只有 1-2 个）
- ✅ 会不会引入新的 npm 包？（不应该）
- ✅ 会不会重构其他不相干代码？（不应该）

**遇到以下情况必须叫停**：

- 🔴 "我需要安装一个新的 npm 包..." → 说 "不要，用原生 HTML5"
- 🔴 "我会顺便重构一下 Hero 组件..." → 说 "只改这一个功能"
- 🔴 "我会创建 5 个新文件..." → 说 "1-2 个就够"

---

## 8. 测试验证清单

### 5 种边界情况必测

```
□ 情况 1: 正常播放 → 播放完 → 按钮回到"播放"状态
□ 情况 2: 播放中 → 点暂停 → 再点播放 → 从暂停处继续
□ 情况 3: 快速反复点击(播放/暂停高频操作) → 不会卡死
□ 情况 4: 播放中 → 刷新页面 → 后台不应继续播
□ 情况 5: 手机浏览器测试(iOS Safari 尤其容易有 bug)
```

### 多语言检查

切换 4 种语言，确认按钮下方文字翻译正确：

- [ ] English: "Play sample call"
- [ ] 中文: "播放示例通话" (或你 i18n 里定义的)
- [ ] Español: "Reproducir llamada de muestra"
- [ ] Tiếng Việt: "Phát cuộc gọi mẫu"

### 视觉检查

- [ ] 播放时电话图标有脉冲/发光动画
- [ ] 暂停后动画停止
- [ ] 按钮切换过程流畅、不闪烁

---

## 9. 未来升级路径

### 渐进增强规划

```
▶ 阶段 1 (现在): 1 语言 x 1 行业 = 1 个音频
                sample-call-restaurant-en.mp3

▶ 阶段 2 (1-2 月后): 4 语言 x 1 行业 = 4 个音频
                    加语言选择,用户听不同语言版本
                    - sample-call-restaurant-en.mp3
                    - sample-call-restaurant-zh.mp3
                    - sample-call-restaurant-es.mp3
                    - sample-call-restaurant-vi.mp3

▶ 阶段 3 (3-6 月后): 4 语言 x 4 行业 = 16 个音频
                    加行业选择,用户听自己行业的样例
                    - sample-call-{restaurant/nailsalon/spa/clinic}-{en/zh/es/vi}.mp3

▶ 阶段 4 (产品成熟): 换成路 2 或路 3,真实实时调用
                    用户在网页上真的和 AI 对话
```

### 命名规范（已为未来预留扩展）

```
格式: sample-call-{industry}-{language}.mp3

industry 取值:
  - restaurant  餐厅
  - nailsalon   美甲店
  - spa         Spa
  - clinic      诊所

language 取值:
  - en   英文
  - zh   中文
  - es   西班牙文
  - vi   越南文

示例:
  sample-call-nailsalon-vi.mp3  (美甲店-越南语版)
```

---

## 10. 常用工具速查表

### 音频处理工具

| 工具 | 网址 | 用途 | 收费 |
|------|------|------|------|
| Adobe Podcast Enhance | podcast.adobe.com/enhance | AI 一键清晰化 | 免费 |
| Audacity | audacityteam.org | 剪辑 + 转格式 | 免费 |
| CloudConvert | cloudconvert.com | 格式转换 | 免费 |
| Online Audio Cutter | online-audio-converter.com/cut-audio | 在线剪辑 | 免费 |

### 项目相关命令速查

```bash
# 启动开发服务器(在项目目录内)
npm run dev
# 访问 http://localhost:3000

# 生产构建测试
npm run build

# Git 提交流程
git add .
git commit -m "feat: add sample call audio player"
git push

# 查看当前 git 状态
git status

# 查看最近 5 次提交
git log -5 --oneline
```

### Claude Code 常用快捷键

| 操作 | 快捷键 |
|------|--------|
| 撤回刚发出的消息 | Esc Esc |
| 倒带到之前的状态 | 输入 `/rewind` |
| 中断当前执行 | Ctrl+C |
| 查看所有可用命令 | 输入 `/` |

---

## 11. 快速索引：所有 Claude Code 提示词

### 提示词 A：查看网站当前状态（审查）

**用途**：让 AI 审查网站并给改进建议

```
Please review my homepage and give me a prioritized list of
issues to fix (🔴 must fix, 🟡 should fix, 🟢 nice to have).
Cover visual issues, content issues, functional gaps, and
missing trust elements. Then start the dev server so I can
check the site in my browser. Do NOT start fixing anything
yet — I want to decide what to tackle first.
```

### 提示词 B：仅启动服务器让我自己看

**用途**：只启动开发服务器，不做审查

```
I want to preview my website locally in the browser to see the current
state and decide what to improve. Please:

1. Start the dev server with `npm run dev` and tell me the exact URL
   I should open (likely http://localhost:3000 unless that port is busy).

2. Confirm the server is running and ready before I open the browser.

3. Remind me of any pages/routes I have besides the homepage so I know
   what to check.

4. Keep the server running until I tell you to stop it. Do NOT
   automatically shut it down.

Just start the server and report back — don't modify any files.
```

### 提示词 C：上传 sample call 音频文件

**用途**：把录好的音频放到项目里（参见第 6 节）

（完整版见"6. 阶段 4：上传到项目"章节）

### 提示词 D：集成播放器主提示词

**用途**：让 AI 实现播放/暂停功能（参见第 7 节）

（完整版见"7. 阶段 5：网页集成播放器"章节）

### 提示词 E：项目恢复（未来在新电脑上用）

**用途**：从 GitHub 恢复项目后，让 AI 快速理解现状

```
I'm resuming work on this project after a break (I cloned it fresh from
GitHub onto a new/reset machine, then ran `npm install`). Before I give
you any new tasks, please help me get oriented again.

=== STEP 1: PROJECT HEALTH CHECK ===

Run these and report results in plain language:

1. `pwd`  — confirm we're in the right folder
2. `git status`  — confirm clean working tree
3. `git log -10 --oneline`  — show me the last 10 commits
4. `git remote -v`  — confirm GitHub remote is connected
5. `node --version` and `npm --version`
6. Check if `node_modules` folder exists
7. Try running `npm run build` to confirm project compiles

=== STEP 2: PROJECT CONTEXT REFRESH ===

Briefly summarize:

1. What is this project? (read README if exists)
2. What framework / tech stack?
3. What languages does i18n support?
4. What are the main homepage sections?
5. Any obvious TODO / FIXME in code?

=== STEP 3: WAIT ===

STOP and wait for me. Do NOT start making changes.
```

---

## 📌 最后：本次工作流学到的关键原则

1. **完成 → 验证 → Commit → 才开始下一步**（每一步之间有刹车）
2. **让 AI 先给计划，你批准后再动手**（防止乱改）
3. **明确列出"不要做什么"**（比"要做什么"更重要）
4. **每次代码改动后立刻 git commit**（当作存档点）
5. **不确定时用 `/rewind` 干净地回滚**（不要"忽略上一条"）
6. **每个复杂任务开始前，先做技术选型讨论**（省 90% 弯路）

---

**文档结束**

> 💡 使用建议：把这个文件放到 `D:\cursor\OrderAI\docs\SampleCall实施手册.md`，
> 然后 git commit 到 GitHub。这样未来在任何一台电脑上都能查到。

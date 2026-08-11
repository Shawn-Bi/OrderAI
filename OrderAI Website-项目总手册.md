# OrderAI - Project Master Handbook
# OrderAI 项目总手册

> **Version 1.0** · Last updated: 2026-08-11
> **Repository**: https://github.com/xiaoenbi1987/OrderAI
> **Local Path**: `D:\cursor\OrderAI`
> **Stage**: MVP Development (Pre-Launch)

---

## 📖 About This Document / 关于本手册

This is the **master reference document** for the OrderAI project. It contains everything needed to understand, resume, and grow this project across time and machines.

这是 OrderAI 项目的**总参考手册**，包含理解、恢复、发展此项目所需的一切信息，无论跨越多长时间、更换多少台设备。

**Intended audience / 目标读者**:
- **Primary**: Founder (xiaoenbi1987), self-reference during development
- **Secondary**: Future co-founders, investors, technical advisors reviewing the project
- **首要**：创始人自己，开发过程中随时查阅
- **次要**：未来的合伙人、投资人、技术顾问

---

## 📑 Table of Contents / 目录

1. [Executive Summary / 项目概览](#1-executive-summary--项目概览)
2. [Product Vision / 产品愿景](#2-product-vision--产品愿景)
3. [Current State / 当前状态](#3-current-state--当前状态)
4. [Technical Architecture / 技术架构](#4-technical-architecture--技术架构)
5. [3-Month Roadmap / 3 个月路线图](#5-3-month-roadmap--3-个月路线图)
6. [12-Month Vision / 12 个月愿景](#6-12-month-vision--12-个月愿景)
7. [Project Recovery Guide / 项目恢复指南](#7-project-recovery-guide--项目恢复指南)
8. [Development Workflow / 开发工作流](#8-development-workflow--开发工作流)
9. [Prompt Library / 提示词库](#9-prompt-library--提示词库)
10. [Cost & Subscription Ledger / 成本与订阅账本](#10-cost--subscription-ledger--成本与订阅账本)
11. [Key Learnings / 关键经验总结](#11-key-learnings--关键经验总结)
12. [Related Documents / 相关文档](#12-related-documents--相关文档)

---

## 1. Executive Summary / 项目概览

### English

**OrderAI** is an AI phone ordering SaaS platform designed for local service businesses in the United States — starting with restaurants and expanding to nail salons, spas, and clinics.

The core value proposition: **local shop owners lose 30-40% of incoming calls due to being busy serving in-person customers. OrderAI answers those calls with a natural-sounding AI voice agent that can take orders, book appointments, and answer questions in 4 languages — English, Chinese (Mandarin), Spanish, and Vietnamese — 24/7, without any new hardware or phone number changes.**

### 中文

**OrderAI** 是一款面向美国本地服务型商家的 AI 电话点单 SaaS 平台。首个切入行业是**餐厅**，未来扩展到**美甲店、水疗中心、诊所**。

核心价值主张：**本地小生意主因为忙于服务店内顾客而错失 30-40% 来电。OrderAI 用自然流畅的 AI 语音助手代接这些电话，可用 4 种语言（英文、中文、西班牙文、越南文）接单、预约、答疑，24/7 全天候，且无需任何新硬件或换号。**

### One-Liner Pitch / 一句话推销

> *"Never miss another call. OrderAI picks up while you focus on your customers."*
> *"再也不错过任何一通电话。OrderAI 帮你接听，让你专注服务眼前的顾客。"*

### Target Market / 目标市场

- **Geography**: United States (English-first, but multilingual is a competitive moat in US markets with heavy Chinese/Hispanic/Vietnamese immigrant populations)
- **Industry Priority**: Restaurant → Nail Salon → Spa → Clinic
- **Business Size**: 1-3 locations, $500K-$2M annual revenue
- **Persona**: Shop owner, 30-55 years old, technology-cautious, revenue-focused

### Founder Background / 创始人背景

- Transitioning from POS sales into AI product building
- Non-engineer, learning through "vibe coding" with Claude Code
- Deep industry knowledge of restaurant POS operations (unique advantage)
- Uses Cursor + Claude Code for development

---

## 2. Product Vision / 产品愿景

### 2.1 The Problem We Solve / 我们解决的问题

Local service businesses face a systemic problem:

- ☎️ **Peak hours = missed calls**: When the restaurant is packed at 7pm, phones ring unanswered
- 💰 **Every missed call = lost revenue**: Industry data suggests $10-50 lost per missed call
- 🌐 **Language barriers**: US markets have significant Chinese/Hispanic/Vietnamese populations, but most shops only serve in English
- 👥 **Labor shortage**: Hiring bilingual phone staff is expensive and hard to retain

### 2.2 Why AI Phone Agents Now / 为什么是现在

Three technology curves converged in 2024-2026:

1. **Speech-to-text accuracy** reached human parity (Whisper, Deepgram)
2. **LLM reasoning** became reliable for structured tasks (GPT-4, Claude)
3. **Text-to-speech naturalness** became indistinguishable from humans (ElevenLabs, OpenAI TTS)

**Result**: An AI phone agent in 2026 can genuinely pass as a human receptionist for structured tasks like ordering food or booking appointments.

### 2.3 Competitive Landscape / 竞品格局

| Company | Focus | Strength | Weakness |
|---------|-------|----------|----------|
| **Vapi** | Developer platform | Best-in-class latency | Not turn-key for shop owners |
| **Retell AI** | Enterprise voice | Strong tech | Too expensive for SMB |
| **Bland AI** | High-volume calling | Good scale | Focused on outbound, not inbound |
| **Slang.ai** | Restaurants only | Industry-specific | English-only, US-centric |
| **OrderAI** ⭐ | **SMB + multilingual + multi-vertical** | **Chinese/Vietnamese moat + POS integration** | **Early stage, no brand yet** |

### 2.4 Unique Differentiators / 差异化优势

1. 🌏 **True multilingual first-class support** (EN/ZH/ES/VI) — not an afterthought
2. 🏪 **POS integration knowledge** from founder's sales background
3. 🎯 **Multi-vertical focus** — one product serves restaurants AND clinics
4. 💰 **SMB-friendly pricing** — $79-249/month vs enterprise competitors' $500+
5. 🎨 **Consumer-brand-quality landing page** — professional design signals trust to skeptical shop owners

---

## 3. Current State / 当前状态

### 3.1 What's Built / 已完成的

#### ✅ Marketing Website (Landing Page)
- Framework: Next.js 14+ with App Router
- Deployment: Not yet deployed (local dev only)
- Path: `D:\cursor\OrderAI`

**Completed sections / 已完成的模块**:
- Navbar with logo and language switcher
- Hero section with product headline and animated phone card
- Features section
- Use Cases section (with Clinic added as new industry)
- Pricing section (Starter $79 / Growth $149 / Pro $249)
- FAQ section
- "Start Your Free Trial" form
- Footer (redesigned: removed Company/Legal columns, added social icons)

**Multilingual support / 多语言支持**:
- ✅ English (EN)
- ✅ 中文 (ZH)
- ✅ Español (ES)
- ✅ Tiếng Việt (VI)
- Implementation: `react-i18next` with localStorage-based language detection
- All homepage copy extracted to locale JSON files under `locales/`

#### ✅ Demo APP (Working Prototype)
- **Industry**: Restaurant only
- **Language**: English only
- **Telephony**: Twilio integration (can receive real phone calls)
- **Location**: Separate from the marketing website codebase
- **Status**: Local demo, not connected to marketing website's Free Trial form

#### ✅ Version Control
- GitHub repo: https://github.com/xiaoenbi1987/OrderAI
- Latest full backup: 2026-08-11
- Repository visibility: [Public / Private — 需你自己确认]

### 3.2 What's NOT Built / 尚未完成

#### 🔴 Critical Gaps / 关键缺口

- ❌ Website not deployed to public URL (no one can visit it)
- ❌ Free Trial form submissions go nowhere (no backend)
- ❌ Demo APP not connected to marketing website
- ❌ Sample Call audio not yet on the phone card
- ❌ Only 1 industry Demo (restaurant); nail salon / spa / clinic have no demo yet
- ❌ No customer dashboard (login, order management, call transcripts)

#### 🟡 Medium Gaps / 中等缺口

- ⚠️ No "About Us" or "Contact Us" pages
- ⚠️ No POS integrations (Square, Toast, Clover, etc.)
- ⚠️ Sample Call is only planned for English + Restaurant (future expansion to 4 languages × 4 industries)
- ⚠️ SEO meta tags remain in English only (Next.js server-generated, cannot switch via localStorage)

#### 🟢 Nice-to-Have Gaps / 优化项

- Newsletter subscription (intentionally not added — would look half-built without backend)
- Testimonials with real customer logos
- Blog / content marketing
- Analytics tracking (Google Analytics, PostHog)

### 3.3 Design & Branding / 设计与品牌

- **Brand name**: OrderAI
- **Logo**: Phone icon in orange circle
- **Primary color**: Orange/coral (`brand-600` approximate)
- **Theme**: Warm, light/cream backgrounds (NOT dark theme)
- **Font**: [check globals.css]
- **Tone**: Professional but approachable, targeting non-technical shop owners

---

## 4. Technical Architecture / 技术架构

### 4.1 Marketing Website Stack / 营销网站技术栈

```
Frontend:
├── Framework: Next.js 14+ (App Router)
├── Language: TypeScript
├── Styling: Tailwind CSS
├── i18n: react-i18next (client-side, localStorage-based)
└── Deployment target: Vercel (planned, not yet deployed)

Repository Structure:
D:\cursor\OrderAI\
├── app/              # Next.js App Router pages
│   ├── page.tsx      # Homepage (single-page site)
│   └── layout.tsx    # Root layout with i18n provider
├── components/       # React components (Hero, Pricing, FAQ, etc.)
├── locales/          # Translation JSON files
│   ├── en.json
│   ├── zh.json
│   ├── es.json
│   └── vi.json
├── public/           # Static assets
│   ├── favicon.ico
│   └── audio/        # Sample call audio (planned)
├── docs/             # Project documentation (this file lives here)
├── package.json
├── next.config.js
└── tailwind.config.ts
```

### 4.2 Demo APP Stack / Demo APP 技术栈

```
Telephony:
├── Provider: Twilio
├── Phone Number: [YOUR TWILIO NUMBER]
└── Voice Webhook: [YOUR SERVER ENDPOINT]

AI Pipeline:
├── STT (Speech-to-Text): [Whisper / Deepgram / other]
├── LLM: [OpenAI GPT-4 / Claude / other]
└── TTS (Text-to-Speech): [OpenAI TTS / ElevenLabs / other]

Runtime:
├── Language: Python (per user's preference)
├── Framework: FastAPI
├── Deployment: Local only (not deployed)
└── Database: [None yet / PostgreSQL planned]
```

> ⚠️ **Reminder**: Update this section with actual details from your Demo APP. The current entries are placeholders.

### 4.3 Planned Backend Architecture / 未来后端架构

```
┌─────────────────────────────────────────────┐
│  Marketing Website (Next.js on Vercel)      │
│  - Free trial signup form                   │
│  - Customer login                            │
│  - Dashboard                                 │
└──────────────┬──────────────────────────────┘
               │ REST API / GraphQL
               ↓
┌─────────────────────────────────────────────┐
│  Backend API (FastAPI on Railway/Fly.io)   │
│  - User authentication                      │
│  - Order management                         │
│  - Call transcript storage                  │
│  - Business config                          │
└──────────────┬──────────────────────────────┘
               │
       ┌───────┴────────┐
       ↓                ↓
  ┌─────────┐    ┌──────────────┐
  │PostgreSQL│    │Twilio Webhook│
  │(orders, │    │(receives    │
  │ users,  │    │ calls,      │
  │ configs)│    │ triggers AI)│
  └─────────┘    └──────┬───────┘
                        │
                        ↓
                 ┌──────────────┐
                 │ AI Voice     │
                 │ Pipeline     │
                 │ (STT+LLM+TTS)│
                 └──────────────┘
```

### 4.4 Key Technical Decisions Made / 已做的技术决策

| Decision | Choice | Reasoning |
|----------|--------|-----------|
| Web framework | Next.js | Server-side rendering for SEO, React ecosystem |
| i18n library | react-i18next | Client-side, localStorage-based, no URL restructuring |
| Language switcher style | Match light navbar | Website is warm/light-themed, not dark |
| Plan tier names | Keep English (Starter/Growth/Pro) | SaaS industry standard (Notion, Vercel, Linear) |
| Footer redesign | Remove Company + Legal, add social icons | Cleaner MVP, avoids half-built links |
| Sample call approach | Pre-recorded from Demo APP (Route 2) | Uses existing asset, professional, low cost |
| Sample call player | Simple play/pause (no progress bar) | Matches industry standard (Vapi, Retell) |
| Backend language | Python + FastAPI | Founder preference, AI ecosystem alignment |

---

## 5. 3-Month Roadmap / 3 个月路线图

### ⚠️ Reality Check / 现实检查

You initially listed 7 major items for 3 months. That's roughly **6+ months of work for a solo non-engineer**. This roadmap prioritizes based on **business impact per hour of effort**.

**Guiding principle**: *A launched imperfect product beats a perfect unlaunched product every single time.*

**指导原则**：*已上线的不完美产品，永远胜过尚未上线的完美产品。*

---

### 🎯 Month 1: Launch the Marketing Site / 月 1：让网站上线

**Goal**: Get a live URL you can share with anyone in the world.

**目标**：拿到一个可以分享给全世界任何人的公网 URL。

#### Must-Do / 必做

| Task | Est. Time | Complexity | Notes |
|------|-----------|------------|-------|
| Complete Sample Call audio feature | 4 hrs | 🟢 Easy | Has separate handbook |
| Build "About Us" and "Contact Us" pages | 6 hrs | 🟢 Easy | Design already discussed |
| Fix any remaining i18n gaps (found in browser review) | 3 hrs | 🟢 Easy | Iterate as issues surface |
| Deploy to Vercel (or similar) | 2 hrs | 🟡 Medium | First deployment learning curve |
| Buy custom domain (e.g., orderai.com or similar) | 30 min | 🟢 Easy | ~$12/year |
| Configure DNS + SSL | 1 hr | 🟡 Medium | Usually auto with Vercel |

**Milestone / 里程碑**: 🚀 **Public URL accessible from anyone's browser**

#### Should-Do / 争取做

- Basic Google Analytics or PostHog tracking
- OG image + meta tags for social media sharing
- 404 page

---

### 🎯 Month 2: Connect Demo to Website / 月 2：Demo 接入网站

**Goal**: Make "Start Free Trial" form actually do something. Prospects can call a real number and hear a real AI.

**目标**：让"Start Free Trial"表单真的有用；潜在客户能拨打一个真实号码，听到真实的 AI。

#### Must-Do / 必做

| Task | Est. Time | Complexity | Notes |
|------|-----------|------------|-------|
| Backend: minimal FastAPI service for form submissions | 8 hrs | 🟡 Medium | Store leads in DB or email |
| Deploy backend (Railway / Fly.io / Render) | 3 hrs | 🟡 Medium | First backend deployment |
| Connect Free Trial form to backend | 3 hrs | 🟢 Easy | Simple POST + validation |
| Set up email notifications (SendGrid / Resend) | 2 hrs | 🟢 Easy | Notify you when a lead comes in |
| Publish your Demo APP's Twilio number on the website | 1 hr | 🟢 Easy | Add "Call our demo: (713) 555-XXXX" |
| Wire Demo APP to a stable public URL | 4 hrs | 🟡 Medium | May need Twilio config |

**Milestone / 里程碑**: 📞 **A prospect submits form → you get notified → they can call demo number → AI answers**

#### Should-Do / 争取做

- Basic customer login page (Auth0 or Clerk)
- Simple admin dashboard to view leads
- Add "Book a call" Calendly integration

---

### 🎯 Month 3: Add 1 More Industry Demo / 月 3：增加 1 个新行业 Demo

**Goal**: Prove the multi-vertical thesis with one more industry, ideally clinic (most different from restaurant).

**目标**：用一个新行业验证"多行业适配"这个核心假设，理想是**诊所**（和餐厅差异最大）。

#### Must-Do / 必做

| Task | Est. Time | Complexity | Notes |
|------|-----------|------------|-------|
| Design clinic call flow (appointment booking) | 4 hrs | 🟢 Easy | Different intent than ordering |
| Adapt Demo APP for clinic scenario | 12 hrs | 🟠 Hard | New prompts, new flow logic |
| Record clinic sample call (per handbook) | 3 hrs | 🟢 Easy | Same process as restaurant |
| Add clinic sample call to website | 2 hrs | 🟢 Easy | Reuse audio player component |
| Update website copy to emphasize clinic use case | 2 hrs | 🟢 Easy | Already partially done |

**Milestone / 里程碑**: 🏥 **Website has 2 industry demos playable; investors can see the "multi-vertical" story is real**

---

### 🟢 Nice-to-Have (Deferred to Month 4-6) / 延后到 4-6 月

These are important but not urgent:

- **POS integration (Square/Toast)** — Deferred. Too complex without a paying customer requesting it. Do this AFTER you have a signed customer asking for it.
- **Customer dashboard (full order management, call transcripts)** — Deferred. Build a minimal version only if leads convert to trials.
- **Nail salon and Spa demos** — Deferred. Prove clinic works first, then decide next vertical based on early customer feedback.
- **Multilingual sample calls (ZH/ES/VI)** — Deferred. English demo is enough for MVP validation.

### 🔵 Vision Items (Month 6-12) / 长期愿景

For investor conversations:
- POS integrations across major providers
- Full customer dashboard with order management, call transcripts, analytics
- Sample calls: 4 languages × 4 industries = 16 audio files
- Real-time AI phone demo (WebRTC) on landing page
- API for restaurants to programmatically configure their AI
- Enterprise tier with SLA + white-labeling

---

## 6. 12-Month Vision / 12 个月愿景

### 6.1 Business Milestones / 商业里程碑

| Month | Milestone | Metric |
|-------|-----------|--------|
| 3 | First 10 signups | 10 free trial requests |
| 6 | First paying customer | $79-149 MRR |
| 9 | Product-market fit signal | 5+ paying customers, 60%+ retention |
| 12 | Seed-ready or bootstrapped | $5K-10K MRR or seed conversations started |

### 6.2 Product Milestones / 产品里程碑

- **Q3 2026**: Marketing site live, 2 industry demos, initial customer conversations
- **Q4 2026**: First paying customer, one POS integration
- **Q1 2027**: 4 industries supported, customer dashboard, initial multilingual demos
- **Q2 2027**: Real-time AI phone demo on landing, API access, enterprise conversations

### 6.3 Team Milestones / 团队里程碑

- **Now**: Solo founder, learning to code with Claude Code
- **Q4 2026**: Optionally, part-time technical co-founder or contractor
- **Q1 2027**: First full-time hire (engineering) if MRR supports it

---

## 7. Project Recovery Guide / 项目恢复指南

### 7.1 If You Lose Your Local Machine / 如果本地设备丢失

**GitHub is your permanent home. Local machines are disposable.**

Steps to fully recover:

```bash
# 1. Install prerequisites on new machine
#    - Git: git-scm.com
#    - Node.js LTS: nodejs.org
#    - Cursor: cursor.com

# 2. Pick a project location and clone
cd D:\cursor              # or wherever you want
git clone https://github.com/xiaoenbi1987/OrderAI.git
cd OrderAI

# 3. Install dependencies
npm install

# 4. Open in Cursor
cursor .                   # or manually: File > Open Folder

# 5. Open Claude Code panel and paste the recovery prompt below
```

### 7.2 Recovery Prompt for Claude Code / 恢复用提示词

Copy-paste this into Claude Code after opening the project:

```
I'm resuming work on the OrderAI project after a break (I cloned it fresh
from GitHub, then ran `npm install`). Before I give you any new tasks,
please help me get oriented.

=== STEP 1: HEALTH CHECK ===

Run these and report in plain language:

1. `pwd` — confirm folder
2. `git status` — confirm clean tree
3. `git log -10 --oneline` — show last 10 commits
4. `git remote -v` — confirm GitHub connection
5. `node --version` and `npm --version`
6. Check if `node_modules` folder exists
7. Try `npm run build` to confirm project still compiles

=== STEP 2: CONTEXT REFRESH ===

Read these files and summarize:

1. README.md (if exists)
2. package.json (framework, dependencies)
3. locales/ folder (which languages are supported)
4. app/page.tsx (main homepage structure)
5. docs/OrderAI-项目总手册.md (THIS FILE — read it fully)

After reading, tell me:
- What state the project is in
- What the most recent commits worked on
- What TODOs or in-progress items exist

=== STEP 3: WAIT ===

STOP and wait for my next instruction. Do NOT modify anything yet.
```

### 7.3 Backup Locations Checklist / 备份位置清单

Make sure the following are backed up in multiple places:

- [ ] Code: GitHub repository (permanent)
- [ ] This handbook: GitHub + OneDrive/Cloud + printed copy
- [ ] `.env` files with API keys: Password manager (NEVER GitHub)
- [ ] Twilio credentials: Password manager
- [ ] OpenAI/Anthropic API keys: Password manager
- [ ] Domain registrar login: Password manager
- [ ] Vercel/deployment platform login: Password manager

---

## 8. Development Workflow / 开发工作流

### 8.1 Golden Rules / 黄金法则

1. **Complete → Verify → Commit → Next**. Never skip verify or commit.
2. **Let AI plan before it acts**. Always require "show me your plan first" before letting Claude Code modify files.
3. **Explicitly list what NOT to do**. This is more important than what to do.
4. **Commit after every meaningful change**. Treat git commits as your save points in a game.
5. **When uncertain, use `/rewind`** — do not just say "ignore my last message" to the AI.
6. **Every technical decision starts with a design discussion**, not code. Saves 90% of dead-end paths.

### 8.2 Daily Workflow / 日常工作流

```
Morning:
  1. cd D:\cursor\OrderAI
  2. git pull (in case you pushed from another machine)
  3. Open Cursor
  4. Open Claude Code panel
  5. Send the "recovery prompt" or a task-specific opener

During work:
  1. Discuss the task with Claude Code (get its plan)
  2. Approve or refine the plan
  3. Let it execute
  4. Verify in browser (npm run dev)
  5. If good: git commit
  6. If bad: /rewind and try differently

End of session:
  1. git status (any uncommitted work?)
  2. git commit -m "WIP: [description]" if you need to save half-done work
  3. git push (backup to GitHub)
  4. Tell Claude Code "stop the server" if it's running
```

### 8.3 Git Commit Convention / 提交信息规范

Follow this pattern for cleaner history:

```
feat: [what new feature you added]
fix: [what bug you fixed]
docs: [documentation changes]
style: [visual/styling changes only]
refactor: [code cleanup, no behavior change]
chore: [maintenance, dependency updates, etc.]
wip: [work in progress, not finished]

Examples:
  feat: add sample call audio player to hero section
  fix: language switcher not persisting on refresh
  docs: update project master handbook
  chore: backup before subscription change
```

### 8.4 Claude Code Cheatsheet / Claude Code 快捷键

| Action | Key/Command |
|--------|-------------|
| Undo last message just sent | `Esc Esc` |
| Rewind to earlier state | Type `/rewind` |
| Interrupt current execution | `Ctrl+C` |
| See all commands | Type `/` |
| Compact context | Type `/compact` (if supported) |

---

## 9. Prompt Library / 提示词库

This is your reusable prompt collection. Copy-paste as-is when you need them.

### 9.1 Session Openers / 会话开场

#### A. Resume work on the project
```
I'm resuming work on OrderAI. Please read docs/OrderAI-项目总手册.md
first, then tell me what state the project is in and what recent
commits worked on. Don't modify anything yet — just get oriented.
```

#### B. Start dev server only
```
Please start the dev server with `npm run dev` and tell me the URL.
Keep it running until I say "stop the server". Don't modify any files.
```

#### C. Review the site and give me a fix list
```
Please review my homepage and give me a prioritized list of issues
(🔴 must fix, 🟡 should fix, 🟢 nice to have). Cover visual issues,
content issues, functional gaps, and missing trust elements. Then
start the dev server so I can verify. Do NOT start fixing anything.
```

### 9.2 Feature Development / 功能开发

#### D. Add new page (About Us / Contact)
```
I want to add a new page to the site at the route /[route-name].

Requirements:
1. Match the visual style of the existing homepage (warm/light theme,
   same typography, same button styles)
2. Add navigation link to the navbar
3. Full i18n support (EN/ZH/ES/VI) — extract all strings to locale files
4. Content structure: [describe your desired sections]

Before writing code:
1. Read the current homepage structure and locale files
2. Propose a plan: which files will you create/modify?
3. Wait for my approval before making changes

Do NOT touch other pages or the homepage.
```

#### E. Fix i18n gaps
```
I tested the language switcher in the browser. The following sections
are still hardcoded English and don't switch language:

[LIST THE SECTIONS YOU FOUND]

Please:
1. Do a complete i18n audit of every section listed above
2. Extract all hardcoded strings to en.json (existing keys or new)
3. Add matching translations to zh.json, es.json, vi.json
4. Keep brand names (OrderAI) in English across all locales
5. Preserve any <brand>...</brand> wrappers for highlight colors
6. Run `next build` to verify

Report which sections you fixed and which strings needed new keys.
```

### 9.3 Debugging & Recovery / 调试与恢复

#### F. Backup to GitHub
```
Please back up my project to GitHub. Report:
1. `git remote -v` — is remote configured?
2. `git status` — any uncommitted changes?
3. Unpushed commits list
4. If anything is uncommitted: commit with "chore: backup [date]"
   and push
5. If everything is clean, just confirm and give me the GitHub URL

Also check for `.env` files and remind me to back those up separately
(they should NOT be on GitHub).
```

#### G. Debug something not working
```
Something is not working as expected: [DESCRIBE THE PROBLEM]

Steps I took: [WHAT YOU DID]
Expected: [WHAT SHOULD HAPPEN]
Actual: [WHAT ACTUALLY HAPPENED]
Error message (if any): [PASTE THE ERROR]

Please:
1. Diagnose the root cause first — do not just try random fixes
2. Explain what's happening in plain language
3. Propose a fix and wait for my approval
4. After fixing, tell me exactly how to verify it works
```

### 9.4 Deployment / 部署

#### H. Deploy to Vercel (first time)
```
I want to deploy this Next.js site to Vercel for the first time.

Please walk me through step by step:
1. What I need to do on vercel.com (I have not signed up yet)
2. How to connect my GitHub repo (github.com/xiaoenbi1987/OrderAI)
3. What environment variables I need to set (if any)
4. How to configure the custom domain (I will buy one separately)
5. What to verify after first deployment succeeds

Explain each step in simple language. I'm not a developer.
```

---

## 10. Cost & Subscription Ledger / 成本与订阅账本

### 10.1 Current Monthly Costs / 当前月度成本

Track everything you pay for so you can budget accurately.

| Service | Cost | Purpose | Renewal Date |
|---------|------|---------|--------------|
| Claude Pro (or Max) | $20 or $100/$200 | Claude Code development | [DATE] |
| Twilio | ~$1-20 | Phone number + call minutes | [DATE] |
| OpenAI / Anthropic API | Variable | AI voice pipeline (as-you-go) | N/A |
| GitHub | $0 | Code hosting (private repo, free tier) | N/A |
| Cursor | $0 | Free tier | N/A |
| **Total (current)** | **~$25-125/mo** | | |

### 10.2 Available Credits / 可用津贴

| Source | Amount | Purpose | Expiration |
|--------|--------|---------|------------|
| CodePath | $50 | Anthropic API credits (`console.anthropic.com`) | [Check with CodePath] |

**Important distinction / 重要区分**:
- Claude Pro/Max subscription = **your chat/coding tool** (Claude Code, claude.ai)
- Anthropic API credits ($50) = **for your product** (backend code calling Claude)
- These are separate. Do not confuse them.

### 10.3 Anticipated Additional Costs / 预期新增成本

| Service | Est. Cost | When Needed |
|---------|-----------|-------------|
| Domain name (e.g., orderai.com) | $12-30/year | Month 1 |
| Vercel deployment | $0 (free tier) | Month 1 |
| Backend deployment (Railway/Fly.io) | $0-5/month | Month 2 |
| PostgreSQL database | $0-15/month | Month 2 |
| Email service (Resend/SendGrid) | $0-20/month | Month 2 |
| **Total additional** | **~$1-70/mo** | |

### 10.4 Financial Discipline / 财务纪律

- 📌 **Cancel unused subscriptions monthly** — audit on the 1st of every month
- 📌 **Prefer usage-based pricing over flat fees** for pre-revenue services (Twilio, OpenAI API)
- 📌 **Never use API credits for personal chatting** — that's what the $20 Pro is for
- 📌 **Budget rule**: Total infrastructure < $150/month until first paying customer

---

## 11. Key Learnings / 关键经验总结

Lessons learned during MVP development. Written for your future self and future collaborators.

### 11.1 Product Learnings / 产品经验

1. **Multi-vertical is a moat, not a distraction** — the "one product for 4 industries" thesis differentiates from single-vertical competitors like Slang.ai (restaurants only).

2. **Multilingual is not a feature, it's positioning** — competitors treat non-English as afterthought. For US immigrant-owned SMBs, it's the primary reason to buy.

3. **Founder-market fit beats product perfection** — the founder's POS sales background means they understand shop owner pain deeper than any technical competitor.

### 11.2 Technical Learnings / 技术经验

1. **`react-i18next` beats `next-intl` for our case** — we wanted client-side switching with localStorage and no URL restructuring. `next-intl` forces `/en/`, `/zh/` URL structure.

2. **Light theme > dark theme for SMB SaaS** — most SMB owners (30-55 age range, non-technical) subconsciously trust light/warm designs more than dark futuristic ones.

3. **Plan tier names should stay in English** — following Notion/Vercel/Linear conventions. Localizing "Growth" to "成长" makes it feel like a common word, not a product name.

4. **Pre-recorded sample calls beat real-time demos for MVP** — Vapi, Retell, Bland AI all use pre-recorded. Real-time WebRTC adds 2-3 weeks of work with no user-visible benefit.

### 11.3 Vibe Coding Learnings / 与 AI 编程的经验

1. **Force AI to plan before acting** — every complex task, insist on "show me your plan first". Prevents rogue changes.

2. **Explicitly list what NOT to do** — the "NOT IN SCOPE" section of every prompt is more important than the "in scope" section.

3. **Commit obsessively** — every meaningful step should be a git commit. This is your "save point" against AI mistakes.

4. **Use `/rewind` for clean rollback** — do not tell the AI "ignore my last message". It still remembers. `/rewind` is a true erase.

5. **Discuss architecture before coding** — 30 minutes of upfront design discussion saves 5 hours of implementation dead-ends.

6. **Element cleanup matters** — after AI answers a meta question (like "how do I cancel subscription"), use `/rewind` to remove that from context. Keeps future conversations focused.

### 11.4 Business Learnings / 商业经验

1. **Ambition creep is the enemy** — the original 7-item 3-month plan was unrealistic. Prioritizing to 3 core Month 1 goals saves the project.

2. **Launched imperfect > perfect unlaunched** — get a public URL up in Month 1, even if half-broken. Everything else can iterate.

3. **Backup before subscription changes** — always push to GitHub before cancelling or downgrading any dev tool subscription.

---

## 12. Related Documents / 相关文档

Other reference documents in this project:

| Document | Location | Purpose |
|----------|----------|---------|
| **This handbook** | `docs/OrderAI-项目总手册.md` | Master reference (this file) |
| **Sample Call handbook** | `docs/OrderAI-SampleCall实施手册.md` | Step-by-step guide for the audio feature |
| **README.md** | Project root | Quick project intro (create if missing) |
| **CLAUDE.md** | Project root | Standing instructions for Claude Code (auto-loaded) |

### Suggested CLAUDE.md content / 建议的 CLAUDE.md 内容

Create a `CLAUDE.md` at project root with this content so Claude Code auto-reads it every session:

```markdown
# CLAUDE.md — Standing Instructions

## Project
This is OrderAI: an AI phone ordering SaaS for US local businesses
(restaurants, nail salons, spas, clinics). Marketing website is a
Next.js single-page landing with i18n (EN/ZH/ES/VI).

## Founder context
- Non-engineer transitioning from POS sales
- Learning through vibe coding
- Needs clear plain-language explanations
- Prefers step-by-step guidance

## Golden rules for you (Claude Code)
1. Always propose a plan before modifying files
2. Wait for explicit approval before large changes
3. Explain in plain language, not jargon
4. When uncertain, ask instead of guessing
5. Commit-ready code — no half-finished features
6. Read docs/OrderAI-项目总手册.md at start of every session
   for full project context

## Not in scope by default
- Dark theme conversion (light theme is intentional)
- New pricing plan names (keep Starter/Growth/Pro in English)
- Third-party audio libraries (use native HTML5 audio)
- URL-based i18n routing (localStorage-based is intentional)
```

---

## 📌 Document Maintenance / 文档维护

**When to update this handbook / 何时更新本手册**:

- ✅ After every completed milestone (Month 1, 2, 3 launches)
- ✅ After any major technical decision change
- ✅ When you add a new team member (they should be able to onboard from this doc)
- ✅ Before any investor conversation (make sure "Current State" is accurate)
- ✅ Whenever you catch yourself explaining the project verbally — write the explanation here instead

**Version log / 版本历史**:

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-08-11 | xiaoenbi1987 | Initial creation post-multilingual-launch |

---

**End of Document / 文档结束**

> 💡 **Save this file to `D:\cursor\OrderAI\docs\OrderAI-项目总手册.md` and commit it to Git.**
> 💡 **把此文件保存到 `D:\cursor\OrderAI\docs\OrderAI-项目总手册.md` 并提交到 Git。**

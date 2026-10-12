# Beyond the Verifier: Authority and Reachability in Self-Improving Agents

**Paper Outline v0.4**（v0.3 的叙事重排；v0.3 与 v0.2 见 git 历史）

---

## 0. 相对 v0.3 的重排说明（写作备忘，不进正文）

v0.3 的内容基本正确，但顶层叙事是从 v0.2 骨架上改出来的，遗留两处断裂：

1. **§3 substrate 挡在 verifier gap 与 deposit 之间**。verifier 是硬边界 → 然后讲载体 → 再讲 deposit，中间那一跳没有逻辑必然性。substrate 不是与 deposit 并列的话题，它是 deposit 的**载体要求**，应当由 deposit 推导出来。
2. **reflection 被拆在 §5.3 与 §7 两处**。这是因为旧骨架把 routing 当第二支柱，reflection 只能寄生在里面。既然 reflection 已确认为承重机制，它必须有独立且唯一的一节。

v0.4 的顶层叙事改为一条直线：

```
问题：verifier 是硬边界（§2）
  ↓ 若选择不能来自测量，就必须来自可追责的判断
答案：judgment deposit（§3）
  ↓ 但一次沉积的判断要真的治理未来行为，需要三个条件
条件：可达 / 相容 / 可修（§4 提出，§5 §6 展开）
  ↓ 这套机制自身也是行为定义文本
闭合：reflexive bootstrapping（§8）
```

节次映射：

| v0.3 | v0.4 |
|---|---|
| §3 Behavioral Substrate as Given（独立节） | 折入 §3.2，约 400 词，作为 deposit 的载体要求 |
| §4 Judgment Deposit | §3 |
| §5.0 三段分工 | 升为 §4，扩为「有效 deposit 的三个条件」框架节 |
| §5.1–5.2 routing | §5 |
| §5.3 reflection | 升为独立的 §6 |
| §6 Trusted Kernel | §7 |
| §7 Reflexive Bootstrapping | §8，改由「§5 §6 的机制自身也是 substrate」引出 |
| §8–§10 | §9–§11 |

## 0.1 定位与写作约束

- 类型：position paper，Zenodo preprint，稳定 DOI。目标篇幅 10,000–12,000 词，正文 11 节。
- **学科定位是 human-AI collaboration，不是 agent architecture**。Related Work 必须同时覆盖 agent 系统侧与人类监督侧；只写前者会被后者读者判为重新发明。
- 不含实验、案例与实现名称。所有效果陈述写成假设或条件命题。
- 不把 Prime Agent 一类系统稻草人化：它们在其目标域内是正确的；本文的主张是**其适用条件是 verifier 可得**，而大量高价值场景不满足该条件。
- 术语纪律：`judgment deposit`、`verifier-scarce regime`、`behavioral substrate`、`behavioral locality`。`behavioral context closure` 不单列定义，只作为 locality 定义内部的名词。
- **术语预算**：全文新术语上限四个（judgment deposit、verifier-scarce regime、semantic-fidelity premise、behavioral locality）。其余一律使用既有词汇。
- CMP 引用改用 Zenodo DOI 版本（`10.5281/zenodo.21331759`, v1.0.1），替换现有 `@online` 条目。
- 承认既成事实、不作为本文主张的两点：behavioral coverage 可以很宽（continual harness 一族）；学习机制本身可被修改（Self-Harness、DGM）。这两点在 §2.1 与 §8 开头各交代一次即可。

## 0.2 一句话论点（Abstract、§1、§11 各出现一次变体）

> 自我改进的当代解法把「一次修改是否应当留下」交给一个可验证的分数；在没有这种分数的领域，权威只能来自可追责的人类判断。而判断要真的治理未来行为，就必须像代码一样被存放和被寻址——它必须可达、相容、且可在证据下修正。

## 0.3 全文中轴（图 1，§1 亮出）

```
        ┌──────────────────────────────────────────────┐
        │                                              │
   trace ──reflection──> evidence ──judgment──> authority ──routing──> behavior
        │                            deposit                            │
        └──────────────────────────────────────────────────────────────┘
```

- 四段职责，串联不可缺：**trace 只提供事实；reflection 把事实变成证据；deposit 把证据变成权威；routing 把权威变成实际生效的行为。**
- **必须在图注中说明一件事**：这是一个环，而论文的**叙述入口在 authority 这一段**，因为缺口在那里（§2 论证为何它不能来自分数）。叙述顺序与回路顺序不同，不是笔误。后续 §5 展开 routing、§6 展开 reflection，正是回到环上补齐其余各段。
- 此图取代 v0.2 的公式化记号。

## 0.4 四项贡献

1. **verifier gap 作为分析边界**（§2）：刻画自改回路的隐含存在条件，区分三种强度的失效（经验 / 统计 / 构成），提出 semantic-fidelity premise 说明剩余不确定性的性质正在迁移，给出按剩余不确定性类型分流的 selection-mechanism triage。
2. **judgment deposit**（§3）：在无 verifier 时使一次修改获得持久权威的机制。权威必须被分配而非被计算（阿罗）；与 verifier selection、RLHF、Constitutional AI、code review、ADR、判例法逐一区分。
3. **有效性的三个条件及其实现**（§4–§6）：可达（routing，因语义保真度随加载长度衰减而成为保真前提而非成本优化）、相容（reflection 的冲突检出）、可修（reflection 的证据提取与 deposit 的撤回条件）。
4. **治理闭合**（§8）：§5 与 §6 的机制自身也是行为定义文本，同一 deposit 机制适用；并指出其代价是可观测性下降而非不稳定。

---

## Abstract（约 230 词，最后写）

1. 现状：自我改进的 agent harness 已能改写自身的提示、技能乃至控制逻辑；「能改什么」不再是瓶颈。
2. 转折：这些系统用同一种方式决定一次修改能否留下——在可验证任务上打分。
3. 问题：该方式的前提是存在廉价、及时、忠实、无争议的 verifier。其失效有三种强度，其中统计性失效不随 verifier 质量改善而消失，构成性失效在原则上不可消除。
4. 风险：缺 verifier 时以代理指标替代，会把 Goodhart 效应从模型层推进到 harness 层——修改持久、结构性、且来源可被抹除。
5. 前提：与此同时，模型能力的提升正在把剩余不确定性从「这样写模型会不会照做」迁移到「这条规则本来该不该这样」；后者恰是 verifier 无法裁决而人类判断胜任的部分。
6. 主张：定义 judgment deposit——把理由、证据、辖域、责任人与撤回条件持久写入 behavioral substrate 的可追责裁决。权威必须被分配而非被计算。
7. 条件：一次沉积的判断要真的治理行为，必须可达、相容、可修。可达由 context routing 提供，且因语义保真度随加载长度衰减，routing 是治理生效的前提而非效率措施；相容与可修由 reflection 从 trace 中检出冲突并提取证据提供。
8. 闭合：这套机制自身也是行为定义文本，故同一治理机制适用。
9. 边界：position paper，七条可证伪假设与研究议程；不主张在 verifier 充分的领域优于 benchmark 驱动的自改。

Keywords: self-improving agents; verifier scarcity; judgment deposit; human oversight; contestable AI; behavioral substrate; context routing; human-AI collaboration.

---

## §1 Introduction: What May Persist（约 1,000 词）

**本节要建立的事**：让读者在第一页接受「能改什么已经解决，什么允许留下还没解决」，并看到这是一条能力边界而非工程细节。

- 开场：自我改进 harness 的进展。明确承认 coverage 与 reflexive depth 已被验证，不作为本文主张。
- **枢纽段**：这些系统共享一个未被讨论的结构——proposal 由搜索产生，**authority 由分数授予**。分数缺席时，整个回路没有替代的选择机制。
- 核心问题：**When no verifier can settle whether a self-modification is an improvement, what may make it persist, and how does it come to govern the situations it was meant to govern?**
- **亮出中轴（图 1）**，并说明叙述入口在 authority 段、与回路顺序不同的理由。
- 一句话预告全文骨架：问题（§2）→ 答案（§3）→ 答案成立的三个条件（§4–§6）→ 机制作用于自身（§8）。
- **反驳预防（必须在此，不能拖到 Related Work）**：本文的主张不是「给 DGM 加一个人工审批门」。门是一次性的布尔量；deposit 是进入 substrate、可被未来路由取回、可被后续证据收窄或撤回的持久 artifact。此绑定是本文与「human-in-the-loop 版自改系统」的分界线。
- 根本动机（so-what）：人类精力有限。当 agent 的产出速率超过人类逐条审查的能力，注意力必须从审查单次输出移到审查对未来行为的修改——但这只有在判断本身可复用时才成立。
- 四项贡献 + roadmap。

**避免**：产品或实现名称；防御性否定句开场；在此节讲 substrate 或 routing 的机制细节。

---

## §2 The Verifier Gap（约 2,000 词，贡献 1）

**本节要建立的事**：verifier 不是这些系统的一个组件，而是它们的存在条件；它的缺席在一类场景中不可修复；而与此同时，人类判断顶上来的合法性正在增强。全节以「所以必须换一种授权机制」收尾，直接交棒 §3。

### 2.1 自改回路的共同结构

- 抽象出统一形式：`propose variant → evaluate with V → retain if improved`。ADAS、STOP、DGM、Self-Harness、Continual Harness 在修改对象（代码 / 提示 / 控制逻辑）上不同，在这一结构上相同。
- **顺带一次性交代 coverage 已成既成事实**：这些系统的可修改范围已达 harness 代码层，本文不再争论边界大小。此后不再提。
- 关键观察：**该结构把正当性外包给了 V**。系统内部没有任何其他机制回答「这次修改凭什么留下」。这不是缺陷，是设计选择——它换来了完全的自动化。

### 2.2 V 需要满足的七项条件（表 1）

| 条件 | 含义 | 典型满足域 |
|---|---|---|
| availability | 该行为维度上存在任何信号 | 代码、游戏、数学 |
| cheapness | 可对每个候选反复运行——搜索需要大量采样 | 单测、模拟器 |
| latency | 反馈在改进回路的时间常数内到达 | 秒到分钟 |
| fidelity | 与真实目标相关且不易被博弈 | 形式化正确性 |
| completeness | 覆盖所有重要维度，含任务集未表示的维度 | **弱满足** |
| stability | 学习期间目标不漂移 | 静态 benchmark |
| uncontested | 各利益方对「更好」有共识 | 通过 / 不通过 |

- ARC-AGI-3、SWE-bench 一类环境近似同时满足七条——当前进展集中于此不是巧合。
- **completeness 单独一段**：即便在代码域，verifier 通常只覆盖功能正确性，不覆盖可维护性、依赖风险、团队约定。**verifier gap 不是「别的行业的问题」，它在代码 agent 内部同样存在。** 这一段防止读者把本文误读为非技术领域专用。

### 2.3 verifier-scarce regime 的刻画

沿六个轴，每轴一句抽象例证，不点名机构：

- **delayed / diffuse consequence**：一条上报规则的效果数月后才显现，且与其他原因纠缠。
- **irreversibility**：无法对分诊规则或裁员沟通策略做 A/B。
- **contested objective**：多方利益，对「更好」存在正当分歧，不存在单一标量。
- **sparse recurrence**：每类高后果情境一年只发生数次，无统计功效。
- **unpriced externalities**：成本落在回路之外的人身上。
- **judgment-constituted correctness**：正确性由一个可追责的决定**构成**，而非由测量**发现**。

### 2.4 三种强度的失效（本节论证核心，图 2）

必须区分，否则「硬边界」会被「等 verifier 变便宜就好了」轻易化解：

1. **经验性失效（soft）**：verifier 原则上可构造，只是当前昂贵或缓慢。会随工程与算力改善。**本文明确不以此为据。**
2. **统计性失效（hard-ish）**：高后果情境稀疏且异质，即便 verifier 完美也没有足够样本在候选间做选择。这是样本复杂度边界，**不随 verifier 质量改善而消失**——更好的尺子救不了只能量三次的东西。
3. **构成性失效（hard）**：判据本身是一项规范承诺，测量它预设了已经决定它。任何数据量都不能 settle。**这是真正的硬边界，本文立论所在。**

写作要点：明确放弃第 1 类。这个自我设限显著提高论证可信度。

### 2.5 verifier substitution 与 harness 层的 Goodhart

- 缺 verifier 时的现实做法：换代理指标（LLM-as-judge、参与度、成本、延迟）。
- 自改回路随后优化代理指标。与模型层 reward hacking 相比，**harness 层后果更严重**：修改持久、结构性、跨任务生效，且若 harness 可自改，其来源记录亦可被抹除。
- 结论强化：在 verifier-scarce regime，自动化自改**不只是无益，而是主动有害**。这比「此处需要人类」有力得多，并直接支撑 H1。

### 2.6 The Semantic-Fidelity Premise（图 3）

**本小节要建立的事**：不只是「有些事不能被测量」，而是「越来越不需要被测量」——过去逼迫一切过实验的那类不确定性，其权重正在下降。这是人类判断能够顶替 verifier 的合法性来源。

- **两类问题曾被纠缠**：(a) 这条规则对不对（规范性）；(b) 这样写模型会不会照做（机械性）。prompt engineering 时代 (b) 主导，而 (b) 只能由数据回答，于是一切都必须过实验。
- **前提陈述（限定写死，防止过度泛化）**：对于本文讨论的这类行为定义指令——陈述性规则、判据、辖域条件——在合适的具体度上给到前沿模型时，优化表述的边际收益已远低于把内容想对的边际收益。
- **写成权重迁移而非相变**：机械性不确定性并未消失，其权重随模型能力单调下降，但存在**不随能力提升而消失的下界**——长上下文衰减、位置效应、格式敏感。此下界是永久的。
- **推论一（立论关键一步）**：若 (b) 的权重坍缩，剩余的主要是 (a)；而 (a) 恰是 §2.4 构成性失效中 verifier 原则上无法裁决、同时又是人类领域专家最擅长的部分。因此「人类判断可替代 verifier」不是诉诸权威，而是**关于剩余不确定性性质的推论**。
- **推论二（对 §3 承重）**：没有这个前提，deposit 治理的是一份文档而非一个行为。「审查文本即审查行为」这一等式完全由语义保真度支撑。
- **推论三（对 §5 承重）**：既然保真度随加载长度衰减，**过量加载会侵蚀该前提本身**。前提的不完美恰好论证了 routing 的必要，详见 §5.1。
- **三处必须自行切掉的过度主张**：
  1. 表述不变性 ≠ 指令遵从 ≠ **冲突消解**。一条规则可单独正确清楚，却因与 substrate 中其他条目交互而产生错误行为。语义保真消解了**局部**的经验问题，未消解**系统**的经验问题——后者交给 §6。
  2. 人擅长判断「这条规则是否站得住」，不擅长判断「它多频繁触发、和什么冲突、挤掉了什么」。这一让步在 §6 兑现。
  3. 不主张 prompt engineering 已死；主张严格限定在上面写死的那句范围内。
- 对应 H0（§9）。该前提本身可测且可证伪。

### 2.7 Selection-mechanism triage（表 2，本节正面产出与交棒）

- verifier-rich 与 verifier-scarce 是**制度而非领域**：同一个 coding agent 内，单测覆盖的行为是前者，「何时该向用户提问」「何时该升级」是后者。
- 分流轴不是「verifier 是否可得」，而是**剩余不确定性属于哪一类**：

| 剩余不确定性 | 问题形式 | 选择机制 |
|---|---|---|
| 机械的 | 这样做管不管用 | verifier（若可得）；权重随能力下降但有永久下界 |
| 规范的 | 本来该不该这样 | **judgment deposit（§3）** |
| 分布 / 交互的 | 多频繁、与谁冲突、挤掉什么 | 分阶段试行 + trace + reflection 检出（§6）+ expiry |

- 好处：给出第三条路，避免「要么打分要么人审」的假二选一；第三类承接系统层经验不确定性，并把 §6 预告给读者。
- **交棒句**：若选择不能来自测量，就必须来自可追责的判断。下一节问的是：这样一次判断需要以什么形式存在，才能不只解决眼前这一次。

---

## §3 Judgment Deposit（约 1,900 词，贡献 2，主贡献）

### 3.1 从审批到沉积

- reflection 与 search 产生 candidate；**权威是一项独立的、可分配后果的行为**。
- 定义：
  > A judgment deposit is the durable and attributable incorporation of a human decision—its rationale, evidence, scope, accountable party, and revisit or expiry conditions—into the behavioral substrate and its governance history.
- 五个字段各自缺失的后果，逐条一句。
- **accountable party 的理论依据（阿罗）**：阿罗证明的不是「价值判断没有客观标准」，而是**不存在满足若干合理条件的偏好聚合规则**——集体排序不能从个体偏好算出来。三个后果：(i) 直接命中 RLHF 一类以聚合偏好为权威来源的路线，其缺陷是原理性的而非数据不足；(ii) 推出的不是弱主张「需要人类输入」，而是强主张 **authority must be allocated, not computed**；(iii)「被指定且承担后果」正是 accountable party 字段的存在理由。此论证同时预先化解「让模型自己评判规则好坏」的反驳，§10 只需一句回指。
- 关键性质：**否决同样是沉积**。带理由沉积的拒绝可防止同类提议原样复现——这是 deposit 相对审批门最容易被理解的增量。

### 3.2 沉积在哪里：behavioral substrate 作为载体要求（约 400 词，**由 deposit 推导，不独立成节**）

- 提问式引入：一次判断要能被后续复用、收窄与撤回，它必须被写在某处。这个「某处」需要满足什么？
- 由 deposit 的五个字段逐一反推载体属性：**addressable**（否则辖域无从指向）、**inspectable**（否则理由无从复核）、**versioned**（否则撤回无从定位）、**revisable**（否则收窄不可能）、**causally active**（否则记录与行为脱钩）。
- 命名为 behavioral substrate，一句带过其与 model / harness / context 三层的关系。
- **保留 coverage 表但改变用途（表 3）**：从「不同系统能改什么」改为「substrate 各层 × 当前 coverage × **verifier availability**」——让表回指 §2 而非重开 coverage 话题。表的读法是：**越往上层，coverage 越新近达成，verifier 越不可得**——这一句话把 §2 与 §3 缝在一起。
- 明确：不要求 Markdown 或自然语言；结构化与可执行表示同样满足这些属性。
- 归因链（trace → 定位 → 提议）压到一段，作为 evidence 字段的可得性前提。

### 3.3 判例法类比（本节最有说服力的部分）

- 判例法是**在没有 verifier 的条件下让个案判断获得持久权威**的成熟机制，且具备本文需要的全部要素：ratio decidendi 对应 rationale，material facts 对应 scope，distinguishing 对应后续收窄，overruling 对应撤回，署名裁决对应 accountable party。
- 比 ADR 更贴：ADR 有理由无辖域，也没有区分技术。
- **类比的限度**：判例法有层级法院与既定管辖，agent substrate 没有；辖域冲突的裁决者必须被显式设计。这一句挡住「过度类比」的批评，并预告 §11 的未解问题。

### 3.4 与相邻机制的区分（表 4）

| 机制 | 授权对象 | 授权依据 | 保留辖域 | 可被后续证据收窄 |
|---|---|---|---|---|
| verifier-based selection | 一个变体 | 分数提升 | 否 | 仅靠再次打分 |
| RLHF | 模型参数 | 聚合偏好 | 否 | 需重训 |
| Constitutional AI | 训练过程 | 显式原则 | 原则级 | 改原则后重训 |
| code review | 一次提交 | 评审者意见 | 否（合并即消失） | 否 |
| ADR | 一项架构决策 | 记录的理由 | 弱 | 靠新 ADR 取代 |
| 判例法 | 一类未来情形 | 署名裁决 + 事实要件 | 是 | 是 |
| **judgment deposit** | 一次跨 episode 的行为修改 | 可追责裁决 + trace 证据 | 是 | 是（含 expiry） |

### 3.5 deposit 使回滚可理解

- 版本历史回答「改了什么」，deposit 回答「凭什么允许改」。
- 因果回滚 vs 整体回退：带辖域的 deposit 支持定位到失效假设并只撤该决定。
- **与 §2.5 呼应**：benchmark 选出的 harness patch 没有辖域陈述，失效时影响全局且难归因；deposit 的失效**优雅降级**。这是 H1 的机制解释。

### 3.6 对称限制

- 人类会固化偏见、被流畅文本锚定、把 deposit 做成橡皮图章。此处**引实证文献而非自我警示**（automation bias、rubber-stamping）。
- 立场：deposit 是可追责、可争议的锚点，不是真理终点。接 contestable AI design。
- 立场句（全文只出现一次）：AI-native work does not make human judgment obsolete. It makes judgment infrastructural.

---

## §4 What Makes a Deposit Effective（约 700 词，全文枢纽，**篇幅短但位置关键**）

**本节的唯一任务**：把「有了 deposit 就够了吗」这个读者必然产生的疑问，转成三个具名条件，并把后续两节安排明白。不展开机制，只立框架。

- 起点：一次沉积的判断可以是正确的、被记录的、有辖域的，**却仍然不治理任何行为**。三种失效方式，各对应一个条件：

| 条件 | 失效方式 | 由谁提供 |
|---|---|---|
| **可达 reachable** | 辖域内的情境从未把它取进上下文；或取进来了但被淹没在过量上下文中而失去效力 | context routing（§5） |
| **相容 coherent** | 它与另一条同样被沉积过的判断在同一情境下矛盾，静默地被覆盖 | reflection 的冲突检出（§6） |
| **可修 revisable** | 它所依赖的假设已不成立，但没有任何机制让这一点显形 | reflection 的证据提取 + deposit 的 expiry（§6 + §3.1） |

- **三个条件不是并列的工程清单，而是有依赖顺序的**：不可达则相容性无从谈起（不同时在场就不会冲突）；不相容则可修性失去对象（不知道该修哪一条）。这个顺序决定了 §5 在 §6 之前。
- **回到中轴图**：§3 补齐了 authority 段，§5 补齐 routing 段，§6 补齐 trace → reflection → evidence 段。至此环闭合。
- 一句话预告 §7：三个条件都由可修改的机制提供，因此必须有一层不可被学习过程修改的恢复基础。

---

## §5 Reachability: Context Routing（约 1,400 词）

**入口是治理动机，不是检索动机**：一条在未来适用情境中取不到的裁决，等于没有做出这项裁决。整节用治理语言写。

### 5.1 为什么 routing 是保真前提而非成本优化（本节关键升级，须先于 CMP）

- **两种失效**：under-reach（辖域内情境未取到该裁决）与 over-reach（防御性全量加载）。
- 传统上 over-reach 被论证为**成本**问题（token、延迟、噪声）。该论证有致命弱点：**总能被「token 会变便宜」化解**。
- 本文改用**保真度**论证：§2.6 已确认语义保真度随加载长度衰减，且该衰减有不随模型能力消失的永久下界。因此过量加载会侵蚀「审查文本即审查行为」这一等式本身——**被审议过的裁决在实际推理中悄悄失去效力，且不报错**。
- 核心命题：**routing 是 deposit 治理能够生效的必要条件，不是效率措施。**
- 副产品（图 5）：给 H3 一个比成本交叉点更硬的可测量——**辖域内情境下，加载上下文长度 × 裁决被实际遵从率**。直接测治理有效性，而非间接测遗漏率。

### 5.2 CMP 迁移与三处不同构

- **迁移声明（交代一次，后文不再重复）**：把 substrate 当作代码库来设计。CMP 主张正确的修改需要充分上下文，好的架构使这份上下文更便宜获得 [zhang2026cmp, DOI 10.5281/zenodo.21331759]。本文迁移其结构：natural entry point、modification closure、stopping boundary。**因此本文不承担论证该原理正确的义务，只承担论证其同构性与差异。**
- **三处不同构（本节真正的新意）**：
  1. 代码的可达性由调用图**免费**给出；行为文本没有调用图，route 必须被创作与维护——这是 H3 中 route maintenance cost 的来源。
  2. 代码的 modification closure **编译期可验证**；behavioral closure 只能事后从 trace 推断，故只能是可证伪的假设而非可证明的集合。
  3. 代码没有 authority scope；behavioral artifact 有——一条规则可以正确却不该管这件事。**这一条把 routing 与检索彻底分开。**
- **behavioral locality** 定义：一次裁决的辖域可从其治理情境的每个合理入口到达。closure 只作为定义内部名词出现。

### 5.3 路由机制（图 4）

- 区分 `must govern` / `may inform`：required guidance 与 selectable precedent 的 loading strength 不同。
- **三类 route evidence**：explicit（显式选择、进入 procedure）、structural（tool、resource、event、已加载 artifact 的机器可验证关系）、situational（agent 表达检索意图，工具搜索 compact metadata 返回候选）。
- **摘要边界**：AI 摘要只用于发现，不具行为权威；被选中的裁决必须全文加载。安全与权限相关裁决不得只依赖 situational route。
- **modify-time integration**：一次 deposit 不完整，除非同时决定 owner、scope、applicability、discovery route、required closure、stopping boundary，以及与既有裁决的 revise / narrow / supersede 关系。**正确内容置于错误辖域或无可达路径，与错误内容同样是缺陷裁决**——这是 §3 与 §5 的缝合句。
- 对应 H3。

---

## §6 Coherence and Revision: Reflection（约 1,300 词，**reflection 唯一的家**）

**本节要建立的事**：§2.6 让步 1 与让步 2 在此兑现。单条判断的正确性人可以在无数据条件下评定；多条判断的**交互**与一条判断的**频次后果**不能。二者都不靠事先预见解决，靠事后从 trace 显形。

### 6.1 为什么冲突不是 routing 能解决的

- routing 决定哪些 artifact 同时在场——它**划定冲突面**，但不消解冲突。
- 冲突在 substrate 增长时是必然的，且随共同在场的 artifact 对数增长。
- 三段分工（表 5）：

| 环节 | 职责 | 不做什么 |
|---|---|---|
| routing | 决定哪些裁决同时在场，划定冲突面 | 不消解冲突 |
| **reflection** | 观察在场内容与自身行为，检出冲突并提议删除 / 修改 / 收窄 / 显式排序；从 trace 提取频次与交互证据 | 不授予权威 |
| deposit | 对提议授予、收窄或拒绝持久权威 | 不预见交互 |

### 6.2 冲突检出（兑现让步 1）

- reflection 观察同时在场的表述与自身实际行为，检出相互矛盾、相互覆盖、或事实上从未生效的裁决。
- 处理方式不是事先预见，而是**让交互在真实 trace 中显形，再提取为可审议的证据**。这使系统层经验不确定性有了归宿，且不要求 verifier。
- **自曝限度**：只有实际同时在场并产生可见分歧的冲突才可被检出；潜伏冲突（两条规则从未同时被触发）不可见。不主张完备性。
- 对应 H4。

### 6.3 证据提取与路由修复（兑现让步 2）

- 人不擅长估计频次与挤出效应；reflection 从 trace 中统计这些量，作为 evidence 字段附在提议上。**judgment 仍然只负责正确性与辖域。**
- 路由修复是同一 lens 的另一触发条件：trace 记录 loading reason、search intent、late discovery、unused context、human rescue；反复出现的检索路径应沉淀为显式 route，长期在场但从未被援引的候选应收窄。
- **强调这不是两个机制**：冲突检出与路由修复共享同一输入（trace）与同一治理出口（deposit），是一个 lens 的两种触发条件。
- 对应 H5。

### 6.4 生命周期成本（表 6）

- 分别报告 incorporation、route maintenance、reflection、retrieval、context、omission、governance、recovery。
- 量纲不可通约，**用表格呈现，删去 v0.2 的向量记号**（既然声明不可加和，向量形式误导）。
- 收益侧：避免的 downstream loss、减少的重复搜索与上下文、节省的常规人类注意力。任何标量净值主张必须先声明领域权重。

---

## §7 The Trusted-Kernel Boundary（约 700 词）

- 承接 §4 末句：三个条件都由**可被修改的机制**提供，故必须有一层不可被学习过程修改的恢复基础。
- 三层：fixed kernel / constitutional prompt / revisable substrate。
- **核心转移**：在无 verifier 时，kernel 承担的是 **recovery 而非 selection**。它不判断修改好坏，它保证任何修改都可被检测、归因与撤销。这与 §2.5 直接呼应——**正因为选择机制可能被腐蚀，恢复机制才必须在其之外**。
- constitutional prompt 不可被反思修改的理由：否则可重塑约束自身的权威。
- kernel 大小是设计主张而非定理；边界取决于后果、可逆性、对抗暴露与评审者容量。

---

## §8 Reflexive Bootstrapping（约 800 词，贡献 4）

**由 §5 §6 自然引出**：路由规则、冲突 lens、证据提取方法，本身也是行为定义文本。它们凭什么不受同一治理？

- 一次性承认 Self-Harness、STOP、DGM 已证明学习机制可被修改，本文不主张此为新发现。
- 定义 Reflective Bootstrapping：选定的 lens、attribution、reflection procedure、conflict lens、routing rule 进入同一 substrate。
- **本节的真正主张**：这种深度**不引入新的授权问题**——一条 lens 与一条任务判据都是行为定义文本，同一 deposit 机制适用。治理方案在深度维度上闭合。
- **但引入一个新脆弱点，必须自曝**：既然冲突检出由 reflection 承担而 reflection 自身可被修改，则一次错误的 lens 修改可能使系统**停止检出某类冲突**，且该失效是**静默的**。这是 §7 kernel 必须保留 provenance 与回滚的直接理由，也说明 reflexive depth 的代价不是不稳定而是**可观测性下降**。
- **深度加剧 verifier 问题**：学习机制的效果比任务规则更间接、更延迟、更难归因，因而更深地落入 verifier-scarce regime。这解释了为何自改学习机制在 benchmark 环境外少见成功——回扣 §2。
- 自递归通过更厚的 trace 实现，不设二阶 agent；由 trigger 自然终止。
- 对应 H6。

---

## §9 Falsifiable Hypotheses（约 1,200 词，表 7）

顺序与节次对齐。每条给命题、预测方向、可观测量、证伪条件。不写实验协议。

- **H0 Semantic-fidelity premise（前提，须先于 H1）**：同一内容的表述变体间的行为方差随模型能力提升而下降，但不收敛到零——存在由上下文长度与位置效应决定的下界。指标：变体间行为方差、方差随能力的趋势、方差随加载长度的增长曲线。证伪：方差不随能力下降（则全文立论受损）；或方差不随加载长度增长（则 §5.1 保真论证失效，routing 退回成本论证）。**依赖方向对本文有利：模型越强，立论越成立。**
- **H1 Verifier-degradation（核心，对应 §2）**：随 verifier 保真度下降（噪声、延迟、代理偏移），benchmark-selected 自改净收益衰减并出现 harness 层 Goodhart；deposit-governed 持久化衰减更缓，失效更易归因与撤销。指标：净收益 vs 保真度曲线、代理指标与真实目标的背离、失效归因时间、回滚粒度。证伪：保真度扫描下两条曲线无差异；或 deposit 条件在低保真度下同样崩塌。
- **H2 Judgment-deposit（对应 §3）**：保留 rationale / evidence / scope / accountability 的裁决，比自动采纳或二元审批产生更少误泛化、更少重复纠正、更少不可解释回滚，且计入记录成本后仍为正。指标：误泛化事件、重复纠正、不可解释回滚比例、回归诊断时间、字段的**实际后续使用率**（而非填写率）。证伪：计入成本后无改善；或锚定与橡皮图章效应足以抵消。
- **H3 Reachability（对应 §5）**：预测 regime-dependent crossover。**因原理来自 CMP，本假设只承担迁移验证**。指标分两层：(i) 主——辖域内情境下加载长度 × 裁决遵从率；(ii) 代理量——适用 artifact 遗漏率、无关 token 率、到达充分上下文的时间、late discovery、global fallback、human rescue，及全部生命周期成本项。证伪：遵从率不随加载长度下降；或 compact memory / skill / 强 RAG 基线在增长区间内 Pareto 支配。
- **H4 Conflict-resolution（对应 §6.2）**：冲突数量随共同在场 artifact 对数增长；有冲突 lens 时残留率与由冲突导致的行为错误显著更低。指标：检出率、残留率、由冲突导致的错误、检出到消解的延迟。证伪：冲突不随规模增长；或 lens 不降低残留率——后者说明冲突消解无法靠 trace 观察完成，需静态分析或形式化手段。
- **H5 Attention-dividend（对应 §6.3 与根本动机）**：governed persistence 可把注意力从常规输出审查移到高后果的未来行为裁决，但存在成本前沿。**与 H0 呼应：语义保真度的永久下界为 dividend 设定上界**，故不可能无界增长。证伪：无成本单调收益；或在目标区间内净值持续为负。
- **H6 Reflexive-governance（对应 §8）**：学习机制进入同一治理机制时，其修改的误采纳率与回滚率不应系统性高于任务层修改。这是**闭合性检验**而非能力主张。新增可观测量：**lens 被修改后冲突检出率的变化**，用以捕捉 §8 指出的静默失效。证伪：方法层修改在同等治理下显著更不稳定，说明需要额外治理层。
- 最小 instrumentation：causal failure families、patch provenance、substrate versions、entry point、loading reason、search intent、closure、跨 episode outcome，**外加两个可操纵变量：verifier 保真度与加载上下文长度**。

---

## §10 Related Work（约 1,700 词）

**必须覆盖两侧，缺人类监督侧会被判为重新发明。**

### 10.1 Self-improving harnesses and the verifier assumption
- ADAS、STOP、DGM、Gödel machine；Continual Harness / Prime Agent、Self-Harness、LangChain 三层框架、externalization 综述。
- 指出共同结构与共同前提；明确承认其在目标域内有效。
- 定位句：本文不与之竞争能力，而是刻画其存在条件之外的区域。

### 10.2 Reward hacking, Goodhart, and proxy objectives
- 支撑 §2.5。区分模型层与 harness 层：持久性、结构性、来源可抹除。

### 10.3 Human oversight and delegated authority
- scalable oversight：产出速率超过审查能力时的注意力分配——H5 的正统出处。
- contestable AI design：与 deposit 的「可追责锚点而非真理终点」同构。
- automation bias / rubber-stamping 实证：用作 §3.6 的证据而非推测。
- RLHF、Constitutional AI：治理对象不同（训练信号 vs 运行时跨 episode 权威）；阿罗论证在此回指一句。

### 10.4 Organizational and legal precedents for durable judgment
- ADR、变更管理；判例法的 ratio decidendi / material facts / distinguishing / overruling。
- 取其结构而非其制度，交代类比限度。

### 10.5 Memory, skills, and retrieval as reactivation baselines（压缩，表 8）
- Reflexion、Generative Agents、MemGPT、Voyager、AWM；classic RAG、Self-RAG、CRAG、Adaptive-RAG、RAPTOR、GraphRAG、HippoRAG。
- **大幅压缩**：既然 routing 已明确为 CMP 迁移且服务于治理，无需大篇幅与 RAG 划界。核心一段：检索判断哪些证据有助回答查询，routing 判断哪些**已被裁决的承诺必须治理**该情境——检索文献不处理 authority 这个对象。

### 10.6 Learned principles and learnable methods（一段）
- MetaReflection、Agent-Pro、PRAct、APE、DSPy、Argyris double-loop。降为背景。

---

## §11 Limitations, Research Agenda, and Conclusion（约 1,300 词）

### Limitations
- position paper，H0–H6 均待检验。
- **核心论证依赖一个经验前提（semantic fidelity）**。正面承认，但指出**依赖方向有利**：该前提随模型能力提升而增强，故立论会越来越成立。这把弱点转为时间站在论点一侧。同时承认永久下界的存在，并说明该下界正是 routing 必要性的来源。
- **verifier gap 的分类本身可争议**：构成性失效的判定依赖规范立场，有人会主张一切判据终可操作化。承认之，并说明即便如此，统计性失效仍独立成立。
- **冲突消解依赖 trace 可观察性**：潜伏冲突不可见，不主张完备性。
- deposit 可能沦为文书成本；评审者可能被锚定；trace 与 proposal 可被投毒。
- route metadata 会腐蚀：required path 过宽、applicability 过期、structural trigger 固化旧模式。
- kernel 边界非定理；多 agent 下的 ownership 与并发裁决未解决；辖域冲突缺少判例法式的层级裁决者。

### Non-claims
- 不主张在 verifier 充分的领域优于 benchmark 驱动的自改；
- 不主张人类判断免于错误或偏见；
- 不主张 coverage 或 reflexive depth 是本文的发现；
- 不主张 deposit 能证明 behavioral closure 完整；
- 不主张 reflection 能检出全部冲突；
- 不主张 prompt engineering 已无必要——只主张其边际收益相对内容正确性已显著下降；
- 不主张任意语料检索优于 RAG；
- 不主张 substrate 必须采用自然语言；
- 不主张 agent 能安全地无限递归自改；
- 不主张 judgment deposit 不会被未来证据推翻。

### Research Agenda
- **H0 最易先做**：固定语义内容、生成表述变体、跨模型代际与跨加载长度测行为方差。成本低、结论清晰，且是其余各条的前提。建议列为第一项。
- **H1 价值最高**：构造可操纵 verifier 保真度的合成环境，扫描噪声、延迟与代理偏移，比较两种持久化的净收益曲线与失效归因成本。
- H2：automatic adoption / binary approval / full deposit 三条件比较，测字段的后续实际使用率。
- H3：寻找交叉点；基线含 compact memory、selective memory、explicit skill、description-selected skill、adaptive/graph/memory RAG；主指标为加载长度 × 遵从率。
- H4：构造已知冲突对的 substrate，测检出率与残留率，区分显性与潜伏冲突。
- H5：测 routine review displacement 与治理成本，检验 dividend 区间与 verifier-scarce 区间是否重合。
- H6：把 lens、attribution、conflict lens、routing rule 作为真实可变项，检验闭合性与静默失效的可检测性。
- 基础设施：closure detection、conflict/expiry、patch poisoning、multi-agent ownership、评审者界面（应暴露因果证据、受影响 artifact、预期影响范围与撤回条件，而非仅呈现 diff）。

### Conclusion
- 回答核心问题：分数缺席时，权威来自可追责判断；判断要成为基础设施，就必须被存放、被寻址、被保持相容、并可在证据下撤回。
- 沿叙事主线重述：verifier 是硬边界 → deposit 是替代的授权机制 → 可达 / 相容 / 可修是其成立条件 → 机制自身亦受同一治理。
- 回扣动机：人类注意力应从纠正本可被持久修复的问题，转向决定哪些修复值得塑造未来。
- 收束：用户通过 constitutional prompt 与可编辑 substrate 保持对运行时行为定义的最终控制；agent 可以提出对流程、路由乃至自身学习方法的修改，但不是其权威来源。

---

## 附：图表清单

| 编号 | 位置 | 内容 |
|---|---|---|
| **图 1** | **§1** | **全文中轴（环形）：trace → reflection → evidence → deposit → authority → routing → behavior。图注需说明叙述入口在 authority 段** |
| 表 1 | §2.2 | verifier 的七项条件 × 含义 × 典型满足域 |
| 图 2 | §2.4 | 三种强度失效的判定流程：可构造？→ 样本充足？→ 判据是发现还是构成 |
| 图 3 | §2.6 | 机械性 / 规范性不确定性的权重随模型能力迁移，及机械性的永久下界 |
| 表 2 | §2.7 | selection-mechanism triage：剩余不确定性类型 × 问题形式 × 选择机制 |
| 表 3 | §3.2 | substrate 各层 × 当前 coverage × verifier availability |
| 表 4 | §3.4 | judgment deposit 与六种相邻授权机制的区分 |
| **表 5** | **§4** | **三个条件 × 失效方式 × 由谁提供（全文枢纽表）** |
| 图 4 | §5.3 | explicit / structural / situational → 候选 → 全文加载 → closure |
| 图 5 | §5.1 | 加载长度 × 裁决遵从率的衰减曲线（示意），标出 over-reach 侵蚀治理有效性的区间 |
| 表 6 | §6.4 | 生命周期成本收益（取代 v0.2 的向量记号） |
| 表 7 | §9 | H0–H6 × 预测方向 × 可观测量 × 证伪条件 |
| 表 8 | §10.5 | memory / skill / retrieval / routed substrate 的适用区间 |

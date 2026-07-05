# Hold Reasoning Families

Status: Architectural proposal for discussion

Date: July 2026

## Purpose

The Hold Reasoning Model is beginning to show that individual reasoning capabilities naturally group into related families.

Rather than treating each capability as an isolated feature, Hold should consider whether reasoning families become a first-class architectural and governance concept.

Reasoning families would help describe what kind of work Hold is doing before selecting a specific reasoning capability.

## Relationship to the Hold Reasoning Model

The Hold Reasoning Model currently follows this broad path:

```text
question
-> intent
-> scope
-> entity set
-> evidence model
-> reasoning engine
-> answer
-> evidence boundary
-> confidence
```

Reasoning families would sit between intent and reasoning engine:

```text
question
-> intent
-> reasoning family
-> scope
-> entity set
-> evidence model
-> reasoning engine
-> answer
-> evidence boundary
-> confidence
```

This would allow Hold to identify whether a question is primarily about evidence, questions, understanding or decisions before choosing a specific engine.

## Proposed Reasoning Families

### 1. Evidence Reasoning

Evidence Reasoning works directly over governed evidence.

It answers questions such as:

- What is present?
- How often does it appear?
- How do sources compare?
- Which entities overlap?
- What relationship is supported by the evidence?

Current or emerging capabilities:

- Retrieval
- Inspection
- Count
- Frequency
- Aggregation
- Set Analysis
- Similarity
- Relationship
- Timeline
- Lineage
- Conflict
- Confidence

Typical evidence required:

- Indexed documents
- Extracted rows or fields
- Source metadata
- Entity identifiers
- Normalised terms
- Provenance
- Comparable structures

What it should produce:

- Counts
- Rankings
- Comparisons
- Overlaps
- Timelines
- Lineage paths
- Evidence boundaries
- Confidence statements

What it should refuse:

- Unsupported interpretation beyond the evidence
- Lineage without a graph or pedigree source
- Trend without comparable time points
- Influence from frequency alone

Example:

Matchem catalogue analysis: sire frequency, country overlap, catalogue similarity and lineage readiness.

Maturity:

Mature to emerging.

### 2. Question Reasoning

Question Reasoning works over questions themselves.

It asks whether different questions are isolated, related, converging or revealing a deeper concern.

Current or proposed capabilities:

- Question Convergence
- Question clustering
- Question provenance
- Repeated uncertainty detection
- Cross-team concern mapping
- Future: question drift over time

Typical evidence required:

- Questions from multiple people, teams or sources
- Department, role or context metadata
- Timing and recurrence
- Related evidence or decisions
- Organisational vocabulary

What it should produce:

- Candidate underlying question
- Contributing questions
- Shared concern
- Differences that should not be flattened
- Confidence in convergence
- Follow-up questions

What it should refuse:

- Assuming that similar questions have identical meaning
- Making the organisational decision
- Erasing department-specific concerns
- Inferring intent without context

Example:

Finance asks whether another acquisition is affordable. HR asks whether enough people are available. IT asks whether infrastructure can support expansion. Operations asks whether the business can absorb another company. Hold identifies a candidate convergent question: "Are we organisationally ready to grow?"

Maturity:

Conceptual.

### 3. Understanding Reasoning

Understanding Reasoning works above individual evidence operations.

It asks what Hold, a team or an organisation is coming to understand across evidence, time and context.

Current or proposed capabilities:

- Emergent Understanding
- Organisational Understanding
- Project Reflection
- Theme Extraction
- Pattern Recognition
- Understanding Through Time
- Future: understanding gap analysis

Typical evidence required:

- Multiple governed evidence sources
- Learning logs
- Repeated patterns
- Source metadata
- Context changes
- Evidence boundaries
- Prior understanding states

What it should produce:

- Emergent patterns
- Understanding summaries
- What changed
- What only becomes visible across sources
- Boundaries of current understanding
- Research or incubation candidates

What it should refuse:

- Pretending an emergent pattern exists without a governed reasoning path
- Collapsing weak signals into a conclusion
- Presenting speculation as understanding
- Confusing missing evidence with missing reasoning capability

Example:

Matchem Emergent Understanding: Hold recognised that it could not yet responsibly answer what understanding emerges only when all catalogues are considered together, and preserved the gap in the Reasoning Incubator.

Maturity:

Emerging to conceptual.

### 4. Decision Reasoning

Decision Reasoning would support decisions without making them for the user.

It would help show whether evidence is sufficient, what options are available, what trade-offs exist and what should be escalated.

Current or proposed capabilities:

- Decision readiness
- Option comparison
- Trade-off analysis
- Escalation reasoning
- Governance checkpointing
- Future: decision impact review

Typical evidence required:

- Decision context
- Options
- Criteria
- Constraints
- Risks
- Roles and authority
- Evidence supporting or weakening each option

What it should produce:

- Decision readiness assessment
- Evidence needed before decision
- Option comparison
- Risks and uncertainties
- Escalation requirements
- Governance boundary

What it should refuse:

- Making the final decision
- Recommending action without authority or sufficient evidence
- Treating incomplete evidence as approval
- Substituting confidence for accountability

Example:

Matchem principle: Hold should help retain and develop understanding while researching pedigrees, catalogues and bloodlines, but should not decide which horse to buy.

Maturity:

Mostly conceptual.

### 5. Governance Reasoning

Governance Reasoning monitors the reasoning process itself.

It asks whether Hold is operating within its evidence, authority and capability boundaries.

Current or proposed capabilities:

- Evidence boundary
- Refusal boundary
- Reasoning Incubator
- Capability availability confidence
- Provenance checking
- Trust Layer
- Governance Layer

Typical evidence required:

- Reasoning path
- Included evidence
- Excluded evidence
- Capability status
- Confidence statement
- Provenance
- Policy and governance constraints

What it should produce:

- Why Hold answered
- Why Hold refused
- What was included and excluded
- Whether the issue is evidence, confidence or capability
- Incubator entries for future research

What it should refuse:

- Downgrading analytical questions into retrieval
- Claiming a capability exists when it does not
- Giving an answer outside the governed reasoning model

Example:

First governed reasoning boundary: Hold reported high confidence that Emergent Understanding was unavailable in the current prototype.

Maturity:

Emerging.

## Why Reasoning Families Are Useful

Reasoning families are useful because they:

- Reduce architectural sprawl.
- Make new capabilities easier to place.
- Help Hold explain what kind of reasoning it is using.
- Improve governance and auditability.
- Make refusal behaviour clearer.
- Support reusable patterns across domains.
- Keep domain knowledge separate from reasoning structure.

Without reasoning families, Hold risks accumulating many named capabilities without a coherent map.

With reasoning families, Hold can grow as a platform:

```text
same reasoning model
+ reasoning families
+ domain knowledge packs
= governed understanding across domains
```

## Recommendation

Reasoning families should become a first-class concept within Hold governance.

They do not need to become visible in every user answer, but they should be recorded in the reasoning architecture so that every capability has a clear home.

Suggested initial family set:

1. Evidence Reasoning
2. Question Reasoning
3. Understanding Reasoning
4. Decision Reasoning
5. Governance Reasoning

The family list should remain small. New families should only be added when a capability cannot responsibly fit within an existing family.

## Open Governance Questions

- Should confidence be its own engine, or a cross-cutting governance layer?
- Should lineage remain under Evidence Reasoning, or become a specialist graph reasoning family later?
- Should Emergent Understanding sit under Understanding Reasoning only, or also depend on Governance Reasoning?
- Should Decision Reasoning remain deliberately constrained so Hold supports decisions without becoming a decision-maker?

## Working Principle

Hold should not only know which reasoning engine it is using.

It should know which reasoning family the engine belongs to, what boundary governs it, and what it must refuse to conclude.

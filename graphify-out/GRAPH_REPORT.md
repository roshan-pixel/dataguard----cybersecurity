# Graph Report - dataguard-cybersecurity  (2026-10-10)

## Corpus Check
- 33 files · ~463,019 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 231 nodes · 284 edges · 20 communities (17 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f6d577cd`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 19|Community 19]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 18 edges
2. `compilerOptions` - 15 edges
3. `sound` - 13 edges
4. `Dataguard — Enterprise Cybersecurity Platform` - 10 edges
5. `Crosshair()` - 9 edges
6. `DataguardManagementApiClient` - 8 edges
7. `2. Core Engineering Highlights` - 7 edges
8. `Dataguard Cybersecurity — HTTP Management & Diagnostic API Reference` - 6 edges
9. `4. Endpoint Reference` - 6 edges
10. `scripts` - 5 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities (20 total, 3 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 1 - "Community 1"
Cohesion: 0.08
Nodes (25): dependencies, autoprefixer, framer-motion, lucide-react, postcss, react, react-dom, tailwindcss (+17 more)

### Community 2 - "Community 2"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 3 - "Community 3"
Cohesion: 0.14
Nodes (18): sound, Crosshair(), CrosshairProps, LogoBar(), Navbar(), NavbarProps, AdvancedFeatures(), AdvancedFeaturesProps (+10 more)

### Community 4 - "Community 4"
Cohesion: 0.18
Nodes (14): dataguardApi, DiagnosticHealthResponse, IsolateNodeRequest, IsolateNodeResponse, NodeStatus, PerimeterAuditRequest, PerimeterAuditResponse, SeverityLevel (+6 more)

### Community 5 - "Community 5"
Cohesion: 0.07
Nodes (27): 1. Global Specifications, 2. Authentication & Headers, 3. Endpoints Overview, 4.1. Cluster Health & Diagnostic, 4.2. On-Demand Perimeter Audit, 4.3. Real-Time Telemetry Stream, 4.4. Zero-Trust Token Verification, 4.5. Automated Node Quarantine & Mitigation (+19 more)

### Community 7 - "Community 7"
Cohesion: 0.29
Nodes (6): NavItem, SecurityFeature, SecurityTab, StepItem, TestimonialItem, ThreatAlert

### Community 8 - "Community 8"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 10 - "Community 10"
Cohesion: 0.06
Nodes (33): 1. System Architecture Diagram, 2.1. 100% Visual Fidelity to Behance Reference #255038607, 2.2. Generative Particle Canvas Collision Engine, 2.3. Zero-Asset Synthetic Web Audio Micro-Interactions, 2.4. Dual Viewport Presentation Switcher, 2.5. Stepwise Perimeter Vulnerability Scanner, 2.6. Production Build Performance, 2. Core Engineering Highlights (+25 more)

### Community 11 - "Community 11"
Cohesion: 0.25
Nodes (8): 7. Getting Started & Production Build, code:bash (npm run build), code:bash (# Clone the repository), code:bash (npm run dev), Development, Installation, Prerequisites, Production Build

### Community 19 - "Community 19"
Cohesion: 0.17
Nodes (9): LENS_COLUMNS, LENS_CONFIG, LENS_KEYFRAMES_CSS, LensDotColumn, ShowcaseFX(), ShowcaseFXProps, SecurityShowcase(), SecurityShowcaseProps (+1 more)

## Knowledge Gaps
- **120 isolated node(s):** `$schema`, `plugins`, `react/rules-of-hooks`, `react/only-export-components`, `name` (+115 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Dataguard — Enterprise Cybersecurity Platform` connect `Community 10` to `Community 11`?**
  _High betweenness centrality (0.027) - this node is a cross-community bridge._
- **Why does `DataguardManagementApiClient` connect `Community 6` to `Community 4`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **What connects `$schema`, `plugins`, `react/rules-of-hooks` to the rest of the system?**
  _120 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.14015151515151514 - nodes in this community are weakly interconnected._
# Graph Report - C:\Users\sgarm\dataguard-cybersecurity  (2026-10-11)

## Corpus Check
- 36 files · ~481,367 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 240 nodes · 298 edges · 21 communities (18 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Linter & Code Quality Rules|Linter & Code Quality Rules]]
- [[_COMMUNITY_Package Dependencies & Tooling|Package Dependencies & Tooling]]
- [[_COMMUNITY_TypeScript Config & Compiler|TypeScript Config & Compiler]]
- [[_COMMUNITY_Security Icons & Graphics|Security Icons & Graphics]]
- [[_COMMUNITY_Node App Compilation Options|Node App Compilation Options]]
- [[_COMMUNITY_3D Visual FX & Audio Engine|3D Visual FX & Audio Engine]]
- [[_COMMUNITY_Dataguard API & Type Definitions|Dataguard API & Type Definitions]]
- [[_COMMUNITY_API Client & Management SDK|API Client & Management SDK]]
- [[_COMMUNITY_Global Styles & CSS Tokens|Global Styles & CSS Tokens]]
- [[_COMMUNITY_Interactive Lens Showcase FX|Interactive Lens Showcase FX]]
- [[_COMMUNITY_Cybersecurity Data Models|Cybersecurity Data Models]]
- [[_COMMUNITY_System Architecture & Highlights|System Architecture & Highlights]]
- [[_COMMUNITY_Diagnostic API Endpoints & PoCs|Diagnostic API Endpoints & PoCs]]
- [[_COMMUNITY_Build & Deployment Workflows|Build & Deployment Workflows]]
- [[_COMMUNITY_Telemetry & Perimeter Audit Specs|Telemetry & Perimeter Audit Specs]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 18 edges
2. `compilerOptions` - 15 edges
3. `sound` - 14 edges
4. `Dataguard — Enterprise Cybersecurity Platform` - 10 edges
5. `Crosshair()` - 9 edges
6. `DataguardManagementApiClient` - 8 edges
7. `2. Core Engineering Highlights` - 7 edges
8. `Dataguard Cybersecurity — HTTP Management & Diagnostic API Reference` - 6 edges
9. `4. Endpoint Reference` - 6 edges
10. `scripts` - 5 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities (21 total, 3 thin omitted)

### Community 8 - "Linter & Code Quality Rules"
Cohesion: 0.33
Nodes (5): $schema, plugins, rules, react/rules-of-hooks, react/only-export-components

### Community 1 - "Package Dependencies & Tooling"
Cohesion: 0.08
Nodes (25): name, private, version, type, scripts, dev, build, lint (+17 more)

### Community 0 - "TypeScript Config & Compiler"
Cohesion: 0.10
Nodes (19): compilerOptions, tsBuildInfoFile, target, lib, module, types, allowArbitraryExtensions, skipLibCheck (+11 more)

### Community 2 - "Node App Compilation Options"
Cohesion: 0.12
Nodes (16): compilerOptions, tsBuildInfoFile, target, lib, types, skipLibCheck, module, allowImportingTsExtensions (+8 more)

### Community 3 - "3D Visual FX & Audio Engine"
Cohesion: 0.10
Nodes (24): AdvancedFeaturesFXProps, AdvancedFeaturesFX(), sound, CrosshairProps, Crosshair(), FirewallFXProps, FirewallFX(), LogoBar() (+16 more)

### Community 4 - "Dataguard API & Type Definitions"
Cohesion: 0.18
Nodes (14): dataguardApi, SeverityLevel, NodeStatus, DiagnosticHealthResponse, PerimeterAuditRequest, VulnerabilityFinding, PerimeterAuditResponse, TelemetryStreamEvent (+6 more)

### Community 19 - "Interactive Lens Showcase FX"
Cohesion: 0.17
Nodes (9): LENS_CONFIG, LensDotColumn, LENS_COLUMNS, LENS_KEYFRAMES_CSS, ShowcaseFXProps, ShowcaseFX(), SecurityShowcaseProps, slideVariants (+1 more)

### Community 7 - "Cybersecurity Data Models"
Cohesion: 0.29
Nodes (6): NavItem, SecurityFeature, SecurityTab, ThreatAlert, StepItem, TestimonialItem

### Community 10 - "System Architecture & Highlights"
Cohesion: 0.07
Nodes (27): Dataguard — Enterprise Cybersecurity Platform, Table of Contents, 1. System Architecture Diagram, code:mermaid (flowchart TD), 2. Core Engineering Highlights, 2.1. 100% Visual Fidelity to Behance Reference #255038607, 2.2. Generative Particle Canvas Collision Engine, 2.3. Zero-Asset Synthetic Web Audio Micro-Interactions (+19 more)

### Community 20 - "Diagnostic API Endpoints & PoCs"
Cohesion: 0.33
Nodes (6): 4. HTTP Management & Diagnostic API Reference, 4.1. Core Endpoints Summary, 4.2. Sample Request & Response, Cluster Health Diagnostic, code:bash (curl -X GET "https://api.dataguard.ai/v1/health/diagnostic" ), code:json ({)

### Community 11 - "Build & Deployment Workflows"
Cohesion: 0.25
Nodes (8): 7. Getting Started & Production Build, Prerequisites, Installation, code:bash (# Clone the repository), Development, code:bash (npm run dev), Production Build, code:bash (npm run build)

### Community 5 - "Telemetry & Perimeter Audit Specs"
Cohesion: 0.07
Nodes (27): Dataguard Cybersecurity — HTTP Management & Diagnostic API Reference, 1. Global Specifications, 2. Authentication & Headers, code:http (Authorization: Bearer dg_live_38bf8c991a0c4f8285e683), 3. Endpoints Overview, 4. Endpoint Reference, 4.1. Cluster Health & Diagnostic, `GET /health/diagnostic` (+19 more)

## Knowledge Gaps
- **123 isolated node(s):** `$schema`, `plugins`, `react/rules-of-hooks`, `react/only-export-components`, `name` (+118 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Dataguard — Enterprise Cybersecurity Platform` connect `System Architecture & Highlights` to `Build & Deployment Workflows`, `Diagnostic API Endpoints & PoCs`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `DataguardManagementApiClient` connect `API Client & Management SDK` to `Dataguard API & Type Definitions`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **Why does `sound` connect `3D Visual FX & Audio Engine` to `Interactive Lens Showcase FX`, `Dataguard API & Type Definitions`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **What connects `$schema`, `plugins`, `react/rules-of-hooks` to the rest of the system?**
  _123 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Package Dependencies & Tooling` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._
- **Should `TypeScript Config & Compiler` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Node App Compilation Options` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
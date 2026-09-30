# Dataguard — Enterprise Cybersecurity Platform

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4-FF0055?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Build Status](https://img.shields.io/badge/Build-Passing%20(2.34s)-emerald)]()
[![Behance Reference](https://img.shields.io/badge/Behance-Reference%20%23255038607-0057FF?logo=behance&logoColor=white)](https://www.behance.net/gallery/255038607/Dataguard-Cybersecurity-Landing-Page-Design)

A production-grade, highly faithful web application recreation of the renowned [Dataguard Cybersecurity Landing Page Design by Behance](https://www.behance.net/gallery/255038607/Dataguard-Cybersecurity-Landing-Page-Design). Built with React 19, TypeScript, Tailwind CSS, Framer Motion, HTML5 Canvas generative particles, synthetic Web Audio micro-interactions, an enterprise HTTP Management & Diagnostic API client, and a complete [Graphify](#6-graphify-knowledge-graph) knowledge graph.

---

## Table of Contents

1. [System Architecture Diagram](#1-system-architecture-diagram)
2. [Core Engineering Highlights](#2-core-engineering-highlights)
3. [End-to-End Sequence Flow](#3-end-to-end-sequence-flow)
4. [HTTP Management & Diagnostic API Reference](#4-http-management--diagnostic-api-reference)
5. [Graphify Knowledge Graph](#5-graphify-knowledge-graph)
6. [Component & Directory Structure](#6-component--directory-structure)
7. [Getting Started & Production Build](#7-getting-started--production-build)

---

## 1. System Architecture Diagram

The system employs a layered modular architecture that decouples UI presentation, tactile audio feedback, client-side generative canvas computation, zero-trust perimeter auditing, and edge diagnostic telemetry:

```mermaid
flowchart TD
    subgraph Client_Presentation_Layer ["1. Client Presentation & Viewport Layer"]
        A[App.tsx Master Controller]
        NAV[Navbar & Mobile Drawer]
        HERO[Hero Section & Topographic Mountain]
        SOC[LogoBar Enterprise Proof]
        BFE[BuiltForEnterprise Capability Grid]
        SHOW[SecurityShowcase 4-Tab Interactive]
        ADV[AdvancedFeatures Radar & Firewall]
        STEP[SimpleSteps Infinity Pipeline & Accordion]
        TEST[Testimonials Halftone Portraits]
        CTA[CTA Section & Bottom Wave]
        FOOT[Technical Directory Footer]
        FRAME[Floating Behance Frame Switcher]
    end

    subgraph Reactive_Engines ["2. Audio & Generative Physics Engines"]
        AUDIO[AudioFeedback Web Audio API Synthesizer]
        CANVAS[HTML5 Canvas Particle Collision Engine]
        MOTION[Framer Motion Physics & Viewport Ingress]
    end

    subgraph Security_Audit_Sandbox ["3. Diagnostic & Audit Subsystem"]
        MODAL[InteractiveDemoModal Controller]
        SCANNER[Perimeter Vulnerability Engine]
        DRAWER[CaseStudyDrawer & Design Tokens]
        CLIENT_SDK[DataguardManagementApiClient Client SDK]
    end

    subgraph Management_API_Edge ["4. HTTP Management & Diagnostic API Surface"]
        EP_HEALTH[GET /api/v1/health/diagnostic]
        EP_AUDIT[POST /api/v1/security/perimeter-audit]
        EP_TELEM[GET /api/v1/telemetry/stream]
        EP_TOKEN[POST /api/v1/access/verify-token]
        EP_ISOLATE[POST /api/v1/mitigation/isolate-node]
    end

    subgraph Infrastructure_Mesh ["5. Distributed Zero-Trust Ingress Mesh"]
        EDGE_CLUSTER[Edge Cluster Envoy / Proxy Nodes]
        SIEM_ENGINE[SIEM Anomaly & Telemetry Engine]
        POLICY_PDP[Zero-Trust Policy Decision Point]
        ISOLATION_MGR[Automated Quarantine Controller]
    end

    A --> NAV & HERO & SOC & BFE & SHOW & ADV & STEP & TEST & CTA & FOOT & FRAME
    HERO --> CANVAS
    NAV & HERO & ADV & STEP & MODAL --> AUDIO
    HERO & BFE & SHOW & ADV & STEP & CTA --> MOTION

    NAV & HERO & ADV & CTA --> MODAL
    NAV --> DRAWER
    MODAL --> SCANNER
    SCANNER --> CLIENT_SDK

    CLIENT_SDK --> EP_HEALTH & EP_AUDIT & EP_TELEM & EP_TOKEN & EP_ISOLATE
    EP_HEALTH & EP_AUDIT --> EDGE_CLUSTER
    EP_TELEM --> SIEM_ENGINE
    EP_TOKEN --> POLICY_PDP
    EP_ISOLATE --> ISOLATION_MGR
```

---

## 2. Core Engineering Highlights

### 2.1. 100% Visual Fidelity to Behance Reference #255038607
- **Bespoke Typography Pipeline**: Precise combination of **Pixel Bitmap Display Font** (`Silkscreen` / `Micro 5`) for signature tech terms (`ACCESS`, `ANYTIME`, `CYBERSECURITY`), **Technical Monospace** (`Space Mono`) for telemetry, buttons, and ledger headers, and **Geometric Grotesk** (`Plus Jakarta Sans` / `Neue Montreal`) for primary headings and body.
- **Architectural Ledger Borders & Crosshairs**: SVG crosshair markers (`+`) at exact card vertices and CSS millimeter ledger lines (`blueprint-ledger-left` and `blueprint-ledger-right`) reproducing technical blueprint schematics.
- **3D Halftone Isometric Imagery**: Purified, artifact-free 3D halftone meshes including the Hero Topographic Mountain, Section 3 Shield Lens, Section 4 Radar Scanner & Brick Firewall, Section 5 Infinity Pipeline, and Halftone Portraits for customer testimonials.

### 2.2. Generative Particle Canvas Collision Engine
- Integrated directly into the hero topographical mountain using a custom `HTML5 Canvas` context and `requestAnimationFrame` loop.
- Calculates dynamic mouse proximity vectors, applying repelling velocity when users hover over the 3D peaks to simulate real-time electromagnetic grid interaction.

### 2.3. Zero-Asset Synthetic Web Audio Micro-Interactions
- Uses the native browser **Web Audio API** (`AudioContext`, `OscillatorNode`, and `GainNode`) without downloading any external `.mp3` or `.wav` sound files.
- Generates high-tech synthetic tactile feedback (calibrated frequencies: 600Hz navigation clicks, 720Hz toggle pulses, 800Hz action snaps, and 940Hz completion beeps).
- Includes global mute toggles with state persistence.

### 2.4. Dual Viewport Presentation Switcher
- Floating bottom glass bar lets users toggle seamlessly between:
  1. **Behance Frame Mode**: Displays the iconic electric-blue `#4D82F3` presentation backdrop with rounded container borders, mimicking the original design portfolio casing.
  2. **Full Width View**: Expands the landing page to 100% viewport width for production SaaS deployment.

### 2.5. Stepwise Perimeter Vulnerability Scanner
- Embedded in `InteractiveDemoModal.tsx` and driven by `DataguardManagementApiClient`.
- Performs multi-stage simulated vulnerability audits across DNS, TLS 1.3 cipher suites, Zero-Trust ingress compliance, and 256-bit AES-GCM enclave verification.

### 2.6. Production Build Performance
- **React 19 + Vite 8.3 + TypeScript 5.9**: Production build compiles in **2.34 seconds** with zero errors or warnings.
- Fully responsive across desktop (1440px / 1280px), tablet (1024px / 768px), and mobile (390px / 375px).

---

## 3. End-to-End Sequence Flow

### 3.1. Zero-Trust Access & Threat Scanning Pipeline

```mermaid
sequenceDiagram
    autonumber
    actor User as Remote User / Client
    participant WAF as Dataguard Edge Gateway (Envoy)
    participant PDP as Policy Decision Point (PDP)
    participant Telemetry as Telemetry & Audit Stream
    participant Target as Protected Enterprise Resource

    User->>WAF: HTTPS Ingress Request + Bearer JWT
    WAF->>PDP: POST /api/v1/access/verify-token (Identity, Device Fingerprint, IP)
    
    activate PDP
    PDP->>PDP: Evaluate Context, Threat History & Enclave Health
    alt Risk Score <= 0.05 (Valid & Healthy)
        PDP-->>WAF: 200 OK: Access Granted (Risk: 0.01)
        WAF->>Target: Forward Encrypted Request (TLS 1.3 ChaCha20)
        Target-->>WAF: 200 OK Response
        WAF-->>User: Secure Payload Delivered
        WAF-)Telemetry: Event Dispatched: [TOKEN_EVAL / ALLOW]
    else Risk Score > 0.05 (Suspicious / Anomaly)
        PDP-->>WAF: 403 Forbidden: Step-Up Challenge Required
        WAF-)Telemetry: Event Dispatched: [ANOMALY_DETECTED / CHALLENGE]
        WAF-->>User: 401 WebAuthn / MFA Challenge Prompt
    end
    deactivate PDP
```

### 3.2. Real-Time Telemetry & Diagnostic Alerting Flow

```mermaid
sequenceDiagram
    autonumber
    participant Node as Cluster Edge Node (us-east-01)
    participant API as Management & Diagnostic API
    participant Engine as AI Threat Detection Engine
    participant UI as Dataguard UI Telemetry Accordion
    participant Admin as Security Operations Center (SOC)

    loop Continuous Ingestion (100ms Interval)
        Node->>API: Stream Telemetry Events (Kernel Calls, Handshakes, Drops)
        API->>Engine: Ingest Event Array
        Engine->>Engine: Match 2.4M Signatures & Run Anomaly Classifier
    end

    alt Volumetric or Auth Anomaly Detected
        Engine->>API: Alert: High-Frequency Auth Failure from AS14061
        API->>UI: Real-Time Stream Push: $ telemetry_stream.alert(HIGH)
        UI->>UI: Highlight Red Telemetry Badge & Expand Terminal Step
        API->>Admin: PagerDuty / Webhook Incident Notification
        Admin->>API: POST /api/v1/mitigation/isolate-node
        API->>Node: Quarantine Traffic & Re-route to Edge Standby Nodes
    end
```

---

## 4. HTTP Management & Diagnostic API Reference

The platform features an HTTP Management & Diagnostic API implemented in [`src/api/managementApi.ts`](./src/api/managementApi.ts) and fully typed in [`src/api/types.ts`](./src/api/types.ts).

Full OpenAPI reference available in [`docs/API_REFERENCE.md`](./docs/API_REFERENCE.md).

### 4.1. Core Endpoints Summary

| Method | Endpoint | Description | Auth Scope |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/health/diagnostic` | Cluster liveness, CPU/memory loads, rule engine stats. | `read:diagnostic` |
| `POST` | `/api/v1/security/perimeter-audit` | Trigger on-demand port scan, TLS cipher check, & CVE evaluation. | `exec:audit` |
| `GET` | `/api/v1/telemetry/stream` | Stream live security telemetry and audit events. | `read:telemetry` |
| `POST` | `/api/v1/access/verify-token` | Zero-Trust policy evaluation on client sessions. | `exec:verify` |
| `POST` | `/api/v1/mitigation/isolate-node` | Quarantine a compromised edge node with automatic failover. | `admin:cluster` |

### 4.2. Sample Request & Response

#### Cluster Health Diagnostic
```bash
curl -X GET "https://api.dataguard.ai/v1/health/diagnostic" \
  -H "Authorization: Bearer dg_live_38bf8c991a0c4f8285e683" \
  -H "X-Dataguard-Node-Id: edge-us-east-cluster-01"
```

**Response (`200 OK`):**
```json
{
  "status": "UP",
  "version": "2.4.0-enterprise",
  "uptimeSeconds": 864210,
  "cluster": {
    "region": "us-east-virginia",
    "nodesOnline": 128,
    "activeQuarantines": 0,
    "avgLatencyMs": 1.42
  },
  "engine": {
    "ruleEngineVersion": "v4.18.2-rev9",
    "threatSignaturesCount": 2489100,
    "aiModelAccuracy": 0.9992
  },
  "metrics": {
    "cpuLoadPercentage": 14.8,
    "memoryUsageMB": 1842,
    "activeTelemetryStreams": 42910,
    "throughputReqSec": 324500
  }
}
```

---

## 5. Graphify Knowledge Graph

The codebase is fully mapped and indexed using [**Graphify**](https://github.com/roshan-pixel) into a structured AST-extracted knowledge graph located in [`graphify-out/`](./graphify-out/).

### Knowledge Graph Metrics
- **Nodes**: `131` AST & Component nodes
- **Edges**: `172` Directed dependency & invocation edges
- **Communities**: `19` Detected functional clusters
- **Extraction Fidelity**: `100% EXTRACTED` · `0% INFERRED`

### Core Abstractions (God Nodes)
1. **`compilerOptions`**: TypeScript compiler AST base (18 inbound/outbound relationships).
2. **`sound` (`SoundEffects`)**: Centralized Web Audio synthesis engine invoked across 13 components.
3. **`Crosshair`**: Blueprint positioning vector component at 9 critical section coordinate anchors.
4. **`InteractiveDemoModal`**: Ingress controller for the perimeter vulnerability scanner and SDK console.
5. **`DataguardManagementApiClient`**: Enterprise HTTP management API client dispatching telemetry and audits.

### Graph Inspection Commands
```bash
# Query the codebase knowledge graph via BFS
graphify query "How does sound synthesis interact with the InteractiveDemoModal?"

# Inspect shortest path between components
graphify path "Hero" "AudioFeedback"

# Explain a specific node and its neighbors
graphify explain "InteractiveDemoModal"
```

Visual HTML graph view: [`graphify-out/graph.html`](./graphify-out/graph.html).  
Audit report: [`graphify-out/GRAPH_REPORT.md`](./graphify-out/GRAPH_REPORT.md).

---

## 6. Component & Directory Structure

```
dataguard-cybersecurity/
├── docs/
│   └── API_REFERENCE.md                 # Complete HTTP Diagnostic REST API Spec
├── graphify-out/                        # Graphify Knowledge Graph artifacts
│   ├── graph.json                       # 131 nodes / 172 edges JSON graph
│   ├── graph.html                       # Interactive D3 visualization
│   └── GRAPH_REPORT.md                  # Community breakdown & audit metrics
├── public/
│   └── assets/                          # Authentic 3D Halftone Assets
│       ├── hero_mountain_pure.png       # 3D Halftone Mountain Mesh
│       ├── sec3_shield_lens.png         # 3D Halftone Shield Lens
│       ├── sec4_radar.png               # 3D Radar Scanner
│       ├── sec4_firewall.png            # 3D Brick Firewall
│       ├── sec5_infinity.png            # 3D Infinity Code Pipeline
│       ├── portrait_alex.png            # Halftone Alex Smith Portrait
│       ├── portrait_andreas.png         # Halftone Andreas Mitchell Portrait
│       ├── clean_mountain_wave.png      # Halftone CTA Wave
│       ├── dataguard_mark.png           # Dataguard Vector Mark
│       └── footer_logo_watermark.png    # Dataguard Giant Watermark
├── src/
│   ├── api/
│   │   ├── types.ts                     # TypeScript schemas for Management API
│   │   └── managementApi.ts             # DataguardManagementApiClient SDK
│   ├── components/
│   │   ├── AudioFeedback.ts             # Web Audio API Synth Micro-Interactions
│   │   ├── Crosshair.tsx                # SVG Precision Blueprint Marker
│   │   ├── InteractiveDemoModal.tsx     # Perimeter Scanner & API Doc Modal
│   │   ├── LogoBar.tsx                  # Vector SVGs for Calendly, GitHub, etc.
│   │   └── Navbar.tsx                   # Sticky Header & Responsive Drawer
│   ├── sections/
│   │   ├── AdvancedFeatures.tsx         # Radar + 99.9% Metric + Firewall
│   │   ├── BuiltForEnterprise.tsx       # 3-Card Protection Grid & Stats
│   │   ├── CaseStudyDrawer.tsx          # Behance Case Study & Color Tokens
│   │   ├── CTASection.tsx               # Dual CTA & Bottom Halftone Wave
│   │   ├── Footer.tsx                   # 5-Column Technical Directory
│   │   ├── Hero.tsx                     # Mountain Hero & Dynamic Particle Canvas
│   │   ├── SecurityShowcase.tsx         # 4-Tab Interactive Capabilities
│   │   ├── SimpleSteps.tsx              # Infinity Pipeline & Telemetry Accordion
│   │   └── Testimonials.tsx             # Halftone Customer Cards & Switcher
│   ├── App.tsx                          # Master Layout & Frame View Toggle
│   ├── index.css                        # Blueprint Ledgers, Grid, & Fonts
│   └── main.tsx                         # React 19 Entrypoint
├── tailwind.config.js                   # Dataguard Design System Tokens
└── vite.config.ts                       # Vite Configuration
```

---

## 7. Getting Started & Production Build

### Prerequisites
- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

### Installation
```bash
# Clone the repository
git clone https://github.com/roshan-pixel/dataguard----cybersecurity.git
cd dataguard----cybersecurity

# Install dependencies
npm install
```

### Development
```bash
npm run dev
```
Visit `http://localhost:5173/` in your browser.

### Production Build
```bash
npm run build
```
Generates an optimized, tree-shaken production bundle in `dist/`.

---

## License & Credits

- Visual Design Reference & Identity: [Behance Dataguard Project #255038607](https://www.behance.net/gallery/255038607/Dataguard-Cybersecurity-Landing-Page-Design).
- Implementation: Built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Graphify.

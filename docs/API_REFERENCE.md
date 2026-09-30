# Dataguard Cybersecurity — HTTP Management & Diagnostic API Reference

The Dataguard HTTP Management & Diagnostic API provides low-latency REST and SSE endpoints for edge cluster telemetry, perimeter vulnerability evaluation, zero-trust token inspection, and automated threat mitigation.

---

## 1. Global Specifications

- **Base URL (Production)**: `https://api.dataguard.ai/v1`
- **Base URL (Edge Mesh)**: `https://edge-{region}.mesh.dataguard.ai/v1`
- **Protocol**: HTTPS / HTTP/2 & HTTP/3
- **Format**: JSON (`application/json; charset=utf-8`)
- **Default Rate Limit**: 5,000 requests/minute per enterprise token (burst up to 15,000 req/sec on edge nodes).

---

## 2. Authentication & Headers

Every management request requires an API bearer token generated from the Dataguard Enterprise Console. Cluster edge nodes must additionally supply their hardware-bound node identifier.

```http
Authorization: Bearer dg_live_38bf8c991a0c4f8285e683
X-Dataguard-Node-Id: edge-us-east-cluster-01
X-Client-Version: 2.4.0-enterprise
Content-Type: application/json
```

| Header | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | String | Yes | `Bearer <API_TOKEN>` secret key. |
| `X-Dataguard-Node-Id` | String | Yes | Unique edge cluster node identifier. |
| `X-Client-Version` | String | Optional | Client library or SDK build revision. |

---

## 3. Endpoints Overview

| Method | Endpoint | Access Level | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/health/diagnostic` | Read | Cluster liveness, CPU/memory loads, rule engine state, and active latency. |
| `POST` | `/security/perimeter-audit` | Execute | Initiates on-demand perimeter port scan, TLS cipher audit, and vulnerability probe. |
| `GET` | `/telemetry/stream` | Read / SSE | Ingestion stream of security events, handshake evaluations, and anomaly alerts. |
| `POST` | `/access/verify-token` | Execute | Evaluates incoming Zero-Trust JWT tokens against the distributed policy engine. |
| `GET` | `/threats/active` | Read | Current real-time global threat matrix and active blocking rules. |
| `POST` | `/mitigation/isolate-node` | Admin | Immediately quarantines a compromised or degraded node and reroutes traffic. |

---

## 4. Endpoint Reference

### 4.1. Cluster Health & Diagnostic

#### `GET /health/diagnostic`
Returns real-time cluster vitals, CPU and memory utilization, active edge nodes, and AI threat detection model accuracy.

**Request:**
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
  "timestamp": "2026-09-30T15:40:00.000Z",
  "cluster": {
    "region": "us-east-virginia",
    "nodesOnline": 128,
    "activeQuarantines": 0,
    "avgLatencyMs": 1.42
  },
  "engine": {
    "ruleEngineVersion": "v4.18.2-rev9",
    "threatSignaturesCount": 2489100,
    "aiModelAccuracy": 0.9992,
    "lastModelUpdate": "2026-09-30T14:40:00.000Z"
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

### 4.2. On-Demand Perimeter Audit

#### `POST /security/perimeter-audit`
Executes an immediate non-destructive scan against the target domain to evaluate perimeter defenses, exposed open ports, TLS certificate chains, and Zero-Trust ingress compliance.

**Request:**
```bash
curl -X POST "https://api.dataguard.ai/v1/security/perimeter-audit" \
  -H "Authorization: Bearer dg_live_38bf8c991a0c4f8285e683" \
  -H "Content-Type: application/json" \
  -d '{
    "targetDomain": "acme-enterprise.com",
    "scanDepth": "STANDARD",
    "includePortScan": true,
    "verifyTlsCipherSuites": true
  }'
```

**Response (`200 OK`):**
```json
{
  "scanId": "scan_88f921a9",
  "targetDomain": "acme-enterprise.com",
  "initiatedAt": "2026-09-30T15:39:56.800Z",
  "completedAt": "2026-09-30T15:40:00.000Z",
  "overallScore": 94,
  "tlsStatus": {
    "grade": "A+",
    "hstsEnabled": true,
    "protocolVersion": "TLSv1.3 (ChaCha20-Poly1305 / AES-256-GCM)"
  },
  "portsSummary": {
    "openPorts": [80, 443],
    "blockedPorts": [21, 22, 23, 25, 3306, 5432, 6379, 8080, 27017]
  },
  "findings": [
    {
      "cveId": "CVE-2026-1104",
      "title": "Cross-Origin Resource Sharing Strict Policy Enforced",
      "severity": "LOW",
      "cvssScore": 2.1,
      "endpoint": "/api/v1/*",
      "description": "CORS policy strictly restricts origin reflection to authenticated enterprise origins.",
      "remediation": "No remediation required. Configured per CIS Benchmark Level 2."
    }
  ]
}
```

---

### 4.3. Real-Time Telemetry Stream

#### `GET /telemetry/stream`
Polls or opens an SSE stream delivering structured security events, token evaluation results, rate limit trips, and anomalous pattern alerts across all connected ingress nodes.

**Request:**
```bash
curl -X GET "https://api.dataguard.ai/v1/telemetry/stream?limit=10" \
  -H "Authorization: Bearer dg_live_38bf8c991a0c4f8285e683" \
  -H "Accept: application/json"
```

**Response (`200 OK`):**
```json
[
  {
    "eventId": "evt_99182",
    "timestamp": "2026-09-30T15:40:00.000Z",
    "sourceIp": "198.51.100.44",
    "destinationNode": "edge-iad-02",
    "protocol": "HTTP2",
    "eventType": "TOKEN_EVAL",
    "severity": "LOW",
    "actionTaken": "ALLOW",
    "details": "Valid Zero-Trust JWT token. Scopes verified: [read:telemetry, write:mesh]."
  },
  {
    "eventId": "evt_99181",
    "timestamp": "2026-09-30T15:39:58.500Z",
    "sourceIp": "203.0.113.89",
    "destinationNode": "edge-sfo-01",
    "protocol": "TCP",
    "eventType": "ANOMALY_DETECTED",
    "severity": "HIGH",
    "actionTaken": "CHALLENGE",
    "details": "Suspicious credential stuffing pattern detected. Automated CAPTCHA / WebAuthn triggered."
  }
]
```

---

### 4.4. Zero-Trust Token Verification

#### `POST /access/verify-token`
Evaluates a client session token against role-based policies, behavioral risk models, and device fingerprint health.

**Request:**
```bash
curl -X POST "https://api.dataguard.ai/v1/access/verify-token" \
  -H "Authorization: Bearer dg_live_38bf8c991a0c4f8285e683" \
  -H "Content-Type: application/json" \
  -d '{
    "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
    "clientId": "usr_94819a8f",
    "deviceFingerprint": "fp_mac_m3_secure_enclave_21",
    "requestedResource": "arn:dataguard:edge:us-east:vault/secrets"
  }'
```

**Response (`200 OK`):**
```json
{
  "valid": true,
  "subject": "usr_94819a8f@enterprise.dataguard.ai",
  "accessGranted": true,
  "riskScore": 0.04,
  "requiredActions": [],
  "issuedAt": "2026-09-30T15:30:00.000Z",
  "expiresAt": "2026-09-30T16:20:00.000Z"
}
```

---

### 4.5. Automated Node Quarantine & Mitigation

#### `POST /mitigation/isolate-node`
Immediately isolates a compromised or erratic cluster edge node, disconnecting it from the global mesh and rerouting traffic to healthy standby nodes within 50 milliseconds.

**Request:**
```bash
curl -X POST "https://api.dataguard.ai/v1/mitigation/isolate-node" \
  -H "Authorization: Bearer dg_live_38bf8c991a0c4f8285e683" \
  -H "Content-Type: application/json" \
  -d '{
    "nodeId": "edge-iad-02",
    "reason": "Anomalous kernel call burst / suspected memory corruption",
    "quarantineMinutes": 60
  }'
```

**Response (`200 OK`):**
```json
{
  "nodeId": "edge-iad-02",
  "status": "QUARANTINED",
  "isolatedAt": "2026-09-30T15:40:02.100Z",
  "trafficReroutedTo": ["edge-iad-01", "edge-iad-03", "edge-iad-04"]
}
```

---

## 5. HTTP Status Code Conventions

| Status Code | Code | Meaning |
| :--- | :--- | :--- |
| `200` | `OK` | Request succeeded. Body contains expected JSON schema. |
| `201` | `CREATED` | Resource or quarantine policy created. |
| `400` | `BAD_REQUEST` | Validation failed or malformed JSON payload. |
| `401` | `UNAUTHORIZED` | Invalid or expired Bearer token. |
| `403` | `FORBIDDEN` | Token lacks the required administrative or diagnostic scope. |
| `429` | `RATE_LIMITED` | Edge rate threshold exceeded. `Retry-After` header provided. |
| `500` | `INTERNAL_ERROR` | Cluster internal failure. Automatic failover triggered. |

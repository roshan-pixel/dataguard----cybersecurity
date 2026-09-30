/**
 * Dataguard Cybersecurity - HTTP Management & Diagnostic API Types
 * Standardized data models for health probes, telemetry streams, perimeter audits, and zero-trust policies.
 */

export type SeverityLevel = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
export type NodeStatus = 'HEALTHY' | 'DEGRADED' | 'QUARANTINED' | 'OFFLINE';

export interface DiagnosticHealthResponse {
  status: 'UP' | 'DOWN' | 'DEGRADED';
  version: string;
  uptimeSeconds: number;
  timestamp: string;
  cluster: {
    region: string;
    nodesOnline: number;
    activeQuarantines: number;
    avgLatencyMs: number;
  };
  engine: {
    ruleEngineVersion: string;
    threatSignaturesCount: number;
    aiModelAccuracy: number;
    lastModelUpdate: string;
  };
  metrics: {
    cpuLoadPercentage: number;
    memoryUsageMB: number;
    activeTelemetryStreams: number;
    throughputReqSec: number;
  };
}

export interface PerimeterAuditRequest {
  targetDomain: string;
  scanDepth: 'QUICK' | 'STANDARD' | 'DEEP';
  includePortScan: boolean;
  verifyTlsCipherSuites: boolean;
}

export interface VulnerabilityFinding {
  cveId?: string;
  title: string;
  severity: SeverityLevel;
  cvssScore: number;
  endpoint: string;
  description: string;
  remediation: string;
}

export interface PerimeterAuditResponse {
  scanId: string;
  targetDomain: string;
  initiatedAt: string;
  completedAt: string;
  overallScore: number; // 0-100
  tlsStatus: {
    grade: 'A+' | 'A' | 'B' | 'C' | 'F';
    hstsEnabled: boolean;
    protocolVersion: string;
  };
  portsSummary: {
    openPorts: number[];
    blockedPorts: number[];
  };
  findings: VulnerabilityFinding[];
}

export interface TelemetryStreamEvent {
  eventId: string;
  timestamp: string;
  sourceIp: string;
  destinationNode: string;
  protocol: 'TCP' | 'UDP' | 'HTTP2' | 'GRPC' | 'WEBSOCKET';
  eventType: 'HANDSHAKE' | 'TOKEN_EVAL' | 'ANOMALY_DETECTED' | 'RATE_LIMIT_TRIPPED';
  severity: SeverityLevel;
  actionTaken: 'ALLOW' | 'CHALLENGE' | 'BLOCK' | 'ISOLATE';
  details: string;
}

export interface ZeroTrustTokenVerificationRequest {
  token: string;
  clientId: string;
  deviceFingerprint: string;
  requestedResource: string;
}

export interface ZeroTrustTokenVerificationResponse {
  valid: boolean;
  subject: string;
  accessGranted: boolean;
  riskScore: number; // 0 to 1
  requiredActions: ('MFA' | 'STEP_UP' | 'DEVICE_HEALTH_CHECK')[];
  issuedAt: string;
  expiresAt: string;
}

export interface IsolateNodeRequest {
  nodeId: string;
  reason: string;
  quarantineMinutes: number;
}

export interface IsolateNodeResponse {
  nodeId: string;
  status: 'QUARANTINED';
  isolatedAt: string;
  trafficReroutedTo: string[];
}

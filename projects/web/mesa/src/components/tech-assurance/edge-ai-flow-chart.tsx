/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import ReactFlow, {
  BaseEdge,
  Edge,
  EdgeProps,
  getStraightPath,
  Handle,
  Node,
  Position,
} from "reactflow";
import { cn } from "@/lib/utils";
import "reactflow/dist/style.css";

const CameraSensorNode = ({ data }: { data: any }) => (
  <span className="text-xl font-bold text-secondary">{data.label}</span>
);

const Node1 = ({ data }: { data: any }) => {
  const { isMobile } = useFlowChartContext();

  return (
    <div className="flex h-[100px] w-[370px] items-center justify-center rounded-md bg-gradient-to-br from-primary/20 to-[#310BB0]/20 px-6 text-center font-bold">
      <span dangerouslySetInnerHTML={{ __html: data.label }} />
      <Handle
        type="source"
        position={isMobile ? Position.Bottom : Position.Right}
        className={cn(isMobile && "vertical")}
      />
    </div>
  );
};

const Node2 = ({ data }: { data: any }) => {
  const { isMobile } = useFlowChartContext();

  return (
    <div className="flex h-[40px] w-[280px] items-center justify-center rounded-full border border-primary text-center font-bold">
      <Handle
        type="target"
        position={isMobile ? Position.Top : Position.Left}
        className={cn(isMobile && "vertical")}
      />
      <span dangerouslySetInnerHTML={{ __html: data.label }} />
      <Handle
        type="source"
        position={isMobile ? Position.Bottom : Position.Right}
        className={cn(isMobile && "vertical")}
      />
    </div>
  );
};

const Node3 = ({ data }: { data: any }) => {
  const { isMobile } = useFlowChartContext();
  return (
    <div className="flex h-[100px] w-[370px] items-center justify-center rounded-md bg-gradient-to-br from-primary/20 to-[#310BB0]/20 px-6 text-center font-bold">
      <Handle
        type="target"
        position={isMobile ? Position.Top : Position.Left}
        className={cn(isMobile && "vertical")}
      />
      <span dangerouslySetInnerHTML={{ __html: data.label }} />
      <Handle type="source" position={Position.Bottom} className="vertical" />
    </div>
  );
};

const Node4 = ({ data }: { data: any }) => (
  <div className="flex h-[40px] w-[280px] items-center justify-center rounded-full border border-primary text-center font-bold">
    <Handle type="target" position={Position.Top} className="vertical" />
    <span dangerouslySetInnerHTML={{ __html: data.label }} />
    <Handle type="source" position={Position.Bottom} className="vertical" />
  </div>
);

const Node5 = ({ data }: { data: any }) => (
  <div className="flex h-[100px] w-[370px] items-center justify-center rounded-md bg-gradient-to-br from-primary/20 to-[#310BB0]/20 px-6 text-center font-bold">
    <Handle type="target" position={Position.Top} className="vertical" />
    <span dangerouslySetInnerHTML={{ __html: data.label }} />
    <Handle type="source" position={Position.Bottom} className="vertical" />
  </div>
);

const Node6 = ({ data }: { data: any }) => (
  <div className="flex h-[100px] w-[370px] items-center justify-center rounded-md bg-gradient-to-br from-primary/20 to-[#310BB0]/20 px-6 text-center font-bold">
    <Handle type="target" position={Position.Top} className="vertical" />
    <span dangerouslySetInnerHTML={{ __html: data.label }} />
  </div>
);

const GroupNode = ({ data }: any) => {
  return (
    <div className="relative h-[465px] w-[410px] border border-dashed border-primary lg:h-[510px]">
      <div className="absolute -top-4 left-6 bg-background px-2 text-2xl font-bold text-secondary">
        {data.label}
      </div>
    </div>
  );
};

const BlockchainNode = ({ data }: { data: any }) => (
  <div className="w-[370px] text-end text-xl font-bold text-secondary">
    {data.label}
  </div>
);

const mobileNodes: Node[] = [
  {
    id: "camera-sensor",
    position: { x: 20, y: 0 },
    data: { label: "CAMERA SENSOR" },
    type: "camera",
  },
  {
    id: "1",
    position: { x: 30, y: 50 },
    data: { label: "Image Sensors<br />Real-time Video Streaming data" },
    type: "node1",
  },
  {
    id: "2",
    position: { x: 75, y: 180 },
    data: { label: "AES 256 Encrypted" },
    type: "node2",
  },
  {
    id: "3",
    position: { x: 30, y: 280 },
    data: { label: "Real-time Video<br />Streaming Data Analysis" },
    type: "node3",
  },
  {
    id: "4",
    position: { x: 75, y: 420 },
    data: { label: "Delete Raw Data" },
    type: "node4",
  },
  {
    id: "5",
    position: { x: 30, y: 520 },
    data: { label: "Transfer Encrypted<br />Anonymous Data" },
    type: "node5",
  },
  {
    id: "6",
    position: { x: 75, y: 660 },
    data: { label: "Verify Data Set" },
    type: "node4",
  },
  {
    id: "7",
    position: { x: 30, y: 780 },
    data: { label: "Distributed Server<br />System Store Data" },
    type: "node6",
  },
  {
    id: "blockchan",
    position: { x: 20, y: 920 },
    data: { label: "BlockChain" },
    type: "blockchain",
  },
  {
    id: "groupNode",
    position: { x: 0, y: 240 },
    data: { label: "EDGE AI" },
    type: "group",
  },
];

const largeDeviceNodes: Node[] = [
  {
    id: "camera-sensor",
    position: { x: 0, y: 0 },
    data: { label: "CAMERA SENSOR" },
    type: "camera",
  },
  {
    id: "1",
    position: { x: 0, y: 50 },
    data: { label: "Image Sensors<br />Real-time Video Streaming data" },
    type: "node1",
  },
  {
    id: "2",
    position: { x: 430, y: 80 },
    data: { label: "AES 256 Encrypted" },
    type: "node2",
  },
  {
    id: "3",
    position: { x: 800, y: 50 },
    data: { label: "Real-time Video<br />Streaming Data Analysis" },
    type: "node3",
  },
  {
    id: "4",
    position: { x: 845, y: 200 },
    data: { label: "Delete Raw Data" },
    type: "node4",
  },
  {
    id: "5",
    position: { x: 800, y: 300 },
    data: { label: "Transfer Encrypted<br />Anonymous Data" },
    type: "node5",
  },
  {
    id: "6",
    position: { x: 845, y: 450 },
    data: { label: "Verify Data Set" },
    type: "node4",
  },
  {
    id: "7",
    position: { x: 800, y: 550 },
    data: { label: "Distributed Server<br />System Store Data" },
    type: "node6",
  },
  {
    id: "groupNode",
    position: { x: 770, y: 0 },
    data: { label: "EDGE AI" },
    type: "group",
  },
  {
    id: "blockchan",
    position: { x: 800, y: 670 },
    data: { label: "BlockChain" },
    type: "blockchain",
  },
];

const edges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "default",
    style: { strokeWidth: 2, stroke: "#7627FF" },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    type: "custom",
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    type: "straight",
    style: { strokeWidth: 2, stroke: "#7627FF" },
  },
  { id: "e4-5", source: "4", target: "5", type: "custom" },
  {
    id: "e5-6",
    source: "5",
    target: "6",
    type: "default",
    style: { strokeWidth: 2, stroke: "#7627FF" },
  },
  { id: "e6-7", source: "6", target: "7", type: "custom" },
];

const CustomEdge = (props: EdgeProps) => {
  const { id, sourceX, sourceY, targetX, targetY } = props;

  const [edgePath] = getStraightPath({ sourceX, sourceY, targetX, targetY });

  return (
    <g>
      <BaseEdge
        id={id}
        path={edgePath}
        style={{ stroke: "#7627FF", strokeWidth: 2 }}
      />

      <defs>
        <marker
          id="arrowhead"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <line
            x1="1"
            y1="-2"
            x2="9"
            y2="5"
            stroke="#7627FF"
            strokeWidth="1.5"
          />
          <line
            x1="1"
            y1="12"
            x2="9"
            y2="5"
            stroke="#7627FF"
            strokeWidth="1.5"
          />
        </marker>
      </defs>

      <path
        d={edgePath}
        fill="none"
        stroke="transparent"
        strokeWidth={2}
        markerEnd="url(#arrowhead)"
      />
    </g>
  );
};

type FlowChartContextType = {
  isMobile: boolean;
};

const FlowChartContext = createContext<FlowChartContextType | null>(null);

const useFlowChartContext = () => {
  const context = useContext(FlowChartContext);

  if (!context) {
    throw new Error(
      "useFlowChartContext must be used within a FlowChartProvider",
    );
  }

  return context;
};

function EdgeAiFlowChart() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setIsMobile(window.innerWidth < 1024);
  }, []);

  return (
    <FlowChartContext.Provider value={{ isMobile }}>
      <div className="relative">
        <div className="relative -z-10 h-[640px] w-full lg:h-[730px]">
          <ReactFlow
            nodes={isMobile ? mobileNodes : largeDeviceNodes}
            edges={edges}
            nodeTypes={{
              node1: Node1,
              node2: Node2,
              node3: Node3,
              node4: Node4,
              node5: Node5,
              node6: Node6,
              group: GroupNode,
              camera: CameraSensorNode,
              blockchain: BlockchainNode,
            }}
            edgeTypes={{ custom: CustomEdge }}
            fitView
            zoomOnScroll={false}
            zoomOnPinch={false}
            panOnDrag={false}
            panOnScroll={false}
          />
        </div>
        <div className="max-w-[600px] lg:absolute lg:bottom-16 lg:left-0">
          <ul className="list-disc space-y-3 pl-4 text-sm leading-snug lg:text-base">
            <li>
              <strong>Edge AI: </strong>Data analyzed locally with AI
              processors, reducing server/cloud reliance.
            </li>
            <li>
              <strong>Data Encryption (AES-256): </strong>Secured via
              blockchain, ensuring tamper-proof safety.
            </li>
            <li>
              <strong>Data Anonymization: </strong>
              Only stores aggregated metadata, no images/videos retained.
            </li>
            <li>
              <strong>Consent Policy: </strong>
              Customers are clearly informed upfront.
            </li>
          </ul>
        </div>
      </div>
    </FlowChartContext.Provider>
  );
}

export default EdgeAiFlowChart;

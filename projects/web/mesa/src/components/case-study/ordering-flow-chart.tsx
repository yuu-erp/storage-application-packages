/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import ReactFlow, {
  BaseEdge,
  Edge,
  EdgeProps,
  getStraightPath,
  Handle,
  Node,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";
import { createContext, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import licenseKey3 from "@public/images/license-key-3.png";
import licenseKey5 from "@public/images/license-key-5.png";

const mobileNodes: Node[] = [
  {
    id: "group",
    position: { x: 0, y: 42 },
    data: {},
    type: "group",
  },
  {
    id: "1",
    position: { x: 40, y: 0 },
    data: { label: "CUSTOMER" },
    type: "node1",
  },
  {
    id: "2",
    position: { x: 20, y: 120 },
    data: { label: "Scan QR To Order<br />With Preferred Language" },
    type: "node2",
  },
  {
    id: "3",
    position: { x: 20, y: 220 },
    data: { label: "AI Recommend Suitable Item" },
    type: "node2",
  },
  {
    id: "4",
    position: { x: 20, y: 320 },
    data: { label: "Order" },
    type: "node4",
  },
  {
    id: "5",
    position: { x: 20, y: 400 },
    data: { label: "Tracking Order:Serving Time" },
    type: "node4",
  },
  {
    id: "6",
    position: { x: 30, y: 480 },
    data: { label: "Payment On Their Phone" },
    type: "node6",
  },
  {
    id: "7",
    position: { x: 90, y: 560 },
    data: { label: "Rating & Tip" },
    type: "node7",
  },
  {
    id: "8",
    position: { x: 40, y: 640 },
    data: { label: "MERCHANT A" },
    type: "node8",
  },
];

const largeDeviceNodes: Node[] = [
  {
    id: "group",
    position: { x: 0, y: 42 },
    data: {},
    type: "group",
  },
  {
    id: "1",
    position: { x: 40, y: 0 },
    data: { label: "CUSTOMER" },
    type: "node1",
  },
  {
    id: "2",
    position: { x: 20, y: 150 },
    data: { label: "Scan QR To Order<br />With Preferred Language" },
    type: "node2",
  },
  {
    id: "3",
    position: { x: 20, y: 300 },
    data: { label: "AI Recommend Suitable Item" },
    type: "node2",
  },
  {
    id: "4",
    position: { x: 420, y: 400 },
    data: { label: "Order" },
    type: "node4",
  },
  {
    id: "5",
    position: { x: 620, y: 400 },
    data: { label: "Tracking Order:Serving Time" },
    type: "node4",
  },
  {
    id: "6",
    position: { x: 1070, y: 300 },
    data: { label: "Payment On Their Phone" },
    type: "node6",
  },
  {
    id: "7",
    position: { x: 1130, y: 160 },
    data: { label: "Rating & Tip" },
    type: "node7",
  },
  {
    id: "8",
    position: { x: 1080, y: 0 },
    data: { label: "MERCHANT A" },
    type: "node8",
  },
];

const edges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "step",
    style: { strokeWidth: 2, stroke: "#7627FF" },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    type: "step",
    style: { strokeWidth: 2, stroke: "#7627FF" },
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    type: "step",
    style: { strokeWidth: 2, stroke: "#7627FF" },
  },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    type: "step",
    style: { strokeWidth: 2, stroke: "#7627FF" },
  },
  {
    id: "e5-6",
    source: "5",
    target: "6",
    type: "step",
    style: { strokeWidth: 2, stroke: "#7627FF" },
  },
  {
    id: "e6-7",
    source: "6",
    target: "7",
    type: "step",
    style: { strokeWidth: 2, stroke: "#7627FF" },
  },
  {
    id: "e7-8",
    source: "7",
    target: "8",
    type: "custom",
    style: { strokeWidth: 2, stroke: "#7627FF" },
  },
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

const Node1 = ({ data }: { data: any }) => (
  <div className="relative h-[84px] w-[260px] rounded-md bg-gradient-to-br from-primary/40 to-[#310BB0]/40 text-center font-bold text-secondary-foreground">
    <div className="flex h-full w-full items-center justify-center gap-4 rounded-md bg-[#1D1D1D]/5 backdrop-blur-xl">
      <Image
        src={licenseKey3}
        width={48}
        height={48}
        className="size-12"
        alt="license-key-3"
      />
      <span
        dangerouslySetInnerHTML={{ __html: data.label }}
        className="text-lg font-bold lg:text-xl"
      />
    </div>
    <Handle type="source" position={Position.Bottom} className="vertical" />
  </div>
);

const Node2 = ({ data }: { data: any }) => (
  <div className="flex w-[300px] items-center justify-center rounded-3xl border border-primary bg-[#01001C] py-4 text-center font-bold text-white">
    <Handle type="target" position={Position.Top} className="vertical" />
    <span
      dangerouslySetInnerHTML={{ __html: data.label }}
      className="text-sm lg:text-lg"
    />
    <Handle type="source" position={Position.Bottom} className="vertical" />
  </div>
);

const Node4 = ({ data }: { data: any }) => {
  const { isMobile } = useFlowChartContext();

  return (
    <div className="flex w-[300px] items-center justify-center rounded-full border border-primary bg-[#01001C] px-12 py-4 text-center font-bold text-white lg:w-full">
      <Handle
        type="target"
        position={isMobile ? Position.Top : Position.Left}
        className={cn(isMobile && "vertical")}
      />
      <span
        dangerouslySetInnerHTML={{ __html: data.label }}
        className="text-sm lg:text-lg"
      />
      <Handle
        type="source"
        position={isMobile ? Position.Bottom : Position.Right}
        className={cn(isMobile && "vertical")}
      />
    </div>
  );
};

const Node6 = ({ data }: { data: any }) => {
  const { isMobile } = useFlowChartContext();

  return (
    <div className="flex w-[280px] items-center justify-center rounded-full border border-primary bg-[#01001C] py-4 text-center font-bold text-white">
      <Handle
        type="target"
        position={isMobile ? Position.Top : Position.Bottom}
        className="vertical"
      />
      <span
        dangerouslySetInnerHTML={{ __html: data.label }}
        className="text-sm lg:text-lg"
      />
      <Handle
        type="source"
        position={isMobile ? Position.Bottom : Position.Top}
        className="vertical"
      />
    </div>
  );
};

const Node7 = ({ data }: { data: any }) => (
  <div className="flex w-[160px] items-center justify-center rounded-full border border-primary bg-[#01001C] py-4 text-center font-bold text-white">
    <Handle type="target" position={Position.Bottom} className="vertical" />
    <span
      dangerouslySetInnerHTML={{ __html: data.label }}
      className="text-sm lg:text-lg"
    />
    <Handle type="source" position={Position.Top} className="vertical" />
  </div>
);

const Node8 = ({ data }: { data: any }) => {
  const { isMobile } = useFlowChartContext();

  return (
    <div className="h-[84px] w-[260px] overflow-hidden rounded-md bg-gradient-to-br from-primary/40 to-[#310BB0]/40 text-center font-bold text-secondary-foreground">
      <Handle
        type="target"
        position={isMobile ? Position.Top : Position.Bottom}
        className="vertical"
      />
      <div className="flex h-full w-full items-center justify-center gap-4 bg-[#1d1d1d]/5">
        <Image
          src={licenseKey5}
          width={48}
          height={48}
          className="size-12"
          alt="license-key-5"
        />
        <span
          dangerouslySetInnerHTML={{ __html: data.label }}
          className="text-base font-bold lg:text-xl"
        />
      </div>
    </div>
  );
};

const GroupNode = () => (
  <div className="relative z-10 h-[250px] w-[320px] border border-dashed border-primary lg:h-[320px]" />
);

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

function OrderingFlowChart() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setIsMobile(window.innerWidth < 1024);
  }, []);

  return (
    <FlowChartContext.Provider value={{ isMobile }}>
      <div className="relative -z-10 h-[750px] w-full overflow-hidden lg:h-[520px]">
        <ReactFlow
          nodes={isMobile ? mobileNodes : largeDeviceNodes}
          edges={edges}
          nodeTypes={{
            node1: Node1,
            node2: Node2,
            node4: Node4,
            node6: Node6,
            node7: Node7,
            node8: Node8,
            group: GroupNode,
          }}
          edgeTypes={{ custom: CustomEdge }}
          fitView
          zoomOnScroll={false}
          zoomOnPinch={false}
          panOnDrag={false}
          panOnScroll={false}
        />

        <div className="absolute inset-x-0 bottom-0 -z-20 h-40 rounded-[50%] bg-secondary blur-[200px]" />
      </div>
    </FlowChartContext.Provider>
  );
}

export default OrderingFlowChart;

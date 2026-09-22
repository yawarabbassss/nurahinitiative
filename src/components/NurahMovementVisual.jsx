import React, { useState, useEffect } from 'react';
import { Sparkles, Network, RefreshCw } from 'lucide-react';

export default function NurahMovementVisual() {
  const [nodeCount, setNodeCount] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-expand nodes sequentially to simulate collective movement
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setNodeCount((prev) => (prev >= 12 ? 1 : prev + 1));
    }, 1800);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Node position coordinates for SVG graph
  const nodes = [
    { x: 50, y: 50, label: 'One Action', color: '#8C5260' }, // Center primary node
    { x: 30, y: 35, label: 'Caring', color: '#E2A9B8' },
    { x: 70, y: 35, label: 'Serving', color: '#FED6BB' },
    { x: 35, y: 65, label: 'Speaking Up', color: '#C5D4EB' },
    { x: 65, y: 65, label: 'Awareness', color: '#9DAB99' },
    { x: 20, y: 25, label: 'Volunteer', color: '#E2A9B8' },
    { x: 80, y: 25, label: 'Youth Leader', color: '#FED6BB' },
    { x: 15, y: 75, label: 'Advocate', color: '#C5D4EB' },
    { x: 85, y: 75, label: 'Community', color: '#9DAB99' },
    { x: 50, y: 20, label: 'Empowerment', color: '#8C5260' },
    { x: 50, y: 80, label: 'Social Reform', color: '#8C5260' },
    { x: 50, y: 50, label: 'Collective Movement', color: '#8C5260' },
  ];

  const activeNodes = nodes.slice(0, nodeCount);

  return (
    <section id="movement" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-nurah-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-mono tracking-[0.25em] uppercase text-nurah-berry font-bold mb-3 px-3.5 py-1.5 rounded-full bg-nurah-bg-alt border border-nurah-berry/15">
            SIGNATURE INTERACTION
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-nurah-berry-dark tracking-tight">
            The Nurah Movement
          </h2>
          <p className="mt-4 text-base text-nurah-berry-dark/80 font-sans">
            Visualizing how single individual actions branch out and connect into an impactful network of collective change.
          </p>
        </div>

        {/* Interactive SVG Network Container */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-nurah-card via-nurah-card-subtle to-nurah-bg-alt rounded-3xl p-6 sm:p-10 border border-nurah-berry/20 shadow-xl relative">
          
          {/* Controls bar */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-nurah-berry/10">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-nurah-berry">
              <Network className="w-4 h-4" />
              <span>Active Nodes: {nodeCount} / 12</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setNodeCount((prev) => Math.min(12, prev + 1))}
                className="px-3 py-1.5 rounded-full bg-nurah-card border border-nurah-berry/20 text-xs font-mono font-semibold text-nurah-berry hover:bg-nurah-berry/10"
              >
                + Add Action
              </button>
              <button
                onClick={() => {
                  setNodeCount(1);
                  setIsPlaying(true);
                }}
                className="p-1.5 rounded-full bg-nurah-card border border-nurah-berry/20 text-nurah-berry hover:bg-nurah-berry/10"
                title="Reset Simulation"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* SVG Canvas Metaphor */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] bg-nurah-bg/60 rounded-2xl border border-nurah-berry/10 overflow-hidden flex items-center justify-center">
            
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
              
              {/* Draw Connective Lines between active nodes */}
              {activeNodes.map((nodeA, i) =>
                activeNodes.map((nodeB, j) => {
                  if (i >= j) return null;
                  const distance = Math.hypot(nodeA.x - nodeB.x, nodeA.y - nodeB.y);
                  if (distance > 45) return null; // Only connect close nodes
                  return (
                    <line
                      key={`${i}-${j}`}
                      x1={nodeA.x}
                      y1={nodeA.y}
                      x2={nodeB.x}
                      y2={nodeB.y}
                      stroke="#8C5260"
                      strokeWidth="0.4"
                      strokeOpacity="0.45"
                      strokeDasharray="1,1"
                      className="animate-pulse"
                    />
                  );
                })
              )}

              {/* Render Animated Nodes */}
              {activeNodes.map((node, idx) => (
                <g key={idx} className="transition-all duration-500">
                  {/* Glowing Outer Ring */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="4"
                    fill={node.color}
                    fillOpacity="0.25"
                    className="animate-ping"
                  />
                  {/* Core Node Circle */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="2.2"
                    fill={node.color}
                    stroke="#FAF2F0"
                    strokeWidth="0.6"
                  />
                  {/* Label */}
                  <text
                    x={node.x}
                    y={node.y + 5}
                    fontSize="2.4"
                    fontFamily="serif"
                    fontWeight="bold"
                    fill="#582A36"
                    textAnchor="middle"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>

          </div>

          {/* Conceptual Progression Legend */}
          <div className="mt-6 pt-4 border-t border-nurah-berry/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-3 rounded-xl bg-nurah-card border border-nurah-berry/10 text-xs">
              <span className="font-mono uppercase font-bold text-nurah-berry block">Stage 1</span>
              <span className="text-nurah-berry-dark">Single Caring Action</span>
            </div>
            <div className="p-3 rounded-xl bg-nurah-card border border-nurah-berry/10 text-xs">
              <span className="font-mono uppercase font-bold text-nurah-berry block">Stage 2</span>
              <span className="text-nurah-berry-dark">Connected Youth Network</span>
            </div>
            <div className="p-3 rounded-xl bg-nurah-card border border-nurah-berry/10 text-xs">
              <span className="font-mono uppercase font-bold text-nurah-berry block">Stage 3</span>
              <span className="text-nurah-berry-dark">Collective Positive Change</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { Shield, Activity, Eye, BarChart3, Network, Zap, Lock, AlertTriangle, CheckCircle, ArrowRight, Monitor, Database, Brain, Code, Github, ExternalLink } from 'lucide-react';
import './App.css';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Multi-IDS Integration",
      description: "Seamlessly integrate with Suricata and Zeek for network monitoring",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Gain actionable insights by evaluating network traffic behavior and trends",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Real-time Visualization",
      description: "Interactive dashboards with live threat detection and network performance metrics",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Centralized Management",
      description: "Unified interface for managing multiple network segments and security policies",
      color: "from-orange-500 to-red-500"
    }
  ];

  const technologies = [
    //{ name: "Snort", description: "Open-source intrusion prevention system", icon: <Lock className="w-6 h-6" /> },
    { name: "Zeek (Bro)", description: "Network analysis framework", icon: <Activity className="w-6 h-6" /> },
    { name: "Suricata", description: "High-performance IDS/IPS engine", icon: <Shield className="w-6 h-6" /> },
    //{ name: "Kismet", description: "Wireless network detector", icon: <Zap className="w-6 h-6" /> }
  ];

  const skills = [
    { category: "Security", items: ["Cyber Security", "Network Protocols", "IDS/IPS Systems"] },
    { category: "Programming", items: ["Python", "JavaScript", "C/C++", "OOP"] },
    { category: "Analysis", items: ["Data Mining", "Pattern Recognition", "Visualization"] }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 bg-slate-800/50 backdrop-blur-lg border-b border-slate-700/50">
        <div className="flex items-center space-x-2">
          <Shield className="w-8 h-8 text-cyan-400" />
          <span className="text-xl font-bold">Project Syntra</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
          <a href="#tech" className="hover:text-cyan-400 transition-colors">Technology</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="https://github.com/ConZee/Project-Syntra" className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all">
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 text-center">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform duration-300">
                <Monitor className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                <Activity className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Project Syntra
            </span>
            <br />
            <span className="text-3xl md:text-4xl font-light text-slate-300">
              Virtualized IDS Dashboard
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Advanced network monitoring solution that integrates multiple intrusion detection systems 
            into a unified, intelligent dashboard for comprehensive cybersecurity management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-xl">
              <span>Explore Dashboard</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Floating Cards */}
        <div id="features" className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transform transition-all duration-500 delay-${index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <div className={`relative p-6 rounded-2xl bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105 ${activeFeature === index ? 'ring-2 ring-cyan-400/50' : ''}`}>
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Section */}
      <section id="tech" className="relative z-10 px-6 py-20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Integrated Technologies
              </span>
            </h2>
            <p className="text-xl text-slate-400">
              Leveraging industry-leading intrusion detection systems
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="flex-grow basis-[300px] max-w-[320px] group">
                <div className="h-full flex flex-col justify-between p-6 rounded-xl bg-slate-700/30 backdrop-blur-lg border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-purple-500/20 rounded-lg mr-3 group-hover:bg-purple-500/30 transition-colors">
                      {tech.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{tech.name}</h3>
                  </div>
                  <p className="text-slate-400 text-sm break-words">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Architecture Preview */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-lg border border-slate-600/30">
            <h3 className="text-2xl font-bold text-center mb-8">System Architecture</h3>
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Network className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium">Network Layer</span>
              </div>
              <ArrowRight className="w-8 h-8 text-slate-500 transform lg:rotate-0 rotate-90" />
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium">IDS Processing</span>
              </div>
              <ArrowRight className="w-8 h-8 text-slate-500 transform lg:rotate-0 rotate-90" />
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium">Data Mining</span>
              </div>
              <ArrowRight className="w-8 h-8 text-slate-500 transform lg:rotate-0 rotate-90" />
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium">Dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Requirements */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
                Technical Foundation
              </span>
            </h2>
            <p className="text-xl text-slate-400">
              Building upon comprehensive technical expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="p-6 rounded-xl bg-slate-800/40 backdrop-blur-lg border border-slate-700/40">
                <div className="flex items-center mb-4">
                  <Code className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="about" className="relative z-10 px-6 py-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Final Year Project
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            This virtualized dashboard system represents the culmination of advanced cybersecurity knowledge, 
            combining multiple intrusion detection systems with sophisticated data analysis techniques to 
            create a comprehensive network monitoring solution.
          </p>
          
          {/* Video Recording */}
          {/*
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="w-full sm:w-[640px] aspect-video rounded-xl shadow-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=TSuuX1c-Q4vGpuVf"
                title="Project Sentinel Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-xl bg-slate-700/20 backdrop-blur-lg">
              <AlertTriangle className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Threat Detection</h3>
              <p className="text-slate-400">Real-time identification and analysis of network security threats</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-700/20 backdrop-blur-lg">
              <Database className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Data Processing</h3>
              <p className="text-slate-400">Advanced mining techniques for actionable security insights</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-700/20 backdrop-blur-lg">
              <Monitor className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Visualization</h3>
              <p className="text-slate-400">Intuitive dashboards for comprehensive network monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8 bg-slate-900/80 backdrop-blur-lg border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-cyan-400 mr-2" />
            <span className="text-lg font-semibold">Project Syntra Dashboard</span>
          </div>
          <p className="text-slate-400 text-sm">
            Final Year Project - Virtualized Network Intrusion Detection System
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://github.com/ConZee/Project-Syntra" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
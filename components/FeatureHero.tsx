"use client";

import React, { useState, useEffect } from "react";
import { Check, Calendar, BarChart3, Users, Clock, Plus } from "lucide-react";

const FormBuilderLanding = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  type FormTaskProps = {
    title: string;
    priority: "High" | "Medium" | "Low";
    checked: boolean;
    delay?: number;
  };

  const FormTask: React.FC<FormTaskProps> = ({
    title,
    priority,
    checked,
    delay = 0,
  }) => (
    <div
      className={`flex items-center justify-between p-3 rounded-lg bg-white shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-md hover:scale-105 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all duration-300 ${
            checked
              ? "bg-[#F6C957] border-[#F6C957]"
              : "border-gray-300 hover:border-[#F6C957]"
          }`}
        >
          {checked && <Check size={10} className="text-white" />}
        </div>
        <span
          className={`text-sm ${
            checked ? "line-through text-gray-500" : "text-gray-700"
          }`}
        >
          {title}
        </span>
      </div>
      <div
        className={`px-2 py-1 rounded text-xs font-medium ${
          priority === "High"
            ? "bg-red-100 text-red-600"
            : priority === "Medium"
            ? "bg-yellow-100 text-yellow-600"
            : "bg-green-100 text-green-600"
        }`}
      >
        {priority}
      </div>
    </div>
  );

  type AssignmentCardProps = {
    user: string;
    task: string;
    delay?: number;
  };

  const AssignmentCard: React.FC<AssignmentCardProps> = ({
    user,
    task,
    delay = 0,
  }) => (
    <div
      className={`flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-md ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
        {user.charAt(0)}
      </div>
      <div className="flex-1">
        <div className="text-sm text-gray-600">
          <span className="font-medium text-gray-800">{user}</span> creating
          form for <span className="font-medium text-gray-800">Sarah</span>
        </div>
        <div className="text-xs text-gray-500 mt-1">1 Form • Form Designer</div>
      </div>
      <div className="w-6 h-6 bg-[#F6C957] rounded-full flex items-center justify-center">
        <Plus size={12} className="text-white" />
      </div>
    </div>
  );

  type ProgressCardProps = {
    title: string;
    progress: number;
    dueDate: string;
    delay?: number;
  };

  const ProgressCard: React.FC<ProgressCardProps> = ({
    title,
    progress,
    dueDate,
    delay = 0,
  }) => (
    <div
      className={`p-4 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-md ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-xs font-medium">S</span>
        </div>
        <div className="text-xs text-gray-500">Sarah</div>
      </div>
      <div className="text-sm font-medium text-gray-800 mb-2">{title}</div>
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
        <Calendar size={12} />
        <span>Due Date: {dueDate}</span>
        <span className="text-red-500">• 3 days</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <div
          className="bg-[#F6C957] h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: isVisible ? `${progress}%` : "0%" }}
        ></div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">{progress}%</span>
        <button className="px-4 py-1 bg-gray-900 text-white text-xs rounded-full hover:bg-gray-800 transition-colors">
          View Form
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl font-semibold text-gray-900 mb-6 leading-tight">
            Made for how your team
            <br />
            actually builds forms.
          </h1>
          <p className=" text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From simple contact forms to complex surveys, FormCraft adapts to
            your team&apos;s real-world workflows — not the other way around.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Card 1: Stay Organized */}
          <div
            className={`bg-gray-50 rounded-2xl p-8 transition-all duration-700 cs border border-[#F6C957]  ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay organized, effortlessly.
            </h3>
            <p className="text-gray-600 mb-8">
              Easily track forms, fields, and responses in one place.
            </p>

            <div className="space-y-4">
              <div className="text-sm font-medium text-gray-700 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#F6C957] rounded-full"></div>
                Design Phase
                <div className="ml-auto text-xs text-gray-500">Priority ↑</div>
              </div>

              <FormTask
                title="Define form structure"
                priority="High"
                checked={true}
                delay={200}
              />
              <FormTask
                title="Create validation rules"
                priority="Medium"
                checked={false}
                delay={300}
              />
              <FormTask
                title="Setup confirmation page"
                priority="Low"
                checked={true}
                delay={400}
              />

              <div className="text-sm font-medium text-gray-700 mb-4 flex items-center gap-2 mt-8">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Implementation
                <div className="ml-auto text-xs text-gray-500">Assignee ↑</div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-4 h-4 rounded border-2 border-[#F6C957] bg-[#F6C957] flex items-center justify-center">
                    <Check size={10} className="text-white" />
                  </div>
                  <span>Build form components</span>
                  <div className="w-6 h-6 bg-blue-500 rounded-full text-xs text-white flex items-center justify-center ml-auto">
                    S
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-4 h-4 rounded border-2 border-[#F6C957] bg-[#F6C957] flex items-center justify-center">
                    <Check size={10} className="text-white" />
                  </div>
                  <span>Test form functionality</span>
                  <div className="w-6 h-6 bg-green-500 rounded-full text-xs text-white flex items-center justify-center ml-auto">
                    M
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-4 h-4 rounded border-2 border-gray-300"></div>
                  <span>Deploy to production</span>
                  <div className="w-6 h-6 bg-purple-500 rounded-full text-xs text-white flex items-center justify-center ml-auto">
                    A
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Built for Teams */}
          <div
            className={`bg-gray-50 rounded-2xl p-8 transition-all duration-700 cs border border-[#F6C957] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Built for collaborative teams.
            </h3>
            <p className="text-gray-600 mb-8">
              Collaborate in real time with live edits and comments.
            </p>

            <div className="space-y-4">
              <AssignmentCard user="Alex" task="Contact Form" delay={300} />

              <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                <div className="text-sm font-medium text-gray-700 mb-3">
                  1 Form
                </div>

                <div className="overflow-hidden rounded-lg border border-gray-200">
                  <div className="bg-gray-50 px-4 py-2 text-xs font-medium text-gray-600 border-b border-gray-200 grid grid-cols-3 gap-4">
                    <div>Form Name</div>
                    <div>Owner</div>
                    <div>Assignee</div>
                  </div>

                  <div className="bg-white px-4 py-3 grid grid-cols-3 gap-4 items-center">
                    <div className="text-sm text-gray-800">Contact Form</div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full text-xs text-white flex items-center justify-center">
                        A
                      </div>
                      <span className="text-sm text-gray-600">Alex</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full text-xs text-white flex items-center justify-center">
                        S
                      </div>
                      <span className="text-sm text-gray-600">Sarah</span>
                      <div className="ml-2 px-2 py-1 bg-[#F6C957] text-white text-xs rounded">
                        Alex
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 text-white">
                <div className="text-lg font-bold mb-2">
                  Precision-Driven Form Growth
                </div>
                <div className="text-gray-300 text-sm mb-4">
                  Let AI suggest field types, validations, and layouts.
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-[#F6C957] rounded-full"></div>
                  <span>Contact form campaign</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Analytics Driven */}
          <div
            className={`bg-gray-50 rounded-2xl p-8 transition-all duration-700 cs border border-[#F6C957] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ animationDelay: "400ms" }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Analytics-Driven Form Optimization
            </h3>
            <p className="text-gray-600 mb-8">
              View responses as charts, tables, or real-time dashboards.
            </p>

            <div className="space-y-6">
              <ProgressCard
                title="Contact Form"
                progress={65}
                dueDate="Jan 15"
                delay={500}
              />

              <div
                className={`bg-white rounded-lg p-4 border border-gray-100 shadow-sm transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ animationDelay: "700ms" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-medium text-gray-700">
                    Response Analytics
                  </div>
                  <div className="text-xs text-gray-500">Live</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#F6C957]">
                      1,247
                    </div>
                    <div className="text-xs text-gray-500">Total Responses</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-500">89%</div>
                    <div className="text-xs text-gray-500">Completion Rate</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Email Field</span>
                    <span>98% completed</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div
                      className="bg-[#F6C957] h-1 rounded-full transition-all duration-1000"
                      style={{ width: isVisible ? "98%" : "0%" }}
                    ></div>
                  </div>

                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Message Field</span>
                    <span>76% completed</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div
                      className="bg-green-500 h-1 rounded-full transition-all duration-1000 delay-200"
                      style={{ width: isVisible ? "76%" : "0%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div
                className={`bg-gradient-to-r from-[#F6C957] to-yellow-400 rounded-lg p-4 text-white transition-all duration-700 hover:shadow-lg ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ animationDelay: "800ms" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 size={16} />
                  <span className="text-sm font-medium">
                    Made with FormCraft
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBuilderLanding;

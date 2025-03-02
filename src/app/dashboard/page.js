"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import {
  BookOpenIcon,
  AcademicCapIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ClockIcon,
  StarIcon,
} from "@heroicons/react/outline";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true once component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Sample data - would come from API in a real application
  const courses = [
    {
      id: 1,
      name: "Web Development Fundamentals",
      progress: 75,
      completed: 9,
      total: 12,
    },
    {
      id: 2,
      name: "HTML",
      progress: 40,
      completed: 4,
      total: 10,
    },
    {
      id: 3,
      name: "CSS",
      progress: 90,
      completed: 9,
      total: 10,
    },
    {
      id: 4,
      name: "Introduction to JavaScript",
      progress: 20,
      completed: 2,
      total: 10,
    },
    {
      id: 5,
      name: "Introduction to PHP",
      progress: 20,
      completed: 2,
      total: 10,
    },
  ];

  const recentQuizzes = [
    {
      id: 1,
      name: "HTMl Quiz 3",
      course: "Introduction to React",
      score: 85,
      date: "2025-03-01",
    },
    {
      id: 2,
      name: "Bacis of PHP",
      course: "web development",
      score: 72,
      date: "2025-01-01",
    },
    {
      id: 3,
      name: "CSS Layouts",
      course: "Web Development Fundamentals",
      score: 95,
      date: "2024-12-25",
    },
  ];

  const upcomingLessons = [
    {
      id: 1,
      name: "JS beginner",
      course: "Introduction to JavaScript",
      date: "2025-03-07",
    },
    {
      id: 2,
      name: "PHP beginner",
      course: "Advanced Literature",
      date: "2025-03-07",
    },
    {
      id: 3,
      name: "JavaScript Basics",
      course: "Web Development Fundamentals",
      date: "2025-03-09",
    },
  ];

  const totalCompletedLessons = courses.reduce(
    (sum, course) => sum + course.completed,
    0
  );
  const totalLessons = courses.reduce((sum, course) => sum + course.total, 0);
  const overallProgress = Math.round(
    (totalCompletedLessons / totalLessons) * 100
  );

  const averageQuizScore = recentQuizzes.length
    ? Math.round(
        recentQuizzes.reduce((sum, quiz) => sum + quiz.score, 0) /
          recentQuizzes.length
      )
    : 0;

  // Function to format dates consistently on both server and client
  const formatDate = (dateString) => {
    if (!isClient) {
      // Return a consistent format for server-side rendering
      return "Loading...";
    }
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Learning Dashboard</title>
        <meta
          name="description"
          content="Student learning progress dashboard"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-indigo-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <AcademicCapIcon className="h-8 w-8 text-white" />
                <span className="ml-2 text-white text-xl font-bold">
                  LearnTrack
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="ml-3 relative">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-indigo-300 flex items-center justify-center">
                    <span className="text-indigo-800 font-medium">NK</span>
                  </div>
                  <span className="ml-2 text-white">Nikhil kandhare</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Your Learning Dashboard
        </h1>

        {/* Overview Stats */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                    <ChartBarIcon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Overall Progress
                      </dt>
                      <dd>
                        <div className="flex items-center mt-1">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-indigo-600 h-2.5 rounded-full"
                              style={{ width: `${overallProgress}%` }}
                            ></div>
                          </div>
                          <span className="ml-2 text-lg font-semibold text-gray-900">
                            {overallProgress}%
                          </span>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                    <CheckCircleIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Completed Lessons
                      </dt>
                      <dd>
                        <div className="text-lg font-semibold text-gray-900">
                          {totalCompletedLessons} / {totalLessons}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-yellow-100 rounded-md p-3">
                    <StarIcon className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Average Quiz Score
                      </dt>
                      <dd>
                        <div className="text-lg font-semibold text-gray-900">
                          {averageQuizScore}%
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              className={`${
                activeTab === "overview"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={`${
                activeTab === "courses"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
              onClick={() => setActiveTab("courses")}
            >
              Courses
            </button>
            <button
              className={`${
                activeTab === "quizzes"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
              onClick={() => setActiveTab("quizzes")}
            >
              Quizzes
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="py-6">
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Course Progress
                </h2>
                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                  <ul className="divide-y divide-gray-200">
                    {courses.map((course) => (
                      <li key={course.id}>
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <BookOpenIcon className="h-5 w-5 text-indigo-500 mr-2" />
                              <p className="text-sm font-medium text-indigo-600 truncate">
                                {course.name}
                              </p>
                            </div>
                            <div className="ml-2 flex-shrink-0 flex">
                              <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {course.completed} / {course.total} lessons
                              </p>
                            </div>
                          </div>
                          <div className="mt-2 sm:flex sm:justify-between">
                            <div className="sm:flex">
                              <div className="w-full mt-2">
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                  <div
                                    className="bg-indigo-600 h-2.5 rounded-full"
                                    style={{ width: `${course.progress}%` }}
                                  ></div>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  {course.progress}% complete
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Upcoming Lessons
                </h2>
                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                  <ul className="divide-y divide-gray-200">
                    {upcomingLessons?.map((lesson) => (
                      <li key={lesson.id}>
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-indigo-600 truncate">
                              {lesson.name}
                            </p>
                          </div>
                          <div className="mt-2 sm:flex sm:justify-between">
                            <div className="sm:flex">
                              <p className="flex items-center text-sm text-gray-500">
                                <BookOpenIcon className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                                {lesson.course}
                              </p>
                            </div>
                            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                              <ClockIcon className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                              <span>{formatDate(lesson.date)}</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <h2 className="text-lg font-medium text-gray-900 mt-6 mb-4">
                  Recent Quizzes
                </h2>
                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                  <ul className="divide-y divide-gray-200">
                    {recentQuizzes?.map((quiz) => (
                      <li key={quiz.id}>
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-indigo-600 truncate">
                              {quiz.name}
                            </p>
                            <div className="ml-2 flex-shrink-0 flex">
                              <p
                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                  quiz.score >= 80
                                    ? "bg-green-100 text-green-800"
                                    : quiz.score >= 60
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                                }`}
                              >
                                {quiz.score}%
                              </p>
                            </div>
                          </div>
                          <div className="mt-2 sm:flex sm:justify-between">
                            <div className="sm:flex">
                              <p className="flex items-center text-sm text-gray-500">
                                <BookOpenIcon className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                                {quiz.course}
                              </p>
                            </div>
                            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                              <ClockIcon className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                              <p>{formatDate(quiz.date)}</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "courses" && (
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Your Courses
              </h2>
              {/* Detailed courses view would go here */}
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  {courses.map((course) => (
                    <li key={course.id} className="block hover:bg-gray-50">
                      <div className="px-4 py-6 sm:px-6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-indigo-600">
                            {course.name}
                          </h3>
                          <div className="ml-2 flex-shrink-0 flex">
                            <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {course.progress}% complete
                            </p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-indigo-600 h-2.5 rounded-full"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-between">
                          <div>
                            <p className="text-sm text-gray-500">
                              <span className="font-medium text-gray-900">
                                {course.completed}
                              </span>{" "}
                              of{" "}
                              <span className="font-medium text-gray-900">
                                {course.total}
                              </span>{" "}
                              lessons completed
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              window.location.replace(
                                "/course/start?course_name=Web_Development_Fundamentals"
                              );
                            }}
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Continue Learning
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === "quizzes" && (
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Your Quiz Results
              </h2>
              {/* Detailed quiz view would go here */}
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Quiz Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Course
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Score
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Review</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentQuizzes.map((quiz) => (
                      <tr key={quiz.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {quiz.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {quiz.course}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(quiz.date)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              quiz.score >= 80
                                ? "bg-green-100 text-green-800"
                                : quiz.score >= 60
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {quiz.score}%
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Review
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
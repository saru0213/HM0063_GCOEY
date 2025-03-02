"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MapPin,
  BriefcaseIcon,
  ClockIcon,
  TagIcon,
  CalendarIcon,
  SearchIcon,
  BuildingIcon,
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const states = [
  "Maharashtra",
  "Delhi",
  "Karnataka",
  "Tamil Nadu",
  "Uttar Pradesh",
  "West Bengal",
  "Rajasthan",
  "Gujarat",
  "Punjab",
  "Haryana",
  "Madhya Pradesh",
  "Jharkhand",
  "Kerala",
  "Chhattisgarh",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Sikkim",
  "Arunachal Pradesh",
  "Manipur",
  "Mizoram",
  "Nagaland",
  "Tripura",
  "Andhra Pradesh",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Lakshadweep",
  "Puducherry",
  "Telangana",
  "Andaman and Nicobar Islands",
  "Other",
];

const dayArray = [7, 15, 30, 45, 60, 75, 90];

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");
  const [state, setState] = useState("Maharashtra");
  const [day, setDay] = useState(30);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const quesry = localStorage.getItem("role");
    if (quesry) {
      setQuery(quesry);
    }
  }, []);

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/jobs?q=${query}&location=${state}`);
      const data = await response.json();

      const today = new Date();
      const DaysAgo = new Date();
      DaysAgo.setDate(today.getDate() - day);

      const filteredJobs = data.filter((job) => {
        const jobCreatedDate = new Date(job.created);
        return jobCreatedDate >= DaysAgo;
      });

      setJobs(filteredJobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchJobs();
  };

  const JobCardSkeleton = () => (
    <Card className="overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <Skeleton className="h-6 w-3/4 bg-white/20" />
      </CardHeader>
      <CardContent className="pt-4 space-y-2">
        <Skeleton className="h-4 w-1/2 bg-gray-200" />
        <Skeleton className="h-4 w-2/3 bg-gray-200" />
        <Skeleton className="h-4 w-1/2 bg-gray-200" />
        <Skeleton className="h-4 w-3/4 bg-gray-200" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-10 w-full bg-gray-200" />
      </CardFooter>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Discover Your Dream Job
        </h1>
        <Card className="mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent>
            <form onSubmit={handleSearch} className="space-y-4 mt-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2 relative">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for jobs..."
                    className="pl-10 pr-4 py-2 w-full"
                  />
                </div>
                <div className="w-full md:w-1/2 flex gap-4">
                  <Select
                    value={state}
                    onValueChange={setState}
                    className="w-1/2"
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a state" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select
                    value={String(day)}
                    onValueChange={(value) => setDay(Number(value))}
                    className="w-1/2"
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select days" />
                    </SelectTrigger>
                    <SelectContent>
                      {dayArray.map((d) => (
                        <SelectItem key={d} value={String(d)}>
                          Last {d} days
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold"
                disabled={isLoading}
              >
                {isLoading ? "Searching..." : "Find Jobs"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {isLoading ? (
            Array(6)
              .fill()
              .map((_, index) => <JobCardSkeleton key={index} />)
          ) : jobs.length === 0 ? (
            <p className="text-center text-gray-500 col-span-2">
              No jobs found from the last {day} days. Try adjusting your search
              criteria.
            </p>
          ) : (
            jobs.map((job) => (
              <Card
                key={job.id}
                className="overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <CardTitle className="text-xl font-semibold">
                    {job.title}
                  </CardTitle>
                  <p className="text-sm text-blue-100 flex items-center">
                    <BuildingIcon className="w-4 h-4 mr-2" />
                    {job.company.display_name}
                  </p>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                      <span>{job.location.display_name}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <ClockIcon className="w-5 h-5 mr-2 text-blue-500" />
                      <span>{job.contract_time || "Not specified"}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <TagIcon className="w-5 h-5 mr-2 text-blue-500" />
                      <span>{job.category.label}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CalendarIcon className="w-5 h-5 mr-2 text-blue-500" />
                      <span>
                        Posted: {new Date(job.created).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-start text-gray-600 mt-2">
                      <BriefcaseIcon className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-blue-500" />
                      <p className="text-sm line-clamp-3">{job.description}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-50">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold"
                  >
                    <a
                      href={job.redirect_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <BriefcaseIcon className="w-5 h-5 mr-2" />
                      Apply Now
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

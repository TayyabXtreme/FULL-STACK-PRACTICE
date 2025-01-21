import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  useCreateLectureMutation,
  useGetCourseLecturesQuery,
} from "@/features/api/courseApi";

import { Loader2, LucideArrowLeftCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import Lecture from "./Lecture";

const CreateLecture = () => {
  const params = useParams();
  const courseId = params.courseId;
  const navigate = useNavigate();

  const [lectureTitle, setLectureTitle] = useState("");
  const [createLecture, { data, isLoading, isSuccess, error }] =
    useCreateLectureMutation();
  const {
    data: lectureData,
    isLoading: lectureLoading,
    isError: lectureError,
    refetch
  } = useGetCourseLecturesQuery(courseId);
  const createLectureHandler = async () => {
    await createLecture({ lectureTitle, courseId });
  };


  useEffect(() => {
    if (data && isSuccess) {
        refetch()
      toast.success(data.message || "lecture create successfully");
     
    }
    if (error) {
      toast.error(error.data.message || "failed to create course sorry");
    }
  }, [data, isLoading, isSuccess, error]);

return (
    <div className="flex-1 mx-10">
        <div>
            <LucideArrowLeftCircle
                className="transition-transform transform hover:scale-110 cursor-pointer"
                onClick={() => navigate(`/admin/course/${courseId}`)}
                size="25"
            />
        </div>
        <div className="mb-4">
            <h1 className="font-bold text-xl animate-pulse">
                Let's add a lecture, add some basic details for your new lecture
            </h1>
            <p className="text-sm">
                This is the admin panel for adding new lectures.
            </p>
        </div>
        <div>
            <div className="space-y-4">
                <Label>Title</Label>
                <Input
                    value={lectureTitle}
                    onChange={(e) => setLectureTitle(e.target.value)}
                    type="text"
                    name="lectureTitle"
                    placeholder="Your Lecture Title"
                />
            </div>

            <div className="flex gap-2 items-center mt-4">
                <Button onClick={() => navigate(`/admin/course/${courseId}`)} variant={"outline"}>
                    <LucideArrowLeftCircle
                        className="transition-transform transform hover:scale-110 cursor-pointer"
                        size={"25"}
                    />
                    Back to course
                </Button>
                <Button onClick={createLectureHandler} disabled={isLoading}>
                    {isLoading ? (
                        <>
                            <Loader2 className="animate-spin h-4 w-4 ml-2" /> Please Wait
                        </>
                    ) : (
                        "Create Lecture"
                    )}
                </Button>
            </div>
            <div className="mt-10">
                {lectureLoading ? (
                    <div className="flex flex-col items-center">
                        <Loader2 className="animate-spin h-12 w-12 text-blue-500" />
                        <p className="text-blue-500 mt-2">Loading Lectures...</p>
                    </div>
                ) : lectureError ? (
                    <p className="text-red-500 animate-bounce">Failed to Load Lectures</p>
                ) : lectureData.lecture.length === 0 ? (
                    <div className="flex flex-col items-center">
                        <LucideArrowLeftCircle className="h-12 w-12 text-gray-400" />
                        <p className="text-gray-500">No Lecture Available</p>
                    </div>
                ) : (
                    lectureData.lecture.map((lecture, index) => {
                        return <Lecture key={lecture._id} courseId={courseId} lecture={lecture} index={index} />;
                    })
                )}
            </div>
        </div>
    </div>
);
};

export default CreateLecture;

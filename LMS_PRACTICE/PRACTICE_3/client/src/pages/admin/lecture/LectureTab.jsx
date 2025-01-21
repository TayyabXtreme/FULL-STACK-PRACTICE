import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { useEditLectureMutation, useGetLectureByIdQuery, useRemoveLectureMutation} from '@/features/api/courseApi';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';

const MEDIA_API = "http://localhost:8080/api/v1/media";

const LectureTab = () => {
  const [lectureTitle, setLectureTitle] = useState('');
  const [uploadVideoInfo, setUploadVideoInfo] = useState(null);
  const [isFree, setIsFree] = useState(false);
  const [mediaProgress, setMediaProgress] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);

  // Correct useParams usage
  const { courseId, lectureId } = useParams();

  const [editLecture, { data, isLoading, error, isSuccess }] = useEditLectureMutation();
    const [removeLecture,{data:removeData,isLoading:removeLoading,isSuccess:removeIsSuccess}]=useRemoveLectureMutation()
  const {data:lectureData}=useGetLectureByIdQuery(lectureId)
  const lecture=lectureData?.lecture
  
    const fileChangeHandler = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      setMediaProgress(true);
      try {
        const res = await axios.post(`${MEDIA_API}/upload-video`, formData, {
          onUploadProgress: ({ loaded, total }) => {
            setUploadProgress(Math.round((loaded * 100) / total));
          },
        });

        if (res.data.success) {
          console.log(res.data);
          setUploadVideoInfo({
            videoUrl: res.data.data.secure_url,
            publicId: res.data.data.public_id,
          });
          setBtnDisabled(false);
          toast.success(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error('Video upload failed');
      } finally {
        setMediaProgress(false);
      }
    }
  };

  const editLectureHandler = async () => {
    if (!courseId || !lectureId) {
      toast.error('Invalid course or lecture ID');
      return;
    }
    console.log(isFree)
    await editLecture({
      lectureTitle,
      videoInfo: uploadVideoInfo,
      courseId,
      lectureId,
      isPreviewFree: isFree,
    });
  };

  const removeLectureHanlder=async()=>{
    await removeLecture(lectureId)
  }
  const navigate=useNavigate()

  useEffect(()=>{
    if(lecture){
        setLectureTitle(lecture.lectureTitle)
        setIsFree(lecture.isPreviewFree)
        setUploadVideoInfo(lecture.videoInfo)
    }
  },[lecture])

  useEffect(() => {
    if (isSuccess && data) {
      toast.success(data.message);
    }
    if (error) {
      toast.error(error?.data?.message || 'An error occurred');
    }
  }, [isSuccess, error]);

  useEffect(()=>{
    if(removeIsSuccess && removeData){
        toast.success(removeData.message)
        navigate(-1)
    }
  },[removeIsSuccess,removeLoading])
  const changeCheckHandler=(value)=>{
    setIsFree(value)
    console.log(value)
  }

  return (
    <Card>
      <CardHeader className="flex justify-between">
        <div>
          <CardTitle>Edit Lecture</CardTitle>
          <CardDescription>Make Changes and click save when done</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="destructive"
          disabled={removeLoading}
          onClick={removeLectureHanlder}
          >
            {
                removeLoading ? <><Loader2 className='animate-spin w-4 h-4' />Please wait </> : 'Remove Lecture'
            }
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div>
          <Label>Title</Label>
          <Input
            type="text"
            value={lectureTitle}
            onChange={(e) => setLectureTitle(e.target.value)}
            placeholder="Ex. Introduction to Javascript"
          />
        </div>
        <div className="my-5">
          <Label>
            Video <span className="text-red-500">*</span>{' '}
          </Label>
          <Input
            onChange={fileChangeHandler}
            type="file"
            accept="video/*"
            className="w-fit"
          />
        </div>
        <div className="flex items-center space-x-2 my-5">
          <Switch checked={isFree} onCheckedChange={changeCheckHandler} id="airplane-mode" />
          <Label htmlFor="airplane-mode">Is this video Free</Label>
        </div>
        {mediaProgress && (
          <div className="my-4">
            <Progress value={uploadProgress} />
            <p>{uploadProgress}% uploaded</p>
          </div>
        )}
        <div className="mt-4">
          <Button onClick={editLectureHandler}>
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Please wait
              </>
            ) : (
              'Update Lecture'
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LectureTab;

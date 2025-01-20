import RichTextEditor from '@/components/RichTextEditor'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Loader2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const CourseTab = () => {
  const isPublished = false
  const [input, setInput] = useState({
    courseTitle: '',
    subTitle: '',
    description: '',
    category: '',
    courseLevel: '',
    coursePrice: '',
    courseThumbnail: ''
  })
  const changeEventHandler = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }
  const isLoading=false

  const navigator=useNavigate()

  const selectCategory=(value)=>{
    setInput({...input,category:value})
  }

  const selectCourseLevel=(value)=>{
    setInput({...input,courseLevel:value})
  }
  const [previewThumbnail,setPreviewThumnail]=useState('')

  const selectThumbnail=(e)=>{
    const file=e.target.files?.[0]
    if(file){
      setInput({...input,courseThumbnail:file})
      const fileReader=new FileReader()
      fileReader.onloadend=()=>setPreviewThumnail(fileReader.result)
      fileReader.readAsDataURL(file) 
    }
  }

  const updateCourseHandler=()=>{
    console.log(input)
  }


  return (
    <Card>
      <CardHeader className='flex flex-row justify-between'>
        <div>
          <CardTitle>Basic Course Information</CardTitle>
          <CardDescription>
            Make changes to your courses here. Click save when you're done
          </CardDescription>
        </div>
        <div className='space-x-3'>
          <Button variant='outline' >
            {
              isPublished ? 'Unpublished' : 'Publish'
            }
          </Button>
          <Button>Remove Course</Button>

        </div>
      </CardHeader>
      <CardContent>
        <div className='space-y-4 mt-5'>
          <div>
            <Label>Title</Label>
            <Input
              value={input.courseTitle}
              onChange={(e) => changeEventHandler(e)}
              type='text' name='courseTitle' placeholder='Ex. FullStack Developer' />
          </div>
          <div>
            <Label>SubTitle</Label>
            <Input
              value={input.subTitle}
              onChange={(e) => changeEventHandler(e)}
              type='text' name='subTitle' placeholder='Ex. Become a Fullstack developer from zero to hero in 2 months' />
          </div>
          <div>
            <Label>Description</Label>
            <RichTextEditor input={input} setInput={setInput} />
          </div>
          <div className='flex items-center gap-5'>
            <div>
              <Label>Category</Label>
              <Select onValueChange={selectCategory} >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>

                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Mobile Development">Mobile Development</SelectItem>
                    <SelectItem value="Mobile Development">Databases</SelectItem>
                    <SelectItem value="Cloud Computing">Cloud Computing</SelectItem>
                    <SelectItem value="Cyber Security">Cyber Security</SelectItem>

                  </SelectGroup>
                  <SelectGroup>

                    <SelectItem value="NextJs">NextJs</SelectItem>
                    <SelectItem value="MongoDb">MongoDb</SelectItem>
                    <SelectItem value="MySql">MySql</SelectItem>
                    <SelectItem value="Data Science">Data Science</SelectItem>
                    <SelectItem value="Machine Learning">Machine Learning</SelectItem>


                    <SelectItem value="DevOps">DevOps</SelectItem>

                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Course Level</Label>
              <Select onValueChange={selectCourseLevel}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Course Level</SelectLabel>


                    <SelectItem value="Beginnert">Beginner</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>

                  </SelectGroup>

                </SelectContent>
              </Select>

            </div>
            <div>
              <Label>Price in (PKR)</Label>
              <Input type='number' name='coursePrice' value={input.coursePrice}
                onChange={(e) => changeEventHandler(e)}
                placeholder='199'
                className='w-fit'

              />
            </div>

          </div>
          <div>
            <Label>Course Thumbnail</Label>
            <Input type='file' accept='image/*'
            onChange={selectThumbnail}
              className='w-fit'
            />

              {
                previewThumbnail && (
                  <img src={previewThumbnail} className='w-64 my-2' alt='courseThumnail' />
                )
              }

          </div>
          <div className='flex items-center gap-2'>
            <Button 
            onClick={()=>navigator(-1)}
            variant='outline'>Cancel</Button>
            <Button
            disabled={isLoading}
            onClick={updateCourseHandler}
            >
              {
                isLoading ? <><Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait</> : 'Save'
              }
            </Button>

          </div>


        </div>
      </CardContent>
    </Card>
  )
}

export default CourseTab
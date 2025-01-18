import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import Course from './Course';
import { useLoadUserQuery, useUpdateUserMutation } from '@/features/api/authApi';
import { toast } from 'sonner';

const Profile = () => {
    // Hooks
    const [username, setUserName] = useState('');
    const [profilePhoto, setProfilePhoto] = useState('');
    const { data, isLoading, error ,refetch} = useLoadUserQuery();
    const [updateUser, { data: updateUserData, isLoading: updateUserIsLoading, error: updateUserError, isSuccess }] = useUpdateUserMutation();

    // Effect for toast notifications
    useEffect(() => {

        if (isSuccess) {
            refetch()
            toast.success(updateUserData?.message || 'User updated successfully');
        } else if (updateUserError) {
            toast.error(updateUserError?.data?.message || 'Failed to update');
        }
    }, [isSuccess, updateUserError, updateUserData]);

    // Event Handlers
    const onChangeHandler = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setProfilePhoto(file);
        }
    };

    const updateUserHandler = async () => {
        const formData = new FormData();
        formData.append('name', username);
        formData.append('profilePhoto', profilePhoto);
        await updateUser(formData);
    };

    // Conditional Rendering
    if (isLoading) return <ProfileSkeleton />;
    // if (error) return <h1 className="text-3xl my-24 pl-24 font-bold text-black">SERVER ERROR</h1>;

    const user = data && data.user;

    return (
        <div className="my-24 max-w-4xl mx-auto px-4">
            <h1 className="font-bold text-2xl text-center md:text-left">Profile</h1>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 my-5">
                <div className="flex flex-col items-center">
                    <Avatar className="h-24 w-24 md:h-32 md:w-32 mb-4">
                        <AvatarImage src={user.photoUrl} alt="userProfile" />
                        <AvatarFallback className="text-lg">{user.name[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                </div>
                <div>
                    <h1 className="font-semibold text-gray-900 dark:text-gray-100">
                        Name: <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">{user.name}</span>
                    </h1>
                    <h1 className="font-semibold text-gray-900 dark:text-gray-100">
                        Email: <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">{user.email}</span>
                    </h1>
                    <h1 className="font-semibold text-gray-900 dark:text-gray-100">
                        Role: <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">{user.role.toUpperCase()}</span>
                    </h1>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button size="sm" className="mt-2">
                                Edit Profile
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Edit profile</DialogTitle>
                                <DialogDescription>
                                    Make changes to your profile here. Click save when you're done.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        className="col-span-3"
                                        value={username}
                                        onChange={(e) => setUserName(e.target.value)}
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="profile-photo">Profile Photo</Label>
                                    <Input
                                        type="file"
                                        accept="image/*"
                                        onChange={onChangeHandler}
                                        className="col-span-3"
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button disabled={updateUserIsLoading} onClick={updateUserHandler}>
                                    {updateUserIsLoading ? (
                                        <>
                                            <Loader2 className="animate-spin mr-2 h-4 w-4" /> Please wait
                                        </>
                                    ) : (
                                        'Save Changes'
                                    )}
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <h1 className="font-medium text-lg">Courses You're enrolled in</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5">
                {user.enrolledCourses.length === 0 ? (
                    <h1>You haven't enrolled yet</h1>
                ) : (
                    user.enrolledCourses.map((course) => <Course course={course} key={course._id} />)
                )}
            </div>
        </div>
    );
};

export default Profile;


const ProfileSkeleton=()=>{
    return (
        <div className="container mx-auto p-6 max-w-4xl">
  <h1 className="text-2xl font-bold text-center md:text-left mb-6">Profile</h1>
  
  <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
    {/* Avatar Section */}
    <div className="flex flex-col items-center">
      <div className="rounded-full h-24 w-24 md:h-32 md:w-32 bg-gray-200 mb-4">
        {/* Replace with Avatar component */}
      </div>
    </div>
    
    {/* Profile Info Section */}
    <div className="w-full">
      <div className="mb-4">
        <h2 className="font-semibold text-gray-900">
          Name: <span className="font-normal text-gray-700 ml-2">Your Name</span>
        </h2>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold text-gray-900">
          Email: <span className="font-normal text-gray-700 ml-2">your.email@example.com</span>
        </h2>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold text-gray-900">
          Role: <span className="font-normal text-gray-700 ml-2">Your Role</span>
        </h2>
      </div>
      
      {/* Edit Profile Button */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Edit Profile
      </button>
    </div>
  </div>
  
  {/* Enrolled Courses Section */}
  <div>
    <h2 className="font-medium text-lg mb-4">Courses You're Enrolled In</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {/* Replace with dynamic courses */}
      <div className="p-4 border rounded shadow-md">
        <h3 className="font-semibold">Course Title</h3>
      </div>
    </div>
  </div>
</div>

    )
}
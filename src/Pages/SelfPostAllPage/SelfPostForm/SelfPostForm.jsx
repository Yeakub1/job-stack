import React, { useContext, useState } from "react";
import { TfiWrite } from "react-icons/tfi";
import { HiPhoto } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import useAxioSequre from "../../../Hooks/useAxiosSequre";
import { AuthContext } from "../../../Providers/AuthProvider";
import { getCurrentTimeStamp } from "../../../Hooks/useMonent";
import { useForm } from "react-hook-form";
import useSelfPostfindEmail from "../../../Hooks/useSelfPostfindEmail";
import useSingleUser from "../../../Hooks/useSingleUser";
import toast from "react-hot-toast";
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const SelfPostForm = () => {
  const { user } = useContext(AuthContext);
  const [axiosSequre] = useAxioSequre();
  const [singleSelfPost, refetch] = useSelfPostfindEmail();
  const [singleUser] = useSingleUser();
  // console.log(singleUser);
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const [isOpen, setIsOpen] = useState(false);
  //    modal open function
  const openModal = () => {
    setIsOpen(true);
  };
  //   modal close functio
  const closeModal = () => {
    setIsOpen(false);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // Make the POST request
  const onSubmit = (data) => {
    const imgdata = new FormData();
    imgdata.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: imgdata,
    })
      .then((res) => res.json())
      .then((uploadImage) => {
        if (uploadImage.success) {
          const imgUrl = uploadImage.data.display_url;
          const { text } = data;
          const selfPost = {
            text,
            userName: user?.displayName,
            userPhoto: user?.photoURL,
            email: user?.email,
            image: imgUrl,
            timeStamp: getCurrentTimeStamp("LLL"),
            userId: singleUser[0]?._id,
          };
          axiosSequre.post("/selfpost", selfPost).then((data) => {
            if (data.data.insertedId) {
              reset();
              refetch();
              toast.success("Post Add Successfully!");
            }
          });
        }
      });
  };

  // event funcation
  const [events, setEvents] = useState(false);
  const openModals = () => {
    setEvents(true);
  };
  const closeModals = () => {
    setEvents(false);
  };

  const handleEvent = (event) => {
    event.preventDefault();

    const imgdata = new FormData();
    const imageData = event.target.image.files[0];
    imgdata.append("image", imageData);

    fetch(img_hosting_url, {
      method: "POST",
      body: imgdata,
    })
      .then((res) => res.json())
      .then((uploadImage) => {
        if (uploadImage.success) {
          const imgUrl = uploadImage.data.display_url;
          const form = event.target;
          const name = form.name.value;
          const image = imgUrl;
          const startdate = form.startdate.value;
          const starttime = form.starttime.value;
          const externallink = form.externallink.value;
          const description = form.description.value;
          const speakers = form.speakers.value;

          const addEvent = {
            name,
            email: user?.email,
            userName: user?.displayName,
            userPhoto: user?.photoURL,
            image,
            startdate,
            starttime,
            externallink,
            description,
            speakers,
          };
          event.target.reset();
          fetch("https://jobstack-backend-teal.vercel.app/event", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(addEvent),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                toast.success("Event Add Successfully!");
              }
            })
            .catch((error) => {
              console.error("Error posting data to second URL:", error);
            });
        }
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  // Article funcation
  const [article, setArticle] = useState(false);
  const openArticleModals = () => {
    setArticle(true);
  };
  const closeArticleModals = () => {
    setArticle(false);
  };

  const handleArticle = (event) => {
    event.preventDefault();

    const imgdata = new FormData();
    const imageData = event.target.image.files[0];
    imgdata.append("image", imageData);

    fetch(img_hosting_url, {
      method: "POST",
      body: imgdata,
    })
      .then((res) => res.json())
      .then((uploadImage) => {
        if (uploadImage.success) {
          const imgUrl = uploadImage.data.display_url;
          const form = event.target;
          const articletitle = form.articletitle.value;
          const image = imgUrl;
          const artciledescription = form.artciledescription.value;

          const addArticle = {
            articletitle,
            email: user?.email,
            userName: user?.displayName,
            userPhoto: user?.photoURL,
            image,
            artciledescription,
            timeStamp: getCurrentTimeStamp("LLL"),
          };
          event.target.reset();
          fetch("https://jobstack-backend-teal.vercel.app/user-article", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(addArticle),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                toast.success("Article Add Successfully!");
              }
            })
            .catch((error) => {
              console.error("Error posting data to second URL:", error);
            });
        }
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  return (
    <div>
      {/* Create Post Modal */}
      <div className="shadowdiv border rounded-lg p-5 md:w-7/12 mx-auto ">
        <div className=" flex gap-3 items-center mb-4">
          <div className="">
            {user?.email ? (
              <img className="w-10 h-10 rounded-full" src={user?.photoURL} />
            ) : (
              <></>
            )}
          </div>
          <button
            className="py-2 w-full text-start ps-5 bg-slate-100 hover:bg-slate-200 rounded-full text-lg"
            onClick={openModal}
          >
            What's on your mind?
          </button>
        </div>
        <hr />
        {/* Post Photo video and event section */}
        <div className="mt-3 flex justify-between items-center">
          <div className="">
            <label
              className="flex items-center gap-1 px-6 py-1 hover:bg-slate-100 rounded-md"
              htmlFor="file-input"
            >
              <HiPhoto className="text-[#09867E] text-xl" />
              <p>Photo</p>
            </label>
            <input className="hidden" type="file" />
          </div>

          <div className="" onClick={openModals}>
            <label
              className="flex items-center gap-1 px-6 py-1 hover:bg-slate-100 rounded-md"
              htmlFor="file-input"
            >
              <SlCalender className="text-[#09867E] text-xl" />
              <p>Event</p>
            </label>
            <input className="hidden" type="file" />
          </div>
          <div className="" onClick={openArticleModals}>
            <label
              className="flex items-center gap-1 px-6 py-1 hover:bg-slate-100 rounded-md"
              htmlFor="file-input"
            >
              <TfiWrite className="text-[#09867E] text-xl" />
              <p>Write article</p>
            </label>
            <input className="hidden" type="file" />
          </div>
        </div>
      </div>
      {/* post input form */}
      {isOpen && (
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
          open
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="dialog"
            className="modal-box"
          >
            <h1 className="text-center text-lg font-semibold -mt-3 mb-3">
              Create post
            </h1>
            <hr />
            {/* user information */}
            <div className="mt-3">
              {user?.email ? (
                <div className="flex items-center gap-3">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user?.photoURL}
                  />
                  <div className="">
                    <p className="font-bold">{user?.displayName}</p>
                    <button className="btn btn-xs">Public</button>
                  </div>
                </div>
              ) : (
                <p>no user</p>
              )}
            </div>
            {/* text file post */}
            <div className="mt-5">
              <textarea
                {...register("text")}
                rows="5"
                placeholder="What's on you mind?"
                className="rounded-md px-3 py-2  w-full bg-slate-100 text-xl"
              ></textarea>
              {errors.text && (
                <span className="text-red-800">text is required</span>
              )}
            </div>
            {/* upload image file */}
            <div className="image-upload flex items-center gap-12 rounded-2xl justify-center">
              <div className="">
                <h1 className="text-lg ">Add Photo</h1>
              </div>
              <div className="">
                <label htmlFor="file-input">
                  <img
                    className="w-11 h-12"
                    src="https://i.ibb.co/x5snGtV/image.png"
                    alt="Upload"
                  />
                </label>
                <input
                  className="hidden"
                  id="file-input"
                  type="file"
                  {...register("image")}
                />
              </div>
            </div>
            <button className="w-full py-2 mt-3 bg-[#09867E] rounded-md text-white cursor-pointer">
              <input type="submit" value="Post" />
            </button>
            {/* modal clone button */}
            <div className="modal-action">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-slate-300"
                onClick={closeModal}
              >
                &#10005;
              </button>
            </div>
          </form>
        </dialog>
      )}

      {/* Event Form */}
      {events && (
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
          open
        >
          <form onSubmit={handleEvent} method="dialog" className="modal-box">
            <h1 className="text-center text-lg font-semibold -mt-3 mb-3">
              Create an event
            </h1>
            <hr />
            {/* event form */}
            <div className="my-8">
              <div className="">
                <p className="text-xs mb-1">Event name*</p>
                <input
                  className="py-1 w-full outline outline-offset-2 outline-1 ps-2 rounded-lg text-sm"
                  type="text"
                  name="name"
                  placeholder="Event name"
                  required
                />
              </div>

              <div className="my-5">
                <p className="text-xs mb-1">Event image</p>
                <input
                  type="file"
                  name="image"
                  className="file-input file-input-bordered w-full rounded-lg"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-3 my-5">
                <div className="">
                  <p className="text-xs mb-1">Start date *</p>
                  <input
                    className="py-1 w-full outline outline-offset-2 outline-1 ps-2 rounded-lg text-sm"
                    type="date"
                    name="startdate"
                    required
                  />
                </div>
                <div className="">
                  <p className="text-xs mb-1">Start Time *</p>
                  <input
                    className="py-1 w-full outline outline-offset-2 outline-1 ps-2 rounded-lg text-sm"
                    type="time"
                    name="starttime"
                    required
                  />
                </div>
              </div>
              <div className="">
                <p className="text-xs mb-1">External event link*</p>
                <input
                  className="py-1 w-full outline outline-offset-2 outline-1 ps-2 rounded-lg text-sm"
                  type="text"
                  name="externallink"
                  placeholder="External event link"
                  required
                />
              </div>
              <div className="my-5">
                <p className="text-xs mb-1">Description</p>
                <textarea
                  name="description"
                  className=" w-full outline outline-offset-2 outline-1 p-2 rounded-lg text-sm"
                  rows="3"
                  placeholder="Ex. topics, schedule, etc."
                ></textarea>
              </div>
              <div className="">
                <p className="text-xs mb-1">Speakers</p>
                <input
                  className="py-1 w-full outline outline-offset-2 outline-1 ps-2 rounded-lg text-sm"
                  type="text"
                  name="speakers"
                  placeholder="Speakers"
                />
              </div>
            </div>

            <button className="w-full py-2 mt-3 bg-[#09867E] rounded-md text-white cursor-pointer">
              <input type="submit" value="Post" />
            </button>
            {/* modal clone button */}
            <div className="modal-action">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-slate-300"
                onClick={closeModals}
              >
                &#10005;
              </button>
            </div>
          </form>
        </dialog>
      )}
      {/* Event Form */}
      {article && (
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
          open
        >
          <form onSubmit={handleArticle} method="dialog" className="modal-box">
            <h1 className="text-center text-lg font-semibold -mt-3 mb-3">
              Write article
            </h1>
            <hr />
            {/* event form */}
            <div className="my-8">
              <div className="">
                <p className="text-xs mb-1">Article Title*</p>
                <input
                  className="py-1 w-full outline outline-offset-2 outline-1 ps-2 rounded-lg text-sm"
                  type="text"
                  name="articletitle"
                  placeholder="Article Title"
                  required
                />
              </div>

              <div className="my-5">
                <p className="text-xs mb-1">Article image</p>
                <input
                  type="file"
                  name="image"
                  className="file-input file-input-bordered w-full rounded-lg"
                />
              </div>

              <div className="my-5">
                <p className="text-xs mb-1">Description</p>
                <textarea
                  name="artciledescription"
                  className=" w-full outline outline-offset-2 outline-1 p-2 rounded-lg text-sm"
                  rows="3"
                  placeholder="Article Description"
                ></textarea>
              </div>
            </div>

            <button className="w-full py-2 mt-3 bg-[#09867E] rounded-md text-white cursor-pointer">
              <input type="submit" value="Post" />
            </button>
            {/* modal clone button */}
            <div className="modal-action">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-slate-300"
                onClick={closeArticleModals}
              >
                &#10005;
              </button>
            </div>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default SelfPostForm;

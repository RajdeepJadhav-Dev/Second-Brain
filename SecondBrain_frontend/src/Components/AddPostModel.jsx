import { useRef, useState } from "react";
import axios from "axios";

const ContentType = {
  Youtube: "youtube",
  Twitter: "twitter",
};

export default function AddPostModel({ popup }) {
  // References to the input fields for title and link
  const titleRef = useRef();
  const linkRef = useRef();

  // State to manage the selected content type
  const [type, setType] = useState(ContentType.Youtube);

  // Function to handle the API call
  const addContent = async () => {
    const title = titleRef.current?.value; // Get the title value
    const link = linkRef.current?.value; // Get the link value

    if (!title || !link) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      // Making a POST request to add new content
      await axios.post(
        "http://localhost:3000",
        {
          link,
          type,
          title
        },
        {
          headers: {
            Authorization: localStorage.getItem("token") || "", // Including the authorization token
          },
        }
      );
      alert("Content added successfully!");
      popup(); // Close the modal after successful submission
    } catch (error) {
      console.error("Error adding content:", error);
      alert("Failed to add content. Please try again.");
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-500/60 fixed z-10 flex justify-center items-center">
      <div>
        <div className="max-w-60 bg-white p-4">
          {/* Close Button */}
          <div className="flex justify-end">
            <button onClick={popup} className="cursor-pointer">
              ✖
            </button>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col">
            <label htmlFor="title">Title</label>
            <input ref={titleRef} className="bg-gray-200" type="text" id="title" />
            <label htmlFor="link">Link</label>
            <input ref={linkRef} className="bg-gray-200" type="text" id="link" />
          </div>

          {/* Content Type Selection */}
          <div>
            <h1>Type</h1>
            <div className="flex gap-1 justify-center pb-2">
              {/* Button to select YouTube type */}
              <button
                className={`p-2 ${
                  type === ContentType.Youtube ? "bg-blue-500 text-white" : "bg-gray-300"
                }`}
                onClick={() => setType(ContentType.Youtube)}
              >
                YouTube
              </button>
              {/* Button to select Twitter type */}
              <button
                className={`p-2 ${
                  type === ContentType.Twitter ? "bg-blue-500 text-white" : "bg-gray-300"
                }`}
                onClick={() => setType(ContentType.Twitter)}
              >
                Twitter
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              onClick={addContent}
              className="p-1 m-2 rounded-md bg-gray-500 text-white"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

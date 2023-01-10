import React, { useEffect, useState } from "react";
import "./posts.css";
import { Link } from "react-router-dom";
import profileimage from "./images/newimages2.svg";
import photo from "./images/photo-library.svg";
import help from "./images/help_icon.svg";
import search from "./images/search_icon.svg";
import comment from "./images/comments-icon.svg";
import fav from "./images/favorite-icon.svg";
import baby from "./images/newbaby.svg";
import profile from "./images/newimages.svg";
import newimg from "./images/newimages3.svg";
import ellipsis from "./images/mdi_ellipsis.svg";
import notification from "./images/notifications.svg";
import logout from "./images/logout.svg";
import userprofile from "./images/user_profile.png";
import home from "./images/home.svg";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [pfp, setPfp] = useState("");
  const [images, setImages] = useState({});
  const [postImages, setPostImages] = useState([]);

  const user_token = localStorage.getItem("X-auth-token");
  const user_id = localStorage.getItem("user_id");
  const navigate = useNavigate();

  // Check if user is logged in
  if (user_id === null) {
    alert("You must be logged in");
    navigate("/login");
  }

  // Fetch user details
  const fetchUser = async () => {
    try {
      const response = await fetch(
        `http://34.228.198.103/api/users/${user_id}`,
        {
          method: "GET",
          headers: {
            "X-auth-token": user_token,
          },
        }
      );
      const data = await response.json();
    } catch (error) {
      navigate("/login");
    }
  };

  // Fetch posts from database
  const fetchPosts = async () => {
    try {
      const response = await fetch(
        `http://34.228.198.103/api/posts?page=1&limit=30`,
        {
          method: "GET",
          headers: {
            "X-auth-token": user_token,
          },
        }
      );
      const data = await response.json();
      const posts = [];

      for (let post_obj of data.posts) {
        // Get user details
        const post = post_obj.post;
        const user = post_obj.user;
        let image;

        // fetch user profile picture
        try {
          // check cache for user image
          if (user._id in images) {
            image = images[user._id];
          } else {
            const response = await fetch(
              `http://34.228.198.103/api/users/${user._id}/pfp`,
              {
                method: "GET",
                headers: {
                  "X-auth-token": user_token,
                  "Content-Type": "application/json",
                },
              }
            );
            let blob = await response.blob();
            image = URL.createObjectURL(blob);
            images[user._id] = image;
          }
        } catch (error) {
          navigate("/login");
        }

        posts.push(
          <div className="main-posts" key={post._id}>
            <div className="post">
              <div className="primary_post">
                <img src={image} alt="profile-icon" id="profile" />
                <div className="post_content">
                  <h4>
                    {user.first_name.charAt(0).toUpperCase() +
                      user.first_name.slice(1)}
                    {user.middle_name !== null
                      ? " " +
                        user.middle_name.charAt(0).toUpperCase() +
                        user.middle_name.slice(1)
                      : ""}{" "}
                    {user.last_name.charAt(0).toUpperCase() +
                      user.last_name.slice(1)}
                  </h4>
                  <h6>{new Date(post.created_at).toDateString()}</h6>
                  <h6 id="comments">{post.content}</h6>
                </div>
              </div>
              <div>
                <button>
                  <img src={ellipsis} alt="ellipsis-icon" id="ellipsis" />
                </button>
              </div>
            </div>

            {/* Render post image*/}
            {post.images.length > 0 ? (
              <div className="post_image">
                {post.images.map((image) => {
                  return <img src={image} alt="post_image" key={image} />;
                })}
              </div>
            ) : (
              ""
            )}

            <div className="social-icon">
              <div>
                <button>
                  <img src={fav} alt="favorite-icon" />
                </button>
                <h6>{post.likes.length}</h6>
              </div>
              <div>
                <button>
                  <img src={comment} alt="comment" />
                </button>
                <h6>{post.comments.length}</h6>
              </div>
            </div>
            <div>
              <input type="text" placeholder="Add a Comment" id="add_comment" />
            </div>
          </div>
        );
        setPosts(posts);
      }
    } catch (error) {
      console.error(error);
      navigate("/login");
    }
  };

  const fetchPfp = async () => {
    try {
      const response = await fetch(
        `http://34.228.198.103/api/users/${user_id}/pfp`,
        {
          method: "GET",
          headers: {
            "X-auth-token": user_token,
            "Content-Type": "application/json",
          },
        }
      );
      const blob = await response.blob();
      const image = URL.createObjectURL(blob);
      setPfp(image);
    } catch (error) {
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchUser();
    fetchPosts();
    fetchPfp();
  }, []);

  const uploadPost = async () => {
    if (newPost === "" || newPost.length < 1) {
      alert("Post can't be empty");
      return;
    }

    // Upload post
    try {
      const formData = new FormData();

      for (let image of postImages) {
        image.data.filename = image.data.name;
        delete image.data.name;
        formData.append("images", image.data);
      }
      formData.append("content", newPost);

      const response = await fetch(`http://34.228.198.103/api/posts/`, {
        method: "POST",
        headers: {
          "X-auth-token": user_token,
        },
        body: formData,
      });
      const data = await response.json();

      if (response.status >= 200 && response.status < 300) {
        alert("Post sent");
        window.location.reload();
      } else {
        alert("Error sending post");
      }
    } catch (error) {
      // navigate("/login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("X-auth-token");
    localStorage.removeItem("user_id");
  };

  const handleFileChange = (e) => {
    let imgs = [];
    for (let file of e.target.files) {
      const img = {
        preview: URL.createObjectURL(file),
        data: file,
      };
      imgs.push(img);
    }
    setPostImages(imgs);
  };

  return (
    <>
      <div className="feed-header">
        <Link>
          <img src={help} alt="help-icon" id="help" />
        </Link>
        <h3> Feed </h3>
        <div className="icon-set">
          <div>
            <Link to="/">
              <img src={home} alt="home-icon" id="i-set" />
            </Link>
          </div>
          <div id="i-set">
            <Link>
              <img src={notification} alt="notification-icon" id="i-set" />
            </Link>
          </div>
          <div id="i-set">
            <Link to="/profile">
              <img src={userprofile} alt="user-profile-icon" id="i-set" />
            </Link>
          </div>
          <div className="search">
            <img src={search} alt="search-icon" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div>
          <Link to="/login" id="logout" onClick={handleLogout}>
            <img src={logout} alt="logout-icon" id="i-set" />
          </Link>
        </div>
      </div>

      <div className="maincontainer">
        <div className="share">
          <div className="upload">
            <Link to="/profile" id="prof_img">
              {/* adjust this */}
              <img src={pfp} alt="profile-icon" id="posts_img" />
            </Link>
            <input
              type="text"
              placeholder="Share A Post"
              id="share"
              value={newPost}
              onChange={(e) => {
                setNewPost(e.target.value);
              }}
            />
            <button type="submit" id="ph_submit">
              {" "}
              <label htmlFor="post_images">
                <img src={photo} alt="img" id="post_share" />{" "}
              </label>
              <input
                onChange={handleFileChange}
                accept="image/*"
                type="file"
                id="post_images"
                name="post_images"
                multiple="true"
              />{" "}
            </button>
            <button type="submit" id="share_button" onClick={uploadPost}>
              Share Post
            </button>
          </div>

          {postImages.length > 0 ? (
            <div className="post_images">
              {postImages.map((image) => {
                return (
                  <img
                    key={image.data.name}
                    src={image.preview}
                    alt="post_image"
                  />
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>

        {/* <div className="main-posts">
          <div className="post">
            <div className="primary_post">
              <img src={profileimage} alt="profile-icon" id="profile" />
              <div className="post_content">
                <h4>Van Nguyen</h4>
                <h6>Today at 3:08 AM</h6>
                <h6 id="comments">My baby will be here in two weeks</h6>
              </div>
            </div>
            <div>
              <img src={ellipsis} alt="ellipsis-icon" id="ellipsis" />
            </div>
          </div>
          <div className="social-icon">
            <div>
              <button>
                <img src={fav} alt="favorite-icon" />
              </button>
              <h6>1,223 Likes</h6>
            </div>
            <div>
              <button>
                <img src={comment} alt="comment" />
              </button>
              <h6>560 Comments</h6>
            </div>
          </div>
          <div>
            <input type="text" placeholder="Add a Comment" id="add_comment" />
          </div>
        </div>

        <div className="main-posts">
          <div className="post">
            <div className="primary_post">
              <img src={profile} alt="profile-icon" id="profile" />
              <div className="post_content">
                <h4>Me Bhan Ho</h4>
                <h6>Just Now</h6>
                <h6 id="comments">He is here and he is perfect</h6>
              </div>
            </div>
            <div>
              <button>
                <img src={ellipsis} alt="ellipsis-icon" id="ellipsis" />
              </button>
            </div>
          </div>
          <img src={baby} alt="baby" id="babypic" />
          <div className="social-icon">
            <div>
              <button>
                <img src={fav} alt="favorite-icon" />
              </button>
              <h6>1,223 Likes</h6>
            </div>
            <div>
              <button>
                <img src={comment} alt="comment" />
              </button>
              <h6>560 Comments</h6>
            </div>
          </div>
          <div>
            <input type="text" placeholder="Add a Comment" id="add_comment" />
          </div>
        </div> */}

        {posts}
      </div>
    </>
  );
};

export default Posts;

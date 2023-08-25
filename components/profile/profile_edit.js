import React, { useEffect, useState } from "react";

function ProfileEdit() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});  
  useEffect(() => {
    const usr = localStorage.getItem("loggedInUser");
    if (usr) {
      setIsLoggedIn(true);
      setUser(JSON.parse(usr));
    }
    else {
      setIsLoggedIn(false);
    }
  }, []);

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [new_password, setNew_password] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    if (user) {
      setDisplayName(user.name);
      setLocation(user.location);
      setEmail(user.email);
      setPhone(user.phone);
      setCity(user.city);
    }
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(user.password !== password) return alert("Wrong Password");
    if(new_password !== "") setPassword(new_password);
    const data_img = new FormData();
    data_img.append("file", profilePic);
    data_img.append("upload_preset", "ac0fxlck");
    data_img.append("cloud_name", "duhwlswgx");
    const res_img = await fetch(
      "https://api.cloudinary.com/v1_1/duhwlswgx/image/upload",
      {
        method: "POST",
        body: data_img,
      }
    );
    const file = await res_img.json();
    console.log(file.secure_url);
    const imageUrl = file.secure_url || user.imageUrl;

    const res = await fetch("/api/user/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },  
      body: JSON.stringify({
        name: displayName,
        email: email,
        location: location,
        city: user.city,
        password: password,
        phone: phone,
        imageUrl: imageUrl,

      }),
    });
    const data = await res.json();
    if(res.status === 200) {
      alert(data.message);
      localStorage.setItem("loggedInUser", JSON.stringify(data.user));
      window.location.replace("/profile");
    }
    else {
      alert(data.message);
    }
  };


  return (
    <div className="container mx-auto px-4 m-6">
      <h2 className="text-xl font-bold mb-4">Edit Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="displayName"
            className="block text-gray-700 font-bold mb-2"
          >
            Display Name
          </label>
          <input
            required
            type="text"
            id="displayName"
            value={displayName}
            onChange={(event) => setDisplayName(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="location"
            className="block text-gray-700 font-bold mb-2"
          >
            Location
          </label>
          <input
            required
            type="text"
            id="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="city"
            className="block text-gray-700 font-bold mb-2"
          >
            City
          </label>
          <input
            required
            type="text"
            id="city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block text-gray-700 font-bold mb-2"
          >
            Phone
          </label>
          <input
            required
            type="text"
            id="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>


        <div className="mb-6">
          <label
            htmlFor="profilePic"
            className="block text-gray-700 font-bold mb-2"
          >
            Profile Picture
          </label>
          <input
            type="file"
            id="profilePic"
            onChange={(event) => setProfilePic(event.target.files[0])}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Current Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="new_password"
            className="block text-gray-700 font-bold mb-2"
          >
            New Password
          </label>
          <input
            type="password"
            id="new_password"
            value={new_password}
            onChange={(event) => setNew_password(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default ProfileEdit;
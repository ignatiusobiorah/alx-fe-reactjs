function UserProfile() {
    return (
      <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg"> {/* Container */}
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="rounded-full w-36 h-36 mx-auto" // Image
        />
        <h1 className="text-xl text-blue-800 my-4 text-center"> {/* Heading */}
          John Doe
        </h1>
        <p className="text-gray-600 text-base text-center"> {/* Paragraph */}
          Developer at Example Co. Loves to write code and explore new technologies.
        </p>
      </div>
    );
  }
  
  export default UserProfile;
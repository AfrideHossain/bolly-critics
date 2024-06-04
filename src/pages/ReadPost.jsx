const ReadPost = () => {
  return (
    <>
      <div className="w-full md:max-w-7xl mx-auto min-h-screen">
        <div className="w-full flex justify-center items-center">
          <img
            src="https://stat5.bollywoodhungama.in/wp-content/uploads/2016/03/74637364.jpg"
            alt=""
            className="w-full h-96 md:h-[600px] object-cover"
          />
        </div>
        <div className="space-y-2 my-10">
          <h1 className="text-3xl font-bold">Headline</h1>
          <p className="text-lg">
            Author: <span className="font-semibold">John Doe</span>{" "}
          </p>
          <p>
            Published on: <span className="font-semibold">12/4/2024</span>{" "}
          </p>
        </div>
        <div className="mb-10">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            laborum maiores alias qui tempore aperiam ab temporibus nam eius
            saepe maxime veniam, consectetur eveniet voluptatum? Doloremque
            repudiandae corrupti facilis error provident eos aliquam inventore
            animi cum reiciendis quod voluptates ullam qui, enim nulla deserunt,
            rem deleniti? Cumque, laudantium tenetur expedita architecto
            doloribus fugiat nulla exercitationem obcaecati unde fuga vel ullam
            numquam possimus natus quidem nesciunt, ut sint odio dolorum
            pariatur explicabo molestiae iste, quasi minima! Fugiat tempora quas
            dicta necessitatibus quam, quisquam aliquid dolorum tenetur pariatur
            voluptas corrupti repudiandae, voluptate impedit ad eum possimus
            ducimus inventore aut suscipit consequuntur facere.
          </p>
        </div>
      </div>
    </>
  );
};

export default ReadPost;

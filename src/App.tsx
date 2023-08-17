import React, { useState } from "react";
import { styled } from "styled-components";
import SidebarRight from "./components/SidebarRight/SidbarRight";
import ShowImg from "./components/showIng/ShowImg";
import { BsMenuUp } from "react-icons/bs";

interface Ilayouts {
  name: string;
  imgUrl: string;
  icons: string;
}

function App() {
  const datas: Ilayouts[] = [
    {
      name: "Live Visual Builder",
      imgUrl: "https://avada.com/wp-content/uploads/2021/07/live-visual.jpg",
      icons: BsMenuUp,
    },
    {
      name: "Layout Builer",
      imgUrl: "https://avada.com/wp-content/uploads/2021/07/live-visual.jpg",
      icons: BsMenuUp,
    },
    {
      name: "Live Visual Builder",
      imgUrl: "https://avada.com/wp-content/uploads/2021/07/live-visual.jpg",
      icons: BsMenuUp,
    },
    {
      name: "Live Visual Builder",
      imgUrl: "https://avada.com/wp-content/uploads/2021/07/live-visual.jpg",
      icons: BsMenuUp,
    },
    {
      name: "Live Visual Builder",
      imgUrl: "https://avada.com/wp-content/uploads/2021/07/live-visual.jpg",
      icons: BsMenuUp,
    },
    {
      name: "Live Visual Builder",
      imgUrl: "https://avada.com/wp-content/uploads/2021/07/live-visual.jpg",
      icons: BsMenuUp,
    },
    {
      name: "Form builder",
      imgUrl: "https://avada.com/wp-content/uploads/2021/07/form-builder.jpg",
      icons: BsMenuUp,
    },
    {
      name: "Live Visual Builder",
      imgUrl: "https://avada.com/wp-content/uploads/2021/07/live-visual.jpg",
      icons: BsMenuUp,
    },
  ];

  const [imgUrl, setImgUrl] = useState<string>(datas[0].imgUrl);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  );

  const handleClick = (imgUrl: string, index: number) => {
    setImgUrl(imgUrl);
    setSelectedItemIndex(index);
  };

  return (
    <AppWrapper className="container">
      <div className="sidebar-right">
        {datas.map((data, index) => (
          <SidebarRight
            key={index}
            name={data.name}
            onClick={() => handleClick(data.imgUrl, index)}
            isSelected={selectedItemIndex === index}
          />
        ))}
      </div>
      <ShowImg imgUrl={imgUrl} />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default App;

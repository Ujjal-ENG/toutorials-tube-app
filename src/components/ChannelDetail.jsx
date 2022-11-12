import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos } from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchFromAPI } from "./utils/fetchFromAPi";

const ChannelDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [channelDetail, setchannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  console.log(channelDetail, videos);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setchannelDetail(data?.items[0]);
    });
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);

  return (
    <>
      <Box minHeight="90vh" background="red">
        <Box>
          <div
            style={{
              background:
                "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
              zIndex: 10,
              height: "300px",
            }}
          />
          <ChannelCard channelDetail={channelDetail} />
        </Box>
      </Box>
    </>
  );
};

export default ChannelDetail;

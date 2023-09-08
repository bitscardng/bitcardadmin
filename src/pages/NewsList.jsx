import { useState } from "react";
import { Card, Button } from "antd";
import { useGetNewsQuery } from "../api/newsApiSlice";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import NewsModal from "../components/antd/NewsModal";

const NewsList = () => {
  const { Meta } = Card;
  const navigate = useNavigate();
  const { data, isLoading } = useGetNewsQuery();
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-[0.5rem]">
          <Button
            className="self-end"
            type="primary"
            onClick={() => navigate("/create-news")}
          >
            Create News
          </Button>
          <div className="grid grid-cols-3 gap-[1rem] justify-between w-[98%] mx-auto">
            {data?.data.map((e, i) => (
              <Card
                hoverable
                style={{ width: 240 }}
                key={i}
                cover={<img alt="example" src={e?.image} />}
                onClick={() => {
                  setId(e?._id);
                  setOpen(true);
                }}
              >
                <Meta
                  title={<p className="truncate">{e?.title}</p>}
                  description={e.category?.name}
                />
              </Card>
            ))}
          </div>
        </div>
      )}
      <NewsModal open={open} setOpen={setOpen} id={id} />
    </>
  );
};

export default NewsList;

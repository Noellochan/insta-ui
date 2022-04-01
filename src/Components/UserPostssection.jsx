import { ImageList, ImageListItem } from "@mui/material";
import { Box } from "@mui/system";

export const Postsection = ({ data }) => {
  return (
    <Box
      sx={{
        width: "70%",
        height: "fit-content",
        margin: "auto",
        overflow: "auto",
      }}
    >
      <ImageList variant="masonry" cols={3} gap={8}>
        {data.map((item) => (
          <ImageListItem key={item.img}>
            <img
              style={{ width: "300px", height: "300px" }}
              src={`${item.post_image}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.post_image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

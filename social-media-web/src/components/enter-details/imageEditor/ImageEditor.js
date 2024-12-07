import {Box, Typography} from "@mui/material";
import {PinturaEditor} from "@pqina/react-pintura";
import {getEditorDefaults} from "@pqina/pintura";
import React from "react";

const ImageEditor = ({
  imageSrc,
  handleImageChange,
  setInlineResult,
  inlineResult
}) => {
  return (
      <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#f9f9f9",
            width: "90%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
      >
        {/* Phần chọn ảnh */}
        <Box
            sx={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              border: "2px dashed #ccc",
              borderRadius: "10px",
              justifyContent: "center",
              background: imageSrc
                  ? `url(${imageSrc}) center/cover no-repeat`
                  : "#f0f0f0",
              height: "300px",
              position: "relative",
            }}
        >
          {!imageSrc && (
              <Typography
                  sx={{
                    color: "#666",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
              >
                Click to Upload
              </Typography>
          )}
          <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{
                opacity: 0,
                position: "absolute",
                width: "100%",
                height: "100%",
                cursor: "pointer",
              }}
          />
        </Box>

        {/* Trình chỉnh sửa ảnh */}
        {imageSrc && (
            <Box sx={{
              flex: "2",
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}>
              <Typography variant="h6" sx={{
                textAlign: "center",
                fontWeight: "bold"
              }}>
                Edit Avatar
              </Typography>
              <Box sx={{height: "300px"}}>
                {/*<PinturaEditor*/}
                {/*    {...getEditorDefaults()}*/}
                {/*    src={imageSrc}*/}
                {/*    imageCropAspectRatio={1}*/}
                {/*    outputWidth={1024}*/}
                {/*    outputHeight={1024}*/}
                {/*    onProcess={(res) => {*/}
                {/*      const editedImageUrl = URL.createObjectURL(res.dest);*/}
                {/*      setInlineResult(editedImageUrl);*/}
                {/*      console.log("Edited Image URL:", editedImageUrl);  // Log the result here*/}
                {/*    }}*/}
                {/*/>*/}
                <PinturaEditor
                    style={{height: "500px"}}
                    {...getEditorDefaults()}
                    src={imageSrc}
                    onProcess={({dest}) => {
                      fetch(dest)
                      .then((res) => res.blob())
                      .then((blob) => {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          console.log(reader.result); // Base64
                        };
                        reader.readAsDataURL(blob);
                      })
                      .catch((error) =>
                          console.error("Error converting to Base64:", error)
                      );
                    }}
                />
              </Box>
            </Box>
        )}

        {/* Ảnh chỉnh sửa xong */}
        {inlineResult && (
            <Box sx={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}>
              <Typography
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    marginBottom: "10px"
                  }}
              >
                Edited Image
              </Typography>
              <img
                  src={inlineResult}
                  alt="Edited"
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
              />
            </Box>
        )}
      </Box>
  );
}

export default ImageEditor;

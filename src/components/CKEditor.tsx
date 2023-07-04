// import React, { useEffect, useState } from "react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import axiosInstance from "@/config/axiosInstance";
// import fetchCsrfToken from "@/helper/getCsrfToken";

// function Editor() {
// 	let [loaded, setLoaded] = useState(false);

// 	const handleUpload = async (files: any) => {
// 		try {
// 			const imageUrls: string[] = [];
// 			const uploadPromises = [];

// 			for (const file of files) {
// 				const csrfToken = await fetchCsrfToken();
// 				console.log(
// 					csrfToken,
// 					"-------------------------------------------------"
// 				);
// 				const formData = new FormData();
// 				formData.append("file", file);
// 				const uploadPromise = axiosInstance
// 					.post("/upload-image", formData, {
// 						withCredentials: true, // Include cookies in the request
// 						headers: {
// 							"X-CSRFToken": csrfToken, // Get the CSRF token from the cookie
// 						},
// 					})
// 					.then((response) => {
// 						const imageUrl = response.data.imageUrl;
// 						imageUrls.push(imageUrl);
// 					});
// 				uploadPromises.push(uploadPromise);
// 			}

// 			await Promise.all(uploadPromises);

// 			const editor = document.querySelector(".ck-editor__editable");
// 			const imageElementArray = [];
// 			for (const imageUrl of imageUrls) {
// 				const img = new Image();
// 				img.src = imageUrl;
// 				imageElementArray.push(img);
// 			}

// 			ClassicEditor.create(editor)
// 				.then((editor) => {
// 					editor.model.change((writer: any) => {
// 						for (const img of imageElementArray) {
// 							writer.appendElement("image", {
// 								src: img.src,
// 								alt: "Uploaded Image",
// 							});
// 						}
// 					});
// 				})
// 				.catch((error: any) => {
// 					console.error("Error creating CKEditor instance:", error);
// 				});
// 		} catch (error) {
// 			console.error("Image upload failed:", error);
// 		}
// 	};

// 	useEffect(() => {
// 		setLoaded(true);
// 	}, []); // run on mounting

// 	if (loaded) {
// 		return (
// 			<CKEditor
// 				editor={ClassicEditor}
// 				config={{
// 					ckfinder: {
// 						uploadUrl: "http://127.0.0.1:5555/upload-image/", // CKEditor 5 built-in upload adapter URL
// 					},
// 				}}
// 				data="<p>Hello from CKEditor 5!</p>"
// 				onReady={(editor) => {
// 					// You can store the "editor" and use when it is needed.
// 					console.log("Editor is ready to use!", editor);
// 				}}
// 				onChange={(event, editor) => {
// 					// do something when editor's content changed
// 					const data = editor.getData();
// 					console.log({ event, editor, data });
// 				}}
// 				onBlur={(event, editor) => {
// 					console.log("Blur.", editor);
// 				}}
// 				onFocus={(event, editor) => {
// 					console.log("Focus.", editor);
// 				}}
// 				onUploadFile={() => {
// 					console.log("uploading");
// 				}}
// 			/>
// 		);
// 	} else {
// 		return <h2> Editor is loading </h2>;
// 	}
// }

// export default Editor;

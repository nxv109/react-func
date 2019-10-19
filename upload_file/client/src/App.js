import React from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "./App.css";

// console.log(ClassicEditor.builtinPlugins.map( plugin => plugin.pluginName ));

function App() {
  // axios.post('url', data)

  const hanldChange = data => {
    console.log("aaa", data);
  };

  return (
    <div className="App">
      <h2>Using CKEditor 5 build in React</h2>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        config={{
          image_previewText: "Image Preview",
          ckfinder: {
            uploadUrl: "/upload?command=QuickUpload&type=Files",
            openerMethod: "popup",
            filebrowserWindowWidth: "500"
            // resize: 500
          }
        }}
        onInit={editor => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          hanldChange(data);
          console.log("onChange", { event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
}

export default App;

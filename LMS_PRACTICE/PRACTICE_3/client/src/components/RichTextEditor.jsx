import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const RichTextEditor = ({ input, setInput }) => {
  const handleEditorChange = (content, editor) => {
    setInput({ ...input, description: content });
  };

  return (
    <Editor
      apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
      value={input.description}
      onEditorChange={handleEditorChange}
      init={{
        height: 400,
        menubar: false,
        plugins: ['advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview'],
        
        toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | link image',
      }}
    />
  );
};

export default RichTextEditor;

import React, { useState, useRef} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Button } from '@mui/material';

export default function EditorAnswer(props) {
  const editorRef = useRef(null);
  const [text, setText] = useState('');
  return (
    <>
      <Editor
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>Anda tahu jawabannya? anda bisa jawab pertanyaan disini.</p>"
        apiKey="4oee9r0rbkxf1zqbe47piy5yeax48b6itu7wd1r9arq7wqyj"
        onEditorChange={(newText) => setText(newText)}
        init={{
          height: 280,
          menubar: false,
          plugins: [
            'codesample advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code codesample fullscreen',
            'insertdatetime media table paste code help wordcount',
            'codesample',
            'lists',
            'table',
            'hr',
          ],
          toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor codesample | fontsize alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat table hr| help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          block_formats: 'Paragraph=p;Header 1=h1;Header 2=h2;Header 3=h3',
          font_size_formats: '10px 12px 14px 16px 18px 20px 24px 36px',
        }}
      />
      <div dangerouslySetInnerHTML={{__html: text}} />
      <div className="action">
        <Button variant="contained">Posting Pertanyaan</Button>
      </div>
    </>
  )
}
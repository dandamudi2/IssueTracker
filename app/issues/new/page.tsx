'use client'
import { TextField ,Button} from '@radix-ui/themes'
import   SimpleMde  from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";


const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root>
      <TextField.Input placeholder="title" /> 
      </TextField.Root>
      <SimpleMde placeholder="description" />
      <Button>Submit New Issue</Button>
    </div>
  )
}
 
export default NewIssuePage

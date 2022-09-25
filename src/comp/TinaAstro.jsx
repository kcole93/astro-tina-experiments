import { TinaAdmin } from "tinacms";
import TinaProvider from '.tina/components/TinaProvider'
import { TinaEditProvider } from 'tinacms/dist/edit-state'

export default (props) => {
  const branch = "main";
  const clientId = "a1d0abca-75e7-4c27-83fd-601f43de1a49";
  const apiURL =
    process.env.NODE_ENV == "development"
      ? "http://localhost:4001/graphql"
      : `https://content.tinajs.io/content/${clientId}/github/${branch}`;
  return (
     
       <TinaEditProvider
      editMode={
        <TinaProvider apiURL={apiURL}>
          <TinaAdmin />
        </TinaProvider>
      }
    >
      <div>Need to be in edit mode!</div>
    </TinaEditProvider>
    
    
  )
}
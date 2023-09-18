import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{height:'100%'}}>
      <PrettyChatWindow
        projectId='46306d73-dec8-4a6e-a4b7-10b4c188b324'
        username={props.user.username}
        secret={props.user.secret}
        style={{height:'100%'}}
      />
    </div>
  );
};

export default ChatsPage;
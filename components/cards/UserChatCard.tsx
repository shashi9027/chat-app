import User from "./Avatar";


export default function UserChatCard() {
  return (
    <div data-component="chat-card" >
      <div className="chatcard mt-5 flex justify-between ">
        <div className="flex gap-3">
          <div className="relative">
          <User width={45} height={45} />
          <div className="green-dot"/>
          </div>
          <div>
          <div className="font-bold">Pink Panda</div>
          <div>You: thnx!</div>
          </div>
        </div>
        <div className="font-medium color-grey">09:36</div>
      </div>
    </div>
  )
}


import Message from "./conversation/Message";
export default function ConversationScreen(menu:boolean) {
    return (
        <Message menu={menu} />
    )
}
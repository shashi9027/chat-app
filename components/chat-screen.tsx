import Image from "next/image"

export default function ChatScreen(){
    return(
        <div className="w-full h-lvh flex justify-center items-center">
            <Image width={200} height={200}  src="/chat-first-screen.png" alt="chat-screen"/>
        </div>
    )
}
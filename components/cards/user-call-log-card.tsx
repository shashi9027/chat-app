import { Phone } from "@phosphor-icons/react/dist/ssr/Phone";
import User from "./avatar";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";


export default function UserLogCard() {
  return (
    <div data-component="chat-card" >
      <div className="chatcard mt-5 flex justify-between ">
        <div className="flex gap-3">
          <div>
          <User width={45} height={45} />
          </div>
          <div>
          <div className="font-bold">Dinesh</div>
          <div className="flex items-center gap-3"><ArrowUpRight size={18} color="green"/> <div>Yesterday, 21:29</div></div>
          </div>
        </div>
         <Phone size={25} color="green"/>
      </div>
    </div>
  )
}


import Avatar from '@mui/material/Avatar';

type UserProps={
    width: number,
    height: number
}

export default function User({width, height}:UserProps){
    return (
        <div>
            <Avatar sx={{width: {width}, height: {height}}} alt="Cindy Baker" src="https://i.pravatar.cc/150?img=3" />
        </div>
    )
}
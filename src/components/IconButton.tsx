import { SocialIcon } from 'react-social-icons';

interface IconButtonProps {
  u: string;
}

function IconButton({ u }: IconButtonProps) {
  return (
    <SocialIcon url={u}  
    style={{
        height: 40,
        width: 40,
        border: "1px solid",
        borderRadius: 0,
    }}
    className="
            text-black dark:text-white
            hover:bg-black hover:text-white
            dark:hover:bg-white dark:hover:text-black
            transition
          "
    />
  )
}

export default IconButton
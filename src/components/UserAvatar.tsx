import * as Avatar from "@radix-ui/react-avatar";
const UserAvatar = ({ img }: { img: string }) => (
  <Avatar.Root className="bg-transparent transition inline-flex align-middle justify-center items-center rounded-full w-12 h-12 overflow-hidden select-none hover:bg-Orange">
    <Avatar.Image src={img} className="w-11 h-11 object-cover rounded-full" />
    <Avatar.Fallback />
  </Avatar.Root>
);

export default UserAvatar;

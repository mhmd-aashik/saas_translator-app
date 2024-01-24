import React from "react";
import { Button } from "./ui/button";
import { MessageSquarePlus } from "lucide-react";

const CreateChatButton = () => {
  return (
    <Button variant="ghost">
      <MessageSquarePlus className="ml-0.5 text-black dark:text-white" />
    </Button>
  );
};

export default CreateChatButton;

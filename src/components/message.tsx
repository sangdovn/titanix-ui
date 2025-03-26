import { cn } from "@/lib/utils";
import { UIMessage } from "ai";
import equal from "fast-deep-equal";
import { AnimatePresence, motion } from "framer-motion";
import { memo } from "react";

function PureMessagePreview({
  message,
  isLoading,
}: {
  message: UIMessage;
  isLoading: boolean;
}) {
  return (
    <AnimatePresence>
      <motion.div
        key={message.id}
        className="group/message mx-auto w-full max-w-3xl px-4"
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        data-role={message.role}
      >
        <div className="w-full group-data-[role=user]/message:ml-auto group-data-[role=user]/message:w-fit group-data-[role=user]/message:max-w-2xl">
          {message.parts?.map((part, index) => {
            const { type } = part;
            const key = `message-${message.id}-part-${index}`;

            if (type === "text") {
              return (
                <div
                  key={key}
                  className={cn(
                    message.role === "user" &&
                      "bg-primary text-primary-foreground rounded-xl px-3 py-2"
                  )}
                >
                  <div className="">{part.text}</div>
                </div>
              );
            }
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export const MessagePreview = memo(PureMessagePreview, (prevProps, nextProps) => {
  if (prevProps.isLoading !== nextProps.isLoading) return false;
  if (prevProps.message.id !== nextProps.message.id) return false;
  if (!equal(prevProps.message.parts, nextProps.message.parts)) return false;
  return true;
});

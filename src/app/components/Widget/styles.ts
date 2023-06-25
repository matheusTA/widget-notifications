import tw from "tailwind-styled-components";

export const Container = tw.div`
	w-[448px]
	rounded
	overflow-hidden
`;

export const Header = tw.div`
	bg-zinc-200
	dark:bg-zinc-800
	py-4
	px-6
	flex
	items-center
	justify-between
`;

export const HeaderTitle = tw.span`
	font-bold
`;

export const HeaderButton = tw.button`
	text-xs
	font-bold
	text-violet-600
	hover:text-violet-400
`;

export const DividerSection = tw.div`
	px-5
	py-2
	text-sm
	bg-zinc-300
	dark:bg-zinc-950
	text-zinc-500
	dark:text-zinc-400
`;

export const NotificationList = tw.div`
	divide-y-2
	divide-zinc-300
	dark:divide-zinc-950
`;

export const Notification = tw.div`
	flex
	items-start
	gap-6
	bg-zinc-200
	dark:bg-zinc-900
	px-8
	py-4
`;

export const NotificationIconContainer = tw.div`
	mt-3
`;

export const NotificationContent = tw.div`
	flex-1
	flex
	flex-col
	gap-1
`;

interface NotificationMessageProps {
  $isNew: boolean;
}

export const NotificationMessage = tw.p<NotificationMessageProps>`
	text-sm
	leading-relaxed
	${(p) => (p.$isNew ? "text-zinc-600" : "text-zinc-400")}
	${(p) => (p.$isNew ? "dark:text-zinc-100" : "dark:text-zinc-400")}
`;

export const NotificationTime = tw.span`
	text-xs
	text-zinc-400
`;

export const NotificationActionsContainer = tw.div`
	flex
	gap-2
	self-center
`;

interface NotificationActionProps {
  $isPrimary: boolean;
}

export const NotificationAction = tw.button<NotificationActionProps>`
	w-8
	h-8
	rounded
	flex
	items-center
	justify-center
	${(p) => (p.$isPrimary ? "bg-violet-500" : "bg-zinc-400")}
	${(p) => (p.$isPrimary ? "hover:bg-violet-600" : "hover:bg-zinc-500")}
	${(p) => !p.$isPrimary && "dark:bg-zinc-800"}
	${(p) => !p.$isPrimary && "dark:hover:bg-zinc-700"}
`;

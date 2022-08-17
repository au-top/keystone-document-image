/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@keystone-ui/core";
import { BigImageItem as BigImageItemType } from "../";
export default function BigImageDrawer({ listKey, isOpen, onCancel, onChange, }: {
    listKey: string;
    isOpen: boolean;
    onCancel(): void;
    onChange(items: BigImageItemType[]): void;
}): jsx.JSX.Element;

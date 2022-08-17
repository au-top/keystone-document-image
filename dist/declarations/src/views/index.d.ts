/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@keystone-ui/core";
import { BigImageItem as BigImageItemFields } from "../";
export declare const BigImageItem: ({ onClick, onRemove, item, checked, }: {
    onClick?(value: BigImageItemFields): void;
    onRemove?(value: BigImageItemFields): void;
    item: BigImageItemFields;
    checked?: boolean;
}) => jsx.JSX.Element;
export declare const BigImageItemPlaceholder: ({ children, onClick, }: {
    children?: any;
    onClick?(): void;
}) => jsx.JSX.Element;
export declare const BigImageItemsWrapper: ({ children }: {
    children: any;
}) => jsx.JSX.Element;
export declare const BigImageView: ({ listKey, value, onChange, }: {
    listKey: string;
    value: BigImageItemFields[];
    onChange(value: BigImageItemFields[]): void;
}) => jsx.JSX.Element;

/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useState } from "react";
import { jsx } from "@keystone-ui/core";
import { Checkbox } from "@keystone-ui/fields";
import { Button } from "@keystone-ui/button";

import { BigImageItem as BigImageItemFields } from "../";
import BigImageDrawer from "./drawer";

export const BigImageItem = ({
    onClick,
    onRemove,
    item,
    checked = false,
}: {
    onClick?(value: BigImageItemFields): void;
    onRemove?(value: BigImageItemFields): void;
    item: BigImageItemFields;
    checked?: boolean;
}) => {
    return (
        <div
            css={{
                margin: "10px 0 ",
                backgroundColor: "#e1e5e9",
                borderRadius: "8px",
                paddingBottom: "56.25%",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
            }}
            onClick={() => onClick?.(item)}
        >
            {onClick && (
                <div
                    css={{
                        position: "absolute",
                        zIndex: "1",
                        margin: "10px",
                        right: "0",
                    }}
                >
                    <Checkbox checked={checked} readOnly={true}>
                        {}
                    </Checkbox>
                </div>
            )}
            {onRemove && (
                <div
                    css={{
                        position: "absolute",
                        zIndex: "1",
                        margin: "10px",
                        right: "0",
                    }}
                >
                    <Button
                        size="small"
                        tone="negative"
                        onClick={() => onRemove(item)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </Button>
                </div>
            )}
            <img
                css={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                }}
                src={item.image.url}
                alt={item.id}
            />
        </div>
    );
};

export const BigImageItemPlaceholder = ({
    children,
    onClick,
}: {
    children?: any;
    onClick?(): void;
}) => {
    return (
        <div
            onClick={() => onClick?.()}
            css={{
                backgroundColor: "#e1e5e9",
                borderRadius: "8px",
                paddingBottom: "56.25%",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {children}
        </div>
    );
};

export const BigImageItemsWrapper = ({ children }) => {
    return (
        <div
            css={{
                display: "block",
                margin: "10px 10px",
            }}
        >
            {children}
        </div>
    );
};

export const BigImageView = ({
    listKey,
    value,
    onChange,
}: {
    listKey: string;
    value: BigImageItemFields[];
    onChange(value: BigImageItemFields[]): void;
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const removeImage = (item: BigImageItemFields) => {
        onChange(value.filter((i) => i.id !== item.id));
    };

    const addImages = (items: BigImageItemFields[]) => {
        const valueIds = value.map((i) => i.id);
        const newItems = items.filter((item) => !valueIds.includes(item.id));
        onChange([...value, ...newItems]);
    };

    const listItems = value.map((item: BigImageItemFields) => {
        return (
            <BigImageItem
                key={item.id}
                item={item}
                checked={false}
                onRemove={(item) => removeImage(item)}
            />
        );
    });

    return (
        <div>
            {value.length > 0 ? (
                <BigImageItemsWrapper>{listItems}</BigImageItemsWrapper>
            ) : (
                <BigImageItemsWrapper>
                    <BigImageItemPlaceholder />
                </BigImageItemsWrapper>
            )}
            <Button onClick={() => setIsModalOpen(true)}>
                <span>添加图片</span>
            </Button>
            <BigImageDrawer
                listKey={listKey}
                isOpen={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                onChange={(items) => addImages(items)}
            />
        </div>
    );
};

import React from "react";
import {
  NotEditable,
  component,
  fields,
  FormField,
} from "@keystone-6/fields-document/component-blocks";

import { FieldContainer } from "@keystone-ui/fields";
import {
  BigImageView,
  BigImageItem,
  BigImageItemsWrapper,
  BigImageItemPlaceholder,
} from "./views";

export type ImageData = {
  height: number;
  width: number;
  filesize: number;
  extension: string;
  id: string;
  url: string;
};

export type BigImageItem = {
  id: string;
  name: string;
  image: ImageData;
};

const customFields = {
  BigImage<Option extends { label: string; value: BigImageItem }>({
    listKey,
    defaultValue = [],
  }: {
    listKey: string;
    defaultValue?: Option["value"][];
  }): FormField<Option["value"][], undefined> {
    return {
      kind: "form",
      Input({ value, onChange, autoFocus }) {
        return (
          <FieldContainer>
            <BigImageView
              listKey={listKey}
              value={value}
              onChange={(items) => onChange(items)}
            />
          </FieldContainer>
        );
      },
      options: undefined,
      defaultValue,
      validate(value) {
        return typeof value === "object";
      },
    };
  },
};

export const BigImage = ({ listKey }: { listKey: string }) => {
  return component({
    preview: (props) => {
      return (
        <div>
          <NotEditable>
            {props.fields.items.value.length > 0 ? (
              <BigImageItemsWrapper>
                {props.fields.items.value.map((image) => {
                  return <BigImageItem key={image.id} item={image} />;
                })}
              </BigImageItemsWrapper>
            ) : (
              <BigImageItemsWrapper>
                <BigImageItemPlaceholder />
              </BigImageItemsWrapper>
            )}
          </NotEditable>
          <div
            style={{
              borderLeft: "3px solid #CBD5E0",
              paddingLeft: 16,
            }}
          >
            <div style={{ fontStyle: "italic", color: "#4A5568" }}>
              {props.fields.capture.element}
            </div>
          </div>
        </div>
      );
    },
    label: "BigImage",
    schema: {
      items: customFields.BigImage({
        listKey,
      }),
      capture: fields.child({
        kind: "block",
        placeholder: "说明...",
        formatting: { inlineMarks: "inherit", softBreaks: "inherit" },
        links: "inherit",
      }),
    },
    chromeless: false,
  });
};

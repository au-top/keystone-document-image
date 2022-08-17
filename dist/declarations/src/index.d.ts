import { FormField } from "@keystone-6/fields-document/component-blocks";
export declare type ImageData = {
    height: number;
    width: number;
    filesize: number;
    extension: string;
    id: string;
    url: string;
};
export declare type BigImageItem = {
    id: string;
    name: string;
    image: ImageData;
};
export declare const BigImage: ({ listKey }: {
    listKey: string;
}) => import("@keystone-6/fields-document/component-blocks").ComponentBlock<{
    items: FormField<BigImageItem[], undefined>;
    capture: import("@keystone-6/fields-document/component-blocks").ChildField;
}>;
